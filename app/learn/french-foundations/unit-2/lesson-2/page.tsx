import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import MatchPairs from "@/components/MatchPairs";

const conjugationCards = [
  { front: "je suis", back: "I am", subtext: "je + suis" },
  { front: "tu es", back: "you are (informal)", subtext: "tu + es" },
  { front: "il est / elle est", back: "he is / she is", subtext: "il or elle + est" },
  { front: "nous sommes", back: "we are", subtext: "nous + sommes" },
  { front: "vous êtes", back: "you are (formal/plural)", subtext: "vous + êtes" },
  { front: "ils sont / elles sont", back: "they are", subtext: "ils or elles + sont" },
];

const exampleCards = [
  { front: "Je suis étudiant(e).", back: "I am a student." },
  { front: "Tu es de Montréal?", back: "Are you from Montréal?" },
  { front: "Elle est sympa.", back: "She is nice." },
  { front: "Nous sommes en classe.", back: "We are in class." },
  { front: "Vous êtes professeur?", back: "Are you a teacher?" },
  { front: "Ils sont fatigués.", back: "They are tired." },
];

const matchPairs = [
  { left: "je suis", right: "I am" },
  { left: "tu es", right: "you are" },
  { left: "il est", right: "he is" },
  { left: "nous sommes", right: "we are" },
  { left: "vous êtes", right: "you are (formal)" },
  { left: "elles sont", right: "they are (fem.)" },
];

const fillIn = [
  {
    before: "Je",
    after: "étudiant.",
    answer: "suis",
    hint: "être (je form)",
    translation: "I am a student.",
  },
  {
    before: "Tu",
    after: "fatigué(e)?",
    answer: "es",
    hint: "être (tu form)",
    translation: "Are you tired?",
  },
  {
    before: "Nous",
    after: "au Canada.",
    answer: "sommes",
    hint: "être (nous form)",
    translation: "We are in Canada.",
  },
  {
    before: "Ils",
    after: "contents.",
    answer: "sont",
    hint: "être (ils/elles form)",
    translation: "They are happy.",
  },
  {
    before: "Elle",
    after: "professeure.",
    answer: "est",
    hint: "être (il/elle form)",
    translation: "She is a teacher.",
  },
];

const quiz = [
  {
    question: "Complete: 'Nous ___ en retard.' (We are late.)",
    options: ["est", "sommes", "sont", "êtes"],
    correct: 1,
    explanation: "Nous → sommes. Être conjugated with nous is sommes.",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "Tu est fatigué.",
      "Tu es fatigué.",
      "Tu sommes fatigué.",
      "Tu sont fatigué.",
    ],
    correct: 1,
    explanation: "Tu uses 'es', tu es. The others are wrong forms of être.",
  },
  {
    question: "How do you say 'She is Canadian' in French?",
    options: [
      "Elle suis canadienne.",
      "Elle sommes canadienne.",
      "Elle est canadienne.",
      "Elle sont canadienne.",
    ],
    correct: 2,
    explanation: "Elle → est. Être conjugated with il/elle is always est.",
  },
  {
    question: "Vous ___ mon professeur. (You are my teacher.) What fills the blank?",
    options: ["suis", "es", "est", "êtes"],
    correct: 3,
    explanation: "Vous → êtes. Don't forget the accent on the ê in êtes.",
  },
];

export default function Unit2Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Être: To Be
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Être is the most used verb in French. You need it to describe
              people, places, professions, and emotions.
            </p>
          </div>

          {/* Conjugation table */}
          <div className="overflow-hidden rounded-2xl border border-[#E7DAB9] bg-white shadow-sm">
            <div className="bg-[#0B1F3A] px-5 py-3">
              <p className="font-black text-white">être (present tense)</p>
            </div>
            <div className="divide-y divide-[#E7DAB9]">
              {[
                ["je", "suis"],
                ["tu", "es"],
                ["il / elle", "est"],
                ["nous", "sommes"],
                ["vous", "êtes"],
                ["ils / elles", "sont"],
              ].map(([pro, conj]) => (
                <div key={pro} className="flex items-center justify-between px-5 py-2.5">
                  <span className="text-sm text-[#526173]">{pro}</span>
                  <span className="font-black text-[#0B1F3A]">{conj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flashcards - conjugations */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the conjugation</h2>
          <p className="mt-1 text-[#526173]">Six forms, flip each card to practise.</p>
          <div className="mt-6">
            <FlashCardDeck cards={conjugationCards} title="être conjugation" />
          </div>
        </section>

        {/* Flashcards - examples */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Être in action</h2>
          <p className="mt-1 text-[#526173]">Real sentences using être, see the translation on each flip.</p>
          <div className="mt-6">
            <FlashCardDeck cards={exampleCards} title="Example sentences" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the forms</h2>
          <p className="mt-1 text-[#526173]">Connect each conjugated form to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="être pairs" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each sentence with the correct form of être.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="être conjugation practice" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions to check your être knowledge.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="être quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You can conjugate être, one of French's two key verbs.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: avoir (to have), the other essential verb, with some
            surprising uses you won't expect.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-2/lesson-1"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-2/lesson-3"
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
