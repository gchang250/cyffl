import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// TEF Canada Written Expression — official format:
// Section A (25 min): Continue an article — minimum 80 words
// Section B (35 min): Express and justify a viewpoint — minimum 200 words
// Both are open-ended writing tasks, NOT multiple choice.
// Scored on: pertinence, cohérence, vocabulaire, morphosyntaxe.

const flashcards = [
  { front: "Section A — Continuation d'article (80 mots min.)", back: "Continue an article — minimum 80 words, 25 minutes", subtext: "You are given the opening paragraph(s) of a journalistic or informational article. You continue it in the same style, tone, and register. Match the author's voice — if the opening is formal and factual, your continuation should be too." },
  { front: "Section B — Expression d'un point de vue (200 mots min.)", back: "Express and justify a viewpoint — minimum 200 words, 35 minutes", subtext: "You are given a statement or topic and must express your opinion AND justify it with arguments. This is an argumentative text — state your position clearly, support it with at least two arguments, and include a conclusion." },
  { front: "la pertinence", back: "relevance / staying on task", subtext: "The most important criterion. In Section A, your continuation must be consistent with the article's subject and tone. In Section B, your response must address the statement given — not a related topic you prefer." },
  { front: "la cohérence et la cohésion", back: "coherence (logical flow) + cohesion (linguistic links)", subtext: "Coherence: ideas progress logically. Cohesion: you use connectors and pronouns to link sentences. 'Cependant', 'de plus', 'par conséquent', 'c'est pourquoi' all create cohesion. Avoid starting every sentence with 'Je'." },
  { front: "la morphosyntaxe", back: "grammar — agreement, conjugation, sentence structure", subtext: "The examiner checks agreement (adjective, participle), verb conjugation, and sentence structure. You lose marks for systematic errors — repeated agreement mistakes signal a structural gap. Vary your sentence structures." },
  { front: "le registre journalistique", back: "journalistic register — for Section A", subtext: "Journalistic French is formal but direct. Uses the present tense for current facts, the passé composé for recent events. Avoids first-person (use 'on', 'les experts', 'les études montrent'). No 'je pense que' — state facts or attribute opinions to sources." },
  { front: "le texte argumentatif", back: "argumentative text — for Section B", subtext: "Structure: introduction (restate the topic + your position) → argument 1 + support → argument 2 + support → conclusion (restate position + call to action or broader implication). Each argument needs a specific example or evidence." },
  { front: "la thèse", back: "thesis — your main position in Section B", subtext: "'À mon avis, …' or 'Il me semble que …' stated clearly in the introduction. Then every argument should support this thesis. Don't change your position mid-text — examiners value consistency." },
  { front: "l'exemple concret", back: "concrete example — essential for Section B", subtext: "After each argument, add 'Par exemple, …' or 'C'est le cas de …' A claim without evidence reads as unsupported. Even approximate examples work — the examiner is not fact-checking your statistics, only assessing your French." },
  { front: "la conclusion de Section B", back: "conclusion — final paragraph of Section B", subtext: "'En conclusion, …' or 'Pour conclure, …' + restate your thesis + broader implication or call to action. 'Il est donc essentiel que la société prenne des mesures pour…' A conclusion without a connector is just an abrupt ending." },
];

const matchPairs = [
  { left: "Section A — continuation d'article", right: "continue an article in the same style" },
  { left: "Section B — point de vue", right: "argue a position with evidence" },
  { left: "la pertinence", right: "staying on the given topic" },
  { left: "le registre journalistique", right: "formal, third-person, present tense for facts" },
  { left: "la thèse", right: "your stated position in Section B" },
  { left: "la morphosyntaxe", right: "grammar — agreement and conjugation" },
];

const quiz = [
  {
    question: "Section A gives you the opening of an article about urban cycling infrastructure. The opening uses the third person, present tense, and cites statistics. Your continuation should:",
    options: [
      "Switch to first person to give your personal opinion on cycling",
      "Continue in third person, present tense, citing facts or expert views — matching the journalistic register",
      "Add a personal anecdote about a time you rode a bike",
      "Start a new topic more interesting than cycling",
    ],
    correct: 1,
    explanation: "Section A requires you to continue the article in the SAME style. If it's journalistic (third person, present tense, factual), your continuation must match. Switching to first person or changing topic is a serious pertinence error that collapses your score.",
  },
  {
    question: "Section B asks: 'Les réseaux sociaux ont-ils plus d'effets négatifs que positifs sur la jeunesse ?' Your Section B introduction should:",
    options: [
      "Describe what social media is and how it works",
      "State your position clearly: 'À mon avis, les réseaux sociaux ont effectivement plus d'effets négatifs que positifs, notamment parce que…'",
      "Say this is a complex question with no easy answer",
      "List all the features of social media platforms",
    ],
    correct: 1,
    explanation: "Section B is argumentative. Your introduction must state your thesis — your clear position on the question. 'À mon avis… notamment parce que' signals your position AND previews your first argument. Describing social media or saying 'it's complex' without taking a position fails the pertinence criterion.",
  },
  {
    question: "In Section B, you've stated your thesis and written your first argument. What must come immediately after the argument?",
    options: [
      "Your conclusion",
      "A transition to the counter-argument",
      "A concrete example or evidence supporting the argument",
      "A definition of the key term",
    ],
    correct: 2,
    explanation: "Every argument in Section B needs support: 'Par exemple, …' or 'Selon une étude de …' or 'C'est le cas en France, où …'. A claim with no example is unsubstantiated. The examiner isn't fact-checking — give any relevant example. An unsupported argument reads as an opinion, not an argument.",
  },
  {
    question: "Which sentence correctly opens a Section B conclusion?",
    options: [
      "'Je pense donc que les réseaux sociaux sont mauvais.'",
      "'En conclusion, il apparaît clairement que les effets négatifs des réseaux sociaux sur la jeunesse l'emportent sur leurs avantages. Il est donc essentiel que…'",
      "'Pour finir, voilà mon opinion sur ce sujet.'",
      "'C'est tout ce que j'ai à dire.'",
    ],
    correct: 1,
    explanation: "'En conclusion, il apparaît clairement que…' restates the thesis formally. 'Il est donc essentiel que…' adds a call to action or broader implication — this is the hallmark of a high-scoring conclusion. The first option is grammatically fine but too casual; the others are not appropriate for a written exam.",
  },
  {
    question: "Your Section B text has 185 words. You have 3 minutes left. You should:",
    options: [
      "Submit — close enough to 200",
      "Add one more substantive sentence to your conclusion to reach 200+ words",
      "Copy your introduction at the end to pad the word count",
      "Stop writing and leave it at 185 — quality over quantity",
    ],
    correct: 1,
    explanation: "200 words is the official minimum — falling short signals an incomplete response and can cap your score. Add one solid sentence: 'Il incombe aux gouvernements et aux plateformes de mettre en place des mesures de protection adaptées.' This is substantive, not padding, and gets you over the threshold.",
  },
  {
    question: "Section A of the TEF Canada writing test asks you to 'continue an article.' Which of the following is the single most important constraint?",
    options: [
      "Use the exact same vocabulary as the original article",
      "Match the register, tone, and topic direction of the given text",
      "Contradict the main argument in the article",
      "Write in a different tense than the original",
    ],
    correct: 1,
    explanation: "Section A continuation writing must maintain coherence with the original — same topic direction, same register (formal/journalistic), same tone. You're extending the article, not starting a new one. The examiner assesses whether the continuation feels natural and consistent.",
  },
  {
    question: "Which of the following correctly uses a 'pour que' structure at the level expected in TEF writing?",
    options: [
      "'Pour que le problème se résout, il faut agir.'",
      "'Pour que le problème soit résolu, les gouvernements doivent investir davantage.'",
      "'Pour que les solutions, on doit les mettre en place.'",
      "'Pour que résoudre le problème, il faut des lois.'",
    ],
    correct: 1,
    explanation: "'Pour que' always requires the subjunctive: 'pour que le problème soit résolu.' The first option incorrectly uses indicative ('se résout'). 'Pour que' + subjunctive is a high-level structure that signals B2+ and scores on Criterion A/langue.",
  },
  {
    question: "TEF Canada Section B gives you a statement and asks you to argue for or against it. What should your introduction do?",
    options: [
      "Agree with the statement and explain why",
      "Present the topic, briefly acknowledge both sides, and clearly state your position",
      "Start writing your arguments immediately",
      "Give a personal anecdote about the topic",
    ],
    correct: 1,
    explanation: "A strong Section B introduction: (1) introduces the topic/debate, (2) acknowledges complexity ('D'un côté… de l'autre…'), (3) clearly states your thesis. This three-part structure is what examiners look for — it signals organization and register from the first paragraph.",
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
              TEF Canada — Written Expression
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The TEF Canada writing test has two open-ended tasks in one hour. Section A: continue a journalistic article (80+ words, 25 min). Section B: express and justify your opinion on a topic (200+ words, 35 min).
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The four marking criteria</p>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                <p>1. <span className="font-black text-white">Pertinence</span> — did you address the actual task?</p>
                <p>2. <span className="font-black text-white">Cohérence</span> — do ideas flow logically?</p>
                <p>3. <span className="font-black text-white">Vocabulaire</span> — range and precision of vocabulary</p>
                <p>4. <span className="font-black text-white">Morphosyntaxe</span> — grammar, agreement, conjugation</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Section B structure</p>
              <div className="mt-2 space-y-1 text-sm text-[#526173]">
                <p>Introduction — state your thesis + preview arguments</p>
                <p>Argument 1 + concrete example</p>
                <p>Argument 2 + concrete example</p>
                <p>(Optional: counterargument + response)</p>
                <p>Conclusion — restate + call to action</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key concepts and vocabulary</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand both writing tasks and their requirements.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada Written Expression — both sections" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Side by side — the two writing tasks</p>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-black text-[#0B1F3A]">Section A — Continue an article</p>
              <p className="mt-1 text-sm text-[#526173]">25 minutes · minimum 80 words</p>
              <ul className="mt-3 space-y-2 text-sm text-[#526173]">
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Match the register and tone of the opening</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Stay in third person — avoid 'je'</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Continue the same topic — don't introduce a new one</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Use journalistic connectors: 'En outre…', 'Par ailleurs…', 'Ainsi…'</li>
              </ul>
              <div className="mt-4 rounded-xl bg-[#FFFDF7] p-4 text-sm italic text-[#526173]">
                <p className="font-black not-italic text-[#0B1F3A] mb-2">Given opening:</p>
                <p>&ldquo;Le nombre de cyclistes dans les grandes villes canadiennes a augmenté de 35 % en cinq ans. Cette tendance s&apos;explique par plusieurs facteurs…&rdquo;</p>
                <p className="font-black not-italic text-[#0B1F3A] mt-3 mb-2">Strong continuation:</p>
                <p>&ldquo;Parmi ceux-ci, l&apos;amélioration des infrastructures cyclables joue un rôle déterminant. En effet, la création de pistes protégées a permis d&apos;attirer des cyclistes qui hésitaient auparavant en raison des risques liés au trafic. Par ailleurs, la montée en popularité des vélos électriques a rendu le cyclisme accessible à des groupes autrefois peu représentés…&rdquo;</p>
              </div>
            </div>
            <div>
              <p className="font-black text-[#0B1F3A]">Section B — Express your viewpoint</p>
              <p className="mt-1 text-sm text-[#526173]">35 minutes · minimum 200 words</p>
              <ul className="mt-3 space-y-2 text-sm text-[#526173]">
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>State your thesis clearly in the first paragraph</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Two arguments minimum, each with an example</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Concession strengthens your argument: 'Certes… cependant…'</li>
                <li className="flex gap-2"><span className="text-[#2563EB] font-black shrink-0">→</span>Conclude with 'En conclusion…' + restate thesis</li>
              </ul>
              <div className="mt-4 rounded-xl bg-[#FFFDF7] p-4 text-sm italic text-[#526173]">
                <p className="font-black not-italic text-[#0B1F3A] mb-2">Given topic:</p>
                <p>&ldquo;Le télétravail devrait être généralisé dans tous les secteurs.&rdquo;</p>
                <p className="font-black not-italic text-[#0B1F3A] mt-3 mb-2">Strong opening:</p>
                <p>&ldquo;À mon avis, la généralisation du télétravail représente une avancée majeure pour la qualité de vie des travailleurs, même si elle ne peut s&apos;appliquer uniformément à tous les secteurs. En effet, deux arguments principaux soutiennent cette position…&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="TEF Writing — key terms" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply your knowledge</h2>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="TEF Written Expression quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Written Expression understood.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the TEF Canada listening test — 40 questions in 40 minutes, must answer as you go.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-2" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-4" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
