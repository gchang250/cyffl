import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Vrai / Faux", back: "True / False", subtext: "The most common Paper 2 question type. State Vrai or Faux, then quote directly from the text to support your answer." },
  { front: "Justifiez avec le texte", back: "Support with the text", subtext: "After your Vrai/Faux answer, you must give a direct quote from the text. Copy the exact words — don't paraphrase." },
  { front: "Relevez…", back: "Find / Pick out…", subtext: "Find specific words or phrases directly in the text. Copy them exactly — word for word." },
  { front: "Selon le texte…", back: "According to the text…", subtext: "A reminder that your answer must come from the text, not from your own knowledge or assumptions." },
  { front: "l'idée principale", back: "the main idea", subtext: "What the whole text is really about. Often tested with a multiple-choice question at the start of a text." },
  { front: "le but du texte", back: "the purpose of the text", subtext: "Is it to inform? Persuade? Warn? Describe? Identifying purpose is a common question." },
  { front: "le public cible", back: "the target audience", subtext: "Who is this text written for? Look at the register, vocabulary, and context for clues." },
  { front: "le registre", back: "register / tone", subtext: "Formal or informal? Optimistic or critical? Register questions ask you to identify the style of the text." },
  { front: "Complétez les phrases…", back: "Complete the sentences…", subtext: "Another common format: complete a sentence using information from the text. Quote directly." },
  { front: "Choisissez la bonne réponse", back: "Choose the correct answer", subtext: "Multiple choice. Go back to the text for each option — don't rely on memory." },
];

const matchPairs = [
  { left: "Vrai / Faux", right: "True / False" },
  { left: "Justifiez avec le texte", right: "Support with the text" },
  { left: "Relevez…", right: "Find / Pick out…" },
  { left: "le but du texte", right: "the purpose of the text" },
  { left: "le public cible", right: "the target audience" },
  { left: "Complétez les phrases…", right: "Complete the sentences…" },
];

const quiz = [
  {
    question: "A Paper 2 question gives the statement: 'Le directeur est opposé au projet.' The text says: 'Le directeur a exprimé des réserves importantes concernant le projet.' What do you answer?",
    options: ["Vrai — because he expressed reservations", "Faux — the text says he expressed reservations, not that he was opposed", "Vrai — they mean the same thing", "On ne sait pas"],
    correct: 1,
    explanation: "Faux — 'expressed important reservations' is not the same as 'opposed'. The text does not use the word 'opposé'. Precision matters.",
  },
  {
    question: "After marking an answer as 'Vrai', what must you always do?",
    options: ["Explain the statement in your own words", "Quote directly from the text to justify your answer", "Translate the statement into English", "Write a full sentence summary"],
    correct: 1,
    explanation: "Always quote directly from the text. The question is testing whether you found the right part of the text — your quote proves it.",
  },
  {
    question: "A statement says 'La ville a réduit ses émissions de 50%.' The text says 'La ville espère réduire ses émissions de moitié d'ici 2030.' What do you answer?",
    options: ["Vrai", "Faux", "On ne sait pas", "Vrai — 50% and moitié mean the same thing"],
    correct: 1,
    explanation: "Faux — the text says the city hopes to reduce emissions in the future. It has not already done so. Tense and certainty matter.",
  },
  {
    question: "You're not sure about an answer. The statement doesn't clearly match or contradict the text. You should:",
    options: ["Guess Vrai", "Mark it Faux to be safe", "Use your common sense based on what the text is saying overall", "Leave it blank"],
    correct: 2,
    explanation: "Use your common sense. The texts are written clearly. If something fits the overall meaning and context of the passage, trust that instinct — and find the quote that supports it.",
  },
  {
    question: "The instruction says 'Relevez deux mots du texte qui montrent que…'. You should write:",
    options: ["A full sentence explaining the idea", "Your own paraphrase of the relevant part", "Exactly two words copied from the text", "The whole sentence from the text"],
    correct: 2,
    explanation: "Exactly two words — no more, no less. Word counts on 'Relevez' questions are precise instructions. Over-answering doesn't earn more marks.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Reading Comprehension
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Paper 2 reading is 25% of your grade, out of 40 marks. Almost every question is True/False with a direct quote from the text. The answers are there — you just have to find them.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The one rule</p>
              <p className="mt-2 leading-7 text-white/80">
                The answer is <span className="font-black text-white">always in the text</span>. State Vrai or Faux, then copy the exact words that prove it. Use your common sense — if something sounds obviously true or false given what you've read, it probably is.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">How most questions work</p>
              <ol className="mt-2 space-y-1 text-sm text-[#0B1F3A] list-decimal list-inside">
                <li>Read the statement</li>
                <li>Find the relevant part of the text</li>
                <li>Write Vrai or Faux</li>
                <li>Quote directly from the text</li>
              </ol>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. These are the instructions you'll see on every Paper 2 reading section.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 2 reading — question vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each instruction to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Paper 2 reading terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply reading strategies to realistic Paper 2 scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Reading comprehension quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Reading strategies locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the grammar structures that appear most in Paper 2 reading texts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
