import Link from "next/link";
import VocabTable, { type VocabRow } from "@/components/VocabTable";
import SpeakButton from "@/components/SpeakButton";

const family: VocabRow[] = [
  { fr: "le père", ipa: "[pɛʁ]", en: "father", note: "masculine" },
  { fr: "la mère", ipa: "[mɛʁ]", en: "mother", note: "feminine" },
  { fr: "le frère", ipa: "[fʁɛʁ]", en: "brother", note: "masculine" },
  { fr: "la sœur", ipa: "[sœʁ]", en: "sister", note: "feminine" },
  { fr: "le fils", ipa: "[fis]", en: "son", note: "masculine: the s is silent" },
  { fr: "la fille", ipa: "[fij]", en: "daughter / girl", note: "feminine" },
  { fr: "le grand-père", ipa: "[ɡʁɑ̃.pɛʁ]", en: "grandfather", note: "masculine" },
  { fr: "la grand-mère", ipa: "[ɡʁɑ̃.mɛʁ]", en: "grandmother", note: "feminine" },
  { fr: "l'oncle", ipa: "[ɔ̃kl]", en: "uncle", note: "masculine" },
  { fr: "la tante", ipa: "[tɑ̃t]", en: "aunt", note: "feminine" },
  { fr: "le cousin", ipa: "[kuzɛ̃]", en: "cousin (m)", note: "masculine" },
  { fr: "la cousine", ipa: "[kuzin]", en: "cousin (f)", note: "feminine" },
  { fr: "les parents", ipa: "[paʁɑ̃]", en: "parents", note: "always plural" },
  { fr: "les enfants", ipa: "[ɑ̃fɑ̃]", en: "children", note: "masc. plural when mixed" },
  { fr: "le mari", ipa: "[maʁi]", en: "husband", note: "masculine" },
  { fr: "la femme", ipa: "[fam]", en: "wife / woman", note: "feminine" },
  { fr: "les grands-parents", ipa: "[ɡʁɑ̃.paʁɑ̃]", en: "grandparents", note: "always plural" },
];

const descriptions: VocabRow[] = [
  { fr: "grand(e)", ipa: "[ɡʁɑ̃] / [ɡʁɑ̃d]", en: "tall / big" },
  { fr: "petit(e)", ipa: "[pəti] / [pətit]", en: "short / small" },
  { fr: "jeune", ipa: "[ʒœn]", en: "young" },
  { fr: "vieux / vieille", ipa: "[vjø] / [vjɛj]", en: "old" },
  { fr: "sympa", ipa: "[sɛ̃pa]", en: "nice / friendly" },
  { fr: "gentil(le)", ipa: "[ʒɑ̃ti] / [ʒɑ̃tij]", en: "kind" },
  { fr: "drôle", ipa: "[dʁol]", en: "funny" },
  { fr: "intelligent(e)", ipa: "[ɛ̃tɛliʒɑ̃] / [ɛ̃tɛliʒɑ̃t]", en: "smart" },
  { fr: "bavard(e)", ipa: "[bavaʁ] / [bavaʁd]", en: "talkative" },
  { fr: "timide", ipa: "[timid]", en: "shy" },
  { fr: "sportif / sportive", ipa: "[spɔʁtif] / [spɔʁtiv]", en: "sporty" },
  { fr: "sérieux / sérieuse", ipa: "[seʁjø] / [seʁjøz]", en: "serious" },
  { fr: "calme", ipa: "[kalm]", en: "calm / quiet" },
  { fr: "curieux / curieuse", ipa: "[kyʁjø] / [kyʁjøz]", en: "curious" },
];

const phrases: { fr: string; en: string }[] = [
  { fr: "J'ai … frères et … sœurs.", en: "I have … brothers and … sisters." },
  { fr: "Ma famille est grande / petite.", en: "My family is big / small." },
  { fr: "Il / Elle ressemble à…", en: "He / She looks like…" },
  { fr: "Je m'entends bien avec…", en: "I get along well with…" },
  { fr: "Mon / Ma … s'appelle…", en: "My … is called…" },
  { fr: "Nous sommes … dans la famille.", en: "There are … of us in the family." },
  { fr: "Il / Elle est fils / fille unique.", en: "He / She is an only child." },
  { fr: "Mes parents sont séparés / divorcés.", en: "My parents are separated / divorced." },
];

export default function FamilyPeoplePage() {
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
            Family &amp; People
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Vocabulary for talking about the people in your life — family members, friends, and how to describe them. Click <span className="font-black">🔊</span> to hear any word pronounced. The Note column shows gender and usage.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Family members</h2>
          <VocabTable rows={family} showNote />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Describing people</h2>
          <p className="mt-1 text-sm text-[#526173]">Adjectives change ending for feminine gender. IPA shows masculine / feminine forms.</p>
          <VocabTable rows={descriptions} />
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-black">Useful phrases</h2>
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
