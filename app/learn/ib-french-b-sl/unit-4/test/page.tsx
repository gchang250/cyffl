import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "How long is the preparation period before the Individual Oral?",
    options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
    correct: 2,
    explanation: "You have 15 minutes of preparation. Use every minute: identify the theme, plan your description, note the global issue and key vocabulary.",
  },
  {
    question: "The Individual Oral is worth what percentage of the IB French B SL final grade?",
    options: ["20%", "25%", "30%", "45%"],
    correct: 1,
    explanation: "The Individual Oral (IA) = 25%. Each component is 25%: Paper 1 (Written Production), Paper 2A (Reading), Paper 2B (Listening), and the Individual Oral.",
  },
  {
    question: "What are the three Individual Oral marking criteria?",
    options: ["Vocabulary, Grammar, Pronunciation", "Language, Message, Interactive skills", "Description, Analysis, Conclusion", "Fluency, Accuracy, Range"],
    correct: 1,
    explanation: "Criterion A: Language (10 pts), Criterion B: Message (10 pts), Criterion C: Interactive skills (10 pts). Total = 30 points.",
  },
  {
    question: "You receive an image of factory workers in poor conditions. Which phrase best transitions from description to analysis?",
    options: ["'Au premier plan, on voit des ouvriers.'", "'C'est une image intéressante.'", "'Cette image illustre le problème des conditions de travail injustes.'", "'Je pense que c'est triste.'"],
    correct: 2,
    explanation: "'Cette image illustre le problème de…' is a direct, clear transition from description to analysis — naming the global issue the image represents.",
  },
  {
    question: "Which phrase locates an element in the foreground of an image?",
    options: ["'À l'arrière-plan…'", "'Sur la droite…'", "'Au premier plan…'", "'On remarque que…'"],
    correct: 2,
    explanation: "'Au premier plan…' (in the foreground) is used for what is closest in the image. Start your description here.",
  },
  {
    question: "The examiner asks: 'Que pensez-vous de l'impact des réseaux sociaux sur les jeunes?' The best opening is:",
    options: ["'Oui.'", "'C'est compliqué.'", "'À mon avis, les réseaux sociaux ont des effets positifs et négatifs parce que…'", "'Je ne sais pas vraiment.'"],
    correct: 2,
    explanation: "State a clear opinion, then develop with a reason. Never give a one-word answer in the discussion phase — Criterion C requires interaction and development.",
  },
  {
    question: "Which phrase introduces a concession — showing you understand the opposing view?",
    options: ["'Par exemple…'", "'À mon avis…'", "'Il faut admettre que…'", "'En ce qui concerne…'"],
    correct: 2,
    explanation: "'Il faut admettre que…' introduces a concession. Acknowledging the other side shows intellectual maturity and raises your Criterion C score.",
  },
  {
    question: "'Il est essentiel que nous _____ des mesures immédiates.' (prendre — subjunctive)",
    options: ["prenons", "prendre", "prenions", "prendrons"],
    correct: 2,
    explanation: "Il est essentiel que triggers the subjunctive. The subjunctive of prendre (nous) = prenions: 'il est essentiel que nous prenions des mesures immédiates.'",
  },
  {
    question: "After stating your opinion on a global issue, you should always:",
    options: ["Stop and let the examiner respond", "Repeat the same point in different words", "Develop with a reason and an example", "Change the topic immediately"],
    correct: 2,
    explanation: "Opinion + reason + example. Every opinion needs development. 'Par exemple…' followed by a specific case shows message depth (Criterion B).",
  },
  {
    question: "What does 'Ce qui est frappant, c'est…' mean?",
    options: ["In the foreground, one can see…", "This image represents…", "What is striking is…", "According to the image…"],
    correct: 2,
    explanation: "'Ce qui est frappant, c'est…' (What is striking is…) draws attention to the most visually significant or meaningful element. It shows analytical awareness.",
  },
];

export default function Unit4TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FDF4FF] px-3 py-1 text-xs font-black text-[#9333EA]">Unit 4 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Individual Oral (IA)</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions on oral structure, image description language, discussion phrases, and marking criteria.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 4 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black">You've finished IB French B SL.</h2>
          <p className="mt-3 leading-7 text-white/70">
            You've covered all five themes, Paper 1 receptive skills, Paper 2 written production, and the Individual Oral. Keep practising with authentic French content and you'll be exam-ready.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Review the course
            </Link>
            <Link href="/learn" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              All courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
