import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import MatchPairs from "@/components/MatchPairs";

const conjugationCards = [
  { front: "je suis", back: "I am", subtext: "[ʒə sɥi] — The most used form. 'Je suis étudiant(e).' Also used in fixed expressions: 'Je suis désolé(e)' (I'm sorry)." },
  { front: "tu es", back: "you are (informal)", subtext: "[ty ɛ] — Informal you. 'Tu es fatigué(e)?' Are you tired? Never use with strangers or adults you don't know." },
  { front: "il est / elle est", back: "he is / she is", subtext: "[il ɛ / ɛl ɛ] — Also for things: 'Il est grand' (It/He is big). Every noun in French is masculine (il) or feminine (elle)." },
  { front: "nous sommes", back: "we are", subtext: "[nu sɔm] — Note the double -m. 'Nous sommes en retard.' In casual speech, often replaced by 'on est' (we are)." },
  { front: "vous êtes", back: "you are (formal/plural)", subtext: "[vu zɛt] — The ê has a circumflex. Two uses: one person (formal) or multiple people. 'Vous êtes professeur?' / 'Vous êtes tous là?'" },
  { front: "ils sont / elles sont", back: "they are", subtext: "[il sɔ̃ / ɛl sɔ̃] — ils for all-male or mixed groups; elles for all-female groups. 'Ils sont grands.' / 'Elles sont là.'" },
];

const exampleCards = [
  { front: "Je suis étudiant(e).", back: "I am a student.", subtext: "Add -e for feminine: étudiante. No article needed with professions after être." },
  { front: "Tu es de Montréal?", back: "Are you from Montréal?", subtext: "Rising intonation turns a statement into a question. No word reordering needed in casual speech." },
  { front: "Elle est sympa.", back: "She is nice.", subtext: "'Sympa' is invariable (same for masc/fem). Short for sympathique." },
  { front: "Nous sommes en classe.", back: "We are in class.", subtext: "'En classe' = in class. En is used before many places: en ville, en vacances, en retard." },
  { front: "Vous êtes professeur?", back: "Are you a teacher?", subtext: "No article with professions after être: 'Je suis médecin' not 'Je suis un médecin'." },
  { front: "Ils sont fatigués.", back: "They are tired.", subtext: "Agreement: ils → fatigués (-s). Elle → fatiguée (-e). Elles → fatiguées (-es)." },
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
    explanation: "Nous → sommes. Être: je suis · tu es · il/elle est · nous sommes · vous êtes · ils/elles sont. 'En retard' is a fixed expression meaning late.",
  },
  {
    question: "Your classmate says 'Tu est fatigué?' Is this correct?",
    options: [
      "Yes — perfectly correct",
      "No — it should be 'Tu es fatigué?'",
      "No — it should be 'Tu sont fatigué?'",
      "No — it should be 'Tu suis fatigué?'",
    ],
    correct: 1,
    explanation: "Tu → es (not est). 'Tu est' is one of the most common errors. 'Est' is for il/elle only. Correct: 'Tu es fatigué(e)?'",
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
    explanation: "Elle → est. Note: 'canadienne' is the feminine form of 'canadien'. In French, adjectives agree with the noun they describe.",
  },
  {
    question: "You're greeting your principal: 'Vous ___ très occupé.' Fill in the blank.",
    options: ["suis", "es", "est", "êtes"],
    correct: 3,
    explanation: "Vous → êtes. 'Êtes' has a circumflex accent on the ê — don't forget it. This applies whether 'vous' is one person (formal) or multiple people.",
  },
  {
    question: "There are six students: three girls and three boys. Which form of être describes them?",
    options: ["est", "sont", "sommes", "êtes"],
    correct: 1,
    explanation: "Ils/elles → sont. Mixed groups use 'ils' (masculine plural), so: 'Ils sont en classe.' Even if only one person in the group is male, you use 'ils' + 'sont'.",
  },
  {
    question: "Marie says 'Je suis fatiguée.' What does the double -e tell you?",
    options: ["She is very tired", "She is a girl — the -e marks feminine agreement", "It's a typo — should be fatigué", "She is speaking formally"],
    correct: 1,
    explanation: "In French, adjectives agree with the person they describe. A girl adds -e: fatiguée. A boy says: fatigué. This is called adjectival agreement and it applies throughout French grammar.",
  },
  {
    question: "How do you say 'Are we in the right class?' using être?",
    options: ["Nous sommes dans la bonne classe?", "Nous est dans la bonne classe?", "Nous êtes dans la bonne classe?", "Sommes-vous dans la bonne classe?"],
    correct: 0,
    explanation: "'Nous sommes dans la bonne classe?' — with rising intonation at the end, it becomes a question. 'Dans la bonne classe' = in the right class. Note: 'bonne' goes BEFORE the noun (BAGS adjective).",
  },
  {
    question: "A girl says 'Je suis étudiant.' What should she say instead?",
    options: ["Je suis étudiante.", "J'ai étudiante.", "Je suis une étudiant.", "There is no mistake."],
    correct: 0,
    explanation: "Professions after être agree in gender. Étudiant (masculine) → étudiante (feminine, add -e). Note: French does NOT use an article before professions after être: 'Je suis étudiante' not 'Je suis une étudiante'.",
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
