import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "How do you say 'Good morning' in French?",
    options: ["Bonsoir", "Bonjour", "Salut", "Au revoir"],
    correct: 1,
    explanation: "Bonjour is used in the morning and daytime. Bonsoir is for the evening.",
  },
  {
    question: "Your friend says 'Comment tu t'appelles?' What are they asking?",
    options: ["How are you?", "How old are you?", "What is your name?", "Where are you from?"],
    correct: 2,
    explanation: "Comment tu t'appelles? literally means 'How do you call yourself?' and is the standard way to ask for a name informally.",
  },
  {
    question: "How do you say 'My name is Léa'?",
    options: ["Je suis Léa.", "Je m'appelle Léa.", "J'ai Léa.", "Tu t'appelles Léa."],
    correct: 1,
    explanation: "Je m'appelle (I call myself) is the standard way to give your name in French.",
  },
  {
    question: "Your teacher asks 'Comment allez-vous?' This is...",
    options: ["Informal, to a close friend", "Formal, showing respect", "A farewell", "Asking where you live"],
    correct: 1,
    explanation: "Allez-vous uses the formal 'vous' form. Comment vas-tu? or Ça va? would be informal.",
  },
  {
    question: "Someone says 'Ça va?' and you're doing well. What's the best response?",
    options: ["Pas mal.", "Je m'appelle bien.", "Ça va bien, merci.", "Bonsoir."],
    correct: 2,
    explanation: "Ça va bien, merci is the most natural positive response. Adding merci is polite.",
  },
  {
    question: "How do you say 'I am 15 years old' in French?",
    options: ["Je suis 15 ans.", "J'ai 15 ans.", "J'aime 15 ans.", "Je 15 ans."],
    correct: 1,
    explanation: "In French, age uses avoir (to have), not être (to be). J'ai 15 ans literally means 'I have 15 years.'",
  },
  {
    question: "What does 'D'où es-tu?' mean?",
    options: ["How are you?", "What is your name?", "Where are you from?", "How old are you?"],
    correct: 2,
    explanation: "D'où = from where, es-tu = are you. Together: Where are you from?",
  },
  {
    question: "Which expression is used when meeting someone for the first time?",
    options: ["Au revoir", "À bientôt", "Enchanté(e)", "Bonne nuit"],
    correct: 2,
    explanation: "Enchanté (male) or Enchantée (female) means 'pleased to meet you' and is used when being introduced to someone.",
  },
  {
    question: "What does 'Comme ci, comme ça' mean?",
    options: ["Very well", "Not bad", "So-so", "Not doing great"],
    correct: 2,
    explanation: "Comme ci, comme ça literally means 'like this, like that' — it describes a middling, so-so feeling.",
  },
  {
    question: "How do you correctly say 'I am from Canada'?",
    options: ["Je suis de Canada.", "Je suis du Canada.", "J'ai du Canada.", "Je viens Canada."],
    correct: 1,
    explanation: "Du = de + le. Canada uses the masculine 'le', so de + le = du. Je suis du Canada.",
  },
];

export default function Unit1TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">Unit 1 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">First Words</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering everything from Unit 1: greetings, introductions, and asking how someone is.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers subject pronouns and the two most important verbs in French.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-1/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/french-foundations/unit-2/lesson-1" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
