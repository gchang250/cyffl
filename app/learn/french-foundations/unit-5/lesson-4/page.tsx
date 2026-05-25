import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const allerCards = [
  { front: "je vais", back: "I go / I am going", subtext: "Je vais à l'école. — I'm going to school." },
  { front: "tu vas", back: "you go / you are going", subtext: "Tu vas où? — Where are you going?" },
  { front: "il/elle va", back: "he/she goes", subtext: "Elle va au cinéma. — She's going to the cinema." },
  { front: "nous allons", back: "we go / we are going", subtext: "Nous allons au parc. — We're going to the park." },
  { front: "vous allez", back: "you go (formal/plural)", subtext: "Vous allez bien? — Are you well? (fixed expression)" },
  { front: "ils/elles vont", back: "they go", subtext: "Ils vont au restaurant. — They're going to the restaurant." },
];

const placesCards = [
  { front: "le cinéma", back: "movie theatre", subtext: "Je vais au cinéma. (au = à + le)" },
  { front: "la bibliothèque", back: "library", subtext: "Je vais à la bibliothèque. (à la — feminine)" },
  { front: "l'école", back: "school", subtext: "Je vais à l'école. (à l' — starts with vowel)" },
  { front: "le parc", back: "park", subtext: "Nous allons au parc." },
  { front: "le supermarché", back: "supermarket", subtext: "Elle va au supermarché." },
  { front: "le restaurant", back: "restaurant", subtext: "Ils vont au restaurant." },
  { front: "la maison", back: "home / house", subtext: "Je vais à la maison. — I'm going home." },
  { front: "la plage", back: "beach", subtext: "Nous allons à la plage en été." },
  { front: "le musée", back: "museum", subtext: "Vous allez au musée ce weekend?" },
  { front: "la piscine", back: "swimming pool", subtext: "Tu vas à la piscine?" },
];

const pairs = [
  { left: "le cinéma", right: "movie theatre" },
  { left: "la bibliothèque", right: "library" },
  { left: "le parc", right: "park" },
  { left: "le restaurant", right: "restaurant" },
  { left: "la plage", right: "beach" },
  { left: "le musée", right: "museum" },
];

const exercises = [
  { before: "Je", after: "au cinéma ce soir.", answer: "vais", hint: "je form of aller", translation: "I'm going to the cinema tonight." },
  { before: "Nous", after: "à la bibliothèque.", answer: "allons", hint: "nous form of aller", translation: "We're going to the library." },
  { before: "Elle va", after: "musée. (to the)", answer: "au", hint: "à + le = au (musée is masculine)", translation: "She's going to the museum." },
  { before: "Ils vont", after: "plage. (to the)", answer: "à la", hint: "à la — plage is feminine", translation: "They're going to the beach." },
  { before: "Je vais", after: "demain. (to study — near future)", answer: "étudier", hint: "aller + infinitive for near future", translation: "I'm going to study tomorrow." },
];

const questions = [
  {
    question: "What is 'elle va' in English?",
    options: ["she went", "she is going", "she will go", "she goes/she is going"],
    correct: 3,
    explanation: "Elle va translates as both 'she goes' (present habit) and 'she is going' (right now). French present tense covers both meanings.",
  },
  {
    question: "How do you say 'I'm going to the library'? (bibliothèque = feminine)",
    options: ["Je vais au bibliothèque.", "Je vais à la bibliothèque.", "Je vais à bibliothèque.", "Je vais les bibliothèque."],
    correct: 1,
    explanation: "Bibliothèque is feminine, so use à la: je vais à la bibliothèque. À + le = au (for masculine nouns).",
  },
  {
    question: "'Je vais manger' uses the near future. What does it mean?",
    options: ["I ate.", "I eat every day.", "I am going to eat.", "I want to eat."],
    correct: 2,
    explanation: "Near future = aller + infinitive. Je vais manger = I am going to eat.",
  },
  {
    question: "What does 'à + les' contract to?",
    options: ["à les", "al", "aux", "à l'"],
    correct: 2,
    explanation: "À + les always contracts to aux: Je vais aux magasins. (à + les = aux)",
  },
];

export default function Unit5Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/french-foundations" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Going Places</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">Use the verb 'aller' to say where you're going, and the near future to talk about what you're about to do.</p>
          </div>
          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">aller — to go</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <p><span className="font-bold text-[#0B1F3A]">je vais</span></p>
              <p><span className="font-bold text-[#0B1F3A]">tu vas</span></p>
              <p><span className="font-bold text-[#0B1F3A]">il/elle va</span></p>
              <p><span className="font-bold text-[#0B1F3A]">nous allons</span></p>
              <p><span className="font-bold text-[#0B1F3A]">vous allez</span></p>
              <p><span className="font-bold text-[#0B1F3A]">ils/elles vont</span></p>
            </div>
            <p className="mt-3 text-xs text-[#526173]">Aller is irregular — memorize it. It's one of the most useful verbs in French.</p>
            <div className="mt-3 border-t border-[#E7DAB9] pt-3">
              <p className="text-xs font-bold text-[#0B1F3A]">Near future: aller + infinitive = going to [do something]</p>
              <p className="mt-1 text-xs text-[#526173]">Je vais manger. — I'm going to eat.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={allerCards} title="aller — conjugations" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-sm font-black text-[#C9A44C]">à + article</p>
          <div className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">à + le = au</p>
              <p className="mt-1 text-white/70">Je vais au cinéma.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">à + la = à la</p>
              <p className="mt-1 text-white/70">Je vais à la bibliothèque.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">à + l' = à l'</p>
              <p className="mt-1 text-white/70">Je vais à l'école.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">à + les = aux</p>
              <p className="mt-1 text-white/70">Je vais aux magasins.</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={placesCards} title="Places in town" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Places" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="aller + places" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Going places quiz" />
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Unit 5 complete!</p>
          <h2 className="mt-3 text-3xl font-black">You can navigate daily life in French.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            You know food vocabulary, school subjects, how to tell the time, and how to talk about going places. Test yourself before moving on to Unit 6.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/french-foundations/unit-5/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous</Link>
            <Link href="/learn/french-foundations/unit-5/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Take the unit test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
