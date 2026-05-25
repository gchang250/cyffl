import Link from "next/link";

const erEndings: [string, string, string][] = [
  ["je", "-e", "je parle"],
  ["tu", "-es", "tu parles"],
  ["il / elle / on", "-e", "il parle"],
  ["nous", "-ons", "nous parlons"],
  ["vous", "-ez", "vous parlez"],
  ["ils / elles", "-ent", "ils parlent"],
];

const irEndings: [string, string, string][] = [
  ["je", "-is", "je finis"],
  ["tu", "-is", "tu finis"],
  ["il / elle / on", "-it", "il finit"],
  ["nous", "-issons", "nous finissons"],
  ["vous", "-issez", "vous finissez"],
  ["ils / elles", "-issent", "ils finissent"],
];

const reEndings: [string, string, string][] = [
  ["je", "-s", "je vends"],
  ["tu", "-s", "tu vends"],
  ["il / elle / on", "—", "il vend"],
  ["nous", "-ons", "nous vendons"],
  ["vous", "-ez", "vous vendez"],
  ["ils / elles", "-ent", "ils vendent"],
];

type IrregularVerb = {
  infinitive: string;
  english: string;
  forms: [string, string][];
};

const irregulars: IrregularVerb[] = [
  {
    infinitive: "être",
    english: "to be",
    forms: [
      ["je", "suis"],
      ["tu", "es"],
      ["il / elle", "est"],
      ["nous", "sommes"],
      ["vous", "êtes"],
      ["ils / elles", "sont"],
    ],
  },
  {
    infinitive: "avoir",
    english: "to have",
    forms: [
      ["je", "ai"],
      ["tu", "as"],
      ["il / elle", "a"],
      ["nous", "avons"],
      ["vous", "avez"],
      ["ils / elles", "ont"],
    ],
  },
  {
    infinitive: "aller",
    english: "to go",
    forms: [
      ["je", "vais"],
      ["tu", "vas"],
      ["il / elle", "va"],
      ["nous", "allons"],
      ["vous", "allez"],
      ["ils / elles", "vont"],
    ],
  },
  {
    infinitive: "faire",
    english: "to do / make",
    forms: [
      ["je", "fais"],
      ["tu", "fais"],
      ["il / elle", "fait"],
      ["nous", "faisons"],
      ["vous", "faites"],
      ["ils / elles", "font"],
    ],
  },
  {
    infinitive: "prendre",
    english: "to take",
    forms: [
      ["je", "prends"],
      ["tu", "prends"],
      ["il / elle", "prend"],
      ["nous", "prenons"],
      ["vous", "prenez"],
      ["ils / elles", "prennent"],
    ],
  },
  {
    infinitive: "vouloir",
    english: "to want",
    forms: [
      ["je", "veux"],
      ["tu", "veux"],
      ["il / elle", "veut"],
      ["nous", "voulons"],
      ["vous", "voulez"],
      ["ils / elles", "veulent"],
    ],
  },
  {
    infinitive: "pouvoir",
    english: "to be able to / can",
    forms: [
      ["je", "peux"],
      ["tu", "peux"],
      ["il / elle", "peut"],
      ["nous", "pouvons"],
      ["vous", "pouvez"],
      ["ils / elles", "peuvent"],
    ],
  },
  {
    infinitive: "devoir",
    english: "to have to / must",
    forms: [
      ["je", "dois"],
      ["tu", "dois"],
      ["il / elle", "doit"],
      ["nous", "devons"],
      ["vous", "devez"],
      ["ils / elles", "doivent"],
    ],
  },
  {
    infinitive: "savoir",
    english: "to know (a fact)",
    forms: [
      ["je", "sais"],
      ["tu", "sais"],
      ["il / elle", "sait"],
      ["nous", "savons"],
      ["vous", "savez"],
      ["ils / elles", "savent"],
    ],
  },
  {
    infinitive: "venir",
    english: "to come",
    forms: [
      ["je", "viens"],
      ["tu", "viens"],
      ["il / elle", "vient"],
      ["nous", "venons"],
      ["vous", "venez"],
      ["ils / elles", "viennent"],
    ],
  },
];

function ConjugationTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#E7DAB9]">
            <th className="pb-3 text-left font-black">Pronoun</th>
            <th className="pb-3 text-left font-black text-[#7C3AED]">Ending</th>
            <th className="pb-3 text-left text-[#526173]">Example</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#F3EDD8]">
          {rows.map(([pronoun, ending, example]) => (
            <tr key={pronoun}>
              <td className="py-3 font-black">{pronoun}</td>
              <td className="py-3 font-black text-[#7C3AED]">{ending}</td>
              <td className="py-3 text-[#526173]">{example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function VerbsPresentPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
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
            The present tense is the foundation of French. It expresses current actions, habits, and general truths. Master the regular patterns first, then tackle the most common irregular verbs.
          </p>
        </div>

        {/* Regular -er */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Regular</span>
            <h2 className="text-xl font-black">-er verbs · parler (to speak)</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">Remove -er from the infinitive to get the stem: parl-. Then add the endings below. This pattern covers about 90% of French verbs.</p>
          <ConjugationTable rows={erEndings} />
        </div>

        {/* Regular -ir */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Regular</span>
            <h2 className="text-xl font-black">-ir verbs · finir (to finish)</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">Remove -ir from the infinitive to get the stem: fin-. Note the -iss- inserted in the plural forms.</p>
          <ConjugationTable rows={irEndings} />
        </div>

        {/* Regular -re */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#EDE9FE] px-3 py-1 text-sm font-black text-[#7C3AED]">Regular</span>
            <h2 className="text-xl font-black">-re verbs · vendre (to sell)</h2>
          </div>
          <p className="mt-3 text-sm text-[#526173]">Remove -re from the infinitive to get the stem: vend-. The il/elle form has no ending — the stem alone is used.</p>
          <ConjugationTable rows={reEndings} />
        </div>

        <div className="mt-8 rounded-2xl bg-[#0B1F3A] p-5 text-white">
          <p className="font-black text-[#C9A44C]">When to use le présent</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Current actions</p>
              <p className="mt-1 text-white/70">Je mange une pomme. — I am eating an apple.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Habits &amp; routines</p>
              <p className="mt-1 text-white/70">Je me lève à sept heures. — I get up at seven.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">General truths</p>
              <p className="mt-1 text-white/70">L'eau bout à 100°C. — Water boils at 100°C.</p>
            </div>
          </div>
        </div>

        {/* Irregular verbs */}
        <div className="mt-12">
          <h2 className="text-xl font-black">Common irregular verbs</h2>
          <p className="mt-3 text-sm text-[#526173]">These verbs do not follow the regular patterns. They are among the most frequently used words in French — learn them by heart.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {irregulars.map((verb) => (
              <div key={verb.infinitive} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-lg text-[#7C3AED]">{verb.infinitive}</span>
                  <span className="text-sm text-[#526173]">{verb.english}</span>
                </div>
                <table className="mt-3 w-full text-sm">
                  <tbody className="divide-y divide-[#F3EDD8]">
                    {verb.forms.map(([pronoun, form]) => (
                      <tr key={pronoun}>
                        <td className="py-2 text-[#526173] w-1/2">{pronoun}</td>
                        <td className="py-2 font-black text-[#0B1F3A]">{form}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
