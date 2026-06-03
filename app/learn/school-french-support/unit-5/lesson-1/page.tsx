import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const connectorCards = [
  { front: "et", back: "and — Je parle français et anglais.", subtext: "Basic addition connector. Never changes form." },
  { front: "aussi", back: "also / too — J'aime aussi le sport.", subtext: "Placed after the verb or at the end of a clause." },
  { front: "de plus", back: "furthermore / moreover — De plus, il fait beau.", subtext: "Formal addition; usually starts a new sentence or clause." },
  { front: "en plus", back: "on top of that / besides — En plus, c'est gratuit.", subtext: "Slightly informal; adds an extra point." },
  { front: "mais", back: "but — J'aime le café, mais je n'aime pas le thé.", subtext: "The most common contrast connector." },
  { front: "cependant", back: "however — Cependant, il existe des exceptions.", subtext: "Formal contrast; used in essays and reports." },
  { front: "par contre", back: "on the other hand — Par contre, les prix sont élevés.", subtext: "Common in spoken and written French." },
  { front: "pourtant", back: "yet / nevertheless — Il est tard, pourtant je lis encore.", subtext: "Expresses a surprising contrast." },
  { front: "car", back: "because / for — Je reste chez moi car il pleut.", subtext: "Cause connector; more formal than parce que." },
  { front: "parce que", back: "because — Je mange parce que j'ai faim.", subtext: "The most common cause connector in everyday French." },
  { front: "puisque", back: "since / given that — Puisque tu es là, aide-moi.", subtext: "Used when the cause is already known or obvious." },
  { front: "donc", back: "so / therefore — Il pleut, donc je prends un parapluie.", subtext: "Consequence connector; very common in speech and writing." },
  { front: "alors", back: "so / then — Il faisait froid, alors j'ai mis un manteau.", subtext: "Slightly more informal than donc." },
  { front: "ainsi", back: "thus / in this way — Ainsi, nous avons résolu le problème.", subtext: "Formal; often used in written essays." },
  { front: "d'abord … ensuite … enfin", back: "first … then … finally — Sequence markers for listing steps.", subtext: "Use these to structure a paragraph in order." },
];

const pairs = [
  { left: "mais", right: "contrast" },
  { left: "donc", right: "consequence" },
  { left: "car", right: "cause" },
  { left: "de plus", right: "addition" },
  { left: "d'abord", right: "sequence (first step)" },
  { left: "enfin", right: "sequence (final step)" },
];

const exercises = [
  { before: "J'aime le français,", after: "je trouve l'anglais plus facile. (contrast)", answer: "mais", hint: "The most common contrast word in French.", translation: "I like French, but I find English easier." },
  { before: "Je ne sors pas", after: "il fait très froid. (cause — formal)", answer: "car", hint: "A formal word for 'because'.", translation: "I am not going out because it is very cold." },
  { before: "Il a beaucoup étudié,", after: "il a réussi l'examen. (consequence)", answer: "donc", hint: "Means 'so' or 'therefore'.", translation: "He studied a lot, so he passed the exam." },
  { before: "J'adore la musique.", after: ", j'aime aussi le cinéma. (addition)", answer: "De plus", hint: "A formal connector meaning 'furthermore'.", translation: "I love music. Furthermore, I also like cinema." },
  { before: "", after: ", nous avons mangé. Puis, nous avons fait une promenade. (first step)", answer: "D'abord", hint: "The first sequencing word in a list.", translation: "First, we ate. Then, we went for a walk." },
];

const questions = [
  {
    question: "Which connector expresses cause?",
    options: ["donc", "mais", "parce que", "ensuite"],
    correct: 2,
    explanation: "Parce que introduces a cause: Je reste parce qu'il pleut. Donc = consequence, mais = contrast, ensuite = sequence.",
  },
  {
    question: "What is the correct word order in a basic French sentence?",
    options: ["Verb – Subject – Object", "Object – Verb – Subject", "Subject – Verb – Object", "Subject – Object – Verb"],
    correct: 2,
    explanation: "French follows Subject–Verb–Object order like English: Je mange une pomme. (I eat an apple.)",
  },
  {
    question: "Which sentence correctly uses a consequence connector?",
    options: ["Il était fatigué, mais il a dormi.", "Il était fatigué, donc il a dormi.", "Il était fatigué, car il a dormi.", "Il était fatigué, pourtant il a dormi."],
    correct: 1,
    explanation: "Donc = therefore/so, expressing a consequence. Car = because (cause). Mais = but (contrast). Pourtant = yet (contrast).",
  },
  {
    question: "Which of the following is a sequence connector?",
    options: ["cependant", "en plus", "ensuite", "puisque"],
    correct: 2,
    explanation: "Ensuite means 'then/next' and is used to sequence events: D'abord…, ensuite…, enfin…",
  },
  {
    question: "What is the difference between 'car' and 'parce que'?",
    options: [
      "They are completely different in meaning.",
      "Car is more formal than parce que, but both express cause.",
      "Parce que is formal; car is casual.",
      "Car means 'because of' while parce que means 'because'.",
    ],
    correct: 1,
    explanation: "Both car and parce que mean 'because,' but car is more formal and literary. In school essays, car elevates the style. Both introduce a reason or cause.",
  },
  {
    question: "Which connector would you use to add a contrasting point?",
    options: ["de plus", "donc", "cependant", "d'abord"],
    correct: 2,
    explanation: "Cependant = however, expressing contrast. De plus = furthermore (addition), donc = therefore (consequence), d'abord = first (sequence).",
  },
  {
    question: "How do you use 'puisque' in a sentence?",
    options: [
      "To list events in order.",
      "To express contrast.",
      "To introduce a known or obvious cause.",
      "To add an extra point.",
    ],
    correct: 2,
    explanation: "Puisque = since/given that — used when the cause is already known to both speakers. Puisque tu es là, aide-moi. (Since you're here, help me.) It differs from parce que, which introduces a new reason.",
  },
  {
    question: "Complete this sentence with the right connector: 'J'aime le français. ___, c'est difficile parfois.' (contrast)",
    options: ["Donc", "De plus", "Cependant", "D'abord"],
    correct: 2,
    explanation: "Cependant (however) introduces a contrasting point. 'I like French. However, it is sometimes difficult.' De plus adds information, donc draws a consequence, d'abord sequences.",
  },
];

export default function Unit5Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 5 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Connectors & Sentence Structure</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              French sentences follow Subject–Verb–Object order, just like English. The real skill is linking ideas clearly. Connectors (mots de liaison) tell your reader how ideas relate — whether you&apos;re adding, contrasting, explaining a cause, showing a consequence, or ordering steps. Organize your connectors into five families and you&apos;ll always find the right word.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Connector quick-reference</p>
            <div className="mt-3 space-y-3 text-xs">
              <div>
                <p className="font-bold text-[#16A34A] uppercase tracking-wide">Addition</p>
                <p className="text-[#526173]">et · aussi · de plus · en plus</p>
              </div>
              <div>
                <p className="font-bold text-[#16A34A] uppercase tracking-wide">Contrast</p>
                <p className="text-[#526173]">mais · cependant · par contre · pourtant</p>
              </div>
              <div>
                <p className="font-bold text-[#16A34A] uppercase tracking-wide">Cause</p>
                <p className="text-[#526173]">car · parce que · puisque</p>
              </div>
              <div>
                <p className="font-bold text-[#16A34A] uppercase tracking-wide">Consequence</p>
                <p className="text-[#526173]">donc · alors · ainsi</p>
              </div>
              <div>
                <p className="font-bold text-[#16A34A] uppercase tracking-wide">Sequence</p>
                <p className="text-[#526173]">d&apos;abord · puis · ensuite · enfin · finalement</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={connectorCards} title="French connectors" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-lg">Sentence length tip</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Vary your sentence length for better style. Short sentences punch hard: <em>Il fait froid.</em> Long sentences show sophistication: <em>Bien que le temps soit mauvais, nous avons décidé de sortir car c&apos;était notre dernière chance.</em> A good paragraph mixes both. Avoid writing five long sentences in a row — it tires the reader.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Connector → function" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Choose the correct connector" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Connectors quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-4/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Unit 4 Test</Link>
          <Link href="/learn/school-french-support/unit-5/lesson-2" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
