import Link from "next/link";
import VerbConjugator, { type Mood } from "@/components/VerbConjugator";

// parler — the model -er verb
const parlerMoods: Mood[] = [
  {
    name: "Indicatif",
    bg: "bg-[#EFF6FF]",
    activeBg: "bg-[#EFF6FF]",
    text: "text-[#2563EB]",
    activeText: "text-[#2563EB]",
    borderColor: "border-[#BFDBFE]",
    tenses: [
      {
        name: "Le présent",
        example: "Je parle français.",
        englishExample: "I speak / am speaking French.",
        forms: [
          { pronoun: "je", form: "parle" },
          { pronoun: "tu", form: "parles" },
          { pronoun: "il / elle / on", form: "parle" },
          { pronoun: "nous", form: "parlons" },
          { pronoun: "vous", form: "parlez" },
          { pronoun: "ils / elles", form: "parlent" },
        ],
      },
      {
        name: "L'imparfait",
        example: "Je parlais souvent.",
        englishExample: "I used to speak often.",
        forms: [
          { pronoun: "je", form: "parlais" },
          { pronoun: "tu", form: "parlais" },
          { pronoun: "il / elle / on", form: "parlait" },
          { pronoun: "nous", form: "parlions" },
          { pronoun: "vous", form: "parliez" },
          { pronoun: "ils / elles", form: "parlaient" },
        ],
      },
      {
        name: "Le passé composé",
        example: "J'ai parlé avec lui.",
        englishExample: "I spoke / have spoken with him.",
        forms: [
          { pronoun: "j'", form: "ai parlé" },
          { pronoun: "tu", form: "as parlé" },
          { pronoun: "il / elle / on", form: "a parlé" },
          { pronoun: "nous", form: "avons parlé" },
          { pronoun: "vous", form: "avez parlé" },
          { pronoun: "ils / elles", form: "ont parlé" },
        ],
      },
      {
        name: "Le futur simple",
        example: "Je parlerai demain.",
        englishExample: "I will speak tomorrow.",
        forms: [
          { pronoun: "je", form: "parlerai" },
          { pronoun: "tu", form: "parleras" },
          { pronoun: "il / elle / on", form: "parlera" },
          { pronoun: "nous", form: "parlerons" },
          { pronoun: "vous", form: "parlerez" },
          { pronoun: "ils / elles", form: "parleront" },
        ],
      },
      {
        name: "Le plus-que-parfait",
        example: "J'avais parlé avant.",
        englishExample: "I had spoken before.",
        forms: [
          { pronoun: "j'", form: "avais parlé" },
          { pronoun: "tu", form: "avais parlé" },
          { pronoun: "il / elle / on", form: "avait parlé" },
          { pronoun: "nous", form: "avions parlé" },
          { pronoun: "vous", form: "aviez parlé" },
          { pronoun: "ils / elles", form: "avaient parlé" },
        ],
      },
      {
        name: "Le futur antérieur",
        example: "J'aurai parlé avant midi.",
        englishExample: "I will have spoken before noon.",
        forms: [
          { pronoun: "j'", form: "aurai parlé" },
          { pronoun: "tu", form: "auras parlé" },
          { pronoun: "il / elle / on", form: "aura parlé" },
          { pronoun: "nous", form: "aurons parlé" },
          { pronoun: "vous", form: "aurez parlé" },
          { pronoun: "ils / elles", form: "auront parlé" },
        ],
      },
    ],
  },
  {
    name: "Subjonctif",
    bg: "bg-[#F5F3FF]",
    activeBg: "bg-[#F5F3FF]",
    text: "text-[#7C3AED]",
    activeText: "text-[#7C3AED]",
    borderColor: "border-[#DDD6FE]",
    tenses: [
      {
        name: "Le subjonctif présent",
        example: "Il faut que je parle.",
        englishExample: "I must speak.",
        forms: [
          { pronoun: "que je", form: "parle" },
          { pronoun: "que tu", form: "parles" },
          { pronoun: "qu'il / elle", form: "parle" },
          { pronoun: "que nous", form: "parlions" },
          { pronoun: "que vous", form: "parliez" },
          { pronoun: "qu'ils / elles", form: "parlent" },
        ],
      },
      {
        name: "Le subjonctif passé",
        example: "Je suis content qu'il ait parlé.",
        englishExample: "I'm glad he spoke.",
        forms: [
          { pronoun: "que j'", form: "aie parlé" },
          { pronoun: "que tu", form: "aies parlé" },
          { pronoun: "qu'il / elle", form: "ait parlé" },
          { pronoun: "que nous", form: "ayons parlé" },
          { pronoun: "que vous", form: "ayez parlé" },
          { pronoun: "qu'ils / elles", form: "aient parlé" },
        ],
      },
    ],
  },
  {
    name: "Conditionnel",
    bg: "bg-[#FEF3C7]",
    activeBg: "bg-[#FEF3C7]",
    text: "text-[#D97706]",
    activeText: "text-[#D97706]",
    borderColor: "border-[#FDE68A]",
    tenses: [
      {
        name: "Le conditionnel présent",
        example: "Je parlerais si je pouvais.",
        englishExample: "I would speak if I could.",
        forms: [
          { pronoun: "je", form: "parlerais" },
          { pronoun: "tu", form: "parlerais" },
          { pronoun: "il / elle / on", form: "parlerait" },
          { pronoun: "nous", form: "parlerions" },
          { pronoun: "vous", form: "parleriez" },
          { pronoun: "ils / elles", form: "parleraient" },
        ],
      },
      {
        name: "Le conditionnel passé",
        example: "J'aurais parlé si j'avais su.",
        englishExample: "I would have spoken if I had known.",
        forms: [
          { pronoun: "j'", form: "aurais parlé" },
          { pronoun: "tu", form: "aurais parlé" },
          { pronoun: "il / elle / on", form: "aurait parlé" },
          { pronoun: "nous", form: "aurions parlé" },
          { pronoun: "vous", form: "auriez parlé" },
          { pronoun: "ils / elles", form: "auraient parlé" },
        ],
      },
    ],
  },
  {
    name: "Impératif",
    bg: "bg-[#F0FDF4]",
    activeBg: "bg-[#F0FDF4]",
    text: "text-[#16A34A]",
    activeText: "text-[#16A34A]",
    borderColor: "border-[#BBF7D0]",
    tenses: [
      {
        name: "L'impératif présent",
        example: "Parle plus fort !",
        englishExample: "Speak louder!",
        forms: [
          { pronoun: "tu", form: "parle" },
          { pronoun: "nous", form: "parlons" },
          { pronoun: "vous", form: "parlez" },
        ],
      },
    ],
  },
];

// Key irregular verbs — présent only (full paradigm)
type IrregularVerb = {
  infinitive: string;
  ipa: string;
  english: string;
  forms: [string, string][];
  note?: string;
};

const irregulars: IrregularVerb[] = [
  {
    infinitive: "être",
    ipa: "[ɛtʁ]",
    english: "to be",
    forms: [["je", "suis"], ["tu", "es"], ["il / elle", "est"], ["nous", "sommes"], ["vous", "êtes"], ["ils / elles", "sont"]],
    note: "Être is used as the auxiliary for reflexive verbs and a group of motion/state verbs in compound tenses.",
  },
  {
    infinitive: "avoir",
    ipa: "[avwaʁ]",
    english: "to have",
    forms: [["j'", "ai"], ["tu", "as"], ["il / elle", "a"], ["nous", "avons"], ["vous", "avez"], ["ils / elles", "ont"]],
    note: "Avoir is the auxiliary for most verbs in compound tenses. Also used in many idioms: avoir faim (to be hungry), avoir raison (to be right).",
  },
  {
    infinitive: "aller",
    ipa: "[ale]",
    english: "to go",
    forms: [["je", "vais"], ["tu", "vas"], ["il / elle", "va"], ["nous", "allons"], ["vous", "allez"], ["ils / elles", "vont"]],
    note: "Also used to form the near future: je vais + infinitive = I'm going to…",
  },
  {
    infinitive: "faire",
    ipa: "[fɛʁ]",
    english: "to do / to make",
    forms: [["je", "fais"], ["tu", "fais"], ["il / elle", "fait"], ["nous", "faisons"], ["vous", "faites"], ["ils / elles", "font"]],
    note: "Note the irregular vous form: faites (not *faisez). Faire is used in weather expressions: il fait beau, il fait froid.",
  },
  {
    infinitive: "prendre",
    ipa: "[pʁɑ̃dʁ]",
    english: "to take",
    forms: [["je", "prends"], ["tu", "prends"], ["il / elle", "prend"], ["nous", "prenons"], ["vous", "prenez"], ["ils / elles", "prennent"]],
    note: "Note the double n in the third-person plural: prennent. Same pattern for apprendre (to learn) and comprendre (to understand).",
  },
  {
    infinitive: "vouloir",
    ipa: "[vulwaʁ]",
    english: "to want",
    forms: [["je", "veux"], ["tu", "veux"], ["il / elle", "veut"], ["nous", "voulons"], ["vous", "voulez"], ["ils / elles", "veulent"]],
    note: "Vouloir + infinitive = to want to. Polite form: je voudrais (conditional) rather than je veux in formal contexts.",
  },
  {
    infinitive: "pouvoir",
    ipa: "[puvwaʁ]",
    english: "to be able to / can",
    forms: [["je", "peux"], ["tu", "peux"], ["il / elle", "peut"], ["nous", "pouvons"], ["vous", "pouvez"], ["ils / elles", "peuvent"]],
    note: "Can also be used as je puis (literary/formal, especially in questions: puis-je ?). Pouvoir + infinitive = can / to be able to.",
  },
  {
    infinitive: "devoir",
    ipa: "[dəvwaʁ]",
    english: "to have to / must",
    forms: [["je", "dois"], ["tu", "dois"], ["il / elle", "doit"], ["nous", "devons"], ["vous", "devez"], ["ils / elles", "doivent"]],
    note: "Devoir + infinitive = must / have to. In the conditional (devrait), it softens to 'should': tu devrais partir.",
  },
  {
    infinitive: "savoir",
    ipa: "[savwaʁ]",
    english: "to know (a fact / how to)",
    forms: [["je", "sais"], ["tu", "sais"], ["il / elle", "sait"], ["nous", "savons"], ["vous", "savez"], ["ils / elles", "savent"]],
    note: "Savoir = to know a fact or how to do something (je sais nager). Contrast with connaître = to know a person/place.",
  },
  {
    infinitive: "venir",
    ipa: "[vəniʁ]",
    english: "to come",
    forms: [["je", "viens"], ["tu", "viens"], ["il / elle", "vient"], ["nous", "venons"], ["vous", "venez"], ["ils / elles", "viennent"]],
    note: "Venir de + infinitive = to have just done: je viens de manger = I just ate. Same pattern for tenir (to hold) and revenir (to come back).",
  },
];

export default function VerbsPresentPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]">
            Verbs
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Le présent
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The present tense is the foundation of French. It expresses current actions, habits, and general truths. The conjugator below shows <strong>parler</strong> across all moods and tenses so you can see how each is formed from the same verb.
          </p>
        </div>

        {/* Regular patterns */}
        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Regular present-tense endings</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-3 text-left text-white/50">Pronoun</th>
                  <th className="pb-3 text-left font-black text-[#C9A44C]">-er (parl-)</th>
                  <th className="pb-3 text-left font-black text-[#C9A44C]">-ir (fin-)</th>
                  <th className="pb-3 text-left font-black text-[#C9A44C]">-re (vend-)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  ["je / j'", "parle", "finis", "vends"],
                  ["tu", "parles", "finis", "vends"],
                  ["il / elle / on", "parle", "finit", "vend"],
                  ["nous", "parlons", "finissons", "vendons"],
                  ["vous", "parlez", "finissez", "vendez"],
                  ["ils / elles", "parlent", "finissent", "vendent"],
                ].map(([pro, er, ir, re]) => (
                  <tr key={pro}>
                    <td className="py-2.5 text-white/50">{pro}</td>
                    <td className="py-2.5 font-black text-white">{er}</td>
                    <td className="py-2.5 font-black text-white">{ir}</td>
                    <td className="py-2.5 font-black text-white">{re}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Current actions</p>
              <p className="mt-1 text-white/70">Je mange une pomme. — I&apos;m eating an apple.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Habits &amp; routines</p>
              <p className="mt-1 text-white/70">Je me lève à sept heures. — I get up at seven.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">General truths</p>
              <p className="mt-1 text-white/70">L&apos;eau bout à 100°C. — Water boils at 100°C.</p>
            </div>
          </div>
        </div>

        {/* Full conjugator */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Full conjugation — parler</h2>
          <p className="mt-1 text-[#526173]">Use the tabs to switch between moods. All tenses are shown for the model -er verb.</p>
          <div className="mt-5">
            <VerbConjugator
              verb="parler"
              ipa="[paʁle]"
              english="to speak"
              moods={parlerMoods}
            />
          </div>
        </div>

        {/* Irregular verbs */}
        <div className="mt-16">
          <h2 className="text-2xl font-black">Common irregular verbs — présent</h2>
          <p className="mt-2 text-[#526173]">These verbs do not follow the regular patterns. They are among the most frequently used words in French — learn them by heart. IPA transcriptions are provided for pronunciation reference.</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {irregulars.map((verb) => (
              <div key={verb.infinitive} className="rounded-2xl border border-[#E7DAB9] bg-white overflow-hidden shadow-sm">
                <div className="bg-[#EDE9FE] px-5 py-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl font-black text-[#7C3AED]">{verb.infinitive}</span>
                    <span className="font-mono text-sm text-[#7C3AED]/60">{verb.ipa}</span>
                    <span className="text-sm text-[#526173] ml-auto">{verb.english}</span>
                  </div>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-[#F3EDD8]">
                    {verb.forms.map(([pronoun, form]) => (
                      <tr key={pronoun} className="group">
                        <td className="py-2 pl-5 text-[#526173] w-1/2 group-hover:text-[#0B1F3A] transition-colors">{pronoun}</td>
                        <td className="py-2 pr-5 font-black text-[#7C3AED]">{form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {verb.note && (
                  <p className="px-5 py-3 text-xs text-[#526173] border-t border-[#E7DAB9] bg-[#FFFDF7]">{verb.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/resources/verbs-imparfait" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">L'imparfait →</Link>
          <Link href="/resources/verbs-passe-compose" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le passé composé →</Link>
          <Link href="/resources/verbs-futur-simple" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le futur simple →</Link>
          <Link href="/resources/verbs-subjonctif" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">Le subjonctif →</Link>
        </div>
      </section>
    </main>
  );
}
