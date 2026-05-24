"use client";

import { useState, useEffect } from "react";

interface Pair {
  left: string;
  right: string;
}

export default function MatchPairs({
  pairs,
  title,
}: {
  pairs: Pair[];
  title?: string;
}) {
  const [shuffledRight, setShuffledRight] = useState<string[]>(
    pairs.map((p) => p.right)
  );

  useEffect(() => {
    setShuffledRight([...pairs].map((p) => p.right).sort(() => Math.random() - 0.5));
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [rightMatched, setRightMatched] = useState<Set<number>>(new Set());
  const [wrongFlash, setWrongFlash] = useState<{ left: number; right: number } | null>(null);
  const [done, setDone] = useState(false);

  function handleLeft(i: number) {
    if (matched.has(i)) return;
    setSelectedLeft(i);
  }

  function handleRight(ri: number) {
    if (rightMatched.has(ri) || selectedLeft === null) return;

    const leftWord = pairs[selectedLeft].left;
    const correctRight = pairs[selectedLeft].right;
    const clickedRight = shuffledRight[ri];

    if (clickedRight === correctRight) {
      const newMatched = new Set(matched);
      newMatched.add(selectedLeft);
      const newRightMatched = new Set(rightMatched);
      newRightMatched.add(ri);
      setMatched(newMatched);
      setRightMatched(newRightMatched);
      setSelectedLeft(null);
      if (newMatched.size === pairs.length) {
        setDone(true);
      }
    } else {
      setWrongFlash({ left: selectedLeft, right: ri });
      setTimeout(() => {
        setWrongFlash(null);
        setSelectedLeft(null);
      }, 600);
    }
  }

  function restart() {
    setSelectedLeft(null);
    setMatched(new Set());
    setRightMatched(new Set());
    setWrongFlash(null);
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-[#E7DAB9] bg-white p-8 text-center shadow-sm">
        <div className="text-5xl">🎊</div>
        <h3 className="mt-4 text-2xl font-black text-[#0B1F3A]">
          All matched!
        </h3>
        <p className="mt-2 text-[#526173]">You connected every pair correctly.</p>
        <button
          onClick={restart}
          className="mt-6 rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
        >
          Play again
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
            {matched.size} / {pairs.length} matched
          </p>
        </div>
      )}

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E7DAB9]">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
          style={{ width: `${(matched.size / pairs.length) * 100}%` }}
        />
      </div>

      <p className="text-xs text-[#526173]">Click a French word, then click its English match.</p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column: French */}
        <div className="space-y-2">
          {pairs.map((pair, i) => {
            const isMatched = matched.has(i);
            const isSelected = selectedLeft === i;
            const isWrong = wrongFlash?.left === i;
            let cls =
              "w-full rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ";
            if (isMatched) {
              cls += "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]";
            } else if (isWrong) {
              cls += "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626] shake";
            } else if (isSelected) {
              cls += "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]";
            } else {
              cls += "border-[#E7DAB9] bg-[#FFF8ED] text-[#0B1F3A] hover:border-[#C9A44C] cursor-pointer";
            }
            return (
              <button key={i} className={cls} onClick={() => handleLeft(i)} disabled={isMatched}>
                {pair.left}
                {isMatched && " ✓"}
              </button>
            );
          })}
        </div>

        {/* Right column: English (shuffled) */}
        <div className="space-y-2">
          {shuffledRight.map((word, ri) => {
            const isMatched = rightMatched.has(ri);
            const isWrong = wrongFlash?.right === ri;
            let cls =
              "w-full rounded-2xl border px-4 py-3 text-left text-sm font-bold transition ";
            if (isMatched) {
              cls += "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]";
            } else if (isWrong) {
              cls += "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626] shake";
            } else if (selectedLeft !== null) {
              cls += "border-[#E7DAB9] bg-white text-[#0B1F3A] hover:border-[#C9A44C] cursor-pointer";
            } else {
              cls += "border-[#E7DAB9] bg-white text-[#526173]";
            }
            return (
              <button key={ri} className={cls} onClick={() => handleRight(ri)} disabled={isMatched}>
                {word}
                {isMatched && " ✓"}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
