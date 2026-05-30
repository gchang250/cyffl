import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  {
    front: "Starting a meeting",
    back: "Je déclare la séance ouverte.",
    subtext: "I declare the meeting open. — formal, often used in official or board settings.",
  },
  {
    front: "Asking for clarification",
    back: "Pourriez-vous préciser ce que vous entendez par...?",
    subtext: "Could you clarify what you mean by...? — polite conditional, very professional.",
  },
  {
    front: "Agreeing with someone",
    back: "Je suis tout à fait d'accord avec vous.",
    subtext: "I completely agree with you. — 'tout à fait' intensifies agreement.",
  },
  {
    front: "Disagreeing politely",
    back: "Je comprends votre point de vue, cependant...",
    subtext: "I understand your point of view, however... — acknowledge before redirecting.",
  },
  {
    front: "Taking the floor",
    back: "Si vous me permettez d'ajouter...",
    subtext: "If you will allow me to add... — smooth, non-interruptive way to contribute.",
  },
  {
    front: "Postponing a topic",
    back: "Nous reviendrons là-dessus lors de la prochaine réunion.",
    subtext: "We will come back to this at the next meeting. — useful to keep meetings on track.",
  },
  {
    front: "Email subject — meeting follow-up",
    back: "Objet : Suivi de notre réunion du [date]",
    subtext: "Subject: Follow-up on our meeting of [date]. — 'objet' is the French for 'subject'.",
  },
  {
    front: "Email subject — question",
    back: "Objet : Question concernant [projet/dossier]",
    subtext: "Subject: Question regarding [project/file]. — professional and direct.",
  },
  {
    front: "Calling someone on the phone",
    back: "Bonjour, je cherche à parler à [Prénom Nom].",
    subtext: "Hello, I am trying to reach [First Last]. — standard phone opening in a professional context.",
  },
  {
    front: "Leaving a phone message",
    back: "Pourriez-vous lui transmettre un message?",
    subtext: "Could you pass along a message for them? — polite conditional.",
  },
  {
    front: "Out-of-office reply",
    back: "Je serai absent(e) du bureau du [date] au [date].",
    subtext: "I will be out of the office from [date] to [date]. — standard auto-reply opening.",
  },
  {
    front: "Asking for a project deadline",
    back: "Quel est le délai pour ce projet?",
    subtext: "What is the deadline for this project? — 'délai' means deadline or timeframe.",
  },
];

const pairs = [
  { left: "Starting a meeting formally", right: "Je déclare la séance ouverte." },
  { left: "Disagreeing politely", right: "Je comprends votre point de vue, cependant..." },
  { left: "Taking the floor", right: "Si vous me permettez d'ajouter..." },
  { left: "Email subject line", right: "Objet : Suivi de notre réunion du..." },
  { left: "Phone — asking to speak to someone", right: "Je cherche à parler à..." },
  { left: "Asking for a deadline", right: "Quel est le délai pour ce projet?" },
];

const exercises = [
  {
    before: "Je",
    after: "tout à fait d'accord avec votre proposition.",
    answer: "suis",
    hint: "Je suis d'accord = I agree. 'Tout à fait' intensifies it.",
    translation: "I completely agree with your proposal.",
  },
  {
    before: "Pourriez-vous",
    after: "ce que vous entendez par 'livrable final'?",
    answer: "préciser",
    hint: "Préciser — to clarify / to specify.",
    translation: "Could you clarify what you mean by 'final deliverable'?",
  },
  {
    before: "Nous reviendrons",
    after: "lors de la prochaine réunion d'équipe.",
    answer: "là-dessus",
    hint: "Là-dessus = on this / to this point. 'Revenir là-dessus' = to come back to this.",
    translation: "We will come back to this at the next team meeting.",
  },
  {
    before: "Objet :",
    after: "de notre réunion du 3 juin.",
    answer: "Suivi",
    hint: "Suivi = follow-up. 'Objet : Suivi de...' is the standard subject for follow-up emails.",
    translation: "Subject: Follow-up on our meeting of June 3.",
  },
  {
    before: "Je serai absent(e) du",
    after: "du 10 au 18 juillet. Pour toute urgence, veuillez contacter ma collègue, Marie Tremblay.",
    answer: "bureau",
    hint: "Bureau = office. 'Absent(e) du bureau' = out of the office.",
    translation: "I will be out of the office from July 10 to 18. For any urgent matters, please contact my colleague, Marie Tremblay.",
  },
];

const questions = [
  {
    question: "Which phrase is the correct formal way to start a meeting in French?",
    options: [
      "Allons commencer!",
      "Je déclare la séance ouverte.",
      "On peut commencer maintenant.",
      "La réunion débute.",
    ],
    correct: 1,
    explanation: "'Je déclare la séance ouverte' is the formal declaration used in official meetings, board sessions, and government contexts. 'On peut commencer' is more casual.",
  },
  {
    question: "What does 'Objet :' mean at the start of a French email?",
    options: [
      "Attachment",
      "Object / thing",
      "Subject line",
      "Priority level",
    ],
    correct: 2,
    explanation: "'Objet :' is the French equivalent of 'Subject:' in email. Always include it in professional French emails — it signals the topic at a glance.",
  },
  {
    question: "How do you politely disagree in a French meeting?",
    options: [
      "Non, vous avez tort.",
      "C'est faux.",
      "Je comprends votre point de vue, cependant...",
      "Je ne suis pas d'accord du tout.",
    ],
    correct: 2,
    explanation: "'Je comprends votre point de vue, cependant...' acknowledges the other person before redirecting — the professional French way to disagree without being blunt.",
  },
  {
    question: "What does 'délai' mean in a workplace context?",
    options: [
      "Delay (something went wrong)",
      "Deadline or timeframe",
      "Meeting agenda",
      "Email attachment",
    ],
    correct: 1,
    explanation: "'Délai' is a false friend — it doesn't just mean delay. In professional French, 'délai' means deadline or timeframe: 'Quel est le délai?' = What is the deadline?",
  },
];

export default function Unit3Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#16A34A]">Unit 3 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Workplace Communication</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Day-to-day French in a bilingual workplace covers more than vocabulary — it's about register. French has a clear distinction between formal and informal address, and getting it wrong can seem rude or overly familiar. Knowing when to use <em>vous</em> versus <em>tu</em>, and which phrases belong in a meeting versus a team chat, is essential.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              This lesson covers emails, meetings, phone calls, and professional messages — the core of day-to-day bilingual workplace French.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Register guide — formal vs. informal</p>
            <div className="mt-3 space-y-4 text-sm">
              <div className="rounded-lg bg-[#F0FDF4] p-3">
                <p className="font-black text-[#16A34A]">Email to your manager (formal)</p>
                <p className="mt-1 text-[#0B1F3A]">Bonjour [Nom],</p>
                <p className="text-[#526173]">Je vous écris pour vous faire part de...</p>
                <p className="text-[#526173]">Cordialement, [Votre prénom]</p>
              </div>
              <div className="rounded-lg border border-[#E7DAB9] p-3">
                <p className="font-black text-[#0B1F3A]">Email to a colleague (semi-formal)</p>
                <p className="mt-1 text-[#0B1F3A]">Bonjour [Prénom],</p>
                <p className="text-[#526173]">Je t'écris pour te demander...</p>
                <p className="text-[#526173]">Bonne journée, [Votre prénom]</p>
              </div>
              <div className="rounded-lg border border-[#E7DAB9] p-3">
                <p className="font-black text-[#0B1F3A]">Meeting phrases</p>
                <p className="mt-1 text-[#526173]">Je vais céder la parole à [nom].</p>
                <p className="text-[#526173]">Avez-vous des questions?</p>
                <p className="text-[#526173]">On fait le point sur les actions à prendre.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Model workplace email — meeting follow-up</p>
          <p className="mt-1 text-sm text-[#CBD5E1]">Fully in French — bilingual workplace context</p>
          <div className="mt-4 rounded-xl bg-white/10 p-5 text-sm leading-7">
            <p className="font-bold">Objet : Suivi de notre réunion du 28 mai</p>
            <p className="mt-2">Bonjour Isabelle,</p>
            <p className="mt-2 text-[#E2E8F0]">
              Je vous écris pour faire le point sur les décisions prises lors de notre réunion d'équipe de mercredi dernier. Comme convenu, je prendrai en charge la rédaction du rapport d'étape et vous ferai parvenir une première version avant le vendredi 6 juin. Pourriez-vous, de votre côté, confirmer les disponibilités de votre équipe pour notre prochaine rencontre? N'hésitez pas à me contacter si vous avez des questions.
            </p>
            <p className="mt-2">Cordialement,</p>
            <p>Marc-Antoine Beauchamp</p>
          </div>
          <p className="mt-3 text-xs text-[#94A3B8]">Translation: I am writing to follow up on the decisions made at our team meeting last Wednesday. As agreed, I will take charge of writing the progress report and will send you a first version before Friday, June 6. Could you, on your end, confirm your team's availability for our next meeting? Do not hesitate to contact me if you have any questions.</p>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Workplace communication phrases" />
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the situation to the French phrase" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the workplace sentences" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Workplace communication quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-3/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Lesson 2</Link>
          <Link href="/learn/canadian-life/unit-3/lesson-4" className="rounded-full bg-[#16A34A] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#15803D]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
