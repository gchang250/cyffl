import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la préparation (15 min)", back: "15-minute preparation period", subtext: "You receive the image and have 15 minutes before the oral begins. Use all of it: identify theme, plan description, note vocabulary." },
  { front: "le stimulus visuel", back: "visual stimulus / image", subtext: "The photo or image you receive. It is always linked to one of the five IB themes and illustrates a global issue." },
  { front: "la problématique mondiale", back: "global issue", subtext: "The world problem the image illustrates — climate change, inequality, migration, etc. Identifying this is the core of the oral." },
  { front: "décrire", back: "to describe", subtext: "The first part of the oral. You describe what you see in the image — people, setting, actions." },
  { front: "analyser", back: "to analyse", subtext: "The second move. You explain what global issue the image represents and connect it to an IB theme." },
  { front: "le thème", back: "the theme", subtext: "One of the five IB themes. Name it explicitly: 'Cette image appartient au thème de Partager la planète.'" },
  { front: "l'interaction (f)", back: "interaction", subtext: "The examiner-led discussion phase. You must listen, respond, and develop ideas spontaneously — not give a prepared script." },
  { front: "les critères de notation", back: "marking criteria", subtext: "Criterion A: Language (10 pts). Criterion B: Message (10 pts). Criterion C: Interactive skills (10 pts). Total: 30 pts." },
  { front: "le registre oral", back: "spoken register", subtext: "More natural and conversational than written French. Contractions and spoken connectors (ben, donc, alors) are acceptable." },
  { front: "développer ses idées", back: "to develop / expand ideas", subtext: "Don't just answer 'oui' or 'non'. Develop every answer with an explanation, example, or personal connection." },
];

const matchPairs = [
  { left: "le stimulus visuel", right: "visual stimulus / image" },
  { left: "la problématique mondiale", right: "global issue" },
  { left: "décrire", right: "to describe" },
  { left: "analyser", right: "to analyse" },
  { left: "le thème", right: "the IB theme" },
  { left: "développer ses idées", right: "to develop / expand ideas" },
];

const quiz = [
  {
    question: "How long is the preparation period before the Individual Oral begins?",
    options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
    correct: 2,
    explanation: "You have 15 minutes of preparation. Use every minute: identify the theme, plan your description, note vocabulary and the global issue.",
  },
  {
    question: "The Individual Oral is worth what percentage of the IB French B SL final grade?",
    options: ["20%", "25%", "30%", "45%"],
    correct: 1,
    explanation: "The Individual Oral (IA) is worth 25% — the same as each other component: Paper 1 (Written Production), Paper 2A (Reading), and Paper 2B (Listening). Each is 25%.",
  },
  {
    question: "After describing the image, what should you do next?",
    options: ["Wait for the examiner to ask a question", "Name the IB theme and connect the image to a global issue", "Give your personal opinion on the image", "Summarise the image in one sentence"],
    correct: 1,
    explanation: "After the description, you must name the IB theme and explain what global issue the image illustrates. This is Criterion B — message.",
  },
  {
    question: "The examiner asks: 'Qu'est-ce que cette image vous inspire?' You should:",
    options: ["Recite your prepared notes exactly", "Give a one-word answer and wait", "Develop your response — explain, give an example, connect to your experience", "Ask the examiner to repeat the question"],
    correct: 2,
    explanation: "Criterion C (Interactive skills) rewards spontaneous, developed responses. Develop every answer — don't just give short replies.",
  },
  {
    question: "What are the three Individual Oral marking criteria?",
    options: ["Vocabulary, Grammar, Pronunciation", "Language, Message, Interactive skills", "Fluency, Accuracy, Content", "Description, Analysis, Conclusion"],
    correct: 1,
    explanation: "Criterion A: Language (10), Criterion B: Message (10), Criterion C: Interactive skills (10). Total = 30 points.",
  },
];

export default function Unit4Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 4 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Oral Structure & Preparation
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The Individual Oral is 25% of your grade. Understanding exactly what happens,
              in what order, and what examiners are marking changes everything.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                The oral has two phases:{" "}
                <span className="font-black text-white">your presentation</span> (describe + analyse
                the image), then{" "}
                <span className="font-black text-white">discussion</span> with the examiner.
                Don't script the second phase — it needs to feel natural.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IA structure</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Prep:</strong> 15 minutes (receive image)</p>
                <p><strong>Part 1:</strong> Describe + analyse (3–4 min)</p>
                <p><strong>Part 2:</strong> Discussion with examiner (6–9 min)</p>
                <p><strong>Total:</strong> 12–15 minutes</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the oral structure and terminology.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Oral structure & preparation — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each oral term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Oral vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your knowledge of the oral format and marking.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Oral structure quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Oral structure locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the language you need to describe images effectively.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
