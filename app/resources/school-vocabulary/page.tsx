import Link from "next/link";

const subjects: [string, string][] = [
  ["les maths", "maths"],
  ["le français", "French"],
  ["l'histoire", "history"],
  ["la géographie", "geography"],
  ["les sciences", "science"],
  ["la biologie", "biology"],
  ["la chimie", "chemistry"],
  ["la physique", "physics"],
  ["l'informatique", "computer science"],
  ["l'art", "art"],
  ["la musique", "music"],
  ["l'EPS", "PE / gym"],
];

const classroom: [string, string][] = [
  ["la salle de classe", "classroom"],
  ["le bureau", "desk / office"],
  ["le tableau", "board / chalkboard"],
  ["le stylo", "pen"],
  ["le crayon", "pencil"],
  ["le cahier", "notebook"],
  ["le livre", "book"],
  ["le cartable", "school bag"],
  ["les devoirs", "homework"],
  ["l'examen", "exam"],
  ["la bibliothèque", "library"],
  ["la cantine", "cafeteria"],
];

const phrases: { fr: string; en: string }[] = [
  { fr: "J'ai cours de…", en: "I have a … class" },
  { fr: "Mon matière préféré est…", en: "My favourite subject is…" },
  { fr: "Je n'ai pas compris.", en: "I didn't understand." },
  { fr: "Pouvez-vous répéter?", en: "Can you repeat that?" },
  { fr: "Comment dit-on … en français?", en: "How do you say … in French?" },
  { fr: "J'ai oublié mes devoirs.", en: "I forgot my homework." },
];

export default function SchoolVocabularyPage() {
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
            School Vocabulary
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            French words and phrases for the classroom, subjects, and school life. Useful for any student taking French at school.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">School subjects</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {subjects.map(([fr, en]) => (
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
          <h2 className="text-2xl font-black">In the classroom</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {classroom.map(([fr, en]) => (
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
