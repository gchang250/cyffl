import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "SLE", back: "Second Language Evaluation", subtext: "The federal government's official French proficiency test, administered by the Public Service Commission (PSC). Required for all bilingual positions." },
  { front: "Niveau A", back: "Level A — Basic", subtext: "Can communicate in simple, familiar situations. Understands short, clear texts. The minimum level — many positions require B or C." },
  { front: "Niveau B", back: "Level B — Intermediate", subtext: "Can understand and produce most government texts and conversations with some complexity. The most common requirement for bilingual positions." },
  { front: "Niveau C", back: "Level C — Advanced", subtext: "Full professional proficiency. Can handle complex, abstract, and specialized texts and conversations. Required for senior or supervisory roles." },
  { front: "le profil linguistique", back: "language profile", subtext: "A three-letter code showing required levels for Reading, Writing, and Oral Interaction in that order. Example: CBC = C in reading, B in writing, C in oral." },
  { front: "la Commission de la fonction publique", back: "Public Service Commission (PSC)", subtext: "The federal body that administers the SLE. Tests are booked through the PSC — not IRCC or other departments." },
  { front: "exempté(e)", back: "exempt", subtext: "A designation meaning your first language is French or you've already demonstrated proficiency. Exempt employees don't need to take the SLE." },
  { front: "la compréhension de l'écrit", back: "reading comprehension", subtext: "The SLE reading test. Multiple-choice questions on texts from government documents, memos, reports, and articles." },
  { front: "l'expression écrite", back: "writing", subtext: "The SLE writing test. Two parts: editing a document for errors, and producing a short text (memo, email, or report) from scratch." },
  { front: "l'interaction orale", back: "oral interaction", subtext: "The SLE oral test. A live assessment with a trained evaluator — tasks include explaining a situation, giving directions, and discussion." },
];

const matchPairs = [
  { left: "SLE", right: "Second Language Evaluation" },
  { left: "Niveau B", right: "Intermediate — most common requirement" },
  { left: "Niveau C", right: "Advanced — senior/supervisory roles" },
  { left: "le profil linguistique", right: "three-letter level code (e.g. CBC)" },
  { left: "exempté(e)", right: "no SLE required" },
  { left: "l'interaction orale", right: "live oral test with an evaluator" },
];

const quiz = [
  {
    question: "Who administers the Second Language Evaluation (SLE)?",
    options: [
      "Immigration, Refugees and Citizenship Canada (IRCC)",
      "The Public Service Commission (PSC)",
      "The Treasury Board of Canada",
      "Alliance française",
    ],
    correct: 1,
    explanation: "The PSC (Public Service Commission) administers the SLE for federal government bilingual positions. IRCC handles immigration tests like the TEF Canada.",
  },
  {
    question: "A federal job posting says the language profile is 'CBC.' What does this mean?",
    options: [
      "C in writing, B in reading, C in oral",
      "C in reading, B in writing, C in oral interaction",
      "B in all three tests",
      "C in all three tests",
    ],
    correct: 1,
    explanation: "The profile letters go in order: Reading / Writing / Oral Interaction. CBC = C (reading), B (writing), C (oral). Most supervisory roles require this profile.",
  },
  {
    question: "What is the most common language profile required for bilingual federal positions?",
    options: ["AAA", "BBB", "CBC", "CCC"],
    correct: 1,
    explanation: "BBB is the most common requirement — Level B in reading, writing, and oral interaction. Senior or supervisory roles often require CBC or CCC.",
  },
  {
    question: "Which of the three SLE tests requires you to produce a memo, email, or report from scratch?",
    options: [
      "Reading comprehension (compréhension de l'écrit)",
      "Oral interaction (interaction orale)",
      "Writing (expression écrite)",
      "None — the SLE is all multiple choice",
    ],
    correct: 2,
    explanation: "The writing test (expression écrite) has two parts: Part A is editing a document for errors, Part B requires you to produce a short written text — a memo, email, or brief report.",
  },
  {
    question: "An employee marked 'exempté(e)' for French means:",
    options: [
      "They failed the SLE and must retake it",
      "They are excused from French duties",
      "Their first language is French or they already have confirmed proficiency — no SLE required",
      "They need Level A only",
    ],
    correct: 2,
    explanation: "Exempt employees are typically native French speakers or people who have already demonstrated proficiency through previous testing. They do not need to take the SLE.",
  },
];

export default function SLELesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              What is the SLE?
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The Second Language Evaluation is how the federal government measures French proficiency for bilingual positions. Understanding the format and levels before you walk in is half the battle.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                The SLE has{" "}
                <span className="font-black text-white">three separate tests</span>: reading, writing, and oral interaction — each graded independently as A, B, or C. The job posting tells you what profile you need.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">The three tests</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Reading</strong> → multiple choice on government texts</p>
                <p><strong>Writing</strong> → edit a document + write from scratch</p>
                <p><strong>Oral</strong> → live interaction with a trained evaluator</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the SLE terminology before your test.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE — format & levels" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each SLE term to its correct meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="SLE terminology" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your knowledge of the SLE format, levels, and profiles.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="SLE format quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D97706]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">SLE format locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: strategies for the SLE reading comprehension test.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
