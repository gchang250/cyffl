"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const endings: [string, string, string][] = [
  ["je", "-ais", "je parlerais"],
  ["tu", "-ais", "tu parlerais"],
  ["il / elle / on", "-ait", "il parlerait"],
  ["nous", "-ions", "nous parlerions"],
  ["vous", "-iez", "vous parleriez"],
  ["ils / elles", "-aient", "ils parleraient"],
];

const irregularStems: [string, string, string][] = [
  ["être", "to be", "ser-"],
  ["avoir", "to have", "aur-"],
  ["aller", "to go", "ir-"],
  ["faire", "to do / make", "fer-"],
  ["venir", "to come", "viendr-"],
  ["voir", "to see", "verr-"],
  ["savoir", "to know", "saur-"],
  ["vouloir", "to want", "voudr-"],
  ["pouvoir", "to be able", "pourr-"],
  ["devoir", "to have to", "devr-"],
  ["tenir", "to hold", "tiendr-"],
  ["courir", "to run", "courr-"],
];

const siClauses: [string, string, string][] = [
  [
    "Si j'avais le temps, je voyagerais.",
    "If I had time, I would travel.",
    "si + imparfait → conditionnel",
  ],
  [
    "Si elle travaillait plus, elle réussirait.",
    "If she worked more, she would succeed.",
    "si + imparfait → conditionnel",
  ],
  [
    "Si nous habitions à Paris, nous visiterions les musées.",
    "If we lived in Paris, we would visit the museums.",
    "si + imparfait → conditionnel",
  ],
  [
    "Si tu m'appelais, je répondrais.",
    "If you called me, I would answer.",
    "si + imparfait → conditionnel",
  ],
];

const politeExamples: [string, string][] = [
  ["Je voudrais un café, s'il vous plaît.", "I would like a coffee, please."],
  ["Pourriez-vous m'aider ?", "Could you help me?"],
  ["Auriez-vous une table libre ?", "Would you have a free table?"],
  ["Il faudrait partir bientôt.", "We should / ought to leave soon."],
];

export default function VerbsConditionnelPage() {
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
            Le conditionnel
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The conditionnel expresses what would happen under certain conditions. It is also the polite form for requests and corresponds to "would" in English.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">How to form the conditionnel</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              The conditionnel uses the <span className="font-black text-white">same stems as the futur simple</span> — infinitive for regular verbs, irregular stem for irregular ones. The endings, however, are identical to the <span className="font-black text-white">imparfait endings</span>.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-er verbs</p>
                <p className="text-white/70 mt-1">parler → je parlerais</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-ir verbs</p>
                <p className="text-white/70 mt-1">finir → je finirais</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-re verbs</p>
                <p className="text-white/70 mt-1">vendre → je vendrais</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endings */}
        <div className="mt-8">
          <h3 className="font-black">Conditionnel endings · parler (to speak)</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Ending</th>
                  <th className="pb-3 text-left text-[#526173]">Full form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {endings.map(([pronoun, ending, full]) => (
                  <tr key={pronoun}>
                    <td className="py-3 font-black">{pronoun}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{ending}</td>
                    <td className="py-3 text-[#526173]">{full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Irregular stems */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Irregular</span>
            <h2 className="text-xl font-black">Irregular stems</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            The irregular stems are identical to those of the futur simple. If you know the future, you already know the conditional stem — just swap the endings.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Conditional stem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {irregularStems.map(([inf, eng, stem]) => (
                  <tr key={inf}>
                    <td className="py-2.5 font-black">{inf}</td>
                    <td className="py-2.5 text-[#526173]">{eng}</td>
                    <td className="py-2.5 font-black text-[#7C3AED]">{stem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Uses: Polite requests */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Use 1</span>
            <h2 className="text-xl font-black">Polite requests</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">Using the conditionnel softens a request and sounds much more polite than the present tense.</p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black text-[#7C3AED]">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {politeExamples.map(([fr, en]) => (
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

        {/* Si clauses */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Use 2</span>
            <h2 className="text-xl font-black">Si-clause hypotheticals</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            To talk about hypothetical or unreal situations, use <span className="font-black text-[#0B1F3A]">si + imparfait</span> in the condition clause, and the <span className="font-black text-[#0B1F3A]">conditionnel</span> in the result clause. Never use the conditionnel directly after si.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black text-[#7C3AED]">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left text-[#526173]">Pattern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {siClauses.map(([fr, en, pattern]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-xs text-[#526173]">{pattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#7C3AED]">The golden rule: </span>
            After si (meaning "if"), NEVER use the futur simple or conditionnel. Use the imparfait for hypothetical conditions, or the present tense for real/likely conditions.
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Quick tense sequence guide</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black">Real / likely</p>
              <p className="mt-1 text-white/70">si + présent → futur simple</p>
              <p className="mt-1 text-white/50">Si tu pars, je viendrai.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black">Hypothetical</p>
              <p className="mt-1 text-white/70">si + imparfait → conditionnel</p>
              <p className="mt-1 text-white/50">Si tu partais, je viendrais.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black">Contrary to past</p>
              <p className="mt-1 text-white/70">si + plus-que-parfait → conditionnel passé</p>
              <p className="mt-1 text-white/50">Si tu étais parti, je serais venu.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
