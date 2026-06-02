import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la compréhension de l'oral", back: "listening comprehension", subtext: "TEF Canada: ~40 questions, ~40 minutes. You hear audio texts — conversations, announcements, interviews, news segments — and answer multiple-choice questions." },
  { front: "la compréhension de l'écrit", back: "reading comprehension", subtext: "TEF Canada: ~50 questions, ~60 minutes. Texts range from everyday documents to journalistic and formal articles. Questions cover main idea, detail, vocabulary in context, and implied meaning." },
  { front: "l'idée principale", back: "main idea", subtext: "A key question type in both listening and reading. Identify what the whole text or audio is about — not a specific detail, but the overall message or purpose." },
  { front: "la question de détail", back: "detail question", subtext: "The most common question type. A specific fact, name, date, number, or event is asked about. The answer is explicitly stated in the text or audio." },
  { front: "le vocabulaire en contexte", back: "vocabulary in context", subtext: "A word or phrase from the text is given, and you identify its meaning based on how it's used — not its general dictionary definition. Use surrounding sentences as clues." },
  { front: "le sens implicite / inférer", back: "implied meaning / to infer", subtext: "Higher-level questions ask what the text suggests but doesn't say directly. Read between the lines — the answer is supported by the text but not stated word-for-word." },
  { front: "la première écoute", back: "first listen", subtext: "TEF Canada audio plays only ONCE. You don't get a second listen — unlike the IB. Take notes as you listen the first time." },
  { front: "prendre des notes", back: "to take notes", subtext: "Essential for the listening test. Write key words — names, numbers, locations, opinions — while you listen. You won't hear the audio again." },
  { front: "les distracteurs", back: "distractors", subtext: "Wrong answer options designed to look plausible. They often use words from the text in a misleading way. Always verify your answer against the text before committing." },
  { front: "la progression du texte", back: "text structure / progression", subtext: "Recognizing how a text is organized (chronological, problem-solution, for-and-against) helps you predict where information is located and answer quickly." },
];

const matchPairs = [
  { left: "la compréhension de l'oral", right: "listening — audio plays once" },
  { left: "l'idée principale", right: "main idea of the whole text" },
  { left: "la question de détail", right: "specific fact explicitly stated" },
  { left: "le vocabulaire en contexte", right: "word meaning from surrounding text" },
  { left: "prendre des notes", right: "write key words while listening" },
  { left: "les distracteurs", right: "misleading wrong answer options" },
];

const quiz = [
  {
    question: "TEF Canada listening audio plays how many times?",
    options: [
      "Twice — you get a second listen for details",
      "Three times at progressively slower speed",
      "Once — take notes as you listen",
      "As many times as you need — the test is self-paced",
    ],
    correct: 2,
    explanation: "TEF Canada audio plays ONCE. This is different from some other tests. You must take notes during the first (and only) listen — write key words, numbers, names, and opinions.",
  },
  {
    question: "A TEF Canada reading question gives you the word 'démarche' from the text and asks what it means. The best approach is:",
    options: [
      "Choose the most common dictionary definition",
      "Skip it — vocabulary questions are a gamble",
      "Read the sentences around 'démarche' in the text to understand how it's used in context",
      "Look for a French synonym earlier in the text",
    ],
    correct: 2,
    explanation: "Vocabulary-in-context questions are not testing your dictionary knowledge — they're testing your ability to infer meaning from context. Read the surrounding sentences. The author usually provides clues.",
  },
  {
    question: "You are answering a TEF Canada listening question and two options both seem plausible. What should you do?",
    options: [
      "Pick the one that uses words you heard in the audio",
      "Pick the longer option",
      "Think about which one is explicitly supported by what the speaker actually said",
      "Pick the first option — early options are statistically correct more often",
    ],
    correct: 2,
    explanation: "Distractors often use words from the audio in a misleading way — this makes them sound right. Always ask: 'Is this what the speaker actually said?' Go with the option that is explicitly supported by the audio content.",
  },
  {
    question: "A TEF Canada reading question asks for 'l'idée principale' of the text. You should:",
    options: [
      "Find the first sentence — it's always the main idea",
      "Identify what the whole text is about — the central message, not a specific detail",
      "Find the longest paragraph and summarize it",
      "Answer based on the title alone",
    ],
    correct: 1,
    explanation: "Main idea questions ask what the whole text is fundamentally about. The answer is the most general, encompassing option — not a specific fact or example from one paragraph. Eliminate options that only describe one part of the text.",
  },
  {
    question: "Which strategy is most effective for the TEF Canada reading section?",
    options: [
      "Read the entire text carefully before looking at any questions",
      "Answer all questions from memory without re-reading",
      "Read each question first, then locate the relevant section of the text to find the answer",
      "Read the last paragraph first — it usually contains the main idea",
    ],
    correct: 2,
    explanation: "Read the question first, then locate the relevant section. TEF Canada texts are often long — you don't have time to read every word before every question. Targeted scanning is faster and just as accurate.",
  },
];

export default function TEFLesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Listening & Reading Strategies
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              TEF Canada listening and reading tests are both multiple choice. The audio plays once. Knowing question types and strategies before test day separates the candidates who score CLB 7+ from those who don&apos;t.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                For listening: <span className="font-black text-white">take notes</span> — the audio only plays once. For reading: <span className="font-black text-white">read the question first</span>, then scan. Both tests reward efficiency over thoroughness.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Section formats</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Listening:</strong> ~40 questions · ~40 min · audio plays once</p>
                <p><strong>Reading:</strong> ~50 questions · ~60 min · texts at various levels</p>
                <p className="mt-2 text-[#526173]">Both are multiple choice A/B/C/D.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the question types and strategies.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada — listening & reading strategies" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Preparation strategy</p>
          <h2 className="mt-2 text-xl font-black">Build listening and reading habits before your test</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-2">
            <div>
              <p className="font-black text-[#0B1F3A]">For listening</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#526173]">
                {[
                  "Listen to Radio-Canada podcasts and news daily",
                  "Practice taking notes in French while listening — key words only",
                  "Watch RDI or TV5 with French subtitles, then without",
                  "Listen to different French accents: Québécois, French, African French",
                  "Practice identifying the speaker's opinion vs. stated facts",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-black text-[#0B1F3A]">For reading</p>
              <ul className="mt-2 space-y-1.5 text-sm text-[#526173]">
                {[
                  "Read Le Devoir or Le Monde articles daily — scan, don't translate",
                  "Practice reading under time pressure — set a timer",
                  "Identify question types as you practice: main idea, detail, vocabulary, inference",
                  "Build vocabulary from context — guess before looking up words",
                  "Study common false cognates (actuellement, éventuellement, rester)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each strategy term to its meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Listening & reading vocabulary" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your listening and reading strategies.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Listening & reading quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Receptive skills ready.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: strategies for the TEF Canada writing and speaking tests — the two productive skills.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
