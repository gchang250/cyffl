import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const etreCards = [
  { front: "je suis", back: "I am", subtext: "être — to be. Auxiliary for some passé composé verbs." },
  { front: "tu es", back: "you are (informal)", subtext: "Used with friends, family, classmates." },
  { front: "il / elle est", back: "he / she is", subtext: "Also on/one est — one is / we are (informal)." },
  { front: "nous sommes", back: "we are", subtext: "Sommes — the nous form of être." },
  { front: "vous êtes", back: "you are (formal/plural)", subtext: "Used for one person formally or a group." },
  { front: "ils / elles sont", back: "they are", subtext: "Ils (mixed/masc. group), elles (all feminine)." },
];

const avoirCards = [
  { front: "j'ai", back: "I have", subtext: "avoir — to have. Used for age: j'ai seize ans." },
  { front: "tu as", back: "you have", subtext: "Tu as de la chance! — You're lucky!" },
  { front: "il / elle a", back: "he / she has", subtext: "Elle a faim. — She is hungry." },
  { front: "nous avons", back: "we have", subtext: "Nous avons un cours de maths. — We have a maths class." },
  { front: "vous avez", back: "you have (formal/plural)", subtext: "Vous avez raison. — You are right." },
  { front: "ils / elles ont", back: "they have", subtext: "Ils ont tort. — They are wrong." },
];

const pairs = [
  { left: "j'ai faim", right: "I'm hungry" },
  { left: "j'ai soif", right: "I'm thirsty" },
  { left: "j'ai chaud", right: "I'm hot" },
  { left: "j'ai froid", right: "I'm cold" },
  { left: "j'ai raison", right: "I'm right" },
  { left: "j'ai tort", right: "I'm wrong" },
];

const exercises = [
  { before: "Nous", after: "canadiens. (we are)", answer: "sommes", hint: "nous → sommes (être)", translation: "We are Canadian." },
  { before: "Il", after: "quinze ans. (he has)", answer: "a", hint: "il → a (avoir)", translation: "He is fifteen years old." },
  { before: "Tu", after: "raison! (you are right — avoir)", answer: "as", hint: "tu → as (avoir)", translation: "You are right!" },
  { before: "Vous", after: "dans quelle classe? (you are)", answer: "êtes", hint: "vous → êtes (être)", translation: "What class are you in?" },
  { before: "Elles", after: "soif après le sport. (they are thirsty)", answer: "ont", hint: "elles → ont (avoir)", translation: "They are thirsty after gym." },
];

const questions = [
  {
    question: "What is the correct form of 'être' for 'nous'?",
    options: ["sont", "êtes", "sommes", "es"],
    correct: 2,
    explanation: "Nous sommes = we are. The full conjugation: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
  },
  {
    question: "How do you say 'I am 14 years old' in French?",
    options: ["Je suis 14 ans.", "J'ai 14 ans.", "Je fais 14 ans.", "J'ai 14 années."],
    correct: 1,
    explanation: "French uses avoir for age: j'ai 14 ans (literally 'I have 14 years'). Never use être for age.",
  },
  {
    question: "Which expression uses 'avoir' to describe a feeling?",
    options: ["Je suis fatigué.", "Nous sommes contents.", "Elle a froid.", "Il est malade."],
    correct: 2,
    explanation: "Avoir is used for physical sensations: avoir froid (cold), faim (hungry), soif (thirsty), chaud (hot), peur (afraid).",
  },
  {
    question: "'Vous avez raison' means:",
    options: ["You have a reason.", "You are right.", "You are reasonable.", "You have reasons."],
    correct: 1,
    explanation: "Avoir raison = to be right. Avoir tort = to be wrong. These are fixed expressions using avoir, not être.",
  },
];

export default function Unit1Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 1 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Key Irregular Verbs</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Être and avoir are the two most important verbs in French. You use them to describe states, express feelings, state ages — and as auxiliary verbs to form past tenses. Know these cold.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common avoir expressions</p>
            <div className="mt-3 space-y-1.5 text-sm">
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir faim</span> <span className="text-[#526173]">— to be hungry</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir soif</span> <span className="text-[#526173]">— to be thirsty</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir chaud</span> <span className="text-[#526173]">— to be hot</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir froid</span> <span className="text-[#526173]">— to be cold</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir raison</span> <span className="text-[#526173]">— to be right</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir tort</span> <span className="text-[#526173]">— to be wrong</span></p>
              <p className="text-[#0B1F3A]"><span className="font-bold">avoir … ans</span> <span className="text-[#526173]">— to be … years old</span></p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={etreCards} title="Être — to be" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={avoirCards} title="Avoir — to have" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Avoir expressions" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Être or avoir?" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Être & avoir quiz" />
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Unit 1 complete!</p>
          <p className="mt-2 text-[#526173]">You've covered articles, adjective agreement, prepositions, and the two most important irregular verbs. Now put it all together in the unit test.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-1/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Take Unit 1 Test →</Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-start gap-4">
          <Link href="/learn/school-french-support/unit-1/lesson-3" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
        </div>
      </section>
    </main>
  );
}
