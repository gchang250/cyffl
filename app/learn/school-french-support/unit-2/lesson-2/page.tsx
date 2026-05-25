import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const irReCards = [
  { front: "finir", back: "to finish — je finis", subtext: "-ir verbs: remove -ir → fin-, add: -is, -is, -it, -issons, -issez, -issent." },
  { front: "choisir", back: "to choose — je choisis", subtext: "Qu'est-ce que tu choisis? — What are you choosing?" },
  { front: "réussir", back: "to succeed / pass — je réussis", subtext: "Réussir à un examen — to pass a test." },
  { front: "grandir", back: "to grow up — je grandis", subtext: "Les enfants grandissent vite. — Children grow up fast." },
  { front: "rougir", back: "to blush — je rougis", subtext: "Elle rougit facilement. — She blushes easily." },
  { front: "obéir", back: "to obey — j'obéis", subtext: "Obéir à ses parents. — To obey one's parents." },
  { front: "vendre", back: "to sell — je vends", subtext: "-re verbs: remove -re → vend-, add: -s, -s, -, -ons, -ez, -ent." },
  { front: "répondre", back: "to answer — je réponds", subtext: "Réponds à la question! — Answer the question!" },
];

const pairs = [
  { left: "nous finissons", right: "we finish (-ir)" },
  { left: "vous choisissez", right: "you choose (-ir)" },
  { left: "ils réussissent", right: "they succeed (-ir)" },
  { left: "je vends", right: "I sell (-re)" },
  { left: "tu réponds", right: "you answer (-re)" },
  { left: "il attend", right: "he waits (-re)" },
];

const exercises = [
  { before: "Les élèves", after: "leurs devoirs avant le dîner. (to finish)", answer: "finissent", hint: "finir → ils finissent (-issent ending)", translation: "The students finish their homework before dinner." },
  { before: "Tu", after: "toujours le mauvais moment. (to choose)", answer: "choisis", hint: "choisir → tu choisis", translation: "You always choose the wrong moment." },
  { before: "Elle", after: "à l'examen de maths. (to succeed)", answer: "réussit", hint: "réussir → elle réussit (-it ending)", translation: "She passes the maths test." },
  { before: "Nous", after: "des livres au marché. (to sell)", answer: "vendons", hint: "vendre → nous vendons (drop -re, add -ons)", translation: "We sell books at the market." },
  { before: "Vous", after: "toujours aux questions du prof. (to answer)", answer: "répondez", hint: "répondre → vous répondez", translation: "You always answer the teacher's questions." },
];

const questions = [
  {
    question: "What endings are added to -ir verbs for 'nous' and 'vous'?",
    options: ["-ons and -ez", "-issons and -issez", "-isons and -isez", "-itions and -itions"],
    correct: 1,
    explanation: "-ir verbs insert -iss- before the nous/vous/ils endings: nous finissons, vous finissez, ils finissent.",
  },
  {
    question: "What is the 'il' form of 'vendre'?",
    options: ["il vendons", "il vends", "il vend", "il vendent"],
    correct: 2,
    explanation: "The il/elle form of -re verbs drops the -re and adds nothing: il vend, elle attend, il répond.",
  },
  {
    question: "Which sentence correctly conjugates 'réussir' for 'ils'?",
    options: ["ils réussient", "ils réussent", "ils réusissent", "ils réussissent"],
    correct: 3,
    explanation: "Ils réussissent — the -iss- infix is added: réuss- + issent. The pattern applies to all regular -ir verbs.",
  },
  {
    question: "Which of these is a regular -re verb?",
    options: ["aller", "être", "attendre", "prendre"],
    correct: 2,
    explanation: "Attendre (to wait) is a regular -re verb. Aller, être, and prendre are all irregular verbs.",
  },
];

export default function Unit2Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Unit 2 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Regular -ir & -re Verbs</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Beyond -er verbs, French has two more regular conjugation families. The -ir verbs use a distinctive -iss- infix, while -re verbs are the simplest — the il/elle form adds nothing at all.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Side-by-side: finir vs. vendre</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <p className="font-bold text-[#D97706]">-ir (finir)</p>
              <p className="font-bold text-[#2563EB]">-re (vendre)</p>
              <p className="text-[#0B1F3A]">je fin<b>is</b></p>
              <p className="text-[#0B1F3A]">je vend<b>s</b></p>
              <p className="text-[#0B1F3A]">tu fin<b>is</b></p>
              <p className="text-[#0B1F3A]">tu vend<b>s</b></p>
              <p className="text-[#0B1F3A]">il fin<b>it</b></p>
              <p className="text-[#0B1F3A]">il vend</p>
              <p className="text-[#0B1F3A]">nous fin<b>issons</b></p>
              <p className="text-[#0B1F3A]">nous vend<b>ons</b></p>
              <p className="text-[#0B1F3A]">vous fin<b>issez</b></p>
              <p className="text-[#0B1F3A]">vous vend<b>ez</b></p>
              <p className="text-[#0B1F3A]">ils fin<b>issent</b></p>
              <p className="text-[#0B1F3A]">ils vend<b>ent</b></p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={irReCards} title="-ir and -re verbs" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="-ir and -re conjugations" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Conjugate the verb" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="-ir & -re verbs quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-2/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/school-french-support/unit-2/lesson-3" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
