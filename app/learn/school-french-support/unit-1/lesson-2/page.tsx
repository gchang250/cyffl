import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const adjectiveCards = [
  { front: "grand / grande", back: "big, tall", subtext: "un grand garçon / une grande fille — add -e for feminine." },
  { front: "petit / petite", back: "small, short", subtext: "un petit chat / une petite souris — add -e for feminine." },
  { front: "beau / belle", back: "beautiful, handsome", subtext: "Irregular: beau (m) → belle (f). Beaux (m.pl) / belles (f.pl)." },
  { front: "nouveau / nouvelle", back: "new", subtext: "Irregular: nouveau (m) → nouvelle (f). Goes BEFORE the noun." },
  { front: "vieux / vieille", back: "old", subtext: "Irregular: vieux (m) → vieille (f). Goes BEFORE the noun." },
  { front: "heureux / heureuse", back: "happy", subtext: "Adjectives ending in -eux → -euse in feminine." },
  { front: "intéressant / intéressante", back: "interesting", subtext: "Regular: add -e. Double consonant if noun ends in -ant." },
  { front: "français / française", back: "French", subtext: "Nationality adjectives: add -e, also add accent on -ais → -aise." },
];

const pairs = [
  { left: "un livre intéressant", right: "an interesting book (m)" },
  { left: "une histoire intéressante", right: "an interesting story (f)" },
  { left: "les garçons heureux", right: "the happy boys (m.pl)" },
  { left: "les filles heureuses", right: "the happy girls (f.pl)" },
  { left: "un beau tableau", right: "a beautiful painting (m)" },
  { left: "une belle journée", right: "a beautiful day (f)" },
];

const exercises = [
  { before: "C'est une", after: "fille. (tall / feminine)", answer: "grande", hint: "grand → grande (add -e)", translation: "She is a tall girl." },
  { before: "Il a un", after: "chien. (small / masculine)", answer: "petit", hint: "petit stays petit before masculine noun", translation: "He has a small dog." },
  { before: "C'est une", after: "maison. (new / feminine)", answer: "nouvelle", hint: "nouveau → nouvelle (irregular)", translation: "It's a new house." },
  { before: "Les élèves sont", after: ". (happy / plural feminine)", answer: "heureuses", hint: "heureux → heureuse → heureuses", translation: "The students (f) are happy." },
  { before: "C'est un", after: "problème. (serious / masculine)", answer: "sérieux", hint: "sérieux stays -eux before masculine noun", translation: "It's a serious problem." },
];

const questions = [
  {
    question: "How do you make most French adjectives feminine?",
    options: ["Add -s to the end.", "Add -e to the masculine form.", "Change the final vowel.", "Nothing changes."],
    correct: 1,
    explanation: "Most adjectives add -e to form the feminine: grand → grande, petit → petite, intéressant → intéressante.",
  },
  {
    question: "Which of these adjectives goes BEFORE the noun? (BAGS rule)",
    options: ["intéressant", "français", "grand", "rouge"],
    correct: 2,
    explanation: "BAGS adjectives (Beauty, Age, Goodness, Size) go before the noun: grand, petit, beau, vieux, bon, jeune.",
  },
  {
    question: "What is the feminine form of 'heureux'?",
    options: ["heureuse", "heureuxe", "heureuxs", "heureusse"],
    correct: 0,
    explanation: "Adjectives ending in -eux change to -euse in the feminine: heureux → heureuse, sérieux → sérieuse.",
  },
  {
    question: "How do you say 'the new books' in French? (new = nouveau)",
    options: ["les nouveau livres", "les livres nouveaux", "les nouveaux livres", "les nouvelle livres"],
    correct: 2,
    explanation: "Nouveau goes before the noun and pluralizes to nouveaux. Masculine plural of nouveau = nouveaux: les nouveaux livres.",
  },
  {
    question: "What is the feminine plural form of 'intéressant'?",
    options: ["intéressants", "intéressante", "intéressantes", "intéressantse"],
    correct: 2,
    explanation: "Masculine: intéressant · Feminine: intéressante · Masculine plural: intéressants · Feminine plural: intéressantes. Add -e for feminine, -s for plural.",
  },
  {
    question: "How do you say 'the happy boys'?",
    options: ["les garçons heureuse", "les garçons heureux", "les garçons heureuses", "les heureux garçons"],
    correct: 1,
    explanation: "Heureux stays as heureux for masculine plural (it already ends in -x). Les garçons heureux. Only the feminine changes: heureuse / heureuses.",
  },
  {
    question: "Which adjective has the same form in both masculine and feminine singular?",
    options: ["grand", "beau", "français", "sympa"],
    correct: 3,
    explanation: "Sympa is invariable — it doesn't change for gender or number: un prof sympa, une élève sympa. Grand, beau, and français all have distinct feminine forms.",
  },
  {
    question: "A student writes 'un vieux voiture.' What is wrong?",
    options: ["Vieux should come after the noun.", "Voiture is feminine — it should be 'une vieille voiture.'", "Vieux is not a real adjective.", "Une should be used, not un."],
    correct: 1,
    explanation: "Voiture is feminine → use une, and the feminine form of vieux is vieille: une vieille voiture. Using vieux with a feminine noun is a very common error.",
  },
];

export default function Unit1Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 1 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Adjective Agreement</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">In French, adjectives must match the gender and number of the noun they describe. Learn the patterns — and the important exceptions — to write correctly every time.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Agreement rules</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">Regular pattern</p>
                <p className="text-[#526173]">Masc.: grand · Fem.: grande · Masc.pl.: grands · Fem.pl.: grandes</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">-eux adjectives</p>
                <p className="text-[#526173]">heureux → heureuse (feminine adds -se, drops -x)</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">BAGS adjectives (before noun)</p>
                <p className="text-[#526173]">Beauty, Age, Goodness, Size: beau, vieux, bon, grand, petit, jeune</p>
              </div>
              <div>
                <p className="font-bold text-[#2563EB]">Irregular trio</p>
                <p className="text-[#526173]">beau → belle · nouveau → nouvelle · vieux → vieille</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={adjectiveCards} title="Adjective forms" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Adjective agreement in context" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Agree the adjective" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Adjective agreement quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-1/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/school-french-support/unit-1/lesson-3" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
