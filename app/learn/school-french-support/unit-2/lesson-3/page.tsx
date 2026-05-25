import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const irregularCards = [
  { front: "je suis", back: "I am (être)", subtext: "être — to be. Completely irregular: memorize all six forms." },
  { front: "tu es", back: "you are (être)", subtext: "Tu es prêt(e)? — Are you ready?" },
  { front: "il/elle est", back: "he/she is (être)", subtext: "Il est professeur. — He is a teacher." },
  { front: "nous sommes", back: "we are (être)", subtext: "Nous sommes en retard! — We're late!" },
  { front: "vous êtes", back: "you are (être)", subtext: "Vous êtes d'accord? — Do you agree?" },
  { front: "ils/elles sont", back: "they are (être)", subtext: "Ils sont très sympas. — They are very nice." },
  { front: "j'ai", back: "I have (avoir)", subtext: "avoir — to have. Also used for age and physical feelings." },
  { front: "tu as", back: "you have (avoir)", subtext: "Tu as combien de frères? — How many brothers do you have?" },
  { front: "il/elle a", back: "he/she has (avoir)", subtext: "Elle a un chien adorable. — She has an adorable dog." },
  { front: "nous avons", back: "we have (avoir)", subtext: "Nous avons cours à 9h. — We have class at 9." },
  { front: "vous avez", back: "you have (avoir)", subtext: "Vous avez raison. — You are right." },
  { front: "ils/elles ont", back: "they have (avoir)", subtext: "Ils ont de la chance. — They are lucky." },
  { front: "je vais", back: "I go (aller)", subtext: "aller — to go. Near future: aller + infinitive." },
  { front: "tu vas", back: "you go (aller)", subtext: "Tu vas bien? — Are you doing well?" },
  { front: "il/elle va", back: "he/she goes (aller)", subtext: "Il va à l'école. — He goes to school." },
  { front: "nous allons", back: "we go (aller)", subtext: "Nous allons manger. — We are going to eat." },
  { front: "vous allez", back: "you go (aller)", subtext: "Vous allez où? — Where are you going?" },
  { front: "ils/elles vont", back: "they go (aller)", subtext: "Ils vont au parc demain. — They're going to the park tomorrow." },
];

const pairs = [
  { left: "je vais étudier", right: "I am going to study (near future)" },
  { left: "tu vas réussir", right: "you are going to succeed" },
  { left: "il va pleuvoir", right: "it is going to rain" },
  { left: "nous allons partir", right: "we are going to leave" },
  { left: "vous allez voir", right: "you are going to see" },
  { left: "elles vont chanter", right: "they are going to sing" },
];

const exercises = [
  { before: "Je", after: "au gymnase après l'école. (aller)", answer: "vais", hint: "aller → je vais", translation: "I am going to the gym after school." },
  { before: "Ils", after: "très contents de te voir. (être)", answer: "sont", hint: "être → ils sont", translation: "They are very happy to see you." },
  { before: "Nous", after: "faire un pique-nique samedi. (near future of aller)", answer: "allons", hint: "aller + infinitive → nous allons faire", translation: "We are going to have a picnic on Saturday." },
  { before: "Tu", after: "l'air fatigué aujourd'hui. (avoir)", answer: "as", hint: "avoir → tu as (avoir l'air = to look/seem)", translation: "You look tired today." },
  { before: "Vous", after: "à Québec cet été? (aller)", answer: "allez", hint: "aller → vous allez", translation: "Are you going to Quebec City this summer?" },
];

const questions = [
  {
    question: "How is the near future formed in French?",
    options: ["subject + infinitive", "subject + aller + infinitive", "subject + avoir + infinitive", "subject + être + participle"],
    correct: 1,
    explanation: "Near future = aller (conjugated) + infinitive: je vais manger, tu vas partir, nous allons finir.",
  },
  {
    question: "What is the 'vous' form of 'aller'?",
    options: ["vous allez", "vous aller", "vous allons", "vous vont"],
    correct: 0,
    explanation: "Vous allez — the vous form of aller. Full conjugation: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
  },
  {
    question: "'Ils vont jouer au foot' means:",
    options: ["They are playing football.", "They played football.", "They are going to play football.", "They want to play football."],
    correct: 2,
    explanation: "Aller + infinitive = near future. Ils vont jouer = they are going to play. This is the futur proche.",
  },
  {
    question: "Which sentence uses 'être' correctly?",
    options: ["Nous sommes faim.", "Je suis 15 ans.", "Vous êtes en retard.", "Il est froid."],
    correct: 2,
    explanation: "Vous êtes en retard = You are late — correct use of être. Age (j'ai 15 ans) and hunger (j'ai faim) use avoir.",
  },
];

export default function Unit2Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Unit 2 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Irregular Verbs: être, avoir, aller</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">These three verbs appear in almost every French sentence. They don't follow regular patterns — but that's exactly why you must know them perfectly. Aller also unlocks the near future tense.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Near future: aller + infinitive</p>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-[#0B1F3A]">Je <span className="font-bold text-[#D97706]">vais</span> étudier ce soir.</p>
              <p className="text-[#526173] text-xs">I am going to study tonight.</p>
              <p className="text-[#0B1F3A]">Nous <span className="font-bold text-[#D97706]">allons</span> voyager cet été.</p>
              <p className="text-[#526173] text-xs">We are going to travel this summer.</p>
              <p className="text-[#0B1F3A]">Est-ce qu'il <span className="font-bold text-[#D97706]">va</span> répondre?</p>
              <p className="text-[#526173] text-xs">Is he going to answer?</p>
              <div className="mt-2 rounded-xl bg-[#FFFDF7] px-3 py-2">
                <p className="text-xs font-bold text-[#526173]">Negation: ne + aller + pas + infinitive</p>
                <p className="text-xs text-[#526173]">Je ne vais pas sortir. — I'm not going to go out.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={irregularCards} title="être, avoir, aller — all forms" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Near future phrases" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Conjugate être, avoir, or aller" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="être, avoir, aller quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-2/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/school-french-support/unit-2/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
