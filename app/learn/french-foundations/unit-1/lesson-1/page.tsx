import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Bonjour", back: "Hello / Good morning", subtext: "Use during the day, safe in any situation." },
  { front: "Salut", back: "Hi / Bye", subtext: "Casual, use with friends and classmates." },
  { front: "Bonsoir", back: "Good evening", subtext: "Use later in the day." },
  { front: "Au revoir", back: "Goodbye", subtext: "Standard and polite." },
  { front: "À bientôt", back: "See you soon", subtext: "When you'll see the person again shortly." },
  { front: "Merci", back: "Thank you", subtext: "Works in every situation." },
];

const matchPairs = [
  { left: "Bonjour", right: "Hello" },
  { left: "Salut", right: "Hi (casual)" },
  { left: "Au revoir", right: "Goodbye" },
  { left: "Merci", right: "Thank you" },
  { left: "Bonsoir", right: "Good evening" },
  { left: "À bientôt", right: "See you soon" },
];

const quiz = [
  {
    question: "You walk into school in the morning. What's the safest greeting?",
    options: ["Salut", "Bonjour", "Bonsoir", "Au revoir"],
    correct: 1,
    explanation: "Bonjour works in any daytime situation, formal or casual.",
  },
  {
    question: "Your friend texts you 'Salut!', what does that mean?",
    options: ["Goodbye", "Good evening", "Hi", "Thank you"],
    correct: 2,
    explanation: "Salut is a casual greeting, like 'hey' or 'hi' in English.",
  },
  {
    question: "Which phrase do you use when leaving a store?",
    options: ["Bonjour", "Merci", "Au revoir", "À bientôt"],
    correct: 2,
    explanation: "Au revoir is the standard, polite way to say goodbye.",
  },
  {
    question: "It is 7 pm and you arrive at a dinner party. What do you say?",
    options: ["Bonjour", "Salut", "Bonsoir", "À bientôt"],
    correct: 2,
    explanation: "Bonsoir replaces Bonjour once it's evening.",
  },
];

export default function Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Breadcrumb */}
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        {/* Header */}
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Greetings
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Six essential words that open every French conversation. Start
              here, you'll use these forever.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Use <span className="font-black text-white">bonjour</span> when
                you want to be polite. Use{" "}
                <span className="font-black text-white">salut</span> when things
                are casual.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Quick conversation</p>
              <div className="mt-3 space-y-2">
                <p className="text-lg font-black">Bonjour!</p>
                <p className="text-lg font-black">Bonjour! Au revoir!</p>
                <p className="text-sm text-[#526173]">Hello! · Hello! Goodbye!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Mark each one when you know it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Greetings & farewells" />
          </div>
        </section>

        {/* Match pairs */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Click a French word on the left, then its English translation on the right.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="French → English" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four situations, pick the right greeting for each one.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Greetings quiz" />
          </div>
        </section>

        {/* Lesson complete */}
        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You know your first French greetings.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next up: how to introduce yourself, your name, age, and where
            you're from.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              Back to course
            </Link>
            <Link
              href="/learn/french-foundations/unit-1/lesson-2"
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
