import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "La décision a été prise par le comité.", back: "The decision was taken by the committee.", subtext: "Passive voice: être + past participle. The actor (comité) comes after 'par'. Government texts use passive constantly — it avoids assigning personal responsibility." },
  { front: "La politique a été approuvée.", back: "The policy was approved.", subtext: "Another passive. Note: 'par' is often omitted when the actor is obvious or unimportant. 'A été approuvée' — past participle agrees with the subject (politique = feminine)." },
  { front: "Il convient de noter que…", back: "It should be noted that…", subtext: "Impersonal construction. 'Il convient de + infinitif' is formal for 'it is appropriate to / one should'. Very common in briefing notes and memos." },
  { front: "Il y a lieu de…", back: "There are grounds to… / It is necessary to…", subtext: "Another impersonal: 'Il y a lieu de procéder à une révision.' = There are grounds to carry out a review. More formal than 'il faut'." },
  { front: "Il est à noter que…", back: "It is to be noted that…", subtext: "Introduces an important point. 'Il est à noter que le délai a été prolongé.' = It is to be noted that the deadline has been extended." },
  { front: "la procédure (from procéder)", back: "Nominalization: the procedure / the process", subtext: "Government French converts verbs to nouns constantly. procéder → la procédure · mettre en œuvre → la mise en œuvre · décider → la décision. This makes sentences longer and more abstract." },
  { front: "le rapport dont nous avons besoin", back: "the report that we need (dont = of which)", subtext: "'Dont' replaces 'de + noun' and is used with verbs like avoir besoin de, parler de, tenir compte de. 'Le rapport dont il est question' = the report in question." },
  { front: "les mesures auxquelles il est fait référence", back: "the measures referred to (auxquelles = to which)", subtext: "'Auxquelles' = à + lesquelles. Used with verbs + 'à'. 'Les mesures auxquelles nous faisons référence' = the measures we are referring to. Common in Level C SLE texts." },
  { front: "lequel / laquelle / lesquels / lesquelles", back: "which / whom (formal relative pronoun)", subtext: "More formal than 'qui/que'. Used after prepositions: 'le comité au sein duquel…' = the committee within which… 'le programme grâce auquel…' = the programme thanks to which…" },
  { front: "Étant donné que…", back: "Given that… / Since…", subtext: "Formal equivalent of 'puisque' or 'vu que'. 'Étant donné que les ressources sont limitées, il convient de prioriser.' = Given that resources are limited, it is appropriate to prioritize." },
  { front: "À cet égard…", back: "In this regard… / In this respect…", subtext: "Connects a new sentence to what came before. 'À cet égard, il importe de souligner que…' = In this regard, it is important to highlight that… A Level B–C connector." },
  { front: "sous réserve de", back: "subject to / conditional upon", subtext: "'L'approbation est accordée sous réserve de la conformité aux lignes directrices.' = Approval is granted subject to compliance with the guidelines. Very common in government decisions." },
];

const matchPairs = [
  { left: "Il convient de noter que…", right: "It should be noted that…" },
  { left: "Il y a lieu de…", right: "There are grounds to…" },
  { left: "Il est à noter que…", right: "It is to be noted that…" },
  { left: "À cet égard…", right: "In this regard…" },
  { left: "sous réserve de", right: "subject to / conditional upon" },
  { left: "Étant donné que…", right: "Given that…" },
];

const quiz = [
  {
    question: "'La recommandation _____ par le sous-ministre.' Which passive construction is correct?",
    options: ["est formulée", "a été formulée", "a formulé", "formule"],
    correct: 1,
    explanation: "'A été formulée' is the correct passé composé passive — être (a été) + past participle (formulée, agreeing with 'la recommandation', feminine). 'Est formulée' (présent passif) would work too in the right context, but 'a été' is past.",
  },
  {
    question: "The sentence 'La décision a été prise par le directeur' means:",
    options: [
      "The director takes the decision",
      "The decision was taken by the director",
      "The decision will be taken by the director",
      "The director was taken by the decision",
    ],
    correct: 1,
    explanation: "Passive voice: 'a été prise' = was taken (passé composé passif). The subject (la décision) receives the action. The actor (le directeur) follows 'par'. Passive voice is everywhere in government French — you must read it fluently.",
  },
  {
    question: "'Le rapport _____ nous avons besoin sera distribué demain.' Which relative pronoun fits?",
    options: ["que", "qui", "dont", "où"],
    correct: 2,
    explanation: "'Dont' replaces 'de + noun' and is used because 'avoir besoin de' requires 'de'. 'Le rapport dont nous avons besoin' = the report that we need. This is the most tested relative pronoun distinction.",
  },
  {
    question: "'_____ les ressources soient limitées, le projet sera maintenu.' Which connector works here?",
    options: ["Étant donné que", "Bien que", "Il convient de", "À cet égard"],
    correct: 1,
    explanation: "'Bien que' = although — it requires the subjunctive ('soient'). 'Bien que les ressources soient limitées' = although resources are limited. 'Étant donné que' means 'given that' and takes the indicative, not the subjunctive.",
  },
  {
    question: "Government French converts verbs to nouns constantly. 'Mettre en œuvre' becomes:",
    options: ["la mise en œuvre", "le mettre en œuvre", "la mettant en œuvre", "l'œuvrement"],
    correct: 0,
    explanation: "Nominalization: 'mettre en œuvre' → 'la mise en œuvre' (implementation). Other examples: procéder → la procédure · décider → la décision · recommander → la recommandation. Recognizing these makes long sentences much easier to parse.",
  },
  {
    question: "A government document reads: 'L'approbation est accordée ___ de la conformité aux exigences.' Which phrase completes it?",
    options: ["à la suite", "sous réserve", "en dépit", "en fonction"],
    correct: 1,
    explanation: "'Sous réserve de' = subject to / conditional upon. 'L'approbation est accordée sous réserve de la conformité' = approval is granted subject to compliance. This phrase appears constantly in government decisions and conditions.",
  },
  {
    question: "'Il y a lieu de procéder à une révision immédiate.' What does this sentence mean?",
    options: [
      "There is no reason to carry out a review",
      "There are grounds to carry out an immediate review",
      "A review has already been completed",
      "The location requires an immediate review",
    ],
    correct: 1,
    explanation: "'Il y a lieu de' = there are grounds to / it is necessary to. This formal impersonal construction is more elevated than 'il faut'. 'Il y a lieu de procéder à' = there are grounds to carry out / proceed with.",
  },
  {
    question: "Which sentence is grammatically correct passive voice in the passé composé?",
    options: [
      "Le rapport a approuvé par le comité.",
      "Le rapport a été approuvé par le comité.",
      "Le rapport était approuvé par le comité.",
      "Le rapport avait approuvé le comité.",
    ],
    correct: 1,
    explanation: "Passé composé passive = avoir (a/ont) + été + past participle. 'Le rapport a été approuvé' = the report was approved. The participle agrees with the subject: rapport is masculine → approuvé (no -e).",
  },
];

export default function SLELesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Formal Grammar
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Government French is dense because it uses three specific structures constantly: passive voice, nominalization, and complex relative pronouns. Master these and long bureaucratic sentences become readable.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The three patterns</p>
              <div className="mt-2 space-y-2 text-sm text-white/80">
                <p><span className="font-black text-white">Passive voice</span> — 'La décision a été prise par…'</p>
                <p><span className="font-black text-white">Nominalization</span> — procéder → la procédure</p>
                <p><span className="font-black text-white">Complex relatives</span> — dont, lequel, auxquelles</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Impersonal constructions</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>Il convient de… → It is appropriate to…</p>
                <p>Il y a lieu de… → There are grounds to…</p>
                <p>Il est à noter que… → It is to be noted that…</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Structures in context</h2>
          <p className="mt-1 text-[#526173]">Every card shows the structure in a real government sentence. Flip to see the English and the explanation.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Formal grammar — passive, nominalization, connectors" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each formal phrase to its English equivalent.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Formal grammar phrases" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Breaking down a real government sentence</p>
          <p className="mt-3 text-lg italic text-[#526173] leading-8">
            &ldquo;Il convient de noter que les mesures auxquelles il est fait référence ont été approuvées sous réserve de la conformité aux lignes directrices établies par le Conseil du Trésor.&rdquo;
          </p>
          <div className="mt-5 space-y-2 text-sm text-[#526173]">
            <p><strong className="text-[#0B1F3A]">Il convient de noter que</strong> → It should be noted that</p>
            <p><strong className="text-[#0B1F3A]">les mesures auxquelles il est fait référence</strong> → the measures referred to (auxquelles = à + lesquelles)</p>
            <p><strong className="text-[#0B1F3A]">ont été approuvées</strong> → were approved (passive, passé composé)</p>
            <p><strong className="text-[#0B1F3A]">sous réserve de la conformité</strong> → subject to compliance</p>
            <p><strong className="text-[#0B1F3A]">aux lignes directrices établies par le Conseil du Trésor</strong> → with the guidelines established by the Treasury Board</p>
            <p className="mt-3 font-black text-[#0B1F3A]">Full meaning: It should be noted that the measures referred to were approved subject to compliance with the guidelines established by the Treasury Board.</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply the grammar</h2>
          <p className="mt-1 text-[#526173]">Test yourself on passive voice, relative pronouns, and formal impersonal constructions.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Formal grammar quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">Formal grammar mastered.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: writing government documents — the phrases, formulas, and structures for the SLE writing test.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/canadian-french-tests/unit-1/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
