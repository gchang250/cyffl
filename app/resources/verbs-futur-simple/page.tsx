"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const endings: [string, string, string][] = [
  ["je", "-ai", "je parlerai"],
  ["tu", "-as", "tu parleras"],
  ["il / elle / on", "-a", "il parlera"],
  ["nous", "-ons", "nous parlerons"],
  ["vous", "-ez", "vous parlerez"],
  ["ils / elles", "-ont", "ils parleront"],
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
  ["envoyer", "to send", "enverr-"],
  ["recevoir", "to receive", "recevr-"],
];

const irregularFull: [string, string][] = [
  ["je serai", "I will be"],
  ["tu auras", "you will have"],
  ["il ira", "he will go"],
  ["nous ferons", "we will do"],
  ["vous viendrez", "you will come"],
  ["elles verront", "they will see"],
];

export default function VerbsFuturSimplePage() {
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
            Le futur simple
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The futur simple expresses future actions and events. Unlike English, French uses a single word (no auxiliary like "will") formed by adding endings directly to the infinitive.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">Regular verbs</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              For regular verbs, keep the full infinitive as the stem. For <span className="font-black text-white">-re verbs</span>, drop the final -e first (vendre → vendr-). Then add the future endings.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-er verbs</p>
                <p className="text-white/70 mt-1">parler → je parlerai</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-ir verbs</p>
                <p className="text-white/70 mt-1">finir → je finirai</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">-re verbs</p>
                <p className="text-white/70 mt-1">vendre → je vendrai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endings table */}
        <div className="mt-8">
          <h3 className="font-black">Future endings · parler (to speak)</h3>
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
            Some common verbs do not use the infinitive as their future stem. The endings are identical — only the stem changes. Memorise these stems; the rest follows the same pattern.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Future stem</th>
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

          <div className="mt-5">
            <h3 className="font-black">Examples with irregular verbs</h3>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-3 text-left font-black text-[#7C3AED]">French</th>
                    <th className="pb-3 text-left text-[#526173]">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD8]">
                  {irregularFull.map(([fr, en]) => (
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
        </div>

        {/* Uses */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Uses</span>
            <h2 className="text-xl font-black">When to use le futur simple</h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Predictions",
                example: "Demain, il fera beau.",
                note: "Tomorrow, the weather will be nice.",
              },
              {
                title: "Promises",
                example: "Je t'appellerai ce soir.",
                note: "I will call you this evening.",
              },
              {
                title: "Future plans (more formal than aller + infinitive)",
                example: "Nous partirons en vacances en juillet.",
                note: "We will go on holiday in July.",
              },
              {
                title: "After quand / lorsque in the future",
                example: "Quand tu arriveras, appelle-moi.",
                note: "When you arrive, call me. (English uses present; French uses future.)",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">{item.title}</p>
                <p className="mt-2 font-black text-[#7C3AED]">{item.example}</p>
                <p className="mt-1 text-sm text-[#526173]">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#7C3AED]">Note: </span>
            For near-future actions, French speakers often prefer <span className="font-black text-[#0B1F3A]">aller + infinitive</span> (Je vais partir — I am going to leave). The futur simple is more common in formal, written, and more distant future contexts.
          </div>
        </div>
      </section>
    </main>
  );
}
