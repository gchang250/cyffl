"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const erEndings: [string, string, string][] = [
  ["je", "-ai", "je parlai"],
  ["tu", "-as", "tu parlas"],
  ["il / elle / on", "-a", "il parla"],
  ["nous", "-âmes", "nous parlâmes"],
  ["vous", "-âtes", "vous parlâtes"],
  ["ils / elles", "-èrent", "ils parlèrent"],
];

const irReEndings: [string, string, string][] = [
  ["je", "-is", "je finis / je vendis"],
  ["tu", "-is", "tu finis / tu vendis"],
  ["il / elle / on", "-it", "il finit / il vendit"],
  ["nous", "-îmes", "nous finîmes / nous vendîmes"],
  ["vous", "-îtes", "vous finîtes / vous vendîtes"],
  ["ils / elles", "-irent", "ils finirent / ils vendirent"],
];

const irregulars: [string, string][] = [
  ["être", "je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent"],
  ["avoir", "j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent"],
  ["faire", "je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent"],
  ["voir", "je vis, tu vis, il vit, nous vîmes, vous vîtes, ils virent"],
  ["venir / tenir", "je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent"],
  ["prendre", "je pris, tu pris, il prit, nous prîmes, vous prîtes, ils prirent"],
  ["dire", "je dis, tu dis, il dit, nous dîmes, vous dîtes, ils dirent"],
  ["mettre", "je mis, tu mis, il mit, nous mîmes, vous mîtes, ils mirent"],
  ["pouvoir", "je pus, tu pus, il put, nous pûmes, vous pûtes, ils purent"],
  ["savoir", "je sus, tu sus, il sut, nous sûmes, vous sûtes, ils surent"],
  ["vouloir", "je voulus, tu voulus, il voulut, nous voulûmes, vous voulûtes, ils voulurent"],
  ["vivre", "je vécus, tu vécus, il vécut, nous vécûmes, vous vécûtes, ils vécurent"],
];

export default function PasseSimplePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]">
              Verbs
            </span>
            <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]">
              ⚠️ Literary / Rarely spoken
            </span>
          </div>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Le passé simple
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The passé simple is the literary equivalent of the passé composé. It is used in novels, historical writing, and formal narratives — but <strong>never in conversation or informal writing</strong>. You need to recognize it when reading; you rarely need to produce it.
          </p>
        </div>

        {/* Reality check */}
        <div className="mt-8 rounded-2xl border-2 border-[#FDE68A] bg-[#FEF3C7] p-6">
          <p className="font-black text-[#D97706]">⚠️ Do you actually need this?</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <p className="font-black text-[#0B1F3A]">You need to recognize it if you:</p>
              <ul className="mt-2 space-y-1 text-[#526173]">
                {["Read French literature or classics", "Study French history or biography", "Read formal French journalism (rare)", "Prepare for DALF C1/C2"].map(t => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D97706]" />{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-black text-[#0B1F3A]">You do NOT need to produce it for:</p>
              <ul className="mt-2 space-y-1 text-[#526173]">
                {["Everyday conversation", "Workplace and professional French", "SLE (federal government tests)", "TEF Canada / TCF Canada", "IB French B SL", "Email, texting, social media"].map(t => (
                  <li key={t} className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#526173]" />{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-4 rounded-xl bg-white px-4 py-3 text-sm text-[#526173]">
            <strong className="text-[#0B1F3A]">The bottom line:</strong> In modern spoken and written French, the passé composé has almost completely replaced the passé simple. If you see <em>il parla</em> in a text, that is not a typo — it is literary style. In your own writing, use the passé composé instead.
          </p>
        </div>

        {/* Formation */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Formation</span>
            <h2 className="text-xl font-black">Three sets of endings</h2>
          </div>
          <p className="mt-2 text-sm text-[#526173]">-er verbs have one set of endings; -ir and -re verbs share another; most irregulars follow a third pattern (often with a u- stem).</p>
        </div>

        {/* -er verbs */}
        <div className="mt-6">
          <h3 className="font-black">-er verbs (parler, aimer, donner…)</h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Ending</th>
                  <th className="pb-3 text-left text-[#526173]">Example (parler)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {erEndings.map(([pro, end, ex]) => (
                  <tr key={pro}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={ex} size="sm" /></td>
                    <td className="py-3 font-black">{pro}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{end}</td>
                    <td className="py-3 text-[#526173]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* -ir/-re verbs */}
        <div className="mt-6">
          <h3 className="font-black">-ir and -re verbs (finir, vendre, partir…)</h3>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Pronoun</th>
                  <th className="pb-3 text-left font-black text-[#7C3AED]">Ending</th>
                  <th className="pb-3 text-left text-[#526173]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {irReEndings.map(([pro, end, ex]) => (
                  <tr key={pro}>
                    <td className="py-3 font-black">{pro}</td>
                    <td className="py-3 font-black text-[#7C3AED]">{end}</td>
                    <td className="py-3 text-[#526173]">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Irregulars */}
        <div className="mt-8">
          <h3 className="font-black">Common irregular verbs</h3>
          <p className="mt-1 text-sm text-[#526173]">These have irregular stems in the passé simple. Most follow the circumflex pattern in the nous and vous forms.</p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black">Infinitive</th>
                  <th className="pb-3 text-left text-[#526173]">Passé simple forms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {irregulars.map(([inf, forms]) => (
                  <tr key={inf}>
                    <td className="py-3 font-black text-[#7C3AED]">{inf}</td>
                    <td className="py-3 text-[#526173]">{forms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Literary examples */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">In context</span>
            <h2 className="text-xl font-black">What it looks like in literary text</h2>
          </div>
          <div className="mt-5 space-y-4">
            {[
              {
                literary: "Il se leva, prit son manteau et sortit sans un mot.",
                modern: "Il s'est levé, a pris son manteau et est sorti sans un mot.",
                note: "He got up, took his coat, and left without a word. The literary version uses se leva, prit, sortit (passé simple). The modern version uses s'est levé, a pris, est sorti (passé composé). Meaning is identical.",
              },
              {
                literary: "Napoléon naquit en 1769 et mourut en 1821.",
                modern: "Napoléon est né en 1769 et est mort en 1821.",
                note: "Napoleon was born in 1769 and died in 1821. Historical writing often uses the passé simple for completed biographical facts.",
              },
            ].map((ex) => (
              <div key={ex.literary} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#7C3AED]">Literary (passé simple)</p>
                    <p className="mt-2 font-black italic">{ex.literary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#526173]">Modern equivalent (passé composé)</p>
                    <p className="mt-2 font-black italic">{ex.modern}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[#526173]">{ex.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources/verbs-passe-compose" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le passé composé (use this instead) →</Link>
          <Link href="/resources/verbs-imparfait" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">L'imparfait →</Link>
        </div>
      </section>
    </main>
  );
}
