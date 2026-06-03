import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const foodCards = [
  { front: "le pain", back: "bread", subtext: "Le pain est délicieux. — Bread is delicious." },
  { front: "le fromage", back: "cheese", subtext: "La France a over 400 types of fromage!" },
  { front: "le beurre", back: "butter", subtext: "Du beurre sur le pain — butter on bread." },
  { front: "la viande", back: "meat", subtext: "Je n'aime pas la viande. — I don't like meat." },
  { front: "le poulet", back: "chicken", subtext: "Le poulet rôti — roast chicken." },
  { front: "le poisson", back: "fish", subtext: "Le poisson du vendredi — Friday fish." },
  { front: "les légumes", back: "vegetables", subtext: "Plural masculine: les légumes." },
  { front: "les fruits", back: "fruit", subtext: "Les fruits frais — fresh fruit." },
  { front: "la salade", back: "salad", subtext: "Une salade verte — a green salad." },
  { front: "les pâtes", back: "pasta", subtext: "Feminine plural: les pâtes." },
  { front: "le riz", back: "rice", subtext: "Du riz avec du poulet — rice with chicken." },
];

const drinkCards = [
  { front: "l'eau", back: "water", subtext: "L'eau minérale — mineral water. L' because it starts with a vowel." },
  { front: "le lait", back: "milk", subtext: "Un verre de lait — a glass of milk." },
  { front: "le jus", back: "juice", subtext: "Un jus d'orange — an orange juice." },
  { front: "le café", back: "coffee", subtext: "Un café, s'il vous plaît — a coffee, please." },
  { front: "le thé", back: "tea", subtext: "Un thé au citron — lemon tea." },
  { front: "J'ai faim.", back: "I'm hungry.", subtext: "Uses avoir — literally 'I have hunger.'" },
  { front: "J'ai soif.", back: "I'm thirsty.", subtext: "Uses avoir — literally 'I have thirst.'" },
  { front: "Je voudrais…", back: "I would like…", subtext: "Polite way to order: Je voudrais un café." },
  { front: "C'est délicieux!", back: "It's delicious!", subtext: "High praise for French food." },
];

const pairs = [
  { left: "le pain", right: "bread" },
  { left: "le fromage", right: "cheese" },
  { left: "le poulet", right: "chicken" },
  { left: "l'eau", right: "water" },
  { left: "le lait", right: "milk" },
  { left: "les légumes", right: "vegetables" },
];

const exercises = [
  { before: "J'ai", after: ". (hungry)", answer: "faim", hint: "hungry — uses avoir", translation: "I'm hungry." },
  { before: "Je", after: "un jus d'orange. (I would like)", answer: "voudrais", hint: "I would like — polite order", translation: "I'd like an orange juice." },
  { before: "Est-ce que tu aimes le", after: "? (fish)", answer: "poisson", hint: "fish", translation: "Do you like fish?" },
  { before: "Les", after: "sont bons. (vegetables)", answer: "légumes", hint: "vegetables — plural masculine", translation: "The vegetables are good." },
  { before: "Nous mangeons du", after: "avec du riz. (chicken)", answer: "poulet", hint: "chicken", translation: "We're eating chicken with rice." },
];

const questions = [
  {
    question: "'Je voudrais' is used to:",
    options: ["Say you are hungry", "Politely order or request something", "Say you are thirsty", "Ask what someone wants"],
    correct: 1,
    explanation: "Je voudrais (conditional of vouloir) is the polite way to order or request: Je voudrais un café.",
  },
  {
    question: "How do you say 'I'm thirsty' in French?",
    options: ["Je suis soif.", "J'ai soif.", "Je mange soif.", "J'aime soif."],
    correct: 1,
    explanation: "French uses avoir for hunger and thirst: J'ai faim (hungry), j'ai soif (thirsty).",
  },
  {
    question: "What is 'le poisson'?",
    options: ["Chicken", "Beef", "Fish", "Pork"],
    correct: 2,
    explanation: "Le poisson = fish. Le poulet = chicken. La viande = meat (general).",
  },
  {
    question: "Which article is used with 'eau' (water)?",
    options: ["le", "la", "l'", "les"],
    correct: 2,
    explanation: "Eau starts with a vowel, so la becomes l': l'eau. The gender is feminine.",
  },
  {
    question: "How do you say 'I'm hungry' in French?",
    options: ["Je suis faim.", "J'ai faim.", "Je mange faim.", "J'aime faim."],
    correct: 1,
    explanation: "J'ai faim — French uses avoir (have) for hunger, not être (be). Literally 'I have hunger.' Also: j'ai soif = I'm thirsty.",
  },
  {
    question: "What is 'le beurre'?",
    options: ["beer", "bread", "butter", "beef"],
    correct: 2,
    explanation: "Le beurre = butter. It's a false friend for English speakers — beurre looks like 'beer' but means butter. La bière = beer.",
  },
  {
    question: "A student at a café wants to order politely. Which phrase do they use?",
    options: ["Je veux un café.", "Je voudrais un café.", "Je mange un café.", "Donnez un café."],
    correct: 1,
    explanation: "Je voudrais = I would like. It's the conditional of vouloir and is much more polite than Je veux (I want), which sounds blunt in French.",
  },
  {
    question: "What is the gender of 'les pâtes' (pasta)?",
    options: ["Masculine singular", "Feminine singular", "Masculine plural", "Feminine plural"],
    correct: 3,
    explanation: "Les pâtes is feminine plural (les + pâtes, feminine). Always check the article to identify gender and number: le/un = masc., la/une = fem., les = plural.",
  },
];

export default function Unit5Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Food & Drink</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Order food, talk about meals, and express hunger or thirst. Everyday vocabulary you will use in every French-speaking context.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">At a café</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">— Vous désirez?</p>
                <p className="text-[#526173]">What would you like?</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— Je voudrais un café, s'il vous plaît.</p>
                <p className="text-[#526173]">I'd like a coffee, please.</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— Et avec ça?</p>
                <p className="text-[#526173]">Anything else?</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— C'est tout, merci.</p>
                <p className="text-[#526173]">That's all, thanks.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={foodCards} title="Food vocabulary" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={drinkCards} title="Drinks & expressions" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Food & drink" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="At the table" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Food & drink quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-4/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-5/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
