import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the past participle of 'manger'?",
    options: ["mangé", "mangit", "mangi", "mangant"],
    correct: 0,
    explanation: "Regular -er verbs: remove -er, add -é. Manger → mangé.",
  },
  {
    question: "Which auxiliary does 'aller' use in the passé composé?",
    options: ["avoir", "être", "faire", "aller itself"],
    correct: 1,
    explanation: "Aller is one of the DR MRS VANDERTRAMP verbs and uses être. Elle est allée = She went.",
  },
  {
    question: "How do you say 'She went to Paris' using aller?",
    options: ["Elle a allée à Paris.", "Elle est allé à Paris.", "Elle est allée à Paris.", "Elle a aller à Paris."],
    correct: 2,
    explanation: "Aller uses être. Subject is elle (feminine), past participle allé + -e = allée. Elle est allée à Paris.",
  },
  {
    question: "What is the past participle of 'boire'?",
    options: ["buvé", "boiré", "bu", "boit"],
    correct: 2,
    explanation: "Boire (to drink) → bu (irregular). J'ai bu de l'eau = I drank water.",
  },
  {
    question: "Which sentence uses the past participle agreement correctly?",
    options: ["Il est arrivée.", "Elle est arrivé.", "Ils sont arrivés.", "Elles sont arrivé."],
    correct: 2,
    explanation: "Ils (masculine plural) → arrivés (-s added). Il → arrivé (no addition), Elle → arrivée (-e), Elles → arrivées (-es).",
  },
  {
    question: "What is the past participle of 'faire'?",
    options: ["faisé", "faisit", "fait", "faru"],
    correct: 2,
    explanation: "Faire → fait is one of the most important irregular past participles.",
  },
  {
    question: "How do you say 'two days ago' in French?",
    options: ["depuis deux jours", "il y a deux jours", "avant deux jours", "deux jours avant"],
    correct: 1,
    explanation: "Il y a + time period = [time period] ago. Il y a deux jours = two days ago.",
  },
  {
    question: "Which verb uses être as its auxiliary?",
    options: ["manger", "regarder", "tomber", "finir"],
    correct: 2,
    explanation: "Tomber (to fall) is in the DR MRS VANDERTRAMP group and uses être. Elle est tombée = She fell.",
  },
  {
    question: "Complete: 'Hier, nous _____ au restaurant.' (aller)",
    options: ["avons allé", "sommes allés", "avons allés", "sommes aller"],
    correct: 1,
    explanation: "Aller uses être. Nous (masculine/mixed) → sommes allés (-s for plural). Nous sommes allés au restaurant.",
  },
  {
    question: "What does 'l'année dernière' mean?",
    options: ["next year", "this year", "last year", "a long time ago"],
    correct: 2,
    explanation: "L'année dernière = last year. Dernier/dernière = last (in time).",
  },
];

export default function Unit6TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6">
          <span className="rounded-full bg-[#EDE9FE] text-[#7C3AED] px-3 py-1 text-xs font-black">Unit 6 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Talking About the Past</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">10 questions on Unit 6: passé composé with avoir and être, irregular past participles, and past time expressions.</p>
        </div>
        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 6 Test · 10 questions" />
        </section>
        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 7?</p>
          <p className="mt-2 text-[#526173]">Unit 7 introduces the most common irregular verbs in French — verbs you'll use every day.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-6/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-7/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 7 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
