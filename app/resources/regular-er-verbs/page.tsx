"use client";

import Link from "next/link";
import FillInTheBlank from "@/components/FillInTheBlank";
import SpeakButton from "@/components/SpeakButton";

const parlerRows: [string, string, string][] = [
  ["je", "je parle", "I speak"],
  ["tu", "tu parles", "you speak"],
  ["il/elle", "il parle", "he/she speaks"],
  ["nous", "nous parlons", "we speak"],
  ["vous", "vous parlez", "you speak"],
  ["ils/elles", "ils parlent", "they speak"],
];

const erVerbs: [string, string][] = [
  ["parler", "to speak"],
  ["manger", "to eat"],
  ["regarder", "to watch"],
  ["écouter", "to listen"],
  ["jouer", "to play"],
  ["travailler", "to work"],
  ["habiter", "to live somewhere"],
  ["danser", "to dance"],
  ["chanter", "to sing"],
  ["étudier", "to study"],
  ["chercher", "to look for"],
  ["aimer", "to like / to love"],
  ["marcher", "to walk"],
  ["voyager", "to travel"],
  ["rester", "to stay"],
  ["penser", "to think"],
  ["passer", "to pass / spend (time)"],
  ["porter", "to carry / wear"],
  ["donner", "to give"],
  ["demander", "to ask"],
];

const regarderForms: [string, string][] = [
  ["je regarde", "I watch"],
  ["tu regardes", "you watch"],
  ["il/elle regarde", "he/she watches"],
  ["nous regardons", "we watch"],
  ["vous regardez", "you watch"],
  ["ils/elles regardent", "they watch"],
];

const fillExercises = [
  {
    before: "Tu",
    after: "la musique? (écouter)",
    answer: "écoutes",
    hint: "tu form: add -es",
    translation: "Do you listen to music?",
  },
  {
    before: "Elle",
    after: "à Lyon. (habiter)",
    answer: "habite",
    hint: "elle form: add -e",
    translation: "She lives in Lyon.",
  },
  {
    before: "Nous",
    after: "le film. (regarder)",
    answer: "regardons",
    hint: "nous form: add -ons",
    translation: "We watch the film.",
  },
  {
    before: "Ils",
    after: "beaucoup. (travailler)",
    answer: "travaillent",
    hint: "ils form: add -ent",
    translation: "They work a lot.",
  },
  {
    before: "Vous",
    after: "français? (parler)",
    answer: "parlez",
    hint: "vous form: add -ez",
    translation: "Do you speak French?",
  },
];

export default function RegularErVerbsPage() {
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
            Regular -er Verbs
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The most common verb group in French. Once you know the six endings, you can conjugate hundreds of verbs.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">The -er ending pattern</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black">Parler</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {parlerRows.map(([pronoun, fr, en]) => (
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
          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">The rule: </span>
            Remove the -er ending, then add: -e, -es, -e, -ons, -ez, -ent.
          </div>
          <div className="mt-3 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] p-4 text-sm text-[#92400E]">
            <span className="font-black">Exception — manger: </span>
            nous mangeons (add -e before -ons to keep the g soft).
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common -er verbs</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French infinitive</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {erVerbs.map(([fr, en]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Try it: regarder (to watch)</h2>
          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="text-sm font-black text-[#C9A44C]">Full conjugation</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
              {regarderForms.map(([fr, en]) => (
                <div key={fr} className="rounded-xl bg-white/10 p-3">
                  <p className="font-black">{fr}</p>
                  <p className="mt-0.5 text-xs text-white/60">{en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillExercises} title="Conjugate the verb" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link
            href="/learn/french-foundations/unit-4/lesson-3"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
