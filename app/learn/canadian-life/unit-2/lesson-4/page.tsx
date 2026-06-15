import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Opening: introducing the subject", back: "Je me permets de vous écrire au sujet de...\nI am writing to you regarding...", subtext: "Formal and respectful way to open a letter to an institution or government body." },
  { front: "Stating your purpose", back: "Je vous contacte afin de...\nI am contacting you in order to...", subtext: "Clear and direct. Use 'afin de' + infinitive: afin de demander, afin d'obtenir." },
  { front: "Enclosing documents", back: "Veuillez trouver ci-joint...\nPlease find enclosed...", subtext: "Standard phrase for attaching documents: Veuillez trouver ci-joint une copie de mon passeport." },
  { front: "Making a polite request", back: "Je vous saurais gré de bien vouloir...\nI would be grateful if you could...", subtext: "Very formal. Followed by infinitive: Je vous saurais gré de bien vouloir me faire parvenir..." },
  { front: "Following up on a previous contact", back: "Suite à notre conversation du [date],...\nFollowing our conversation on [date],...", subtext: "Suite à notre échange téléphonique du 15 mai, je vous transmets..." },
  { front: "Asking for confirmation", back: "Je vous serais reconnaissant(e) de bien vouloir accuser réception de...\nI would be grateful if you could acknowledge receipt of...", subtext: "Used when you need confirmation that a document was received." },
  { front: "Formal closing: full", back: "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n(Yours faithfully / Sincerely yours)", subtext: "The most formal closing in French. Use when writing to someone you don't know." },
  { front: "Formal closing: semi-formal", back: "Dans l'attente de votre réponse, je vous adresse mes cordiales salutations.\n(Awaiting your reply, I send you my cordial regards.)", subtext: "Slightly warmer than the full formal closing. Common in professional correspondence." },
  { front: "Email subject line", back: "Objet: Demande de renseignements concernant...\nSubject: Request for information regarding...", subtext: "Always include a clear 'Objet:' line in formal French emails." },
  { front: "Expressing urgency politely", back: "Je me permets d'attirer votre attention sur l'urgence de cette situation.\nI take the liberty of drawing your attention to the urgency of this matter.", subtext: "More polite than directly saying 'this is urgent.'" },
];

const pairs = [
  { left: "Veuillez trouver ci-joint", right: "Please find enclosed" },
  { left: "Je vous saurais gré de", right: "I would be grateful if you could" },
  { left: "Suite à notre conversation", right: "Following our conversation" },
  { left: "Objet:", right: "Subject: (email / letter)" },
  { left: "Veuillez agréer... mes salutations distinguées", right: "Yours faithfully (formal closing)" },
  { left: "Dans l'attente de votre réponse", right: "Awaiting your reply" },
];

const exercises = [
  {
    before: "Objet: Demande de",
    after: "concernant mon dossier d'inscription. (information)",
    answer: "renseignements",
    hint: "demande de renseignements = request for information",
    translation: "Subject: Request for information regarding my registration file.",
  },
  {
    before: "Veuillez",
    after: "ci-joint une copie de mon acte de naissance. (find enclosed)",
    answer: "trouver",
    hint: "Veuillez trouver ci-joint = Please find enclosed",
    translation: "Please find enclosed a copy of my birth certificate.",
  },
  {
    before: "Je vous",
    after: "gré de bien vouloir me confirmer la réception de ce document. (would be grateful)",
    answer: "saurais",
    hint: "Je vous saurais gré de = I would be grateful if you could",
    translation: "I would be grateful if you could confirm receipt of this document.",
  },
  {
    before: "Suite à notre",
    after: "téléphonique du 3 mai, je vous transmets les documents demandés. (following our conversation)",
    answer: "conversation",
    hint: "Suite à notre conversation = following our conversation",
    translation: "Following our telephone conversation on May 3rd, I am sending you the requested documents.",
  },
  {
    before: "Dans l'attente de votre réponse, je vous adresse mes",
    after: "salutations. (cordial: semi-formal closing)",
    answer: "cordiales",
    hint: "mes cordiales salutations = my cordial regards",
    translation: "Awaiting your reply, I send you my cordial regards.",
  },
];

const questions = [
  {
    question: "What is the correct formal closing for a letter to a government office in French?",
    options: [
      "Cordialement,",
      "À bientôt,",
      "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.",
      "Merci beaucoup,",
    ],
    correct: 2,
    explanation: "The standard formal closing in French is 'Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.' It's the French equivalent of 'Yours faithfully' and is used when writing to someone you don't know personally.",
  },
  {
    question: "What does 'Objet:' in a French letter or email indicate?",
    options: [
      "The sender's address",
      "The subject line",
      "An attached file",
      "The date of the letter",
    ],
    correct: 1,
    explanation: "'Objet:' means 'Subject:' and appears at the top of a French formal letter or email, just before the salutation. It's a required element of French professional correspondence.",
  },
  {
    question: "How would you say 'Please find enclosed' in a formal French letter?",
    options: [
      "Veuillez trouver ci-dessous",
      "Veuillez trouver ci-joint",
      "Veuillez chercher ici",
      "Comme indiqué en pièce jointe",
    ],
    correct: 1,
    explanation: "'Veuillez trouver ci-joint' means 'Please find enclosed.' The adverb 'ci-joint' (literally 'here attached') is the standard formal way to introduce attached documents.",
  },
  {
    question: "What is the correct order of elements in a French formal letter?",
    options: [
      "Salutation → Date → Body → Subject → Closing",
      "Date → Sender details → Recipient details → Subject → Salutation → Body → Closing",
      "Body → Subject → Sender details → Closing → Date",
      "Recipient details → Body → Sender details → Closing",
    ],
    correct: 1,
    explanation: "The correct structure of a French formal letter is: (1) sender's details, (2) date, (3) recipient's details, (4) Objet (subject), (5) salutation (Madame, Monsieur,), (6) body, (7) closing formula, (8) signature.",
  },
  {
    question: "What is the 'objet' line in a French formal letter or email?",
    options: [
      "The signature at the bottom",
      "A one-line subject heading summarising the purpose of the letter",
      "The salutation opening",
      "The date of writing",
    ],
    correct: 1,
    explanation: "'L'objet' = the subject line. In a formal French letter, it appears between the recipient's address and the salutation. Example: 'Objet : Demande de dérogation: dossier n° 2026-045.' It tells the reader immediately why you're writing. In emails, it maps to the email subject field.",
  },
  {
    question: "Which phrase correctly introduces a formal request in French?",
    options: [
      "Je veux que vous faites quelque chose pour moi.",
      "J'aurais besoin que vous...",
      "Veuillez avoir l'amabilité de / Je vous saurais gré de bien vouloir…",
      "S'il vous plaît, aidez-moi.",
    ],
    correct: 2,
    explanation: "'Veuillez avoir l'amabilité de' or 'Je vous saurais gré de bien vouloir' are formal French request formulas. 'Saurais gré' (would be grateful) is the conditional form required for polite requests in official correspondence.",
  },
  {
    question: "In a formal French letter asking for an extension, which approach is most appropriate?",
    options: [
      "State your need bluntly and demand an extension",
      "Acknowledge the existing deadline, explain the reason briefly, make the request politely, and thank the recipient",
      "Write only one sentence to save time",
      "Apologize repeatedly throughout the letter",
    ],
    correct: 1,
    explanation: "Effective formal requests: (1) acknowledge context, (2) state reason briefly, (3) make the request clearly ('Je vous sollicite donc pour…'), (4) express gratitude. Don't beg or over-apologize: be clear, professional, and polite. This structure works for any type of formal request in French.",
  },
  {
    question: "How do you say 'I am writing to you regarding' in a formal French letter?",
    options: [
      "Je t'écris pour…",
      "Je vous écris concernant… / Je me permets de vous contacter au sujet de…",
      "Salut, je voulais te parler de…",
      "Bonjour, mon problème est…",
    ],
    correct: 1,
    explanation: "'Je vous écris concernant…' or 'Je me permets de vous contacter au sujet de…' are standard formal openings in French professional correspondence. Use 'vous' (never 'tu') and a formal register from the first sentence.",
  },
];

export default function Unit2Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Writing Formal Requests</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Writing a formal letter or email to a government body, landlord, or institution in French requires a specific structure and tone. The formulas are fixed: once you know them, you can use them again and again.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">French formal letter structure</p>
            <ol className="mt-3 space-y-2 text-sm text-[#526173]">
              {[
                ["1", "Coordonnées de l'expéditeur", "Sender's name, address, phone, email: top left"],
                ["2", "Date", "Written in full: le 15 mai 2026, or Montréal, le 15 mai 2026"],
                ["3", "Coordonnées du destinataire", "Recipient's name, title, organization, address"],
                ["4", "Objet:", "Subject line: brief, clear"],
                ["5", "Formule d'appel", "Madame, / Monsieur, / Madame, Monsieur,"],
                ["6", "Corps de la lettre", "Body: purpose, supporting details, request"],
                ["7", "Formule de politesse", "Formal closing formula"],
                ["8", "Signature", "Handwritten signature + printed name"],
              ].map(([num, title, desc]) => (
                <li key={num} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-xs font-black text-[#2563EB]">{num}</span>
                  <span><strong className="text-[#0B1F3A]">{title}</strong> — {desc}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Formal letter phrases" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Model email — student requesting information</p>
          <p className="mt-2 text-sm text-[#CBD5E1]">A student writes to a government scholarship office to request information about an application deadline.</p>
          <div className="mt-4 rounded-xl bg-white/10 p-5 text-sm leading-7">
            <p className="text-[#CBD5E1]"><strong className="text-white">De:</strong> marie.tremblay@courriel.com</p>
            <p className="text-[#CBD5E1]"><strong className="text-white">À:</strong> bourses@gouv.qc.ca</p>
            <p className="text-[#CBD5E1]"><strong className="text-white">Objet:</strong> Demande de renseignements — date limite pour la bourse d'études 2026–2027</p>
            <div className="mt-4 border-t border-white/20 pt-4">
              <p>Madame, Monsieur,</p>
              <p className="mt-3">Je me permets de vous écrire au sujet du programme de bourses d'études pour l'année universitaire 2026–2027. Je suis actuellement étudiante en deuxième année à l'Université de Montréal et je souhaite déposer une demande de bourse.</p>
              <p className="mt-3">Je vous saurais gré de bien vouloir me confirmer la date limite de dépôt des dossiers, ainsi que les pièces justificatives requises. Veuillez trouver ci-joint une copie de mon relevé de notes le plus récent.</p>
              <p className="mt-3">Dans l'attente de votre réponse, je vous adresse mes cordiales salutations.</p>
              <p className="mt-3">Marie Tremblay</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
            {[
              ["Objet:", "Clear subject line: always include"],
              ["Je me permets de vous écrire", "Formal opening: 'I am writing to you'"],
              ["Je vous saurais gré de", "Polite request: 'I would be grateful if'"],
              ["Veuillez trouver ci-joint", "Attaching a document"],
              ["Dans l'attente de votre réponse", "Semi-formal closing opener"],
              ["mes cordiales salutations", "Warm but professional closing"],
            ].map(([phrase, note]) => (
              <div key={phrase} className="rounded-lg bg-white/10 p-2">
                <p className="font-bold">{phrase}</p>
                <p className="text-[#CBD5E1]">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the function to the French phrase" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the formal letter phrases" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Formal writing quiz" />
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">

          <p className="mt-2 text-[#526173]">You've covered healthcare vocabulary, government form language, tax terminology, and formal letter writing. Test yourself to consolidate what you've learned.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-life/unit-2/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-life/unit-2/test" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Take unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
