import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const vocabCards = [
  { front: "se promener", back: "to go for a walk: Nous nous sommes promenés dans le Vieux-Montréal.", subtext: "Reflexive verb; uses être in the passé composé." },
  { front: "bondé(e)", back: "crowded, packed: Le marché était bondé de touristes.", subtext: "A useful adjective for describing busy places." },
  { front: "goûter", back: "to taste / to try (food): J'ai goûté une poutine pour la première fois.", subtext: "Also used as a noun: le goûter = afternoon snack." },
  { front: "inoubliable", back: "unforgettable: C'était une expérience inoubliable.", subtext: "From oublier (to forget) + in- (not) + -able. A great word for closing a narrative." },
  { front: "avoir l'habitude de", back: "to be used to / to usually do: Ma grand-mère avait l'habitude de chanter.", subtext: "Always followed by an infinitive. Expresses habitual action → imparfait." },
  { front: "raconter", back: "to tell (a story) / to recount: Elle me racontait des histoires.", subtext: "Different from dire (to say) and parler (to speak). Raconter = to narrate." },
  { front: "autrefois", back: "in the past / once upon a time: Autrefois, il n'y avait pas d'internet.", subtext: "A time marker that signals imparfait is coming." },
  { front: "se souvenir de", back: "to remember: Je me souviens encore de son sourire.", subtext: "Reflexive; uses être in passé composé. Irregular: je me souviens, il se souvient." },
];

const pairs = [
  { left: "se promener", right: "to go for a walk" },
  { left: "bondé(e)", right: "crowded" },
  { left: "inoubliable", right: "unforgettable" },
  { left: "avoir l'habitude de", right: "to usually do (habitual: imparfait)" },
  { left: "autrefois", right: "in the past (signals imparfait)" },
  { left: "se souvenir de", right: "to remember" },
];

const questions = [
  {
    question: "According to Text A, what did the narrator eat in Montréal for the first time?",
    options: ["A bagel", "Poutine", "Maple syrup", "A croissant"],
    correct: 1,
    explanation: "The text says 'j'ai goûté une poutine pour la première fois de ma vie': poutine for the first time.",
  },
  {
    question: "In Text A, what happened to the weather during the trip?",
    options: ["It rained all day", "It was sunny throughout", "It started raining in the afternoon", "There was a storm at night"],
    correct: 2,
    explanation: "The text says 'l'après-midi, il a commencé à pleuvoir': it began to rain in the afternoon.",
  },
  {
    question: "What is the tense used to describe the grandmother's habits in Text B?",
    options: ["Passé composé", "Futur simple", "Imparfait", "Présent"],
    correct: 2,
    explanation: "Habitual past actions are expressed with the imparfait: 'elle chantait', 'elle me racontait', 'elle préparait'. These are things she used to do.",
  },
  {
    question: "In Text B, what does the narrator miss most about their grandmother?",
    options: ["Her cooking", "Her stories and songs", "Her house in the countryside", "Her voice on the phone"],
    correct: 1,
    explanation: "The text says 'ce que je regrette le plus, c'est ses histoires et ses chansons': her stories and songs.",
  },
  {
    question: "What does 'autrefois' signal about the tense that follows?",
    options: ["The futur simple: predictions about the future.", "The passé composé: a specific completed event.", "The imparfait: habitual or background past.", "The présent: current habits."],
    correct: 2,
    explanation: "'Autrefois' (in the past / once upon a time) signals habitual or ongoing past states → imparfait. Autrefois, ma grand-mère chantait tous les soirs.",
  },
  {
    question: "In Text B, the grandmother's habits are described using the imparfait. What verb would translate 'she used to prepare'?",
    options: ["elle a préparé", "elle prépare", "elle préparait", "elle va préparer"],
    correct: 2,
    explanation: "Elle préparait: the imparfait of préparer. 'Used to prepare' signals a habitual past action → imparfait. Note the stem: nous préparons → prépar- + -ait = préparait.",
  },
  {
    question: "What does 'inoubliable' mean, and how can you decode it?",
    options: [
      "Impossible: from 'im-possible'.",
      "Unforgettable: from 'oublier' (forget) + in- (not) + -able.",
      "Incredible: from 'incroyable'.",
      "Unusual: from 'in-usuel'.",
    ],
    correct: 1,
    explanation: "Inoubliable = unforgettable. Built from: oublier (to forget) + in- (negative prefix, not) + -able (suffix, able to be). Word family strategy lets you decode many French words this way.",
  },
  {
    question: "Which strategy from Lesson 1 would help most with Text B's vocabulary like 'bondé' and 'raconter'?",
    options: [
      "Reading the title first.",
      "Using context clues: surrounding words show that bondé means crowded and raconter means to tell/recount.",
      "Identifying the text as an argument.",
      "Counting the number of verbs.",
    ],
    correct: 1,
    explanation: "Context clues: 'Le marché était bondé de touristes': the context (tourists everywhere at a market) suggests 'bondé' = crowded. 'Elle me racontait des histoires': she was telling me stories: 'raconter' = to tell/recount.",
  },
];

export default function Unit6Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#854D0E]">Unit 6 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Intermediate Texts</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              These texts use past tenses — passé composé and imparfait — mixed together. When reading past-tense narratives, pay attention to tense signals: time markers like <em>d&apos;abord</em>, <em>tout à coup</em>, and <em>autrefois</em> tell you what kind of action is coming. Passé composé signals completed events; imparfait signals background states and habitual actions.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Tense signals to look for</p>
            <div className="mt-3 space-y-2 text-xs">
              <div>
                <p className="font-bold text-[#854D0E]">→ Passé composé (completed event)</p>
                <p className="text-[#526173]">soudain · tout à coup · un jour · hier · finalement · à ce moment-là</p>
              </div>
              <div>
                <p className="font-bold text-[#854D0E]">→ Imparfait (background / habitual)</p>
                <p className="text-[#526173]">autrefois · toujours · tous les jours · d&apos;habitude · pendant que · quand j&apos;étais petit(e)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text A */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text A — Un weekend à Montréal</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Le mois dernier, mes parents et moi avons passé un weekend à Montréal. Il faisait beau et les rues étaient animées. Le samedi matin, nous nous sommes promenés dans le Vieux-Montréal. Les bâtiments anciens étaient magnifiques et il y avait beaucoup de touristes. J&apos;ai goûté une poutine pour la première fois de ma vie: c&apos;était délicieux! L&apos;après-midi, nous avons visité le musée des beaux-arts. Pendant que mes parents regardaient les tableaux, moi, j&apos;écoutais de la musique dans le café du musée. Tout à coup, il a commencé à pleuvoir, alors nous sommes rentrés à l&apos;hôtel. Le dimanche, nous avons fait du shopping au marché Jean-Talon avant de reprendre la route. C&apos;était un weekend inoubliable.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text A</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. Qu&apos;est-ce que le/la narrateur(-trice) a fait le samedi matin?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle s&apos;est promené(e) dans le Vieux-Montréal avec ses parents.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Qu&apos;est-ce que le/la narrateur(-trice) faisait pendant que ses parents regardaient les tableaux?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle écoutait de la musique dans le café du musée.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Pourquoi sont-ils rentrés à l&apos;hôtel plus tôt que prévu?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Parce qu&apos;il a commencé à pleuvoir.</p>
            </div>
          </div>
        </div>

        {/* Text B */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text B — Ma grand-mère</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Ma grand-mère s&apos;appelait Marguerite. Elle habitait dans une petite maison à la campagne, entourée d&apos;un grand jardin plein de fleurs. Quand j&apos;étais enfant, je passais chaque été chez elle. Elle avait l&apos;habitude de se lever très tôt le matin pour travailler dans son jardin. L&apos;après-midi, elle me racontait des histoires de son enfance ou elle chantait de vieilles chansons françaises. J&apos;adorais ces moments. Un été, elle m&apos;a appris à faire de la confiture de fraises: nous avons passé toute une matinée dans sa cuisine. Ma grand-mère est décédée il y a trois ans. Ce que je regrette le plus, c&apos;est ses histoires et ses chansons. Je me souviens encore de son sourire et de son rire.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text B</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. Où habitait la grand-mère?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Elle habitait dans une petite maison à la campagne.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Qu&apos;est-ce que la grand-mère faisait l&apos;après-midi?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Elle racontait des histoires de son enfance ou chantait de vieilles chansons françaises.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Qu&apos;est-ce que la grand-mère a appris au/à la narrateur(-trice)?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Elle lui a appris à faire de la confiture de fraises.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={vocabCards} title="Vocabulary from the texts" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Vocabulary match" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Text comprehension quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-6/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/school-french-support/unit-6/lesson-4" className="rounded-full bg-[#854D0E] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#713D0A]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
