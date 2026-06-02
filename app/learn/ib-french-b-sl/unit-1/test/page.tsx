import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "What is the guiding principle of the Identities theme?",
    options: [
      "Explore the challenges and opportunities faced by individuals in the modern world",
      "Explore the nature of the self and what it is to be human",
      "Explore the ways human creativity and innovation affect our world",
      "Explore the ways groups of people organise themselves",
    ],
    correct: 1,
    explanation: "Identities guiding principle: 'Explore the nature of the self and what it is to be human.' All texts in this theme connect to selfhood, belonging, and what shapes a person.",
  },
  {
    question: "A text about a teenager joining an online gaming community with its own language and culture fits which Identities sub-topic?",
    options: ["Health and well-being", "Lifestyles", "Subcultures", "Beliefs and values"],
    correct: 2,
    explanation: "Subcultures — groups within a larger culture with their own distinct identity and norms — is an official Identities sub-topic.",
  },
  {
    question: "What is the guiding principle of the Experiences theme?",
    options: [
      "Explore and tell the stories of the events, experiences and journeys that shape our lives",
      "Explore the ways in which groups of people organise themselves",
      "Explore the nature of the self and what it is to be human",
      "Explore the challenges faced by individuals and communities",
    ],
    correct: 0,
    explanation: "Experiences guiding principle: 'Explore and tell the stories of the events, experiences and journeys that shape our lives.'",
  },
  {
    question: "A family's annual pilgrimage to their ancestral village fits which Experiences sub-topic?",
    options: ["Leisure activities", "Life stories", "Customs and traditions", "Rites of passage"],
    correct: 2,
    explanation: "Customs and traditions — cultural practices passed down through generations — is an official Experiences sub-topic.",
  },
  {
    question: "What is the guiding principle of Human Ingenuity?",
    options: [
      "Explore the challenges and opportunities faced by communities in the modern world",
      "Explore the ways in which human creativity and innovation affect our world",
      "Explore the nature of the self and what it is to be human",
      "Explore how groups organise themselves through common systems",
    ],
    correct: 1,
    explanation: "Human Ingenuity guiding principle: 'Explore the ways in which human creativity and innovation affect our world.'",
  },
  {
    question: "Which is an official IB guiding question for Human Ingenuity?",
    options: [
      "What constitutes an identity?",
      "How does our past shape our present and future?",
      "How do the media change the way we relate to each other?",
      "What is the individual's role in the community?",
    ],
    correct: 2,
    explanation: "'How do the media change the way we relate to each other?' is one of the two official IB guiding questions for Human Ingenuity.",
  },
  {
    question: "What is the guiding principle of Social Organisation?",
    options: [
      "Explore how human creativity and innovation affect our world",
      "Explore the challenges and opportunities in the modern world",
      "Explore and tell the stories of events that shape our lives",
      "Explore the ways in which groups of people organise themselves through common systems or interests",
    ],
    correct: 3,
    explanation: "Social Organisation guiding principle: 'Explore the ways in which groups of people organize themselves, or are organized, through common systems or interests.'",
  },
  {
    question: "A text about stricter school attendance rules and their impact on students fits which Social Organisation sub-topic?",
    options: ["Social relationships", "The working world", "Law and order", "Education"],
    correct: 3,
    explanation: "Education — access to, structure of, and rules within — is an official Social Organisation sub-topic.",
  },
  {
    question: "What is the guiding principle of Sharing the Planet?",
    options: [
      "Explore the nature of the self and what it is to be human",
      "Explore the ways groups organise themselves through common systems",
      "Explore the challenges and opportunities faced by individuals and communities in the modern world",
      "Explore the ways human creativity and innovation affect our world",
    ],
    correct: 2,
    explanation: "Sharing the Planet guiding principle: 'Explore the challenges and opportunities faced by individuals and communities in the modern world.'",
  },
  {
    question: "An Individual Oral image shows a polluted river running through a slum. Which two Sharing the Planet sub-topics does this connect to?",
    options: [
      "Ethics and Globalisation",
      "The environment and Equality",
      "Peace and conflict and Human rights",
      "Urban and rural environment and Globalisation",
    ],
    correct: 1,
    explanation: "A polluted river = environmental damage (The environment). A slum = inequality in access to clean water and safe living conditions (Equality). Both are official sub-topics.",
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
            10 questions — 2 per theme. Guiding principles, recommended sub-topics, and how to identify which theme a text or image belongs to.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers Paper 2 — reading and listening comprehension strategies, question types, and grammar.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-1/lesson-5" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
