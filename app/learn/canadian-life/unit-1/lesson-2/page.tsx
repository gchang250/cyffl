import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "C'est le boutte!", back: "It's great! / Awesome!", subtext: "Ce concert, c'était le boutte!: That concert was amazing!" },
  { front: "Wo!", back: "Whoa! / Hold on! / Slow down!", subtext: "Wo, wo, wo: parle moins vite!: Whoa, slow down when you talk!" },
  { front: "Ben là", back: "Well... / Come on now / Are you serious?", subtext: "Ben là, t'aurais pu m'appeler!: Come on, you could have called me!" },
  { front: "Ça fait que", back: "So... / And so... / So then...", subtext: "Ça fait que j'ai décidé de rester.: So I decided to stay." },
  { front: "C'est de valeur", back: "That's a shame / Too bad", subtext: "C'est de valeur qu'il soit pas venu.: It's a shame he didn't come." },
  { front: "T'as-tu vu?", back: "Did you see? / Have you seen?", subtext: "T'as-tu vu le nouveau film?: Have you seen the new movie?" },
  { front: "Y'a pas de quoi", back: "You're welcome / No problem / Don't mention it", subtext: "— Merci!: Y'a pas de quoi!" },
  { front: "Être dans le trouble", back: "To be in trouble", subtext: "Si tu rates l'examen, t'es dans le trouble.: If you fail the exam, you're in trouble." },
  { front: "Passer au cash", back: "To pay / To go through the checkout", subtext: "On passe au cash et on s'en va.: We pay and we're out of here." },
  { front: "Avoir de la misère", back: "To have difficulty / To struggle", subtext: "J'ai de la misère à comprendre ce chapitre.: I'm struggling to understand this chapter." },
  { front: "Être tanné(e) de", back: "To be fed up with / To be sick of", subtext: "Je suis tanné de travailler autant.: I'm fed up with working so much." },
  { front: "Lâche pas!", back: "Don't give up! / Hang in there! / Keep going!", subtext: "C'est difficile, mais lâche pas!: It's hard, but hang in there!" },
  { front: "Aller aux vues", back: "To go to the movies (older expression, still heard)", subtext: "On allait aux vues chaque vendredi.: We used to go to the movies every Friday." },
  { front: "Faire du pouce", back: "To hitchhike", subtext: "Il a fait du pouce jusqu'à Québec.: He hitchhiked all the way to Quebec City." },
  { front: "Être game", back: "To be willing / To be game / To be up for it", subtext: "T'es game de venir avec nous?: Are you up for coming with us?" },
  { front: "Être chaud(e)", back: "In Quebec: to be drunk. In standard French: to be warm.", subtext: "Après deux bières, il était déjà chaud.: After two beers, he was already drunk." },
];

const pairs = [
  { left: "C'est le boutte!", right: "It's awesome!" },
  { left: "C'est de valeur", right: "That's a shame" },
  { left: "Lâche pas!", right: "Don't give up!" },
  { left: "Avoir de la misère", right: "To struggle / have difficulty" },
  { left: "Être tanné de", right: "To be fed up with" },
  { left: "Faire du pouce", right: "To hitchhike" },
];

const exercises = [
  {
    before: "J'ai",
    after: "à finir mon travail: il y a trop de distractions. (struggling)",
    answer: "de la misère",
    hint: "avoir de la misère = to have difficulty",
    translation: "I'm struggling to finish my work: there are too many distractions.",
  },
  {
    before: "Si tu réponds pas à ton patron,",
    after: "tu vas être dans le",
    answer: "trouble",
    hint: "être dans le trouble = to be in trouble",
    translation: "If you don't answer your boss, you'll be in trouble.",
  },
  {
    before: "Ce voyage-là, c'était vraiment",
    after: "! (awesome)",
    answer: "le boutte",
    hint: "C'est le boutte = it's great / awesome",
    translation: "That trip was truly awesome!",
  },
  {
    before: "",
    after: "pas, tu vas réussir! (don't give up)",
    answer: "Lâche",
    hint: "Lâche pas! = Don't give up!",
    translation: "Don't give up, you'll succeed!",
  },
  {
    before: "Ça fait que",
    after: "on a décidé de prendre le bus à la place. (so/therefore: expression at start of sentence)",
    answer: "ça fait que",
    hint: "Ça fait que = so, and so: used at the start of a conclusion",
    translation: "So we decided to take the bus instead.",
  },
];

const questions = [
  {
    question: "What does 'être tanné(e) de' mean?",
    options: [
      "To be excited about something",
      "To be fed up with something",
      "To be thankful for something",
      "To be unsure about something",
    ],
    correct: 1,
    explanation: "'Être tanné(e) de' means to be fed up with or sick of something. Je suis tanné de l'attendre: I'm fed up waiting for him.",
  },
  {
    question: "Which Quebec expression means 'Don't give up!'?",
    options: ["Wo!", "Lâche pas!", "Ben là!", "Ça fait que!"],
    correct: 1,
    explanation: "'Lâche pas!' literally means 'Don't let go!' and is used as an encouragement: the equivalent of 'Hang in there!' or 'Keep going!'",
  },
  {
    question: "If someone in Quebec says 'il était chaud', what do they mean?",
    options: [
      "He was feeling warm",
      "He was drunk",
      "He was angry",
      "He was in a hurry",
    ],
    correct: 1,
    explanation: "In Quebec French, 'être chaud(e)' means to be drunk. This is different from standard French where 'chaud' only means warm/hot. Context matters!",
  },
  {
    question: "What does 'C'est de valeur' express?",
    options: [
      "That something is expensive",
      "That something is valuable",
      "That something is a shame / too bad",
      "That something is impressive",
    ],
    correct: 2,
    explanation: "'C'est de valeur' is a common Quebec expression meaning 'that's a shame' or 'too bad.' It has nothing to do with monetary value. Example: C'est de valeur qu'il pleuve aujourd'hui.",
  },
  {
    question: "A Quebec friend says 'T'es game de venir?' What are they asking?",
    options: [
      "Are you watching the game?",
      "Are you up for coming / Are you willing to come?",
      "Are you good at games?",
      "Are you going home?",
    ],
    correct: 1,
    explanation: "'Être game' = to be willing / to be up for it. 'T'es game de venir avec nous?' = Are you up for coming with us? It's casual and friendly: used to invite someone to join an activity.",
  },
  {
    question: "In a Quebec store, someone says 'On passe au cash.' What does this mean?",
    options: [
      "We're leaving the store",
      "We're going through the checkout / paying",
      "We're getting cash from the ATM",
      "We're asking for a discount",
    ],
    correct: 1,
    explanation: "'Passer au cash' = to go through the checkout / to pay. 'Cash' here is borrowed from English but used as a noun meaning the cash register or checkout. Common in everyday Quebec conversation.",
  },
  {
    question: "How would you translate 'J'ai de la misère à comprendre' into standard French?",
    options: [
      "Je suis miserable à comprendre",
      "J'ai du mal à comprendre / Je n'arrive pas à comprendre",
      "Je suis pauvre en compréhension",
      "Je ne comprends jamais rien",
    ],
    correct: 1,
    explanation: "'Avoir de la misère à' = to have difficulty doing something. The standard French equivalent is 'avoir du mal à' or 'peiner à'. It's one of the most common Quebec idiomatic expressions for struggle or difficulty.",
  },
  {
    question: "Your Quebec friend says 'Ça fait que j'ai appelé ta mère.' What is 'ça fait que' doing in this sentence?",
    options: [
      "Asking a question",
      "Expressing surprise",
      "Acting as a conclusion connector meaning 'so' or 'and so'",
      "Introducing a hypothetical situation",
    ],
    correct: 2,
    explanation: "'Ça fait que' is a Quebec connector meaning 'so, and so, so then'. It introduces a result or conclusion from what was just said. Standard French equivalents: 'donc', 'alors', 'c'est pourquoi'.",
  },
];

export default function Unit1Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">Unit 1 · Lesson 2</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Quebec Expressions</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Quebec French has rich idiomatic expressions that you won't find in a standard dictionary. Understanding these is key to genuine communication in Quebec: in stores, at work, with friends, and on television.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Register note</p>
            <p className="mt-2 text-sm leading-6 text-[#526173]">
              Some Quebec expressions are informal and best used in casual conversation with friends. Others — like <strong className="text-[#0B1F3A]">lâche pas</strong> or <strong className="text-[#0B1F3A]">c'est de valeur</strong>: are acceptable in a wide range of contexts.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#526173]">
              You'll also notice that Quebec French uses certain sacred-origin words — called <strong className="text-[#0B1F3A]">sacres</strong> — as everyday exclamations. Words like <em>câline</em>, <em>ostie</em>, and <em>tabarnak</em> are extremely common in informal speech and function like strong English swear words. They're part of the language you'll hear; understanding what they are avoids confusion.
            </p>
            <p className="mt-3 rounded-lg bg-[#FEF2F2] p-3 text-xs text-[#B91C1C] font-bold">
              Note: sacres are informal and can be offensive depending on context. Listen first, use with care.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Quebec expressions" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">What is joual?</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            <strong className="text-white">Joual</strong> is a term for the working-class urban dialect historically associated with Montreal: especially its east end. Characterized by heavy English borrowings, distinctive pronunciation, and compressed grammar, joual developed in the 19th and 20th centuries among the industrial working class. It became politically significant in the 1960s and 70s when Quebec writers like Michel Tremblay used it deliberately in literature and theatre to assert a distinctly Quebec identity.
          </p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            Today, "joual" is sometimes used loosely to describe informal Quebec French in general, but linguists use it more specifically. Most Quebec French you'll encounter in everyday life is not joual: it's simply standard Quebec French, which is perfectly clear and expressive on its own terms.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the Quebec expression to its meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete with the right Quebec expression" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Quebec expressions quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-1/lesson-1" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Previous lesson</Link>
          <Link href="/learn/canadian-life/unit-1/lesson-3" className="rounded-full bg-[#B91C1C] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#991B1B]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
