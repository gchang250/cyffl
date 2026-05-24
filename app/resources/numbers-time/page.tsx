import Link from "next/link";

const numberChips: [number, string][] = [
  [1, "un"], [2, "deux"], [3, "trois"], [4, "quatre"], [5, "cinq"],
  [6, "six"], [7, "sept"], [8, "huit"], [9, "neuf"], [10, "dix"],
  [11, "onze"], [12, "douze"], [13, "treize"], [14, "quatorze"], [15, "quinze"],
  [16, "seize"], [17, "dix-sept"], [18, "dix-huit"], [19, "dix-neuf"], [20, "vingt"],
  [30, "trente"], [40, "quarante"], [50, "cinquante"], [60, "soixante"],
  [70, "soixante-dix"], [80, "quatre-vingts"], [90, "quatre-vingt-dix"], [100, "cent"],
];

const timeRows: [string, string][] = [
  ["Il est une heure.", "It is 1 o'clock."],
  ["Il est deux heures.", "It is 2 o'clock."],
  ["Il est midi.", "It is noon."],
  ["Il est minuit.", "It is midnight."],
  ["…et quart", "…quarter past"],
  ["…et demie", "…half past"],
  ["…moins le quart", "…quarter to"],
];

const timeExamples: { fr: string; en: string }[] = [
  { fr: "Il est trois heures et quart.", en: "3:15" },
  { fr: "Il est cinq heures et demie.", en: "5:30" },
  { fr: "Il est sept heures moins le quart.", en: "6:45" },
  { fr: "Il est neuf heures du matin.", en: "9 AM" },
];

const daysData: [string, string][] = [
  ["lundi", "Monday"],
  ["mardi", "Tuesday"],
  ["mercredi", "Wednesday"],
  ["jeudi", "Thursday"],
  ["vendredi", "Friday"],
  ["samedi", "Saturday"],
  ["dimanche", "Sunday"],
];

const monthsData: [string, string][] = [
  ["janvier", "January"],
  ["février", "February"],
  ["mars", "March"],
  ["avril", "April"],
  ["mai", "May"],
  ["juin", "June"],
  ["juillet", "July"],
  ["août", "August"],
  ["septembre", "September"],
  ["octobre", "October"],
  ["novembre", "November"],
  ["décembre", "December"],
];

const datePhrases: { fr: string; en: string }[] = [
  { fr: "Quelle est la date aujourd'hui?", en: "What is today's date?" },
  { fr: "C'est le [number] [month].", en: "It is the [date] of [month]." },
  { fr: "Je suis né(e) le…", en: "I was born on…" },
  { fr: "Mon anniversaire est en…", en: "My birthday is in…" },
  { fr: "Quelle heure est-il?", en: "What time is it?" },
];

export default function NumbersTimePage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
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
            Count, tell the time, and talk about dates in French. These come up constantly — in class, on exams, and in everyday conversation.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Numbers 1–100</h2>
          <div className="mt-6 grid grid-cols-4 gap-2 md:grid-cols-5">
            {numberChips.map(([n, fr]) => (
              <div
                key={n}
                className="rounded-xl border border-[#E7DAB9] bg-white p-2 text-center text-sm"
              >
                <p className="font-black text-[#0B1F3A]">{n}</p>
                <p className="text-xs text-[#526173]">{fr}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Note: </span>
            70 = soixante-dix (sixty-ten), 80 = quatre-vingts (four-twenties), 90 = quatre-vingt-dix (four-twenty-ten). These are quirky but essential!
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Telling time</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {timeRows.map(([fr, en]) => (
                  <tr key={fr}>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {timeExamples.map((ex) => (
              <div key={ex.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="font-black text-[#0B1F3A]">{ex.fr}</p>
                <p className="mt-1 text-sm text-[#526173]">{ex.en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Days &amp; months</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-3 text-left font-black text-[#0B1F3A]">Day (French)</th>
                    <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD8]">
                  {daysData.map(([fr, en]) => (
                    <tr key={fr}>
                      <td className="py-3 font-black">{fr}</td>
                      <td className="py-3 text-[#526173]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-3 text-left font-black text-[#0B1F3A]">Month (French)</th>
                    <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD8]">
                  {monthsData.map(([fr, en]) => (
                    <tr key={fr}>
                      <td className="py-3 font-black">{fr}</td>
                      <td className="py-3 text-[#526173]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Useful date phrases</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {datePhrases.map((p) => (
              <div key={p.fr} className="rounded-2xl border border-[#E7DAB9] bg-white p-4">
                <p className="font-black text-[#0B1F3A]">{p.fr}</p>
                <p className="mt-1 text-sm text-[#526173]">{p.en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link
            href="/learn/french-foundations"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
