"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

type ConnectorEntry = {
  word: string;
  level: string;
  meaning: string;
  example: string;
  note?: string;
};

type ConnectorGroup = {
  title: string;
  description: string;
  entries: ConnectorEntry[];
};

const groups: ConnectorGroup[] = [
  {
    title: "Adding information",
    description: "Use these to build on an idea, add supporting points, or intensify an argument.",
    entries: [
      { word: "et", level: "A1", meaning: "and", example: "Il parle français et anglais.", note: "Use sparingly in essays: too many 'et' sounds elementary." },
      { word: "aussi", level: "A2", meaning: "also, too", example: "Elle aime la musique. Elle aime aussi la peinture.", note: "Placed after the conjugated verb, not at the start of a clause in formal writing." },
      { word: "également", level: "B1", meaning: "also, equally", example: "Il est également important de noter que...", note: "More formal than aussi. Excellent in essays." },
      { word: "de plus", level: "B1", meaning: "moreover, furthermore", example: "De plus, il faut considérer les conséquences.", note: "Very common in formal writing. Opens a new supporting point." },
      { word: "en outre", level: "B2", meaning: "furthermore, in addition", example: "En outre, les résultats confirment cette hypothèse.", note: "More formal than de plus. Preferred in academic and IB writing." },
      { word: "par ailleurs", level: "B2", meaning: "moreover, besides, in addition", example: "Par ailleurs, cette approche présente des avantages.", note: "Can introduce a related but distinct point. Very versatile in essays." },
      { word: "non seulement... mais aussi", level: "B2", meaning: "not only... but also", example: "Non seulement c'est utile, mais aussi efficace.", note: "Powerful double structure. Creates emphasis and balance." },
      { word: "voire", level: "C1", meaning: "or even, indeed", example: "Cela prend des heures, voire des jours.", note: "Adds an extreme or surprising case to what was just said." },
      { word: "de surcroît", level: "C1", meaning: "on top of that, what's more", example: "C'est coûteux, et de surcroît peu pratique.", note: "Typically adds a negative point on top of another. High register." },
      { word: "qui plus est", level: "C1", meaning: "what is more, on top of that", example: "Il est compétent, et qui plus est, très motivé.", note: "Emphatic and formal. Rarely used in speech: save it for writing." },
    ],
  },
  {
    title: "Contrast & opposition",
    description: "Show that two ideas are in tension, contradict each other, or present different perspectives.",
    entries: [
      { word: "mais", level: "A1", meaning: "but", example: "J'aime le français, mais c'est difficile.", note: "The most basic contrast word. Overuse weakens essays: vary it." },
      { word: "par contre", level: "B1", meaning: "on the other hand, however", example: "Le train est rapide. Par contre, il est cher.", note: "Common in both speech and writing. Introduces a direct counter-point." },
      { word: "en revanche", level: "B2", meaning: "on the other hand, in return", example: "En revanche, les bénéfices à long terme sont réels.", note: "More formal than par contre. The preferred form in academic writing." },
      { word: "cependant", level: "B1", meaning: "however, yet", example: "Cependant, il faut nuancer cette affirmation.", note: "Neutral and very common in essays. Can open a sentence." },
      { word: "pourtant", level: "B1", meaning: "yet, even so, and yet", example: "Il a travaillé dur. Pourtant, il a échoué.", note: "Expresses surprise or unexpectedness. Slightly more emotional than cependant." },
      { word: "néanmoins", level: "B2", meaning: "nevertheless, nonetheless", example: "Néanmoins, certains avantages méritent d'être soulignés.", note: "Formal and precise. Concedes a point but maintains the main argument." },
      { word: "toutefois", level: "B2", meaning: "however, yet, that said", example: "Toutefois, cette solution n'est pas sans risques.", note: "Slightly softer than néanmoins. Widely used in formal texts." },
      { word: "à l'inverse", level: "B2", meaning: "conversely, on the contrary", example: "À l'inverse, les pays nordiques ont adopté une autre approche.", note: "Points to a direct reversal of the previous idea." },
      { word: "or", level: "C1", meaning: "yet, now, but (literary)", example: "Il semblait confiant. Or, la situation était bien plus complexe.", note: "Literary conjunction introducing a twist or complication. Do not confuse with the English 'or'." },
      { word: "quand bien même", level: "C1", meaning: "even if, even though", example: "Quand bien même il réussirait, le problème demeurerait.", note: "Takes the conditional. Introduces a concession at a high register." },
    ],
  },
  {
    title: "Cause & reason",
    description: "Explain why something happens or what caused a result.",
    entries: [
      { word: "parce que", level: "A2", meaning: "because", example: "Je reste à la maison parce qu'il pleut.", note: "The basic 'because'. Answers the question 'pourquoi?'." },
      { word: "car", level: "B1", meaning: "because, for (formal)", example: "Il n'est pas venu, car il était malade.", note: "More formal than parce que. Common in written French: never starts a sentence in formal style." },
      { word: "puisque", level: "B1", meaning: "since, given that", example: "Puisque tu es là, on peut commencer.", note: "Refers to a reason both speaker and listener already know. Less explanatory, more logical." },
      { word: "grâce à", level: "B1", meaning: "thanks to (positive result)", example: "Grâce à ses efforts, elle a réussi.", note: "Only used when the outcome is positive. Contrast with à cause de." },
      { word: "à cause de", level: "A2", meaning: "because of (negative or neutral)", example: "Il est arrivé en retard à cause des embouteillages.", note: "Used for negative or problematic causes. Never use for positive outcomes." },
      { word: "étant donné que", level: "B2", meaning: "given that, since", example: "Étant donné que les ressources sont limitées...", note: "Formal. Introduces a premise before a conclusion. Often opens a sentence." },
      { word: "en raison de", level: "B2", meaning: "owing to, because of", example: "En raison des circonstances, la réunion est annulée.", note: "Formal and neutral. Followed by a noun, not a verb." },
      { word: "vu que", level: "B1", meaning: "seeing that, given that", example: "Vu que le temps manque, allons à l'essentiel.", note: "Slightly informal. Used in speech and mid-register writing." },
    ],
  },
  {
    title: "Consequence & result",
    description: "Show what follows from an idea, fact, or argument.",
    entries: [
      { word: "donc", level: "A2", meaning: "therefore, so", example: "Je pense, donc je suis.", note: "The most common consequence connector. Works in all registers." },
      { word: "alors", level: "A2", meaning: "so, then", example: "Il n'était pas là, alors on est partis.", note: "Common in speech. Slightly informal in formal writing: use par conséquent instead." },
      { word: "ainsi", level: "B2", meaning: "thus, in this way", example: "Ainsi, on peut conclure que...", note: "Formal. Often triggers subject-verb inversion when it opens a sentence: Ainsi peut-on affirmer que..." },
      { word: "c'est pourquoi", level: "B1", meaning: "that is why, this is why", example: "C'est pourquoi il faut agir maintenant.", note: "Excellent in essays. Directly links a cause to a decision or recommendation." },
      { word: "par conséquent", level: "B2", meaning: "consequently, as a result", example: "Par conséquent, les prix ont augmenté.", note: "Formal and common in academic writing. Marks a logical conclusion." },
      { word: "de ce fait", level: "B2", meaning: "because of this, as a result", example: "De ce fait, la situation s'est améliorée.", note: "Points back directly to the previous sentence as the cause." },
      { word: "d'où", level: "B2", meaning: "hence, which is why", example: "Les ressources sont rares, d'où la nécessité de les gérer.", note: "Concise and elegant. Often followed by a noun phrase." },
      { word: "dès lors", level: "C1", meaning: "from then on, therefore", example: "Dès lors, toute négociation devient impossible.", note: "High-register. Can be temporal (from that point) or logical (therefore)." },
    ],
  },
  {
    title: "Concession & nuance",
    description: "Acknowledge a counter-argument or limitation before reinforcing your point.",
    entries: [
      { word: "même si", level: "B1", meaning: "even if, even though", example: "Même si c'est difficile, il faut essayer.", note: "Takes the indicative. Very common and versatile." },
      { word: "malgré", level: "B1", meaning: "despite, in spite of", example: "Malgré les obstacles, elle a réussi.", note: "Followed by a noun or pronoun, not a clause." },
      { word: "en dépit de", level: "B2", meaning: "in spite of, despite", example: "En dépit de ses efforts, il a échoué.", note: "More formal than malgré. Followed by a noun." },
      { word: "certes", level: "B2", meaning: "certainly, admittedly, granted", example: "Certes, cette solution a des avantages. Cependant...", note: "Classic essay move: concede a point, then rebut. Often paired with mais or cependant." },
      { word: "il est vrai que", level: "B2", meaning: "it is true that, admittedly", example: "Il est vrai que les résultats sont encourageants.", note: "Formal concession. Sets up a nuance or counter-argument." },
      { word: "bien que", level: "B2", meaning: "although, even though", example: "Bien qu'il soit fatigué, il continue.", note: "Requires the subjunctive. A key IB construction." },
      { word: "quoique", level: "C1", meaning: "although, even though", example: "Quoiqu'on en dise, la situation s'améliore.", note: "Subjunctive required. More literary than bien que." },
      { word: "quand bien même", level: "C1", meaning: "even if, even supposing", example: "Quand bien même cela serait vrai, les conséquences restent incertaines.", note: "Conditional required. Sophisticated concession for IB essays." },
    ],
  },
  {
    title: "Illustration & example",
    description: "Support a claim with a specific example or clarify a general idea.",
    entries: [
      { word: "par exemple", level: "A2", meaning: "for example", example: "Par exemple, les Canadiens bilingues ont plus d'opportunités.", note: "The most common. Works in all contexts." },
      { word: "notamment", level: "B2", meaning: "notably, in particular", example: "Plusieurs pays, notamment la France et le Canada, ont signé l'accord.", note: "Introduces a specific subset of a general claim. Common in formal writing." },
      { word: "c'est-à-dire", level: "B1", meaning: "that is to say, i.e.", example: "Il a réussi, c'est-à-dire qu'il a obtenu plus de 80%.", note: "Used to clarify or restate. Can be abbreviated as c.-à-d. in notes." },
      { word: "à titre d'exemple", level: "B2", meaning: "by way of example", example: "À titre d'exemple, considérons le cas du Québec.", note: "Formal phrasing for introducing case studies or data. Excellent in IB essays." },
      { word: "en l'occurrence", level: "C1", meaning: "in this case, as it happens", example: "En l'occurrence, c'est la loi qui s'applique.", note: "Refers to the specific situation just mentioned. High register." },
      { word: "tel que", level: "B2", meaning: "such as, like", example: "Des pays tel que le Canada favorisent le bilinguisme.", note: "Formal equivalent of comme when listing examples." },
    ],
  },
  {
    title: "Sequence & structure",
    description: "Organise ideas chronologically or logically: essential for structuring any text.",
    entries: [
      { word: "d'abord", level: "A2", meaning: "first, first of all", example: "D'abord, il faut définir le problème.", note: "The standard opening for a first point. Pairs with ensuite and enfin." },
      { word: "premièrement", level: "B1", meaning: "firstly", example: "Premièrement, examinons les avantages.", note: "More formal than d'abord. Often used with deuxièmement, troisièmement." },
      { word: "en premier lieu", level: "B2", meaning: "in the first place, first of all", example: "En premier lieu, il convient d'analyser les causes.", note: "High-register opener. Pairs with en second lieu and en dernier lieu." },
      { word: "ensuite", level: "A2", meaning: "then, next", example: "D'abord on prépare les ingrédients, ensuite on cuisine.", note: "Marks the next step or point. Very common and reliable." },
      { word: "puis", level: "A2", meaning: "then, and then", example: "Il a étudié, puis il a passé son examen.", note: "More sequential than ensuite: suggests one thing coming right after another." },
      { word: "enfin", level: "B1", meaning: "finally, lastly", example: "Enfin, il faut considérer l'impact à long terme.", note: "Closes a sequence. Can also express relief in speech: 'Enfin!' = At last!" },
      { word: "finalement", level: "B1", meaning: "finally, in the end", example: "Finalement, ils ont trouvé un accord.", note: "Refers to what happened after a process: slightly different from enfin, which closes a list." },
      { word: "en dernier lieu", level: "B2", meaning: "lastly, finally", example: "En dernier lieu, il faut évoquer les solutions possibles.", note: "Formal closing. Pairs with en premier lieu and en second lieu." },
    ],
  },
  {
    title: "Summary & conclusion",
    description: "Wrap up an argument, restate a main point, or draw a final inference.",
    entries: [
      { word: "en résumé", level: "B1", meaning: "in summary, to sum up", example: "En résumé, les avantages l'emportent sur les inconvénients.", note: "Signals a recap, not necessarily a final conclusion." },
      { word: "bref", level: "B1", meaning: "in short, in brief", example: "Bref, il faut agir.", note: "Conversational but common in writing. Implies impatience or conciseness." },
      { word: "en somme", level: "B2", meaning: "in sum, all in all", example: "En somme, le bilan est positif.", note: "More formal than bref. Weighs up the overall picture." },
      { word: "au fond", level: "B2", meaning: "at bottom, ultimately, deep down", example: "Au fond, la question est simple.", note: "Slightly reflective: suggests getting to the heart of the matter." },
      { word: "pour conclure", level: "B1", meaning: "to conclude, in conclusion", example: "Pour conclure, rappelons les points essentiels.", note: "Clear and direct closing for essays. Avoid starting every conclusion this way: vary it." },
      { word: "en conclusion", level: "B1", meaning: "in conclusion", example: "En conclusion, cette politique semble inévitable.", note: "Standard essay closer. Acceptable but can be formulaic: en définitive is more elegant." },
      { word: "en définitive", level: "C1", meaning: "in the final analysis, ultimately", example: "En définitive, c'est à chacun de décider.", note: "High-register conclusion. Preferred in IB and academic essays over en conclusion." },
      { word: "tout compte fait", level: "C1", meaning: "all things considered, when all is said and done", example: "Tout compte fait, cette solution reste la meilleure.", note: "Weighs everything before landing on a final judgement. Impressive in formal writing." },
    ],
  },
];

const levelColors: Record<string, string> = {
  A1: "bg-[#F0FDF4] text-[#16A34A]",
  A2: "bg-[#DCFCE7] text-[#15803D]",
  B1: "bg-[#EFF6FF] text-[#2563EB]",
  B2: "bg-[#EDE9FE] text-[#7C3AED]",
  C1: "bg-[#FEF3C7] text-[#D97706]",
};

export default function ConnectingWordsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]">
            Expressions & Style
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Connecting words
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            A full reference of French connectors organized by function. Each entry includes a level label, meaning, and example sentence.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-[#0B1F3A] p-5 text-white">
          <p className="font-black text-[#C9A44C]">Level guide</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm">
            {Object.entries(levelColors).map(([level, color]) => (
              <span key={level} className={`rounded-full px-3 py-1 text-xs font-black ${color}`}>{level}</span>
            ))}
          </div>
          <p className="mt-3 text-sm text-white/60">
            A1–A2 = beginner · B1 = intermediate · B2 = upper-intermediate · C1 = advanced (IB level)
          </p>
        </div>

        <div className="mt-12 space-y-14">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-black capitalize">{group.title}</h2>
              <p className="mt-2 text-[#526173]">{group.description}</p>

              <div className="mt-5 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#E7DAB9]">
                      <th className="w-8 py-3 pl-3" />
                      <th className="px-3 py-3 text-left font-black">Word / phrase</th>
                      <th className="px-3 py-3 text-left font-black">Level</th>
                      <th className="px-3 py-3 text-left font-black">Meaning</th>
                      <th className="px-5 py-3 text-left font-black text-[#526173]">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3EDD8]">
                    {group.entries.map((entry) => (
                      <tr key={entry.word} className="align-top">
                        <td className="py-4 pl-3">
                          <SpeakButton text={entry.word} size="sm" />
                        </td>
                        <td className="px-3 py-4 font-black">{entry.word}</td>
                        <td className="px-3 py-4">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-black ${levelColors[entry.level]}`}>
                            {entry.level}
                          </span>
                        </td>
                        <td className="px-3 py-4 text-[#526173]">{entry.meaning}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5 shrink-0">
                              <SpeakButton text={entry.example} size="sm" />
                            </div>
                            <div>
                              <p className="font-semibold text-[#2563EB]">{entry.example}</p>
                              {entry.note && (
                                <p className="mt-1 text-xs text-[#526173]">{entry.note}</p>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">IB French B — writing tip</p>
          <p className="mt-2 text-sm leading-6 text-[#526173]">
            Examiners reward varied, precise connectors. Aim for at least three different functions in any essay: one to add (en outre, par ailleurs), one to contrast (néanmoins, en revanche), and one to conclude (en définitive, tout compte fait). Avoid relying on et, mais, and donc alone.
          </p>
          <Link
            href="/resources/expressions"
            className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
          >
            See idiomatic expressions →
          </Link>
        </div>
      </section>
    </main>
  );
}
