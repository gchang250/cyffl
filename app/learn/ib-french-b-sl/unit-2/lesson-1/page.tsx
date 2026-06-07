import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  {
    front: "Choisissez N affirmations vraies",
    back: "Choose N true statements",
    subtext: "You're given 6–8 statements and must pick the correct number that are true. Read every option carefully against the text before committing.",
  },
  {
    front: "Trouvez les mots / Complétez les phrases",
    back: "Find the words / Complete the sentences",
    subtext: "A sentence stem is given and you complete it using words exactly as they appear in the text. Copy precisely — don't paraphrase.",
  },
  {
    front: "Choisissez la bonne réponse",
    back: "Choose the correct answer (A/B/C/D)",
    subtext: "Standard multiple choice. Go back to the text for each option — eliminate wrong answers rather than guessing.",
  },
  {
    front: "Choisissez la fin appropriée",
    back: "Choose the appropriate ending",
    subtext: "Sentence beginnings are given; you match each to the correct ending from a list. There are always more endings than sentences.",
  },
  {
    front: "Reliez les mots à leur équivalent",
    back: "Match the words to their synonyms",
    subtext: "Vocabulary in context: a word from the text is given with a line number, and you match it to a synonym from a list. Use the context of the sentence, not just the word alone.",
  },
  {
    front: "Remplissez les blancs",
    back: "Fill in the blanks from a word bank",
    subtext: "A summary or paragraph has gaps; you choose from a list of 8–10 words. There are always more words than blanks — use grammar and logic to eliminate.",
  },
  {
    front: "Vrai ou Faux + Justification",
    back: "True or False + quote from the text",
    subtext: "State Vrai or Faux, then copy words directly from the text to justify. Both are required for the mark — you get nothing if you only give the T/F without the quote.",
  },
  {
    front: "Répondez aux questions",
    back: "Answer the questions",
    subtext: "Short-answer questions. The answer is always in the text — find the relevant sentence and quote it or use its exact wording.",
  },
  {
    front: "À qui / à quoi fait référence…",
    back: "Who / what does the underlined word refer to?",
    subtext: "Pronoun reference questions: an underlined pronoun (lui, elles, auxquelles, etc.) is given and you identify what or who it refers to using the text.",
  },
  {
    front: "Utilisez les mots tels qu'ils apparaissent",
    back: "Use the words exactly as they appear in the text",
    subtext: "A repeated instruction meaning: don't translate, don't paraphrase, don't summarise. Copy the exact form of the word from the text.",
  },
];

const matchPairs = [
  { left: "Choisissez la bonne réponse", right: "Multiple choice A/B/C/D" },
  { left: "Vrai ou Faux + Justification", right: "T/F + direct quote from text" },
  { left: "Reliez les mots à leur équivalent", right: "Match words to synonyms" },
  { left: "Remplissez les blancs", right: "Fill in blanks from word bank" },
  { left: "À qui fait référence…", right: "Pronoun reference question" },
  { left: "Complétez les phrases", right: "Sentence completion with text words" },
];

const quiz = [
  {
    question: "A question says 'Vrai ou Faux — l'entreprise a été fondée en 2010. Justifiez avec le texte.' You mark Vrai. What must you also do?",
    options: [
      "Write a full sentence explaining why it is true",
      "Copy the exact words from the text that prove it",
      "Translate the relevant part into English",
      "Nothing — the Vrai alone earns the mark",
    ],
    correct: 1,
    explanation: "Both the Vrai/Faux AND the direct quote are required for the mark. Copy the exact words from the text — if you only write Vrai without justification, you get zero.",
  },
  {
    question: "A question says 'Reliez le mot «instabilité» (ligne 17) à son équivalent.' The options are: mobilité / insatisfaction / déclin. How do you answer?",
    options: [
      "Pick whichever synonym sounds most like instabilité in isolation",
      "Read line 17 in context to find the meaning the author intends, then match",
      "Always choose the longest option",
      "Use the definition you know from a dictionary",
    ],
    correct: 1,
    explanation: "Always use the context of the sentence — the line number is given for a reason. The correct synonym fits how the word is used in that specific sentence, not its general meaning.",
  },
  {
    question: "A question asks you to 'Choisissez les quatre affirmations vraies.' You've found 4 that seem correct, but a 5th is also plausible. What do you do?",
    options: [
      "Write all 5 to be safe — you'll get partial credit",
      "Go back to the text and verify each one carefully, then commit to 4",
      "Pick the 4 that look most obvious without re-reading",
      "Leave one blank",
    ],
    correct: 1,
    explanation: "Go back to the text and check each statement word-by-word. If you write 5 when asked for 4, you get marked only on the first 4 you wrote — order matters. Verify, then commit.",
  },
  {
    question: "A fill-in-the-blank question gives you 10 words for 5 gaps. After placing 4 words, only one option seems to fit grammatically and logically for the last gap. You should:",
    options: [
      "Use any remaining word — all gaps must be filled",
      "Leave the gap blank if you're unsure",
      "Use the word that fits the grammar and logic of the sentence",
      "Re-use a word already placed elsewhere",
    ],
    correct: 2,
    explanation: "Use the word that fits grammatically (right gender/number) and logically (makes sense in context). There are more words than gaps precisely to test whether you can distinguish the right one.",
  },
  {
    question: "A pronoun reference question asks: '…Ses capteurs lui servent… (ligne 19) — À qui ou à quoi fait référence «lui»?' How should you answer?",
    options: [
      "Write 'a personal pronoun used here'",
      "Find the noun 'lui' refers to in the preceding lines and copy it from the text",
      "Write 'the author' since lui refers to a person",
      "Translate 'lui' as 'him'",
    ],
    correct: 1,
    explanation: "Go back to the text and identify the noun that 'lui' replaces. Copy it exactly as it appears in the text. Pronouns always refer to a specific previously mentioned noun — find it.",
  },
  {
    question: "A question says 'Choisissez les TROIS affirmations vraies parmi les six suivantes.' You find three clearly true statements but a fourth is also plausible. What do you do?",
    options: [
      "Write all four — you might get partial credit",
      "Return to the text to verify each one, then commit to exactly three",
      "Pick the three longest statements",
      "Leave one blank if you're not sure",
    ],
    correct: 1,
    explanation: "Return to the text and verify each candidate statement word-by-word. If you write four when three are asked for, only the first three you wrote are marked — order matters. Verify carefully, then commit to exactly the number asked.",
  },
  {
    question: "A 'Complétez les phrases' question gives you the stem 'L'auteur affirme que les réseaux sociaux…'. You must complete it. What is the rule?",
    options: [
      "Paraphrase the text using your own words",
      "Use words from the text exactly as they appear — do not paraphrase",
      "Complete the sentence with your own opinion",
      "Translate the relevant part of the text into English",
    ],
    correct: 1,
    explanation: "For sentence completion questions, copy the exact words from the text — do not paraphrase. The instruction 'utilisez les mots tels qu'ils apparaissent dans le texte' applies to most completion question types. Paraphrasing can introduce errors and loses marks.",
  },
  {
    question: "After finishing all the questions for a reading text, what should you do with the 3 minutes remaining before moving to the next text?",
    options: [
      "Wait quietly for the next section",
      "Review your answers for the current text — check any you were uncertain about",
      "Begin reading the next text ahead of time",
      "Rest — you've earned it",
    ],
    correct: 1,
    explanation: "Use any remaining time to review uncertain answers in the current text. Check them against the text again — it's faster than reading the next text without the questions in mind. Don't leave answers blank if you have time to revisit them.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 2 · Lesson 1
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Reading Comprehension
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Paper 2 reading is 25% of your grade, out of 40 marks. It covers three texts — and each text uses different question types. Know them all.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The key rule</p>
              <p className="mt-2 leading-7 text-white/80">
                The answer is <span className="font-black text-white">always in the text</span>. Every question type is testing whether you can locate the right information — not whether you have general knowledge. Use your common sense and trust what the text actually says.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Question types you will see</p>
              <ul className="mt-2 space-y-1 text-sm text-[#0B1F3A]">
                <li>→ Choose N true statements from a list</li>
                <li>→ Sentence completion (exact text words)</li>
                <li>→ Multiple choice A/B/C/D</li>
                <li>→ Match sentence endings / synonyms</li>
                <li>→ Gap fill from a word bank</li>
                <li>→ True/False + direct quote justification</li>
                <li>→ Short answer questions</li>
                <li>→ Pronoun reference questions</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Question type reference cards</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. Know exactly what each question type is asking.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Paper 2 reading — question types" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each question instruction to what it's asking you to do.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Reading question types" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply the right strategy for each question type.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Reading comprehension strategies quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">All reading question types covered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the grammar structures that appear most in Paper 2 reading texts.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              Back to course
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
