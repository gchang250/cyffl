import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";

const numberCards = [
  { front: "0", back: "zéro" },
  { front: "1", back: "un / une" },
  { front: "2", back: "deux" },
  { front: "3", back: "trois" },
  { front: "4", back: "quatre" },
  { front: "5", back: "cinq" },
  { front: "6", back: "six" },
  { front: "7", back: "sept" },
  { front: "8", back: "huit" },
  { front: "9", back: "neuf" },
  { front: "10", back: "dix" },
  { front: "11", back: "onze" },
  { front: "12", back: "douze" },
  { front: "13", back: "treize" },
  { front: "14", back: "quatorze" },
  { front: "15", back: "quinze" },
  { front: "16", back: "seize" },
  { front: "17", back: "dix-sept" },
  { front: "18", back: "dix-huit" },
  { front: "19", back: "dix-neuf" },
  { front: "20", back: "vingt" },
];

const matchPairs = [
  { left: "5", right: "cinq" },
  { left: "8", right: "huit" },
  { left: "11", right: "onze" },
  { left: "14", right: "quatorze" },
  { left: "17", right: "dix-sept" },
  { left: "20", right: "vingt" },
];

const fillIn = [
  {
    before: "J'ai",
    after: "ans. (16)",
    answer: "seize",
    hint: "16",
    translation: "I am sixteen years old.",
  },
  {
    before: "Il y a",
    after: "élèves dans la classe. (12)",
    answer: "douze",
    hint: "12",
    translation: "There are twelve students in the class.",
  },
  {
    before: "Nous avons",
    after: "livres. (8)",
    answer: "huit",
    hint: "8",
    translation: "We have eight books.",
  },
  {
    before: "Tu as",
    after: "frères? (3)",
    answer: "trois",
    hint: "3",
    translation: "Do you have three brothers?",
  },
];

const quiz = [
  {
    question: "How do you say 15 in French?",
    options: ["seize", "cinq", "quinze", "quatorze"],
    correct: 2,
    explanation: "15 = quinze. Watch out: 16 = seize (they sound similar!).",
  },
  {
    question: "What is dix-sept?",
    options: ["17", "70", "16", "11"],
    correct: 0,
    explanation: "Dix = 10, sept = 7. Dix-sept = 10 + 7 = 17.",
  },
  {
    question: "How do you write the number 'onze'?",
    options: ["12", "10", "11", "13"],
    correct: 2,
    explanation: "Onze = 11. Douze = 12, treize = 13.",
  },
  {
    question: "Your French teacher asks 'Combien d'élèves?' There are 9 students. You say:",
    options: ["neuf", "huit", "dix", "six"],
    correct: 0,
    explanation: "Neuf = 9. It's also one of the trickier pronunciations — the 'f' is silent before a consonant!",
  },
];

export default function Unit3Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Numbers 1–20
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Numbers are everywhere — ages, grades, quantities, times. Learn
              0–20 and you'll be set for most everyday situations.
            </p>
          </div>

          {/* Number grid preview */}
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-xs font-bold text-[#526173]">0 – 10</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[
                ["0", "zéro"], ["1", "un"], ["2", "deux"], ["3", "trois"],
                ["4", "quatre"], ["5", "cinq"], ["6", "six"], ["7", "sept"],
                ["8", "huit"], ["9", "neuf"], ["10", "dix"],
              ].map(([n, fr]) => (
                <div key={n} className="rounded-xl bg-[#FFFDF7] p-2 text-center">
                  <p className="text-lg font-black">{n}</p>
                  <p className="text-xs text-[#526173]">{fr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pattern tip */}
        <div className="mt-8 rounded-2xl bg-[#FFFDF7] border border-[#E7DAB9] p-5">
          <p className="font-black">💡 Pattern for 17, 18, 19</p>
          <p className="mt-2 text-[#526173] leading-7">
            French adds "dix-" (ten) before sept, huit, neuf for 17, 18, 19.{" "}
            <span className="font-black text-[#0B1F3A]">dix-sept</span> (10+7),{" "}
            <span className="font-black text-[#0B1F3A]">dix-huit</span> (10+8),{" "}
            <span className="font-black text-[#0B1F3A]">dix-neuf</span> (10+9).
          </p>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the numbers</h2>
          <p className="mt-1 text-[#526173]">
            Flip each card — the digit is on the front, the French word is on the back.
          </p>
          <div className="mt-6">
            <FlashCardDeck cards={numberCards} title="Numbers 0–20" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the numbers</h2>
          <p className="mt-1 text-[#526173]">Connect the digit to its French spelling.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Number matching" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Spell out the number in French.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Numbers in sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions — think fast.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Numbers quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You can count from 0 to 20 in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the days of the week and months of the year — useful for
            dates, schedules, and everyday conversation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-2/lesson-4"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-3/lesson-2"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
