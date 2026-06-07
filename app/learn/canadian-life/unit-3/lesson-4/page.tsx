import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "Parlez-moi de vous.",
    back: "Je suis étudiant(e) en [domaine] et j'ai une passion pour...",
    subtext: "Tell me about yourself. — Keep it professional: education, experience, interest in the role.",
  },
  {
    front: "Quelles sont vos forces?",
    back: "Je dirais que ma principale qualité est...",
    subtext: "What are your strengths? — 'Je dirais que' = I would say that. Confident but not arrogant.",
  },
  {
    front: "Quelles sont vos faiblesses?",
    back: "Je travaille à améliorer [faiblesse], notamment en...",
    subtext: "What are your weaknesses? — Name a real one, then show what you're doing about it.",
  },
  {
    front: "Pourquoi voulez-vous ce poste?",
    back: "Ce qui m'attire particulièrement dans ce poste, c'est...",
    subtext: "Why do you want this position? — 'Ce qui m'attire' = what draws me to it.",
  },
  {
    front: "Bilingualism question",
    back: "Je suis à l'aise de travailler autant en français qu'en anglais.",
    subtext: "I am comfortable working in both French and English. — Clear and reassuring.",
  },
  {
    front: "Décrivez votre expérience.",
    back: "Dans mon précédent poste, j'étais chargé(e) de...",
    subtext: "In my previous position, I was responsible for... — leads into a concrete example.",
  },
  {
    front: "Travail en équipe",
    back: "Je m'épanouis particulièrement en équipe.",
    subtext: "I particularly thrive in a team environment. — 's'épanouir' = to flourish / thrive.",
  },
  {
    front: "Closing question to the interviewer",
    back: "Quelles sont les prochaines étapes du processus?",
    subtext: "What are the next steps in the process? — Shows initiative and genuine interest.",
  },
  {
    front: "Où vous voyez-vous dans cinq ans?",
    back: "Je souhaite évoluer vers un rôle de [poste] et contribuer à...",
    subtext: "I hope to move into a [role] and contribute to... — Shows ambition and alignment.",
  },
  {
    front: "Avez-vous des questions pour nous?",
    back: "Oui — Qu'est-ce qui vous plaît particulièrement dans la culture de cet organisme?",
    subtext: "Always have a question ready. Asking about culture shows genuine interest.",
  },
  {
    front: "Thanking the interviewers",
    back: "Je vous remercie pour le temps que vous m'avez accordé.",
    subtext: "Thank you for the time you have given me. — Warm, professional close.",
  },
  {
    front: "Adapting to a new environment",
    back: "Je suis capable de m'adapter rapidement à de nouveaux contextes de travail.",
    subtext: "I am capable of adapting quickly to new work environments. — Versatility signal.",
  },
];

const pairs = [
  { left: "Parlez-moi de vous.", right: "Je suis étudiant(e) en... et j'ai une passion pour..." },
  { left: "Quelles sont vos forces?", right: "Je dirais que ma principale qualité est..." },
  { left: "Pourquoi voulez-vous ce poste?", right: "Ce qui m'attire particulièrement, c'est..." },
  { left: "Travail en équipe", right: "Je m'épanouis particulièrement en équipe." },
  { left: "Closing question", right: "Quelles sont les prochaines étapes du processus?" },
  { left: "Thanking the panel", right: "Je vous remercie pour le temps accordé." },
];

const exercises = [
  {
    before: "Ce qui m'",
    after: "particulièrement dans ce poste, c'est l'occasion de travailler en équipe bilingue.",
    answer: "attire",
    hint: "Attirer — to attract / to draw. 'Ce qui m'attire' = what draws me to it.",
    translation: "What particularly draws me to this position is the opportunity to work in a bilingual team.",
  },
  {
    before: "Dans mon précédent poste, j'étais",
    after: "de la gestion du calendrier de la direction générale.",
    answer: "chargé(e)",
    hint: "Chargé(e) de = responsible for / in charge of. Key CV and interview verb.",
    translation: "In my previous position, I was responsible for managing the executive office calendar.",
  },
  {
    before: "Je suis à l'aise de travailler autant en français",
    after: "en anglais.",
    answer: "qu'en",
    hint: "'Autant... que...' = as much... as... The second element takes 'qu'en' before a language.",
    translation: "I am comfortable working in both French and English.",
  },
  {
    before: "Je me",
    after: "particulièrement en équipe et je valorise la collaboration.",
    answer: "épanouis",
    hint: "S'épanouir — to flourish / to thrive. Je m'épanouis = I thrive.",
    translation: "I particularly thrive in a team setting and I value collaboration.",
  },
  {
    before: "Quelles sont les prochaines",
    after: "du processus de sélection?",
    answer: "étapes",
    hint: "Étapes = steps / stages. 'Les prochaines étapes' = the next steps.",
    translation: "What are the next steps in the selection process?",
  },
];

const questions = [
  {
    question: "What does 's'épanouir' mean in an interview context?",
    options: [
      "To apply for a job",
      "To work overtime",
      "To thrive / to flourish",
      "To present a report",
    ],
    correct: 2,
    explanation: "'Je m'épanouis particulièrement en équipe' means 'I particularly thrive in a team environment.' S'épanouir conveys enthusiasm and genuine engagement, making it a strong interview word.",
  },
  {
    question: "How do you say 'What are your weaknesses?' in French?",
    options: [
      "Quelles sont vos forces?",
      "Pourquoi voulez-vous ce poste?",
      "Quelles sont vos faiblesses?",
      "Où vous voyez-vous dans cinq ans?",
    ],
    correct: 2,
    explanation: "'Faiblesses' are weaknesses (singular: faiblesse). 'Forces' are strengths. These two often appear together in Canadian French job interviews.",
  },
  {
    question: "What is the STAR method called in French?",
    options: [
      "SAVE — Situation, Action, Valeur, Effet",
      "STAR — Situation, Tâche, Action, Résultat",
      "PACE — Problème, Analyse, Compétence, Effet",
      "FARE — Fait, Action, Résultat, Expérience",
    ],
    correct: 1,
    explanation: "The STAR method is used directly in French as Situation, Tâche, Action, Résultat. It structures answers to behavioural questions ('Décrivez une situation où...').",
  },
  {
    question: "What is the best closing question to ask in a French job interview?",
    options: [
      "Combien est le salaire?",
      "Quelles sont les prochaines étapes du processus?",
      "Quand est-ce que je commence?",
      "Pourquoi avez-vous besoin de moi?",
    ],
    correct: 1,
    explanation: "'Quelles sont les prochaines étapes du processus?' is professional, shows initiative, and prompts the interviewer to share the timeline — ideal to close the conversation.",
  },
  {
    question: "How do you answer 'Parlez-moi de vous' (Tell me about yourself) in a French job interview?",
    options: [
      "Talk about your hobbies and personal life for 5 minutes",
      "Give a 1–2 minute professional summary: your background, key experience, and why you're interested in this role",
      "Summarise your CV word-for-word",
      "Ask the interviewer to read your CV instead",
    ],
    correct: 1,
    explanation: "'Parlez-moi de vous' is the classic opening. The ideal response is 1–2 minutes structured as: formation (education/background), expérience clé (key experience), and pourquoi ce poste (why this role). Keep it professional and relevant — this isn't a personal story.",
  },
  {
    question: "What does 'Quelles sont vos principales forces?' test, and how should you respond?",
    options: [
      "It tests how well you know sports — answer with 3 sports you excel at",
      "It tests self-awareness — name 2–3 concrete, relevant strengths and give brief examples",
      "It tests your knowledge of company policy",
      "It tests your language ability only — any answer is acceptable",
    ],
    correct: 1,
    explanation: "'Quelles sont vos principales forces?' = What are your main strengths? Give 2–3 professional strengths (e.g., rigueur, capacité de gestion, communication bilingue) and support each briefly with an example. Don't say 'Je suis travailleur' without evidence.",
  },
  {
    question: "What is the correct way to discuss a past professional challenge using the STAR structure in French?",
    options: [
      "Décrivez le problème le plus difficile de votre carrière in detail",
      "Situation: context → Tâche: your role → Action: what you specifically did → Résultat: the outcome",
      "Read from your CV to avoid mistakes",
      "Focus only on the result and skip the story",
    ],
    correct: 1,
    explanation: "STAR in French: Situation (contexte) → Tâche (what you had to do) → Action (what you specifically did) → Résultat (the outcome). This structure is expected for 'behavioral questions' like 'Décrivez une situation où…' It shows you can communicate clearly and analytically in French.",
  },
  {
    question: "An interviewer asks: 'Avez-vous des questions pour nous?' What should you do?",
    options: [
      "Say 'Non, merci' — it's polite not to take more of their time",
      "Ask about salary immediately",
      "Ask 2–3 thoughtful questions about the role, team, or growth opportunities",
      "Ask if you got the job",
    ],
    correct: 2,
    explanation: "Always have questions prepared. Not asking signals lack of interest. Good questions: 'Comment décririez-vous la culture de l'équipe ?' (What would you describe as the team culture?) or 'Quelles sont les possibilités d'évolution dans ce rôle ?' (What are the growth opportunities?) Avoid asking about salary in the first interview.",
  },
];

export default function Unit3Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 3 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Job Interview French</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              French job interviews in Canada follow predictable patterns. Whether you're interviewing for a federal public service role, a Quebec Crown corporation, or a bilingual NGO, the questions are consistent — and so are the expectations for how to answer them.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Knowing how to answer common questions in formal, fluent French makes a lasting impression. This lesson gives you the key phrases and the STAR method in French for behavioural questions.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Common interview question types</p>
            <div className="mt-3 space-y-3 text-sm">
              {[
                ["Parlez-moi de vous.", "Tell me about yourself."],
                ["Pourquoi voulez-vous ce poste?", "Why do you want this position?"],
                ["Quelles sont vos forces / vos faiblesses?", "What are your strengths / weaknesses?"],
                ["Décrivez une situation difficile que vous avez surmontée.", "Describe a difficult situation you overcame."],
                ["Où vous voyez-vous dans cinq ans?", "Where do you see yourself in five years?"],
                ["Avez-vous des questions pour nous?", "Do you have any questions for us?"],
              ].map(([fr, en]) => (
                <div key={fr} className="border-b border-[#F0EDD8] pb-3 last:border-0 last:pb-0">
                  <p className="font-bold text-[#0B1F3A]">{fr}</p>
                  <p className="text-[#526173]">{en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">The STAR method in French</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Situation · Tâche · Action · Résultat</p>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
            {[
              ["S", "Situation", "Describe the context."],
              ["T", "Tâche", "Explain your role or task."],
              ["A", "Action", "Detail the specific steps you took."],
              ["R", "Résultat", "Share the measurable outcome."],
            ].map(([letter, word, desc]) => (
              <div key={letter} className="rounded-xl bg-white/10 p-3">
                <p className="text-2xl font-black text-[#4ADE80]">{letter}</p>
                <p className="font-bold">{word}</p>
                <p className="text-xs text-[#CBD5E1]">{desc}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-5 rounded-xl bg-white/10 p-4 text-sm leading-7 italic text-[#E2E8F0]">
            Lors de mon stage au ministère, notre équipe devait livrer un rapport en deux semaines au lieu de quatre. J'ai pris l'initiative de coordonner les contributions de chaque membre, en établissant un calendrier clair. Grâce à cette organisation, nous avons remis le rapport à temps, et notre directrice a salué la qualité du travail.
          </blockquote>
          <p className="mt-3 text-xs text-[#94A3B8]">Translation: During my internship at the ministry, our team had to deliver a report in two weeks instead of four. I took the initiative to coordinate each member's contributions by establishing a clear schedule. Thanks to this organization, we submitted the report on time, and our director praised the quality of the work.</p>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Job interview phrases" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the interview question to the key phrase" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the interview sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Job interview French quiz" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-lg font-black text-[#16A34A]">Unit 3 complete!</p>
          <p className="mt-2 text-[#526173]">You can now read job postings, write a French CV and cover letter, navigate workplace communication, and handle a French job interview. Put it all together in the unit test.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-3/lesson-3" className="rounded-full border border-[#E7DAB9] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Lesson 3</Link>
            <Link href="/learn/canadian-life/unit-3/test" className="rounded-full bg-[#16A34A] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#15803D]">Take unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
