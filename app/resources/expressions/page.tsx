import Link from "next/link";

type Expression = {
  expression: string;
  literal?: string;
  meaning: string;
  example: string;
  exampleEn: string;
  usage: "formal" | "informal" | "both";
  note?: string;
};

const writingExpressions: Expression[] = [
  {
    expression: "Force est de constater que",
    meaning: "One cannot help but notice that / it is undeniable that",
    example: "Force est de constater que les inégalités persistent malgré les efforts.",
    exampleEn: "One cannot help but notice that inequalities persist despite the efforts.",
    usage: "formal",
    note: "Powerful opener for a frank observation. Widely used in journalism and IB essays.",
  },
  {
    expression: "À bien des égards",
    meaning: "In many respects",
    example: "À bien des égards, cette réforme est indispensable.",
    exampleEn: "In many respects, this reform is essential.",
    usage: "formal",
    note: "Elegant alternative to 'de nombreuses façons'. Use it to introduce a qualified claim.",
  },
  {
    expression: "De prime abord",
    meaning: "At first glance, initially",
    example: "De prime abord, la solution paraît simple.",
    exampleEn: "At first glance, the solution seems simple.",
    usage: "formal",
    note: "Often followed by a contrast: De prime abord... cependant / néanmoins... A classic essay structure.",
  },
  {
    expression: "Il est à noter que",
    meaning: "It is worth noting that",
    example: "Il est à noter que les résultats varient considérablement selon les régions.",
    exampleEn: "It is worth noting that the results vary considerably by region.",
    usage: "formal",
    note: "Draws the reader's attention to a significant detail. Common in analytical writing.",
  },
  {
    expression: "Dans une certaine mesure",
    meaning: "To a certain extent",
    example: "Dans une certaine mesure, les deux arguments se rejoignent.",
    exampleEn: "To a certain extent, the two arguments converge.",
    usage: "formal",
    note: "Useful for nuanced concessions. Avoids absolute claims — valued in IB analysis.",
  },
  {
    expression: "Loin de",
    meaning: "Far from (doing something)",
    example: "Loin d'être un obstacle, la diversité est une richesse.",
    exampleEn: "Far from being an obstacle, diversity is a strength.",
    usage: "formal",
    note: "Creates an elegant reversal. Loin de + infinitive is a sharp rhetorical move in essays.",
  },
  {
    expression: "À cet égard",
    meaning: "In this regard, in this respect",
    example: "À cet égard, la politique canadienne sert d'exemple.",
    exampleEn: "In this regard, Canadian policy serves as an example.",
    usage: "formal",
    note: "Connects smoothly back to what was just discussed. Keeps your essay flowing.",
  },
  {
    expression: "Dans la même veine",
    meaning: "In the same vein, along the same lines",
    example: "Dans la même veine, on peut citer le cas du Québec.",
    exampleEn: "In the same vein, one can cite the case of Quebec.",
    usage: "formal",
    note: "Links a new example or point to the previous one thematically.",
  },
  {
    expression: "Sans aucun doute",
    meaning: "Without a doubt, undoubtedly",
    example: "Sans aucun doute, l'éducation reste la meilleure solution.",
    exampleEn: "Without a doubt, education remains the best solution.",
    usage: "both",
    note: "Can be used in speech and writing. Assertive — use when you're confident in the claim.",
  },
  {
    expression: "Il convient de souligner",
    meaning: "It is important to emphasize / it bears emphasizing",
    example: "Il convient de souligner l'importance du contexte historique.",
    exampleEn: "It is important to emphasize the importance of the historical context.",
    usage: "formal",
    note: "More precise than 'il est important de'. Commonly used to introduce a key argument.",
  },
];

const culturalExpressions: Expression[] = [
  {
    expression: "Avoir le cafard",
    literal: "to have the cockroach",
    meaning: "To feel down / blue",
    example: "Depuis la rentrée, il a le cafard.",
    exampleEn: "Since the school year started, he's been feeling blue.",
    usage: "informal",
    note: "The expression comes from the poet Baudelaire, who associated cockroaches with gloom and melancholy.",
  },
  {
    expression: "Appeler un chat un chat",
    literal: "to call a cat a cat",
    meaning: "To call a spade a spade / to be direct",
    example: "Appelons un chat un chat: la situation est grave.",
    exampleEn: "Let's call a spade a spade: the situation is serious.",
    usage: "both",
    note: "Works well in essays as a way of introducing a frank, unambiguous statement.",
  },
  {
    expression: "Faire d'une pierre deux coups",
    literal: "to hit two blows with one stone",
    meaning: "To kill two birds with one stone",
    example: "En révisant avec un ami, tu fais d'une pierre deux coups.",
    exampleEn: "By studying with a friend, you kill two birds with one stone.",
    usage: "both",
    note: "Can appear in both informal conversation and formal argumentation.",
  },
  {
    expression: "Coûter les yeux de la tête",
    literal: "to cost the eyes from the head",
    meaning: "To cost a fortune / to be outrageously expensive",
    example: "Ces livres scolaires coûtent les yeux de la tête.",
    exampleEn: "These textbooks cost a fortune.",
    usage: "informal",
    note: "Hyperbolic and vivid — good for spoken French and informal writing.",
  },
  {
    expression: "Avoir du pain sur la planche",
    literal: "to have bread on the board",
    meaning: "To have a lot to do / to have a lot on one's plate",
    example: "Avant les examens, on a vraiment du pain sur la planche.",
    exampleEn: "Before the exams, we really have a lot on our plate.",
    usage: "both",
    note: "Historically referred to having enough work (bread) lined up. Now used universally for a heavy workload.",
  },
  {
    expression: "Mettre les points sur les i",
    literal: "to put the dots on the i's",
    meaning: "To spell things out / to set the record straight",
    example: "Permettez-moi de mettre les points sur les i.",
    exampleEn: "Allow me to spell things out clearly.",
    usage: "both",
    note: "Works well in both speech and formal writing to signal a clear, definitive statement.",
  },
  {
    expression: "Revenons à nos moutons",
    literal: "let us return to our sheep",
    meaning: "Let's get back on topic / back to the point",
    example: "Mais revenons à nos moutons — la question centrale est...",
    exampleEn: "But let's get back on topic — the central question is...",
    usage: "both",
    note: "From the medieval farce 'La Farce de Maître Pathelin' (15th century). One of the oldest French idioms still in daily use.",
  },
  {
    expression: "Il pleut des cordes",
    literal: "it is raining ropes",
    meaning: "It's raining cats and dogs",
    example: "Prends un parapluie — il pleut des cordes dehors.",
    exampleEn: "Take an umbrella — it's raining cats and dogs outside.",
    usage: "informal",
    note: "A classic everyday expression. Very natural in speech.",
  },
  {
    expression: "Avoir d'autres chats à fouetter",
    literal: "to have other cats to whip",
    meaning: "To have bigger fish to fry / to have more important things to do",
    example: "Je n'ai pas le temps pour ça — j'ai d'autres chats à fouetter.",
    exampleEn: "I don't have time for this — I have bigger fish to fry.",
    usage: "informal",
    note: "Slightly old-fashioned but very widely understood. Common in conversation.",
  },
  {
    expression: "Avoir le beurre et l'argent du beurre",
    literal: "to have the butter and the money from the butter",
    meaning: "To have your cake and eat it too",
    example: "On ne peut pas avoir le beurre et l'argent du beurre.",
    exampleEn: "You can't have your cake and eat it too.",
    usage: "both",
    note: "Useful in arguments about trade-offs. Can appear in essays to dismiss unrealistic expectations.",
  },
  {
    expression: "Noyer le poisson",
    literal: "to drown the fish",
    meaning: "To muddy the waters / to dodge the issue",
    example: "Le ministre essaie de noyer le poisson avec des chiffres.",
    exampleEn: "The minister is trying to muddy the waters with statistics.",
    usage: "both",
    note: "Used to accuse someone of deliberately obscuring an issue. Works in informal and journalistic writing.",
  },
  {
    expression: "Se noyer dans un verre d'eau",
    literal: "to drown in a glass of water",
    meaning: "To make a mountain out of a molehill",
    example: "Tu te noies dans un verre d'eau — ce n'est pas si grave.",
    exampleEn: "You're making a mountain out of a molehill — it's not that serious.",
    usage: "informal",
    note: "Vivid and expressive. Used to tell someone they're overcomplicating something minor.",
  },
  {
    expression: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué",
    literal: "don't sell the bear's skin before you've killed it",
    meaning: "Don't count your chickens before they hatch",
    example: "On a encore deux matchs à jouer — ne vendons pas la peau de l'ours.",
    exampleEn: "We still have two matches left — let's not count our chickens.",
    usage: "both",
    note: "One of the most famous French proverbs. Can be shortened to 'ne vendons pas la peau de l'ours' in context.",
  },
  {
    expression: "Poser un lapin à quelqu'un",
    literal: "to place a rabbit on someone",
    meaning: "To stand someone up",
    example: "Elle m'a posé un lapin hier soir.",
    exampleEn: "She stood me up last night.",
    usage: "informal",
    note: "Comes from 19th-century slang. Extremely common in everyday French speech.",
  },
];

const usageColors = {
  formal: "bg-[#EDE9FE] text-[#7C3AED]",
  informal: "bg-[#FEF3C7] text-[#D97706]",
  both: "bg-[#F0FDF4] text-[#16A34A]",
};

const usageLabels = {
  formal: "Writing",
  informal: "Spoken",
  both: "Both",
};

export default function ExpressionsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]">
            Expressions & Style
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Idiomatic expressions
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            French expressions that are genuinely used — in conversation, in essays, and in culture. Each entry includes the literal meaning, a real example sentence, and a usage note.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {Object.entries(usageColors).map(([key, color]) => (
            <span key={key} className={`rounded-full px-3 py-1 text-xs font-black ${color}`}>
              {usageLabels[key as keyof typeof usageLabels]}
            </span>
          ))}
          <span className="text-sm text-[#526173] self-center">— register label</span>
        </div>

        {/* Writing expressions */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Expressions for writing & formal French</h2>
          <p className="mt-2 text-[#526173]">
            These expressions elevate formal writing — essays, compositions, and IB text types. They signal precision, nuance, and command of the language.
          </p>

          <div className="mt-6 space-y-4">
            {writingExpressions.map((expr) => (
              <div key={expr.expression} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-black text-[#0B1F3A]">{expr.expression}</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#2563EB]">{expr.meaning}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-black ${usageColors[expr.usage]}`}>
                    {usageLabels[expr.usage]}
                  </span>
                </div>
                <div className="mt-4 rounded-xl bg-[#FFFDF7] p-4 text-sm">
                  <p className="font-semibold">{expr.example}</p>
                  <p className="mt-1 text-[#526173]">{expr.exampleEn}</p>
                </div>
                {expr.note && (
                  <p className="mt-3 text-xs leading-5 text-[#526173]">
                    <span className="font-black text-[#0B1F3A]">Note: </span>{expr.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cultural expressions */}
        <div className="mt-16">
          <h2 className="text-2xl font-black">Everyday French expressions</h2>
          <p className="mt-2 text-[#526173]">
            Idioms that are genuinely part of French culture — heard in conversation, on television, and in informal writing. Many have rich historical or literary origins.
          </p>

          <div className="mt-6 space-y-4">
            {culturalExpressions.map((expr) => (
              <div key={expr.expression} className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-lg font-black text-[#0B1F3A]">{expr.expression}</p>
                    {expr.literal && (
                      <p className="mt-0.5 text-xs italic text-[#526173]">Literally: {expr.literal}</p>
                    )}
                    <p className="mt-1 text-sm font-semibold text-[#2563EB]">{expr.meaning}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-black ${usageColors[expr.usage]}`}>
                    {usageLabels[expr.usage]}
                  </span>
                </div>
                <div className="mt-4 rounded-xl bg-[#FFFDF7] p-4 text-sm">
                  <p className="font-semibold">{expr.example}</p>
                  <p className="mt-1 text-[#526173]">{expr.exampleEn}</p>
                </div>
                {expr.note && (
                  <p className="mt-3 text-xs leading-5 text-[#526173]">
                    <span className="font-black text-[#0B1F3A]">Note: </span>{expr.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Looking for connectors?</p>
          <p className="mt-2 text-sm leading-6 text-[#526173]">
            If you need words like en outre, par ailleurs, néanmoins, or de surcroît to link your ideas, check the connecting words reference.
          </p>
          <Link
            href="/resources/connecting-words"
            className="mt-4 inline-block rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#1D4ED8]"
          >
            See connecting words →
          </Link>
        </div>
      </section>
    </main>
  );
}
