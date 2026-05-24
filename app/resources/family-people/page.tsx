import Link from "next/link";

const family: [string, string, string][] = [
  ["le père", "father", "masculine"],
  ["la mère", "mother", "feminine"],
  ["le frère", "brother", "masculine"],
  ["la soeur", "sister", "feminine"],
  ["le fils", "son", "masculine"],
  ["la fille", "daughter", "feminine"],
  ["le grand-père", "grandfather", "masculine"],
  ["la grand-mère", "grandmother", "feminine"],
  ["l'oncle", "uncle", "masculine"],
  ["la tante", "aunt", "feminine"],
  ["le cousin", "cousin (m)", "masculine"],
  ["la cousine", "cousin (f)", "feminine"],
  ["les parents", "parents", "always plural"],
  ["les enfants", "children", "masculine plural (mixed)"],
];

const descriptions: [string, string][] = [
  ["grand(e)", "tall / big"],
  ["petit(e)", "short / small"],
  ["jeune", "young"],
  ["vieux / vieille", "old"],
  ["sympa", "nice / friendly"],
  ["gentil(le)", "kind"],
  ["drôle", "funny"],
  ["intelligent(e)", "smart"],
  ["bavard(e)", "talkative"],
  ["timide", "shy"],
  ["sportif / sportive", "sporty"],
  ["sérieux / sérieuse", "serious"],
];

const phrases: { fr: string; en: string }[] = [
  { fr: "J'ai … frères et … soeurs.", en: "I have … brothers and … sisters." },
  { fr: "Ma famille est grande / petite.", en: "My family is big / small." },
  { fr: "Il/Elle ressemble à…", en: "He/She looks like…" },
  { fr: "Je m'entends bien avec…", en: "I get along well with…" },
  { fr: "Mon/Ma … s'appelle…", en: "My … is called…" },
];

export default function FamilyPeoplePage() {
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
            Family &amp; People
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Vocabulary for talking about the people in your life — family members, friends, and how to describe them.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Family members</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {family.map(([fr, en, note]) => (
                  <tr key={fr}>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-[#526173] italic">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Describing people</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {descriptions.map(([fr, en]) => (
                  <tr key={fr}>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Useful phrases</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {phrases.map((p) => (
              <div
                key={p.fr}
                className="rounded-2xl border border-[#E7DAB9] bg-white p-4"
              >
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
            href="/learn/french-foundations/unit-3/lesson-3"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
