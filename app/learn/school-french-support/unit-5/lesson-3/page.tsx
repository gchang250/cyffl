import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const pastNarrativeCards = [
  { front: "D'abord, j'ai…", back: "First, I…: D'abord, j'ai pris le bus.", subtext: "Opens the narrative; passé composé for the completed action." },
  { front: "Ensuite, nous sommes…", back: "Then, we…: Ensuite, nous sommes arrivés.", subtext: "Use être auxiliary with motion verbs: arriver, partir, aller, venir." },
  { front: "Pendant que…", back: "While…: Pendant que je lisais, elle chantait.", subtext: "Introduces simultaneous background actions → imparfait." },
  { front: "Tout à coup…", back: "Suddenly…: Tout à coup, il a commencé à pleuvoir.", subtext: "Introduces an interrupting event → passé composé." },
  { front: "À ce moment-là…", back: "At that moment…: À ce moment-là, j'ai compris.", subtext: "Pinpoints a specific instant → passé composé." },
  { front: "Il faisait beau / froid / chaud.", back: "The weather was nice / cold / hot.", subtext: "Weather descriptions set the scene → always imparfait." },
  { front: "C'était…", back: "It was…: C'était une journée parfaite.", subtext: "Descriptions and states in the past → imparfait." },
  { front: "À la fin…", back: "In the end…: À la fin, nous sommes rentrés chez nous.", subtext: "Closes the narrative; passé composé for the final completed event." },
];

const pairs = [
  { left: "D'abord,…", right: "opens narrative sequence" },
  { left: "Pendant que…", right: "simultaneous background (imparfait)" },
  { left: "Tout à coup…", right: "sudden interrupting event (passé composé)" },
  { left: "C'était…", right: "description / state (imparfait)" },
  { left: "Ensuite,…", right: "continues sequence" },
  { left: "À la fin,…", right: "closes narrative" },
];

const exercises = [
  { before: "Quand j'étais petit, j'", after: "beaucoup le football. (to love: imparfait)", answer: "adorais", hint: "adorer → imparfait je: j'adorais", translation: "When I was young, I loved football a lot." },
  { before: "Hier, nous", after: "au parc avec nos amis. (aller: passé composé)", answer: "sommes allés", hint: "aller takes être: nous sommes allés", translation: "Yesterday, we went to the park with our friends." },
  { before: "Il", after: "très froid ce matin-là. (faire: imparfait, il)", answer: "faisait", hint: "Weather: il faisait → imparfait of faire", translation: "It was very cold that morning." },
  { before: "Tout à coup, elle", after: "son ancien professeur. (voir: passé composé)", answer: "a vu", hint: "voir → past participle: vu. Use avoir.", translation: "Suddenly, she saw her old teacher." },
  { before: "À la fin, ils", after: "contents de rentrer chez eux. (être: imparfait)", answer: "étaient", hint: "état/feeling in past → imparfait: ils étaient", translation: "In the end, they were happy to go home." },
];

const questions = [
  {
    question: "Which tense is used to describe a background state or ongoing condition in the past?",
    options: ["Passé composé", "Futur simple", "Imparfait", "Présent"],
    correct: 2,
    explanation: "The imparfait describes background states, descriptions, and ongoing conditions: il faisait beau, c'était calme, je me sentais fatigué.",
  },
  {
    question: "Which auxiliary is used with 'partir' in the passé composé?",
    options: ["avoir", "faire", "être", "aller"],
    correct: 2,
    explanation: "Motion/displacement verbs (partir, aller, venir, arriver, etc.) use être in the passé composé: il est parti, nous sommes partis.",
  },
  {
    question: "What does 'Tout à coup' signal in a narrative?",
    options: ["A background state", "A sudden event interrupting the story", "A final conclusion", "A repeated action"],
    correct: 1,
    explanation: "'Tout à coup' (suddenly) signals an unexpected interrupting event: it is followed by the passé composé.",
  },
  {
    question: "How do you write 'we came' in the passé composé?",
    options: ["nous avons venu", "nous sommes venus", "nous avons vendu", "nous sommes vendu"],
    correct: 1,
    explanation: "Venir uses être: nous sommes venus. The past participle venu agrees with the subject (add -s for plural).",
  },
  {
    question: "How do you say 'Yesterday, we went to the market' in French?",
    options: [
      "Hier, nous sommes allés au marché.",
      "Hier, nous allions au marché.",
      "Hier, nous avons allé au marché.",
      "Hier, nous sommes allé au marché.",
    ],
    correct: 0,
    explanation: "Hier signals a single completed event → passé composé. Aller uses être. Nous (masculine/mixed plural) → allés (add -s). Nous sommes allés au marché.",
  },
  {
    question: "Which connector opens a past narrative sequence?",
    options: ["À la fin", "Pendant que", "D'abord", "C'était"],
    correct: 2,
    explanation: "'D'abord' (first/to begin with) opens a narrative sequence of completed events. Each following step uses ensuite, puis, or alors, and the paragraph closes with à la fin or finalement.",
  },
  {
    question: "A student writes 'Il faisait beau' to describe the weather. Which tense is this and why?",
    options: [
      "Passé composé: because the weather is a completed event.",
      "Imparfait: because weather descriptions set the background scene.",
      "Présent: because weather descriptions are always present tense.",
      "Futur: because the weather is unpredictable.",
    ],
    correct: 1,
    explanation: "Il faisait beau is the imparfait. Weather descriptions in a past narrative set the scene/background → imparfait. It's an ongoing condition, not a completed event.",
  },
  {
    question: "When writing a past narrative, which sentence provides the best closing line?",
    options: [
      "Le soleil brillait et les oiseaux chantaient.",
      "Nous allions souvent au parc.",
      "À la fin, nous sommes rentrés chez nous, fatigués mais heureux.",
      "Il était tard et il faisait froid.",
    ],
    correct: 2,
    explanation: "A strong closing sentence uses the passé composé for the final completed action and adds a concluding observation. 'À la fin, nous sommes rentrés': completed return: signals the narrative end.",
  },
];

export default function Unit5Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 5 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Writing About the Past</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              A strong past-tense paragraph uses both the passé composé and the imparfait together. The structure is simple: use the <strong>imparfait</strong> to set the scene (what things were like, what was happening), then use the <strong>passé composé</strong> to narrate completed events (what happened, in order), and close with a final completed action or reflection.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Model past narrative</p>
            <p className="mt-3 text-sm leading-7 text-[#526173] italic">
              <span className="not-italic text-[#16A34A] font-bold">[Scène]</span> Il faisait beau et il y avait beaucoup de monde dans les rues. <span className="not-italic text-[#2563EB] font-bold">[Événements]</span> D&apos;abord, nous sommes allés au marché où j&apos;ai acheté des fraises. Ensuite, nous avons déjeuné dans un petit restaurant. Tout à coup, il a commencé à pleuvoir. <span className="not-italic text-[#D97706] font-bold">[Conclusion]</span> À la fin, nous sommes rentrés chez nous, mais c&apos;était quand même une belle journée.
            </p>
            <p className="mt-3 text-xs text-[#16A34A] font-bold">Green = imparfait · Blue = passé composé · Gold = conclusion</p>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={pastNarrativeCards} title="Past narrative phrases" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-lg">Common mistakes to avoid</p>
          <ul className="mt-3 space-y-2 text-[#CBD5E1] text-sm leading-7">
            <li><strong className="text-white">Verb agreement with être:</strong> Past participles agree with the subject — elle est <em>partie</em>, nous sommes <em>partis</em>.</li>
            <li><strong className="text-white">Auxiliary choice:</strong> Most verbs use avoir. Motion verbs and reflexives use être. When in doubt, ask: does this verb describe a change of place or state?</li>
            <li><strong className="text-white">Irregular past participles:</strong> faire → fait, voir → vu, prendre → pris, venir → venu, mettre → mis, boire → bu, lire → lu, écrire → écrit.</li>
          </ul>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Narrative phrase → function" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the past narrative" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Past narrative quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-5/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/school-french-support/unit-5/lesson-4" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
