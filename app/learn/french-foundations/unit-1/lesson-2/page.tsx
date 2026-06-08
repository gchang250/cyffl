import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Je m'appelle…", back: "My name is…", subtext: "[ʒə maˈpɛl] — The standard way to give your name. Literally: 'I call myself...' More natural than 'mon nom est'. 'Je m'appelle Marc.'" },
  { front: "Moi, c'est…", back: "I'm… (casual)", subtext: "[mwa sɛ] — Casual spoken introduction. Used constantly in everyday French. 'Moi, c'est Léa!' sounds natural and friendly between peers." },
  { front: "Comment tu t'appelles?", back: "What's your name? (informal)", subtext: "[kɔmɑ̃ ty taˈpɛl] — Informal, for friends and classmates. Can be reordered to 'Tu t'appelles comment?' — same meaning, even more casual." },
  { front: "Comment vous appelez-vous?", back: "What's your name? (formal)", subtext: "[kɔmɑ̃ vu zaˈple vu] — Formal. Use with adults, teachers, and professionals you've just met. The vous inversion signals respect." },
  { front: "J'ai [X] ans.", back: "I am [X] years old.", subtext: "[ʒɛ X ɑ̃] — Always avoir (to have), never être. 'J'ai seize ans' = I have 16 years. Saying 'Je suis seize ans' is a classic beginner error." },
  { front: "Quel âge as-tu?", back: "How old are you? (informal)", subtext: "[kɛl aʒ a ty] — Literally: 'Which age do you have?' Uses avoir. Formal: 'Quel âge avez-vous?' Ultra-casual: 'T'as quel âge?'" },
  { front: "Je suis de…", back: "I am from…", subtext: "[ʒə sɥi də] — Your origin: where you were born or grew up. 'Je suis de Montréal.' Different from 'j'habite à', which is where you live now." },
  { front: "D'où viens-tu?", back: "Where are you from? (informal)", subtext: "[du vjɛ̃ ty] — Uses venir (to come from). Very common. Formal: 'D'où venez-vous?' Ultra-casual: 'Tu viens d'où?'" },
  { front: "J'habite à…", back: "I live in…", subtext: "[ʒaˈbit a] — Current location: city. 'J'habite à Paris.' Don't confuse with 'je suis de' (origin). You can be from one place but live in another." },
  { front: "Enchanté(e)!", back: "Nice to meet you!", subtext: "[ɑ̃ʃɑ̃ˈte] — Add -e if you're a woman: enchantée. From enchanter (to enchant). Formal variant: 'Ravi(e) de vous rencontrer.'" },
  { front: "Ravi(e) de vous rencontrer", back: "Pleased to meet you (formal)", subtext: "[ʁavi də vu ʁɑ̃kɔ̃ˈtʁe] — More formal than enchanté. Add -e for feminine: ravie. Used in professional and formal first meetings." },
];

const fillIn = [
  {
    before: "Je",
    after: "Léa.",
    answer: "m'appelle",
    hint: "my name is",
    translation: "My name is Léa.",
  },
  {
    before: "J'ai quinze",
    after: ".",
    answer: "ans",
    hint: "years (age)",
    translation: "I am fifteen years old.",
  },
  {
    before: "Je suis",
    after: "Toronto.",
    answer: "de",
    hint: "from",
    translation: "I am from Toronto.",
  },
  {
    before: "Comment tu",
    after: "?",
    answer: "t'appelles",
    hint: "what's your name (informal)",
    translation: "What's your name?",
  },
  {
    before: "J'habite",
    after: "Montréal.",
    answer: "à",
    hint: "in (a city)",
    translation: "I live in Montréal.",
  },
];

const quiz = [
  {
    question: "How do you say 'My name is Marc' in French?",
    options: ["Je suis Marc.", "Je m'appelle Marc.", "Mon nom Marc.", "J'appelle Marc."],
    correct: 1,
    explanation: "'Je m'appelle' literally means 'I call myself' — it's the standard French self-introduction. 'Je suis Marc' would work in some contexts but is less natural for introductions. 'J'appelle' means 'I call (someone else)'.",
  },
  {
    question: "You need to tell a new doctor your age. Which is correct?",
    options: ["Je suis 16 ans.", "Je m'appelle 16 ans.", "J'ai 16 ans.", "Je fais 16 ans."],
    correct: 2,
    explanation: "French uses avoir (to have) for age — always. 'J'ai 16 ans' = 'I have 16 years.' Never 'je suis 16 ans' — that's a very common error for English speakers.",
  },
  {
    question: "You meet a teacher for the first time. They ask your name formally. What do they say?",
    options: [
      "Comment tu t'appelles?",
      "Comment vous appelez-vous?",
      "Tu t'appelles comment?",
      "C'est quoi ton nom?",
    ],
    correct: 1,
    explanation: "'Comment vous appelez-vous?' is the formal version. It uses vous (the respectful 'you') and inverted word order. 'Comment tu t'appelles?' is informal — fine for a classmate, not for a teacher you just met.",
  },
  {
    question: "Sofia (a girl) just met someone new and wants to say 'Nice to meet you!' What does she say?",
    options: ["Au revoir!", "Ça va?", "Enchanté!", "Enchantée!"],
    correct: 3,
    explanation: "'Enchantée' (with double -e) is the feminine form. Sofia is female, so she says enchantée. A boy would say 'enchanté'. The speaker's gender determines which form to use, not the listener's.",
  },
  {
    question: "What is the difference between 'Je suis de Paris' and 'J'habite à Paris'?",
    options: [
      "They mean the same thing.",
      "'Je suis de' = I'm from (origin); 'J'habite à' = I live in (current location).",
      "'Je suis de' is formal; 'J'habite à' is casual.",
      "'J'habite à' is only for temporary stays.",
    ],
    correct: 1,
    explanation: "'Je suis de Paris' = I'm from Paris (that's where I was born/grew up). 'J'habite à Paris' = I live in Paris (right now). You can be from Lyon but live in Paris — these are different facts.",
  },
  {
    question: "A boy introduces himself at a formal event. Should he say 'Enchanté' or 'Enchantée'?",
    options: ["Enchantée — it's always polite to use the longer form", "Enchanté — because he is masculine", "Both forms are identical in meaning", "Neither — boys say 'Bonjour' only"],
    correct: 1,
    explanation: "The speaker's own gender determines the form. A boy (masculine) says 'enchanté'. A girl says 'enchantée'. It's not about the listener — it's an adjective describing how the speaker feels.",
  },
  {
    question: "Your French penpal writes: 'D'où viens-tu?' What are they asking?",
    options: [
      "What's your name?",
      "How old are you?",
      "Where are you from?",
      "Where do you live?",
    ],
    correct: 2,
    explanation: "'D'où viens-tu?' = 'Where are you from?' It uses 'venir' (to come). 'D'où' = from where. You'd answer: 'Je viens de [city/country]' or 'Je suis de [city/country]'.",
  },
  {
    question: "Fill in: 'Je suis ___ Montréal.' (I am from Montréal.)",
    options: ["à", "en", "de", "au"],
    correct: 2,
    explanation: "'Je suis de' + city = I am from [city]. Compare: 'Je suis à Montréal' = I am in Montréal (right now). 'De' marks origin; 'à' marks current location.",
  },
];

export default function Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/learn/french-foundations"
          className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]"
        >
          ← French Foundations
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 1 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Introducing Yourself
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Say your name, age, and where you're from, the basics of any
              first conversation in French.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Watch out</p>
              <p className="mt-2 leading-7 text-white/80">
                In French, you{" "}
                <span className="font-black text-white">have</span> years old
               , not <span className="font-black text-white">are</span>. Say{" "}
                <span className="font-black text-white">J'ai 15 ans</span>{" "}
                (I have 15 years), not 'Je suis 15 ans.'
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Sample intro</p>
              <div className="mt-3 space-y-1">
                <p className="font-black">Bonjour! Je m'appelle Léa.</p>
                <p className="font-black">J'ai seize ans.</p>
                <p className="font-black">Je suis de Vancouver.</p>
                <p className="mt-2 text-sm text-[#526173]">
                  Hello! My name is Léa. I am sixteen. I am from Vancouver.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flashcards */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Vocabulary</h2>
          <p className="mt-1 text-[#526173]">Eleven phrases — the backbone of any French introduction. Click to flip, IPA pronunciation is shown in brackets.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Introducing yourself" />
          </div>
        </section>

        {/* Fill in the blank */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Fill in the blank</h2>
          <p className="mt-1 text-[#526173]">Type the missing word, then press Check.</p>
          <div className="mt-6">
            <FillInTheBlank exercises={fillIn} title="Introduction sentences" />
          </div>
        </section>

        {/* Quiz */}
        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Four questions, let's see what you've got.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Introductions quiz" />
          </div>
        </section>

        {/* Done */}
        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <h2 className="mt-3 text-3xl font-black">
            You can introduce yourself in French.
          </h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Next: how to ask someone how they're doing, and actually answer
            the question.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/learn/french-foundations/unit-1/lesson-1"
              className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
              ← Previous
            </Link>
            <Link
              href="/learn/french-foundations/unit-1/lesson-3"
              className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
            >
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
