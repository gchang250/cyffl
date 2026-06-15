import Link from "next/link";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const questions = [
  {
    question: "Fill-in-blank (SLE writing): 'La Direction générale souhaite porter _____ votre attention les modifications apportées au programme.' Which preposition is correct?",
    options: ["à", "en", "pour", "dans"],
    correct: 0,
    explanation: "'Porter à l'attention de quelqu'un' = to bring to someone's attention. This is a fixed government collocation. 'Porter en' and 'porter pour' don't exist in this construction. Learn common government collocations: donner suite à, faire état de, tenir compte de, donner lieu à.",
  },
  {
    question: "Error identification (SLE writing): Which version of this sentence is correct?",
    options: [
      "A. Les ressources humains ont confirmé la date de l'entretien.",
      "B. Les ressources humaines ont confirmé la date de l'entretien.",
      "C. La ressource humaine a confirmé la date de l'entretien.",
      "D. Les ressources humaines a confirmé la date de l'entretien.",
    ],
    correct: 1,
    explanation: "B is correct. 'Les ressources humaines' is a fixed plural feminine noun: always feminine plural ('humaines', not 'humains'). The verb must agree with the plural subject: 'ont confirmé' (not 'a confirmé'). Both A (wrong gender) and D (verb agrees with singular) are incorrect.",
  },
  {
    question: "SLE reading: A policy states: 'Cette mesure s'applique à tous les fonctionnaires à l'exception de ceux dont la nomination précède l'entrée en vigueur du présent règlement, sous réserve d'une décision contraire du sous-ministre.' A statement says: 'All public servants are subject to this measure without exception.' This is:",
    options: [
      "True: the policy covers all public servants",
      "False: employees appointed before the regulation took effect are excluded, unless the deputy minister decides otherwise",
      "True: the exception only applies in rare cases",
      "Partially true: it depends on when they were appointed",
    ],
    correct: 1,
    explanation: "The text contains two restrictions: (1) those appointed before the regulation's entry into force are excluded, AND (2) 'sous réserve d'une décision contraire' means the deputy minister can override this. 'Without exception' ignores both restrictions. At Level C, you must account for every qualifier.",
  },
  {
    question: "Fill-in-blank (SLE writing): 'Le rapport _____ il est question dans cette note sera soumis au Conseil d'administration la semaine prochaine.' Which relative pronoun is correct?",
    options: ["que", "dont", "auquel", "lequel"],
    correct: 1,
    explanation: "'Il est question DE quelque chose' → the relative pronoun must carry 'de', so use 'dont'. 'Le rapport dont il est question' = the report in question. 'Que' is the direct object pronoun (no preposition). 'Auquel' = à + lequel (wrong preposition). 'Lequel' needs a preposition before it.",
  },
  {
    question: "SLE oral: The assessor says: 'Si vous deviez convaincre votre équipe d'adopter un nouveau processus de travail qu'elle résiste à changer, comment procéderiez-vous ?' This question tests your ability to:",
    options: [
      "Describe your current workplace",
      "Give a hypothetical problem-solving response using the conditional: Level C oral task",
      "Define what a work process is",
      "Explain why people resist change in general",
    ],
    correct: 1,
    explanation: "'Comment procéderiez-vous ?' = how would you proceed: conditional tense, hypothetical scenario. This is a Level C oral task requiring structured problem-solving: 'Je commencerais par…', 'Ensuite, je…', 'Pour traiter la résistance au changement, je mettrais en avant…'. Defining 'work process' or explaining resistance theory is off-task.",
  },
  {
    question: "Error identification (SLE writing): Which version is correctly written?",
    options: [
      "A. Suite à notre réunion, je vous fais part de mes décisions prises.",
      "B. Suite à notre réunion, je vous fais part des décisions prises.",
      "C. Après notre réunion, je vous fais part aux décisions prises.",
      "D. À la suite de notre réunion, je vous fait part des décisions prises.",
    ],
    correct: 1,
    explanation: "B is correct. 'Faire part de quelque chose' = to inform someone of something (fixed construction with 'de'). A uses 'de mes décisions prises' (wrong: the decisions aren't 'mine' in this impersonal context). C uses 'aux' (wrong preposition after 'faire part'). D has incorrect verb agreement ('vous fait' should be 'vous fais': the subject is 'je').",
  },
  {
    question: "SLE reading: A memo's OBJET line reads: 'Modifications aux critères d'admissibilité: Programme d'aide à la formation professionnelle.' A question asks: 'What is the most likely content of this memo?' The answer is:",
    options: [
      "A description of how to apply for professional training funding",
      "An announcement that the eligibility criteria for the professional training aid program have changed",
      "A request for employees to enroll in training programs",
      "A report on the effectiveness of professional training",
    ],
    correct: 1,
    explanation: "The OBJET line signals 'modifications aux critères d'admissibilité' = changes to eligibility criteria. The memo's content is about those changes: not how to apply (that would be a guide), not a request to enroll, not a performance report. Reading the OBJET line answers many purpose and structure questions immediately.",
  },
  {
    question: "Fill-in-blank (SLE writing): 'À la lumière des consultations menées _____ les intervenants du secteur, il a été décidé de reporter la mise en œuvre.' Which preposition fits?",
    options: ["avec", "auprès de", "sur", "par rapport à"],
    correct: 1,
    explanation: "'Mener des consultations auprès des intervenants' = to conduct consultations with/among stakeholders. 'Auprès de' is the fixed preposition for consultations and surveys in government French. 'Avec' is too informal; 'sur' changes the meaning; 'par rapport à' means 'in relation to'.",
  },
  {
    question: "SLE oral: Level B explanation task: The assessor asks you to explain how your team handles a conflicting deadline between two projects. The BEST structure for your response is:",
    options: [
      "'C'est compliqué, ça dépend de la situation.'",
      "'Nous gérons les conflits de priorités de la façon suivante. Tout d'abord, nous identifions laquelle des deux échéances est la plus critique. Ensuite, nous consultons les gestionnaires concernés. Finalement, nous réallouons les ressources en conséquence.'",
      "'Dans mon équipe, nous essayons de bien travailler ensemble.'",
      "'Je préférerais ne pas parler de conflits dans mon équipe.'",
    ],
    correct: 1,
    explanation: "Level B explanation requires structure and specificity: 'la façon suivante' + sequential steps (Tout d'abord → Ensuite → Finalement) + relevant professional vocabulary ('échéances', 'gestionnaires', 'réallouer les ressources'). The other options are too vague, off-topic, or avoid the question.",
  },
  {
    question: "Error identification (SLE writing): A document contains: 'Les membres du comité auxquels ont été remis les documents ont demandé un délai supplémentaire.' Is this correct?",
    options: [
      "No: 'auxquels ont été remis' should be 'auxquels les documents ont été remis'",
      "No: 'auxquels' should be 'dont'",
      "Yes: the sentence is correctly written",
      "No: 'ont demandé' should be 'a demandé'",
    ],
    correct: 2,
    explanation: "The sentence is correct. 'Auxquels ont été remis les documents' is a correctly inverted passive relative clause (remise à quelqu'un → auxquels). 'Les membres… ont demandé': the verb correctly agrees with the plural subject 'les membres'. This is a Level C sentence structure: recognize that a sentence with a complex clause can still be entirely correct.",
  },
];

export default function SLETestPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-french-tests" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Tests
        </Link>

        <div className="mt-6">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs font-black text-[#D97706]">Unit 1 Test</span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">Government French</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#526173]">
            10 questions mixing all three SLE test types: fill-in-blank (written expression), error identification (written expression), and reading comprehension passages with government text extracts. Oral strategy questions included.
          </p>
        </div>

        <section className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Unit 1 Test · 10 questions" />
        </section>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-8 text-white shadow-sm">
          <p className="text-sm font-bold text-[#C9A44C] uppercase tracking-widest">Official practice materials</p>
          <p className="mt-3 leading-7 text-white/70">
            The Public Service Commission provides free official SLE practice tests for reading and written expression. These are the most accurate preparation materials available.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://www.canada.ca/en/public-service-commission/services/second-language-testing-public-service/self-assessment-tests.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C9A44C] px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5"
            >
PSC self-assessment tests (official) ↗
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <p className="font-black text-lg">Ready for Unit 2?</p>
          <p className="mt-2 text-[#526173]">Unit 2 covers the French you need for TEF Canada — topic vocabulary, opinion phrases, and all four test sections.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/learn/canadian-french-tests/unit-1/lesson-5" className="rounded-full border border-[#C9A44C] bg-white px-6 py-3 text-sm font-black text-[#0B1F3A] shadow-sm transition hover:-translate-y-0.5">← Back to lesson</Link>
            <Link href="/learn/canadian-french-tests/unit-2/lesson-1" className="rounded-full bg-[#D62828] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#B91C1C]">Start Unit 2 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
