"use client";

import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";
import SpeakButton from "@/components/SpeakButton";

const patternRows: [string, string, string][] = [
  ["je parle", "je ne parle pas", "I do not speak"],
  ["tu aimes", "tu n’aimes pas", "you do not like"],
  ["il est", "il n’est pas", "he is not"],
  ["elle écoute", "elle n’écoute pas", "she does not listen"],
  ["nous avons", "nous n’avons pas", "we do not have"],
  ["vous regardez", "vous ne regardez pas", "you do not watch"],
  ["ils mangent", "ils ne mangent pas", "they do not eat"],
  ["elles travaillent", "elles ne travaillent pas", "they do not work"],
];

const expressionRows: [string, string, string][] = [
  ["ne ... pas", "not / do not", "Je ne parle pas."],
  ["ne ... jamais", "never", "Je ne mange jamais de poisson."],
  ["ne ... plus", "no longer / not anymore", "Je ne joue plus au hockey."],
  ["ne ... rien", "nothing / not anything", "Je ne vois rien."],
  ["ne ... personne", "no one / not anyone", "Je ne connais personne."],
  ["ne ... que", "only", "Je n’ai que cinq dollars."],
];

const articleRows: [string, string, string][] = [
  ["J’ai un crayon.", "Je n’ai pas de crayon.", "un → de"],
  ["Elle mange une pomme.", "Elle ne mange pas de pomme.", "une → de"],
  ["Nous avons des livres.", "Nous n’avons pas de livres.", "des → de"],
];

const quizQuestions = [
  {
    question: "How do you make 'Je parle français' negative?",
    options: [
      "Je pas parle français.",
      "Je ne parle pas français.",
      "Je parle ne pas français.",
      "Je ne pas parle français.",
    ],
    correct: 1,
    explanation:
      "The basic pattern is ne + conjugated verb + pas: Je ne parle pas français.",
  },
  {
    question: "What happens to 'ne' before a vowel?",
    options: ["It becomes n’", "It disappears completely", "It becomes pas", "It moves after the verb"],
    correct: 0,
    explanation:
      "Before a vowel or silent h, ne becomes n’. Example: Je n’aime pas.",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "Je n’ai pas un stylo.",
      "Je ne ai pas un stylo.",
      "Je n’ai pas de stylo.",
      "Je pas ai de stylo.",
    ],
    correct: 2,
    explanation:
      "After a negative, un/une/des usually become de: Je n’ai pas de stylo.",
  },
  {
    question: "What does 'ne ... jamais' mean?",
    options: ["not", "never", "nothing", "only"],
    correct: 1,
    explanation:
      "Ne ... jamais means never. Example: Je ne mange jamais de poisson.",
  },
];

export default function NegationPage() {
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
            Negation
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Learn how to make French sentences negative using ne ... pas and other common negative expressions.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">The basic pattern</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Positive</th>
                  <th className="pb-3 text-left font-black">Negative</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {patternRows.map(([positive, negative, english]) => (
                  <tr key={positive}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={negative} size="sm" /></td>
                    <td className="py-3 font-black">{positive}</td>
                    <td className="py-3 font-black text-[#2563EB]">{negative}</td>
                    <td className="py-3 text-[#526173]">{english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">ne + verb + pas</p>
                <p className="mt-1 text-white/70">
                  Put ne before the conjugated verb and pas after it.
                </p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">n’ before a vowel</p>
                <p className="mt-1 text-white/70">
                  Before a vowel or silent h, ne becomes n’. Example: je n’aime pas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common negative expressions</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left font-black">English</th>
                  <th className="pb-3 text-left text-[#526173]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {expressionRows.map(([french, english, example]) => (
                  <tr key={french}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={example} size="sm" /></td>
                    <td className="py-3 font-black">{french}</td>
                    <td className="py-3 text-[#526173]">{english}</td>
                    <td className="py-3 font-black text-[#2563EB]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Note: </span>
            In casual spoken French, people often drop ne and only say pas. Example: Je sais pas. In writing, use the full form: Je ne sais pas.
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Negation with articles</h2>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            After a negative, un, une, and des usually become de.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Positive</th>
                  <th className="pb-3 text-left font-black">Negative</th>
                  <th className="pb-3 text-left text-[#526173]">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {articleRows.map(([positive, negative, change]) => (
                  <tr key={positive}>
                    <td className="py-3 font-black">{positive}</td>
                    <td className="py-3 font-black text-[#2563EB]">{negative}</td>
                    <td className="py-3 text-[#526173]">{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Exception: </span>
            With être, the article usually stays the same. Example: Ce n’est pas un problème.
          </div>
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quizQuestions} title="Negation practice" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers negation with sentence-building exercises, flashcards, and quizzes.
          </p>
          <Link
            href="/learn/french-foundations/unit-2/lesson-4"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}