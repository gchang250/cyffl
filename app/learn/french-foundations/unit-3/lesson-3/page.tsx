import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const familyCards = [
  { front: "la famille", back: "the family" },
  { front: "la mère", back: "mother / mom", subtext: "Informal: la maman" },
  { front: "le père", back: "father / dad", subtext: "Informal: le papa" },
  { front: "le frère", back: "brother" },
  { front: "la sœur", back: "sister" },
  { front: "les parents", back: "parents (or relatives)", subtext: "les parents = parents / parents can also mean relatives in context." },
  { front: "le fils", back: "son" },
  { front: "la fille", back: "daughter / girl" },
  { front: "le grand-père", back: "grandfather" },
  { front: "la grand-mère", back: "grandmother" },
  { front: "l'oncle", back: "uncle" },
  { front: "la tante", back: "aunt" },
  { front: "le cousin / la cousine", back: "cousin (m. / f.)" },
  { front: "l'ami / l'amie", back: "friend (m. / f.)" },
];

const matchPairs = [
  { left: "la mère", right: "mother" },
  { left: "le père", right: "father" },
  { left: "le frère", right: "brother" },
  { left: "la sœur", right: "sister" },
  { left: "le fils", right: "son" },
  { left: "la fille", right: "daughter" },
  { left: "le grand-père", right: "grandfather" },
  { left: "la grand-mère", right: "grandmother" },
];

const fillIn = [
  {
    before: "J'ai un",
    after: "et une sœur.",
    answer: "frère",
    hint: "brother",
    translation: "I have a brother and a sister.",
  },
  {
    before: "Ma",
    after: "s'appelle Sophie.",
    answer: "mère",
    hint: "mother",
    translation: "My mother's name is Sophie.",
  },
  {
    before: "Mon",
    after: "a soixante ans.",
    answer: "grand-père",
    hint: "grandfather",
    translation: "My grandfather is sixty years old.",
  },
  {
    before: "Elle est ma meilleure",
    after: ".",
    answer: "amie",
    hint: "friend (feminine)",
    translation: "She is my best friend.",
  },
];

const quiz = [
  {
    question: "How do you say 'I have two sisters' in French?",
    options: [
      "J'ai deux frères.",
      "J'ai deux sœurs.",
      "J'ai deux filles.",
      "J'ai deux tantes.",
    ],
    correct: 1,
    explanation: "La sœur = sister. Deux sœurs = two sisters. Careful: frère = brother, fille = girl/daughter.",
  },
  {
    question: "What does 'la fille' mean?",
    options: ["sister", "aunt", "daughter or girl", "grandmother"],
    correct: 2,
    explanation: "La fille means both 'daughter' and 'girl' depending on context. La sœur = sister.",
  },
  {
    question: "How do you describe your grandfather in French?",
    options: ["le fils", "l'oncle", "le grand-père", "le cousin"],
    correct: 2,
    explanation: "Le grand-père = grandfather. Grand-mère = grandmother.",
  },
  {
    question: "Your friend (female) in French is…",
    options: ["l'ami", "l'amie", "la cousine", "la sœur"],
    correct: 1,
    explanation: "l'amie is the feminine form of friend. l'ami is masculine.",
  },
  {
    question: "How do you say 'I have an aunt and an uncle' in French?",
    options: ["J'ai une tante et un cousin.", "J'ai une tante et un oncle.", "J'ai un tante et une oncle.", "J'ai la tante et l'oncle."],
    correct: 1,
    explanation: "La tante (aunt) is feminine → une tante. L'oncle (uncle) is masculine → un oncle. Getting article gender right is essential.",
  },
  {
    question: "What is the male equivalent of 'la cousine'?",
    options: ["le cousin", "le cousine", "l'oncle", "le frère"],
    correct: 0,
    explanation: "La cousine (female cousin) → le cousin (male cousin). This is a regular pattern: add -e for feminine, remove it for masculine.",
  },
  {
    question: "'Dans ma famille, nous sommes quatre.' What does this mean?",
    options: ["My family has four children.", "There are four of us in my family.", "My family is from four places.", "I have four grandparents."],
    correct: 1,
    explanation: "'Nous sommes quatre' literally means 'we are four' — used to say how many people are in a family. A very common expression.",
  },
  {
    question: "How do you say 'My grandmother's name is Marie'?",
    options: ["Ma grand-mère s'appelle Marie.", "Mon grand-mère s'appelle Marie.", "Ma grand-père s'appelle Marie.", "La grand-mère appelle Marie."],
    correct: 0,
    explanation: "Grand-mère is feminine → 'ma grand-mère.' Use 's'appelle' (she calls herself) to give someone's name.",
  },
];

export default function Unit3Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 3 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Family
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Talk about your family in French, who they are, how many there
              are, and what they're called.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-xs font-bold text-[#526173]">Sample description</p>
            <div className="mt-3 space-y-1.5">
              <p className="font-black">Dans ma famille, nous sommes cinq.</p>
              <p className="font-black">J'ai un frère et deux sœurs.</p>
              <p className="font-black">Mon père s'appelle Jean.</p>
              <p className="mt-3 text-sm text-[#526173]">
                In my family, there are five of us. I have a brother and two sisters. My dad's name is Jean.
              </p>
            </div>
          </div>
        </div>

        {/* Gender note */}
        <div className="mt-8 rounded-2xl bg-[#FEF3C7] p-5">
          <p className="font-black text-[#92400E]">🧑‍🤝‍🧑 Gender matters</p>
          <p className="mt-2 leading-7 text-[#78350F]">
            French nouns have gender. Most female family members use{" "}
            <strong>la / une</strong> (la mère, la sœur), while male ones use{" "}
            <strong>le / un</strong> (le père, le frère). Cousins change ending
            too: le cousin → la cousine.
          </p>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Family vocabulary</h2>
          <p className="mt-1 text-[#526173]">Fourteen words, flip each card.</p>
          <div className="mt-6">
            <FlashCardDeck cards={familyCards} title="La famille" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Connect each family member to their English name.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Family matching" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each sentence about family.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Family sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions on family vocabulary.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Family quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">
            You can describe your family in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Last lesson: how to talk about what you like and dislike, one of
            the most useful skills in any language.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-3/lesson-2"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-3/lesson-4"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Final lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
