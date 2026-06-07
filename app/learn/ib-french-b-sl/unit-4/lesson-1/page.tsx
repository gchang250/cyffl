import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "la préparation (15 min)", back: "15-minute preparation period", subtext: "You receive the image and have 15 minutes before the oral begins. Use all of it: identify theme, plan description, note vocabulary." },
  { front: "le stimulus visuel", back: "visual stimulus / image", subtext: "The photo or image you receive. It is always linked to one of the five IB themes and illustrates a global issue." },
  { front: "la problématique mondiale", back: "global issue", subtext: "The world problem the image illustrates — climate change, inequality, migration, etc. Identifying this is the core of the oral." },
  { front: "décrire", back: "to describe", subtext: "The first part of the oral. You describe what you see in the image — people, setting, actions." },
  { front: "analyser", back: "to analyse", subtext: "The second move. You explain what global issue the image represents and connect it to an IB theme." },
  { front: "le thème", back: "the theme", subtext: "One of the five IB themes. Name it explicitly: 'Cette image appartient au thème de Partager la planète.'" },
  { front: "l'interaction (f)", back: "interaction", subtext: "The examiner-led discussion phase. You must listen, respond, and develop ideas spontaneously — not give a prepared script." },
  { front: "les critères de notation", back: "marking criteria", subtext: "Criterion A: Language (10 pts). Criterion B: Message (10 pts). Criterion C: Interactive skills (10 pts). Total: 30 pts." },
  { front: "le registre oral", back: "spoken register", subtext: "More natural and conversational than written French. Contractions and spoken connectors (ben, donc, alors) are acceptable." },
  { front: "développer ses idées", back: "to develop / expand ideas", subtext: "Don't just answer 'oui' or 'non'. Develop every answer with an explanation, example, or personal connection." },
  { front: "le Critère A", back: "Criterion A — Language (10 pts)", subtext: "Vocabulary range and accuracy, grammatical accuracy, and pronunciation. Show range by using complex structures and a variety of tenses." },
  { front: "le Critère B", back: "Criterion B — Message (10 pts)", subtext: "Quality of ideas: description of the image, identification of the theme and global issue, and development of arguments. Factual accuracy is NOT assessed here." },
  { front: "le Critère C", back: "Criterion C — Interactive skills (10 pts)", subtext: "How well you engage with the examiner. Respond spontaneously, ask for clarification if needed, and develop rather than just answer." },
  { front: "rebondir sur une question", back: "to build on / respond to a question", subtext: "To use the examiner's question as a springboard — take their point and develop it, add an example, or introduce a new angle." },
  { front: "demander des précisions", back: "to ask for clarification", subtext: "'Pourriez-vous préciser votre question ?' = Could you clarify your question? Asking for clarification is not penalised — it's a natural oral skill." },
];

const matchPairs = [
  { left: "le stimulus visuel", right: "visual stimulus / image" },
  { left: "la problématique mondiale", right: "global issue" },
  { left: "décrire", right: "to describe" },
  { left: "analyser", right: "to analyse" },
  { left: "le thème", right: "the IB theme" },
  { left: "développer ses idées", right: "to develop / expand ideas" },
];

const quiz = [
  {
    question: "How long is the preparation period before the Individual Oral begins?",
    options: ["5 minutes", "10 minutes", "15 minutes", "20 minutes"],
    correct: 2,
    explanation: "You have 15 minutes of preparation. Use every minute: identify the theme, plan your description, note vocabulary and the global issue.",
  },
  {
    question: "The Individual Oral is worth what percentage of the IB French B SL final grade?",
    options: ["20%", "25%", "30%", "45%"],
    correct: 1,
    explanation: "The Individual Oral (IA) is worth 25% — the same as each other component: Paper 1 (Written Production), Paper 2A (Reading), and Paper 2B (Listening). Each is 25%.",
  },
  {
    question: "After describing the image, what should you do next?",
    options: ["Wait for the examiner to ask a question", "Name the IB theme and connect the image to a global issue", "Give your personal opinion on the image", "Summarise the image in one sentence"],
    correct: 1,
    explanation: "After the description, you must name the IB theme and explain what global issue the image illustrates. This is Criterion B — message.",
  },
  {
    question: "The examiner asks: 'Qu'est-ce que cette image vous inspire?' You should:",
    options: ["Recite your prepared notes exactly", "Give a one-word answer and wait", "Develop your response — explain, give an example, connect to your experience", "Ask the examiner to repeat the question"],
    correct: 2,
    explanation: "Criterion C (Interactive skills) rewards spontaneous, developed responses. Develop every answer — don't just give short replies.",
  },
  {
    question: "What are the three Individual Oral marking criteria?",
    options: ["Vocabulary, Grammar, Pronunciation", "Language, Message, Interactive skills", "Fluency, Accuracy, Content", "Description, Analysis, Conclusion"],
    correct: 1,
    explanation: "Criterion A: Language (10), Criterion B: Message (10), Criterion C: Interactive skills (10). Total = 30 points.",
  },
  {
    question: "An examiner asks a follow-up question you don't fully understand. The best response is:",
    options: [
      "Stay silent until you understand",
      "Guess and give a random answer",
      "'Pourriez-vous préciser votre question ?' or repeat it back to confirm understanding",
      "Say 'je ne sais pas' and stop",
    ],
    correct: 2,
    explanation: "Asking for clarification ('Pourriez-vous préciser?') is a natural interactive skill — it is not penalised. It shows Criterion C competency. Silence or random guessing lose marks.",
  },
  {
    question: "Which criterion specifically assesses how well you engage with the examiner's questions — not just what you say, but how spontaneously you respond?",
    options: ["Criterion A — Language", "Criterion B — Message", "Criterion C — Interactive skills", "All three equally"],
    correct: 2,
    explanation: "Criterion C (Interactive skills) is specifically about engagement quality: do you respond spontaneously, develop ideas, ask for clarification when needed, and have a natural conversation — not a scripted recital.",
  },
  {
    question: "During your 15-minute preparation, you should use the time to:",
    options: [
      "Write a full script of everything you plan to say",
      "Identify the theme, plan your description, note key vocabulary, and think of global issue connections",
      "Only look at the image — do not write anything",
      "Memorise as many sentences as possible to recite",
    ],
    correct: 1,
    explanation: "Use prep time to: identify the IB theme, plan a structured description (foreground → background → significance), note key vocabulary, and identify the global issue. A script is counterproductive — it kills natural interaction.",
  },
];

export default function Unit4Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 4 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Oral Structure & Preparation
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The Individual Oral is 25% of your grade. Understanding exactly what happens,
              in what order, and what examiners are marking changes everything.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                The oral has two phases:{" "}
                <span className="font-black text-white">your presentation</span> (describe + analyse
                the image), then{" "}
                <span className="font-black text-white">discussion</span> with the examiner.
                Don't script the second phase — it needs to feel natural.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">IA structure</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Prep:</strong> 15 minutes (receive image)</p>
                <p><strong>Part 1:</strong> Describe + analyse (3–4 min)</p>
                <p><strong>Part 2:</strong> Discussion with examiner (6–9 min)</p>
                <p><strong>Total:</strong> 12–15 minutes</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the oral structure and terminology.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Oral structure & preparation — key terms" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">What the examiner is looking for — criterion by criterion</h2>
          <p className="mt-2 text-sm text-[#526173]">Each criterion targets a different dimension of your performance. Understand what gets marks.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Criterion A · Language",
                pts: "10 pts",
                items: ["Vocabulary range and precision", "Grammatical accuracy", "Pronunciation and intonation", "Show varied tenses and structures"],
              },
              {
                label: "Criterion B · Message",
                pts: "10 pts",
                items: ["Describe the image clearly", "Name the IB theme explicitly", "Identify the global issue", "Develop ideas with evidence"],
              },
              {
                label: "Criterion C · Interaction",
                pts: "10 pts",
                items: ["Respond spontaneously", "Develop answers beyond 'oui/non'", "Ask for clarification when needed", "Engage naturally with examiner"],
              },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-4">
                <div className="flex items-center justify-between">
                  <p className="font-black text-sm text-[#0B1F3A]">{c.label}</p>
                  <span className="rounded-full bg-[#0B1F3A] px-2 py-0.5 text-xs font-black text-white">{c.pts}</span>
                </div>
                <ul className="mt-3 space-y-1">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-[#526173]">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#C9A44C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each oral term to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Oral vocabulary" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your knowledge of the oral format and marking.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Oral structure quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Oral structure locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the language you need to describe images effectively.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
