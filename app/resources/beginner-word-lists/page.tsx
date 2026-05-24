import Link from "next/link";

const colours: [string, string][] = [
  ["rouge", "red"],
  ["bleu", "blue"],
  ["vert", "green"],
  ["jaune", "yellow"],
  ["blanc", "white"],
  ["noir", "black"],
  ["orange", "orange"],
  ["violet", "purple"],
  ["rose", "pink"],
  ["gris", "grey"],
];

const numbers: [string, string][] = [
  ["un", "one"],
  ["deux", "two"],
  ["trois", "three"],
  ["quatre", "four"],
  ["cinq", "five"],
  ["six", "six"],
  ["sept", "seven"],
  ["huit", "eight"],
  ["neuf", "nine"],
  ["dix", "ten"],
  ["onze", "eleven"],
  ["douze", "twelve"],
  ["treize", "thirteen"],
  ["quatorze", "fourteen"],
  ["quinze", "fifteen"],
  ["seize", "sixteen"],
  ["dix-sept", "seventeen"],
  ["dix-huit", "eighteen"],
  ["dix-neuf", "nineteen"],
  ["vingt", "twenty"],
];

const days: [string, string][] = [
  ["lundi", "Monday"],
  ["mardi", "Tuesday"],
  ["mercredi", "Wednesday"],
  ["jeudi", "Thursday"],
  ["vendredi", "Friday"],
  ["samedi", "Saturday"],
  ["dimanche", "Sunday"],
];

const months: [string, string][] = [
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

const verbs: [string, string][] = [
  ["être", "to be"],
  ["avoir", "to have"],
  ["aller", "to go"],
  ["faire", "to do / make"],
  ["parler", "to speak"],
  ["manger", "to eat"],
  ["aimer", "to like / love"],
  ["regarder", "to watch"],
  ["écouter", "to listen"],
  ["jouer", "to play"],
  ["habiter", "to live"],
  ["travailler", "to work"],
];

const adjectives: [string, string][] = [
  ["grand", "big"],
  ["petit", "small"],
  ["bon", "good"],
  ["mauvais", "bad"],
  ["beau", "beautiful"],
  ["vieux", "old"],
  ["nouveau", "new"],
  ["facile", "easy"],
  ["difficile", "hard"],
  ["intéressant", "interesting"],
  ["sympa", "nice"],
  ["rapide", "fast"],
];

function WordTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E7DAB9]">
            <th className="pb-3 text-left font-black text-[#0B1F3A]">French</th>
            <th className="pb-3 text-left font-black text-[#0B1F3A]">English</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3EDD8]">
          {rows.map(([fr, en]) => (
            <tr key={fr}>
              <td className="py-3 font-black">{fr}</td>
              <td className="py-3 text-[#526173]">{en}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BeginnerWordListsPage() {
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
            Beginner Word Lists
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Essential French vocabulary organized by theme. Build your core word bank with the words you'll use most often.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Colours</h2>
          <WordTable rows={colours} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Numbers 1–20</h2>
          <WordTable rows={numbers} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Days of the week</h2>
          <WordTable rows={days} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Months</h2>
          <WordTable rows={months} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common verbs</h2>
          <WordTable rows={verbs} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common adjectives</h2>
          <WordTable rows={adjectives} />
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
