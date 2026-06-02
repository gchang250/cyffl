"use client";

import { useState } from "react";

interface Card {
  front: string;
  back: string;
  subtext?: string;
  ipa?: string;
}

export default function FlashCardDeck({ cards, title }: { cards: Card[]; title?: string }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);

  const card = cards[index];
  const progress = Math.round((known.size / cards.length) * 100);

  function next() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i + 1) % cards.length), 150);
  }
  function prev() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => (i - 1 + cards.length) % cards.length), 150);
  }
  function markKnown() {
    const next_known = new Set(known);
    next_known.add(index);
    setKnown(next_known);
    if (next_known.size === cards.length) {
      setDone(true);
    } else {
      next();
    }
  }
  function restart() {
    setKnown(new Set());
    setIndex(0);
    setFlipped(false);
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-[#E7DAB9] bg-white p-8 text-center shadow-sm">
        <div className="text-5xl">🎉</div>
        <h3 className="mt-4 text-2xl font-black text-[#0B1F3A]">
          You got all {cards.length}!
        </h3>
        <p className="mt-2 text-[#526173]">Nice work, you know this set cold.</p>
        <button
          onClick={restart}
          className="mt-6 rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
        >
          Go again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-[#526173]">{title}</p>
          <p className="text-sm font-bold text-[#526173]">
            {index + 1} / {cards.length}
          </p>
        </div>
      )}

      {/* Progress bar */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E7DAB9]">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Card */}
      <div
        className="relative cursor-pointer"
        style={{ perspective: "1000px", minHeight: "200px" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip-card-inner w-full ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div className="flip-card-face rounded-3xl bg-[#0B1F3A] p-8 text-center text-white shadow-md">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              French
            </p>
            <p className="mt-6 text-4xl font-black leading-tight">{card.front}</p>
            {card.ipa && (
              <p className="mt-2 font-mono text-sm text-white/50">{card.ipa}</p>
            )}
            <p className={`text-sm text-white/40 ${card.ipa ? "mt-6" : "mt-8"}`}>tap to flip</p>
          </div>

          {/* Back */}
          <div className="flip-card-back flip-card-face rounded-3xl border border-[#E7DAB9] bg-white p-8 text-center shadow-md">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              English
            </p>
            <p className="mt-6 text-4xl font-black text-[#0B1F3A] leading-tight">
              {card.back}
            </p>
            {card.subtext && (
              <p className="mt-4 text-sm text-[#526173]">{card.subtext}</p>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={prev}
          className="rounded-full border border-[#E7DAB9] bg-white px-4 py-2 text-sm font-bold text-[#526173] transition hover:border-[#C9A44C] hover:text-[#0B1F3A]"
        >
          ← Prev
        </button>

        <div className="flex gap-2">
          <button
            onClick={next}
            className="rounded-full border border-[#E7DAB9] bg-white px-4 py-2 text-sm font-bold text-[#526173] transition hover:border-[#C9A44C]"
          >
            Skip
          </button>
          <button
            onClick={markKnown}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              known.has(index)
                ? "bg-[#16A34A]/10 text-[#16A34A]"
                : "bg-[#16A34A] text-white hover:bg-[#15803D]"
            }`}
          >
            {known.has(index) ? "✓ Got it" : "Got it ✓"}
          </button>
        </div>

        <button
          onClick={next}
          className="rounded-full border border-[#E7DAB9] bg-white px-4 py-2 text-sm font-bold text-[#526173] transition hover:border-[#C9A44C] hover:text-[#0B1F3A]"
        >
          Next →
        </button>
      </div>

      <p className="text-center text-xs text-[#526173]">
        {known.size} of {cards.length} learned
      </p>
    </div>
  );
}
