import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A text discusses how social media has changed teenagers' sense of self. Which theme is this?",
    options: ["Sharing the Planet", "Identities", "Human Ingenuity", "Experiences"],
    correct: 1,
    explanation: "Personal and cultural identity — including how external forces shape who we are — falls under the Identities theme.",
  },
  {
    question: "What does 'le bien-être' mean?",
    options: ["Lifestyle", "Well-being", "Belief", "Value"],
    correct: 1,
    explanation: "Le bien-être = well-being (physical and mental health together). It is a key Identities sub-topic.",
  },
  {
    question: "A text about a family emigrating from Morocco to Canada and adjusting to a new culture fits best under:",
    options: ["Human Ingenuity", "Sharing the Planet", "Social Organisation", "Experiences"],
    correct: 3,
    explanation: "Migration, cultural encounters, and life abroad are Experiences sub-topics.",
  },
  {
    question: "What does 'la mondialisation' mean?",
    options: ["Globalisation", "Environmental protection", "Community life", "National identity"],
    correct: 0,
    explanation: "La mondialisation = globalisation — the increasing interconnection of the world's economies, cultures, and populations.",
  },
  {
    question: "An article about a city redesigning its school system touches on which theme?",
    options: ["Sharing the Planet", "Human Ingenuity", "Social Organisation", "Identities"],
    correct: 2,
    explanation: "Education and how communities organise access to learning is a Social Organisation sub-topic.",
  },
  {
    question: "Which of these words belongs to the Human Ingenuity theme?",
    options: ["le conflit", "l'immigration", "l'innovation", "la pauvreté"],
    correct: 2,
    explanation: "L'innovation (innovation) is a Human Ingenuity term. The others relate to Sharing the Planet or Experiences.",
  },
  {
    question: "A text about rising economic inequality between nations touches on which theme?",
    options: ["Identities", "Human Ingenuity", "Sharing the Planet", "Experiences"],
    correct: 2,
    explanation: "Global inequality is a Sharing the Planet sub-topic alongside environment, conflict, and human rights.",
  },
  {
    question: "What does 'les rites de passage' mean?",
    options: ["Travel documents", "Rites of passage", "Cultural traditions", "Passport controls"],
    correct: 1,
    explanation: "Les rites de passage are significant life milestones — graduations, ceremonies, coming-of-age events. This is an Experiences topic.",
  },
  {
    question: "A documentary about a community building a new water treatment system to reduce pollution fits under:",
    options: ["Identities and Experiences", "Social Organisation and Sharing the Planet", "Human Ingenuity only", "Experiences only"],
    correct: 1,
    explanation: "Community action (Social Organisation) addressing environmental problems (Sharing the Planet) — IB texts often cross two themes.",
  },
  {
    question: "What does 'le développement durable' mean?",
    options: ["Economic development", "Industrial growth", "Sustainable development", "Cultural development"],
    correct: 2,
    explanation: "Le développement durable = sustainable development — meeting present needs without harming future generations. A core Sharing the Planet concept.",
  },
];

export default function Unit1TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">Unit 1 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">The Five Core Themes</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering all five IB themes, key vocabulary, and how to identify which theme a text belongs to.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers Paper 1 — reading and listening comprehension strategies.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
