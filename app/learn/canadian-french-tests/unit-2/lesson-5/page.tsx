import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// TEF Canada Oral Expression: official format:
// Section A (5 min): Information-gathering conversation: you ask questions to get info
// Section B (10 min): Persuasive argument: present and defend a position
// Both sections are recorded. Test is 15 minutes total.

const flashcards = [
  { front: "Section A: Collecte d'informations (5 min)", back: "Information-gathering conversation: you ask the questions", subtext: "YOU play a role that requires information. The examiner plays the person who has it (a service agent, a landlord, an organizer). You must ask the right questions to gather everything the scenario requires. Think of it as: you're the interviewer." },
  { front: "Section B: Exposé persuasif (10 min)", back: "Persuasive argument presentation: 10 minutes", subtext: "You are given a topic or position and must present arguments to convince the examiner. This is structured: introduce your position → 2–3 arguments with examples → conclusion. The examiner may ask follow-up questions." },
  { front: "poser des questions pour obtenir des informations", back: "asking questions to gather information: Section A core skill", subtext: "Section A is about asking, not answering. Use question structures: 'Quelles sont les conditions pour…?' 'Pourriez-vous me préciser…?' 'Est-ce que… est compris dans le tarif?' 'Dans quel délai…?' Stay in character: you need this information." },
  { front: "les questions ouvertes vs fermées", back: "open vs closed questions", subtext: "Closed: 'Le parking est-il inclus ?' (yes/no answer). Open: 'Quelles sont les modalités de paiement ?' (detailed answer). In Section A, open questions get you more information. Vary between both: don't ask only yes/no questions." },
  { front: "structurer son exposé", back: "structuring a persuasive presentation", subtext: "Section B structure: 'Je vais vous présenter ma position sur [topic]. Selon moi, [thesis].' → Argument 1: 'Tout d'abord…' → Argument 2: 'De plus…' → Conclusion: 'En conclusion, il me semble indéniable que…' A clearly structured exposé is easier for the examiner to follow and score." },
  { front: "convaincre avec des preuves", back: "persuading with evidence and examples", subtext: "Don't just state opinions: support them. 'Par exemple, en France, les entreprises qui ont adopté la semaine de 4 jours ont constaté une hausse de productivité de 20 %.' Even approximate or invented statistics demonstrate argumentation skill. The examiner tests your French, not your factual accuracy." },
  { front: "reformuler si nécessaire", back: "rephrase if you lose your thread", subtext: "If you lose your place, don't go silent. 'Ce que je veux dire, c'est que…' or 'Autrement dit…' or 'Pour revenir à mon argument principal…' These fillers are natural in spoken French and signal competence, not weakness." },
  { front: "répondre aux questions du jury", back: "handling follow-up questions in Section B", subtext: "After your exposé, the examiner may probe: 'Mais certains diraient que…, qu'en pensez-vous ?' Respond to the challenge directly: 'C'est une objection recevable. Cependant, il faut considérer que…' Engaging with a counterargument shows Level C interaction." },
  { front: "la fluidité à l'oral", back: "spoken fluency: natural pace and no long pauses", subtext: "TEF oral is recorded. The examiner listens for natural flow. Self-corrections ('je voulais dire…') are normal. Long silences are not. If you blank on a word, describe it: 'le document qui prouve qu'on a payé' (instead of 'le reçu')." },
  { front: "le registre de l'oral formel", back: "formal spoken register: appropriate for the TEF context", subtext: "TEF Canada oral uses formal but natural contexts. Avoid very informal expressions ('super', 'bof', 'nan'). Use: 'en effet', 'il convient de noter', 'à cet égard', 'selon moi'. Occasional spoken connectors like 'donc', 'alors', 'en fait' are fine." },
];

const matchPairs = [
  { left: "Section A (5 min)", right: "you ask questions to gather information" },
  { left: "Section B (10 min)", right: "persuasive argument presentation" },
  { left: "poser des questions ouvertes", right: "get more detailed information" },
  { left: "convaincre avec des preuves", right: "use examples to support each argument" },
  { left: "reformuler si nécessaire", right: "'Ce que je veux dire, c'est que…'" },
  { left: "répondre aux questions du jury", right: "engage with the examiner's counter-argument" },
];

const quiz = [
  {
    question: "Section A scenario: You are looking for a French course for adults. You must find out the schedule, cost, level requirements, and how to register. Which question set is most effective?",
    options: [
      "'Avez-vous des cours de français ?' then wait",
      "'Quels sont les horaires des cours pour adultes ? Quel est le coût ? Y a-t-il des prérequis de niveau ? Et comment puis-je m'inscrire ?'",
      "'Est-ce que c'est bien ici pour les cours ?' then 'C'est cher ?'",
      "'Parlez-moi de vos cours.' then stop asking",
    ],
    correct: 1,
    explanation: "Effective Section A uses specific, targeted questions covering all the required information: schedule, cost, level requirements, and registration. Asking one vague question and waiting is not enough: you must drive the information-gathering yourself. The examiner won't volunteer information you didn't ask for.",
  },
  {
    question: "Section B topic: 'Les villes devraient interdire les voitures dans leurs centres-villes.' Your opening should be:",
    options: [
      "'Les voitures sont mauvaises pour l'environnement.'",
      "'C'est un sujet intéressant. Je pense que c'est compliqué.'",
      "'Je vais défendre la position suivante : l'interdiction des voitures dans les centres-villes serait bénéfique à plusieurs égards, notamment pour la qualité de l'air et la sécurité des piétons.'",
      "'Selon certains, les voitures devraient être interdites, mais d'autres pensent le contraire.'",
    ],
    correct: 2,
    explanation: "'Je vais défendre la position suivante : …' immediately signals you've understood the task. Stating thesis + previewing two arguments ('qualité de l'air et sécurité des piétons') is the ideal structured opening. Option D describes debate positions without taking one: this doesn't fulfill the persuasive brief.",
  },
  {
    question: "You are mid-way through Section B and lose the French word for 'congestion.' The best response is:",
    options: [
      "Stop speaking and look at the examiner",
      "Say 'congestion' in English",
      "Describe it: 'le problème de trop de voitures dans les mêmes rues au même moment'",
      "Skip the point entirely and move to your conclusion",
    ],
    correct: 2,
    explanation: "Circumlocution: describing what you mean: is a mark of linguistic competence, not a sign of weakness. The examiner sees you can communicate even without the exact word. Staying silent or switching to English signals inability to function in French. Skipping a point weakens your argument.",
  },
  {
    question: "After your Section B exposé, the examiner says: 'Mais n'est-il pas vrai que les petits commerces dépendent des clients qui viennent en voiture ?' The best response is:",
    options: [
      "'Vous avez raison, mon argument était faux.'",
      "'Ce n'est pas pertinent.'",
      "'C'est une objection légitime. Cependant, les études montrent que les rues piétonnes augmentent en réalité le chiffre d'affaires des commerces locaux, car les piétons s'arrêtent plus volontiers que les automobilistes.'",
      "'Je n'ai pas pensé à ça.'",
    ],
    correct: 2,
    explanation: "'C'est une objection légitime. Cependant…' acknowledges the counter-argument respectfully, then responds with counter-evidence. This is Level C oral interaction: you don't abandon your position, but you engage seriously with the challenge. Never concede your entire argument: that collapses your Section B.",
  },
  {
    question: "In Section A, you need to ask about cancellation policy. Which question is most natural and effective?",
    options: [
      "'Est-ce qu'il y a une politique d'annulation ?'",
      "'Quelles sont les conditions d'annulation et y a-t-il des frais si je dois me désister ?'",
      "'C'est possible d'annuler ?'",
      "'Et pour annuler ?'",
    ],
    correct: 1,
    explanation: "'Quelles sont les conditions d'annulation et y a-t-il des frais si je dois me désister ?' asks for both the policy AND the financial implications in one structured question. This shows you've thought ahead about what information you need. 'C'est possible d'annuler ?' is A-level: it's a yes/no question that gives you minimal information.",
  },
  {
    question: "TEF Canada Section A oral (information gathering) is a conversation about a life scenario. Which strategy best raises your score?",
    options: [
      "Ask as many yes/no questions as possible to cover all topics",
      "Ask open, structured questions using 'Quels sont…', 'Comment…', 'Dans quelles conditions…' to gather complete information",
      "Let the interlocutor guide all topics: respond but don't ask",
      "Use only present tense to avoid grammar errors",
    ],
    correct: 1,
    explanation: "Open questions give you richer information and demonstrate oral competency. 'Quels sont les délais de livraison ?' gives you more than 'Est-ce que la livraison est rapide ?' The examiner also assesses whether you extract all necessary information: open questions are more efficient.",
  },
  {
    question: "In Section B of the TEF Canada oral (persuasive presentation), how should you handle an objection from the examiner?",
    options: [
      "Say 'Je ne suis pas d'accord' and repeat your original point",
      "Concede your argument completely",
      "Acknowledge the objection respectfully, then respond with a counter-argument or evidence",
      "Say you need more time to think about it",
    ],
    correct: 2,
    explanation: "Acknowledge + counter: 'C'est une objection légitime. Cependant, les données montrent que…': this shows you can engage critically without abandoning your position. The examiner is testing whether you can maintain a persuasive stance under challenge. Conceding entirely signals weak oral argumentation.",
  },
  {
    question: "What is the minimum CLB level required in all four TEF Canada skills to be eligible for Express Entry immigration?",
    options: ["CLB 5", "CLB 6", "CLB 7", "CLB 9"],
    correct: 2,
    explanation: "CLB 7 in all four skills (reading, listening, writing, speaking) is the minimum required for French first official language applicants in Express Entry's Federal Skilled Worker, Canadian Experience Class, and Federal Skilled Trades programs. Falling below CLB 7 in any one skill makes an application ineligible.",
  },
];

export default function TEFLesson5Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 5
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              TEF Canada: Oral Expression
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              15 minutes, two sections, fully recorded. Section A: you drive an information-gathering conversation (5 min). Section B: you present a persuasive argument on a given topic (10 min). Both are assessed by a trained examiner.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">The two sections</p>
              <div className="mt-2 space-y-3 text-sm">
                <div>
                  <p className="font-black text-white">Section A — 5 minutes</p>
                  <p className="mt-1 text-white/70">You need information. The examiner has it. Ask targeted questions to get everything the scenario requires.</p>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <p className="font-black text-white">Section B — 10 minutes</p>
                  <p className="mt-1 text-white/70">You defend a position. Structured: thesis → 2–3 arguments with examples → conclusion. Examiner may challenge you.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Both sections are recorded</p>
              <p className="mt-2 text-sm text-[#526173]">Your response is assessed by a trained examiner, not software. The examiner uses a rubric based on: task completion, vocabulary range, grammar, fluency, and coherence. Being understood matters more than perfection.</p>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary and strategies</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand both oral tasks in depth.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada Oral: Section A & Section B" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Section A — useful question frames</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Asking about cost", ex: "'Quel est le tarif pour… ?' / 'Y a-t-il des frais supplémentaires ?'" },
              { label: "Asking about schedule", ex: "'Quels sont les horaires / les disponibilités pour… ?'" },
              { label: "Asking about conditions", ex: "'Quelles sont les conditions pour… ?' / 'Quels documents sont nécessaires ?'" },
              { label: "Asking about process", ex: "'Comment se déroule… ?' / 'Quelle est la procédure pour… ?'" },
              { label: "Asking about cancellation", ex: "'Quelles sont les conditions d'annulation ?' / 'Y a-t-il des pénalités si… ?'" },
              { label: "Clarifying / confirming", ex: "'Si je comprends bien… ?' / 'Pourriez-vous préciser… ?'" },
            ].map((q) => (
              <div key={q.label} className="rounded-xl border border-[#E7DAB9] p-3">
                <p className="text-xs font-black uppercase tracking-widest text-[#2563EB]">{q.label}</p>
                <p className="mt-1 text-sm italic text-[#526173]">{q.ex}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border-2 border-[#F0FDF4] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Section B — argument scaffold</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { part: "Opening", ex: "'Je vais défendre la position suivante : [thesis]. Pour ce faire, je développerai deux arguments principaux.'" },
              { part: "Argument 1", ex: "'Tout d'abord, [argument]. En effet, [development]. Par exemple, [concrete example].'" },
              { part: "Argument 2", ex: "'De plus, [argument]. On peut illustrer cela avec [example].'" },
              { part: "Concession (optional)", ex: "'Certes, certains pourraient avancer que [opposing view]. Cependant, [counter].'" },
              { part: "Conclusion", ex: "'En conclusion, [restate thesis]. Il est donc essentiel que [call to action or broader implication].'" },
            ].map((row) => (
              <div key={row.part} className="rounded-xl border border-[#E7DAB9] p-3 grid sm:grid-cols-[100px_1fr] gap-2">
                <p className="text-xs font-black uppercase tracking-widest text-[#16A34A]">{row.part}</p>
                <p className="italic text-[#526173]">{row.ex}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Oral expression vocabulary" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply your strategies</h2>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="TEF Canada Oral quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <h2 className="mt-3 text-3xl font-black">TEF Canada French done.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 2 test to consolidate everything: topic vocabulary, writing, listening, and oral strategies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/test" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Unit 2 Test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
