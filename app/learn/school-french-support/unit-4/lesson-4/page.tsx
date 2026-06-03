import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "Il était une fois une petite fille...", back: "Once upon a time there was a little girl... — imparfait", subtext: "Classic story opener — imparfait sets the scene and introduces characters." },
  { front: "Un jour, elle a décidé d'explorer la forêt.", back: "One day she decided to explore the forest. — passé composé", subtext: "PC: 'un jour' triggers a specific decision — the event that starts the action." },
  { front: "Il faisait beau et les oiseaux chantaient.", back: "The weather was fine and birds were singing. — imparfait", subtext: "Imparfait: describing the setting before the key events begin." },
  { front: "Soudain, elle a entendu un bruit étrange.", back: "Suddenly she heard a strange noise. — passé composé", subtext: "PC: 'soudain' — a sudden, completed event that breaks the background." },
  { front: "Elle avait peur mais elle a continué à marcher.", back: "She was afraid but she kept walking. — imp. + PC", subtext: "Imparfait (state: fear) + passé composé (ongoing action framed as completed)." },
  { front: "Alors, elle a ouvert la porte lentement.", back: "Then she slowly opened the door. — passé composé", subtext: "PC: 'alors' signals the next completed event in the sequence." },
  { front: "Finalement, elle est rentrée chez elle.", back: "Finally she went back home. — passé composé", subtext: "PC: 'finalement' marks the concluding completed event." },
  { front: "Pendant ce temps, ses amis l'attendaient.", back: "Meanwhile her friends were waiting for her. — imparfait", subtext: "Imparfait: an ongoing background action happening at the same time." },
];

const pairs = [
  { left: "Il était une fois...", right: "Story opener — imparfait sets the scene" },
  { left: "Soudain, il a crié.", right: "Dramatic event — passé composé" },
  { left: "Pendant qu'elle marchait...", right: "Ongoing background — imparfait" },
  { left: "Ensuite, ils ont pris une décision.", right: "Next event in sequence — passé composé" },
  { left: "Finalement, tout s'est arrangé.", right: "Story conclusion — passé composé" },
  { left: "Hier soir, le vent soufflait fort.", right: "Background description — imparfait" },
];

const exercises = [
  { before: "Il était une fois un roi qui", after: "dans un grand château. (vivre)", answer: "vivait", hint: "Story opening — background description, imparfait: vivre → stem viv- → vivait", translation: "Once upon a time there was a king who lived in a great castle." },
  { before: "Un jour, le roi", after: "une lettre mystérieuse. (recevoir)", answer: "a reçu", hint: "Single event marked by 'un jour' — passé composé: avoir (il a) + reçu (irregular: recevoir → reçu)", translation: "One day the king received a mysterious letter." },
  { before: "Pendant que ses conseillers", after: "(parler), il réfléchissait.", answer: "parlaient", hint: "Ongoing background action — imparfait: parler → stem parl- → parlaient", translation: "While his advisors were talking, he was thinking." },
  { before: "Finalement, il", after: "une décision courageuse. (prendre)", answer: "a pris", hint: "Final completed event — passé composé: avoir (il a) + pris (irregular: prendre → pris)", translation: "Finally he made a courageous decision." },
  { before: "Tout le monde", after: "soulagé à la fin de l'histoire. (être)", answer: "était", hint: "Collective emotional state at that time — imparfait of être: ils étaient (tout le monde = singular → était)", translation: "Everyone was relieved at the end of the story." },
];

const questions = [
  {
    question: "Which tense is typically used to open a narrative and set the scene?",
    options: ["passé composé", "présent", "imparfait", "futur simple"],
    correct: 2,
    explanation: "The imparfait opens a story and describes the setting: characters, weather, place, time of day. Classic opener: Il était une fois... The passé composé then introduces the events.",
  },
  {
    question: "Which phrase is a good story-opening signal for the passé composé?",
    options: [
      "Il était une fois...",
      "Pendant que...",
      "Un jour, ...",
      "À cette époque, ...",
    ],
    correct: 2,
    explanation: "'Un jour' (one day) introduces a specific event that moves the story forward — passé composé. The others signal background/description (imparfait).",
  },
  {
    question: "In the sentence 'Elle dormait quand le voleur est entré', what role does the imparfait play?",
    options: [
      "It describes the event that moved the story forward.",
      "It describes the background action that was interrupted.",
      "It describes a habitual action.",
      "It is wrong — should be passé composé.",
    ],
    correct: 1,
    explanation: "'Elle dormait' (imparfait) is the ongoing background action. 'Le voleur est entré' (passé composé) is the interrupting event. This is the classic PC + imparfait structure.",
  },
  {
    question: "Which phrase helps connect events in sequence in a story?",
    options: ["autrefois", "toujours", "ensuite", "d'habitude"],
    correct: 2,
    explanation: "'Ensuite' (then/next) links sequential completed events — each one is passé composé: il est arrivé... ensuite, il a frappé à la porte... ensuite, il est entré.",
  },
  {
    question: "What tense should be used after 'pendant que' in a narrative?",
    options: ["passé composé", "imparfait", "futur proche", "présent"],
    correct: 1,
    explanation: "'Pendant que' (while) introduces an ongoing background action → imparfait. Pendant qu'elle lisait (imparfait), il est sorti (passé composé). 'Pendant que' always signals the background, not the event.",
  },
  {
    question: "How do you express 'Finally, they found the treasure' in a story?",
    options: [
      "Finalement, ils trouvaient le trésor.",
      "Finalement, ils ont trouvé le trésor.",
      "Finalement, ils trouvent le trésor.",
      "Finalement, ils avaient trouvé le trésor.",
    ],
    correct: 1,
    explanation: "'Finalement' closes a story by marking the last completed event → passé composé. Ils ont trouvé = they found. Imparfait would suggest the finding was ongoing, which doesn't fit a resolution.",
  },
  {
    question: "A story begins: 'Il était une fois un vieux pêcheur qui ___ dans un village calme.' Which fits best?",
    options: [
      "a vécu",
      "vivait",
      "vit",
      "va vivre",
    ],
    correct: 1,
    explanation: "Il était une fois sets a story in the past, and 'qui vivait' (imparfait) continues the background description. The imparfait 'vivait' shows an ongoing state of living, perfect for establishing a character.",
  },
  {
    question: "Which sequence correctly structures a narrative paragraph?",
    options: [
      "Background (imparfait) → Events (passé composé) → Conclusion (passé composé)",
      "Events (passé composé) → Background (imparfait) → Conclusion (imparfait)",
      "Background (passé composé) → Events (imparfait) → Conclusion (imparfait)",
      "Everything in imparfait, then switch to passé composé for the conclusion only",
    ],
    correct: 0,
    explanation: "The ideal French narrative structure: imparfait sets the scene (descriptions, states, weather) → passé composé advances the plot (events in sequence) → passé composé closes the story.",
  },
];

export default function Unit4Lesson4Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/school-french-support" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← School French Support
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#9D174D]">Unit 4 · Lesson 4</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Telling a Story in French</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Bringing together the passé composé and the imparfait is the ultimate goal of Unit 4. In a French narrative, the two tenses work as a team: the imparfait paints the setting, and the passé composé drives the plot forward.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              A well-written French story typically opens with imparfait for scene-setting, introduces events with the passé composé, and weaves the two throughout — much like a film cutting between background and action.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A] mb-3">Story sentence starters</p>
            <div className="space-y-1 text-sm">
              <p><strong className="text-[#9D174D]">Il était une fois...</strong> — Once upon a time... (imparfait)</p>
              <p><strong className="text-[#9D174D]">Un jour, ...</strong> — One day, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">Hier soir, ...</strong> — Yesterday evening, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">Pendant que...</strong> — While... (imparfait)</p>
              <p><strong className="text-[#9D174D]">Soudain, ...</strong> — Suddenly, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">Alors, ...</strong> — So then, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">Ensuite, ...</strong> — Then/Next, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">Finalement, ...</strong> — Finally, ... (passé composé)</p>
              <p><strong className="text-[#9D174D]">À ce moment-là, ...</strong> — At that moment, ... (passé composé)</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Storytelling sentences — tense in action" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Model mini-story — both tenses annotated</p>
          <div className="mt-4 space-y-3 text-sm leading-7">
            <p>
              <span className="text-[#A78BFA]">Il était une fois</span> une jeune fille qui{" "}
              <span className="text-[#A78BFA]">s'appelait</span> Sophie.{" "}
              <span className="text-[#CBD5E1] text-xs">[imparfait — scene, character intro]</span>
            </p>
            <p>
              Elle <span className="text-[#A78BFA]">habitait</span> dans un petit village et{" "}
              <span className="text-[#A78BFA]">aimait</span> se promener en forêt.{" "}
              <span className="text-[#CBD5E1] text-xs">[imparfait — background habits]</span>
            </p>
            <p>
              Un jour, elle <span className="text-[#86EFAC]">a trouvé</span> une vieille carte au trésor.{" "}
              <span className="text-[#CBD5E1] text-xs">[passé composé — key event]</span>
            </p>
            <p>
              Il <span className="text-[#A78BFA]">faisait</span> beau et les oiseaux{" "}
              <span className="text-[#A78BFA]">chantaient</span>.{" "}
              <span className="text-[#CBD5E1] text-xs">[imparfait — setting the scene]</span>
            </p>
            <p>
              Soudain, elle <span className="text-[#86EFAC]">a entendu</span> un bruit derrière elle.{" "}
              <span className="text-[#CBD5E1] text-xs">[passé composé — sudden event]</span>
            </p>
            <p>
              Finalement, Sophie <span className="text-[#86EFAC]">est rentrée</span> chez elle, heureuse et fatiguée.{" "}
              <span className="text-[#CBD5E1] text-xs">[passé composé — story conclusion]</span>
            </p>
          </div>
          <div className="mt-4 flex gap-4 text-xs">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#A78BFA] inline-block"></span> Imparfait (background)</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#86EFAC] inline-block"></span> Passé composé (events)</span>
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Story opener → tense and role" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Complete the story" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Storytelling quiz" />
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Unit 4 complete!</p>
          <p className="mt-2 text-[#526173]">You've mastered imparfait formation and uses, the contrast with passé composé, and storytelling in French. Test yourself before moving on!</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/school-french-support/unit-4/test" className="rounded-full bg-[#9D174D] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#831843]">Take the unit test →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
