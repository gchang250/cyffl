"use client";

import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import SpeakButton from "@/components/SpeakButton";

const pronounRows: [string, string, string][] = [
  ["je", "I", "First person singular (j' before vowel)"],
  ["tu", "you (informal)", "One person, someone you know well"],
  ["il", "he / it (m.)", "One male person or masculine noun"],
  ["elle", "she / it (f.)", "One female person or feminine noun"],
  ["on", "one / we (informal)", "Informal 'we' in everyday speech"],
  ["nous", "we (formal)", "First person plural (formal/written)"],
  ["vous", "you (formal/plural)", "Formal singular OR any plural 'you'"],
  ["ils", "they (m./mixed)", "Males or mixed-gender group"],
  ["elles", "they (f.)", "All-female group only"],
];

const quizQuestions = [
  {
    question: "Which pronoun do you use for a group of two girls and one boy?",
    options: ["Elles", "Ils", "Nous", "Vous"],
    correct: 1,
    explanation:
      "In French, a mixed-gender group always uses ils (masculine plural), even if only one person is male.",
  },
  {
    question: "Your friend says 'Salut!' — which pronoun would you use with them?",
    options: ["Vous", "Il", "Tu", "On"],
    correct: 2,
    explanation:
      "Tu is informal singular 'you' — used with friends, family, and people your age.",
  },
  {
    question: "In everyday spoken French, what does 'on' usually mean?",
    options: ["One", "We", "They", "It"],
    correct: 1,
    explanation:
      "On technically means 'one' but in modern spoken French, on is almost always used to mean 'we': On va manger? (Shall we eat?)",
  },
  {
    question: "Which pronoun replaces 'les professeurs' (teachers)?",
    options: ["Elles", "Ils", "Vous", "Nous"],
    correct: 1,
    explanation:
      "Professeur is masculine, so a group of teachers (even mixed) uses ils.",
  },
];

export default function SubjectPronounsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]">
            Grammar
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Subject Pronouns
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Master the eight French subject pronouns and when to use each one. Essential for conjugating any verb correctly.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">The eight pronouns</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black">English</th>
                  <th className="pb-3 text-left text-[#526173]">Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {pronounRows.map(([pronoun, en, use]) => (
                  <tr key={pronoun}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={pronoun} size="sm" /></td>
                    <td className="py-3 font-black">{pronoun}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-[#526173]">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Tu vs. Vous</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">Tu</p>
                <p className="mt-1 text-white/70">
                  Friends, family, children, people your age or younger. Informal contexts.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">Vous</p>
                <p className="mt-1 text-white/70">
                  Teachers, strangers, older people, professional settings. Also used for any plural group.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">On vs. nous</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="font-black text-[#0B1F3A]">Nous</p>
              <p className="mt-2 text-sm font-black text-[#526173] italic">"Nous allons au cinéma."</p>
              <p className="mt-3 text-sm text-[#526173]">
                Formal/written. Used in essays and formal speech.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="font-black text-[#0B1F3A]">On</p>
              <p className="mt-2 text-sm font-black text-[#526173] italic">"On va au cinéma."</p>
              <p className="mt-3 text-sm text-[#526173]">
                Common in everyday spoken French. Means 'we' in practice.
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Note: </span>
            In conversation, on is used far more than nous to mean 'we.'
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quizQuestions} title="Subject pronoun practice" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link
            href="/learn/french-foundations/unit-2/lesson-1"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
