"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const avoir: [string, string, string][] = [
  ["j'", "avais parlé", "I had spoken"],
  ["tu", "avais parlé", "you had spoken"],
  ["il / elle / on", "avait parlé", "he had spoken"],
  ["nous", "avions parlé", "we had spoken"],
  ["vous", "aviez parlé", "you had spoken"],
  ["ils / elles", "avaient parlé", "they had spoken"],
];

const etre: [string, string, string][] = [
  ["je", "étais parti(e)", "I had left"],
  ["tu", "étais parti(e)", "you had left"],
  ["il / elle", "était parti(e)", "he / she had left"],
  ["nous", "étions parti(e)s", "we had left"],
  ["vous", "étiez parti(e)(s)", "you had left"],
  ["ils / elles", "étaient parti(e)s", "they had left"],
];

const uses: { title: string; example: string; note: string }[] = [
  {
    title: "Action completed before another past action",
    example: "Il avait déjà mangé quand elle est arrivée.",
    note: "He had already eaten when she arrived. The eating happened first (PQP) — the arrival came after (passé composé).",
  },
  {
    title: "Reported speech — tense shift back",
    example: "Elle a dit qu'il était parti.",
    note: "She said he had left. The original statement was 'il est parti' — in reported speech, this shifts to the plus-que-parfait.",
  },
  {
    title: "Condition in a si-clause (with conditionnel passé)",
    example: "Si j'avais étudié, j'aurais réussi.",
    note: "If I had studied, I would have passed. PQP in the si-clause, conditionnel passé in the result clause. This is the most tested use in exams.",
  },
  {
    title: "After 'à peine… que' and 'ne… pas plutôt… que'",
    example: "À peine avait-il parlé qu'elle sortit.",
    note: "He had barely spoken when she left. Very formal/literary. Inversion is required after 'à peine' at the start of a clause.",
  },
];

const comparison: [string, string, string][] = [
  ["Elle a lu le rapport.", "She read the report.", "Passé composé — completed action"],
  ["Elle avait lu le rapport avant la réunion.", "She had read the report before the meeting.", "PQP — completed before another past event"],
  ["Il est arrivé.", "He arrived.", "Passé composé — the event itself"],
  ["Quand je suis arrivé, il était déjà parti.", "When I arrived, he had already left.", "PC (my arrival) / PQP (his leaving happened first)"],
];

export default function PlusQueParfaitPage() {
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
            Le plus-que-parfait
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The plus-que-parfait expresses an action completed <strong>before</strong> another past action — the &ldquo;had done&rdquo; tense. It is common in written and spoken French and essential for si-clauses and reported speech.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">avoir / être in the imparfait + past participle</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Same structure as the passé composé, but use <span className="font-black text-white">avoir or être in the imparfait</span> instead of the present tense. The same verbs that take être in the passé composé take être here — and the same agreement rules apply.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black text-[#C9A44C]">With avoir</p>
                <p className="text-white/70 mt-1">j'avais + parlé / fini / vendu</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black text-[#C9A44C]">With être (+ agreement)</p>
                <p className="text-white/70 mt-1">j'étais + parti(e) / arrivé(e) / sorti(e)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-black">With avoir — parler</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#F3EDD8]">
                  {avoir.map(([pro, verb, en]) => (
                    <tr key={pro}>
                      <td className="py-2 font-black text-xs text-[#526173] w-20">{pro}</td>
                      <td className="py-2 font-black text-[#7C3AED]">{verb}</td>
                      <td className="py-2 text-xs text-[#526173]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="font-black">With être — partir</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-4">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-[#F3EDD8]">
                  {etre.map(([pro, verb, en]) => (
                    <tr key={pro}>
                      <td className="py-2 font-black text-xs text-[#526173] w-20">{pro}</td>
                      <td className="py-2 font-black text-[#7C3AED]">{verb}</td>
                      <td className="py-2 text-xs text-[#526173]">{en}</td>
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
            <h2 className="text-xl font-black">When to use the plus-que-parfait</h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {uses.map((u) => (
              <div key={u.title} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">{u.title}</p>
                <p className="mt-2 font-black text-[#7C3AED]">{u.example}</p>
                <p className="mt-1 text-sm text-[#526173]">{u.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key pattern */}
        <div className="mt-10 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] p-6">
          <p className="font-black text-[#D97706]">The most important pattern — si-clauses</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            {[
              ["Si-clause", "Plus-que-parfait → Si j'avais su…"],
              ["Result clause", "Conditionnel passé → j'aurais agi différemment."],
              ["", "If I had known, I would have acted differently."],
              ["", "This is the hypothetical past — describing what would have happened under different conditions."],
            ].map(([label, text], i) => (
              <div key={i} className={`rounded-xl p-3 ${label ? "bg-white" : "bg-[#FFFDF7]"}`}>
                {label && <p className="text-xs font-black uppercase tracking-widest text-[#D97706]">{label}</p>}
                <p className={`mt-1 ${label ? "font-black" : "text-[#526173]"}`}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Comparison</span>
            <h2 className="text-xl font-black">Plus-que-parfait vs passé composé</h2>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left text-[#526173]">English</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {comparison.map(([fr, en, why]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-xs text-[#7C3AED]">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources/verbs-passe-compose" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le passé composé →</Link>
          <Link href="/resources/verbs-conditionnel-passe" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le conditionnel passé →</Link>
          <Link href="/resources/verbs-imparfait" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">L'imparfait →</Link>
        </div>
      </section>
    </main>
  );
}
