import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "rouge", back: "red", subtext: "Un pull rouge / une robe rouge — doesn't change with gender." },
  { front: "bleu(e)", back: "blue", subtext: "Un livre bleu / une chemise bleue — adds -e for feminine." },
  { front: "vert(e)", back: "green", subtext: "Un stylo vert / une feuille verte." },
  { front: "jaune", back: "yellow", subtext: "Doesn't change: un bus jaune / une fleur jaune." },
  { front: "blanc / blanche", back: "white", subtext: "Irregular feminine: blanc → blanche." },
  { front: "noir(e)", back: "black", subtext: "Un chat noir / une voiture noire." },
  { front: "orange", back: "orange", subtext: "Invariable — never changes: une robe orange." },
  { front: "violet(te)", back: "purple", subtext: "Un stylo violet / une chemise violette." },
  { front: "rose", back: "pink", subtext: "Doesn't change: un vélo rose / une maison rose." },
  { front: "gris(e)", back: "grey", subtext: "Un manteau gris / une veste grise." },
  { front: "brun(e)", back: "brown (hair/eyes)", subtext: "Used for hair/eyes. For objects, use marron." },
  { front: "marron", back: "brown (objects)", subtext: "Invariable: un sac marron / une table marron." },
];

const pairs = [
  { left: "rouge", right: "red" },
  { left: "bleu", right: "blue" },
  { left: "vert", right: "green" },
  { left: "blanc", right: "white" },
  { left: "noir", right: "black" },
  { left: "violet", right: "purple" },
];

const exercises = [
  { before: "Le ciel est", after: ".", answer: "bleu", hint: "sky (masculine) — blue", translation: "The sky is blue." },
  { before: "La fleur est", after: ".", answer: "jaune", hint: "flower (feminine) — yellow (doesn't change)", translation: "The flower is yellow." },
  { before: "La neige est", after: ".", answer: "blanche", hint: "snow (feminine) — white (blanc → blanche)", translation: "The snow is white." },
  { before: "Sa veste est", after: ".", answer: "grise", hint: "jacket (feminine) — grey", translation: "His/her jacket is grey." },
  { before: "Les yeux de Marie sont", after: ".", answer: "verts", hint: "eyes (masculine plural) — green adds -s for plural", translation: "Marie's eyes are green." },
];

const questions = [
  {
    question: "Which color adjective is invariable (never changes form)?",
    options: ["vert", "blanc", "orange", "gris"],
    correct: 2,
    explanation: "Orange and marron are invariable — they never add -e or -s endings.",
  },
  {
    question: "What is the feminine form of 'blanc'?",
    options: ["blancе", "blanche", "blancie", "blanc"],
    correct: 1,
    explanation: "Blanc has an irregular feminine: blanche. This is one of the exceptions to the simple 'add -e' rule.",
  },
  {
    question: "How do you say 'a green dress' (robe = feminine)?",
    options: ["une robe vert", "une robe verts", "une robe verte", "une robe verd"],
    correct: 2,
    explanation: "Robe is feminine, so vert adds -e: verte. Une robe verte.",
  },
  {
    question: "Where do color adjectives go in a French sentence?",
    options: ["Always before the noun", "Always after the noun", "It depends on the adjective", "It doesn't matter"],
    correct: 1,
    explanation: "Color adjectives always go AFTER the noun in French: un stylo rouge, une voiture bleue.",
  },
];

export default function Unit4Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 4 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Colors</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Describe the world around you. Learn twelve essential colors and how they agree with the nouns they describe.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Colors agree with nouns</p>
            <div className="mt-3 space-y-2 text-sm text-[#526173]">
              <p><span className="font-bold text-[#0B1F3A]">un livre bleu</span> / <span className="font-bold text-[#0B1F3A]">une chemise bleue</span> — blue book (m) / blue shirt (f)</p>
              <p><span className="font-bold text-[#0B1F3A]">un manteau blanc</span> / <span className="font-bold text-[#0B1F3A]">une jupe blanche</span> — white coat (m) / white skirt (f)</p>
            </div>
            <p className="mt-4 text-xs leading-5 text-[#526173]">Most colors add -e for feminine. Some (orange, beige, marron) never change.</p>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={flashcards} title="Colors" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Colors" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Color agreement" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Colors quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-3/lesson-4" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-4/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
