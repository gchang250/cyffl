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

type Proverb = {
  proverb: string;
  meaning: string;
  equivalent?: string;
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
    example: "De prime abord, la solution paraît simple. Cependant...",
    exampleEn: "At first glance, the solution seems simple. However...",
    usage: "formal",
    note: "Often followed by a contrast. A classic two-part essay move: de prime abord... néanmoins...",
  },
  {
    expression: "Il est à noter que",
    meaning: "It is worth noting that",
    example: "Il est à noter que les résultats varient considérablement selon les régions.",
    exampleEn: "It is worth noting that results vary considerably by region.",
    usage: "formal",
    note: "Draws the reader's attention to a key detail. Common in analytical and scientific writing.",
  },
  {
    expression: "Dans une certaine mesure",
    meaning: "To a certain extent",
    example: "Dans une certaine mesure, les deux arguments se rejoignent.",
    exampleEn: "To a certain extent, the two arguments converge.",
    usage: "formal",
    note: "Avoids absolute claims — valued in IB analysis and any nuanced argumentation.",
  },
  {
    expression: "Loin de",
    meaning: "Far from (doing something)",
    example: "Loin d'être un obstacle, la diversité est une richesse.",
    exampleEn: "Far from being an obstacle, diversity is a strength.",
    usage: "formal",
    note: "Creates an elegant reversal. Loin de + infinitive is a sharp rhetorical device in essays.",
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
    expression: "Il va sans dire que",
    meaning: "It goes without saying that",
    example: "Il va sans dire que la santé est une priorité absolue.",
    exampleEn: "It goes without saying that health is an absolute priority.",
    usage: "formal",
    note: "Paradoxically useful — you say it precisely because it needs to be said for emphasis.",
  },
  {
    expression: "Quoi qu'il en soit",
    meaning: "Be that as it may / regardless",
    example: "Quoi qu'il en soit, une décision doit être prise.",
    exampleEn: "Be that as it may, a decision must be made.",
    usage: "formal",
    note: "Acknowledges complexity and then moves forward. Excellent in essay conclusions.",
  },
  {
    expression: "À plus forte raison",
    meaning: "All the more so / a fortiori",
    example: "Si c'est difficile pour les adultes, à plus forte raison pour les enfants.",
    exampleEn: "If it's difficult for adults, all the more so for children.",
    usage: "formal",
    note: "Extends an argument by applying it to a more extreme case. Sophisticated logical move.",
  },
  {
    expression: "Dans les grandes lignes",
    meaning: "Broadly speaking, in broad strokes",
    example: "Dans les grandes lignes, le projet est solide.",
    exampleEn: "Broadly speaking, the project is solid.",
    usage: "both",
    note: "Signals you're giving a general overview. Good for introductions.",
  },
  {
    expression: "En filigrane",
    meaning: "Underlying, running through (like a watermark)",
    example: "En filigrane de ce roman, on perçoit une critique sociale.",
    exampleEn: "Running through this novel is an underlying social critique.",
    usage: "formal",
    note: "From the word for watermark. Used to describe themes or ideas present beneath the surface of a text.",
  },
  {
    expression: "Il convient de souligner",
    meaning: "It is important to emphasize",
    example: "Il convient de souligner l'importance du contexte historique.",
    exampleEn: "It is important to emphasize the importance of the historical context.",
    usage: "formal",
    note: "More precise than 'il est important de'. Commonly used to foreground a key argument.",
  },
  {
    expression: "Sans aucun doute",
    meaning: "Without a doubt, undoubtedly",
    example: "Sans aucun doute, l'éducation reste la meilleure solution.",
    exampleEn: "Without a doubt, education remains the best solution.",
    usage: "both",
    note: "Assertive — use when you're confident in the claim you're making.",
  },
  {
    expression: "Dans la même veine",
    meaning: "In the same vein, along the same lines",
    example: "Dans la même veine, on peut citer le cas du Québec.",
    exampleEn: "In the same vein, one can cite the case of Quebec.",
    usage: "formal",
    note: "Links a new example or argument to the previous one thematically.",
  },
  {
    expression: "Pour autant",
    meaning: "Yet, even so, that said",
    example: "La situation est grave. Pour autant, il ne faut pas céder à la panique.",
    exampleEn: "The situation is serious. Even so, we must not give in to panic.",
    usage: "formal",
    note: "A nuanced concessive — acknowledges difficulty without abandoning the main argument.",
  },
  {
    expression: "En d'autres termes",
    meaning: "In other words",
    example: "En d'autres termes, il faut repenser entièrement notre approche.",
    exampleEn: "In other words, we need to rethink our approach entirely.",
    usage: "both",
    note: "Used to clarify or restate an idea more simply. Works in writing and formal speech.",
  },
  {
    expression: "À l'heure actuelle",
    meaning: "At the present time, nowadays, currently",
    example: "À l'heure actuelle, le numérique transforme tous les secteurs.",
    exampleEn: "At the present time, technology is transforming every sector.",
    usage: "both",
    note: "Sets a contemporary frame. More precise than 'maintenant' in formal contexts.",
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
    note: "The expression comes from the poet Baudelaire, who associated cockroaches with gloom and melancholy in his Spleen poems.",
  },
  {
    expression: "Appeler un chat un chat",
    literal: "to call a cat a cat",
    meaning: "To call a spade a spade / to be direct",
    example: "Appelons un chat un chat: la situation est grave.",
    exampleEn: "Let's call a spade a spade: the situation is serious.",
    usage: "both",
    note: "Works well in essays to signal you're about to make a frank, unambiguous statement.",
  },
  {
    expression: "Faire d'une pierre deux coups",
    literal: "to hit two blows with one stone",
    meaning: "To kill two birds with one stone",
    example: "En révisant avec un ami, tu fais d'une pierre deux coups.",
    exampleEn: "By studying with a friend, you kill two birds with one stone.",
    usage: "both",
  },
  {
    expression: "Avoir du pain sur la planche",
    literal: "to have bread on the board",
    meaning: "To have a lot to do / a lot on one's plate",
    example: "Avant les examens, on a vraiment du pain sur la planche.",
    exampleEn: "Before the exams, we really have a lot on our plate.",
    usage: "both",
    note: "Historically referred to having enough work lined up. Now universal for a heavy workload.",
  },
  {
    expression: "Revenons à nos moutons",
    literal: "let us return to our sheep",
    meaning: "Let's get back on topic / back to the point",
    example: "Mais revenons à nos moutons — la question centrale est la suivante...",
    exampleEn: "But let's get back on topic — the central question is the following...",
    usage: "both",
    note: "From the 15th-century medieval farce 'La Farce de Maître Pathelin'. One of the oldest French idioms still in everyday use.",
  },
  {
    expression: "Avoir le vent en poupe",
    literal: "to have the wind at the stern",
    meaning: "To be on a roll / to have the wind in your sails",
    example: "Ce jeune auteur a le vent en poupe depuis son premier roman.",
    exampleEn: "This young author has been on a roll since his first novel.",
    usage: "both",
    note: "Nautical origin — the stern (poupe) is the back of a ship. Wind from behind = favourable conditions.",
  },
  {
    expression: "Ne pas y aller par quatre chemins",
    literal: "not to go there by four paths",
    meaning: "To not beat around the bush / to be straight to the point",
    example: "Elle n'y est pas allée par quatre chemins: elle a dit la vérité.",
    exampleEn: "She didn't beat around the bush: she told the truth.",
    usage: "both",
  },
  {
    expression: "Mettre les bouchées doubles",
    literal: "to double the mouthfuls",
    meaning: "To work twice as hard / to step up the pace",
    example: "Il va falloir mettre les bouchées doubles pour finir à temps.",
    exampleEn: "We're going to have to work twice as hard to finish on time.",
    usage: "both",
  },
  {
    expression: "Avoir la tête dans les nuages",
    literal: "to have one's head in the clouds",
    meaning: "To be a daydreamer / to be distracted",
    example: "Tu as la tête dans les nuages — concentre-toi!",
    exampleEn: "You've got your head in the clouds — focus!",
    usage: "informal",
  },
  {
    expression: "Tenir le coup",
    meaning: "To hold on / to hang in there / to cope",
    example: "C'est difficile, mais tu vas tenir le coup.",
    exampleEn: "It's hard, but you'll hang in there.",
    usage: "informal",
    note: "Commonly used to encourage someone going through a hard time.",
  },
  {
    expression: "Coûter les yeux de la tête",
    literal: "to cost the eyes from the head",
    meaning: "To cost a fortune / to be outrageously expensive",
    example: "Ces livres scolaires coûtent les yeux de la tête.",
    exampleEn: "These textbooks cost a fortune.",
    usage: "informal",
  },
  {
    expression: "Poser un lapin à quelqu'un",
    literal: "to place a rabbit on someone",
    meaning: "To stand someone up",
    example: "Elle m'a posé un lapin hier soir.",
    exampleEn: "She stood me up last night.",
    usage: "informal",
    note: "Comes from 19th-century slang. Extremely common in everyday speech.",
  },
  {
    expression: "Noyer le poisson",
    literal: "to drown the fish",
    meaning: "To muddy the waters / to dodge the issue",
    example: "Le ministre essaie de noyer le poisson avec des statistiques.",
    exampleEn: "The minister is trying to muddy the waters with statistics.",
    usage: "both",
    note: "Used to accuse someone of deliberately obscuring an issue. Works in informal speech and journalistic writing.",
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
    expression: "Mettre les points sur les i",
    literal: "to put the dots on the i's",
    meaning: "To spell things out / to set the record straight",
    example: "Permettez-moi de mettre les points sur les i.",
    exampleEn: "Allow me to spell things out clearly.",
    usage: "both",
  },
  {
    expression: "Se noyer dans un verre d'eau",
    literal: "to drown in a glass of water",
    meaning: "To make a mountain out of a molehill",
    example: "Tu te noies dans un verre d'eau — ce n'est pas si grave.",
    exampleEn: "You're making a mountain out of a molehill — it's not that serious.",
    usage: "informal",
  },
  {
    expression: "Il pleut des cordes",
    literal: "it is raining ropes",
    meaning: "It's raining cats and dogs",
    example: "Prends un parapluie — il pleut des cordes dehors.",
    exampleEn: "Take an umbrella — it's raining cats and dogs outside.",
    usage: "informal",
  },
  {
    expression: "Avoir d'autres chats à fouetter",
    literal: "to have other cats to whip",
    meaning: "To have bigger fish to fry",
    example: "Je n'ai pas le temps pour ça — j'ai d'autres chats à fouetter.",
    exampleEn: "I don't have time for this — I have bigger fish to fry.",
    usage: "informal",
  },
  {
    expression: "Passer l'éponge",
    literal: "to pass the sponge",
    meaning: "To let it go / to wipe the slate clean",
    example: "On s'est disputés, mais on a décidé de passer l'éponge.",
    exampleEn: "We argued, but we decided to let it go.",
    usage: "informal",
  },
  {
    expression: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué",
    literal: "don't sell the bear's skin before you've killed it",
    meaning: "Don't count your chickens before they hatch",
    example: "On n'a pas encore gagné — ne vendons pas la peau de l'ours.",
    exampleEn: "We haven't won yet — let's not count our chickens.",
    usage: "both",
    note: "One of the most famous French proverbs, popularised by La Fontaine. Can be shortened in context.",
  },
];

const proverbs: Proverb[] = [
  {
    proverb: "Vouloir, c'est pouvoir.",
    meaning: "Where there's a will, there's a way.",
    note: "One of the most widely cited French proverbs. Simple, motivational, and effective in introductions or conclusions.",
  },
  {
    proverb: "Mieux vaut tard que jamais.",
    meaning: "Better late than never.",
    note: "Useful as a concession — even if something is overdue, it still has value.",
  },
  {
    proverb: "L'habit ne fait pas le moine.",
    meaning: "Don't judge a book by its cover. (Clothes don't make the monk.)",
    note: "A reminder that appearances can be deceptive. Excellent in essays about prejudice, identity, or social issues.",
  },
  {
    proverb: "Qui vivra verra.",
    meaning: "Time will tell. (He who lives will see.)",
    note: "Used to express uncertainty about the future. A graceful way to end an argument that can't be definitively resolved.",
  },
  {
    proverb: "Les murs ont des oreilles.",
    meaning: "Walls have ears.",
    note: "Warns that private conversations may be overheard. Common in everyday French.",
  },
  {
    proverb: "L'appétit vient en mangeant.",
    meaning: "Appetite comes with eating. / The more you have, the more you want.",
    equivalent: "Often used to mean: once you start something, you want more.",
    note: "From Rabelais (16th century). Used to describe how desire grows through action or experience.",
  },
  {
    proverb: "Chacun voit midi à sa porte.",
    meaning: "Everyone sees noon at their own door. / Everyone looks at things from their own perspective.",
    note: "Captures the idea of subjectivity and self-interest shaping people's views. Useful in philosophical or social essays.",
  },
  {
    proverb: "Il ne faut pas mettre tous ses œufs dans le même panier.",
    meaning: "Don't put all your eggs in one basket.",
    note: "Classic advice about diversification and risk. Works well in essays about strategy or decision-making.",
  },
  {
    proverb: "Bien mal acquis ne profite jamais.",
    meaning: "Ill-gotten gains never prosper.",
    note: "A moral proverb about honesty and integrity. Common in discussions of ethics.",
  },
  {
    proverb: "À quelque chose malheur est bon.",
    meaning: "Every cloud has a silver lining. (There's something good in every misfortune.)",
    note: "Used to find a positive angle in a difficult situation. Particularly effective in argumentative conclusions.",
  },
  {
    proverb: "Les absents ont toujours tort.",
    meaning: "The absent are always wrong. / Those who aren't there to defend themselves take the blame.",
    note: "Highlights how people judge those who can't speak for themselves. Relevant in essays about fairness or justice.",
  },
  {
    proverb: "Pierre qui roule n'amasse pas mousse.",
    meaning: "A rolling stone gathers no moss.",
    equivalent: "Used to mean someone who moves around constantly never builds stability.",
    note: "One of the best-known French proverbs. Applies to discussions of ambition, stability, and rootedness.",
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
            French expressions that are genuinely used — in conversation, in essays, and in culture. Each entry includes a real example sentence, a usage label, and a note on when and how to use it.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {Object.entries(usageColors).map(([key, color]) => (
            <span key={key} className={`rounded-full px-3 py-1 text-xs font-black ${color}`}>
              {usageLabels[key as keyof typeof usageLabels]}
            </span>
          ))}
          <span className="text-sm text-[#526173]">— register label</span>
        </div>

        {/* Writing expressions */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Expressions for writing & formal French</h2>
          <p className="mt-2 text-[#526173]">
            These elevate formal writing — IB essays, compositions, and formal text types. They signal precision, nuance, and a strong command of the language.
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
            Idioms that are genuinely part of French culture — heard in conversation, in films, and in informal writing. Many have rich historical or literary origins.
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

        {/* Proverbs */}
        <div className="mt-16">
          <h2 className="text-2xl font-black">French proverbs</h2>
          <p className="mt-2 text-[#526173]">
            Proverbs carry centuries of cultural wisdom and are widely recognized by French speakers. Quoting one precisely in an essay or oral exam demonstrates cultural fluency.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="px-5 py-3 text-left font-black">Proverb</th>
                  <th className="px-5 py-3 text-left font-black text-[#526173]">Meaning & context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {proverbs.map((p) => (
                  <tr key={p.proverb} className="align-top">
                    <td className="px-5 py-4 font-black text-[#2563EB]">{p.proverb}</td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-[#0B1F3A]">{p.meaning}</p>
                      {p.equivalent && <p className="mt-0.5 text-[#526173]">{p.equivalent}</p>}
                      {p.note && <p className="mt-1 text-xs text-[#526173]">{p.note}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Looking for connectors?</p>
          <p className="mt-2 text-sm leading-6 text-[#526173]">
            If you need words like en outre, par ailleurs, néanmoins, or de surcroît to link your ideas in essays, see the connecting words reference.
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
