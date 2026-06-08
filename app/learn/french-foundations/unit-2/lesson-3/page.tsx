import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import MatchPairs from "@/components/MatchPairs";

const conjugationCards = [
  { front: "j'ai", back: "I have", subtext: "j'ai (je + ai → j'ai before a vowel)" },
  { front: "tu as", back: "you have", subtext: "tu + as" },
  { front: "il a / elle a", back: "he has / she has", subtext: "il or elle + a" },
  { front: "nous avons", back: "we have", subtext: "nous + avons" },
  { front: "vous avez", back: "you have (formal/pl.)", subtext: "vous + avez" },
  { front: "ils ont / elles ont", back: "they have", subtext: "ils or elles + ont" },
];

const expressionCards = [
  { front: "J'ai faim.", back: "I'm hungry.", subtext: "Literally: 'I have hunger.' French uses avoir, not être." },
  { front: "J'ai soif.", back: "I'm thirsty.", subtext: "Literally: 'I have thirst.'" },
  { front: "J'ai chaud.", back: "I'm hot.", subtext: "Literally: 'I have heat.'" },
  { front: "J'ai froid.", back: "I'm cold.", subtext: "Literally: 'I have cold.'" },
  { front: "J'ai 15 ans.", back: "I'm 15 years old.", subtext: "Literally: 'I have 15 years.' Already learned this!" },
  { front: "J'ai peur.", back: "I'm scared.", subtext: "Literally: 'I have fear.'" },
  { front: "J'ai raison.", back: "I'm right.", subtext: "Literally: 'I have reason.'" },
  { front: "J'ai tort.", back: "I'm wrong.", subtext: "Literally: 'I have wrong.'" },
];

const matchPairs = [
  { left: "j'ai", right: "I have" },
  { left: "tu as", right: "you have" },
  { left: "il a", right: "he has" },
  { left: "nous avons", right: "we have" },
  { left: "vous avez", right: "you have (formal)" },
  { left: "elles ont", right: "they have (fem.)" },
];

const fillIn = [
  {
    before: "Je n'",
    after: "pas faim.",
    answer: "ai",
    hint: "avoir (je form)",
    translation: "I'm not hungry.",
  },
  {
    before: "Elle",
    after: "dix-sept ans.",
    answer: "a",
    hint: "avoir (elle form)",
    translation: "She is seventeen years old.",
  },
  {
    before: "Nous",
    after: "cours maintenant.",
    answer: "avons",
    hint: "avoir (nous form)",
    translation: "We have class right now.",
  },
  {
    before: "Tu",
    after: "froid?",
    answer: "as",
    hint: "avoir (tu form)",
    translation: "Are you cold?",
  },
  {
    before: "Ils",
    after: "peur.",
    answer: "ont",
    hint: "avoir (ils form)",
    translation: "They are scared.",
  },
];

const quiz = [
  {
    question: "How do you say 'I'm hungry' in French?",
    options: ["Je suis faim.", "J'ai faim.", "J'ai hunger.", "Je mange faim."],
    correct: 1,
    explanation: "French uses avoir (to have) for hunger: j'ai faim = I have hunger = I'm hungry.",
  },
  {
    question: "Camille has 14 years old. How does she say her age?",
    options: [
      "Je suis quatorze ans.",
      "J'ai quatorze.",
      "J'ai quatorze ans.",
      "J'es quatorze ans.",
    ],
    correct: 2,
    explanation: "Age always uses avoir + number + ans. 'J'ai quatorze ans' = I'm fourteen.",
  },
  {
    question: "Which is the correct form for 'vous' + avoir?",
    options: ["vous ont", "vous avez", "vous avons", "vous as"],
    correct: 1,
    explanation: "Vous → avez. That's avoir conjugated for vous.",
  },
  {
    question: "What does 'Il a tort' mean?",
    options: ["He is right.", "He has a tort.", "He is wrong.", "He has a cold."],
    correct: 2,
    explanation: "Avoir tort means 'to be wrong.' Avoir raison = to be right. These expressions use avoir even though English uses 'to be'.",
  },
  {
    question: "Which sentence correctly expresses 'We are thirsty'?",
    options: ["Nous sommes soif.", "Nous avons soif.", "Nous avons la soif.", "Nous buvons soif."],
    correct: 1,
    explanation: "'Avoir soif' = to be thirsty (literally 'to have thirst'). French body-state expressions — hunger, thirst, cold, hot, fear — all use avoir, not être.",
  },
  {
    question: "How do you say 'She is 25 years old' in French?",
    options: ["Elle est vingt-cinq ans.", "Elle a vingt-cinq.", "Elle a vingt-cinq ans.", "Elle est âgée vingt-cinq."],
    correct: 2,
    explanation: "Age always uses avoir + number + ans: 'Elle a vingt-cinq ans.' Never 'Elle est vingt-cinq ans' — être is not used for age in French.",
  },
  {
    question: "What is the correct conjugation of avoir for 'ils/elles'?",
    options: ["ils sont", "ils ont", "ils avez", "ils avons"],
    correct: 1,
    explanation: "Avoir: j'ai · tu as · il/elle a · nous avons · vous avez · ils/elles ont. The full conjugation must be memorized — these are all irregular.",
  },
  {
    question: "Translate: 'Nous avons besoin d'aide.'",
    options: ["We need to help.", "We have help.", "We need help.", "We want help."],
    correct: 2,
    explanation: "'Avoir besoin de' = to need (literally: to have need of). 'Nous avons besoin d'aide' = We need help. One of the most common avoir expressions.",
  },
  {
    question: "Why do French people say 'j'ai chaud' instead of 'je suis chaud'?",
    options: [
      "'Je suis chaud' is actually more correct",
      "French uses avoir for physical sensations — temperature, hunger, thirst, fear, sleep",
      "'Chaud' is an adjective so être can't be used with it",
      "It's a regional variation with no grammatical reason",
    ],
    correct: 1,
    explanation: "French uses avoir for physical sensations: avoir chaud, avoir froid, avoir faim, avoir soif, avoir peur, avoir sommeil. These are 'avoir + noun' — states you 'have'. Note: 'je suis chaud(e)' does exist but means something else (enthusiastic about something) — another reason to memorize these phrases.",
  },
];

export default function Unit2Lesson3Page() {
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
              Unit 2 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Avoir: To Have
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Avoir isn't just 'to have.' In French, it's used for hunger,
              thirst, age, temperature, things English expresses with 'to be.'
            </p>
          </div>

          {/* Conjugation table */}
          <div className="overflow-hidden rounded-2xl border border-[#E7DAB9] bg-white shadow-sm">
            <div className="bg-[#0B1F3A] px-5 py-3">
              <p className="font-black text-white">avoir (present tense)</p>
            </div>
            <div className="divide-y divide-[#E7DAB9]">
              {[
                ["je", "j'ai"],
                ["tu", "tu as"],
                ["il / elle", "il a / elle a"],
                ["nous", "nous avons"],
                ["vous", "vous avez"],
                ["ils / elles", "ils ont / elles ont"],
              ].map(([pro, conj]) => (
                <div key={pro} className="flex items-center justify-between px-5 py-2.5">
                  <span className="text-sm text-[#526173]">{pro}</span>
                  <span className="font-black text-[#0B1F3A]">{conj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The surprise callout */}
        <div className="mt-8 rounded-2xl bg-[#FEF3C7] p-5">
          <p className="font-black text-[#92400E]">🤔 The tricky part</p>
          <p className="mt-2 leading-7 text-[#78350F]">
            In English you say "I am hungry", in French, you say{" "}
            <strong>j'ai faim</strong> (I have hunger). Same idea, different
            verb. Avoir is used for hunger, thirst, temperature, fear, age, and
            more. You'll see it below.
          </p>
        </div>

        {/* Flashcards - conjugation */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Learn the conjugation</h2>
          <p className="mt-1 text-[#526173]">Six forms, commit these to memory.</p>
          <div className="mt-6">
            <FlashCardDeck cards={conjugationCards} title="avoir conjugation" />
          </div>
        </section>

        {/* Expressions */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Avoir expressions</h2>
          <p className="mt-1 text-[#526173]">Eight phrases where French uses avoir instead of être.</p>
          <div className="mt-6">
            <FlashCardDeck cards={expressionCards} title="avoir expressions" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the forms</h2>
          <p className="mt-1 text-[#526173]">Connect each conjugated form to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="avoir pairs" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete with the correct form of avoir.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="avoir in sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your avoir knowledge.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="avoir quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">
            You know both key French verbs, être and avoir.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Last lesson in Unit 2: how to put it all together and form simple
            French sentences, including negatives.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-2/lesson-2"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-2/lesson-4"
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
