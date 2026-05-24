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
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Final Test</p>
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

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm md:p-12">
          <div className="text-4xl">🎓</div>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">You finished French Foundations.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Five units, nineteen lessons, and five unit tests — you have gone from zero to greetings, sentences, everyday vocabulary, descriptions, and daily life, all in French. That is genuinely impressive.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[["5", "Units"], ["19", "Lessons"], ["Done", "🎉"]].map(([n, label]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-3xl font-black">{n}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-5/lesson-4" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">Explore more courses</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
