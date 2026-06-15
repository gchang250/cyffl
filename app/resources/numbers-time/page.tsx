import Link from "next/link";
import VocabTable, { type VocabRow } from "@/components/VocabTable";
import SpeakButton from "@/components/SpeakButton";

const numberChips: [number, string][] = [
  [1, "un"], [2, "deux"], [3, "trois"], [4, "quatre"], [5, "cinq"],
  [6, "six"], [7, "sept"], [8, "huit"], [9, "neuf"], [10, "dix"],
  [11, "onze"], [12, "douze"], [13, "treize"], [14, "quatorze"], [15, "quinze"],
  [16, "seize"], [17, "dix-sept"], [18, "dix-huit"], [19, "dix-neuf"], [20, "vingt"],
  [30, "trente"], [40, "quarante"], [50, "cinquante"], [60, "soixante"],
  [70, "soixante-dix"], [80, "quatre-vingts"], [90, "quatre-vingt-dix"], [100, "cent"],
];

const timeRows: { fr: string; en: string }[] = [
  { fr: "Il est une heure.", en: "It is 1 o'clock." },
  { fr: "Il est deux heures.", en: "It is 2 o'clock." },
  { fr: "Il est midi.", en: "It is noon." },
  { fr: "Il est minuit.", en: "It is midnight." },
  { fr: "…et quart", en: "…quarter past" },
  { fr: "…et demie", en: "…half past" },
  { fr: "…moins le quart", en: "…quarter to" },
];

const timeExamples: { fr: string; en: string }[] = [
  { fr: "Il est trois heures et quart.", en: "3:15" },
  { fr: "Il est cinq heures et demie.", en: "5:30" },
  { fr: "Il est sept heures moins le quart.", en: "6:45" },
  { fr: "Il est neuf heures du matin.", en: "9 AM" },
];

const days: VocabRow[] = [
  { fr: "lundi", ipa: "[lœ̃di]", en: "Monday" },
  { fr: "mardi", ipa: "[maʁdi]", en: "Tuesday" },
  { fr: "mercredi", ipa: "[mɛʁkʁədi]", en: "Wednesday" },
  { fr: "jeudi", ipa: "[ʒødi]", en: "Thursday" },
  { fr: "vendredi", ipa: "[vɑ̃dʁədi]", en: "Friday" },
  { fr: "samedi", ipa: "[samdi]", en: "Saturday" },
  { fr: "dimanche", ipa: "[dimɑ̃ʃ]", en: "Sunday" },
];

const months: VocabRow[] = [
  { fr: "janvier", ipa: "[ʒɑ̃vje]", en: "January" },
  { fr: "février", ipa: "[fevʁije]", en: "February" },
  { fr: "mars", ipa: "[maʁs]", en: "March" },
  { fr: "avril", ipa: "[avʁil]", en: "April" },
  { fr: "mai", ipa: "[mɛ]", en: "May" },
  { fr: "juin", ipa: "[ʒɥɛ̃]", en: "June" },
  { fr: "juillet", ipa: "[ʒɥijɛ]", en: "July" },
  { fr: "août", ipa: "[u]", en: "August" },
  { fr: "septembre", ipa: "[sɛptɑ̃bʁ]", en: "September" },
  { fr: "octobre", ipa: "[ɔktɔbʁ]", en: "October" },
  { fr: "novembre", ipa: "[nɔvɑ̃bʁ]", en: "November" },
  { fr: "décembre", ipa: "[desɑ̃bʁ]", en: "December" },
];

const datePhrases: { fr: string; en: string }[] = [
  { fr: "Quelle est la date aujourd'hui ?", en: "What is today's date?" },
  { fr: "C'est le [numéro] [mois].", en: "It is the [date] of [month]." },
  { fr: "Je suis né(e) le…", en: "I was born on…" },
  { fr: "Mon anniversaire est en…", en: "My birthday is in…" },
  { fr: "Quelle heure est-il ?", en: "What time is it?" },
  { fr: "Il est… heures.", en: "It is … o'clock." },
];

export default function NumbersTimePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]">
            Vocabulary
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Numbers &amp; Time
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Count, tell the time, and talk about dates in French. Click <span className="font-black">🔊</span> on any word or phrase to hear it pronounced.
          </p>
        </div>

        {/* Numbers grid */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Numbers 1–100</h2>
          <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-5">
            {numberChips.map(([n, fr]) => (
              <div
                key={n}
                className="group rounded-xl border border-[#E7DAB9] bg-white p-3 text-center hover:border-[#2563EB] transition-colors"
              >
                <p className="text-xs text-[#526173]">{n}</p>
                <p className="mt-0.5 font-black text-[#0B1F3A]">{fr}</p>
                <div className="mt-2 flex justify-center">
                  <SpeakButton text={fr} size="sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Note: </span>
            70 = soixante-dix (sixty-ten), 80 = quatre-vingts (four-twenties), 90 = quatre-vingt-dix (four-twenty-ten). These are quirky but essential!
          </div>
        </div>

        {/* Telling time */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Telling time</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9] bg-[#FFFDF7]">
                  <th className="py-3 pl-4 w-8" />
                  <th className="py-3 pl-2 text-left font-black">French</th>
                  <th className="py-3 pl-4 pr-5 text-left font-black">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {timeRows.map((row) => (
                  <tr key={row.fr} className="group hover:bg-[#FFFDF7] transition-colors">
                    <td className="py-2.5 pl-4"><SpeakButton text={row.fr} size="sm" /></td>
                    <td className="py-2.5 pl-2 font-black">{row.fr}</td>
                    <td className="py-2.5 pl-4 pr-5 text-[#526173]">{row.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {timeExamples.map((ex) => (
              <div key={ex.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4 flex items-start gap-3">
                <SpeakButton text={ex.fr} size="sm" />
                <div>
                  <p className="font-black text-[#0B1F3A]">{ex.fr}</p>
                  <p className="mt-0.5 text-sm text-[#526173]">{ex.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Days and months with IPA */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Days of the week</h2>
          <VocabTable rows={days} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Months</h2>
          <VocabTable rows={months} />
        </div>

        {/* Date phrases */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Useful date &amp; time phrases</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9] bg-[#FFFDF7]">
                  <th className="py-3 pl-4 w-8" />
                  <th className="py-3 pl-2 text-left font-black">French</th>
                  <th className="py-3 pl-4 pr-5 text-left font-black">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {datePhrases.map((p) => (
                  <tr key={p.fr} className="group hover:bg-[#FFFDF7] transition-colors">
                    <td className="py-2.5 pl-4"><SpeakButton text={p.fr} size="sm" /></td>
                    <td className="py-2.5 pl-2 font-black">{p.fr}</td>
                    <td className="py-2.5 pl-4 pr-5 text-[#526173]">{p.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link href="/learn/french-foundations" className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]">
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
