import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the 'vous' form of 'faire'?",
    options: ["vous faisez", "vous faites", "vous font", "vous faisons"],
    correct: 1,
    explanation: "Faire is irregular: vous faites. One of the most irregular forms in French.",
  },
  {
    question: "What is the 'ils' form of 'pouvoir'?",
    options: ["ils pouvont", "ils peuventent", "ils peuvent", "ils pouvez"],
    correct: 2,
    explanation: "Ils peuvent — stem change from pouv- to peuv-. Je peux, il peut, ils peuvent.",
  },
  {
    question: "Which verb expresses wanting something?",
    options: ["devoir", "savoir", "vouloir", "connaître"],
    correct: 2,
    explanation: "Vouloir = to want. Je veux = I want. Devoir = must, savoir = know (facts), connaître = know (people).",
  },
  {
    question: "How do you say 'I have to study' in French?",
    options: ["Je veux étudier.", "Je peux étudier.", "Je dois étudier.", "Je sais étudier."],
    correct: 2,
    explanation: "Devoir = must / have to. Je dois étudier = I have to study.",
  },
  {
    question: "Which verb do you use to say 'I know Paris'?",
    options: ["Je sais Paris.", "Je connais Paris.", "Je peux Paris.", "Je veux Paris."],
    correct: 1,
    explanation: "Connaître is used for places and people you are acquainted with. Je connais Paris.",
  },
  {
    question: "What does 'Je viens de manger' mean?",
    options: ["I'm going to eat.", "I just ate.", "I want to eat.", "I eat here."],
    correct: 1,
    explanation: "Venir de + infinitive expresses the recent past. Je viens de manger = I just ate.",
  },
  {
    question: "What is the 'ils' form of 'venir'?",
    options: ["ils venent", "ils vient", "ils viennent", "ils venons"],
    correct: 2,
    explanation: "Ils viennent — irregular stem change. Je viens, tu viens, il vient, nous venons, vous venez, ils viennent.",
  },
  {
    question: "What is the 'nous' form of 'prendre'?",
    options: ["nous prennons", "nous prenons", "nous prends", "nous prenez"],
    correct: 1,
    explanation: "Nous prenons — single n. Note: ils/elles prennent has double n, but nous prenons does not.",
  },
  {
    question: "How do you say 'She can speak French'?",
    options: ["Elle fait parler français.", "Elle sait parler français.", "Elle peut parler français.", "Elle veut parler français."],
    correct: 2,
    explanation: "Pouvoir = can / be able to. Elle peut parler français = She can speak French.",
  },
  {
    question: "What does 'Ils viennent de partir' mean?",
    options: ["They are going to leave.", "They just left.", "They want to leave.", "They left yesterday."],
    correct: 1,
    explanation: "Venir de + infinitive = just did something (recent past). Ils viennent de partir = They just left.",
  },
];

export default function Unit7TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6">
          <span className="rounded-full bg-[#FFE4E6] text-[#BE123C] px-3 py-1 text-xs font-black">Unit 7 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Common Irregular Verbs</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">10 questions on Unit 7: faire, pouvoir, vouloir, devoir, savoir, connaître, venir, prendre, and partir.</p>
        </div>
        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 7 Test · 10 questions" />
        </section>
        <section className="mt-16 overflow-hidden rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm md:p-12">
          <div className="text-4xl">🎓</div>
          <p className="mt-4 text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">You finished French Foundations.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/70">
            Seven units, twenty-seven lessons, and seven unit tests. You have gone from zero to greetings, building sentences, everyday vocabulary, past tense, and the most important irregular verbs — all in French. That is genuinely impressive.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[["7", "Units"], ["27", "Lessons"], ["Done", "🎉"]].map(([n, label]) => (
              <div key={label} className="rounded-2xl bg-white/10 p-4 text-center">
                <p className="text-3xl font-black">{n}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-7/lesson-4" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">Explore more courses</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
