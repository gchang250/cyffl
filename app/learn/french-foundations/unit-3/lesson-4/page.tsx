import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const expressionCards = [
  { front: "J'aime…", back: "I like…", subtext: "[ʒɛm] — Versatile. Use with le/la/les: 'J'aime la musique.' or with an infinitive: 'J'aime danser.' Both work!" },
  { front: "J'adore…", back: "I love…", subtext: "[ʒaˈdɔʁ] — Stronger than j'aime. French people use it freely — saying 'j'adore le chocolat' is perfectly normal, not overdramatic." },
  { front: "J'aime bien…", back: "I quite like…", subtext: "[ʒɛm bjɛ̃] — Softer than j'adore. Confusingly, j'aime bien is LESS strong than j'aime alone. 'Bien' tones it down to 'I quite like, I'm fond of.'" },
  { front: "Je n'aime pas…", back: "I don't like…", subtext: "[ʒə nɛm pa] — Ne contracts to n' before aime (vowel): 'je n'aime pas.' Milder than je déteste. Polite way to express dislike." },
  { front: "Je déteste…", back: "I hate…", subtext: "[ʒə deˈtɛst] — The strongest negative. Use it to express strong dislike. More intense than 'je n'aime pas' — use sparingly in formal settings." },
  { front: "Je préfère…", back: "I prefer…", subtext: "[ʒə pʁeˈfɛʁ] — Use to compare: 'Je préfère A à B' (I prefer A to B). 'Je préfère la musique au sport.' Au = à + le (contraction)." },
];

const hobbyCards = [
  { front: "la musique", back: "music", subtext: "[la myˈzik] — J'adore la musique. Used with aimer/adorer, always with 'la'." },
  { front: "le sport", back: "sport", subtext: "[lə spɔʁ] — Generic 'sport'. For a specific sport: le football, le tennis, la natation." },
  { front: "la lecture", back: "reading", subtext: "[la lɛkˈtyʁ] — From lire (to read). J'aime la lecture = I like reading. Or: J'aime lire (I like to read)." },
  { front: "les films", back: "movies", subtext: "[le film] — Plural. J'adore les films d'action. (I love action movies.) Also: le cinéma (the cinema / movies as art form)." },
  { front: "la cuisine", back: "cooking", subtext: "[la kɥiˈzin] — Both cooking (activity) and kitchen (room). 'J'aime la cuisine française' = I like French cooking." },
  { front: "le dessin", back: "drawing", subtext: "[lə dɛˈsɛ̃] — From dessiner (to draw). Compare: la peinture (painting), l'art (art)." },
  { front: "la danse", back: "dancing", subtext: "[la dɑ̃s] — J'adore la danse. Also: danser (verb) — 'J'aime danser.'" },
  { front: "les jeux vidéo", back: "video games", subtext: "[le ʒø viˈde.o] — Masculine plural. J'aime les jeux vidéo. Note: 'jeu' (one game), 'jeux' (plural — the x is the plural marker)." },
  { front: "le voyage", back: "travel", subtext: "[lə vwaˈjaʒ] — J'adore le voyage. Also: voyager (verb). 'J'aime voyager' = I like to travel." },
  { front: "la natation", back: "swimming", subtext: "[la nataˈsjɔ̃] — Sport/activity noun. Note: jouer au sport vs. faire de la natation (you do/practice swimming, not 'play' it)." },
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
    explanation: "'J'adore' expresses strong love/enthusiasm. 'J'aime bien' is softer — closer to 'I'm fond of.' 'Je préfère' = I prefer (comparatives). 'Je déteste' = I hate. Use j'adore when you genuinely love something.",
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
    explanation: "Negation: ne + verb + pas. 'Aimer' starts with a vowel, so 'ne' contracts to 'n'': je n'aime pas. Always: ne/n' goes immediately before the verb, pas immediately after. The rest of the sentence follows.",
  },
  {
    question: "What's the difference between 'j'aime' and 'j'aime bien'?",
    options: [
      "They mean exactly the same thing.",
      "J'aime bien is stronger than j'aime.",
      "J'aime bien is actually softer — 'I quite like' rather than 'I like'.",
      "J'aime bien is formal, j'aime is casual.",
    ],
    correct: 2,
    explanation: "Counterintuitively, 'j'aime bien' is WEAKER than 'j'aime'. 'Bien' softens the feeling to 'I'm fond of / I quite like.' J'adore > j'aime > j'aime bien — in that order of strength.",
  },
  {
    question: "Your classmate texts you: 'T'aimes la lecture?' What do they want to know?",
    options: [
      "Do you like reading?",
      "Do you love reading?",
      "Have you read it?",
      "Is reading hard?",
    ],
    correct: 0,
    explanation: "'T'aimes' is an ultra-casual contraction of 'tu aimes' — common in texts and speech. 'La lecture' = reading (the activity). A full, slightly more formal version: 'Tu aimes la lecture?'",
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
    explanation: "'Je préfère A à B' = I prefer A to B. When B starts with 'le' (masculine), à + le contracts to 'au': à + le dessin → au dessin. If feminine: 'je préfère la natation à la danse' (no contraction with 'à la').",
  },
  {
    question: "Rank these expressions from most to least positive: j'adore, je n'aime pas, j'aime bien, je déteste",
    options: [
      "j'adore > j'aime bien > je n'aime pas > je déteste",
      "j'aime bien > j'adore > je n'aime pas > je déteste",
      "je déteste > je n'aime pas > j'aime bien > j'adore",
      "j'adore > je n'aime pas > j'aime bien > je déteste",
    ],
    correct: 0,
    explanation: "From most to least positive: j'adore (love) > j'aime > j'aime bien (quite like) > je n'aime pas (don't like) > je déteste (hate). Knowing this spectrum helps you express exactly how you feel.",
  },
  {
    question: "How does 'aimer' conjugate for 'il/elle'?",
    options: ["il aime", "il aimes", "il aimons", "il aimez"],
    correct: 0,
    explanation: "Il/elle → aime. -er verbs follow the pattern: je -e, tu -es, il/elle -e. The endings for je, il, and elle all sound identical — 'aime' — but are spelled differently for tu (aimes).",
  },
  {
    question: "You want to say 'I quite like travel.' Which expression fits best?",
    options: ["J'adore le voyage.", "Je déteste le voyage.", "J'aime bien le voyage.", "Je n'aime pas le voyage."],
    correct: 2,
    explanation: "'J'aime bien' = I quite like / I'm fond of. It's softer than 'j'adore' (I love it!) but positive. Perfect for moderate enthusiasm. 'J'aime le voyage' would also work — 'bien' just softens it slightly.",
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
