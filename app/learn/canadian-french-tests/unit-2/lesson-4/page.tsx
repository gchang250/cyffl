import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

// TEF Canada Listening: 40 questions, 40 minutes.
// CRITICAL: You CANNOT go back — must answer each question before the next audio plays.
// Each audio plays ONCE. There is reading time before and response time after each audio.
// Question types: main idea, detail, speaker attitude/opinion, purpose, inference.

const flashcards = [
  { front: "Compréhension orale — 40 questions / 40 minutes", back: "Listening Comprehension — the TEF Canada format", subtext: "40 multiple-choice questions, 40 minutes. Audio plays once only. You must answer each question before moving to the next — you CANNOT go back. Reading time is given before each audio; response time after. Correct = +1, wrong/no answer = 0." },
  { front: "l'audio ne passe qu'une fois", back: "the audio plays only once", subtext: "This is the most important constraint. Unlike TEF Canada reading, you cannot review. Take notes immediately. If you miss something, move on — don't freeze on one question and miss the next audio." },
  { front: "vous ne pouvez pas revenir en arrière", back: "you cannot go back", subtext: "Answer each question before the next audio starts. A blank answer is 0 — always choose the best available option even if uncertain. There is no penalty for wrong answers, so never leave a question blank." },
  { front: "l'idée principale de l'audio", back: "main idea of the audio", subtext: "The first question on any audio track often tests main idea. Ask during the first listen: what is this about? Who is speaking? What is their purpose? The main idea is the most general option that covers the full audio." },
  { front: "le détail spécifique", back: "specific detail in the audio", subtext: "The most common question type. A specific fact, number, name, date, or piece of information is asked about. Take notes as you listen — jot key words, numbers, and names. The answer is explicitly stated in the audio." },
  { front: "l'attitude du locuteur", back: "speaker's attitude or tone", subtext: "Is the speaker enthusiastic, worried, critical, neutral, or surprised? These questions ask you to interpret tone, not just content. Listen for evaluative words: 'c'est regrettable', 'heureusement', 'je crains que', 'il faut admettre'." },
  { front: "l'intention / le but du locuteur", back: "purpose of the speaker", subtext: "Why is the person speaking? To inform, warn, persuade, complain, advertise? Short tracks (announcements, ads) are almost always about purpose. The answer is usually the most specific: 'to warn users about X' not 'to talk about X'." },
  { front: "prendre des notes pendant l'écoute", back: "take notes while listening", subtext: "Note-taking strategy: don't write sentences — write keywords, numbers, and relationships. 'réunion → annulée → mardi' is enough to answer a detail question. Practice this until it becomes automatic." },
  { front: "les distracteurs dans les options", back: "distractors — wrong options that sound plausible", subtext: "Distractors often use words from the audio in a misleading way. The wrong answer may be about something the speaker mentioned, but not in the way the option claims. Always verify: did the speaker actually say this, or just something related?" },
  { front: "l'inférence à l'oral", back: "inference from audio — what the speaker implies", subtext: "Some questions ask what the speaker implies or suggests — not what they stated directly. Use the full audio context. The inference is always supported by what was said, but requires you to draw a logical conclusion." },
];

const matchPairs = [
  { left: "40 questions / 40 minutes", right: "TEF Canada listening format" },
  { left: "l'audio ne passe qu'une fois", right: "audio plays once — take notes immediately" },
  { left: "vous ne pouvez pas revenir", right: "cannot go back — answer before next audio" },
  { left: "l'attitude du locuteur", right: "speaker's tone: worried, critical, enthusiastic…" },
  { left: "les distracteurs", right: "wrong options using words from the audio" },
  { left: "l'inférence", right: "what the speaker implies without stating directly" },
];

const quiz = [
  {
    question: "You hear the following announcement: 'En raison de travaux sur la ligne 2, le service sera interrompu entre les stations Berri et Honoré-Beaugrand du lundi 12 au vendredi 16 juin. Des autobus de remplacement seront mis en place.' The main purpose of this announcement is to:",
    options: [
      "Advertise bus services on line 2",
      "Inform passengers of a temporary metro service interruption and replacement bus service",
      "Announce the completion of construction work",
      "Warn passengers about delays on the entire metro network",
    ],
    correct: 1,
    explanation: "'Informer les passagers d'une interruption temporaire et des autobus de remplacement.' This is the specific, accurate purpose. Option A misrepresents the bus service as an advertisement. Option C is wrong (the construction is ongoing, not complete). Option D is too broad — only one section of line 2 is affected.",
  },
  {
    question: "A radio interview includes: 'Je dois admettre que les résultats sont décevants. Nous pensions atteindre 80 % de réduction des émissions d'ici 2025, mais nous n'en sommes qu'à 45 %.' The speaker's attitude is:",
    options: [
      "Optimistic — they expected success",
      "Indifferent — they don't care about the results",
      "Disappointed — actual results fell well below the target",
      "Angry — they blame someone else for the shortfall",
    ],
    correct: 2,
    explanation: "'Je dois admettre que les résultats sont décevants' = I must admit the results are disappointing. 'Décevant' explicitly marks disappointment. The speaker acknowledges reality calmly, without blaming anyone (not angry). Listening for evaluative adjectives like 'décevant', 'encourageant', 'regrettable' unlocks attitude questions.",
  },
  {
    question: "You have 2 minutes left in the listening test. You still have 3 questions unanswered from earlier audios, but you cannot go back. What do you do?",
    options: [
      "Focus on the current audio and leave the 3 blank",
      "Quickly guess the 3 blanks (choosing the same letter if needed), then focus on the current audio",
      "Skip the current audio to think about the 3 old questions",
      "Leave everything blank and hope for partial credit",
    ],
    correct: 1,
    explanation: "No penalty for wrong answers — blank = 0, wrong = 0. Always fill in all blanks, even by guessing. You can't go back, so if you already missed those 3, take 10 seconds to put something (e.g., all B) and refocus on the current audio. Leaving blanks is strictly worse than guessing.",
  },
  {
    question: "A speaker says: 'Le projet a certes connu des retards, mais les résultats obtenus justifient largement l'investissement initial.' Which option best captures the implied meaning?",
    options: [
      "The project was a complete failure despite the investment",
      "The delays made the project not worth pursuing",
      "Despite the setbacks, the project's results justified the cost",
      "The investment was much larger than expected",
    ],
    correct: 2,
    explanation: "'Certes… mais les résultats justifient largement' = admittedly there were delays, BUT the results more than justify the investment. 'Certes… mais' is the concession-and-counter structure. The speaker is positive about the outcome despite acknowledging the delays.",
  },
  {
    question: "A news segment mentions: 'Selon les dernières données de Statistique Canada, le taux de chômage a reculé de 0,3 point en avril, s'établissant à 5,8 %.' A test question asks: 'Quel était le taux de chômage en mars?' The correct answer is:",
    options: [
      "5,5 %",
      "5,8 %",
      "6,1 %",
      "0,3 %",
    ],
    correct: 2,
    explanation: "If April = 5.8% after a decrease of 0.3 points, then March = 5.8 + 0.3 = 6.1%. This is a calculation question disguised as a detail question. The audio states April's rate and the change — you must calculate March's. Note the numbers quickly as you listen: 'reculé de 0.3 → 5.8' gives you all the information you need.",
  },
];

export default function TEFLesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Unit 2 · Lesson 4
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              TEF Canada — Listening
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              40 questions, 40 minutes. Each audio plays once. You must answer before moving on — you cannot go back. The test rewards candidates who take notes, stay calm when they miss something, and never leave a blank.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#D62828] p-5 text-white">
              <p className="text-xs font-bold text-yellow-300">Critical rules</p>
              <div className="mt-2 space-y-1 text-sm text-white/90">
                <p>⚠️ Audio plays <strong>ONCE only</strong></p>
                <p>⚠️ You <strong>CANNOT go back</strong> to previous questions</p>
                <p>⚠️ <strong>Never leave blank</strong> — no penalty for wrong answers</p>
                <p>✓ Reading time before each audio — read the question first</p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Note-taking shorthand</p>
              <div className="mt-2 space-y-1 text-sm font-mono text-[#526173]">
                <p>→ = leads to / results in</p>
                <p>↑↓ = increase / decrease</p>
                <p>≈ = approximately</p>
                <p>∅ = none / cancelled</p>
                <p>? = uncertain / question</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Key concepts for listening</h2>
          <p className="mt-1 text-[#526173]">Flip each card to understand the question types and strategies.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="TEF Canada Listening — question types & strategies" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Listening terminology" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border-2 border-[#EFF6FF] bg-white p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Preparation: what to listen to</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              { source: "Radio-Canada Première", what: "Canadian French news and talk shows. Closest match to TEF Canada audio register.", url: "https://ici.radio-canada.ca/premiere" },
              { source: "RFI Journal en français facile", what: "Daily news in simplified French. Good bridge from learning to authentic content.", url: "https://www.rfi.fr/fr/podcasts/journal-en-francais-facile" },
              { source: "TV5Monde apprendre.tv5monde.com", what: "Authentic French video clips with built-in comprehension exercises by level.", url: "https://apprendre.tv5monde.com" },
              { source: "InnerFrench (podcast)", what: "Slow, clear French on culture and society. No English — forces full French immersion.", url: "https://innerfrench.com/podcast" },
            ].map((r) => (
              <a key={r.source} href={r.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-4 transition hover:-translate-y-0.5">
                <p className="font-black group-hover:text-[#2563EB]">{r.source} ↗</p>
                <p className="mt-1 text-sm text-[#526173]">{r.what}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black">Practice questions</h2>
          <p className="mt-1 text-[#526173]">Each question below includes the audio transcript so you can practice identifying the right answer type.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="TEF Canada Listening quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Listening strategies ready.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: the TEF Canada oral expression test — two tasks, 15 minutes, recorded.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-2/lesson-3" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Previous lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-5" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
