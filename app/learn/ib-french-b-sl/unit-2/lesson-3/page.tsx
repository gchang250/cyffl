import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "le ton", back: "tone", subtext: "Is the speaker happy, worried, critical, hopeful? Tone questions are very common in listening tasks." },
  { front: "l'attitude (f)", back: "attitude / stance", subtext: "What does the speaker think or feel about the topic? Identifying attitude is a key listening skill." },
  { front: "le but", back: "the purpose / aim", subtext: "Why is the speaker saying this? To inform, warn, persuade, or celebrate?" },
  { front: "selon l'intervenant", back: "according to the speaker", subtext: "A phrase in listening questions. Use only what the speaker says — don't infer." },
  { front: "l'interview (f)", back: "interview", subtext: "A common audio format: one person questions another. Listen for questions and responses carefully." },
  { front: "le reportage", back: "news report / documentary segment", subtext: "Factual, journalistic audio. Often about current events, social issues, or research." },
  { front: "l'annonce (f)", back: "announcement", subtext: "Short and direct. Listen for key details: dates, times, places, and instructions." },
  { front: "la publicité", back: "advertisement", subtext: "Designed to persuade. Purpose is almost always to sell or promote something." },
  { front: "noter les chiffres", back: "note the numbers / statistics", subtext: "Numbers are often asked about in listening tasks. Train yourself to catch dates, percentages, and quantities." },
  { front: "écouter deux fois", back: "listen twice", subtext: "In the exam you hear recordings twice. First listen: main idea. Second listen: specific details and answers." },
];

const matchPairs = [
  { left: "le ton", right: "tone" },
  { left: "l'attitude", right: "stance / attitude" },
  { left: "le reportage", right: "news report" },
  { left: "l'annonce", right: "announcement" },
  { left: "la publicité", right: "advertisement" },
  { left: "selon l'intervenant", right: "according to the speaker" },
];

const quiz = [
  {
    question: "You hear an audio about a scientist discussing worrying new climate data. The tone is most likely:",
    options: ["Optimistic", "Humorous", "Concerned / serious", "Celebratory"],
    correct: 2,
    explanation: "A scientist discussing worrying data would adopt a concerned or serious tone. Identifying tone helps you answer attitude questions correctly.",
  },
  {
    question: "The recording plays twice. What should you do on the first listen?",
    options: ["Write down every word you understand", "Identify the main idea, speaker, and purpose", "Answer all the detailed questions immediately", "Ignore it and wait for the second playback"],
    correct: 1,
    explanation: "First listen = big picture. Identify what it's about, who is speaking, and why. Use the second listen for specific details and answers.",
  },
  {
    question: "You hear: 'Mesdames et messieurs, le vol AF 302 à destination de Paris est retardé de 45 minutes.' This is:",
    options: ["An interview", "An advertisement", "An announcement", "A documentary"],
    correct: 2,
    explanation: "Une annonce — a short, direct announcement giving key information (flight number, destination, delay time).",
  },
  {
    question: "A question asks 'Quelle est l'attitude de la journaliste envers le projet?' The journalist says the project 'offre des solutions prometteuses malgré les difficultés'. Her attitude is:",
    options: ["Entirely negative", "Cautiously optimistic", "Indifferent", "Strongly critical"],
    correct: 1,
    explanation: "Prometteuses (promising) is positive, but malgré les difficultés (despite the difficulties) shows she acknowledges challenges — cautiously optimistic.",
  },
  {
    question: "You hear numbers and dates in a listening text. What should you do?",
    options: ["Ignore them — they're rarely tested", "Note them immediately since they're often asked about", "Wait until the second listen to write them down", "Only note them if the question specifically asks about dates"],
    correct: 1,
    explanation: "Numbers, dates, and statistics are frequently asked about in listening tasks. Write them during the first listen so you don't miss them.",
  },
];

export default function Unit2Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Listening Comprehension
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The Paper 2 listening section is 25% of your grade, out of 25 marks. Audio texts range from news reports to advertisements — learn the formats and how to manage two listens.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                You hear each recording{" "}
                <span className="font-black text-white">twice</span>. Use the
                first listen for the main idea and speaker. Use the second listen
                to answer specific questions and catch numbers or names.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Common audio formats</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Interview (journaliste + expert)</li>
                <li>→ Reportage (news report)</li>
                <li>→ Annonce (announcement)</li>
                <li>→ Publicité (advertisement)</li>
                <li>→ Conversation between two people</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Listening comprehension — key terms" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Listening vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply listening strategies to realistic scenarios.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Listening comprehension quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Paper 2 skills complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 2 test, then move on to Paper 1 — written production.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-2/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 2 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
