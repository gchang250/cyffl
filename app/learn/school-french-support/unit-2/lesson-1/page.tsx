import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const erVerbCards = [
  { front: "parler", back: "to speak — je parle", subtext: "Remove -er → parl-, add endings: -e, -es, -e, -ons, -ez, -ent." },
  { front: "manger", back: "to eat — je mange", subtext: "Nous mangeons — keep the -e before -ons to preserve the soft g." },
  { front: "aimer", back: "to like/love — j'aime", subtext: "J'aime le français. — I like French." },
  { front: "habiter", back: "to live (somewhere) — j'habite", subtext: "J'habite à Montréal. — I live in Montréal." },
  { front: "travailler", back: "to work — je travaille", subtext: "Mes parents travaillent beaucoup. — My parents work a lot." },
  { front: "regarder", back: "to watch/look at — je regarde", subtext: "Nous regardons la télé. — We watch TV." },
  { front: "écouter", back: "to listen to — j'écoute", subtext: "Ils écoutent de la musique. — They listen to music." },
  { front: "chercher", back: "to look for — je cherche", subtext: "Je cherche mon cahier. — I'm looking for my notebook." },
  { front: "trouver", back: "to find — je trouve", subtext: "Tu trouves ça facile? — Do you find that easy?" },
  { front: "commencer", back: "to start — je commence", subtext: "Le cours commence à 8h. — Class starts at 8 o'clock." },
];

const pairs = [
  { left: "je parle", right: "I speak" },
  { left: "tu manges", right: "you eat" },
  { left: "il habite", right: "he lives" },
  { left: "nous aimons", right: "we like" },
  { left: "vous travaillez", right: "you work (pl)" },
  { left: "elles regardent", right: "they watch (f)" },
];

const exercises = [
  { before: "Nous", after: "le français ensemble. (to speak)", answer: "parlons", hint: "parler → nous parlons", translation: "We speak French together." },
  { before: "Tu", after: "du sport chaque jour. (to like)", answer: "aimes", hint: "aimer → tu aimes", translation: "You like sport every day." },
  { before: "Ils ne", after: "pas ici. (to live — negation)", answer: "habitent", hint: "habiter → ils habitent. ne...pas around verb", translation: "They don't live here." },
  { before: "Elle", after: "la radio le matin. (to listen to)", answer: "écoute", hint: "écouter → elle écoute", translation: "She listens to the radio in the morning." },
  { before: "Vous", after: "à quelle heure? (to start)", answer: "commencez", hint: "commencer → vous commencez", translation: "What time do you (all) start?" },
];

const questions = [
  {
    question: "Which ending is used for the 'ils/elles' form of -er verbs?",
    options: ["-e", "-ez", "-ons", "-ent"],
    correct: 3,
    explanation: "The ils/elles ending for all -er verbs is -ent: ils parlent, elles mangent, ils regardent. The -ent is silent.",
  },
  {
    question: "Why is it 'nous mangeons' and not 'nous mangons'?",
    options: ["Manger is irregular.", "The -e is kept to preserve the soft g sound.", "Aller is used instead.", "Nous always adds -eons."],
    correct: 1,
    explanation: "In French, g before o/a/u is hard. Adding -e before -ons keeps the g soft: nous mangeons (not mangons).",
  },
  {
    question: "How do you say 'They don't watch TV' in French?",
    options: ["Ils regardent pas la télé.", "Ils ne regardent pas la télé.", "Ils ne pas regardent la télé.", "Ils regardent ne la télé pas."],
    correct: 1,
    explanation: "Negation wraps the conjugated verb: ne + verb + pas. Ils ne regardent pas la télé.",
  },
  {
    question: "What is the 'vous' form of 'travailler'?",
    options: ["vous travaillent", "vous travaillez", "vous travaillons", "vous travaillas"],
    correct: 1,
    explanation: "The vous form of -er verbs always ends in -ez: vous travaillez, vous parlez, vous aimez.",
  },
  {
    question: "What is the 'je' form of 'commencer'?",
    options: ["je commencent", "je commences", "je commence", "je commençons"],
    correct: 2,
    explanation: "Je form of -er verbs: remove -er, add -e. Je commence. The -e ending is silent — je, il, and elle forms all sound the same: commence.",
  },
  {
    question: "How do you say 'I'm looking for my pen'?",
    options: ["Je cherche mon stylo.", "Je cherches mon stylo.", "Je cherchez mon stylo.", "Je cherchons mon stylo."],
    correct: 0,
    explanation: "Je + chercher → je cherche. Remove -er, add -e. My pen = mon stylo (stylo is masculine).",
  },
  {
    question: "Why do we write 'nous mangeons' and not 'nous mangons'?",
    options: ["Manger is an irregular verb.", "The -e is kept before -ons to preserve the soft 'g' sound.", "All -er verbs insert an -e before -ons.", "Because manger ends in -ger, not -er."],
    correct: 1,
    explanation: "In French, g before 'o' becomes hard (like the g in 'go'). Adding -e keeps the g soft: nous mangeons. This applies to all -ger verbs: nous nageons, nous voyageons.",
  },
  {
    question: "A student writes 'ils trouvent.' Is this correct?",
    options: ["No — it should be ils trouvez.", "No — it should be ils trouve.", "Yes — ils/elles form of -er verbs ends in -ent.", "No — it should be ils trouventent."],
    correct: 2,
    explanation: "Ils/elles + -er verb = -ent ending. Ils trouvent is correct. The -ent ending is completely silent in spoken French.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Unit 2 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Regular -er Verbs</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Most French verbs end in -er, making this the most important conjugation pattern to learn. Master the six endings and you'll unlock hundreds of verbs at once.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">-er verb endings (parler)</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">je parl<span className="text-[#D97706]">e</span></p>
                <p className="font-bold text-[#0B1F3A]">tu parl<span className="text-[#D97706]">es</span></p>
                <p className="font-bold text-[#0B1F3A]">il/elle parl<span className="text-[#D97706]">e</span></p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">nous parl<span className="text-[#D97706]">ons</span></p>
                <p className="font-bold text-[#0B1F3A]">vous parl<span className="text-[#D97706]">ez</span></p>
                <p className="font-bold text-[#0B1F3A]">ils/elles parl<span className="text-[#D97706]">ent</span></p>
              </div>
            </div>
            <div className="mt-4 border-t border-[#E7DAB9] pt-3">
              <p className="text-xs font-bold text-[#526173]">Negation: ne + verb + pas</p>
              <p className="text-xs text-[#526173] mt-1">Je ne parle pas espagnol. — I don't speak Spanish.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={erVerbCards} title="Common -er verbs" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="-er verb conjugations" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Conjugate the -er verb" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="-er verbs quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-1/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Unit 1 Test</Link>
          <Link href="/learn/school-french-support/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
