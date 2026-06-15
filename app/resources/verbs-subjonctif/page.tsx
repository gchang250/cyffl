"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const endings: [string, string, string][] = [
  ["que je", "-e", "que je parle"],
  ["que tu", "-es", "que tu parles"],
  ["qu'il / elle / on", "-e", "qu'il parle"],
  ["que nous", "-ions", "que nous parlions"],
  ["que vous", "-iez", "que vous parliez"],
  ["qu'ils / elles", "-ent", "qu'ils parlent"],
];

type IrregularSubj = {
  infinitive: string;
  stem: string;
  je: string;
  nous: string;
};

const irregularStems: IrregularSubj[] = [
  { infinitive: "être", stem: "soi- / é-", je: "que je sois", nous: "que nous soyons" },
  { infinitive: "avoir", stem: "ai- / ay-", je: "que j'aie", nous: "que nous ayons" },
  { infinitive: "aller", stem: "aill- / all-", je: "que j'aille", nous: "que nous allions" },
  { infinitive: "faire", stem: "fass-", je: "que je fasse", nous: "que nous fassions" },
  { infinitive: "pouvoir", stem: "puiss-", je: "que je puisse", nous: "que nous puissions" },
  { infinitive: "savoir", stem: "sach-", je: "que je sache", nous: "que nous sachions" },
  { infinitive: "vouloir", stem: "veuill- / voul-", je: "que je veuille", nous: "que nous voulions" },
  { infinitive: "venir", stem: "vienn- / ven-", je: "que je vienne", nous: "que nous venions" },
];

const triggers: [string, string, string][] = [
  ["vouloir que", "to want (someone) to", "Je veux que tu viennes."],
  ["il faut que", "it is necessary that", "Il faut que nous partions."],
  ["il est important que", "it is important that", "Il est important que vous compreniez."],
  ["bien que", "although", "Bien qu'il soit malade, il travaille."],
  ["pour que", "so that / in order that", "Je t'explique pour que tu comprennes."],
  ["avant que", "before", "Pars avant qu'il pleuve."],
  ["à moins que", "unless", "Je viendrai à moins qu'il fasse trop froid."],
  ["il est possible que", "it is possible that", "Il est possible qu'elle soit en retard."],
  ["avoir peur que", "to be afraid that", "J'ai peur qu'il ne comprenne pas."],
  ["regretter que", "to regret that", "Je regrette que tu ne puisses pas venir."],
  ["douter que", "to doubt that", "Je doute qu'il sache la réponse."],
  ["préférer que", "to prefer that", "Elle préfère que nous restions."],
];

export default function VerbsSubjonctifPage() {
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
            Le subjonctif
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The subjunctive is a mood (not a tense) used to express doubt, desire, emotion, necessity, and uncertainty. It almost always appears in a subordinate clause beginning with que.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">How to form the subjonctif présent</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule (regular verbs)</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Take the <span className="font-black text-white">ils/elles</span> form of the present tense and remove <span className="font-black text-white">-ent</span>. This gives you the subjunctive stem. Add the endings below for all forms <strong className="text-white">except nous and vous</strong>, which use the imparfait forms of the verb.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">parler → ils parlent → parl-</p>
                <p className="text-white/70 mt-1">que je parle, que tu parles...</p>
                <p className="text-white/70">que nous parlions, que vous parliez</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black">finir → ils finissent → finiss-</p>
                <p className="text-white/70 mt-1">que je finisse, que tu finisses...</p>
                <p className="text-white/70">que nous finissions, que vous finissiez</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endings */}
        <div className="mt-8">
          <h3 className="font-black">Subjunctive endings · parler</h3>
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
            <h2 className="text-xl font-black">Irregular subjunctive stems</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            These high-frequency verbs have irregular stems in the subjunctive. Memorise the je and nous forms as anchors: the other forms follow from those stems.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Stem(s)</th>
                  <th className="pb-3 text-left text-[#526173]">je / tu / il form</th>
                  <th className="pb-3 text-left text-[#526173]">nous / vous form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {irregularStems.map((v) => (
                  <tr key={v.infinitive}>
                    <td className="py-3 font-black">{v.infinitive}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{v.stem}</td>
                    <td className="py-3 text-[#526173]">{v.je}</td>
                    <td className="py-3 text-[#526173]">{v.nous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Triggers */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Triggers</span>
            <h2 className="text-xl font-black">Common subjunctive triggers</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            These expressions require the subjunctive in the following clause. Note: the subjunctive is only needed when the subject of the two clauses is different. If the subjects are the same, use the infinitive instead.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Trigger</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {triggers.map(([trigger, eng, example]) => (
                  <tr key={trigger}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={example} size="sm" /></td>
                    <td className="py-3 font-black">{trigger}</td>
                    <td className="py-3 text-[#526173]">{eng}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Same subject → use the infinitive</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black">Different subjects → subjunctive</p>
              <p className="mt-1 text-white/70">Je veux que tu viennes. (I want you to come.)</p>
              <p className="text-white/50 text-xs mt-1">Subject 1: je / Subject 2: tu</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-black">Same subject → infinitive</p>
              <p className="mt-1 text-white/70">Je veux venir. (I want to come.)</p>
              <p className="text-white/50 text-xs mt-1">Both clauses: je</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
