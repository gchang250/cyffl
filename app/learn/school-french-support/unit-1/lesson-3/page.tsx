import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const prepCards = [
  { front: "à + le → au", back: "to the / at the (masculine)", subtext: "Je vais au marché. — I'm going to the market." },
  { front: "à + les → aux", back: "to the / at the (plural)", subtext: "Il parle aux élèves. — He talks to the students." },
  { front: "de + le → du", back: "from the / of the (masculine)", subtext: "Le livre du professeur. — The teacher's book." },
  { front: "de + les → des", back: "from the / of the (plural)", subtext: "Les devoirs des élèves. — The students' homework." },
  { front: "dans", back: "in, inside", subtext: "Le chat est dans la boîte. — The cat is in the box." },
  { front: "sur", back: "on top of", subtext: "Le livre est sur la table. — The book is on the table." },
  { front: "sous", back: "under, beneath", subtext: "Le chien est sous la chaise. — The dog is under the chair." },
  { front: "devant", back: "in front of", subtext: "Il attend devant l'école. — He waits in front of the school." },
  { front: "derrière", back: "behind", subtext: "La voiture est derrière la maison. — The car is behind the house." },
  { front: "en France", back: "in France (feminine country)", subtext: "En is used with feminine countries: en France, en Italie, en Espagne." },
];

const pairs = [
  { left: "au cinéma", right: "to/at the cinema (m)" },
  { left: "aux États-Unis", right: "to/in the United States (pl)" },
  { left: "du parc", right: "from/of the park (m)" },
  { left: "à côté de l'école", right: "next to the school" },
  { left: "en face de la gare", right: "across from the station" },
  { left: "entre la banque et le café", right: "between the bank and the café" },
];

const exercises = [
  { before: "Elle va", after: "cinéma. (to the / masculine)", answer: "au", hint: "à + le = au", translation: "She is going to the cinema." },
  { before: "Il vient", after: "Canada. (from — masculine country)", answer: "du", hint: "de + le = du", translation: "He comes from Canada." },
  { before: "Le chat est", after: "la table. (under)", answer: "sous", hint: "under = sous", translation: "The cat is under the table." },
  { before: "Nous habitons", after: "France. (in — feminine country)", answer: "en", hint: "feminine countries use en", translation: "We live in France." },
  { before: "Il y a un parc", after: "la bibliothèque. (in front of)", answer: "devant", hint: "in front of = devant", translation: "There is a park in front of the library." },
];

const questions = [
  {
    question: "What does 'à + le' contract to?",
    options: ["al", "à le", "au", "del"],
    correct: 2,
    explanation: "À and le always contract: à + le = au. Example: Je vais au marché (masculine: le marché).",
  },
  {
    question: "Which preposition is used with feminine countries?",
    options: ["au", "à", "en", "dans"],
    correct: 2,
    explanation: "En is used with feminine countries (most countries ending in -e): en France, en Italie, en Espagne, en Chine.",
  },
  {
    question: "How do you say 'the students' notebooks' (les élèves → des)?",
    options: ["les cahiers du élève", "les cahiers des élèves", "les cahiers de les élèves", "les cahiers aux élèves"],
    correct: 1,
    explanation: "De + les = des. Les cahiers des élèves — the students' notebooks. De + les always contracts to des.",
  },
  {
    question: "What does 'en face de' mean?",
    options: ["next to", "behind", "in front of", "across from / facing"],
    correct: 3,
    explanation: "En face de = across from, facing. La pharmacie est en face de la boulangerie — the pharmacy is across from the bakery.",
  },
  {
    question: "Which preposition is used to go to a masculine country like Canada?",
    options: ["à", "en", "au", "aux"],
    correct: 2,
    explanation: "Masculine countries use au: au Canada, au Japon, au Maroc. Feminine countries use en: en France, en Italie. Plural countries use aux: aux États-Unis.",
  },
  {
    question: "How do you say 'the teacher's book' using de + le?",
    options: ["le livre de le professeur", "le livre du professeur", "le livre de professeur", "le livre au professeur"],
    correct: 1,
    explanation: "De + le = du. Le livre du professeur = the teacher's book. 'De le' never stays as two words — it must contract to 'du.'",
  },
  {
    question: "Where is the dog? 'Le chien est ___ la chaise.' (under)",
    options: ["devant", "derrière", "sous", "dans"],
    correct: 2,
    explanation: "Sous = under/beneath. Le chien est sous la chaise. Compare: devant = in front of, derrière = behind, dans = in/inside.",
  },
  {
    question: "Which sentence correctly uses 'dans'?",
    options: ["Il est dans France.", "Le livre est dans le sac.", "Elle va dans le cinéma.", "Il habite dans Paris."],
    correct: 1,
    explanation: "Dans = in/inside (enclosed space). Le livre est dans le sac = the book is in the bag. For cities, use à (à Paris, not dans Paris). For countries, use en/au/aux.",
  },
];

export default function Unit1Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 1 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Prepositions</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Prepositions tell us where things are and where people go. French has key contractions with à and de that you must know — plus common place prepositions used every day in class.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Key contractions</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">à + le = au · à + les = aux</p>
                <p className="text-[#526173]">Je vais au parc. Il parle aux enfants.</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">de + le = du · de + les = des</p>
                <p className="text-[#526173]">Il vient du Canada. Les cahiers des élèves.</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">Countries</p>
                <p className="text-[#526173]">Feminine: en France, en Italie · Masculine: au Japon, au Canada · Plural: aux États-Unis</p>
              </div>
              <div>
                <p className="font-bold text-[#2563EB]">No contraction with à la / de la</p>
                <p className="text-[#526173]">Je vais à la bibliothèque. Il vient de la boulangerie.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={prepCards} title="Prepositions & contractions" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Preposition phrases" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Fill in the preposition" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Prepositions quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-1/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/school-french-support/unit-1/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
