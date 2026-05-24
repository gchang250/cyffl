import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is 'dix-sept' in numerals?",
    options: ["16", "17", "70", "7"],
    correct: 1,
    explanation: "Dix-sept = dix (10) + sept (7) = 17. French builds the teens this way: dix + the ones digit.",
  },
  {
    question: "What day comes after 'mercredi'?",
    options: ["Mardi", "Vendredi", "Jeudi", "Lundi"],
    correct: 2,
    explanation: "The days in order: lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche.",
  },
  {
    question: "How do you say 'my sister' in French?",
    options: ["Mon frère", "Ma soeur", "Mes soeurs", "Ma fille"],
    correct: 1,
    explanation: "Ma soeur = my sister (soeur is feminine, so use 'ma'). Mon frère = my brother.",
  },
  {
    question: "'J'adore la musique' expresses...",
    options: ["A mild preference", "Dislike", "Strong love", "Neutral opinion"],
    correct: 2,
    explanation: "Adorer is stronger than aimer. J'adore = I love. J'aime = I like.",
  },
  {
    question: "Which month comes after 'mars'?",
    options: ["Février", "Mai", "Avril", "Juin"],
    correct: 2,
    explanation: "The months in order: janvier, février, mars, AVRIL, mai, juin...",
  },
  {
    question: "How do you say 'I don't like vegetables'?",
    options: ["Je n'aime pas les légumes.", "Je déteste les légumes.", "Je n'adore pas les légumes.", "Je pas aime les légumes."],
    correct: 0,
    explanation: "Je n'aime pas = I don't like. Ne + aimer + pas → n'aime before a vowel.",
  },
  {
    question: "'Mon grand-père' means:",
    options: ["My grandmother", "My grandfather", "My uncle", "My great-uncle"],
    correct: 1,
    explanation: "Grand-père = grandfather. Grand-mère = grandmother. Note the accent on père/mère.",
  },
  {
    question: "What is 'quatorze' in numerals?",
    options: ["40", "14", "4", "16"],
    correct: 1,
    explanation: "Quatorze = 14. Quatre = 4, seize = 16, quarante = 40.",
  },
  {
    question: "'Je préfère le sport à la musique' means:",
    options: ["I like sport and music.", "I prefer music to sport.", "I prefer sport to music.", "I love sport and music."],
    correct: 2,
    explanation: "Préférer + A + à + B = to prefer A to B. So: sport is preferred over music.",
  },
  {
    question: "What season is 'l'hiver'?",
    options: ["Spring", "Summer", "Autumn", "Winter"],
    correct: 3,
    explanation: "L'hiver = winter. Le printemps = spring, l'été = summer, l'automne = autumn.",
  },
];

export default function Unit3TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-xs font-black text-[#16A34A]">Unit 3 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Everyday French</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering Unit 3: numbers, days and months, family vocabulary, and expressing likes and dislikes.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 3 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 4?</p>
          <p className="mt-2 text-[#526173]">Unit 4 covers describing things: colors, adjectives, and how to build richer sentences.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-3/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-4/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 4 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
