"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export default function MultipleChoiceQuiz({
  questions,
  title,
}: {
  questions: Question[];
  title?: string;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [animClass, setAnimClass] = useState("");

  const q = questions[index];
  const isCorrect = selected === q.correct;

  function handleSelect(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === q.correct) {
      setScore((s) => s + 1);
      setAnimClass("pop");
    } else {
      setAnimClass("shake");
    }
    setTimeout(() => setAnimClass(""), 500);
  }

  function handleNext() {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
      setSubmitted(false);
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className={`rounded-3xl border border-[#E7DAB9] bg-white p-8 text-center shadow-sm ${animClass}`}>
        <div className="text-5xl">{pct === 100 ? "🏆" : pct >= 70 ? "🎯" : "📚"}</div>
        <h3 className="mt-4 text-2xl font-black text-[#0B1F3A]">
          {score} out of {questions.length}
        </h3>
        <p className="mt-2 text-[#526173]">
          {pct === 100
            ? "Perfect score — you nailed it!"
            : pct >= 70
            ? "Solid! Review the ones you missed."
            : "Keep practising — you're getting there."}
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
            {index + 1} / {questions.length}
          </p>
        </div>
      )}

      {/* Progress */}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E7DAB9]">
        <div
          className="h-full rounded-full bg-[#2563EB] transition-all duration-500"
          style={{ width: `${((index) / questions.length) * 100}%` }}
        />
      </div>

      <div className={`rounded-3xl border border-[#E7DAB9] bg-white p-6 shadow-sm ${animClass}`}>
        <p className="text-lg font-black text-[#0B1F3A]">{q.question}</p>

        <div className="mt-4 space-y-2">
          {q.options.map((opt, i) => {
            let cls =
              "w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ";
            if (!submitted) {
              cls +=
                selected === i
                  ? "border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]"
                  : "border-[#E7DAB9] bg-[#FFF8ED] text-[#0B1F3A] hover:border-[#C9A44C]";
            } else {
              if (i === q.correct) {
                cls += "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]";
              } else if (i === selected) {
                cls += "border-[#DC2626] bg-[#FEF2F2] text-[#DC2626]";
              } else {
                cls += "border-[#E7DAB9] bg-white text-[#526173] opacity-60";
              }
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)}>
                <span className="mr-2 font-black">
                  {["A", "B", "C", "D"][i]}.
                </span>
                {opt}
                {submitted && i === q.correct && " ✓"}
                {submitted && i === selected && i !== q.correct && " ✗"}
              </button>
            );
          })}
        </div>

        {submitted && q.explanation && (
          <div className="mt-4 rounded-2xl bg-[#FFF8ED] p-4 text-sm text-[#526173]">
            💡 {q.explanation}
          </div>
        )}

        <div className="mt-5 flex justify-end gap-2">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              disabled={selected === null}
              className="rounded-full bg-[#2563EB] px-5 py-2 text-sm font-black text-white transition hover:bg-[#1D4ED8] disabled:opacity-40"
            >
              Check
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="rounded-full bg-[#0B1F3A] px-5 py-2 text-sm font-black text-white transition hover:bg-[#15345f]"
            >
              {index + 1 >= questions.length ? "See results →" : "Next →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
