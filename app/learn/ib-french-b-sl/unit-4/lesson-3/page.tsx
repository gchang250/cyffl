import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "À mon avis…", back: "In my opinion…", subtext: "Safe, clear opener for sharing a personal view. Use it confidently in the discussion phase." },
  { front: "Je pense que… / Je crois que…", back: "I think that… / I believe that…", subtext: "Introduces an opinion. Follow with a reason to show Criterion B depth." },
  { front: "Il est essentiel que… (+ subjonctif)", back: "It is essential that…", subtext: "Strong, formal opinion phrase. Triggers the subjunctive: 'Il est essentiel que nous agissions maintenant.'" },
  { front: "D'après moi…", back: "As far as I'm concerned… / In my view…", subtext: "A slightly stronger version of 'à mon avis'. Good for clear takes on global issues." },
  { front: "Cela me préoccupe parce que…", back: "This concerns me because…", subtext: "Shows genuine engagement with the global issue. Examiners reward personal connection." },
  { front: "Il faut admettre que…", back: "One must admit that…", subtext: "Introduces a concession — showing you understand the other side. Raises Criterion C." },
  { front: "En ce qui concerne…", back: "Regarding… / As far as … is concerned…", subtext: "Useful for redirecting the conversation or introducing a new angle." },
  { front: "Par exemple…", back: "For example…", subtext: "Always back up an opinion with an example. The examiner expects development." },
  { front: "Si l'on considère que…", back: "If we consider that…", subtext: "Introduces evidence or context for your argument. Shows analytical thinking." },
  { front: "C'est une question complexe.", back: "It is a complex issue.", subtext: "Acknowledges nuance. Use when an issue has multiple sides — shows intellectual maturity." },
];

const matchPairs = [
  { left: "À mon avis…", right: "In my opinion…" },
  { left: "Il est essentiel que…", right: "It is essential that…" },
  { left: "Cela me préoccupe parce que…", right: "This concerns me because…" },
  { left: "Il faut admettre que…", right: "One must admit that…" },
  { left: "Par exemple…", right: "For example…" },
  { left: "C'est une question complexe.", right: "It is a complex issue." },
];

const quiz = [
  {
    question: "The examiner asks: 'Pensez-vous que les gouvernements font assez pour lutter contre le changement climatique?' A strong answer begins with:",
    options: ["'Oui.'", "'À mon avis, les gouvernements ne font pas assez, parce que…'", "'C'est difficile.'", "'Je ne sais pas.'"],
    correct: 1,
    explanation: "Start with an opinion phrase ('À mon avis'), state your position clearly, then develop with a reason. Never give a one-word answer.",
  },
  {
    question: "Which phrase introduces a concession — showing you understand the opposing view?",
    options: ["'Par exemple…'", "'Il faut admettre que…'", "'À mon avis…'", "'C'est une question complexe.'"],
    correct: 1,
    explanation: "'Il faut admettre que…' (one must admit that…) introduces a concession. Showing you understand both sides raises your Criterion C interactive skills score.",
  },
  {
    question: "'Il est essentiel que nous _____ maintenant.' What form of agir goes in the blank?",
    options: ["agissons", "agissez", "agissions", "agir"],
    correct: 2,
    explanation: "Il est essentiel que triggers the subjunctive. The subjunctive of agir in first person plural is 'agissions': 'il est essentiel que nous agissions'.",
  },
  {
    question: "After giving your opinion, what should you always do next?",
    options: ["Wait for the examiner to respond", "Add 'Par exemple…' and give a concrete example or reason", "Change the topic", "Summarise your point again"],
    correct: 1,
    explanation: "Every opinion needs development. 'Par exemple…' followed by a specific example shows Criterion B message depth. Examiners expect development, not just statements.",
  },
  {
    question: "The examiner pushes back: 'Certains disent que la mondialisation profite à tout le monde. Qu'en pensez-vous?' You should:",
    options: ["Agree with them immediately to avoid conflict", "Repeat exactly what you said before", "Engage with the counterargument and develop your own view", "Ask them to change the topic"],
    correct: 2,
    explanation: "Criterion C rewards interactive, spontaneous discussion. Engage with the counterargument: 'Il faut admettre que… cependant, à mon avis…'",
  },
  {
    question: "The examiner asks you to explain your position further. Which response best demonstrates Criterion A (language) and Criterion C (interaction)?",
    options: [
      "'Oui, je suis d'accord.'",
      "'Je ne sais pas comment expliquer.'",
      "'Pour être plus précis, je dirais que… ce qui me semble particulièrement important, c'est…'",
      "'C'est difficile à expliquer.'",
    ],
    correct: 2,
    explanation: "'Pour être plus précis, je dirais que…' buys time while showing sophistication. 'Ce qui me semble particulièrement important, c'est…' uses a cleft structure (ce qui…, c'est…) that signals upper-register French. Both develop the response spontaneously — exactly what Criterion C assesses.",
  },
  {
    question: "What vocabulary do you need to discuss the IB theme 'Sharing the Planet' during the Individual Oral discussion?",
    options: [
      "Vocabulary from novels and literary texts",
      "Vocabulary for environmental issues: la durabilité, l'empreinte carbone, les inégalités, les droits de l'homme",
      "Technical vocabulary from a science textbook",
      "Everyday vocabulary for food, weather, and travel",
    ],
    correct: 1,
    explanation: "Sharing the Planet discussions require environmental and social vocabulary: la durabilité (sustainability), l'empreinte carbone (carbon footprint), les inégalités (inequalities), la mondialisation (globalisation), les droits de l'homme (human rights). Build this vocabulary before the oral.",
  },
  {
    question: "Which phrase correctly introduces a nuanced view during the IO discussion?",
    options: [
      "'Tout le monde sait que…'",
      "'Je n'ai pas d'opinion là-dessus.'",
      "'La situation est complexe : d'un côté… de l'autre…'",
      "'Je suis complètement sûr(e) que…'",
    ],
    correct: 2,
    explanation: "'La situation est complexe : d'un côté… de l'autre…' demonstrates critical thinking and Criterion B message depth. IB examiners reward nuance — showing you understand multiple perspectives is valued much more than expressing only one strong opinion.",
  },
];

export default function Unit4Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 4 · Lesson 3
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Discussing Global Issues
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The opinion phrases, concession language, and discussion strategies you
              need for the examiner conversation — the 6–9 minutes where Criterion C
              interactive skills are fully tested.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Every good oral answer has three parts:{" "}
                <span className="font-black text-white">opinion + reason + example</span>.
                Say what you think, explain why, and give a specific example.
                Never just say oui or non.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Opinion → Reason → Example</p>
              <div className="mt-2 space-y-1 text-sm">
                <p><strong>Opinion:</strong> À mon avis, c'est un problème grave.</p>
                <p><strong>Reason:</strong> Parce que les émissions augmentent.</p>
                <p><strong>Example:</strong> Par exemple, en 2023, les températures ont battu des records.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Discussion phrases</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. These phrases are what high-scoring students actually say.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Global issue discussion language" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each discussion phrase to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Discussion phrases" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Apply discussion strategies to realistic examiner questions.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Discussing global issues quiz" />
          </div>
        </section>

        {/* Tense guide for examiner questions */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Listen to the question — it tells you the tense</h2>
          <p className="mt-1 text-[#526173]">The examiner's wording is a direct signal. Use it to choose the right tense — it's one of the clearest ways to show Criterion A range.</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-[#2563EB] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Examiner asks…</p>
              <p className="mt-2 font-black text-[#0B1F3A]">&ldquo;Que feriez-vous dans cette situation ?&rdquo;</p>
              <p className="mt-0.5 text-sm italic text-[#526173]">&ldquo;What would you do in this situation?&rdquo;</p>
              <div className="mt-4 rounded-xl bg-[#EFF6FF] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">→ Answer in the conditional</p>
                <div className="mt-2 space-y-1 text-sm italic text-[#526173]">
                  <p>« Je ferais davantage d'efforts pour… »</p>
                  <p>« Je choisirais de… parce que… »</p>
                  <p>« Ce serait important de sensibiliser… »</p>
                  <p>« J'essaierais de convaincre… »</p>
                </div>
              </div>
              <Link href="/resources/verbs-conditionnel" className="mt-3 inline-block text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
                Review le conditionnel →
              </Link>
            </div>

            <div className="rounded-2xl border-2 border-[#9333EA] bg-white p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]">Examiner asks…</p>
              <p className="mt-2 font-black text-[#0B1F3A]">&ldquo;Que faut-il faire pour que les choses changent ?&rdquo;</p>
              <p className="mt-0.5 text-sm italic text-[#526173]">&ldquo;What must be done so that this changes?&rdquo;</p>
              <div className="mt-4 rounded-xl bg-[#FDF4FF] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#9333EA]">→ Answer in the subjunctive</p>
                <div className="mt-2 space-y-1 text-sm italic text-[#526173]">
                  <p>« Il faut que nous agissions immédiatement. »</p>
                  <p>« Pour que les choses changent, il est essentiel que… »</p>
                  <p>« Afin que la situation s'améliore, il faudrait que… »</p>
                  <p>« Il est nécessaire que les gouvernements prennent… »</p>
                </div>
              </div>
              <Link href="/resources/verbs-subjonctif" className="mt-3 inline-block text-sm font-black text-[#9333EA] hover:opacity-80">
                Review le subjonctif →
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">All four units complete.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 4 test and you've finished the full IB French B SL course. Good luck on your exams.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-4/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Unit 4 Test →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
