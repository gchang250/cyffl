import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const flashcards = [
  { front: "Au premier plan…", back: "In the foreground…", subtext: "Describes what is closest in the image. Start here." },
  { front: "À l'arrière-plan…", back: "In the background…", subtext: "What is further away or behind the main subject." },
  { front: "Sur la gauche / droite…", back: "On the left / right…", subtext: "Helps locate elements in the image spatially." },
  { front: "On peut voir…", back: "One can see… / We can see…", subtext: "A safe opener for describing what is visible. Neutral and accurate." },
  { front: "Il s'agit de…", back: "This is about… / It deals with…", subtext: "Used to introduce the subject of the image or the global issue it represents." },
  { front: "Cette image représente…", back: "This image represents…", subtext: "Transitions from describing to analysing — what does the image symbolise?" },
  { front: "Cette image illustre le problème de…", back: "This image illustrates the problem of…", subtext: "Connects the image directly to a global issue. Use in your analysis phase." },
  { front: "On remarque que…", back: "One notices that… / We can observe that…", subtext: "Useful for pointing out specific details or implications in the image." },
  { front: "Ce qui est frappant, c'est…", back: "What is striking is…", subtext: "Introduces the most visually powerful or emotionally significant element." },
  { front: "Cette scène évoque…", back: "This scene evokes / suggests…", subtext: "Moves from observation to interpretation — what feeling or idea does the image create?" },
  { front: "Au centre de l'image…", back: "In the centre of the image…", subtext: "Useful when the main subject is centrally placed. Combine with 'on peut voir' for a clear description." },
  { front: "Le regard de… exprime…", back: "The expression/gaze of… expresses…", subtext: "Describing people's emotions through their faces. 'Le regard de l'enfant exprime la tristesse.' = The child's expression shows sadness." },
  { front: "Cela symbolise…", back: "This symbolises…", subtext: "Moving from description to interpretation. 'Cela symbolise la destruction de l'environnement.' Connect what you see to what it means." },
  { front: "Le contraste entre… et… illustre…", back: "The contrast between… and… illustrates…", subtext: "A high-level analytical phrase. 'Le contraste entre la richesse et la pauvreté illustre les inégalités mondiales.' Strong for Criterion B." },
  { front: "D'après moi, cette image appartient au thème de…", back: "In my view, this image belongs to the theme of…", subtext: "Explicitly links the image to an IB theme — required for Criterion B. Always name the theme with this phrase or equivalent." },
];

const matchPairs = [
  { left: "Au premier plan…", right: "In the foreground…" },
  { left: "À l'arrière-plan…", right: "In the background…" },
  { left: "On peut voir…", right: "One can see…" },
  { left: "Il s'agit de…", right: "This is about…" },
  { left: "Cette image illustre le problème de…", right: "This image illustrates the problem of…" },
  { left: "Ce qui est frappant, c'est…", right: "What is striking is…" },
];

const quiz = [
  {
    question: "You receive an image of a plastic-covered beach with a small child standing in the foreground. What should your first sentence describe?",
    options: ["The global issue of ocean pollution", "What you can see in the foreground — the child and the plastic", "The IB theme the image belongs to", "Your opinion on plastic pollution"],
    correct: 1,
    explanation: "Start with description: 'Au premier plan, on peut voir un enfant debout sur une plage couverte de déchets plastiques.' Description comes before analysis.",
  },
  {
    question: "After describing the image, how do you transition to identifying the global issue?",
    options: ["'D'une part…'", "'Cette image illustre le problème de…'", "'Il faut que…'", "'On ne sait pas…'"],
    correct: 1,
    explanation: "'Cette image illustre le problème de…' is a direct, clear phrase to transition from description to analysis of the global issue.",
  },
  {
    question: "You see protesters holding signs in a city square. Which phrase best introduces what the image represents?",
    options: ["'Au premier plan, on peut voir des pancartes.'", "'Il s'agit d'un mouvement social qui lutte pour les droits des travailleurs.'", "'C'est une belle image de la ville.'", "'Je pense que c'est intéressant.'"],
    correct: 1,
    explanation: "'Il s'agit de…' connects what you see to what it means — protesters = a social movement fighting for rights. This is analysis, not just description.",
  },
  {
    question: "Which phrase introduces the most visually powerful element of an image?",
    options: ["'Sur la gauche…'", "'À l'arrière-plan…'", "'Ce qui est frappant, c'est…'", "'On remarque que…'"],
    correct: 2,
    explanation: "'Ce qui est frappant, c'est…' (What is striking is…) draws attention to the most important or impactful element. It shows analytical awareness.",
  },
  {
    question: "Your description phase should last approximately:",
    options: ["30 seconds", "1 minute", "3–4 minutes", "6–9 minutes"],
    correct: 2,
    explanation: "The presentation (description + analysis) is 3–4 minutes. The discussion phase with the examiner is 6–9 minutes.",
  },
  {
    question: "You see an image of two children — one in expensive school uniform, one in torn clothes — standing at a school gate. What analytical phrase best links this to a global issue?",
    options: [
      "'Au premier plan, on peut voir deux enfants.'",
      "'Le contraste entre les deux enfants illustre les inégalités sociales et l'accès inégal à l'éducation.'",
      "'Cette image est belle et triste.'",
      "'Il s'agit d'une école quelque part dans le monde.'",
    ],
    correct: 1,
    explanation: "'Le contraste entre… illustre…' directly connects the visual detail (two different children) to a global issue (inequality and access to education). This is Criterion B language.",
  },
  {
    question: "After your 3–4 minute presentation, the examiner will spend the remaining time doing what?",
    options: [
      "Marking your work in silence",
      "Asking you follow-up questions about the image, theme, and global issue",
      "Showing you a second image to describe",
      "Reading your preparation notes aloud",
    ],
    correct: 1,
    explanation: "The 6–9 minute discussion phase consists of the examiner asking follow-up questions about the image, the theme, and the global issue — and potentially related topics. Your job is to respond naturally and develop ideas.",
  },
  {
    question: "You receive an image of protesters outside a factory. Which phrase best opens your analysis phase?",
    options: [
      "'C'est une image intéressante.'",
      "'Il y a des gens dans l'image.'",
      "'Cette image illustre le problème de la pollution industrielle et appartient au thème de Partager la planète.'",
      "'On ne sait pas exactement ce qui se passe.'",
    ],
    correct: 2,
    explanation: "The analysis phase requires explicitly naming the global issue AND the IB theme. 'Cette image illustre le problème de… et appartient au thème de…' is the most direct and mark-scoring structure.",
  },
];

export default function Unit4Lesson2Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/ib-french-b-sl" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← IB French B SL
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A44C]">
              Unit 4 · Lesson 2
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">
              Describing Images
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              The language you need to describe an image clearly, move from observation
              to analysis, and connect what you see to a global issue — all in French.
            </p>
          </div>

          <div className="space-y-3">
            <div className="rounded-2xl bg-[#0B1F3A] p-5 text-white">
              <p className="text-xs font-bold text-[#C9A44C]">Key idea</p>
              <p className="mt-2 leading-7 text-white/80">
                Description → Analysis → Theme. Always move in this order.{" "}
                <span className="font-black text-white">Describe</span> what you see,
                then <span className="font-black text-white">analyse</span> what it means,
                then <span className="font-black text-white">name the IB theme</span> and global issue.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <p className="text-xs font-bold text-[#526173]">Description structure</p>
              <div className="mt-2 space-y-1 text-sm">
                <p>1. What is in the foreground?</p>
                <p>2. What is in the background?</p>
                <p>3. What is striking / significant?</p>
                <p>4. What global issue does it illustrate?</p>
                <p>5. Which IB theme does it belong to?</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Description phrases</h2>
          <p className="mt-1 text-[#526173]">Click a card to flip it. These are the phrases examiners hear from high-scoring students.</p>
          <div className="mt-6">
            <FlashCardDeck cards={flashcards} title="Image description language" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black">Model description walkthrough</h2>
          <p className="mt-2 text-sm text-[#526173]">See how to structure a full image description — from first sentence to theme identification.</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { step: "1 — Foreground", fr: "Au premier plan, on peut voir une femme debout dans un champ de plastique.", en: "In the foreground, we can see a woman standing in a field of plastic." },
              { step: "2 — Background", fr: "À l'arrière-plan, on distingue une plage et la mer.", en: "In the background, one can make out a beach and the sea." },
              { step: "3 — Striking detail", fr: "Ce qui est frappant, c'est la quantité de déchets qui couvre le sol.", en: "What is striking is the quantity of waste covering the ground." },
              { step: "4 — Analysis", fr: "Cette image illustre le problème de la pollution plastique et de la dégradation de l'environnement.", en: "This image illustrates the problem of plastic pollution and environmental degradation." },
              { step: "5 — Theme", fr: "D'après moi, elle appartient au thème de Partager la planète.", en: "In my view, it belongs to the theme of Sharing the Planet." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border border-[#E7DAB9] bg-[#FFFDF7] p-3">
                <p className="text-xs font-black uppercase tracking-widest text-[#C9A44C]">{s.step}</p>
                <p className="mt-1 font-bold text-[#0B1F3A]">{s.fr}</p>
                <p className="text-xs text-[#526173]">{s.en}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Match the pairs</h2>
          <p className="mt-1 text-[#526173]">Match each description phrase to its English meaning.</p>
          <div className="mt-6">
            <MatchPairs pairs={matchPairs} title="Description phrases" />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black">Quick quiz</h2>
          <p className="mt-1 text-[#526173]">Choose the right phrase or strategy for each oral description scenario.</p>
          <div className="mt-6">
            <MultipleChoiceQuiz questions={quiz} title="Image description quiz" />
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-widest text-[#C9A44C]">Done!</p>
          <h2 className="mt-3 text-3xl font-black">Image description language locked in.</h2>
          <p className="mt-3 leading-7 text-[#526173]">
            Last lesson: the language for discussing global issues with the examiner.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-1" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">
              ← Previous lesson
            </Link>
            <Link href="/learn/ib-french-b-sl/unit-4/lesson-3" className="rounded-full bg-[#2563EB] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">
              Next lesson →
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
