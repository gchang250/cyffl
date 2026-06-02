import Link from "next/link";

const avoir: [string, string, string][] = [
  ["j'", "aurais parlé", "I would have spoken"],
  ["tu", "aurais parlé", "you would have spoken"],
  ["il / elle / on", "aurait parlé", "he would have spoken"],
  ["nous", "aurions parlé", "we would have spoken"],
  ["vous", "auriez parlé", "you would have spoken"],
  ["ils / elles", "auraient parlé", "they would have spoken"],
];

const etre: [string, string, string][] = [
  ["je", "serais parti(e)", "I would have left"],
  ["tu", "serais parti(e)", "you would have left"],
  ["il / elle", "serait parti(e)", "he / she would have left"],
  ["nous", "serions parti(e)s", "we would have left"],
  ["vous", "seriez parti(e)(s)", "you would have left"],
  ["ils / elles", "seraient parti(e)s", "they would have left"],
];

const uses: { title: string; example: string; note: string }[] = [
  {
    title: "Hypothetical past — what would have happened",
    example: "Si j'avais étudié, j'aurais réussi.",
    note: "If I had studied, I would have passed. The plus-que-parfait sets the condition; the conditionnel passé gives the result. This is the most common use.",
  },
  {
    title: "Regret or reproach",
    example: "Tu aurais pu me le dire ! · J'aurais dû partir plus tôt.",
    note: "You could have told me! / I should have left earlier. 'Aurais pu' and 'aurais dû' express missed opportunity or mild blame.",
  },
  {
    title: "Polite past hypothetical",
    example: "J'aurais aimé vous voir plus tôt.",
    note: "I would have liked to see you sooner. More formal/polished than 'j'aurais voulu'. Used in professional correspondence.",
  },
  {
    title: "Unconfirmed news (journalistic conditional)",
    example: "Le président aurait signé l'accord hier soir.",
    note: "The president reportedly signed the agreement last night. The conditionnel passé signals the information is not yet confirmed — very common in French news writing.",
  },
];

export default function ConditionnelPassePage() {
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
            Le conditionnel passé
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The conditionnel passé means &ldquo;would have done.&rdquo; It is used for hypothetical past events, regrets, reproaches, and — in journalism — to signal unverified information.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">avoir / être in conditionnel présent + past participle</h2>
          </div>
          <div className="mt-4 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">The rule</p>
            <p className="mt-2 text-sm leading-7 text-white/80">
              Same structure as the passé composé, but use <span className="font-black text-white">avoir or être in the conditionnel présent</span>. Same être verbs apply, same agreement rules as passé composé.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black text-[#C9A44C]">Conditionnel présent of avoir</p>
                <p className="text-white/70 mt-1">j'aurais / tu aurais / il aurait / nous aurions / vous auriez / ils auraient</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="font-black text-[#C9A44C]">Conditionnel présent of être</p>
                <p className="text-white/70 mt-1">je serais / tu serais / il serait / nous serions / vous seriez / ils seraient</p>
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
            <h2 className="text-xl font-black">When to use the conditionnel passé</h2>
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

        {/* Si-clause table */}
        <div className="mt-10 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] p-6">
          <p className="font-black text-[#D97706]">Si-clause tense sequence — all three types</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#FDE68A]">
                  <th className="pb-3 text-left font-black text-[#D97706]">Si-clause</th>
                  <th className="pb-3 text-left font-black text-[#D97706]">Result clause</th>
                  <th className="pb-3 text-left text-[#526173]">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FDE68A]">
                {[
                  ["si + présent", "futur simple", "Si tu travailles, tu réussiras. (real possibility)"],
                  ["si + imparfait", "conditionnel présent", "Si tu travaillais, tu réussirais. (hypothetical present)"],
                  ["si + plus-que-parfait", "conditionnel passé", "Si tu avais travaillé, tu aurais réussi. (hypothetical past)"],
                ].map(([si, result, ex]) => (
                  <tr key={si}>
                    <td className="py-3 font-black text-[#7C3AED]">{si}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{result}</td>
                    <td className="py-3 text-[#526173]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources/verbs-conditionnel" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le conditionnel présent →</Link>
          <Link href="/resources/verbs-plus-que-parfait" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le plus-que-parfait →</Link>
        </div>
      </section>
    </main>
  );
}
