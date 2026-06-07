import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "la carte d'assurance maladie", back: "health insurance card\nIn Quebec this is called the 'carte-soleil' (sun card) because of its yellow colour.", subtext: "N'oubliez pas votre carte d'assurance maladie. — Don't forget your health card." },
  { front: "la RAMQ", back: "Régie de l'assurance maladie du Québec — Quebec's provincial health insurance plan.\nEquivalent to OHIP in Ontario.", subtext: "Votre carte RAMQ est valide 4 ans. — Your RAMQ card is valid for 4 years." },
  { front: "le médecin de famille", back: "family doctor / general practitioner (GP)", subtext: "Je cherche un médecin de famille qui accepte de nouveaux patients. — I'm looking for a family doctor accepting new patients." },
  { front: "l'urgence (f.)", back: "emergency room / ER", subtext: "Il faut aller à l'urgence tout de suite. — You need to go to the emergency room right away." },
  { front: "le rendez-vous", back: "appointment", subtext: "J'ai un rendez-vous chez le médecin lundi matin. — I have a doctor's appointment Monday morning." },
  { front: "l'ordonnance (f.)", back: "prescription", subtext: "Le médecin m'a donné une ordonnance pour des antibiotiques. — The doctor gave me a prescription for antibiotics." },
  { front: "le médicament", back: "medication / medicine", subtext: "Prenez ce médicament deux fois par jour. — Take this medication twice a day." },
  { front: "les antécédents médicaux (m.pl.)", back: "medical history", subtext: "Avez-vous des antécédents de maladies cardiaques? — Do you have a history of heart disease?" },
  { front: "le CLSC", back: "Centre local de services communautaires — a Quebec community health centre offering primary care, social services, and mental health support.", subtext: "Le CLSC peut vous aider sans rendez-vous. — The CLSC can help you without an appointment." },
  { front: "remplir un formulaire", back: "to fill out a form", subtext: "Veuillez remplir ce formulaire avant votre consultation. — Please fill out this form before your appointment." },
];

const pairs = [
  { left: "carte-soleil", right: "Quebec health card (RAMQ)" },
  { left: "ordonnance", right: "prescription" },
  { left: "rendez-vous", right: "appointment" },
  { left: "médecin de famille", right: "family doctor" },
  { left: "urgence", right: "emergency room" },
  { left: "CLSC", right: "community health centre (Quebec)" },
];

const exercises = [
  {
    before: "Pour voir un spécialiste, vous avez besoin d'une",
    after: "de votre médecin de famille. (referral / prescription)",
    answer: "ordonnance",
    hint: "ordonnance = prescription / referral document",
    translation: "To see a specialist, you need a referral from your family doctor.",
  },
  {
    before: "J'ai pris",
    after: "chez le médecin pour mes douleurs au dos. (an appointment)",
    answer: "un rendez-vous",
    hint: "prendre un rendez-vous = to make an appointment",
    translation: "I made an appointment with the doctor for my back pain.",
  },
  {
    before: "Si vous n'avez pas de médecin de famille, le",
    after: "peut vous aider pour des soins de base. (community health centre)",
    answer: "CLSC",
    hint: "CLSC = Centre local de services communautaires",
    translation: "If you don't have a family doctor, the CLSC can help you with basic care.",
  },
  {
    before: "La",
    after: "de votre médecin indique le nom du médicament et la dose. (prescription)",
    answer: "ordonnance",
    hint: "ordonnance = prescription",
    translation: "Your doctor's prescription indicates the medication name and dosage.",
  },
  {
    before: "Veuillez",
    after: "ce formulaire et le remettre à l'accueil. (fill out)",
    answer: "remplir",
    hint: "remplir un formulaire = to fill out a form",
    translation: "Please fill out this form and return it to reception.",
  },
];

const questions = [
  {
    question: "What is the 'carte-soleil'?",
    options: [
      "A federal health card valid across Canada",
      "Quebec's provincial health insurance card (RAMQ)",
      "An Ontario pharmacy discount card",
      "A social insurance card",
    ],
    correct: 1,
    explanation: "The 'carte-soleil' is the informal name for Quebec's RAMQ health insurance card, named for its yellow colour. It gives access to Quebec's provincially funded healthcare services.",
  },
  {
    question: "What does 'RAMQ' stand for?",
    options: [
      "Régime d'assurance maladie du Québec",
      "Régie de l'assurance maladie du Québec",
      "Réseau d'accès médical du Québec",
      "Registre de l'assistance médicale du Québec",
    ],
    correct: 1,
    explanation: "RAMQ stands for Régie de l'assurance maladie du Québec — the public body that manages Quebec's provincial health insurance plan. It issues the carte-soleil and reimburses covered medical services.",
  },
  {
    question: "What is a CLSC?",
    options: [
      "A private clinic open 24/7",
      "A federal health service centre",
      "A Quebec community health centre offering primary and social services",
      "A specialized hospital department",
    ],
    correct: 2,
    explanation: "A CLSC (Centre local de services communautaires) is a Quebec community health centre that provides primary care, mental health support, social services, and more — often without an appointment for basic needs.",
  },
  {
    question: "Which word means 'medical history' in French?",
    options: [
      "les antécédents médicaux",
      "les ordonnances médicales",
      "les médicaments historiques",
      "les soins antérieurs",
    ],
    correct: 0,
    explanation: "'Les antécédents médicaux' means medical history. You'll see this term on intake forms: 'Avez-vous des antécédents de diabète?' — Do you have a history of diabetes?",
  },
  {
    question: "How do you say 'I need to make a doctor's appointment' in French?",
    options: [
      "Je dois prendre une décision chez le médecin.",
      "Je dois prendre un rendez-vous chez le médecin.",
      "Je dois faire une demande chez le médecin.",
      "Je dois trouver un horaire avec le médecin.",
    ],
    correct: 1,
    explanation: "'Prendre un rendez-vous' = to make an appointment. It's the standard phrase in French. You 'prendre' (take) an appointment — not 'faire', not 'avoir'. 'J'ai pris un rendez-vous pour lundi.' = I made an appointment for Monday.",
  },
  {
    question: "What does 'une ordonnance' mean and when do you need one?",
    options: [
      "An emergency room authorization",
      "A prescription — a doctor's written authorization for medication",
      "A hospital referral form",
      "A health card renewal notice",
    ],
    correct: 1,
    explanation: "'Une ordonnance' = a prescription. Your doctor gives you an ordonnance to take to the pharmacy ('la pharmacie') to get medication. Without an ordonnance, pharmacies can only dispense over-the-counter (en vente libre) products.",
  },
  {
    question: "In Quebec, if you don't have a family doctor, where should you go for non-emergency care?",
    options: [
      "Directly to the hospital emergency room",
      "A CLSC or a walk-in clinic (clinique sans rendez-vous)",
      "A private insurance office",
      "Telehealth is the only option",
    ],
    correct: 1,
    explanation: "A CLSC or 'clinique sans rendez-vous' (walk-in clinic) handles non-emergency care when you don't have a médecin de famille. Emergency rooms (urgences) are for serious/urgent situations — using them for minor issues increases wait times for everyone.",
  },
  {
    question: "What does 'être admis aux urgences' mean?",
    options: [
      "Being registered with a family doctor",
      "Being accepted into a pharmacy program",
      "Being admitted to the emergency room",
      "Being approved for provincial health insurance",
    ],
    correct: 2,
    explanation: "'Être admis aux urgences' = to be admitted to the emergency room. 'Les urgences' is the French term for the ER / A&E. Note: 'les urgences' is plural even when referring to a single department. 'J'ai été admis aux urgences hier soir.' = I was admitted to the ER last night.",
  },
];

export default function Unit2Lesson1Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Unit 2 · Lesson 1</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Healthcare in French</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Navigating the Canadian healthcare system requires specific vocabulary. Whether you're in Quebec using the RAMQ, in Ontario with OHIP, or anywhere else in Canada, knowing this vocabulary helps you access care confidently.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Key healthcare vocabulary</p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-2 pr-4 text-left font-black text-[#2563EB]">French</th>
                    <th className="pb-2 text-left font-black text-[#0B1F3A]">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD6]">
                  {[
                    ["la carte d'assurance maladie", "health insurance card (carte-soleil in Quebec)"],
                    ["la RAMQ", "Quebec health insurance plan"],
                    ["le médecin de famille", "family doctor"],
                    ["l'urgence", "emergency room"],
                    ["le rendez-vous", "appointment"],
                    ["l'ordonnance", "prescription"],
                    ["le médicament", "medication"],
                    ["les antécédents médicaux", "medical history"],
                    ["l'assurance maladie", "health insurance"],
                    ["le CLSC", "community health centre (Quebec)"],
                    ["les soins de santé", "healthcare"],
                    ["le formulaire", "form"],
                    ["remplir un formulaire", "to fill out a form"],
                    ["les renseignements personnels", "personal information"],
                  ].map(([fr, en]) => (
                    <tr key={fr}>
                      <td className="py-1.5 pr-4 font-bold text-[#2563EB]">{fr}</td>
                      <td className="py-1.5 text-[#526173]">{en}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Healthcare vocabulary flashcards" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">Reading a healthcare form</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            When you register with a clinic or fill out a provincial health form, you'll encounter the same fields repeatedly. Here are the key ones to know:
          </p>
          <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[
              ["Nom", "Last name / Surname"],
              ["Prénom", "First name"],
              ["Date de naissance", "Date of birth"],
              ["Numéro d'assurance maladie", "Health card number"],
              ["Adresse", "Address"],
              ["Code postal", "Postal code"],
              ["Sexe", "Sex / Gender"],
              ["Signature", "Signature"],
              ["Numéro de téléphone", "Phone number"],
              ["Médecin traitant", "Treating physician"],
            ].map(([fr, en]) => (
              <div key={fr} className="rounded-lg bg-white/10 p-3">
                <p className="font-bold">{fr}</p>
                <p className="text-[#CBD5E1]">{en}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the healthcare term to its meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Healthcare vocabulary in context" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Healthcare in French quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-1/test" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Unit 1 test</Link>
          <Link href="/learn/canadian-life/unit-2/lesson-2" className="rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#1D4ED8]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
