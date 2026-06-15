import Link from "next/link";
import VocabTable, { type VocabRow } from "@/components/VocabTable";
import SpeakButton from "@/components/SpeakButton";

const subjects: VocabRow[] = [
  { fr: "les maths", ipa: "[mats]", en: "maths" },
  { fr: "le français", ipa: "[fʁɑ̃sɛ]", en: "French" },
  { fr: "l'histoire", ipa: "[listwaʁ]", en: "history" },
  { fr: "la géographie", ipa: "[ʒeɔɡʁafi]", en: "geography" },
  { fr: "les sciences", ipa: "[sjɑ̃s]", en: "science" },
  { fr: "la biologie", ipa: "[bjɔlɔʒi]", en: "biology" },
  { fr: "la chimie", ipa: "[ʃimi]", en: "chemistry" },
  { fr: "la physique", ipa: "[fizik]", en: "physics" },
  { fr: "l'informatique", ipa: "[ɛ̃fɔʁmatik]", en: "computer science" },
  { fr: "l'art", ipa: "[aʁ]", en: "art" },
  { fr: "la musique", ipa: "[myzik]", en: "music" },
  { fr: "l'EPS", ipa: "[ø.pe.ɛs]", en: "PE / gym" },
];

const classroom: VocabRow[] = [
  { fr: "la salle de classe", ipa: "[sal də klas]", en: "classroom" },
  { fr: "le bureau", ipa: "[byʁo]", en: "desk / office" },
  { fr: "le tableau", ipa: "[tablo]", en: "board / chalkboard" },
  { fr: "le stylo", ipa: "[stilo]", en: "pen" },
  { fr: "le crayon", ipa: "[kʁɛjɔ̃]", en: "pencil" },
  { fr: "le cahier", ipa: "[kaje]", en: "notebook" },
  { fr: "le livre", ipa: "[livʁ]", en: "book" },
  { fr: "le cartable", ipa: "[kaʁtabl]", en: "school bag" },
  { fr: "les devoirs", ipa: "[dəvwaʁ]", en: "homework" },
  { fr: "l'examen", ipa: "[ɛɡzamɛ̃]", en: "exam" },
  { fr: "la bibliothèque", ipa: "[biblijɔtɛk]", en: "library" },
  { fr: "la cantine", ipa: "[kɑ̃tin]", en: "cafeteria" },
];

const phrases: { fr: string; en: string }[] = [
  { fr: "J'ai cours de…", en: "I have a … class" },
  { fr: "Ma matière préférée est…", en: "My favourite subject is…" },
  { fr: "Je n'ai pas compris.", en: "I didn't understand." },
  { fr: "Pouvez-vous répéter ?", en: "Can you repeat that?" },
  { fr: "Comment dit-on … en français ?", en: "How do you say … in French?" },
  { fr: "J'ai oublié mes devoirs.", en: "I forgot my homework." },
  { fr: "Est-ce que je peux aller aux toilettes ?", en: "May I go to the bathroom?" },
  { fr: "Je ne sais pas.", en: "I don't know." },
];

export default function SchoolVocabularyPage() {
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
            School Vocabulary
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            French words and phrases for the classroom, subjects, and school life. Click <span className="font-black">🔊</span> to hear any word pronounced in French.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">School subjects</h2>
          <VocabTable rows={subjects} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Classroom vocabulary</h2>
          <VocabTable rows={classroom} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Useful classroom phrases</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9] bg-[#FFFDF7]">
                  <th className="py-3 pl-4 w-8" />
                  <th className="py-3 pl-2 text-left font-black text-[#0B1F3A]">French</th>
                  <th className="py-3 pl-4 pr-5 text-left font-black text-[#0B1F3A]">English</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {phrases.map((p) => (
                  <tr key={p.fr} className="group hover:bg-[#FFFDF7] transition-colors">
                    <td className="py-2.5 pl-4">
                      <SpeakButton text={p.fr} size="sm" />
                    </td>
                    <td className="py-2.5 pl-2 font-black">{p.fr}</td>
                    <td className="py-2.5 pl-4 pr-5 text-[#526173]">{p.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
