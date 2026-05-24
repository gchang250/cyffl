import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import FillInTheBlank from "@/components/FillInTheBlank";

const dayCards = [
  { front: "lundi", back: "Monday", subtext: "The French week starts on Monday." },
  { front: "mardi", back: "Tuesday" },
  { front: "mercredi", back: "Wednesday" },
  { front: "jeudi", back: "Thursday" },
  { front: "vendredi", back: "Friday" },
  { front: "samedi", back: "Saturday" },
  { front: "dimanche", back: "Sunday" },
];

const monthCards = [
  { front: "janvier", back: "January" },
  { front: "février", back: "February" },
  { front: "mars", back: "March" },
  { front: "avril", back: "April" },
  { front: "mai", back: "May" },
  { front: "juin", back: "June" },
  { front: "juillet", back: "July" },
  { front: "août", back: "August" },
  { front: "septembre", back: "September" },
  { front: "octobre", back: "October" },
  { front: "novembre", back: "November" },
  { front: "décembre", back: "December" },
];

const seasonCards = [
  { front: "le printemps", back: "spring" },
  { front: "l'été", back: "summer" },
  { front: "l'automne", back: "fall / autumn" },
  { front: "l'hiver", back: "winter" },
];

const dayMatch = [
  { left: "lundi", right: "Monday" },
  { left: "mercredi", right: "Wednesday" },
  { left: "vendredi", right: "Friday" },
  { left: "samedi", right: "Saturday" },
  { left: "dimanche", right: "Sunday" },
];

const monthMatch = [
  { left: "janvier", right: "January" },
  { left: "mars", right: "March" },
  { left: "juin", right: "June" },
  { left: "août", right: "August" },
  { left: "octobre", right: "October" },
  { left: "décembre", right: "December" },
];

const fillIn = [
  {
    before: "Mon anniversaire est en",
    after: ".",
    answer: "juillet",
    hint: "July",
    translation: "My birthday is in July.",
  },
  {
    before: "Aujourd'hui, c'est",
    after: ".",
    answer: "lundi",
    hint: "Monday",
    translation: "Today is Monday.",
  },
  {
    before: "Il fait froid en",
    after: ".",
    answer: "hiver",
    hint: "winter",
    translation: "It's cold in winter.",
  },
  {
    before: "La rentrée est en",
    after: ".",
    answer: "septembre",
    hint: "September",
    translation: "Back to school is in September.",
  },
];

const quiz = [
  {
    question: "Which day comes right after jeudi?",
    options: ["samedi", "vendredi", "mercredi", "lundi"],
    correct: 1,
    explanation: "The days in order: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.",
  },
  {
    question: "What month is 'août'?",
    options: ["April", "October", "June", "August"],
    correct: 3,
    explanation: "Août = August. Don't let it fool you, the 't' is usually silent.",
  },
  {
    question: "How do you say 'My birthday is in March'?",
    options: [
      "Mon anniversaire est mars.",
      "Mon anniversaire est en mars.",
      "Mon anniversaire à mars.",
      "Mon anniversaire sur mars.",
    ],
    correct: 1,
    explanation: "Use 'en' before months: en mars, en juillet, en décembre.",
  },
  {
    question: "Which season is 'l'été'?",
    options: ["Winter", "Spring", "Summer", "Autumn"],
    correct: 2,
    explanation: "L'été = summer. L'hiver = winter, le printemps = spring, l'automne = fall.",
  },
];

export default function Unit3Lesson2Page() {
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
              Unit 3 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Days & Months
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Seven days, twelve months, four seasons, you'll use these for
              schedules, dates, birthdays, and small talk.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Quick tip</p>
              <p className="mt-2 leading-7 text-[#526173]">
                Days and months in French are{" "}
                <span className="font-black text-[#0B1F3A]">
                  not capitalized
                </span>{" "}
               , unlike English. Write 'lundi' not 'Lundi.'
              </p>
            </div>
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Useful phrases</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>Aujourd'hui c'est…, Today is…</p>
                <p>Mon anniversaire est en…, My birthday is in…</p>
                <p>La rentrée est en septembre., School starts in September.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Days flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Days of the week</h2>
          <p className="mt-1 text-[#526173]">Seven cards, the French week starts on Monday.</p>
          <div className="mt-6">
            <FlashCardDeck cards={dayCards} title="Les jours de la semaine" />
          </div>
        </section>

        {/* Months flashcards */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Months of the year</h2>
          <p className="mt-1 text-[#526173]">Twelve months, many look like English but watch the spelling.</p>
          <div className="mt-6">
            <FlashCardDeck cards={monthCards} title="Les mois de l'année" />
          </div>
        </section>

        {/* Seasons */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Seasons</h2>
          <p className="mt-1 text-[#526173]">Four seasons, and they all use 'l'' before vowels.</p>
          <div className="mt-6">
            <FlashCardDeck cards={seasonCards} title="Les saisons" />
          </div>
        </section>

        {/* Match days */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the days</h2>
          <p className="mt-1 text-[#526173]">Connect each day to its English name.</p>
          <div className="mt-6">
            <MatchPairs pairs={dayMatch} title="Days" />
          </div>
        </section>

        {/* Match months */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the months</h2>
          <p className="mt-1 text-[#526173]">Six months, connect them to English.</p>
          <div className="mt-6">
            <MatchPairs pairs={monthMatch} title="Months" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each sentence using a day, month, or season.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Days, months, seasons" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions on days, months, and seasons.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Days & months quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You know the days, months, and seasons in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: family vocabulary, la mère, le père, les frères, les sœurs,
            and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-3/lesson-1"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-3/lesson-3"
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
