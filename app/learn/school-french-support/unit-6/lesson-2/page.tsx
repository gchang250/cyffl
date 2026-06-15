import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const vocabCards = [
  { front: "se lever", back: "to get up: Je me lève à sept heures.", subtext: "Reflexive verb: the subject does the action to themselves." },
  { front: "le petit-déjeuner", back: "breakfast: Je prends mon petit-déjeuner à sept heures et demie.", subtext: "Literally 'little lunch'. Le déjeuner = lunch, le dîner = dinner." },
  { front: "le cours", back: "lesson / class: Le cours commence à huit heures.", subtext: "Les cours = classes (plural). Not to confuse with la cour = schoolyard." },
  { front: "la récréation", back: "break / recess: Nous avons une récréation à dix heures.", subtext: "Often shortened to 'la récré' in informal speech." },
  { front: "la matière", back: "school subject: Quelle est ta matière préférée?", subtext: "Les matières = school subjects in general." },
  { front: "la cantine", back: "school canteen: Je mange à la cantine le jeudi.", subtext: "Most French schools have a cafeteria-style canteen." },
  { front: "rentrer", back: "to go home / return: Je rentre chez moi à seize heures.", subtext: "Different from retourner (to go back somewhere) and revenir (to come back)." },
  { front: "faire ses devoirs", back: "to do one's homework: Je fais mes devoirs après le dîner.", subtext: "Les devoirs = homework. Plural even when it's one assignment." },
];

const pairs = [
  { left: "se lever", right: "to get up" },
  { left: "le petit-déjeuner", right: "breakfast" },
  { left: "la récréation", right: "break / recess" },
  { left: "la matière", right: "school subject" },
  { left: "la cantine", right: "school canteen" },
  { left: "faire ses devoirs", right: "to do homework" },
];

const questions = [
  {
    question: "According to Text A, what time does the student wake up?",
    options: ["Six o'clock", "Half past six", "Seven o'clock", "Half past seven"],
    correct: 1,
    explanation: "The text says 'Je me lève à six heures et demie': half past six.",
  },
  {
    question: "What does the student in Text A eat for breakfast?",
    options: ["Cereal and orange juice", "Toast with jam and hot chocolate", "Croissants and coffee", "Yoghurt and fruit"],
    correct: 1,
    explanation: "The text states 'Je mange des tartines avec de la confiture et je bois un chocolat chaud': toast with jam and hot chocolate.",
  },
  {
    question: "According to Text B, what is the student's favourite subject?",
    options: ["History", "Maths", "Science", "French"],
    correct: 2,
    explanation: "The text says 'ma matière préférée, c'est les sciences': science is the favourite subject.",
  },
  {
    question: "In Text B, where does the student eat lunch?",
    options: ["At home", "In a restaurant", "At the school canteen", "In the classroom"],
    correct: 2,
    explanation: "The text says 'je mange à la cantine avec mes amis': the student eats at the school canteen with friends.",
  },
  {
    question: "What does 'la récréation' mean, and what is its informal shortened form?",
    options: ["Homework: shortened to 'les devs'", "Break/recess: shortened to 'la récré'", "A lesson: shortened to 'le cours'", "PE class: shortened to 'l'EPS'"],
    correct: 1,
    explanation: "La récréation = break/recess: commonly shortened to 'la récré' in everyday speech. Students use this informal version constantly.",
  },
  {
    question: "What does the time expression '16 heures' refer to in the text?",
    options: ["4 AM", "6 PM", "4 PM", "16 minutes past noon"],
    correct: 2,
    explanation: "French commonly uses the 24-hour clock. 16 heures = 4 PM (16 - 12 = 4). Context (returning home after school) confirms this is late afternoon.",
  },
  {
    question: "What tense are all the verbs in Text A written in, and why?",
    options: [
      "Passé composé: because the routine happened in the past.",
      "Imparfait: because it is a habitual routine.",
      "Present tense: because the routine is ongoing and current.",
      "Futur proche: because these are plans.",
    ],
    correct: 2,
    explanation: "Text A uses the present tense throughout (je me lève, je mange, je pars…) because it describes the student's current, ongoing daily routine: not a one-off past event.",
  },
  {
    question: "Which word from the text means 'school subject' (as in a lesson area like maths or science)?",
    options: ["le cours", "la cantine", "la matière", "le tableau"],
    correct: 2,
    explanation: "La matière = school subject. Le cours = a lesson/class. La matière refers to a subject area (les maths, le français, les sciences), while le cours is a specific session.",
  },
];

export default function Unit6Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#854D0E]">Unit 6 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Beginner Texts</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Reading practice starts here. Both texts below are written in the present tense and cover familiar daily life topics: a student&apos;s daily routine and their school. Apply the strategies from Lesson 1: read the title first, spot cognates, notice key repeated words, and use context to handle unfamiliar vocabulary.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Reading tip for beginners</p>
            <p className="mt-3 text-sm leading-7 text-[#526173]">
              These texts are written in the <strong>present tense</strong>: every verb is conjugated in the present. Look for subject pronouns (je, tu, il, elle, nous, on) followed by a verb to identify who is doing what. Time expressions (le matin, à midi, le soir) will tell you when things happen.
            </p>
          </div>
        </div>

        {/* Text A */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text A — Ma routine quotidienne</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Je me lève à six heures et demie tous les jours. D&apos;abord, je prends une douche, puis je m&apos;habille. Je mange mon petit-déjeuner dans la cuisine avec ma famille: je mange des tartines avec de la confiture et je bois un chocolat chaud. Ensuite, je prends mon sac et je pars à l&apos;école à pied. L&apos;école commence à huit heures. J&apos;ai cours jusqu&apos;à midi, puis je mange à la cantine. L&apos;après-midi, j&apos;ai encore deux heures de cours. Je rentre chez moi à seize heures et je fais mes devoirs avant le dîner. Le soir, je lis un peu ou je regarde la télévision, et je me couche à vingt-deux heures.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text A</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. À quelle heure est-ce que le/la narrateur(-trice) se lève?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle se lève à six heures et demie.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Qu&apos;est-ce qu&apos;il/elle mange au petit-déjeuner?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle mange des tartines avec de la confiture et boit un chocolat chaud.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Qu&apos;est-ce qu&apos;il/elle fait après l&apos;école?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle rentre chez lui/elle, fait ses devoirs avant le dîner, puis lit ou regarde la télévision.</p>
            </div>
          </div>
        </div>

        {/* Text B */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Text B — Mon école</h2>
          <div className="mt-4 rounded-2xl border border-[#E7DAB9] bg-white p-6 text-sm leading-7">
            <p>
              Mon école s&apos;appelle le collège Victor Hugo. C&apos;est une grande école avec environ six cents élèves et une quarantaine de professeurs. Il y a une cantine, une bibliothèque, un gymnase et une grande cour de récréation. Nous avons cours cinq jours par semaine, du lundi au vendredi. Chaque journée commence à huit heures et finit à seize heures. J&apos;étudie beaucoup de matières différentes: le français, les maths, les sciences, l&apos;histoire-géographie, l&apos;anglais et l&apos;éducation physique. Ma matière préférée, c&apos;est les sciences car j&apos;aime faire des expériences. Par contre, je n&apos;aime pas trop les maths: je les trouve difficiles! À midi, je mange à la cantine avec mes amis.
            </p>
          </div>
          <div className="mt-4 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-[#854D0E]">Comprehension questions — Text B</h3>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">1. Combien d&apos;élèves y a-t-il dans l&apos;école?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il y a environ six cents élèves.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">2. Quelle est la matière préférée du/de la narrateur(-trice)?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Sa matière préférée, c&apos;est les sciences.</p>
            </div>
            <div className="rounded-xl border border-[#E7DAB9] bg-[#FEF9C3] p-4 text-sm">
              <p className="font-bold">3. Pourquoi est-ce qu&apos;il/elle n&apos;aime pas les maths?</p>
              <p className="mt-1 text-[#526173]"><strong>Answer:</strong> Il/elle trouve les maths difficiles.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={vocabCards} title="Vocabulary from the texts" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Vocabulary match" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Text comprehension quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/school-french-support/unit-6/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Lesson 1</Link>
          <Link href="/learn/school-french-support/unit-6/lesson-3" className="rounded-full bg-[#854D0E] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#713D0A]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
