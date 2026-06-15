import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const irReCards = [
  { front: "finir", back: "to finish: je finis", subtext: "-ir verbs: remove -ir → fin-, add: -is, -is, -it, -issons, -issez, -issent." },
  { front: "choisir", back: "to choose: je choisis", subtext: "Qu'est-ce que tu choisis?: What are you choosing?" },
  { front: "réussir", back: "to succeed / pass: je réussis", subtext: "Réussir à un examen: to pass a test." },
  { front: "grandir", back: "to grow up: je grandis", subtext: "Les enfants grandissent vite.: Children grow up fast." },
  { front: "rougir", back: "to blush: je rougis", subtext: "Elle rougit facilement.: She blushes easily." },
  { front: "obéir", back: "to obey: j'obéis", subtext: "Obéir à ses parents.: To obey one's parents." },
  { front: "vendre", back: "to sell: je vends", subtext: "-re verbs: remove -re → vend-, add: -s, -s, -, -ons, -ez, -ent." },
  { front: "répondre", back: "to answer: je réponds", subtext: "Réponds à la question!: Answer the question!" },
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
    explanation: "Ils réussissent: the -iss- infix is added: réuss- + issent. The pattern applies to all regular -ir verbs.",
  },
  {
    question: "Which of these is a regular -re verb?",
    options: ["aller", "être", "attendre", "prendre"],
    correct: 2,
    explanation: "Attendre (to wait) is a regular -re verb. Aller, être, and prendre are all irregular verbs.",
  },
  {
    question: "What is the 'je' form of 'choisir'?",
    options: ["je choisis", "je choisissons", "je choisi", "je choisit"],
    correct: 0,
    explanation: "Je + -ir verb: remove -ir, add -is. Chois + is = je choisis. Note: je and tu share the same -is ending for -ir verbs.",
  },
  {
    question: "How do you say 'She succeeds in the exam'?",
    options: ["Elle réussit à l'examen.", "Elle réussite à l'examen.", "Elle réussit l'examen.", "Elle réussit en l'examen."],
    correct: 0,
    explanation: "Réussir à = to succeed in / to pass. Elle réussit à l'examen. Note: réussit (no extra -e): il/elle -ir verbs end in -it. Don't write 'réussite' (that's a noun meaning 'success').",
  },
  {
    question: "What is the 'nous' form of 'répondre'?",
    options: ["nous répondons", "nous répondissons", "nous répondez", "nous répondent"],
    correct: 0,
    explanation: "Nous + -re verb: drop -re, add -ons. Répond + ons = nous répondons. -re verbs use the same -ons/-ez/-ent endings as -er verbs for plural forms.",
  },
  {
    question: "A student writes 'ils grandissent.' Is this the correct form of 'grandir' for ils?",
    options: ["No: it should be ils grandent.", "No: it should be ils grandient.", "Yes: -ir verbs take -issent for ils.", "No: it should be ils grandissons."],
    correct: 2,
    explanation: "Ils grandissent is correct. Regular -ir verbs insert -iss- before plural endings: ils finissent, ils grandissent, ils réussissent. The -issons form is for nous.",
  },
];

export default function Unit2Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
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

        <div className="mt-12 rounded-2xl border-2 border-[#FEF3C7] bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Common mistakes — -ir and -re verbs</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { wrong: "il réussite à l'examen", right: "il réussit: 'réussite' is a noun (success). The verb is réussit (no extra -e)." },
              { wrong: "ils finient", right: "ils finissent: -ir verbs take -issent, not -ient. The -iss- infix is always there for plural forms." },
              { wrong: "il vends", right: "il vend: the il/elle form of -re verbs drops the -re and adds NOTHING. No -s added." },
              { wrong: "nous choisisons", right: "nous choisissons: the infix is -iss-, not -is-. The full endings are: -issons / -issez / -issent." },
              { wrong: "tu répond", right: "tu réponds: for je and tu forms of -re verbs, add -s: je vends, tu vends, je réponds, tu réponds." },
            ].map((m) => (
              <div key={m.wrong} className="grid gap-1 rounded-xl border border-[#FDE68A] bg-[#FEFCE8] p-3">
                <p className="text-[#B45309]">✗ {m.wrong}</p>
                <p className="text-[#16A34A]">✓ {m.right}</p>
              </div>
            ))}
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
          <Link href="/learn/school-french-support/unit-2/lesson-3" className="rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
