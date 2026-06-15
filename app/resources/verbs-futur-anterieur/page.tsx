"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const avoirExamples: [string, string, string][] = [
  ["j'aurai parlé", "I will have spoken", "avoir stem: aur-"],
  ["tu auras fini", "you will have finished", "avoir stem: aur-"],
  ["il aura vendu", "he will have sold", "avoir stem: aur-"],
  ["nous aurons mangé", "we will have eaten", "avoir stem: aur-"],
  ["vous aurez attendu", "you will have waited", "avoir stem: aur-"],
  ["ils auront compris", "they will have understood", "avoir stem: aur-"],
];

const etreExamples: [string, string, string][] = [
  ["je serai parti(e)", "I will have left", "être stem: ser-"],
  ["tu seras arrivé(e)", "you will have arrived", "être stem: ser-"],
  ["il sera rentré", "he will have returned home", "être stem: ser-"],
  ["elle sera née", "she will have been born", "être stem: ser-"],
  ["nous serons allés/allées", "we will have gone", "être stem: ser-"],
  ["ils seront revenus", "they will have come back", "être stem: ser-"],
];

const triggers: [string, string, string][] = [
  ["quand", "when", "Quand tu auras fini, on partira."],
  ["lorsque", "when (more formal)", "Lorsqu'elle sera arrivée, appelle-moi."],
  ["dès que", "as soon as", "Dès qu'il aura mangé, nous sortirons."],
  ["aussitôt que", "as soon as", "Aussitôt que vous aurez signé, envoyez le document."],
  ["une fois que", "once", "Une fois qu'ils seront partis, on nettoiera."],
  ["après que", "after", "Après que j'aurai terminé, je te rejoindrai."],
];

export default function VerbsFuturAnterieurPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]">
            Verbs
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Le futur antérieur
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The futur antérieur expresses an action that will be completed before another future event. Think of it as the "future perfect": something will have been done by a certain point.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">How to form the futur antérieur</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Formula</p>
            <p className="mt-2 text-lg font-black">futur simple of avoir / être + past participle</p>
            <p className="mt-2 text-sm text-white/70">
              The choice of auxiliary follows the same rules as the passé composé: most verbs use avoir; DR MRS VANDERTRAMP verbs and all reflexives use être. Past participle agreement with être also applies.
            </p>
          </div>
        </div>

        {/* With avoir */}
        <div className="mt-8">
          <h3 className="font-black">With avoir</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black text-[#7C3AED]">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left text-[#526173]">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {avoirExamples.map(([fr, en, note]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-xs text-[#526173]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* With être */}
        <div className="mt-8">
          <h3 className="font-black">With être</h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black text-[#7C3AED]">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left text-[#526173]">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {etreExamples.map(([fr, en, note]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-xs text-[#526173]">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#7C3AED]">Agreement: </span>
            With être, the past participle agrees with the subject. Add -e for feminine, -s for masculine plural, -es for feminine plural.
          </div>
        </div>

        {/* Trigger words */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Triggers</span>
            <h2 className="text-xl font-black">Common trigger conjunctions</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            These conjunctions often introduce the futur antérieur clause. They signal that one future event must be completed before another begins. In English, the present or present perfect is used after these words: French requires the future or futur antérieur.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Conjunction</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {triggers.map(([conj, eng, example]) => (
                  <tr key={conj}>
                    <td className="py-3 font-black">{conj}</td>
                    <td className="py-3 text-[#526173]">{eng}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Understanding the timeline</p>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Imagine two future events on a timeline: Event A must be <span className="font-black text-white">completed</span> before Event B begins. Use the futur antérieur for Event A and the futur simple for Event B.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black text-[#C9A44C]">Event A (futur antérieur)</p>
              <p className="mt-1 text-white/80">Quand j'aurai terminé mes devoirs...</p>
              <p className="mt-0.5 text-white/50">When I have finished my homework...</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black text-[#C9A44C]">Event B (futur simple)</p>
              <p className="mt-1 text-white/80">...je regarderai la télé.</p>
              <p className="mt-0.5 text-white/50">...I will watch TV.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
