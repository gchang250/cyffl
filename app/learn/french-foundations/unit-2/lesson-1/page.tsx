import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import FillInTheBlank from "@/components/FillInTheBlank";

const flashcards = [
  { front: "je", back: "I", subtext: "Always lowercase, unless it starts a sentence." },
  { front: "tu", back: "you (informal)", subtext: "Use with friends, family, kids, and animals." },
  { front: "il", back: "he / it (masc.)", subtext: "For a male person OR any masculine noun." },
  { front: "elle", back: "she / it (fem.)", subtext: "For a female person OR any feminine noun." },
  { front: "nous", back: "we", subtext: "More formal, often replaced by 'on' in conversation." },
  { front: "vous", back: "you (formal or plural)", subtext: "Singular formal: teacher, stranger. Or simply plural: 'you all.'" },
  { front: "ils", back: "they (masc. or mixed)", subtext: "Even one male in a group → use ils." },
  { front: "elles", back: "they (all fem.)", subtext: "Only for groups where everyone is female." },
];

const matchPairs = [
  { left: "je", right: "I" },
  { left: "tu", right: "you (casual)" },
  { left: "il", right: "he" },
  { left: "elle", right: "she" },
  { left: "nous", right: "we" },
  { left: "vous", right: "you (formal/plural)" },
  { left: "ils", right: "they (mixed/masc.)" },
  { left: "elles", right: "they (all fem.)" },
];

const fillIn = [
  {
    before: "",
    after: "m'appelle Sophie. (Sophie speaking)",
    answer: "Je",
    hint: "I",
    translation: "My name is Sophie.",
  },
  {
    before: "Marc et Léa parlent beaucoup.",
    after: "sont bavards.",
    answer: "Ils",
    hint: "they (mixed group)",
    translation: "Marc and Léa talk a lot. They are chatty.",
  },
  {
    before: "Madame Dupont, est-ce que",
    after: "parlez français?",
    answer: "vous",
    hint: "you (formal)",
    translation: "Madam Dupont, do you speak French?",
  },
  {
    before: "Sofia et Emma sont amies.",
    after: "habitent à Québec.",
    answer: "Elles",
    hint: "they (all female)",
    translation: "Sofia and Emma are friends. They live in Québec.",
  },
];

const quiz = [
  {
    question: "Your friend asks you something. Which pronoun represents 'you' in an informal context?",
    options: ["vous", "ils", "tu", "elle"],
    correct: 2,
    explanation: "Tu is the informal 'you'. Use it with friends, family, peers, children, and pets. Using 'vous' with a friend sounds oddly formal.",
  },
  {
    question: "A group of 4 boys and 1 girl: which pronoun do you use for 'they'?",
    options: ["elles", "ils", "nous", "vous"],
    correct: 1,
    explanation: "Even one male in a group → use 'ils'. French uses masculine plural as the default for mixed groups. This rule applies even if there's 99 girls and 1 boy.",
  },
  {
    question: "You're speaking to your principal. Which 'you' do you use?",
    options: ["tu", "il", "vous", "elles"],
    correct: 2,
    explanation: "Vous is the formal 'you': use it with teachers, bosses, strangers, older people, and anyone in a professional context. Using 'tu' with a principal is considered rude.",
  },
  {
    question: "What's the difference between 'nous' and 'on'?",
    options: [
      "Nous is plural, on is singular.",
      "Both mean 'we'; on is more casual in conversation.",
      "On means 'one' and nous means 'we'.",
      "There is no difference.",
    ],
    correct: 1,
    explanation: "Both mean 'we'. 'On' is used constantly in everyday spoken French: 'On y va?' (Shall we go?) sounds natural; 'Nous y allons?' sounds formal. In written French and formal speech, 'nous' is preferred.",
  },
  {
    question: "'Il' can refer to which of the following?",
    options: [
      "Only a male person",
      "A male person OR any masculine noun (table, livre, etc.)",
      "Only objects, not people",
      "Both male and female people",
    ],
    correct: 1,
    explanation: "In French, every noun has a gender. 'Il' replaces any masculine noun: 'le livre' → 'il', 'le chat' → 'il', 'mon ami' → 'il'. It's not just for people. Same for 'elle' with feminine nouns.",
  },
  {
    question: "Sophie et Claire habitent à Paris. _____ parlent français.",
    options: ["Ils", "Elles", "Nous", "Vous"],
    correct: 1,
    explanation: "'Elles': because Sophie and Claire are both female. If even one person in the group is male, you'd use 'ils'. All-female groups → 'elles'.",
  },
  {
    question: "When does 'vous' mean 'you all' rather than 'you (formal)'?",
    options: [
      "Only when speaking to teachers",
      "When speaking to more than one person at once",
      "Only in writing",
      "'Vous' always means you (formal): never you all",
    ],
    correct: 1,
    explanation: "'Vous' has two uses: (1) formal singular 'you' (one person you respect), and (2) plural 'you' (speaking to multiple people regardless of formality). 'Vous êtes tous les bienvenus' = 'You are all welcome': plural, not necessarily formal.",
  },
  {
    question: "In spoken French, which sentence would you actually hear in casual conversation?",
    options: [
      "'Nous allons au cinéma ce soir.'",
      "'On va au cinéma ce soir.'",
      "Both are equally common",
      "Neither: you'd use 'vous' instead",
    ],
    correct: 1,
    explanation: "'On va au cinéma ce soir' is what real French speakers say in conversation. 'Nous allons' sounds formal and bookish in everyday speech. Learning 'on' = 'we' early is essential for understanding natural French.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Subject Pronouns
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Eight little words, je, tu, il, elle, nous, vous, ils, elles, that
              you'll use in literally every French sentence.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-xs font-bold text-[#526173]">At a glance</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ["je", "I"],
                ["tu", "you (casual)"],
                ["il / elle", "he / she"],
                ["nous", "we"],
                ["vous", "you (formal)"],
                ["ils / elles", "they"],
              ].map(([fr, en]) => (
                <div key={fr} className="rounded-xl bg-[#FFFDF7] px-3 py-2">
                  <span className="font-black text-[#0B1F3A]">{fr}</span>
                  <span className="ml-2 text-sm text-[#526173]">{en}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tu vs Vous callout */}
        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Tu vs. Vous</p>
          <div className="mt-3 grid gap-4 text-sm leading-7 text-white/80 md:grid-cols-2">
            <div>
              <p className="font-black text-white">tu (informal)</p>
              <p>Friends, classmates, family, kids, pets. Using tu with the wrong person can come across as rude.</p>
            </div>
            <div>
              <p className="font-black text-white">vous (formal)</p>
              <p>Teachers, bosses, strangers, anyone older you don't know well. Also used for 'you all' (plural).</p>
            </div>
          </div>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Eight pronouns, flip each one.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Subject pronouns" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pronouns</h2>
          <p className="mt-1 text-[#526173]">Connect each French pronoun to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Pronoun pairs" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Pick the right pronoun for each sentence.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Choose the pronoun" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your pronoun knowledge.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Pronouns quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">
            You know all eight French subject pronouns.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: être, the most important verb in French. It means "to be,"
            and you'll use it constantly.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-1/lesson-3"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-2/lesson-2"
              className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]"
            >
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
