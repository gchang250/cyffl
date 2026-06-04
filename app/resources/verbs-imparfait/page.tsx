"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const endings: [string, string, string][] = [
  ["je", "-ais", "je parlais"],
  ["tu", "-ais", "tu parlais"],
  ["il / elle / on", "-ait", "il parlait"],
  ["nous", "-ions", "nous parlions"],
  ["vous", "-iez", "vous parliez"],
  ["ils / elles", "-aient", "ils parlaient"],
];

const examples: [string, string][] = [
  ["je finissais", "I was finishing / I used to finish"],
  ["tu vendais", "you were selling"],
  ["il habitait", "he was living / he used to live"],
  ["nous regardions", "we were watching"],
  ["vous mangiez", "you were eating"],
  ["elles attendaient", "they were waiting"],
];

const comparison: [string, string, string][] = [
  [
    "Hier, il pleuvait.",
    "Yesterday it was raining.",
    "Background / ongoing condition",
  ],
  [
    "Soudain, il a plu.",
    "Suddenly it rained.",
    "Sudden completed event",
  ],
  [
    "Quand j'étais enfant, je jouais au hockey.",
    "When I was a child, I used to play hockey.",
    "Repeated habit in the past",
  ],
  [
    "La semaine dernière, j'ai joué au hockey.",
    "Last week I played hockey (once).",
    "Single completed action",
  ],
  [
    "Elle lisait quand le téléphone a sonné.",
    "She was reading when the phone rang.",
    "Imparfait = background; PC = interrupting event",
  ],
  [
    "Nous avons marché deux heures.",
    "We walked for two hours (then stopped).",
    "Action with a defined duration → PC",
  ],
];

export default function VerbsImparfaitPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]">
            Verbs
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            L'imparfait
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The imparfait describes ongoing states, habitual actions, and background context in the past. Learning when to use it versus the passé composé is one of the key milestones in French.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">How to form the imparfait</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Take the <span className="font-black text-white">nous form</span> of the present tense and remove <span className="font-black text-white">-ons</span>. This gives you the imperfect stem. Then add the imperfect endings below.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">parler</p>
                <p className="text-white/70 mt-1">nous parlons → parl- → je parlais</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">finir</p>
                <p className="text-white/70 mt-1">nous finissons → finiss- → je finissais</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">vendre</p>
                <p className="text-white/70 mt-1">nous vendons → vend- → je vendais</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endings table */}
        <div className="mt-8">
          <h3 className="font-black">Imparfait endings</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Ending</th>
                  <th className="pb-3 text-left text-[#526173]">Example (parler)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {endings.map(([pronoun, ending, example]) => (
                  <tr key={pronoun}>
                    <td className="py-3 font-black">{pronoun}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{ending}</td>
                    <td className="py-3 text-[#526173]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* More examples */}
        <div className="mt-8">
          <h3 className="font-black">More examples across verb types</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Imparfait</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {examples.map(([fr, en]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Exception */}
        <div className="mt-8">
          <h3 className="font-black">Exception: être</h3>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-5 text-sm">
            <p className="text-[#526173]">
              <span className="font-black text-[#0B1F3A]">être</span> is the only verb with an irregular stem in the imparfait: <span className="font-black text-[#7C3AED]">ét-</span>. The endings are regular.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                ["j'étais", "I was"],
                ["tu étais", "you were"],
                ["il était", "he was"],
                ["nous étions", "we were"],
                ["vous étiez", "you were"],
                ["ils étaient", "they were"],
              ].map(([fr, en]) => (
                <div key={fr} className="rounded-xl bg-[#F5F3FF] p-3">
                  <p className="font-black text-[#7C3AED]">{fr}</p>
                  <p className="text-[#526173]">{en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Uses */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Uses</span>
            <h2 className="text-xl font-black">When to use l'imparfait</h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Ongoing background state",
                example: "Il faisait beau et les oiseaux chantaient.",
                note: "It was nice out and the birds were singing.",
              },
              {
                title: "Habitual or repeated past action",
                example: "Chaque matin, elle buvait un café.",
                note: "Every morning, she used to drink a coffee.",
              },
              {
                title: "Description in the past",
                example: "La maison était grande et silencieuse.",
                note: "The house was big and quiet.",
              },
              {
                title: "Ongoing action interrupted by another",
                example: "Je dormais quand il est entré.",
                note: "I was sleeping when he came in.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">{item.title}</p>
                <p className="mt-2 font-black text-[#7C3AED]">{item.example}</p>
                <p className="mt-1 text-sm text-[#526173]">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PC vs Imparfait */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Comparison</span>
            <h2 className="text-xl font-black">Passé composé vs imparfait</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">This is one of the trickiest aspects of French. Use the table below to guide your choice.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Sentence</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {comparison.map(([sentence, english, why]) => (
                  <tr key={sentence}>
                    <td className="py-3 font-black">{sentence}</td>
                    <td className="py-3 text-[#526173]">{english}</td>
                    <td className="py-3 text-xs text-[#7C3AED]">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
