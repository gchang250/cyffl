import Link from "next/link";
import VocabTable, { type VocabRow } from "@/components/VocabTable";

const colours: VocabRow[] = [
  { fr: "rouge", ipa: "[ʁuʒ]", en: "red" },
  { fr: "bleu", ipa: "[blø]", en: "blue" },
  { fr: "vert", ipa: "[vɛʁ]", en: "green" },
  { fr: "jaune", ipa: "[ʒon]", en: "yellow" },
  { fr: "blanc", ipa: "[blɑ̃]", en: "white" },
  { fr: "noir", ipa: "[nwaʁ]", en: "black" },
  { fr: "orange", ipa: "[ɔʁɑ̃ʒ]", en: "orange" },
  { fr: "violet", ipa: "[vjɔlɛ]", en: "purple" },
  { fr: "rose", ipa: "[ʁoz]", en: "pink" },
  { fr: "gris", ipa: "[ɡʁi]", en: "grey" },
];

const numbers: VocabRow[] = [
  { fr: "un", ipa: "[œ̃]", en: "one" },
  { fr: "deux", ipa: "[dø]", en: "two" },
  { fr: "trois", ipa: "[tʁwa]", en: "three" },
  { fr: "quatre", ipa: "[katʁ]", en: "four" },
  { fr: "cinq", ipa: "[sɛ̃k]", en: "five" },
  { fr: "six", ipa: "[sis]", en: "six" },
  { fr: "sept", ipa: "[sɛt]", en: "seven" },
  { fr: "huit", ipa: "[ɥit]", en: "eight" },
  { fr: "neuf", ipa: "[nœf]", en: "nine" },
  { fr: "dix", ipa: "[dis]", en: "ten" },
  { fr: "onze", ipa: "[ɔ̃z]", en: "eleven" },
  { fr: "douze", ipa: "[duz]", en: "twelve" },
  { fr: "treize", ipa: "[tʁɛz]", en: "thirteen" },
  { fr: "quatorze", ipa: "[katɔʁz]", en: "fourteen" },
  { fr: "quinze", ipa: "[kɛ̃z]", en: "fifteen" },
  { fr: "seize", ipa: "[sɛz]", en: "sixteen" },
  { fr: "dix-sept", ipa: "[dis.sɛt]", en: "seventeen" },
  { fr: "dix-huit", ipa: "[diz.ɥit]", en: "eighteen" },
  { fr: "dix-neuf", ipa: "[diz.nœf]", en: "nineteen" },
  { fr: "vingt", ipa: "[vɛ̃]", en: "twenty" },
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

const verbs: VocabRow[] = [
  { fr: "être", ipa: "[ɛtʁ]", en: "to be" },
  { fr: "avoir", ipa: "[avwaʁ]", en: "to have" },
  { fr: "aller", ipa: "[ale]", en: "to go" },
  { fr: "faire", ipa: "[fɛʁ]", en: "to do / make" },
  { fr: "parler", ipa: "[paʁle]", en: "to speak" },
  { fr: "manger", ipa: "[mɑ̃ʒe]", en: "to eat" },
  { fr: "aimer", ipa: "[ɛme]", en: "to like / love" },
  { fr: "regarder", ipa: "[ʁəɡaʁde]", en: "to watch" },
  { fr: "écouter", ipa: "[ekute]", en: "to listen" },
  { fr: "jouer", ipa: "[ʒwe]", en: "to play" },
  { fr: "habiter", ipa: "[abite]", en: "to live (somewhere)" },
  { fr: "travailler", ipa: "[tʁavaje]", en: "to work" },
];

const adjectives: VocabRow[] = [
  { fr: "grand", ipa: "[ɡʁɑ̃]", en: "big / tall" },
  { fr: "petit", ipa: "[pəti]", en: "small" },
  { fr: "bon", ipa: "[bɔ̃]", en: "good" },
  { fr: "mauvais", ipa: "[movɛ]", en: "bad" },
  { fr: "beau", ipa: "[bo]", en: "beautiful" },
  { fr: "vieux", ipa: "[vjø]", en: "old" },
  { fr: "nouveau", ipa: "[nuvo]", en: "new" },
  { fr: "facile", ipa: "[fasil]", en: "easy" },
  { fr: "difficile", ipa: "[difisil]", en: "hard / difficult" },
  { fr: "intéressant", ipa: "[ɛ̃teʁesɑ̃]", en: "interesting" },
  { fr: "sympa", ipa: "[sɛ̃pa]", en: "nice / friendly" },
  { fr: "rapide", ipa: "[ʁapid]", en: "fast" },
];

export default function BeginnerWordListsPage() {
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
            Beginner Word Lists
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Essential French vocabulary organized by theme. Click <span className="font-black">🔊</span> to hear any word pronounced in French. IPA transcriptions are included for pronunciation reference.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#0B1F3A] p-5 text-white">
          <p className="font-black text-[#C9A44C] text-sm">Reading IPA — key symbols</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
            {[
              { sym: "ʁ", desc: "French R: back of throat" },
              { sym: "ɑ̃ ɛ̃ ɔ̃ œ̃", desc: "Nasal vowels: air through nose" },
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
          <VocabTable rows={colours} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Numbers 1–20</h2>
          <VocabTable rows={numbers} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Days of the week</h2>
          <VocabTable rows={days} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Months</h2>
          <VocabTable rows={months} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common verbs</h2>
          <VocabTable rows={verbs} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Common adjectives</h2>
          <VocabTable rows={adjectives} />
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Want to practise interactively?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The French Foundations course covers all of this with flashcards, quizzes, and exercises.
          </p>
          <Link
            href="/learn/french-foundations"
            className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
