import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Je dois faire mes devoirs avant de sortir.", back: "I have to do my homework before going out.", subtext: "devoir + faire + avant de + infinitive" },
  { front: "Tu sais si elle peut venir ce soir?", back: "Do you know if she can come tonight?", subtext: "savoir + si + pouvoir" },
  { front: "Nous venons de finir — on peut partir!", back: "We just finished — we can leave!", subtext: "venir de + pouvoir" },
  { front: "Elle veut prendre le train mais elle ne sait pas l'horaire.", back: "She wants to take the train but she doesn't know the schedule.", subtext: "vouloir + prendre + savoir" },
  { front: "Vous devez connaître ce restaurant — il est excellent!", back: "You have to know this restaurant — it's excellent!", subtext: "devoir + connaître" },
  { front: "Ils viennent souvent ici parce qu'ils peuvent travailler tranquillement.", back: "They come here often because they can work quietly.", subtext: "venir + pouvoir" },
];

const fillIn = [
  { before: "Je", after: "partir mais je ne peux pas encore. (vouloir)", answer: "veux", hint: "je form of vouloir", translation: "I want to leave but I can't yet." },
  { before: "Elle", after: "de lire ce livre — elle l'a adoré. (venir de)", answer: "vient de finir", hint: "elle vient de + infinitive — just finished reading", translation: "She just finished reading this book — she loved it." },
  { before: "Tu", after: "ce restaurant? Il est vraiment bon. (connaître)", answer: "connais", hint: "tu form of connaître", translation: "Do you know this restaurant? It's really good." },
  { before: "Nous", after: "faire attention en classe. (devoir)", answer: "devons", hint: "nous form of devoir", translation: "We have to pay attention in class." },
  { before: "Ils", after: "du café avant de partir. (prendre)", answer: "prennent", hint: "ils form of prendre", translation: "They're having coffee before leaving." },
];

const quiz = [
  {
    question: "Which sentence means 'She just left'?",
    options: ["Elle vient partir.", "Elle vient de partir.", "Elle veut partir.", "Elle vient partant."],
    correct: 1,
    explanation: "Venir de + infinitive = just did something. Elle vient de partir = She just left.",
  },
  {
    question: "How do you say 'I know how to drive' using savoir?",
    options: ["Je connais conduire.", "Je sais conduire.", "Je dois conduire.", "Je peux conduire."],
    correct: 1,
    explanation: "Savoir + infinitive = to know how to do something. Je sais conduire = I know how to drive.",
  },
  {
    question: "Which verb do you use to express that you MUST do something?",
    options: ["vouloir", "pouvoir", "devoir", "savoir"],
    correct: 2,
    explanation: "Devoir = must / have to. Je dois étudier = I have to study. Vouloir = want, pouvoir = can.",
  },
  {
    question: "Choose the correct sentence: 'They know Marie' (acquainted with)",
    options: ["Ils savent Marie.", "Ils font Marie.", "Ils peuvent Marie.", "Ils connaissent Marie."],
    correct: 3,
    explanation: "Connaître is used for people you know (are acquainted with). Ils connaissent Marie.",
  },
];

export default function Unit7Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">← French Foundations</Link>
        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 7 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Putting It All Together</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Combine everything from Unit 7 — irregular verbs, the passé composé, and rich sentence structures — to express yourself more naturally in French.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">What you can express</p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                ["Obligation","Je dois étudier."],
                ["Ability","Elle peut venir."],
                ["Desire","Nous voulons partir."],
                ["Knowledge","Il sait cuisiner."],
                ["Familiarity","Je connais ce restaurant."],
                ["Recent past","Ils viennent de finir."],
                ["Movement","Elle part à midi."],
              ].map(([label, example]) => (
                <li key={label} className="flex items-baseline gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-[#C9A44C] min-w-[90px]">{label}</span>
                  <span className="font-semibold text-[#0B1F3A]">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Rich sentences" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={fillIn} title="Put it together" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={quiz} title="Unit 7 review quiz" />
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Unit 7 complete!</p>
          <h2 className="mt-3 text-3xl font-black">You know the most important irregular verbs in French.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Faire, pouvoir, vouloir, devoir, savoir, connaître, venir, prendre, partir — these verbs unlock everything. Take the final unit test to finish the course.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-7/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn/french-foundations/unit-7/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Take the final test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
