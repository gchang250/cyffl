"use client";

import { useState, useCallback } from "react";

interface Props {
  text: string;
  size?: "sm" | "md";
}

export default function SpeakButton({ text, size = "md" }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const [unsupported, setUnsupported] = useState(false);

  const speak = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setUnsupported(true);
      return;
    }

    // Cancel any in-progress speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    utterance.rate = 0.85;   // slightly slower — better for learners
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text]);

  if (unsupported) return null;

  const sizeClasses = size === "sm"
    ? "h-6 w-6 text-xs"
    : "h-8 w-8 text-sm";

  return (
    <button
      onClick={(e) => { e.stopPropagation(); speak(); }}
      title={`Pronounce: ${text}`}
      aria-label={`Hear pronunciation of ${text}`}
      className={`${sizeClasses} inline-flex shrink-0 items-center justify-center rounded-full border border-[#E7DAB9] bg-white transition hover:border-[#2563EB] hover:text-[#2563EB] active:scale-95 ${
        speaking
          ? "border-[#2563EB] text-[#2563EB] animate-pulse"
          : "text-[#526173]"
      }`}
    >
      🔊
    </button>
  );
}
