import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Qui?", back: "Who?", subtext: "Qui est-ce? Who is it?" },
  { front: "Que? / Quoi?", back: "What?", subtext: "Que fais-tu? (before verb) / Tu fais quoi? (end of sentence, casual)" },
  { front: "Où?", back: "Where?", subtext: "Où habites-tu? Where do you live?" },
  { front: "Quand?", back: "When?", subtext: "Quand est-ce que tu travailles? When do you work?" },
  { front: "Comment?", back: "How?", subtext: "Comment allez-vous? How are you?" },
  { front: "Pourquoi?", back: "Why?", subtext: "Pourquoi est-ce que tu pleures? Why are you crying?" },
  { front: "Combien (de)?", back: "How many / How much?", subtext: "Combien de livres as-tu? How many books do you have?" },
  { front: "Quel(le)?", back: "Which? / What?", subtext: "Quelle heure est-il? What time is it?" },
];

const pairs = [
  { left: "Qui?", right: "Who?" },
  { left: "Où?", right: "Where?" },
  { left: "Quand?", right: "When?" },
  { left: "Comment?", right: "How?" },
  { left: "Pourquoi?", right: "Why?" },
  { left: "Combien?", right: "How many/much?" },
];

const exercises = [
  { before: "", after: "habites-tu? (where)", answer: "Où", hint: "where", translation: "Where do you live?" },
  { before: "", after: "est-ce que tu t'appelles? (what)", answer: "Comment", hint: "How/What — Comment t'appelles-tu? is a set phrase", translation: "What is your name?" },
  { before: "", after: "de soeurs as-tu? (how many)", answer: "Combien", hint: "how many/much", translation: "How many sisters do you have?" },
  { before: "", after: "est-ce que tu étudies le français? (why)", answer: "Pourquoi", hint: "why", translation: "Why do you study French?" },
  { before: "", after: "parle-t-il français? (who)", answer: "Qui", hint: "who (as subject)", translation: "Who speaks French?" },
];

const questions = [
  {
    question: "Which question type uses 'est-ce que'?",
    options: ["Intonation question", "Est-ce que question", "Inversion question", "Tag question"],
    correct: 1,
    explanation: "Est-ce que is placed before the subject: Est-ce que + subject + verb? It's the most common spoken form.",
  },
  {
    question: "What does 'Où' mean?",
    options: ["Who", "When", "Where", "Why"],
    correct: 2,
    explanation: "Où = where. Note: où (with accent) = where, ou (no accent) = or.",
  },
  {
    question: "Which question word would you use to ask 'How many books?'",
    options: ["Quel", "Qui", "Combien de", "Comment"],
    correct: 2,
    explanation: "Combien de + noun = how many/how much of something. Combien de livres = how many books.",
  },
  {
    question: "'Parles-tu français?' is an example of which question type?",
    options: ["Intonation", "Est-ce que", "Inversion", "Question word"],
    correct: 2,
    explanation: "Inversion flips the subject and verb with a hyphen: Parles-tu? This is more formal and used in writing.",
  },
];

export default function Unit4Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 4 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Asking Questions</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">There are three ways to ask a yes/no question in French, and seven essential question words to unlock any conversation.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Three ways to ask a question</p>
            <ol className="mt-3 space-y-3 text-xs text-[#526173]">
              <li>
                <span className="font-bold text-[#0B1F3A]">1. Intonation</span>
                <p className="mt-0.5">Tu parles français? <span className="italic">(raise your voice at the end)</span></p>
              </li>
              <li>
                <span className="font-bold text-[#0B1F3A]">2. Est-ce que</span>
                <p className="mt-0.5">Est-ce que tu parles français? <span className="italic">(most common in speech)</span></p>
              </li>
              <li>
                <span className="font-bold text-[#0B1F3A]">3. Inversion</span>
                <p className="mt-0.5">Parles-tu français? <span className="italic">(formal/written)</span></p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={flashcards} title="Question words" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Question words" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Choose the question word" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Asking questions quiz" />
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Unit 4 complete!</p>
          <h2 className="mt-3 text-3xl font-black">You can describe the world in French.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            You know colors, adjectives, how to conjugate -er verbs, and how to ask questions. Test yourself before moving on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-4/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn/french-foundations/unit-4/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Take the unit test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
