import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const familyCards = [
  { front: "la famille", back: "the family", subtext: "[la faˈmij] — 'Dans ma famille, nous sommes quatre.' (In my family, there are four of us.) A very common expression." },
  { front: "la mère", back: "mother / mom", subtext: "[la mɛʁ] — Informal: la maman [maˈmɑ̃]. 'Ma mère s'appelle Sophie.' Use 'ma' (my) not 'mon' — mère is feminine." },
  { front: "le père", back: "father / dad", subtext: "[lə pɛʁ] — Informal: le papa [paˈpa]. 'Mon père travaille à Lyon.' Use 'mon' (my) — père is masculine." },
  { front: "le frère", back: "brother", subtext: "[lə fʁɛʁ] — 'J'ai un frère.' (I have a brother.) Opposite: la sœur. Common mix-up: frère ≠ sœur." },
  { front: "la sœur", back: "sister", subtext: "[la sœʁ] — The oe ligature (œ) is unique to French. 'J'ai deux sœurs.' (I have two sisters.)" },
  { front: "les parents", back: "parents (or relatives)", subtext: "[le paˈʁɑ̃] — Means parents AND more broadly relatives/family. Context determines which. 'Mes parents sont à Québec.'" },
  { front: "le fils", back: "son", subtext: "[lə fis] — The final 's' IS pronounced (unlike most French 's'). Watch out: 'fils' sounds like 'fiss', not 'fee'." },
  { front: "la fille", back: "daughter / girl", subtext: "[la fij] — Two meanings: daughter (when talking about family) or girl in general. 'J'ai une fille et un fils.'" },
  { front: "le grand-père", back: "grandfather", subtext: "[lə ɡʁɑ̃ pɛʁ] — Plural: les grands-pères. 'Mon grand-père a soixante-dix ans.'" },
  { front: "la grand-mère", back: "grandmother", subtext: "[la ɡʁɑ̃ mɛʁ] — Informal: la mamie or la mémé. Plural: les grand-mères (no -s on grand here)." },
  { front: "l'oncle", back: "uncle", subtext: "[lɔ̃kl] — Masculine, so l'oncle (not la). 'J'ai un oncle qui habite à Paris.'" },
  { front: "la tante", back: "aunt", subtext: "[la tɑ̃t] — Feminine. 'Ma tante s'appelle Claire.' Uncle + aunt together: 'un oncle et une tante.'" },
  { front: "le cousin / la cousine", back: "cousin (m. / f.)", subtext: "[lə kuzɛ̃ / la kuzin] — Regular gender pattern: add -e for feminine. 'Mon cousin Marc' / 'ma cousine Léa.'" },
  { front: "l'ami / l'amie", back: "friend (m. / f.)", subtext: "[laˈmi / laˈmi] — Both sound identical! Only spelling differs. 'Mon ami' (masc.) / 'mon amie' (fem.) — note: 'mon' before both because amie starts with a vowel." },
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
    question: "You want to say 'I have two sisters' in French. Which is correct?",
    options: [
      "J'ai deux frères.",
      "J'ai deux sœurs.",
      "J'ai deux filles.",
      "J'ai deux tantes.",
    ],
    correct: 1,
    explanation: "La sœur = sister → deux sœurs. Frère = brother, fille = daughter/girl (not specifically sister), tante = aunt. The oe ligature (œ) is a hallmark of French — watch the spelling.",
  },
  {
    question: "Your teacher points to a student and says 'C'est la fille de mon ami.' What does 'la fille' mean here?",
    options: ["the sister", "the aunt", "the daughter", "the grandmother"],
    correct: 2,
    explanation: "In family context, 'la fille' means daughter. 'La fille de mon ami' = my friend's daughter. 'La fille' can also mean 'the girl' in other contexts — meaning depends on situation.",
  },
  {
    question: "You're talking about your grandfather. Which word do you use?",
    options: ["le fils", "l'oncle", "le grand-père", "le cousin"],
    correct: 2,
    explanation: "Le grand-père = grandfather. La grand-mère = grandmother. Note: in the plural, the spelling is 'les grands-pères' (grand takes an -s). But 'les grand-mères' — no -s on grand.",
  },
  {
    question: "You're referring to your female friend. Which form is correct?",
    options: ["l'ami", "l'amie", "la cousine", "la sœur"],
    correct: 1,
    explanation: "'L'amie' is the feminine form. Both l'ami and l'amie sound identical — the difference is only in writing. Both use 'mon' before them (not 'ma') because they start with a vowel: 'mon amie'.",
  },
  {
    question: "How do you say 'I have an aunt and an uncle' in French?",
    options: ["J'ai une tante et un cousin.", "J'ai une tante et un oncle.", "J'ai un tante et une oncle.", "J'ai la tante et l'oncle."],
    correct: 1,
    explanation: "Tante (aunt) is feminine → une tante. Oncle (uncle) is masculine → un oncle. Note: un oncle (not l'oncle) because we're introducing them for the first time (indefinite article).",
  },
  {
    question: "What is the male equivalent of 'la cousine'?",
    options: ["le cousin", "le cousine", "l'oncle", "le frère"],
    correct: 0,
    explanation: "La cousine (female cousin) → le cousin (male cousin). Regular pattern: feminine adds -e, masculine drops it. Compare: frère/sœur (different words entirely — irregular).",
  },
  {
    question: "'Dans ma famille, nous sommes cinq.' What does this mean?",
    options: ["My family has five children.", "There are five of us in my family.", "My family is from five countries.", "I have five cousins."],
    correct: 1,
    explanation: "'Nous sommes [number]' = there are [number] of us. 'Dans ma famille, nous sommes cinq' = In my family, there are five of us. This is the standard way to say how many people are in a family.",
  },
  {
    question: "How do you say 'My grandmother's name is Marie'?",
    options: ["Ma grand-mère s'appelle Marie.", "Mon grand-mère s'appelle Marie.", "Ma grand-père s'appelle Marie.", "La grand-mère appelle Marie."],
    correct: 0,
    explanation: "Grand-mère is feminine → 'ma grand-mère' (not 'mon'). Use 's'appelle' for names. 'La grand-mère appelle' would mean 'the grandmother is calling (someone)' — a very different meaning.",
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
          <p className="mt-1 text-[#526173]">Fourteen family members — flip each card. IPA pronunciation and usage notes on the back.</p>
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
