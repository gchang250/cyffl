import Link from "next/link";

// [French, IPA, English]
const colours: [string, string, string][] = [
  ["rouge", "[ʁuʒ]", "red"],
  ["bleu", "[blø]", "blue"],
  ["vert", "[vɛʁ]", "green"],
  ["jaune", "[ʒon]", "yellow"],
  ["blanc", "[blɑ̃]", "white"],
  ["noir", "[nwaʁ]", "black"],
  ["orange", "[ɔʁɑ̃ʒ]", "orange"],
  ["violet", "[vjɔlɛ]", "purple"],
  ["rose", "[ʁoz]", "pink"],
  ["gris", "[ɡʁi]", "grey"],
];

const numbers: [string, string, string][] = [
  ["un", "[œ̃]", "one"],
  ["deux", "[dø]", "two"],
  ["trois", "[tʁwa]", "three"],
  ["quatre", "[katʁ]", "four"],
  ["cinq", "[sɛ̃k]", "five"],
  ["six", "[sis]", "six"],
  ["sept", "[sɛt]", "seven"],
  ["huit", "[ɥit]", "eight"],
  ["neuf", "[nœf]", "nine"],
  ["dix", "[dis]", "ten"],
  ["onze", "[ɔ̃z]", "eleven"],
  ["douze", "[duz]", "twelve"],
  ["treize", "[tʁɛz]", "thirteen"],
  ["quatorze", "[katɔʁz]", "fourteen"],
  ["quinze", "[kɛ̃z]", "fifteen"],
  ["seize", "[sɛz]", "sixteen"],
  ["dix-sept", "[dis.sɛt]", "seventeen"],
  ["dix-huit", "[diz.ɥit]", "eighteen"],
  ["dix-neuf", "[diz.nœf]", "nineteen"],
  ["vingt", "[vɛ̃]", "twenty"],
];

const days: [string, string, string][] = [
  ["lundi", "[lœ̃di]", "Monday"],
  ["mardi", "[maʁdi]", "Tuesday"],
  ["mercredi", "[mɛʁkʁədi]", "Wednesday"],
  ["jeudi", "[ʒødi]", "Thursday"],
  ["vendredi", "[vɑ̃dʁədi]", "Friday"],
  ["samedi", "[samdi]", "Saturday"],
  ["dimanche", "[dimɑ̃ʃ]", "Sunday"],
];

const months: [string, string, string][] = [
  ["janvier", "[ʒɑ̃vje]", "January"],
  ["février", "[fevʁije]", "February"],
  ["mars", "[maʁs]", "March"],
  ["avril", "[avʁil]", "April"],
  ["mai", "[mɛ]", "May"],
  ["juin", "[ʒɥɛ̃]", "June"],
  ["juillet", "[ʒɥijɛ]", "July"],
  ["août", "[u]", "August"],
  ["septembre", "[sɛptɑ̃bʁ]", "September"],
  ["octobre", "[ɔktɔbʁ]", "October"],
  ["novembre", "[nɔvɑ̃bʁ]", "November"],
  ["décembre", "[desɑ̃bʁ]", "December"],
];

const verbs: [string, string, string][] = [
  ["être", "[ɛtʁ]", "to be"],
  ["avoir", "[avwaʁ]", "to have"],
  ["aller", "[ale]", "to go"],
  ["faire", "[fɛʁ]", "to do / make"],
  ["parler", "[paʁle]", "to speak"],
  ["manger", "[mɑ̃ʒe]", "to eat"],
  ["aimer", "[ɛme]", "to like / love"],
  ["regarder", "[ʁəɡaʁde]", "to watch"],
  ["écouter", "[ekute]", "to listen"],
  ["jouer", "[ʒwe]", "to play"],
  ["habiter", "[abite]", "to live (somewhere)"],
  ["travailler", "[tʁavaje]", "to work"],
];

const adjectives: [string, string, string][] = [
  ["grand", "[ɡʁɑ̃]", "big / tall"],
  ["petit", "[pəti]", "small"],
  ["bon", "[bɔ̃]", "good"],
  ["mauvais", "[movɛ]", "bad"],
  ["beau", "[bo]", "beautiful"],
  ["vieux", "[vjø]", "old"],
  ["nouveau", "[nuvo]", "new"],
  ["facile", "[fasil]", "easy"],
  ["difficile", "[difisil]", "hard / difficult"],
  ["intéressant", "[ɛ̃teʁesɑ̃]", "interesting"],
  ["sympa", "[sɛ̃pa]", "nice / friendly"],
  ["rapide", "[ʁapid]", "fast"],
];

function WordTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E7DAB9] bg-[#FFFDF7]">
            <th className="py-3 pl-5 text-left font-black text-[#0B1F3A]">French</th>
            <th className="py-3 pl-4 text-left font-mono text-xs font-bold text-[#526173]">IPA</th>
            <th className="py-3 pl-4 pr-5 text-left font-black text-[#0B1F3A]">English</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3EDD8]">
          {rows.map(([fr, ipa, en]) => (
            <tr key={fr} className="group hover:bg-[#FFFDF7] transition-colors">
              <td className="py-3 pl-5 font-black">{fr}</td>
              <td className="py-3 pl-4 font-mono text-xs text-[#526173] group-hover:text-[#0B1F3A] transition-colors">{ipa}</td>
              <td className="py-3 pl-4 pr-5 text-[#526173]">{en}</td>
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
            Essential French vocabulary organized by theme, with IPA pronunciation for every word. The IPA column uses the International Phonetic Alphabet — a standard notation for how words are pronounced.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#0B1F3A] p-5 text-white">
          <p className="font-black text-[#C9A44C] text-sm">Reading IPA — key symbols</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
            {[
              { sym: "ʁ", desc: "French R — back of throat" },
              { sym: "ɑ̃ ɛ̃ ɔ̃ œ̃", desc: "Nasal vowels — air through nose" },
              { sym: "ø œ", desc: "Front rounded vowels (bleu, neuf)" },
              { sym: "ɥ", desc: "'Glide' in huit, nuit" },
              { sym: "ʃ ʒ", desc: "sh (chat) / zh (je)" },
              { sym: "[ ]", desc: "Square brackets = IPA transcription" },
            ].map((k) => (
              <div key={k.sym} className="rounded-xl bg-white/10 p-3">
                <p className="font-mono font-black text-[#C9A44C]">{k.sym}</p>
                <p className="mt-1 text-xs text-white/70">{k.desc}</p>
              </div>
            ))}
          </div>
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
