"use client";

import Link from "next/link";
import FillInTheBlank from "@/components/FillInTheBlank";
import SpeakButton from "@/components/SpeakButton";

const etreRows: [string, string, string][] = [
  ["je", "je suis", "I am"],
  ["tu", "tu es", "you are (informal)"],
  ["il/elle/on", "il est", "he/she/one is"],
  ["nous", "nous sommes", "we are"],
  ["vous", "vous êtes", "you are (formal/plural)"],
  ["ils/elles", "ils sont", "they are"],
];

const avoirRows: [string, string, string][] = [
  ["je", "j'ai", "I have"],
  ["tu", "tu as", "you have"],
  ["il/elle/on", "il a", "he/she/one has"],
  ["nous", "nous avons", "we have"],
  ["vous", "vous avez", "you have"],
  ["ils/elles", "ils ont", "they have"],
];

const etreExamples: { fr: string; en: string }[] = [
  { fr: "Je suis étudiant(e).", en: "I am a student." },
  { fr: "Tu es fatigué?", en: "Are you tired?" },
  { fr: "Elle est canadienne.", en: "She is Canadian." },
  { fr: "Nous sommes à l'école.", en: "We are at school." },
];

const avoirExamples: { fr: string; en: string }[] = [
  { fr: "J'ai un chien.", en: "I have a dog." },
  { fr: "Il a vingt ans.", en: "He is twenty (years old)." },
  { fr: "Vous avez le temps?", en: "Do you have the time?" },
  { fr: "Elles ont faim.", en: "They are hungry." },
];

const avoirExpressions: { fr: string; en: string }[] = [
  { fr: "avoir faim", en: "to be hungry (lit: to have hunger)" },
  { fr: "avoir soif", en: "to be thirsty" },
  { fr: "avoir chaud", en: "to be hot" },
  { fr: "avoir froid", en: "to be cold" },
  { fr: "avoir peur", en: "to be afraid" },
  { fr: "avoir raison", en: "to be right" },
  { fr: "avoir tort", en: "to be wrong" },
  { fr: "avoir besoin de", en: "to need" },
  { fr: "avoir envie de", en: "to want / feel like" },
  { fr: "avoir l'air", en: "to seem / look like" },
];

const fillExercises = [
  {
    before: "J'",
    after: "étudiant. (être)",
    answer: "suis",
    hint: "je form of être",
    translation: "I am a student.",
  },
  {
    before: "Elle",
    after: "faim. (avoir)",
    answer: "a",
    hint: "elle form of avoir",
    translation: "She is hungry.",
  },
  {
    before: "Nous",
    after: "canadiens. (être)",
    answer: "sommes",
    hint: "nous form of être",
    translation: "We are Canadian.",
  },
  {
    before: "Ils",
    after: "un chien. (avoir)",
    answer: "ont",
    hint: "ils form of avoir",
    translation: "They have a dog.",
  },
  {
    before: "Tu",
    after: "fatigué? (être)",
    answer: "es",
    hint: "tu form of être",
    translation: "Are you tired?",
  },
];

export default function EtreAvoirPage() {
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
            Être &amp; Avoir
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The two most important verbs in French — you cannot avoid them. Here is everything you need to know.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Être — to be</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {etreRows.map(([pronoun, fr, en]) => (
                  <tr key={pronoun}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173]">{pronoun}</td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {etreExamples.map((ex) => (
              <div key={ex.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="font-black text-[#0B1F3A]">{ex.fr}</p>
                <p className="mt-1 text-sm text-[#526173]">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Avoir — to have</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {avoirRows.map(([pronoun, fr, en]) => (
                  <tr key={pronoun}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173]">{pronoun}</td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {avoirExamples.map((ex) => (
              <div key={ex.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="font-black text-[#0B1F3A]">{ex.fr}</p>
                <p className="mt-1 text-sm text-[#526173]">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common avoir expressions</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {avoirExpressions.map((expr) => (
              <div key={expr.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="font-black text-[#0B1F3A]">{expr.fr}</p>
                <p className="mt-1 text-sm text-[#526173]">{expr.en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillExercises} title="Être ou avoir?" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link
            href="/learn/french-foundations/unit-2/lesson-2"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
