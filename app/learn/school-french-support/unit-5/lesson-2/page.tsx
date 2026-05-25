import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const selfDescriptionCards = [
  { front: "Je m'appelle…", back: "My name is… — Je m'appelle Sophie.", subtext: "Use this to introduce your name. Never 'Je suis Sophie' in a formal intro." },
  { front: "J'ai … ans.", back: "I am … years old. — J'ai seize ans.", subtext: "French uses avoir (to have) for age, not être (to be)." },
  { front: "Je suis canadien(ne).", back: "I am Canadian. — Nationality adjectives agree with gender.", subtext: "Add -ne for feminine: canadienne, française, britannique." },
  { front: "J'habite à…", back: "I live in… — J'habite à Montréal.", subtext: "Use à for cities: j'habite à Toronto. Use en/au/aux for countries." },
  { front: "J'ai … frère(s) et … sœur(s).", back: "I have … brother(s) and … sister(s).", subtext: "J'ai un frère et deux sœurs. Use je suis fils/fille unique if no siblings." },
  { front: "Je vais au collège / au lycée.", back: "I go to middle school / high school.", subtext: "Or name your school: Je vais à l'école Sainte-Marie." },
  { front: "J'aime … / Je n'aime pas …", back: "I like … / I don't like … — J'aime la musique.", subtext: "Use definite article after aimer: j'aime le football, j'aime les films." },
  { front: "Mon passe-temps préféré, c'est…", back: "My favourite hobby is… — Mon passe-temps préféré, c'est la lecture.", subtext: "A sophisticated alternative to J'aime + infinitive." },
  { front: "Je joue au / à la / aux…", back: "I play… — Je joue au tennis. Je joue aux échecs.", subtext: "Use jouer à for sports and games. Contract à + le → au, à + les → aux." },
  { front: "Je fais du / de la / des…", back: "I do… — Je fais du sport. Je fais de la natation.", subtext: "Use faire de for activities. Du = de + le, de la for feminine, des for plural." },
];

const pairs = [
  { left: "Name", right: "Je m'appelle…" },
  { left: "Age", right: "J'ai … ans." },
  { left: "Nationality", right: "Je suis canadien(ne)." },
  { left: "Where you live", right: "J'habite à…" },
  { left: "Hobbies (games/sports)", right: "Je joue au / à la…" },
  { left: "Hobbies (activities)", right: "Je fais du / de la…" },
];

const exercises = [
  { before: "Je", after: "Luc. (name)", answer: "m'appelle", hint: "Use s'appeler: je m'appelle, tu t'appelles.", translation: "My name is Luc." },
  { before: "J'", after: "quinze ans. (age)", answer: "ai", hint: "French uses avoir for age.", translation: "I am fifteen years old." },
  { before: "J'", after: "à Québec. (to live)", answer: "habite", hint: "habiter à + city name.", translation: "I live in Quebec City." },
  { before: "Je", after: "du football le samedi. (to play → faire de)", answer: "fais", hint: "faire du sport — use faire de for activities.", translation: "I play football on Saturdays." },
  { before: "J'aime la musique, mais je n'", after: "pas les maths. (to like — negation)", answer: "aime", hint: "ne + aimer + pas. The ne contracts before a vowel.", translation: "I like music, but I don't like maths." },
];

const questions = [
  {
    question: "How do you say 'I am 14 years old' in French?",
    options: ["Je suis 14 ans.", "J'ai 14 ans.", "J'habite 14 ans.", "J'aime 14 ans."],
    correct: 1,
    explanation: "French uses avoir (to have) for age: J'ai 14 ans. Never use être for age.",
  },
  {
    question: "How do you say 'I play basketball'?",
    options: ["Je fais du basketball.", "Je joue du basketball.", "Je joue au basketball.", "Je joue le basketball."],
    correct: 2,
    explanation: "For sports played with a ball and team games, use jouer à: je joue au basketball (à + le = au).",
  },
  {
    question: "Which sentence correctly uses 'aimer' with a noun?",
    options: ["J'aime cinéma.", "J'aime un cinéma.", "J'aime le cinéma.", "J'aime de cinéma."],
    correct: 2,
    explanation: "Aimer + noun requires the definite article (le/la/les): j'aime le cinéma, j'aime la musique, j'aime les animaux.",
  },
  {
    question: "What is the feminine form of 'canadien'?",
    options: ["canadiene", "canadienne", "canadiène", "canadien"],
    correct: 1,
    explanation: "Nationality adjectives ending in -en become -enne in the feminine: canadien → canadienne, indien → indienne.",
  },
];

export default function Unit5Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 5 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Writing About Yourself</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              A self-introduction paragraph is one of the most common writing tasks in school French. Cover these key categories in order: your name, age, nationality, where you live, your family, your school, your hobbies, and your likes and dislikes. Use a variety of verbs and connectors to avoid repetition.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Model paragraph</p>
            <p className="mt-3 text-sm leading-7 text-[#526173] italic">
              Je m&apos;appelle Emma et j&apos;ai seize ans. Je suis canadienne et j&apos;habite à Ottawa avec ma famille. J&apos;ai un frère et une sœur. Je vais au lycée Rideau, où j&apos;étudie le français, les maths et les sciences. J&apos;aime beaucoup la musique et je joue de la guitare depuis trois ans. En plus, je fais de la natation le week-end. Par contre, je n&apos;aime pas du tout regarder la télévision car je préfère lire ou sortir avec mes amis.
            </p>
            <p className="mt-3 text-xs text-[#16A34A] font-bold">~80 words · uses 7 different verbs</p>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={selfDescriptionCards} title="Useful phrases for self-description" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-lg">Writing tips</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Use a variety of verbs — don&apos;t just repeat <em>j&apos;aime</em> every sentence. Mix in: <strong>être</strong> (je suis), <strong>avoir</strong> (j&apos;ai), <strong>habiter</strong> (j&apos;habite), <strong>étudier</strong> (j&apos;étudie), <strong>jouer</strong> (je joue), <strong>faire</strong> (je fais), <strong>préférer</strong> (je préfère). Also vary how you start each sentence — don&apos;t begin every one with <em>Je</em>. Try <em>En plus, …</em> or <em>Mon passe-temps préféré, c&apos;est…</em> to show range.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Topic → key French phrase" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the sentences about yourself" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Self-description quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-5/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/school-french-support/unit-5/lesson-3" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
