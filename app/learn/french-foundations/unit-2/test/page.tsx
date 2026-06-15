import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Which subject pronoun replaces 'Marie et Sophie'?",
    options: ["Il", "Nous", "Elles", "Ils"],
    correct: 2,
    explanation: "A group of only females uses elles. A mixed or all-male group would use ils.",
  },
  {
    question: "What is the correct conjugation of 'être' for 'nous'?",
    options: ["êtes", "sont", "sommes", "suis"],
    correct: 2,
    explanation: "Nous sommes is the first-person plural of être. Vous êtes is for vous, ils/elles sont is third-person plural.",
  },
  {
    question: "How do you say 'They (masculine) have a book'?",
    options: ["Elles ont un livre.", "Ils ont un livre.", "Ils sont un livre.", "Ils avez un livre."],
    correct: 1,
    explanation: "Ils ont uses avoir (to have) conjugated for ils. Sont would be être (to be), which doesn't fit here.",
  },
  {
    question: "Which sentence uses negation correctly?",
    options: ["Je suis ne pas fatigué.", "Je ne suis pas fatigué.", "Je ne pas suis fatigué.", "Je suis pas fatigué."],
    correct: 1,
    explanation: "Ne...pas wraps the conjugated verb: ne + [verb] + pas. So: je NE suis PAS fatigué.",
  },
  {
    question: "When would you use 'Vous' to address one person?",
    options: ["When speaking to a close friend", "When speaking to a younger sibling", "When speaking formally, e.g. to a teacher", "When speaking to a pet"],
    correct: 2,
    explanation: "Vous can be formal singular. Tu is used for friends and family. Using vous with a teacher is more respectful.",
  },
  {
    question: "Conjugate 'avoir' for 'elle': elle ____",
    options: ["as", "ont", "avons", "a"],
    correct: 3,
    explanation: "Elle a = she has. The third-person singular (il/elle) of avoir is 'a'.",
  },
  {
    question: "What does 'J'ai faim' mean?",
    options: ["I am happy", "I have a family", "I am hungry", "I am afraid"],
    correct: 2,
    explanation: "J'ai faim uses avoir idiomatically. French says 'I have hunger' (j'ai faim) rather than 'I am hungry.'",
  },
  {
    question: "What does 'Nous sommes étudiants' mean?",
    options: ["We have students.", "We are students.", "We are studying.", "You are students."],
    correct: 1,
    explanation: "Nous sommes = we are (être). Étudiants = students (plural masculine).",
  },
  {
    question: "Which pronoun is used for a mixed group of boys and girls?",
    options: ["Elles", "Ils", "Vous", "Nous"],
    correct: 1,
    explanation: "In French, a mixed-gender group always uses ils (masculine plural). Elles is only for an all-female group.",
  },
  {
    question: "How do you say 'She is not at school'?",
    options: ["Elle n'est pas à l'école.", "Elle est ne pas à l'école.", "Elle n'a pas à l'école.", "Elle ne pas est à l'école."],
    correct: 0,
    explanation: "Ne + est = n'est (contraction before vowel). N'est pas wraps the verb: elle N'EST PAS à l'école.",
  },
];

export default function Unit2TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French Foundations
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Building Sentences</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering Unit 2: subject pronouns, être, avoir, and simple sentence structure.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 3?</p>
          <p className="mt-2 text-[#526173]">Unit 3 covers everyday vocabulary: numbers, days, family, and expressing what you like.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-2/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-3/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 3 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
