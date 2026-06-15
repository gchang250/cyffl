import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "'Je voudrais du lait' means:",
    options: ["I have milk.", "I would like some milk.", "I like milk.", "I am drinking milk."],
    correct: 1,
    explanation: "Je voudrais = I would like. Du lait = some milk. A polite way to order or request.",
  },
  {
    question: "What is 'les maths' in English?",
    options: ["Science", "History", "Maths", "Geography"],
    correct: 2,
    explanation: "Les maths is short for les mathématiques. It's plural in French.",
  },
  {
    question: "'Il est trois heures et demie' means:",
    options: ["3:15", "3:30", "3:45", "3:50"],
    correct: 1,
    explanation: "Et demie = half past. Trois heures et demie = 3:30.",
  },
  {
    question: "Conjugate 'aller' for 'elle': elle ____",
    options: ["allez", "allons", "vont", "va"],
    correct: 3,
    explanation: "Elle va = she goes/is going. Aller is irregular: je vais, tu vas, il/elle va...",
  },
  {
    question: "Why is it 'je vais à la bibliothèque' and not 'au bibliothèque'?",
    options: ["Because bibliothèque is masculine.", "Because bibliothèque is feminine.", "Because bibliothèque starts with b.", "It should be 'au bibliothèque'."],
    correct: 1,
    explanation: "À + le = au (masculine). À + la = à la (feminine). Bibliothèque is feminine, so à la.",
  },
  {
    question: "'Je vais étudier ce soir' means:",
    options: ["I studied last night.", "I study every evening.", "I am going to study tonight.", "I want to study tonight."],
    correct: 2,
    explanation: "Near future: aller + infinitive. Je vais étudier = I am going to study.",
  },
  {
    question: "What is 'la cantine'?",
    options: ["The classroom", "The library", "The cafeteria", "The gym"],
    correct: 2,
    explanation: "La cantine = the school cafeteria. La bibliothèque = library, la salle de classe = classroom.",
  },
  {
    question: "'Il est midi moins le quart' means:",
    options: ["12:00", "12:15", "11:45", "12:45"],
    correct: 2,
    explanation: "Midi = noon (12:00). Moins le quart = quarter to. Noon minus 15 minutes = 11:45.",
  },
  {
    question: "How do you say 'We are going to the park'?",
    options: ["Nous allons à la parc.", "Nous allons au parc.", "Nous allons les parcs.", "Nous vons au parc."],
    correct: 1,
    explanation: "Parc is masculine: à + le = au. Nous allons au parc. Also, the correct nous form is 'allons', not 'vons'.",
  },
  {
    question: "How do you say 'I'm thirsty' in French?",
    options: ["Je suis soif.", "J'ai soif.", "Je mange soif.", "Je bois soif."],
    correct: 1,
    explanation: "French uses avoir for thirst: j'ai soif (literally 'I have thirst'). Same for hunger: j'ai faim.",
  },
];

export default function Unit5TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Test</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Daily Life</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">10 questions covering Unit 5: food and drink, school subjects, telling time, and going places.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Unit 5 covers</p>
            <ul className="mt-3 space-y-2 text-sm text-[#526173]">
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FCE7F3] text-xs font-black text-[#9D174D]">1</span> Food & Drink</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FCE7F3] text-xs font-black text-[#9D174D]">2</span> At School</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FCE7F3] text-xs font-black text-[#9D174D]">3</span> Telling Time</li>
              <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FCE7F3] text-xs font-black text-[#9D174D]">4</span> Going Places</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 5 test" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 6?</p>
          <p className="mt-2 text-[#526173]">Unit 6 introduces the passé composé — your first step into talking about the past in French.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-5/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-6/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 6 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
