import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "A TEF Canada reading text contains: 'Le gouvernement a annoncé son intention de réduire de moitié les émissions de gaz à effet de serre d'ici 2035, bien que les experts s'interrogent sur la faisabilité de cet objectif dans les délais impartis.' A test question asks what the experts think. The correct answer is:",
    options: [
      "The experts fully support the government's goal",
      "The experts are satisfied with the 2035 deadline",
      "The experts question whether the goal is achievable within the timeline",
      "The experts recommended the 50% reduction target",
    ],
    correct: 2,
    explanation: "'Bien que les experts s'interrogent sur la faisabilité' = although experts question the feasibility. 's'interroger sur' = to question / to wonder about. 'Faisabilité dans les délais impartis' = achievability within the given timeframe. The word 'bien que' signals concession — the experts are NOT in agreement with the government's confidence.",
  },
  {
    question: "TEF Canada Writing — Section A: You are given the opening of an article in third person about the rise of electric vehicles. Your continuation uses 'je' throughout. This is:",
    options: [
      "Acceptable — personal perspective adds depth to journalism",
      "A pertinence error — you must match the journalistic register of the given opening",
      "Acceptable if you are expressing an opinion",
      "Required — Section A always uses first person",
    ],
    correct: 1,
    explanation: "Section A requires you to continue the article in the SAME style. A journalistic opening in third person must be continued in third person. Switching to 'je' changes the register and breaks the coherence of the text — this is a pertinence error that significantly lowers your score.",
  },
  {
    question: "TEF Canada Listening: An audio says: 'Nous tenons à souligner que, malgré une légère hausse des prix ce trimestre, notre engagement envers les clients demeure inchangé.' The speaker's attitude toward customers is:",
    options: [
      "Apologetic about raising prices while reassuring customers",
      "Indifferent — they are only announcing a price change",
      "Critical of customer expectations",
      "Enthusiastic about the price increase",
    ],
    correct: 0,
    explanation: "'Nous tenons à souligner que' = we wish to emphasize — signals something important follows. 'Malgré une légère hausse' acknowledges the price rise; 'notre engagement demeure inchangé' reassures. The tone is apologetic-while-reassuring: 'yes, prices went up slightly, but we're still committed to you.' Listen for 'malgré' (despite) as a signal of this pattern.",
  },
  {
    question: "TEF Canada Oral Section B topic: 'Le travail à distance devrait être un droit pour tous les employés.' Which opening best fulfills the task?",
    options: [
      "'Le travail à distance est de plus en plus courant de nos jours.'",
      "'Certains pensent que le télétravail devrait être un droit, d'autres non.'",
      "'Je vais défendre la position suivante : le droit au télétravail représenterait une avancée sociale majeure. J'appuierai cette thèse sur deux arguments principaux : l'amélioration de l'équilibre vie-travail et la réduction des inégalités géographiques.'",
      "'Le télétravail est bien, c'est pratique.'",
    ],
    correct: 2,
    explanation: "Section B requires you to TAKE a position and PREVIEW your arguments. 'Je vais défendre… J'appuierai cette thèse sur deux arguments' is the correct formula: thesis + roadmap. Option A is a context statement, not a position. Option B describes the debate without entering it. Option D states an opinion without structure or justification.",
  },
  {
    question: "TEF Canada reading: A text about urban food security includes the sentence: 'Si des mesures correctives ne sont pas prises dans un délai raisonnable, les projections laissent entendre que la situation pourrait devenir critique pour les populations les plus vulnérables.' Which conclusion is supported?",
    options: [
      "The situation is already critical for vulnerable populations",
      "Without timely action, the situation risks becoming critical for the most vulnerable",
      "The projections confirm the situation is improving",
      "Vulnerable populations are not affected by food security issues",
    ],
    correct: 1,
    explanation: "'Si… ne sont pas prises' = if not taken → conditional. 'Pourraient devenir critique' = could become critical (not 'is already'). 'Les projections laissent entendre' = projections suggest (not confirm). Option A removes the conditionality. Option C misreads 'critique' as positive. This is a key reading skill: conditionals and hedging language ('pourraient', 'laissent entendre') mean the situation is not yet certain.",
  },
  {
    question: "TEF Canada Writing — Section B: You've written your two main arguments. What should the final paragraph contain?",
    options: [
      "A third argument to be thorough",
      "A summary of the opposing side's view",
      "A restatement of your thesis + a broader implication or call to action, opened with 'En conclusion'",
      "A list of the sources you consulted",
    ],
    correct: 2,
    explanation: "'En conclusion, il apparaît clairement que [thesis]. Il est donc essentiel que [call to action].' The conclusion restates your position (without just copying the introduction word-for-word) and adds a forward-looking implication. A third argument in the conclusion is structurally incorrect — new arguments belong in the body, not the conclusion.",
  },
  {
    question: "TEF Canada Listening: You hear a radio segment. The host says: 'On parle beaucoup de l'intelligence artificielle, mais force est de constater que son intégration dans l'éducation soulève autant de questions qu'elle n'en résout.' The host's tone is best described as:",
    options: [
      "Fully supportive of AI in education",
      "Strongly opposed to AI in education",
      "Measured and nuanced — acknowledging AI raises as many questions as it answers",
      "Confused about what AI is",
    ],
    correct: 2,
    explanation: "'Force est de constater que' signals an objective observation the speaker presents as undeniable. 'Soulève autant de questions qu'elle n'en résout' = raises as many questions as it resolves. This is a balanced, nuanced take — not fully supportive (would say 'AI is great') and not opposed (would say 'AI is dangerous'). Identify this measured register: it's very common in French journalism.",
  },
  {
    question: "TEF Canada Oral Section A: The scenario is: you are inquiring about renting an apartment and need to know about pet policy, lease length, utilities included, and application process. Which question addresses utility costs?",
    options: [
      "'Est-ce que c'est grand ?'",
      "'Les charges sont-elles incluses dans le loyer, ou payées séparément ?'",
      "'Combien de pièces y a-t-il ?'",
      "'Y a-t-il un parking ?'",
    ],
    correct: 1,
    explanation: "'Les charges' = utility costs and building fees in French real estate vocabulary. 'Incluses dans le loyer' = included in the rent. This is the correct and specific question for utilities. 'Est-ce que c'est grand ?' asks about size; 'parking' is not one of the four required pieces of information. In Section A, ask targeted questions that get you exactly what the scenario specifies.",
  },
  {
    question: "TEF Canada reading: A newspaper article includes: 'La biodiversité des forêts boréales, longtemps sous-estimée, joue un rôle crucial dans la régulation du climat à l'échelle planétaire, selon une étude publiée cette semaine dans la revue Nature.' Which element is explicitly attributed to an external source?",
    options: [
      "The fact that boreal forest biodiversity was underestimated",
      "The claim that biodiversity plays a crucial role in climate regulation",
      "The importance of global climate balance",
      "The existence of the journal Nature",
    ],
    correct: 1,
    explanation: "'Selon une étude publiée dans la revue Nature' attributes the claim that boreal forest biodiversity 'joue un rôle crucial dans la régulation du climat' to an external study. The fact that biodiversity was 'longtemps sous-estimée' is stated as background context, not attributed. 'Selon' (according to) is the attribution marker — always note it in reading questions about sourcing.",
  },
  {
    question: "TEF Canada Writing — Section A requires minimum 80 words and Section B requires minimum 200 words. Your Section B response has 190 words with 2 minutes remaining. You should:",
    options: [
      "Submit — 190 is close enough to 200",
      "Add one substantive sentence (e.g., a call to action in the conclusion) to reach 200+",
      "Copy your introduction at the end to reach the word count",
      "Stop writing — quality over quantity, and the examiner will understand",
    ],
    correct: 1,
    explanation: "200 words is the official minimum — falling short signals an incomplete response. Add one strong sentence: 'Il incombe donc aux décideurs de mettre en œuvre des politiques ambitieuses pour répondre à ce défi.' This is 17 words, substantive, and appropriate. Copying your introduction is padding (not content) and will lower your cohérence score. The examiner applies the minimum as a strict threshold.",
  },
];

export default function TEFTestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-black text-[#2563EB]">Unit 2 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">French for TEF Canada</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions covering all four TEF Canada sections: reading comprehension (text extracts), writing task strategies, listening comprehension (transcript-based), and oral expression scenarios.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 2 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Official TEF Canada resources</p>
          <p className="mt-3 leading-7 text-white/70">
            The Institut français des affaires (LFDA) administers the TEF Canada. Their official site has format details, sample exercises, and preparation information.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.lefrancaisdesaffaires.fr/en/candidate/test-evaluation-francais/tef-canada/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              TEF Canada official site ↗
            </a>
            <Link href="/resources/external-resources" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">
              Free practice resources →
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Course complete!</p>
          <h2 className="mt-3 text-3xl font-black">You&apos;ve finished French for Canadian Tests.</h2>
          <p className="mt-3 leading-7 text-white/70">
            You&apos;ve built government vocabulary, formal grammar, SLE written expression and reading skills, TEF Canada writing and speaking strategies, and listening comprehension techniques. Keep practising with authentic French.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests" className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">Review the course</Link>
            <Link href="/resources/external-resources" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5">External resources →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
