import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "être", back: "été", subtext: "J'ai été malade. — I was sick. (uses avoir!)" },
  { front: "avoir", back: "eu", subtext: "Tu as eu de la chance. — You were lucky." },
  { front: "faire", back: "fait", subtext: "Elle a fait ses devoirs. — She did her homework." },
  { front: "pouvoir", back: "pu", subtext: "Il n'a pas pu venir. — He couldn't come." },
  { front: "vouloir", back: "voulu", subtext: "J'ai voulu aider. — I wanted to help." },
  { front: "devoir", back: "dû", subtext: "Tu as dû partir tôt. — You had to leave early." },
  { front: "prendre", back: "pris", subtext: "Nous avons pris le métro. — We took the metro." },
  { front: "mettre", back: "mis", subtext: "Elle a mis sa veste. — She put on her jacket." },
  { front: "voir", back: "vu", subtext: "Vous avez vu ce film? — Did you see that film?" },
  { front: "boire", back: "bu", subtext: "Il a bu du café. — He drank coffee." },
  { front: "écrire", back: "écrit", subtext: "J'ai écrit une lettre. — I wrote a letter." },
  { front: "lire", back: "lu", subtext: "Tu as lu ce livre? — Did you read that book?" },
  { front: "savoir", back: "su", subtext: "Elle a su la réponse. — She knew the answer." },
  { front: "ouvrir", back: "ouvert", subtext: "Ils ont ouvert la fenêtre. — They opened the window." },
  { front: "venir", back: "venu(e)(s)", subtext: "Elle est venue. — She came. (uses être)" },
];

const pairs = [
  { left: "être", right: "été" },
  { left: "avoir", right: "eu" },
  { left: "faire", right: "fait" },
  { left: "prendre", right: "pris" },
  { left: "voir", right: "vu" },
  { left: "boire", right: "bu" },
  { left: "écrire", right: "écrit" },
  { left: "ouvrir", right: "ouvert" },
];

const fillIn = [
  { before: "J'", after: "un bon livre hier. (lire)", answer: "ai lu", hint: "lire → lu (irregular)", translation: "I read a good book yesterday." },
  { before: "Elle", after: "une lettre à sa mère. (écrire)", answer: "a écrit", hint: "écrire → écrit", translation: "She wrote a letter to her mother." },
  { before: "Nous", after: "du café ce matin. (boire)", answer: "avons bu", hint: "boire → bu", translation: "We drank coffee this morning." },
  { before: "Tu", after: "ce film? (voir)", answer: "as vu", hint: "voir → vu", translation: "Did you see that film?" },
  { before: "Ils", after: "la porte. (ouvrir)", answer: "ont ouvert", hint: "ouvrir → ouvert", translation: "They opened the door." },
];

const quiz = [
  {
    question: "What is the past participle of 'faire'?",
    options: ["faisé", "faisit", "fait", "faru"],
    correct: 2,
    explanation: "Faire → fait is one of the most common irregular past participles. J'ai fait = I did/made.",
  },
  {
    question: "What is the past participle of 'boire' (to drink)?",
    options: ["boiré", "buvé", "bu", "boit"],
    correct: 2,
    explanation: "Boire → bu. J'ai bu de l'eau = I drank water.",
  },
  {
    question: "Which is the correct passé composé of 'devoir' for 'tu'?",
    options: ["tu as dévé", "tu as doit", "tu as dû", "tu es dû"],
    correct: 2,
    explanation: "Devoir → dû (irregular). Uses avoir. Tu as dû partir = You had to leave.",
  },
  {
    question: "What is the past participle of 'mettre' (to put)?",
    options: ["metté", "mettit", "mis", "mu"],
    correct: 2,
    explanation: "Mettre → mis. J'ai mis ma veste = I put on my jacket.",
  },
];

export default function Unit6Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 6 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Irregular Past Participles</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">The most common verbs in French have irregular past participles. Learn them here — they come up in every conversation.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Key irregular past participles</p>
            <div className="mt-3 grid grid-cols-3 gap-x-2 gap-y-1 text-xs">
              <p className="font-black text-[#526173]">Infinitive</p>
              <p className="font-black text-[#526173]">Past participle</p>
              <p className="font-black text-[#526173]">Example</p>
              {[
                ["être","été","j'ai été malade"],
                ["avoir","eu","tu as eu de la chance"],
                ["faire","fait","elle a fait son lit"],
                ["pouvoir","pu","il a pu venir"],
                ["vouloir","voulu","nous avons voulu aider"],
                ["devoir","dû","vous avez dû partir"],
                ["prendre","pris","ils ont pris le train"],
                ["mettre","mis","j'ai mis ma veste"],
                ["voir","vu","tu as vu ce film?"],
                ["venir","venu","elle est venue"],
                ["boire","bu","nous avons bu du café"],
                ["écrire","écrit","il a écrit une lettre"],
                ["lire","lu","j'ai lu ce livre"],
                ["savoir","su","elle a su la réponse"],
                ["ouvrir","ouvert","ils ont ouvert la porte"],
              ].map(([inf, pp, ex]) => (
                <>
                  <p key={inf} className="font-semibold text-[#0B1F3A]">{inf}</p>
                  <p key={pp} className="font-bold text-[#2563EB]">{pp}</p>
                  <p key={ex} className="text-[#526173]">{ex}</p>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Irregular past participles" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Infinitive to past participle" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Irregular past participles in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Irregular past participles quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-6/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-6/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
