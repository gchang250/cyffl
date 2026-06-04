import { NextRequest, NextResponse } from "next/server";

const VOICE_MAP: Record<string, { languageCode: string; name: string }> = {
  "fr-FR": { languageCode: "fr-FR", name: "fr-FR-Neural2-D" },
  "fr-CA": { languageCode: "fr-CA", name: "fr-CA-Neural2-A" },
  "en-CA": { languageCode: "en-CA", name: "en-CA-Neural2-A" },
};

export async function GET(req: NextRequest) {
  const text = req.nextUrl.searchParams.get("text");
  const lang = req.nextUrl.searchParams.get("lang") ?? "fr-FR";

  if (!text) {
    return NextResponse.json({ error: "text required" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_TTS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "TTS not configured" }, { status: 500 });
  }

  const voice = VOICE_MAP[lang] ?? VOICE_MAP["fr-FR"];

  const res = await fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: { text },
        voice,
        audioConfig: {
          audioEncoding: "MP3",
          speakingRate: 0.87,
          pitch: 0,
        },
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Google TTS error:", err);
    return NextResponse.json({ error: "TTS request failed" }, { status: 502 });
  }

  const data = await res.json();
  const audio = Buffer.from(data.audioContent as string, "base64");

  return new NextResponse(audio, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
