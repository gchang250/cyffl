import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Je m'appelle…", back: "My name is…", subtext: "Literally: 'I call myself…'" },
  { front: "Comment tu t'appelles?", back: "What's your name?", subtext: "Informal, use with friends or classmates." },
  { front: "Comment vous appelez-vous?", back: "What's your name?", subtext: "Formal, use with adults or strangers." },
  { front: "J'ai [X] ans.", back: "I am [X] years old.", subtext: "Literally: 'I have [X] years.' (French uses avoir/have, not être/be!)" },
  { front: "Je suis de…", back: "I am from…", subtext: "Use with a city or country." },
  { front: "J'habite à…", back: "I live in…", subtext: "Use with a city." },
  { front: "Enchanté(e)!", back: "Nice to meet you!", subtext: "Add the -e if you're a girl: enchantée." },
];

const fillIn = [
  {
    before: "Je",
    after: "Léa.",
    answer: "m'appelle",
    hint: "my name is",
    translation: "My name is Léa.",
  },
  {
    before: "J'ai quinze",
    after: ".",
    answer: "ans",
    hint: "years (age)",
    translation: "I am fifteen years old.",
  },
  {
    before: "Je suis",
    after: "Toronto.",
    answer: "de",
    hint: "from",
    translation: "I am from Toronto.",
  },
  {
    before: "Comment tu",
    after: "?",
    answer: "t'appelles",
    hint: "what's your name (informal)",
    translation: "What's your name?",
  },
  {
    before: "J'habite",
    after: "Montréal.",
    answer: "à",
    hint: "in (a city)",
    translation: "I live in Montréal.",
  },
];

const quiz = [
  {
    question: "How do you say 'My name is Marc' in French?",
    options: ["Je suis Marc.", "Je m'appelle Marc.", "Mon nom Marc.", "J'appelle Marc."],
    correct: 1,
    explanation: "Je m'appelle literally means 'I call myself', it's the standard way to give your name.",
  },
  {
    question: "How do you say your age in French?",
    options: ["Je suis 16 ans.", "Je m'appelle 16 ans.", "J'ai 16 ans.", "Je fais 16 ans."],
    correct: 2,
    explanation: "French uses avoir (to have) for age, 'J'ai 16 ans' = 'I have 16 years.'",
  },
  {
    question: "You meet a teacher for the first time. They ask your name formally. What do they say?",
    options: [
      "Comment tu t'appelles?",
      "Comment vous appelez-vous?",
      "Tu t'appelles comment?",
      "C'est quoi ton nom?",
    ],
    correct: 1,
    explanation: "Comment vous appelez-vous? is the formal version, appropriate with adults and strangers.",
  },
  {
    question: "Sofia just met someone new and wants to say 'Nice to meet you!' What does she say?",
    options: ["Au revoir!", "Ça va?", "Merci!", "Enchantée!"],
    correct: 3,
    explanation: "Enchantée (feminine form) means 'nice to meet you.' Enchanté is the masculine form.",
  },
  {
    question: "Which sentence correctly says 'I live in Paris'?",
    options: ["Je suis à Paris.", "Je suis de Paris.", "J'habite à Paris.", "J'habite de Paris."],
    correct: 2,
    explanation: "J'habite à + city = I live in [city]. Je suis de = I am from. These are two different expressions — don't mix them up.",
  },
  {
    question: "A boy introduces himself: 'Enchanté ou Enchantée?'",
    options: ["Enchantée — because he's meeting a new person", "Enchanté — because he is masculine", "Both are correct for anyone", "Neither — boys say 'Bonjour' only"],
    correct: 1,
    explanation: "Enchanté is the masculine form; Enchantée is feminine. The speaker's own gender determines which form to use.",
  },
  {
    question: "How would you formally ask an adult their name?",
    options: ["T'appelles comment?", "Tu t'appelles?", "Comment vous appelez-vous?", "C'est quoi votre nom?"],
    correct: 2,
    explanation: "Comment vous appelez-vous? is the formal way to ask someone's name. Use this with teachers, strangers, and adults you don't know well.",
  },
  {
    question: "Fill in: 'Je suis ___ Montréal.' (I am from Montreal.)",
    options: ["à", "en", "de", "au"],
    correct: 2,
    explanation: "Je suis de + city = I am from [city]. 'Je suis à' would mean 'I am in' (location right now), which is different.",
  },
];

export default function Lesson2Page() {
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
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Introducing Yourself
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Say your name, age, and where you're from, the basics of any
              first conversation in French.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Watch out</p>
              <p className="mt-2 leading-7 text-white/80">
                In French, you{" "}
                <span className="font-black text-white">have</span> years old
               , not <span className="font-black text-white">are</span>. Say{" "}
                <span className="font-black text-white">J'ai 15 ans</span>{" "}
                (I have 15 years), not 'Je suis 15 ans.'
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Sample intro</p>
              <div className="mt-3 space-y-1">
                <p className="font-black">Bonjour! Je m'appelle Léa.</p>
                <p className="font-black">J'ai seize ans.</p>
                <p className="font-black">Je suis de Vancouver.</p>
                <p className="mt-2 text-sm text-[#526173]">
                  Hello! My name is Léa. I am sixteen. I am from Vancouver.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Learn these seven phrases, they're the backbone of any intro.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Introducing yourself" />
          </div>
        </section>

        {/* Fill in the blank */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Type the missing word, then press Check.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Introduction sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions, let's see what you've got.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Introductions quiz" />
          </div>
        </section>

        {/* Done */}
        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You can introduce yourself in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: how to ask someone how they're doing, and actually answer
            the question.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-1/lesson-1"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-1/lesson-3"
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
