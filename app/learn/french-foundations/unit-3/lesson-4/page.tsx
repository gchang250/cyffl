import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const expressionCards = [
  { front: "J'aime…", back: "I like…", subtext: "Versatile, works for most things you enjoy." },
  { front: "J'adore…", back: "I love…", subtext: "Stronger than j'aime, really love it!" },
  { front: "Je n'aime pas…", back: "I don't like…", subtext: "ne + aime + pas → n'aime before a vowel." },
  { front: "Je déteste…", back: "I hate…", subtext: "Strong, use sparingly." },
  { front: "J'aime bien…", back: "I like (quite)…", subtext: "Softer than j'adore, 'I quite like.'" },
  { front: "Je préfère…", back: "I prefer…", subtext: "Use to compare: Je préfère la musique au sport." },
];

const hobbyCards = [
  { front: "la musique", back: "music" },
  { front: "le sport", back: "sport" },
  { front: "la lecture", back: "reading" },
  { front: "les films", back: "movies" },
  { front: "la cuisine", back: "cooking" },
  { front: "le dessin", back: "drawing" },
  { front: "la danse", back: "dancing" },
  { front: "les jeux vidéo", back: "video games" },
  { front: "le voyage", back: "travel" },
  { front: "la natation", back: "swimming" },
];

const matchPairs = [
  { left: "J'aime", right: "I like" },
  { left: "J'adore", right: "I love" },
  { left: "Je n'aime pas", right: "I don't like" },
  { left: "Je déteste", right: "I hate" },
  { left: "Je préfère", right: "I prefer" },
  { left: "J'aime bien", right: "I quite like" },
];

const fillIn = [
  {
    before: "J'",
    after: "la musique.",
    answer: "adore",
    hint: "I love (stronger than aimer)",
    translation: "I love music.",
  },
  {
    before: "Je",
    after: "pas les maths.",
    answer: "n'aime",
    hint: "I don't like (before a vowel!)",
    translation: "I don't like math.",
  },
  {
    before: "Je",
    after: "le sport au cinéma.",
    answer: "préfère",
    hint: "I prefer",
    translation: "I prefer sport to movies.",
  },
  {
    before: "Tu",
    after: "les jeux vidéo?",
    answer: "aimes",
    hint: "you like (aimer conjugated for tu)",
    translation: "Do you like video games?",
  },
];

const quiz = [
  {
    question: "How do you say 'I love music' in French?",
    options: ["Je préfère la musique.", "J'aime bien la musique.", "J'adore la musique.", "Je déteste la musique."],
    correct: 2,
    explanation: "J'adore expresses strong love. J'aime bien is softer ('I quite like').",
  },
  {
    question: "How do you say 'I don't like cooking'?",
    options: [
      "Je ne aime pas la cuisine.",
      "J'aime la cuisine pas.",
      "Je n'aime pas la cuisine.",
      "Je pas aime la cuisine.",
    ],
    correct: 2,
    explanation: "Ne + aimer + pas. Before a vowel (aimer), ne → n'. So: je n'aime pas.",
  },
  {
    question: "What's the difference between 'j'aime' and 'j'adore'?",
    options: [
      "They mean the same thing.",
      "J'adore is stronger, it means love.",
      "J'aime is stronger.",
      "J'adore is formal, j'aime is casual.",
    ],
    correct: 1,
    explanation: "J'adore (I love) is more intense than j'aime (I like). Use adore when you really mean it!",
  },
  {
    question: "How do you ask your friend 'Do you like reading?'",
    options: [
      "Tu aimes la lecture?",
      "Vous aimez la lecture?",
      "J'aime la lecture?",
      "Il aime la lecture?",
    ],
    correct: 0,
    explanation: "Tu aimes is the informal 'you like', right for asking a friend. Vous aimez would be formal.",
  },
  {
    question: "How do you say 'I prefer swimming to drawing'?",
    options: [
      "Je préfère la natation au dessin.",
      "Je préfère la natation à le dessin.",
      "Je préfère la natation de dessin.",
      "Je préfère la natation plus dessin.",
    ],
    correct: 0,
    explanation: "Je préfère A à B = I prefer A to B. When B is masculine (le dessin), à + le = au. So: je préfère la natation au dessin.",
  },
  {
    question: "Which sentence is the most negative — expressing strong dislike?",
    options: ["J'aime bien le foot.", "Je n'aime pas le foot.", "Je préfère le foot.", "Je déteste le foot."],
    correct: 3,
    explanation: "Je déteste = I hate. It's the strongest negative expression. Je n'aime pas is milder (I don't like), and je déteste is much stronger.",
  },
  {
    question: "How does 'aimer' change for the 'il/elle' form?",
    options: ["il aime", "il aimes", "il aimons", "il aimez"],
    correct: 0,
    explanation: "Il/elle + aimer → il aime / elle aime. The -er verb ending for il/elle is -e. Je, il, and elle all share the same sound: aime (the ending is silent).",
  },
  {
    question: "You want to say 'I quite like travel.' Which expression fits best?",
    options: ["J'adore le voyage.", "Je déteste le voyage.", "J'aime bien le voyage.", "Je n'aime pas le voyage."],
    correct: 2,
    explanation: "J'aime bien = I quite like / I like. It's softer than J'adore (I love) but more positive than J'aime (I like). Perfect for expressing moderate enjoyment.",
  },
];

export default function Unit3Lesson4Page() {
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
              Unit 3 · Lesson 4
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Likes & Dislikes
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Talk about what you love, what you hate, and everything in
              between, one of the most natural ways to connect in any language.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-xs font-bold text-[#526173]">Sample conversation</p>
            <div className="mt-3 space-y-2">
              <p className="font-black">Tu aimes le sport?</p>
              <p className="text-sm text-[#526173]">Do you like sport?</p>
              <p className="font-black">J'adore le football! Mais je n'aime pas la natation.</p>
              <p className="text-sm text-[#526173]">I love soccer! But I don't like swimming.</p>
              <p className="font-black">Moi, je préfère la musique.</p>
              <p className="text-sm text-[#526173]">Me, I prefer music.</p>
            </div>
          </div>
        </div>

        {/* Expressions flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Expressions</h2>
          <p className="mt-1 text-[#526173]">Six key phrases from love to hate.</p>
          <div className="mt-6">
            <FlashCardDeck cards={expressionCards} title="Likes and dislikes" />
          </div>
        </section>

        {/* Hobbies flashcards */}
        <section className="mt-12">
          <h2 className="text-2xl font-black">Hobbies & activities</h2>
          <p className="mt-1 text-[#526173]">Ten vocabulary words to use with your expressions.</p>
          <div className="mt-6">
            <FlashCardDeck cards={hobbyCards} title="Activities" />
          </div>
        </section>

        {/* Match */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the expressions</h2>
          <p className="mt-1 text-[#526173]">Connect each French expression to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Expressions" />
          </div>
        </section>

        {/* Fill in */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Complete each sentence with the right expression or conjugation.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Likes and dislikes in sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions, finish strong.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Final quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">
            Unit 3 complete!
          </p>
          <h2 className="mt-3 text-3xl font-black">
            You know numbers, calendar vocab, family, and how to express opinions.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Test yourself on all of Unit 3 before moving on to Unit 4.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-3/lesson-3"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-3/test"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Take the unit test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
