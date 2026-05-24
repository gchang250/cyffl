import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const timeCards = [
  { front: "Quelle heure est-il?", back: "What time is it?", subtext: "The standard question for asking the time." },
  { front: "Il est une heure.", back: "It is 1 o'clock.", subtext: "Une (not un) because heure is feminine." },
  { front: "Il est midi.", back: "It is noon.", subtext: "Midi = noon. Not 'il est douze heures' (though both work)." },
  { front: "Il est minuit.", back: "It is midnight.", subtext: "Minuit = midnight." },
  { front: "et quart", back: "quarter past", subtext: "Il est trois heures et quart. = 3:15" },
  { front: "et demie", back: "half past", subtext: "Il est cinq heures et demie. = 5:30" },
  { front: "moins le quart", back: "quarter to", subtext: "Il est huit heures moins le quart. = 7:45" },
  { front: "du matin", back: "in the morning / AM", subtext: "Il est neuf heures du matin. = 9 AM" },
  { front: "de l'après-midi", back: "in the afternoon / PM", subtext: "Il est trois heures de l'après-midi. = 3 PM" },
  { front: "du soir", back: "in the evening / PM", subtext: "Il est huit heures du soir. = 8 PM" },
  { front: "maintenant", back: "now", subtext: "Il est maintenant midi. — It is now noon." },
  { front: "à l'heure", back: "on time", subtext: "Le train arrive à l'heure. — The train arrives on time." },
];

const pairs = [
  { left: "Il est deux heures.", right: "It is 2:00." },
  { left: "Il est midi.", right: "It is noon." },
  { left: "et quart", right: "quarter past" },
  { left: "et demie", right: "half past" },
  { left: "moins le quart", right: "quarter to" },
  { left: "du matin", right: "in the morning" },
];

const exercises = [
  { before: "Il est six heures", after: ". (6:30)", answer: "et demie", hint: "half past — et demie", translation: "It is 6:30." },
  { before: "Il est neuf heures", after: ". (9:15)", answer: "et quart", hint: "quarter past — et quart", translation: "It is 9:15." },
  { before: "Il est", after: "heures moins le quart. (7:45)", answer: "huit", hint: "8 minus quarter = 7:45", translation: "It is 7:45." },
  { before: "Il est dix heures du", after: ". (10 AM)", answer: "matin", hint: "morning = matin", translation: "It is 10 AM." },
  { before: "Il est", after: ". (noon)", answer: "midi", hint: "noon has its own word", translation: "It is noon." },
];

const questions = [
  {
    question: "How do you say 'It is 3:30' in French?",
    options: ["Il est trois heures et quart.", "Il est trois heures et demie.", "Il est trois heures moins le quart.", "Il est trois et trente."],
    correct: 1,
    explanation: "Et demie = half past. Il est trois heures et demie = 3:30.",
  },
  {
    question: "What does 'Il est huit heures moins le quart' mean?",
    options: ["8:15", "8:45", "7:45", "7:15"],
    correct: 2,
    explanation: "Moins le quart = quarter to. Eight minus quarter = 7:45.",
  },
  {
    question: "Why do you say 'une heure' and not 'un heure'?",
    options: ["Because it's 1 o'clock, which is special", "Because heure is a feminine noun", "Because it's a rule for time", "Because un sounds bad before heure"],
    correct: 1,
    explanation: "Heure is feminine, so you use une (feminine article) before it: une heure, not un heure.",
  },
  {
    question: "How do you ask 'What time is it?' in French?",
    options: ["Quel temps est-il?", "Quelle heure est-il?", "Comment l'heure est?", "C'est quelle heure?"],
    correct: 1,
    explanation: "Quelle heure est-il? is the standard question. Note: quel temps = what weather, not what time.",
  },
];

export default function Unit5Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Telling Time</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Ask what time it is, say what time something happens, and use the French time expressions you'll hear every day.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Il est + [hour] + heure(s)</p>
            <div className="mt-3 space-y-1 text-sm text-[#526173]">
              <p><span className="font-bold text-[#0B1F3A]">Il est une heure.</span> (1:00)</p>
              <p><span className="font-bold text-[#0B1F3A]">Il est deux heures.</span> (2:00)</p>
              <p><span className="font-bold text-[#0B1F3A]">Il est midi.</span> (noon)</p>
              <p><span className="font-bold text-[#0B1F3A]">Il est minuit.</span> (midnight)</p>
            </div>
            <p className="mt-3 text-xs text-[#526173]">Minutes: + "et quart" (quarter past), "et demie" (half past), "moins le quart" (quarter to)</p>
            <p className="mt-2 text-xs font-bold text-[#0B1F3A]">Il est quatre heures et demie. (4:30)</p>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={timeCards} title="Time vocabulary" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="What time is it?" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Say the time" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Telling time quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/french-foundations/unit-5/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#526173] transition hover:-translate-y-0.5">← Previous</Link>
          <Link href="/learn/french-foundations/unit-5/lesson-4" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
