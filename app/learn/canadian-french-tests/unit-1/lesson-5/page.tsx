import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// SLE Oral Interaction: 20–40 minute conversational interview (OLA format).
// Assessor begins with Level A tasks and progresses to B, then C as warranted.
// Assessed on: fluency, comprehension, vocabulary range, grammar, pronunciation clarity.
// Contexts: role-plays, work scenarios, opinion questions, hypotheticals.

const flashcards = [
  { front: "l'évaluation linguistique orale (OLA)", back: "Oral Language Assessment — the current SLE oral format", subtext: "The OLA flows like a real workplace conversation. The assessor adapts based on your responses — answering well at Level A leads to Level B questions. You cannot jump ahead by guessing." },
  { front: "le scénario professionnel", back: "professional scenario / workplace role-play", subtext: "The assessor describes a work situation and plays a role (colleague, manager, client). Example: 'Vous devez expliquer à un nouveau collègue comment soumettre une demande de remboursement.' Stay in character; use professional register." },
  { front: "expliquer une procédure", back: "to explain a procedure or process", subtext: "A core Level B oral task. You are asked to walk someone through a process step by step. Use: 'Tout d'abord…', 'Ensuite…', 'Il faut que vous…', 'N'oubliez pas de…', 'Finalement…'" },
  { front: "donner son avis sur un sujet professionnel", back: "to give an opinion on a work-related topic", subtext: "A Level C task. 'Selon vous, comment devrait-on améliorer la communication interne dans votre équipe?' Answer clearly: opinion + reason + example. Avoid one-word answers." },
  { front: "répondre à une hypothèse", back: "to respond to a hypothetical situation", subtext: "Level C: 'Que feriez-vous si votre équipe devait réduire son budget de 20% sans réduire les services?' Use the conditional: 'Je chercherais…', 'Il faudrait que nous…', 'Ce que je ferais, c'est de…'" },
  { front: "reformuler / clarifier", back: "to rephrase / to ask for clarification", subtext: "If you don't understand a question, it is acceptable to ask politely: 'Pourriez-vous reformuler la question ?' or 'Si je comprends bien, vous me demandez de…' This does NOT lower your score if used once or twice." },
  { front: "maintenir la conversation", back: "to sustain the conversation — keep it going", subtext: "Level C is partly about whether you can keep a conversation going without long pauses. Strategies: elaborate on your answers, give examples, ask a clarifying follow-up. Don't give short replies and stop." },
  { front: "le registre professionnel à l'oral", back: "professional spoken register", subtext: "The oral test uses workplace contexts. Avoid very informal expressions. But spoken French is not as rigid as written: contractions ('j'vais', 'y a') and connectors ('ben', 'alors', 'en fait') are acceptable at all levels." },
  { front: "structurer sa réponse", back: "to structure your spoken response", subtext: "Even in spoken French, structure helps: 'Il y a deux points que je voudrais soulever. D'abord… Ensuite…' Shows the assessor you can organize ideas coherently — directly rewarded at Level C." },
  { front: "la fluidité / le débit", back: "fluency / speaking rate", subtext: "Natural speaking pace without excessive pauses. Self-corrections are normal and acceptable. Long silences hurt your score more than minor grammar mistakes. Keep talking; circle back to correct yourself if needed." },
];

const matchPairs = [
  { left: "OLA", right: "Oral Language Assessment — current SLE oral format" },
  { left: "le scénario professionnel", right: "workplace role-play" },
  { left: "expliquer une procédure", back: "core Level B oral task", right: "walk someone through a process" },
  { left: "répondre à une hypothèse", right: "Level C — use the conditional" },
  { left: "reformuler / clarifier", right: "ask politely if you don't understand" },
  { left: "maintenir la conversation", right: "keep talking, elaborate, don't give one-word answers" },
];

const quiz = [
  {
    question: "The assessor asks: 'Pouvez-vous m'expliquer comment vous organisez votre charge de travail quand vous avez plusieurs priorités simultanées?' This is most likely a Level:",
    options: ["Level A — basic vocabulary", "Level B — requires elaboration and work-specific vocabulary", "Level C — hypothetical or abstract argument", "Not a valid SLE question type"],
    correct: 1,
    explanation: "This is a Level B task. It asks for a real-world explanation of a professional practice — organized, coherent, using work vocabulary. Level A would be simpler ('describe your job'). Level C would involve a hypothetical or require you to argue a position.",
  },
  {
    question: "The assessor asks: 'Que feriez-vous si on vous demandait de défendre une décision avec laquelle vous n'êtes pas d'accord?' The best opening is:",
    options: [
      "'Je refuserais.'",
      "'C'est une bonne question.'",
      "'Avant tout, je tenterais de comprendre les raisons derrière la décision. Ensuite, si on me demandait de la défendre, je mettrais en avant les aspects positifs tout en…'",
      "'Je ne sais pas trop.'",
    ],
    correct: 2,
    explanation: "Level C hypothetical — use the conditional, structure your answer, and demonstrate nuance. 'Avant tout… Ensuite…' shows organization. Addressing both 'understanding the decision' and 'defending it' shows you understood the full question. Never say 'je ne sais pas' — develop something.",
  },
  {
    question: "Which approach best handles a long pause when you can't immediately recall the word you want?",
    options: [
      "Stay silent until you remember",
      "Switch to English for that word",
      "Use a different structure or a synonym: 'Ce que je veux dire, c'est que…' or 'comment dirais-je…'",
      "Ask the assessor to give you the word",
    ],
    correct: 2,
    explanation: "'Ce que je veux dire, c'est que…' buys you time and keeps the conversation going. 'Comment dirais-je…' is a natural spoken filler. Staying silent is worse than finding a workaround. Switching to English signals inability to function in French.",
  },
  {
    question: "'Expliquez à votre nouveau collègue comment soumettre une demande de congé.' Which structure is best for this Level B task?",
    options: [
      "'C'est facile, tu le fais en ligne.'",
      "'Tout d'abord, vous devez accéder au portail RH. Ensuite, cliquez sur «demande de congé» et remplissez le formulaire. N'oubliez pas de joindre l'approbation de votre superviseur. Finalement, soumettez le formulaire au moins deux semaines à l'avance.'",
      "'Je ne suis pas sûr du processus exact.'",
      "'Il y a plusieurs étapes, c'est compliqué.'",
    ],
    correct: 1,
    explanation: "Explanation tasks require clear step-by-step structure: Tout d'abord → Ensuite → N'oubliez pas → Finalement. Include relevant details (the portal, the supervisor approval, the timeline). 'C'est facile' followed by nothing is a Level A response at best.",
  },
  {
    question: "The assessor asks a follow-up question. You answered it already in your previous response. You should:",
    options: [
      "Say 'Je viens de répondre à cette question'",
      "Stay silent",
      "Develop a new angle, add detail, or give an example — treat it as an invitation to elaborate",
      "Ask the assessor to repeat what they said earlier",
    ],
    correct: 2,
    explanation: "Follow-up questions in the OLA are often invitations to go deeper, not signs you got something wrong. Use them: 'Pour compléter ce que je disais…' or 'Je voudrais ajouter un exemple…' This shows Level C conversational skill — sustaining and developing a dialogue.",
  },
  {
    question: "The assessor asks: 'Quelles sont, selon vous, les priorités du gouvernement en matière de…?' How should you structure your answer?",
    options: [
      "Give a one-sentence opinion and stop",
      "Say you're not sure and ask for clarification",
      "State your position, give 2–3 supporting points, and conclude — using discourse markers like 'D'abord… ensuite… enfin'",
      "List every possible priority you can think of without analysis",
    ],
    correct: 2,
    explanation: "A Level B–C answer to an opinion question is structured: position + reasons + conclusion. 'À mon avis, les priorités sont… D'abord… Ensuite… En conclusion.' This mirrors written argumentation and scores well on both organization and language.",
  },
  {
    question: "The SLE oral interaction assesses you against which language levels?",
    options: [
      "Only Level A (the basic level)",
      "Levels A, B, and C — the assessor calibrates based on your demonstrated ability",
      "Level C only — anything below is an automatic fail",
      "One fixed level determined before the test",
    ],
    correct: 1,
    explanation: "The SLE assesses at levels A, B, and C. The assessor calibrates the difficulty of questions based on your responses during the test — performing well can lead to progressively harder C-level scenarios. Most federal positions require levels B or C.",
  },
  {
    question: "You are asked: 'Décrivez votre parcours professionnel.' Which response demonstrates Level C oral ability?",
    options: [
      "'J'ai travaillé dans des bureaux différents.'",
      "'J'ai travaillé dans un bureau.'",
      "'Au fil des années, j'ai occupé plusieurs postes à responsabilité croissante dans le domaine de la gestion de projets, ce qui m'a permis de développer des compétences variées en leadership et en communication.'",
      "'Mon travail, c'est dans les bureaux du gouvernement.'",
    ],
    correct: 2,
    explanation: "The third option demonstrates Level C: complex structure ('au fil des années'), sophisticated vocabulary ('à responsabilité croissante', 'ce qui m'a permis de'), and professional register. The others are Level A or B responses — minimal grammar, simple vocabulary, no development.",
  },
];

export default function SLELesson5Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
              Unit 1 · Lesson 5
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Oral Interaction
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The SLE oral test is a 20–40 minute conversational interview. The assessor starts with Level A tasks and progresses based on your answers. It rewards development, structure, and the ability to keep a professional conversation going.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">What the assessor looks for</p>
              <div className="mt-2 space-y-1 text-sm text-white/80">
                <p>• <span className="font-black text-white">Fluency</span> — natural pace, minimal pauses</p>
                <p>• <span className="font-black text-white">Comprehension</span> — do you understand the question?</p>
                <p>• <span className="font-black text-white">Vocabulary range</span> — specific, professional words</p>
                <p>• <span className="font-black text-white">Grammar</span> — consistent tense, agreement</p>
                <p>• <span className="font-black text-white">Pronunciation</span> — clear enough to be understood</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Level progression in the OLA</p>
              <div className="mt-2 space-y-1 text-sm text-[#526173]">
                <p><strong>Level A:</strong> Simple identification, basic description</p>
                <p><strong>Level B:</strong> Explanation, narration, comparison</p>
                <p><strong>Level C:</strong> Argument, hypothesis, abstract discussion</p>
                <p className="mt-1 text-xs">The assessor decides when to move up based on your answers.</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key vocabulary and strategies</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand the oral task type or strategy.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="SLE Oral — task types & strategies" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#FEF3C7] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D97706]">Useful oral structures by level</p>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {[
              {
                level: "Level A — basic description",
                phrases: [
                  "Je m'appelle… / Je travaille comme…",
                  "Mon rôle consiste à…",
                  "Nous utilisons… / Nous travaillons avec…",
                  "Il y a [nombre] étapes.",
                ],
              },
              {
                level: "Level B — explanation & narration",
                phrases: [
                  "Tout d'abord… Ensuite… Finalement…",
                  "Il faut que vous… / N'oubliez pas de…",
                  "Par exemple, dans mon équipe…",
                  "La principale difficulté, c'est que…",
                ],
              },
              {
                level: "Level C — argument & hypothesis",
                phrases: [
                  "À mon avis, la meilleure approche serait de…",
                  "Ce que je ferais, c'est de… parce que…",
                  "Il faudrait que nous… / Il serait essentiel de…",
                  "D'un côté… ; de l'autre…",
                  "Il faut admettre que… cependant…",
                ],
              },
            ].map((col) => (
              <div key={col.level}>
                <p className="text-xs font-black uppercase tracking-widest text-[#D97706]">{col.level}</p>
                <ul className="mt-3 space-y-1">
                  {col.phrases.map((p) => (
                    <li key={p} className="rounded-xl bg-[#FFFDF7] px-3 py-2 text-sm italic text-[#526173]">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Oral interaction vocabulary" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Apply your oral strategies</h2>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Oral interaction quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <h2 className="mt-3 text-3xl font-black">SLE French done.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Take the Unit 1 test, then move on to Unit 2 — the French you need for TEF Canada and immigration.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-4" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-1/test" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Unit 1 Test →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
