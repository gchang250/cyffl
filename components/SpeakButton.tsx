"use client";

import { useState, useCallback, useRef } from "react";

interface Props {
  text: string;
  lang?: string;
  size?: "sm" | "md";
}

// Module-level cache so audio URLs persist across re-renders and navigations
const audioCache = new Map<string, string>();

export default function SpeakButton({ text, lang = "fr-FR", size = "md" }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speak = useCallback(async () => {
    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    setSpeaking(true);
    setError(false);

    try {
      const cacheKey = `${lang}:${text}`;
      let url = audioCache.get(cacheKey);

      if (!url) {
        const res = await fetch(
          `/api/tts?text=${encodeURIComponent(text)}&lang=${encodeURIComponent(lang)}`
        );
        if (!res.ok) throw new Error(`TTS ${res.status}`);
        const blob = await res.blob();
        url = URL.createObjectURL(blob);
        audioCache.set(cacheKey, url);
      }

      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => setSpeaking(false);
      audio.onerror = () => { setSpeaking(false); setError(true); };
      await audio.play();
    } catch {
      setSpeaking(false);
      setError(true);
    }
  }, [text, lang]);

  if (error) return null;

  const sizeClasses = size === "sm" ? "h-6 w-6 text-xs" : "h-8 w-8 text-sm";

  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(); }}
      disabled={speaking}
      title={`Pronounce: ${text}`}
      aria-label={`Hear pronunciation of ${text}`}
      className={`${sizeClasses} inline-flex shrink-0 items-center justify-center rounded-full border border-[#E7DAB9] bg-white transition hover:border-[#2563EB] hover:text-[#2563EB] active:scale-95 disabled:cursor-wait ${
        speaking
          ? "border-[#2563EB] text-[#2563EB] animate-pulse"
          : "text-[#526173]"
      }`}
    >
      🔊
    </button>
  );
}
