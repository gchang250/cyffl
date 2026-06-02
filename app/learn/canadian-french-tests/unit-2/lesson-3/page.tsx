import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "l'expression écrite", back: "writing — two tasks, ~60 minutes", subtext: "TEF Canada writing: Task 1 is a short informal text (~60–80 words), Task 2 is a formal structured text (~120–150 words). Both are scored on message, organization, vocabulary, and grammar." },
  { front: "la tâche 1 (écrit)", back: "writing Task 1 — informal, short", subtext: "A short informal text — a message, note, or email to a friend. Approximately 60–80 words. Register must be informal (tu, casual expressions)." },
  { front: "la tâche 2 (écrit)", back: "writing Task 2 — formal, structured", subtext: "A formal text — a letter, email, or report to an organization or official. Approximately 120–150 words. Requires formal register, structure, and conventions." },
  { front: "l'expression orale", back: "speaking — four tasks, ~15 minutes", subtext: "TEF Canada speaking: four tasks assessed by a trained examiner. Includes a monologue, an interactive exchange, and responding to a scenario. Recorded and evaluated later." },
  { front: "le plan", back: "written outline / plan", subtext: "Before writing Task 2, spend 2–3 minutes planning your structure: opening, main points, closing. Unorganized writing is penalized — a clear plan produces a clearer text." },
  { front: "les critères d'évaluation", back: "assessment criteria (writing & speaking)", subtext: "Both tests are marked on: pertinence du message (relevance), cohérence / organisation, vocabulaire (range and accuracy), and grammaire (accuracy)." },
  { front: "la pertinence", back: "relevance / staying on topic", subtext: "The most important criterion. If your text doesn't address the task, grammar and vocabulary don't save you. Always re-read the task instructions before writing." },
  { front: "la cohérence", back: "coherence / organization", subtext: "Is the text logically structured? Does it flow? Use connectors (de plus, cependant, par conséquent) and paragraph breaks to make your organization clear." },
  { front: "l'enregistrement", back: "recording (speaking test)", subtext: "TEF Canada speaking is recorded. You speak into a microphone — there is no live examiner. This means you can't adapt to the examiner's reactions. Prepare and speak clearly." },
  { front: "la formule de politesse", back: "formal closing formula", subtext: "Required at the end of formal letters and emails. Example: 'Je vous prie d'agréer l'expression de mes salutations distinguées.' or 'Dans l'attente de votre réponse, veuillez agréer mes cordiales salutations.'" },
];

const matchPairs = [
  { left: "tâche 1 (écrit)", right: "short informal text — ~60–80 words" },
  { left: "tâche 2 (écrit)", right: "formal structured text — ~120–150 words" },
  { left: "la pertinence", right: "staying on topic — the most important criterion" },
  { left: "la cohérence", right: "logical structure and flow" },
  { left: "l'enregistrement", right: "speaking is recorded — no live examiner" },
  { left: "la formule de politesse", right: "formal letter closing" },
];

const quiz = [
  {
    question: "TEF Canada writing Task 2 asks you to write to a formal organization. Which opening is correct?",
    options: [
      "'Salut! Je vous écris parce que...'",
      "'À qui de droit, voici mon opinion:'",
      "'Madame, Monsieur, Je me permets de vous contacter afin de...'",
      "'Hey, je voulais juste vous dire que...'",
    ],
    correct: 2,
    explanation: "'Madame, Monsieur,' is the standard formal salutation when you don't know the recipient's name. 'Je me permets de vous contacter afin de…' is a correct formal opening. Informal openings fail the register criterion.",
  },
  {
    question: "Before writing TEF Canada Task 2, you should:",
    options: [
      "Start immediately to maximize writing time",
      "Spend 2–3 minutes planning your structure — opening, main points, closing",
      "Write a rough draft first, then copy it",
      "Focus entirely on grammar — organization matters less",
    ],
    correct: 1,
    explanation: "A plan takes 2–3 minutes and produces a much clearer text. Examiners reward coherence and organization. An unplanned text tends to repeat ideas or lose focus, which directly lowers your score.",
  },
  {
    question: "The most important TEF Canada writing criterion — the one that can fail your entire response — is:",
    options: [
      "Grammatical accuracy (grammaire)",
      "Vocabulary range (vocabulaire)",
      "Relevance / staying on topic (pertinence)",
      "Text length (nombre de mots)",
    ],
    correct: 2,
    explanation: "Pertinence (relevance) is the most critical criterion. If your text doesn't address the task — even if it's grammatically perfect — your score drops severely. Always re-read the task instructions before writing and halfway through.",
  },
  {
    question: "TEF Canada speaking is assessed how?",
    options: [
      "Live face-to-face with a trained examiner in real time",
      "You type your responses and a computer evaluates them",
      "Your responses are recorded and evaluated by a trained examiner afterward",
      "You submit a video recording you prepared at home",
    ],
    correct: 2,
    explanation: "TEF Canada speaking is recorded into a microphone during the test. There is no live examiner — your recording is evaluated later. Speak clearly, at a steady pace, directly into the microphone.",
  },
  {
    question: "How should you use connectors in TEF Canada writing Task 2?",
    options: [
      "Avoid them — short simple sentences are easier to mark",
      "Use them to show structure and logical flow between ideas (de plus, cependant, par conséquent)",
      "Use the same connector throughout for consistency",
      "Only use them in the conclusion",
    ],
    correct: 1,
    explanation: "Connectors (de plus, cependant, en revanche, par conséquent, ainsi) show the examiner that your text is organized and your ideas are logically linked. They directly raise your cohérence score.",
  },
];

export default function TEFLesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Writing & Speaking Strategies
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The TEF Canada writing and speaking tests assess how well you produce French — not just comprehend it. Both are graded on four criteria: message relevance, organization, vocabulary, and grammar.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Staying <span className="font-black text-white">on topic</span> is the most important criterion for both writing and speaking. A well-organized, relevant response at B2 level beats a grammatically perfect but off-topic one every time.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Four assessment criteria</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>1. Pertinence:</strong> Did you address the task?</p>
                <p><strong>2. Cohérence:</strong> Is the text logically organized?</p>
                <p><strong>3. Vocabulaire:</strong> Range and accuracy</p>
                <p><strong>4. Grammaire:</strong> Grammatical accuracy</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know the task formats and assessment criteria.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada — writing & speaking" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Model structure — Writing Task 2</p>
          <h2 className="mt-2 text-xl font-black">Formal letter / email template</h2>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { label: "Salutation", example: "Madame, Monsieur," },
              { label: "Opening", example: "Je me permets de vous contacter afin de… / Suite à votre annonce, je vous écris pour…" },
              { label: "Paragraph 1", example: "Tout d'abord, [main point + reason / detail]" },
              { label: "Paragraph 2", example: "De plus, [second point] / En outre, [additional detail]" },
              { label: "Closing argument", example: "Pour ces raisons, je vous serais reconnaissant(e) de bien vouloir…" },
              { label: "Closing formula", example: "Dans l'attente de votre réponse, veuillez agréer mes cordiales salutations." },
              { label: "Signature", example: "[Your name]" },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-[#E7DAB9] p-3">
                <p className="text-xs font-black uppercase tracking-widest text-[#2563EB]">{row.label}</p>
                <p className="mt-1 italic text-[#526173]">{row.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each writing/speaking term to its definition.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Writing & speaking vocabulary" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Test your writing and speaking strategies.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Writing & speaking quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">TEF Canada skills complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 2 test to confirm your TEF Canada and immigration knowledge.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-2/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 2 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
