import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const subjectCards = [
  { front: "les maths", back: "maths / math", subtext: "Short for les mathématiques." },
  { front: "le français", back: "French", subtext: "Lowercase when it's a subject." },
  { front: "l'histoire", back: "history", subtext: "Feminine: l'histoire (starts with h)." },
  { front: "la géographie", back: "geography", subtext: "Often paired with history." },
  { front: "les sciences", back: "science", subtext: "Feminine plural: les sciences." },
  { front: "la biologie", back: "biology", subtext: "La bio for short." },
  { front: "la chimie", back: "chemistry", subtext: "La chimie est difficile!" },
  { front: "la physique", back: "physics", subtext: "Not the same as 'physique' (appearance)." },
  { front: "l'informatique", back: "computer science", subtext: "Feminine: l'informatique." },
  { front: "l'art", back: "art", subtext: "J'adore l'art." },
  { front: "l'EPS", back: "PE / gym", subtext: "Short for Éducation Physique et Sportive." },
  { front: "la musique", back: "music (subject)", subtext: "J'aime beaucoup la musique." },
];

const classroomCards = [
  { front: "la salle de classe", back: "classroom", subtext: "La salle = room." },
  { front: "le tableau", back: "board / chalkboard", subtext: "Write on the tableau." },
  { front: "le bureau", back: "desk / teacher's desk", subtext: "Also means 'office.'" },
  { front: "le stylo", back: "pen", subtext: "Un stylo rouge — a red pen." },
  { front: "le crayon", back: "pencil", subtext: "Don't confuse with crayon (English) — it means pencil here!" },
  { front: "le cahier", back: "notebook / exercise book", subtext: "Mon cahier de français — my French notebook." },
  { front: "le livre", back: "book", subtext: "Le livre de maths — the math book." },
  { front: "le cartable", back: "school bag", subtext: "Mon cartable est lourd! — My bag is heavy!" },
  { front: "les devoirs", back: "homework", subtext: "Plural: les devoirs. Faire les devoirs — to do homework." },
  { front: "l'examen", back: "exam / test", subtext: "Passer un examen — to take a test." },
];

const pairs = [
  { left: "les maths", right: "maths" },
  { left: "l'histoire", right: "history" },
  { left: "le stylo", right: "pen" },
  { left: "le cahier", right: "notebook" },
  { left: "les devoirs", right: "homework" },
  { left: "l'examen", right: "exam" },
];

const exercises = [
  { before: "Mon matière préféré est", after: ". (history)", answer: "l'histoire", hint: "history — don't forget the l'", translation: "My favourite subject is history." },
  { before: "J'ai oublié mon", after: ". (notebook)", answer: "cahier", hint: "notebook / exercise book", translation: "I forgot my notebook." },
  { before: "Nous avons un", after: "demain. (exam)", answer: "examen", hint: "exam / test", translation: "We have a test tomorrow." },
  { before: "Est-ce que tu aimes", after: "? (computer science)", answer: "l'informatique", hint: "computer science — l' before vowel", translation: "Do you like computer science?" },
  { before: "Elle fait ses", after: "après l'école. (homework)", answer: "devoirs", hint: "homework — always plural", translation: "She does her homework after school." },
];

const questions = [
  {
    question: "What does 'les devoirs' mean?",
    options: ["duties", "homework", "teachers", "exams"],
    correct: 1,
    explanation: "Les devoirs = homework (always plural in French). Faire les devoirs = to do homework.",
  },
  {
    question: "Which school subject is feminine?",
    options: ["le français", "le dessin", "la chimie", "le sport"],
    correct: 2,
    explanation: "La chimie is feminine. Le français, le sport, le dessin are masculine.",
  },
  {
    question: "What is 'le crayon' in English?",
    options: ["Crayon (the wax coloring stick)", "Marker", "Pencil", "Pen"],
    correct: 2,
    explanation: "Le crayon = pencil in French, NOT a wax crayon. A wax crayon in French is 'le crayon de cire' or 'le crayon gras.'",
  },
  {
    question: "How would you say 'I prefer art to math'?",
    options: ["Je préfère l'art aux maths.", "Je préfère l'art à les maths.", "J'aime l'art plus maths.", "J'adore l'art, pas les maths."],
    correct: 0,
    explanation: "Préférer + A + à + B. À + les = aux. Je préfère l'art aux maths.",
  },
];

export default function Unit5Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">At School</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Vocabulary for the classroom, school subjects, and everyday school life. Essential for anyone studying French at school.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Talking about school</p>
            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#0B1F3A]">— Tu as quel cours maintenant?</p>
                <p className="text-[#526173]">What class do you have now?</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— J'ai maths.</p>
                <p className="text-[#526173]">I have math.</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— C'est ton matière préféré?</p>
                <p className="text-[#526173]">Is that your favourite subject?</p>
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A]">— Non, je préfère le français!</p>
                <p className="text-[#526173]">No, I prefer French!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={subjectCards} title="School subjects" />
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={classroomCards} title="In the classroom" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="School" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="School sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="School quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-5/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-5/lesson-3" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
