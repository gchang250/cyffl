import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const strategyCards = [
  { front: "Read the title first", back: "The title tells you the topic before you read a single word. Use it to activate any vocabulary you already know.", subtext: "Example: 'Les vacances en France' → think: travel, summer, regions, activities." },
  { front: "Identify cognates", back: "Words that look similar to English often share meaning. These are your free vocabulary!", subtext: "Example: musique (music), économique (economic), université (university), important (important)." },
  { front: "Look for repeated words", back: "Words that appear many times are probably the key ideas of the text. They are worth prioritising.", subtext: "If you see 'école' five times, the text is probably about school." },
  { front: "Use context clues", back: "Guess the meaning of unknown words from what comes before and after them.", subtext: "Il a mangé une pomme rouge et juteuse. → Even without knowing juteuse, you can guess it describes the apple." },
  { front: "Read the questions first", back: "If there are comprehension questions, read them before the text. They tell you what to look for.", subtext: "You will read the text more efficiently if you already know what information you need." },
  { front: "Identify the text type", back: "Is it a story (narrative)? A description? An argument or opinion piece? Each type has its own language.", subtext: "Narratives have time markers (d'abord, ensuite). Arguments have opinion phrases (selon moi, il est clair que)." },
  { front: "Word family strategy", back: "Use root words to decode unknowns: if you know 'travailler' (to work), you can guess 'travailleur' (worker) and 'travail' (work).", subtext: "French words in the same family often share their first 4-5 letters." },
  { front: "Don't translate word-for-word", back: "Focus on getting the overall meaning, not translating every word. Aim for understanding, not perfection.", subtext: "Reading for gist is a skill — accept that some words will remain unclear and keep moving." },
];

const pairs = [
  { left: "librairie", right: "bookshop (not library)" },
  { left: "sensible", right: "sensitive (not sensible)" },
  { left: "journée", right: "day (not journey)" },
  { left: "actuel", right: "current/present (not actual)" },
  { left: "car", right: "because (not car/vehicle)" },
  { left: "rester", right: "to stay (not to rest)" },
  { left: "large", right: "wide/broad (not large in size)" },
  { left: "prétendre", right: "to claim/assert (not to pretend)" },
];

const exercises = [
  { before: "Le titre d'un texte vous donne des", after: "sur le sujet principal. (context clues — fill in the French word for 'clues')", answer: "indices", hint: "The French word for 'clues' or 'hints' is 'indices'.", translation: "The title of a text gives you clues about the main topic." },
  { before: "Les mots qui ressemblent à des mots anglais s'appellent des", after: ". (cognates)", answer: "congénères", hint: "The term for words similar across languages is 'congénères' or 'mots apparentés'.", translation: "Words that resemble English words are called cognates." },
  { before: "Un mot répété plusieurs fois est probablement une", after: "importante du texte. (key idea)", answer: "idée", hint: "The French word for 'idea' is 'idée'.", translation: "A word repeated several times is probably an important idea in the text." },
  { before: "Avant de lire le texte, lisez d'abord les", after: "de compréhension. (questions)", answer: "questions", hint: "Questions is the same in French!", translation: "Before reading the text, first read the comprehension questions." },
  { before: "Une librairie est un magasin qui vend des livres, pas une", after: ". (library — French word)", answer: "bibliothèque", hint: "The French word for library is 'bibliothèque'.", translation: "A librairie is a bookshop that sells books, not a library." },
];

const questions = [
  {
    question: "What does 'librairie' mean in French?",
    options: ["library", "bookshop", "magazine", "classroom"],
    correct: 1,
    explanation: "Librairie = bookshop (a shop that sells books). A library (where you borrow books) is a bibliothèque in French.",
  },
  {
    question: "What is a cognate?",
    options: ["A false friend", "A word that looks and means the same (or similar) in two languages", "A grammar rule", "A reading strategy"],
    correct: 1,
    explanation: "Cognates are words that are similar in form and meaning across languages: musique/music, important/important, université/university.",
  },
  {
    question: "What does 'actuel' mean in French?",
    options: ["actual", "active", "current/present", "real"],
    correct: 2,
    explanation: "'Actuel' is a faux ami (false friend). It means 'current' or 'present' in French, NOT 'actual'. 'Actual' in English = 'réel' or 'vrai' in French.",
  },
  {
    question: "Which reading strategy involves using what's around an unknown word to guess its meaning?",
    options: ["Reading the title first", "Identifying text type", "Using context clues", "Reading questions first"],
    correct: 2,
    explanation: "Context clues means using the surrounding sentence to deduce the meaning of an unknown word, without needing a dictionary.",
  },
];

export default function Unit6Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#854D0E]">Unit 6 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Reading Strategies</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              You don&apos;t need to understand every single word in a French text to answer questions correctly. Good readers use strategies: read the title and images first, identify cognates, notice which words repeat, use context clues, read the questions before the text, and identify the text type. These strategies together can unlock a text you&apos;d otherwise find impossible.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common faux amis (false cognates)</p>
            <div className="mt-3 space-y-1.5 text-xs">
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">librairie</span><span className="text-[#526173]">bookshop (≠ library)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">sensible</span><span className="text-[#526173]">sensitive (≠ sensible)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">journée</span><span className="text-[#526173]">day (≠ journey)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">actuel</span><span className="text-[#526173]">current (≠ actual)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">car</span><span className="text-[#526173]">because (≠ car)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">rester</span><span className="text-[#526173]">to stay (≠ to rest)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">large</span><span className="text-[#526173]">wide/broad (≠ large)</span></div>
              <div className="flex justify-between"><span className="font-bold text-[#854D0E]">prétendre</span><span className="text-[#526173]">to claim (≠ to pretend)</span></div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={strategyCards} title="Reading strategies" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-lg">Vocabulary building tip</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            When you see an unknown word, attack it with three tools in order: <strong className="text-white">(1) Context</strong> — what do the surrounding words suggest? <strong className="text-white">(2) Word family</strong> — do you recognise the root? (e.g. <em>travail</em> → <em>travailler</em> → <em>travailleur</em>). <strong className="text-white">(3) Cognates</strong> — does it look like an English or Spanish word? Using all three together, you can often decode a word without a dictionary.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Faux ami → actual meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Apply reading strategies" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Reading strategies quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-5/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Unit 5 Test</Link>
          <Link href="/learn/school-french-support/unit-6/lesson-2" className="rounded-full bg-[#854D0E] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#713D0A]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
