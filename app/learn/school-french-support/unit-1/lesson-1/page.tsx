import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const nounCards = [
  { front: "le livre", back: "masculine — the book", subtext: "Most nouns ending in a consonant are masculine." },
  { front: "la table", back: "feminine — the table", subtext: "La is used before feminine nouns starting with a consonant." },
  { front: "l'ami", back: "masculine — the friend", subtext: "L' replaces le/la before any vowel sound." },
  { front: "l'école", back: "feminine — the school", subtext: "L' is used here because école starts with é." },
  { front: "les enfants", back: "plural — the children", subtext: "Les is the plural definite article for all genders." },
  { front: "un stylo", back: "masculine — a pen", subtext: "Un is the masculine indefinite article." },
  { front: "une chaise", back: "feminine — a chair", subtext: "Une is the feminine indefinite article." },
  { front: "des cahiers", back: "plural — some notebooks", subtext: "Des is the plural indefinite article." },
  { front: "du pain", back: "some bread (partitive)", subtext: "Du = de + le. Used for uncountable masculine nouns." },
  { front: "de la farine", back: "some flour (partitive)", subtext: "De la is used for uncountable feminine nouns." },
  { front: "de l'eau", back: "some water (partitive)", subtext: "De l' before a vowel: de l'eau, de l'air." },
  { front: "le garçon", back: "masculine — the boy", subtext: "The ç in garçon keeps the soft 's' sound." },
];

const pairs = [
  { left: "le professeur", right: "the teacher (m)" },
  { left: "la maison", right: "the house" },
  { left: "un crayon", right: "a pencil (m)" },
  { left: "une fenêtre", right: "a window (f)" },
  { left: "du lait", right: "some milk (partitive)" },
  { left: "de la musique", right: "some music (partitive)" },
];

const exercises = [
  { before: "J'ai", after: "stylo. (a / masculine)", answer: "un", hint: "masculine indefinite article", translation: "I have a pen." },
  { before: "Où est", after: "bibliothèque? (the / feminine)", answer: "la", hint: "feminine definite article", translation: "Where is the library?" },
  { before: "Il boit", after: "eau. (some — before vowel)", answer: "de l'", hint: "partitive before vowel", translation: "He is drinking some water." },
  { before: "Nous avons", after: "devoirs. (some — plural)", answer: "des", hint: "plural indefinite article", translation: "We have homework." },
  { before: "Elle mange", after: "fromage. (some — masculine)", answer: "du", hint: "partitive masculine: de + le", translation: "She is eating some cheese." },
];

const questions = [
  {
    question: "Which article is used before a feminine noun starting with a consonant?",
    options: ["le", "la", "l'", "les"],
    correct: 1,
    explanation: "La is the feminine singular definite article used before nouns starting with a consonant: la table, la chaise.",
  },
  {
    question: "How do you say 'some water' using the partitive article?",
    options: ["du eau", "de la eau", "de l'eau", "des eau"],
    correct: 2,
    explanation: "Eau starts with a vowel, so de la contracts to de l': de l'eau. The partitive before a vowel is always de l'.",
  },
  {
    question: "Which sentence correctly uses the indefinite article?",
    options: ["Je vois le chat.", "J'ai un problème.", "Nous mangeons la pizza.", "Elle boit du thé."],
    correct: 1,
    explanation: "Un is the masculine indefinite article (a/an). Un problème = a problem. Le/la are definite articles (the).",
  },
  {
    question: "What happens to le and la before a word starting with a vowel?",
    options: ["They stay the same.", "They become les.", "They become l'.", "They become de."],
    correct: 2,
    explanation: "Both le and la contract to l' before a vowel or silent h: l'ami, l'école, l'heure.",
  },
];

export default function Unit1Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 1 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Articles & Gender</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Every French noun has a gender — masculine or feminine. Articles change to match. Master the three article types and you'll never lose points on gender again.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Article types at a glance</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">Definite (the): le / la / l' / les</p>
                <p className="text-[#526173]">le livre, la table, l'ami, les enfants</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">Indefinite (a/some): un / une / des</p>
                <p className="text-[#526173]">un stylo, une chaise, des livres</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">Partitive (some of): du / de la / de l'</p>
                <p className="text-[#526173]">du pain, de la farine, de l'eau</p>
              </div>
              <div>
                <p className="font-bold text-[#2563EB]">Gender tip</p>
                <p className="text-[#526173]">Nouns ending in -tion, -ure, -ence are usually feminine. Nouns ending in -ment, -age, -isme are usually masculine.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={nounCards} title="Nouns with articles" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Articles & nouns" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Fill in the article" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Articles & gender quiz" />
        </div>

        <div className="mt-16 flex items-center justify-end gap-4">
          <Link href="/learn/school-french-support/unit-1/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
