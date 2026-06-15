"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const avoirExamples: [string, string][] = [
  ["j'ai parlé", "I spoke / I have spoken"],
  ["tu as fini", "you finished"],
  ["il a vendu", "he sold"],
  ["nous avons mangé", "we ate"],
  ["vous avez regardé", "you watched"],
  ["elles ont attendu", "they waited"],
];

const etreExamples: [string, string][] = [
  ["je suis allé(e)", "I went"],
  ["tu es parti(e)", "you left"],
  ["il est arrivé", "he arrived"],
  ["elle est restée", "she stayed"],
  ["nous sommes venus / venues", "we came"],
  ["ils sont tombés", "they fell"],
];

const vandertramp: [string, string, string][] = [
  ["Devenir", "to become", "devenu(e)"],
  ["Revenir", "to come back", "revenu(e)"],
  ["Monter", "to go up", "monté(e)"],
  ["Rentrer", "to return home", "rentré(e)"],
  ["Sortir", "to go out", "sorti(e)"],
  ["Venir", "to come", "venu(e)"],
  ["Aller", "to go", "allé(e)"],
  ["Naître", "to be born", "né(e)"],
  ["Descendre", "to go down", "descendu(e)"],
  ["Entrer", "to enter", "entré(e)"],
  ["Retourner", "to return", "retourné(e)"],
  ["Tomber", "to fall", "tombé(e)"],
  ["Rester", "to stay", "resté(e)"],
  ["Arriver", "to arrive", "arrivé(e)"],
  ["Mourir", "to die", "mort(e)"],
  ["Partir", "to leave", "parti(e)"],
];

const irregularPP: [string, string, string][] = [
  ["avoir", "to have", "eu"],
  ["être", "to be", "été"],
  ["faire", "to do / make", "fait"],
  ["prendre", "to take", "pris"],
  ["mettre", "to put", "mis"],
  ["voir", "to see", "vu"],
  ["vouloir", "to want", "voulu"],
  ["pouvoir", "to be able", "pu"],
  ["devoir", "to have to", "dû"],
  ["savoir", "to know", "su"],
  ["venir", "to come", "venu"],
  ["tenir", "to hold", "tenu"],
  ["ouvrir", "to open", "ouvert"],
  ["écrire", "to write", "écrit"],
  ["lire", "to read", "lu"],
  ["dire", "to say", "dit"],
  ["conduire", "to drive", "conduit"],
  ["naître", "to be born", "né"],
  ["mourir", "to die", "mort"],
  ["courir", "to run", "couru"],
];

export default function VerbsPasseComposePage() {
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
            Le passé composé
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The passé composé is the most common past tense in spoken French. It describes completed actions with a definite beginning or end. It is formed with an auxiliary verb (avoir or être) plus a past participle.
          </p>
        </div>

        {/* Formation with avoir */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Auxiliary 1</span>
            <h2 className="text-xl font-black">Formation with avoir</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Formula</p>
            <p className="mt-2 text-lg font-black">present tense of avoir + past participle</p>
            <p className="mt-2 text-sm text-white/70">Most French verbs use avoir as the auxiliary. Regular past participles: -er → -é, -ir → -i, -re → -u.</p>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {avoirExamples.map(([french, english]) => (
                  <tr key={french}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={french} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{french}</td>
                    <td className="py-3 text-[#526173]">{english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Formation with être */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Auxiliary 2</span>
            <h2 className="text-xl font-black">Formation with être</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Formula</p>
            <p className="mt-2 text-lg font-black">present tense of être + past participle</p>
            <p className="mt-2 text-sm text-white/70">A specific group of verbs (mostly of movement and change of state) use être. The past participle must agree in gender and number with the subject.</p>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {etreExamples.map(([french, english]) => (
                  <tr key={french}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={french} size="sm" /></td>
                    <td className="py-3 font-black text-[#7C3AED]">{french}</td>
                    <td className="py-3 text-[#526173]">{english}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#7C3AED]">Agreement rule: </span>
            With être, add -e for feminine subjects, -s for plural subjects, and -es for feminine plural. Example: Elle est arrivée. Ils sont arrivés. Elles sont arrivées.
          </div>
        </div>

        {/* DR MRS VANDERTRAMP */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Memory aid</span>
            <h2 className="text-xl font-black">DR MRS VANDERTRAMP verbs</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">
            This mnemonic lists the main motion and state-change verbs that take être. All reflexive verbs also take être.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Past participle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {vandertramp.map(([inf, eng, pp]) => (
                  <tr key={inf}>
                    <td className="py-2.5 font-black">{inf}</td>
                    <td className="py-2.5 text-[#526173]">{eng}</td>
                    <td className="py-2.5 font-black text-[#7C3AED]">{pp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Irregular past participles */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Reference</span>
            <h2 className="text-xl font-black">Common irregular past participles</h2>
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Past participle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {irregularPP.map(([inf, eng, pp]) => (
                  <tr key={inf}>
                    <td className="py-2.5 font-black">{inf}</td>
                    <td className="py-2.5 text-[#526173]">{eng}</td>
                    <td className="py-2.5 font-black text-[#7C3AED]">{pp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-5 text-white">
          <p className="font-black text-[#C9A44C]">When to use le passé composé</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Completed actions</p>
              <p className="mt-1 text-white/70">J'ai mangé une pomme. — I ate an apple (and finished eating it).</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">A sequence of events</p>
              <p className="mt-1 text-white/70">Il est entré, il a souri et il a dit bonjour. — He came in, smiled, and said hello.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Specific time references</p>
              <p className="mt-1 text-white/70">Hier matin, nous avons joué au tennis. — Yesterday morning we played tennis.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
