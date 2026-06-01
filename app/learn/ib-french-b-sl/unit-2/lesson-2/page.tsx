import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "qui", back: "who / which / that (subject)", subtext: "Relative pronoun replacing the subject. 'C'est l'homme qui parle.' = He is the man who is speaking." },
  { front: "que / qu'", back: "whom / which / that (object)", subtext: "Replaces the object. 'Le livre que j'ai lu…' = The book that I read…" },
  { front: "dont", back: "whose / of which / about which", subtext: "Used when the verb requires 'de'. 'Le projet dont il parle…' = The project he is talking about…" },
  { front: "où", back: "where / when (relative)", subtext: "Replaces a place or time. 'Le jour où je suis arrivé…' = The day when I arrived…" },
  { front: "le passé composé", back: "completed past action", subtext: "Used for events that are finished. 'Il a parlé.' = He spoke. Most common past tense in texts." },
  { front: "l'imparfait", back: "background / ongoing past", subtext: "Used for descriptions, habits, and ongoing states in the past. 'Il faisait beau.' = The weather was nice." },
  { front: "le conditionnel", back: "conditional (would)", subtext: "'Ce serait mieux si…' = It would be better if… Signals hypothetical situations in texts." },
  { front: "le subjonctif", back: "subjunctive (doubt / wish / necessity)", subtext: "Triggered by 'il faut que', 'bien que', 'pour que'. Signals uncertainty or necessity." },
  { front: "la voix passive", back: "passive voice", subtext: "'La décision a été prise par le gouvernement.' = The decision was made by the government. Common in formal texts." },
  { front: "le discours indirect", back: "reported / indirect speech", subtext: "'Il a dit qu'il viendrait.' = He said he would come. Tense shifts back one step in indirect speech." },
];

const matchPairs = [
  { left: "qui", right: "who / which (subject)" },
  { left: "dont", right: "whose / of which" },
  { left: "le passé composé", right: "completed past action" },
  { left: "l'imparfait", right: "background / ongoing past" },
  { left: "le conditionnel", right: "would (hypothetical)" },
  { left: "la voix passive", right: "passive voice" },
];

const quiz = [
  {
    question: "Choose the correct relative pronoun: 'C'est le programme _____ a été lancé l'année dernière.'",
    options: ["que", "dont", "qui", "où"],
    correct: 2,
    explanation: "Qui replaces the subject — 'the programme that was launched'. The programme is the subject of 'a été lancé'.",
  },
  {
    question: "Choose the correct relative pronoun: 'Voici le rapport _____ nous avons besoin.'",
    options: ["qui", "que", "dont", "où"],
    correct: 2,
    explanation: "Dont is used because 'avoir besoin de' requires 'de'. 'Le rapport dont nous avons besoin' = The report we need.",
  },
  {
    question: "A text says 'En 2018, les émissions de carbone avaient augmenté de 3%.' The tense used is:",
    options: ["Passé composé", "Imparfait", "Plus-que-parfait", "Conditionnel"],
    correct: 2,
    explanation: "Avaient augmenté is the plus-que-parfait (had increased) — used for an action completed before another past action.",
  },
  {
    question: "You read: 'Il a dit qu'il viendrait demain.' This is an example of:",
    options: ["Passive voice", "Indirect speech", "The conditional", "The subjunctive"],
    correct: 1,
    explanation: "Le discours indirect (reported speech) — 'viendrait' is the conditional in indirect speech, shifted from 'je viendrai'.",
  },
  {
    question: "Which sentence uses the imparfait correctly?",
    options: ["Il a mangé une pomme.", "Il mangeait une pomme chaque jour.", "Il mangera une pomme.", "Il aurait mangé une pomme."],
    correct: 1,
    explanation: "'Il mangeait' (imperfect) describes a repeated past habit. 'Il a mangé' (passé composé) would be a single completed action.",
  },
];

export default function Unit2Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Grammar for Comprehension
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The grammar structures that appear most in Paper 1 texts. Understanding
              relative pronouns, tenses, and passive voice unlocks meaning in complex sentences.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                When you hit a long sentence, look for the{" "}
                <span className="font-black text-white">relative pronoun</span> first
                (qui, que, dont, où). It tells you exactly which noun the clause is
                describing — and that unlocks the whole sentence.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Quick reference</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>qui</strong> → subject of the clause</p>
                <p><strong>que</strong> → object of the clause</p>
                <p><strong>dont</strong> → after verbs with "de"</p>
                <p><strong>où</strong> → place or time</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Grammar reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Focus on when each structure is used.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Grammar for Paper 1 comprehension" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each grammar term to its function.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Grammar terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the grammar to sentences like the ones you'll see in Paper 1.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Grammar for comprehension quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Grammar for reading locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: listening comprehension — how to approach audio texts and what to listen for.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
