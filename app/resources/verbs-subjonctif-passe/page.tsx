"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const avoir: [string, string, string][] = [
  ["que je", "aie parlé", "that I (have) spoke(n)"],
  ["que tu", "aies parlé", "that you (have) spoke(n)"],
  ["qu'il / elle", "ait parlé", "that he (has) spoke(n)"],
  ["que nous", "ayons parlé", "that we (have) spoke(n)"],
  ["que vous", "ayez parlé", "that you (have) spoke(n)"],
  ["qu'ils / elles", "aient parlé", "that they (have) spoke(n)"],
];

const etre: [string, string, string][] = [
  ["que je", "sois parti(e)", "that I (have) left"],
  ["que tu", "sois parti(e)", "that you (have) left"],
  ["qu'il / elle", "soit parti(e)", "that he / she (has) left"],
  ["que nous", "soyons parti(e)s", "that we (have) left"],
  ["que vous", "soyez parti(e)(s)", "that you (have) left"],
  ["qu'ils / elles", "soient parti(e)s", "that they (have) left"],
];

const uses: { title: string; present: string; passe: string; note: string }[] = [
  {
    title: "Emotion about a completed action",
    present: "Je suis content qu'il vienne. (he is coming: future/ongoing)",
    passe: "Je suis content qu'il soit venu. (he came: it's done)",
    note: "Same trigger (être content que), but the past subjunctive signals the action already happened at the time of speaking.",
  },
  {
    title: "Doubt / necessity about something completed",
    present: "Il faut que tu le fasses. (you need to do it)",
    passe: "Il faut que tu l'aies fait avant midi. (you need to have done it by noon)",
    note: "The deadline is set in the future, but the action must be completed: so the past subjunctive expresses the completed state.",
  },
  {
    title: "After superlatives and restrictive expressions",
    present: "C'est le meilleur livre que je lise.",
    passe: "C'est le meilleur livre que j'aie jamais lu.",
    note: "'Que j'aie jamais lu': that I have ever read. The past subjunctive is required after superlatives ('le meilleur que…', 'le seul que…') when the action is completed.",
  },
  {
    title: "Concession / purpose with completed action",
    present: "Bien qu'il travaille dur…",
    passe: "Bien qu'il ait travaillé toute la nuit, il n'a pas réussi.",
    note: "Although he worked all night, he didn't succeed. 'Bien que' always triggers the subjunctive: use the past form when the action in the subordinate clause is completed.",
  },
];

export default function SubjonctifPassePage() {
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
            Le subjonctif passé
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The subjonctif passé expresses a <strong>completed action</strong> in a subjunctive context. It uses the same triggers as the subjonctif présent, but signals that the action being referred to is already finished.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">avoir / être in subjonctif présent + past participle</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Use <span className="font-black text-white">avoir or être in the subjonctif présent</span> + past participle. The subjunctive forms of avoir are: aie, aies, ait, ayons, ayez, aient. The subjunctive forms of être are: sois, sois, soit, soyons, soyez, soient.
            </p>
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
                      <td className="py-2 pl-3 w-8"><SpeakButton text={verb} size="sm" /></td>
                      <td className="py-2 font-black text-xs text-[#526173]">{pro}</td>
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
                      <td className="py-2 font-black text-xs text-[#526173] w-24">{pro}</td>
                      <td className="py-2 font-black text-[#7C3AED]">{verb}</td>
                      <td className="py-2 text-xs text-[#526173]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Key distinction */}
        <div className="mt-10 rounded-2xl bg-[#F5F3FF] border border-[#DDD6FE] p-6">
          <p className="font-black text-[#7C3AED]">The key distinction: présent vs passé</p>
          <p className="mt-2 text-sm text-[#526173]">
            The same triggers apply to both — the choice between présent and passé depends on <strong>when</strong> the action in the subordinate clause takes place relative to the main clause.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-xl bg-white p-4">
              <p className="font-black text-[#7C3AED]">Subjonctif présent</p>
              <p className="mt-1 text-[#526173]">The action is simultaneous or future relative to the main verb.</p>
              <p className="mt-2 font-black">Je suis content qu&apos;il <span className="text-[#7C3AED]">vienne</span>.</p>
              <p className="text-xs text-[#526173]">He is coming / will come (action ongoing or future)</p>
            </div>
            <div className="rounded-xl bg-white p-4">
              <p className="font-black text-[#7C3AED]">Subjonctif passé</p>
              <p className="mt-1 text-[#526173]">The action is completed before or at the time of the main verb.</p>
              <p className="mt-2 font-black">Je suis content qu&apos;il <span className="text-[#7C3AED]">soit venu</span>.</p>
              <p className="text-xs text-[#526173]">He came — it&apos;s already done (action completed)</p>
            </div>
          </div>
        </div>

        {/* Uses */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Uses</span>
            <h2 className="text-xl font-black">Présent vs passé in context</h2>
          </div>
          <div className="mt-5 space-y-4">
            {uses.map((u) => (
              <div key={u.title} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">{u.title}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2 text-sm">
                  <div className="rounded-xl bg-[#FFFDF7] p-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#526173]">Présent</p>
                    <p className="mt-1 font-black text-[#7C3AED]">{u.present}</p>
                  </div>
                  <div className="rounded-xl bg-[#F5F3FF] p-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED]">Passé</p>
                    <p className="mt-1 font-black text-[#7C3AED]">{u.passe}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#526173]">{u.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources/verbs-subjonctif" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le subjonctif présent →</Link>
          <Link href="/resources/sentence-structure#subordinate" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Subjunctive triggers →</Link>
        </div>
      </section>
    </main>
  );
}
