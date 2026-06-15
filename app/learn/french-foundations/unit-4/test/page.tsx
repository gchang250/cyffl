import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Which color adjective is invariable (never changes form)?",
    options: ["vert", "blanc", "orange", "gris"],
    correct: 2,
    explanation: "Orange and marron are invariable: they never change: une robe orange, un sac marron.",
  },
  {
    question: "What is the feminine form of 'blanc'?",
    options: ["blancе", "blanche", "blancie", "blancs"],
    correct: 1,
    explanation: "Blanc has an irregular feminine: blanche. Most colors just add -e for feminine.",
  },
  {
    question: "Which adjective goes BEFORE the noun?",
    options: ["intéressant", "rouge", "difficile", "petit"],
    correct: 3,
    explanation: "Petit is a BAGS (Size) adjective and goes before: un petit café, une petite maison.",
  },
  {
    question: "What is the 'nous' form of 'parler'?",
    options: ["parlez", "parlons", "parlent", "parle"],
    correct: 1,
    explanation: "Nous form of -er verbs: remove -er, add -ons. Parl + ons = parlons.",
  },
  {
    question: "Which is the correct 'tu' form of 'écouter'?",
    options: ["écoute", "écoutez", "écoutes", "écoutons"],
    correct: 2,
    explanation: "Tu form: remove -er, add -es. Écout + es = écoutes.",
  },
  {
    question: "What does 'Où' mean?",
    options: ["Who", "When", "Where", "Why"],
    correct: 2,
    explanation: "Où = where. Note: où (with accent) = where, ou (no accent) = or: different words!",
  },
  {
    question: "'Est-ce que tu habites à Québec?' is which type of question?",
    options: ["Intonation", "Est-ce que", "Inversion", "Tag question"],
    correct: 1,
    explanation: "Est-ce que is placed at the start, before the subject. It's the most common question form in spoken French.",
  },
  {
    question: "How do you say 'a beautiful house' in French (maison = feminine)?",
    options: ["une maison beau", "une belle maison", "une maison belle", "un beau maison"],
    correct: 1,
    explanation: "Beau/belle is a BAGS adjective and goes BEFORE the noun. Feminine of beau = belle. Une belle maison.",
  },
  {
    question: "'Ils regardent la télé' means:",
    options: ["He watches TV.", "We watch TV.", "They watch TV.", "You watch TV."],
    correct: 2,
    explanation: "Ils = they (masculine plural). Regardent is the ils/elles form of regarder (remove -er, add -ent).",
  },
  {
    question: "Why is 'nous mangeons' spelled with an extra 'e'?",
    options: ["It's irregular", "To keep the g soft before -ons", "It's optional", "It comes from Latin spelling"],
    correct: 1,
    explanation: "G before 'o' sounds hard. Adding e (mangeons) keeps the g soft, like in 'manger' itself.",
  },
];

export default function Unit4TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">← French Foundations</Link>
        <div className="mt-6">
          <span className="rounded-full bg-[#FEF9C3] px-3 py-1 text-xs font-black text-[#854D0E]">Unit 4 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Describing Things</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">10 questions covering Unit 4: colors, adjective agreement and placement, regular -er verbs, and question formation.</p>
        </div>
        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 4 Test · 10 questions" />
        </section>
        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-lg font-black">Ready for Unit 5?</p>
          <p className="mt-2 text-[#526173]">Unit 5 covers daily life: food and drink, school, telling time, and getting around.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-4/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-5/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 5 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
