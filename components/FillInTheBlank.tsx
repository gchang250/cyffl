"use client";

import { useState } from "react";

interface Exercise {
  before: string;
  after: string;
  answer: string;
  hint?: string;
  translation?: string;
}

export default function FillInTheBlank({
  exercises,
  title,
}: {
  exercises: Exercise[];
  title?: string;
}) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [animClass, setAnimClass] = useState("");

  const ex = exercises[index];

  function normalize(s: string) {
    return s.trim().toLowerCase();
  }

  function handleCheck() {
    if (!value.trim()) return;
    const isCorrect = normalize(value) === normalize(ex.answer);
    setCorrect(isCorrect);
    setSubmitted(true);
    if (isCorrect) {
      setScore((s) => s + 1);
      setAnimClass("pop");
    } else {
      setAnimClass("shake");
    }
    setTimeout(() => setAnimClass(""), 500);
  }

  function handleNext() {
    if (index + 1 >= exercises.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setValue("");
      setSubmitted(false);
    }
  }

  function restart() {
    setIndex(0);
    setValue("");
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <div className="rounded-3xl border border-[#E7DAB9] bg-white p-8 text-center shadow-sm">
        <div className="text-5xl">{pct === 100 ? "✨" : pct >= 70 ? "👍" : "💪"}</div>
        <h3 className="mt-4 text-2xl font-black text-[#0B1F3A]">
          {score} / {exercises.length} correct
        </h3>
        <p className="mt-2 text-[#526173]">
          {pct === 100
            ? "Flawless! You really know this."
            : "Keep at it, every attempt builds memory."}
        </p>
        <button
          onClick={restart}
          className="mt-6 rounded-full bg-[#2563EB] px-6 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
        >
          Try again
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
            {index + 1} / {exercises.length}
          </p>
        </div>
      )}

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E7DAB9]">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
          style={{ width: `${(index / exercises.length) * 100}%` }}
        />
      </div>

      <div className={`rounded-3xl border border-[#E7DAB9] bg-white p-6 shadow-sm ${animClass}`}>
        {ex.hint && (
          <p className="mb-3 text-xs font-semibold text-[#526173]">
            Hint: {ex.hint}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-2xl font-black text-[#0B1F3A]">
          <span>{ex.before}</span>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !submitted && handleCheck()}
            disabled={submitted}
            placeholder="___"
            className={`w-36 rounded-xl border-2 px-3 py-1 text-center text-xl font-black outline-none transition ${
              !submitted
                ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] placeholder:text-[#93C5FD]"
                : correct
                ? "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]"
                : "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626]"
            }`}
          />
          <span>{ex.after}</span>
        </div>

        {ex.translation && (
          <p className="mt-2 text-sm text-[#526173]">{ex.translation}</p>
        )}

        {submitted && (
          <div
            className={`mt-4 rounded-2xl px-4 py-3 text-sm font-semibold ${
              correct
                ? "bg-[#F0FDF4] text-[#16A34A]"
                : "bg-[#FEF2F2] text-[#DC2626]"
            }`}
          >
            {correct ? (
              <>✓ Correct! <span className="font-black">{ex.answer}</span></>
            ) : (
              <>✗ The answer is <span className="font-black">{ex.answer}</span></>
            )}
          </div>
        )}

        <div className="mt-5 flex justify-end">
          {!submitted ? (
            <button
              onClick={handleCheck}
              disabled={!value.trim()}
              className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-black text-white transition hover:bg-[#1D4ED8] disabled:opacity-40"
            >
              Check
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="rounded-full bg-[#0B1F3A] px-5 py-2 text-sm font-black text-white transition hover:bg-[#15345f]"
            >
              {index + 1 >= exercises.length ? "Finish →" : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
