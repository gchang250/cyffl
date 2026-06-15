import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A Paper 2 question says 'Vrai ou Faux + Justification: l'entreprise a été fondée en 2010.' You mark Vrai. What must you also do to earn the mark?",
    options: [
      "Write a sentence explaining why in your own words",
      "Copy the exact words from the text that prove it: both are required",
      "Underline the relevant sentence",
      "Nothing: Vrai alone earns the mark",
    ],
    correct: 1,
    explanation: "Both the Vrai/Faux AND the direct quote are required. If you only write Vrai without copying the justification from the text, you get zero for that question.",
  },
  {
    question: "A question says 'Trouvez les mots qui complètent la phrase. Utilisez les mots tels qu'ils apparaissent dans le texte.' You should:",
    options: [
      "Paraphrase the relevant part of the text in your own words",
      "Translate the answer into English first, then back into French",
      "Copy the exact words from the text: no paraphrasing",
      "Write a full sentence from the text",
    ],
    correct: 2,
    explanation: "'Tels qu'ils apparaissent dans le texte' means copy exactly. Don't change the form of the word, don't paraphrase, don't summarise.",
  },
  {
    question: "A synonym-matching question gives you the word 'instabilité (ligne 17)' and a list including: mobilité / insatisfaction / déclin. How do you choose?",
    options: [
      "Pick the word that sounds most similar to instabilité",
      "Read line 17 in context and pick the synonym that fits the author's meaning there",
      "Always pick the shortest option",
      "Use the dictionary definition of instabilité",
    ],
    correct: 1,
    explanation: "The line number is given for a reason. Context changes meaning: read the sentence around the word to find which synonym the author intends in that specific usage.",
  },
  {
    question: "You are asked to 'Choisissez les quatre affirmations vraies.' You are confident about 3 and unsure between two options for the 4th. What do you do?",
    options: [
      "Write all 5 to maximise your chances",
      "Leave the 4th blank",
      "Go back to the text and verify both options word by word, then commit to one",
      "Pick the one with more words: it's usually right",
    ],
    correct: 2,
    explanation: "Writing 5 when asked for 4 means only your first 4 are marked: order matters. Go back and verify. The answer is always explicitly in the text.",
  },
  {
    question: "A fill-in-the-blank gives you 10 words for 5 gaps. After filling 4, two words remain for the last gap. How do you choose?",
    options: [
      "Pick the longer word",
      "Pick whichever sounds better out loud",
      "Use grammar (gender/number/tense) and context to eliminate the wrong option",
      "Use the word you haven't used yet: it must be the right one",
    ],
    correct: 2,
    explanation: "Use grammar first: if the gap needs a feminine noun and one option is masculine, eliminate it. Then use context: which word makes logical sense in that sentence?",
  },
  {
    question: "A pronoun reference question asks: 'À qui ou à quoi fait référence «auxquelles» (ligne 25)?' How do you answer?",
    options: [
      "Write 'a relative pronoun'",
      "Write 'them'",
      "Go back to the text, identify the plural feminine noun 'auxquelles' refers to, and copy it",
      "Translate the sentence containing 'auxquelles'",
    ],
    correct: 2,
    explanation: "Find the noun the pronoun replaces by reading the surrounding lines. 'Auxquelles' is plural feminine: find the plural feminine noun it refers to and copy it exactly from the text.",
  },
  {
    question: "Read the question first or the text first?",
    options: [
      "Always read the full text first, then the questions",
      "Read the questions first so you know what to look for when you read the text",
      "Read the questions and the text at exactly the same time",
      "It doesn't matter: the approach has no effect on your score",
    ],
    correct: 1,
    explanation: "Reading questions first focuses your attention. You'll read the text more efficiently when you already know what information you need to find.",
  },
  {
    question: "A multiple-choice question (A/B/C/D) has one answer that seems obviously right. Should you verify it against the text?",
    options: [
      "No: if it seems obvious, trust your instinct and move on",
      "Yes: check the relevant part of the text before committing, even if it seems obvious",
      "Only if you have time at the end",
      "Only if you feel uncertain",
    ],
    correct: 1,
    explanation: "Always verify. The IB writes multiple-choice options to look plausible: the 'obvious' answer is sometimes a trap that is contradicted by a detail in the text.",
  },
  {
    question: "You see 'ne…seulement' in the text. A statement says the text implies something broader. This is most likely:",
    options: ["Vrai", "Faux: 'seulement' limits the claim", "On ne sait pas", "Vrai, because 'seulement' is informal"],
    correct: 1,
    explanation: "Negatives and limiting words like 'seulement' (only), 'jamais' (never), 'rarement' (rarely) narrow the meaning. A statement that ignores this limitation is Faux.",
  },
  {
    question: "What is the maximum mark for Paper 2 reading?",
    options: ["25 marks", "30 marks", "40 marks", "50 marks"],
    correct: 2,
    explanation: "Paper 2 reading is out of 40 marks and counts for 25% of the final IB French B SL grade.",
  },
];

export default function Unit2TestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← IB French B SL
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Paper 2 — Receptive Skills</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering all real Paper 2 reading question types: from T/F with justification to pronoun reference, synonym matching, and gap fill.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 3?</p>
          <p className="mt-2 text-[#526173]">Unit 3 covers Paper 1 — written production, text type conventions, register, and writing techniques.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-2/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/ib-french-b-sl/unit-3/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 3 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
