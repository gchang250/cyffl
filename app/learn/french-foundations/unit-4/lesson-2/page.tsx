import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "grand(e)", back: "big / tall", subtext: "Goes BEFORE the noun: un grand arbre." },
  { front: "petit(e)", back: "small / short", subtext: "BAGS: before: une petite voiture." },
  { front: "beau / belle", back: "beautiful", subtext: "BAGS: beau (masc), belle (fem): un beau jour / une belle maison." },
  { front: "joli(e)", back: "pretty", subtext: "BAGS: before: une jolie fille." },
  { front: "vieux / vieille", back: "old", subtext: "BAGS: vieux (masc), vieille (fem): un vieux livre." },
  { front: "nouveau / nouvelle", back: "new", subtext: "BAGS: nouveau (masc), nouvelle (fem): un nouveau film." },
  { front: "bon(ne)", back: "good", subtext: "BAGS: before: un bon repas." },
  { front: "mauvais(e)", back: "bad", subtext: "BAGS: before: une mauvaise idée." },
  { front: "facile", back: "easy", subtext: "After the noun: un exercice facile." },
  { front: "difficile", back: "difficult", subtext: "After the noun: une question difficile." },
  { front: "intéressant(e)", back: "interesting", subtext: "After the noun: un livre intéressant." },
  { front: "sympa", back: "nice / friendly", subtext: "After the noun, and invariable: un prof sympa." },
];

const pairs = [
  { left: "grand", right: "big / tall" },
  { left: "petit", right: "small / short" },
  { left: "beau", right: "beautiful" },
  { left: "vieux", right: "old" },
  { left: "bon", right: "good" },
  { left: "mauvais", right: "bad" },
];

const exercises = [
  { before: "C'est un film", after: ".", answer: "intéressant", hint: "interesting: goes after noun", translation: "It's an interesting film." },
  { before: "Elle a une", after: "maison.", answer: "belle", hint: "beautiful (feminine): BAGS, goes before", translation: "She has a beautiful house." },
  { before: "Il a un", after: "livre.", answer: "vieux", hint: "old (masculine): BAGS, goes before", translation: "He has an old book." },
  { before: "C'est une question", after: ".", answer: "difficile", hint: "difficult: NOT a BAGS adjective, goes after", translation: "It's a difficult question." },
  { before: "Nous avons un", after: "professeur.", answer: "bon", hint: "good: BAGS, goes before", translation: "We have a good teacher." },
];

const questions = [
  {
    question: "Which adjective is a BAGS adjective and goes BEFORE the noun?",
    options: ["intéressant", "rouge", "difficile", "petit"],
    correct: 3,
    explanation: "Petit (Size) is a BAGS adjective and goes before the noun: un petit café.",
  },
  {
    question: "What is the feminine form of 'beau'?",
    options: ["beaux", "belle", "bel", "beauté"],
    correct: 1,
    explanation: "Beau (masc) → belle (fem): un beau jour / une belle journée.",
  },
  {
    question: "Which sentence is correct?",
    options: ["un livre intéressant", "un intéressant livre", "un livre d'intéressant", "un intéressante livre"],
    correct: 0,
    explanation: "Intéressant is not a BAGS adjective, so it goes AFTER the noun: un livre intéressant.",
  },
  {
    question: "'Vieux' belongs to which BAGS category?",
    options: ["Beauty", "Age", "Goodness", "Size"],
    correct: 1,
    explanation: "Vieux (old) belongs to the Age category in BAGS. Other age adjectives: nouveau, jeune.",
  },
  {
    question: "What is the feminine form of 'vieux'?",
    options: ["vieuxe", "vieux", "vielle", "vieille"],
    correct: 3,
    explanation: "Vieux has an irregular feminine: vieille. This is one of the trickier BAGS adjectives. Un vieux livre / une vieille maison.",
  },
  {
    question: "How do you say 'a good idea' (idée = feminine)?",
    options: ["une bonne idée", "une idée bonne", "un bonne idée", "une bon idée"],
    correct: 0,
    explanation: "Bon is a BAGS adjective (Goodness) and goes BEFORE the noun. Feminine form: bonne. So: une bonne idée.",
  },
  {
    question: "The adjective 'sympa' is described as invariable. What does this mean?",
    options: ["It only goes before the noun.", "It never changes form for gender or number.", "It is only used in negative sentences.", "It is a colour adjective."],
    correct: 1,
    explanation: "Invariable adjectives never change: un prof sympa, une prof sympa, des élèves sympa. Both sympa and marron work this way.",
  },
  {
    question: "Which sentence correctly places the adjective 'nouveau'?",
    options: ["un livre nouveau", "un nouveau livre", "un livres nouveau", "une nouveau livre"],
    correct: 1,
    explanation: "Nouveau (BAGS: Age) goes BEFORE the noun: un nouveau livre. The feminine form would be nouvelle: une nouvelle maison.",
  },
];

export default function Unit4Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 4 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Adjectives</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Make your French more vivid. Learn key describing words and the rule that determines where they go in a sentence.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">The BAGS rule</p>
            <p className="mt-2 text-xs text-[#526173]">Some adjectives go BEFORE the noun (BAGS = Beauty, Age, Goodness, Size):</p>
            <ul className="mt-3 space-y-1 text-xs text-[#526173]">
              <li><span className="font-bold text-[#0B1F3A]">Beauty:</span> beau, joli</li>
              <li><span className="font-bold text-[#0B1F3A]">Age:</span> vieux, nouveau, jeune</li>
              <li><span className="font-bold text-[#0B1F3A]">Goodness:</span> bon, mauvais</li>
              <li><span className="font-bold text-[#0B1F3A]">Size:</span> grand, petit</li>
            </ul>
            <p className="mt-3 text-xs text-[#526173]">All other adjectives (including colors) go AFTER the noun.</p>
            <div className="mt-3 space-y-1 text-xs text-[#526173]">
              <p><span className="font-bold text-[#0B1F3A]">un grand homme</span> (not: un homme grand)</p>
              <p><span className="font-bold text-[#0B1F3A]">un film intéressant</span> (not: un intéressant film)</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={flashcards} title="Key adjectives" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Adjectives" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="BAGS or not?" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Adjectives quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-4/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-4/lesson-3" className="rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
