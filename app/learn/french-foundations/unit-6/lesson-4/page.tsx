import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "hier", back: "yesterday", subtext: "Hier, j'ai regardé un film." },
  { front: "avant-hier", back: "the day before yesterday", subtext: "Avant-hier, elle est arrivée." },
  { front: "ce matin", back: "this morning", subtext: "Ce matin, j'ai bu du café." },
  { front: "la semaine dernière", back: "last week", subtext: "La semaine dernière, nous avons étudié." },
  { front: "le mois dernier", back: "last month", subtext: "Le mois dernier, il a voyagé." },
  { front: "l'année dernière", back: "last year", subtext: "L'année dernière, elle a commencé l'université." },
  { front: "il y a + [time]", back: "[time] ago", subtext: "Il y a deux jours = two days ago." },
  { front: "récemment", back: "recently", subtext: "J'ai récemment vu un bon film." },
];

const pairs = [
  { left: "hier", right: "yesterday" },
  { left: "avant-hier", right: "day before yesterday" },
  { left: "la semaine dernière", right: "last week" },
  { left: "le mois dernier", right: "last month" },
  { left: "l'année dernière", right: "last year" },
  { left: "il y a deux jours", right: "two days ago" },
];

const fillIn = [
  { before: "", after: ", j'ai mangé une pizza. (yesterday)", answer: "Hier", hint: "yesterday", translation: "Yesterday, I ate a pizza." },
  { before: "Il y a trois jours, elle", after: "au cinéma. (aller)", answer: "est allée", hint: "3 days ago — être + allé + -e", translation: "Three days ago, she went to the cinema." },
  { before: "La semaine", after: ", nous avons étudié pour l'examen.", answer: "dernière", hint: "last (week)", translation: "Last week, we studied for the exam." },
  { before: "Ce matin, j'", after: "du café. (boire)", answer: "ai bu", hint: "boire → bu", translation: "This morning, I drank coffee." },
  { before: "L'année", after: ", il a voyagé en France.", answer: "dernière", hint: "last (year)", translation: "Last year, he travelled to France." },
];

const quiz = [
  {
    question: "How do you say 'two weeks ago' in French?",
    options: ["depuis deux semaines", "il y a deux semaines", "avant deux semaines", "deux semaines dernières"],
    correct: 1,
    explanation: "Il y a + time period = [time] ago. Il y a deux semaines = two weeks ago.",
  },
  {
    question: "Which sentence uses the passé composé correctly with a time expression?",
    options: ["Hier, je mange une pizza.", "Hier, j'ai mangé une pizza.", "Hier, je mangeais une pizza.", "Hier, j'ai manger une pizza."],
    correct: 1,
    explanation: "Passé composé = avoir/être (present) + past participle. J'ai mangé = I ate. Note: j'ai manger is wrong — use the past participle, not the infinitive.",
  },
  {
    question: "What does 'l'année dernière' mean?",
    options: ["next year", "this year", "last year", "last month"],
    correct: 2,
    explanation: "L'année dernière = last year. Dernier/dernière = last (in time). L'année prochaine = next year.",
  },
  {
    question: "Choose the correct passé composé: 'Elle ___ hier soir.' (sortir)",
    options: ["a sorti", "est sortie", "est sorti", "a sortie"],
    correct: 1,
    explanation: "Sortir uses être. Subject is elle (feminine), so add -e: sortie. Elle est sortie.",
  },
];

export default function Unit6Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 6 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Talking About Yesterday</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Combine the passé composé with time expressions to tell stories about things that happened.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common past time expressions</p>
            <div className="mt-3 space-y-2 text-sm">
              {[
                ["hier","yesterday"],
                ["avant-hier","the day before yesterday"],
                ["ce matin","this morning"],
                ["ce soir","tonight (past)"],
                ["la semaine dernière","last week"],
                ["le mois dernier","last month"],
                ["l'année dernière","last year"],
                ["il y a + time","[time] ago (il y a trois jours = 3 days ago)"],
              ].map(([fr, en]) => (
                <div key={fr} className="flex items-baseline gap-2">
                  <p className="font-black text-[#0B1F3A] min-w-0">{fr}</p>
                  <p className="text-[#526173]">/ {en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Time expressions" />
        </div>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Sample paragraph</p>
          <p className="mt-4 leading-8 text-[#0B1F3A] font-semibold">Hier, je me suis levé tôt. J'ai mangé des céréales et j'ai bu du jus d'orange. Ensuite, je suis allé à l'école à pied. Après les cours, j'ai fait mes devoirs et j'ai regardé un film avec ma famille.</p>
          <p className="mt-4 leading-8 text-[#526173] text-sm">Yesterday, I got up early. I ate cereal and drank orange juice. Then, I went to school on foot. After class, I did my homework and watched a film with my family.</p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Time expressions to English" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Past time expressions" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Talking about yesterday quiz" />
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Unit 6 complete!</p>
          <h2 className="mt-3 text-3xl font-black">You can talk about the past in French.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            You know the passé composé with avoir and être, irregular past participles, and how to use time expressions. Take the test before moving on.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-6/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn/french-foundations/unit-6/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Take the unit test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
