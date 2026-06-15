import Link from "next/link";
import FlashCardDeck from "@/components/FlashCardDeck";
import MatchPairs from "@/components/MatchPairs";
import FillInTheBlank from "@/components/FillInTheBlank";
import MultipleChoiceQuiz from "@/components/MultipleChoiceQuiz";

const cards = [
  { front: "bénéficier de", back: "to benefit from / to be entitled to", subtext: "Vous bénéficiez de soins gratuits.: You are entitled to free care." },
  { front: "en vigueur", back: "in effect / currently applicable", subtext: "La loi en vigueur s'applique à tous.: The law currently in effect applies to everyone." },
  { front: "s'adresser à", back: "to contact / to address (an authority)", subtext: "Adressez-vous au guichet principal.: Go to the main counter." },
  { front: "les heures d'ouverture", back: "opening hours / business hours", subtext: "Voir les heures d'ouverture sur notre site.: See our opening hours on our website." },
  { front: "la carte-soleil", back: "Quebec health insurance card (RAMQ card)", subtext: "N'oubliez pas votre carte-soleil.: Don't forget your health card." },
  { front: "la livraison à domicile", back: "home delivery", subtext: "Livraison à domicile disponible dès 25 $.: Home delivery available from $25." },
  { front: "le rabais", back: "discount / reduction", subtext: "Profitez d'un rabais de 20 % cette semaine.: Take advantage of a 20% discount this week." },
  { front: "la mise en candidature", back: "nomination / putting forward a candidacy", subtext: "Les mises en candidature sont ouvertes.: Nominations are now open." },
];

const pairs = [
  { left: "rabais", right: "discount" },
  { left: "en vigueur", right: "in effect" },
  { left: "s'adresser à", right: "to contact / go to" },
  { left: "carte-soleil", right: "Quebec health card" },
  { left: "livraison à domicile", right: "home delivery" },
  { left: "heures d'ouverture", right: "business hours" },
];

const exercises = [
  {
    before: "Consultez nos",
    after: "d'ouverture avant de vous déplacer. (business hours)",
    answer: "heures",
    hint: "les heures d'ouverture = business/opening hours",
    translation: "Check our business hours before making the trip.",
  },
  {
    before: "Cette semaine seulement: profitez d'un",
    after: "de 15 % sur toutes les tuques! (discount)",
    answer: "rabais",
    hint: "rabais = discount",
    translation: "This week only: get a 15% discount on all tuques!",
  },
  {
    before: "Pour toute question, veuillez vous",
    after: "au bureau des renseignements. (contact / address)",
    answer: "adresser",
    hint: "s'adresser à = to go to / contact",
    translation: "For any questions, please go to the information office.",
  },
  {
    before: "Le règlement",
    after: "interdit de stationner ici entre 7 h et 9 h. (currently in effect)",
    answer: "en vigueur",
    hint: "en vigueur = in effect / currently applicable",
    translation: "The regulation currently in effect prohibits parking here between 7 and 9 a.m.",
  },
  {
    before: "Apportez votre",
    after: "à chaque visite à la clinique. (Quebec health card)",
    answer: "carte-soleil",
    hint: "carte-soleil = Quebec RAMQ health insurance card",
    translation: "Bring your health card to every clinic visit.",
  },
];

const questions = [
  {
    question: "Which body regulates the French language in Quebec and creates official French terms?",
    options: [
      "Radio-Canada",
      "L'Académie française",
      "L'Office québécois de la langue française (OQLF)",
      "Le gouvernement fédéral",
    ],
    correct: 2,
    explanation: "The OQLF (Office québécois de la langue française) is responsible for defining, promoting, and enforcing French in Quebec. It created terms like 'courriel' for email and enforces the Charter of the French Language (Bill 101).",
  },
  {
    question: "What is the 'Charte de la langue française' (Bill 101)?",
    options: [
      "A federal law requiring bilingual product labels",
      "A Quebec law making French the official language of the province and regulating its use",
      "An international treaty between France and Canada",
      "A law requiring all Canadians to learn French",
    ],
    correct: 1,
    explanation: "Bill 101 (Loi 101), formally the Charte de la langue française, was passed in 1977. It establishes French as the official language of Quebec and governs the use of French in business, education, and the public sector.",
  },
  {
    question: "In Sample A (the store flyer), what does 'rabais' mean?",
    options: ["refund", "discount", "reward", "exchange"],
    correct: 1,
    explanation: "'Rabais' means discount or price reduction. It's widely used in Quebec commercial French: 'profitez d'un rabais de 20%' = take advantage of a 20% discount.",
  },
  {
    question: "Where would you most likely find formal Quebec French published by the government?",
    options: [
      "On a personal social media account",
      "On the gouv.qc.ca website",
      "In a joual novel",
      "In a tourist brochure written in English",
    ],
    correct: 1,
    explanation: "The Quebec government website (gouv.qc.ca) publishes all content in standard formal Quebec French. It's an excellent resource for reading authentic official French.",
  },
  {
    question: "In Sample B (the social media post), the writer uses 'pis'. What does this word mean?",
    options: ["then / and then", "because", "but", "really"],
    correct: 0,
    explanation: "'Pis' is an informal Quebec contraction of 'puis' (then) or 'et puis' (and then). 'J'ai pogné le mauvais bus pis je suis arrivée en retard' = I caught the wrong bus and then arrived late. It's extremely common in informal spoken and written Quebec French.",
  },
  {
    question: "In Sample C (the government notice), what is a 'vignette de stationnement'?",
    options: ["A parking ticket (fine)", "A parking permit / sticker", "A parking lot entrance code", "A parking receipt"],
    correct: 1,
    explanation: "A 'vignette de stationnement' is a parking permit: typically a sticker placed on a vehicle authorizing it to park in a specific residential or municipal zone. Residents must renew it periodically at the municipal office.",
  },
  {
    question: "Looking at the three samples in this lesson, which has the most formal register?",
    options: ["Sample A: store flyer", "Sample B: social media post", "Sample C: government notice", "All three are equally formal"],
    correct: 2,
    explanation: "Sample C (the government notice) is the most formal: it uses passive voice, impersonal constructions ('sont priés de'), and official vocabulary ('conformément à la réglementation'). Sample A is commercial/semi-formal. Sample B is informal/colloquial.",
  },
  {
    question: "What does 'Conformément à la réglementation en vigueur' mean in Sample C?",
    options: [
      "According to recent regulations",
      "In accordance with the regulations in force / currently applicable",
      "Under new regulations to be introduced",
      "Despite the current regulations",
    ],
    correct: 1,
    explanation: "'Conformément à' = in accordance with. 'En vigueur' = in force / currently applicable. Together: 'in accordance with the currently applicable regulations.' This is a very common opening phrase in Quebec government and legal documents.",
  },
];

export default function Unit1Lesson3Page() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/learn/canadian-life" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← French for Canadian Life
        </Link>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#B91C1C]">Unit 1 · Lesson 3</p>
            <h1 className="mt-3 text-5xl font-black tracking-tight md:text-6xl">Quebec French in Context</h1>
            <p className="mt-4 text-lg leading-8 text-[#526173]">
              Reading real Quebec French: from store flyers to government notices: builds fluency you can't get from textbooks alone. This lesson works through authentic-style text samples across different registers.
            </p>
          </div>

          <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <p className="text-sm font-black text-[#0B1F3A]">Where you'll encounter Quebec French</p>
            <ul className="mt-3 space-y-2 text-sm text-[#526173]">
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 font-black text-[#B91C1C]">→</span><span><strong className="text-[#0B1F3A]">gouv.qc.ca</strong> — all Quebec government services, forms, and notices</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 font-black text-[#B91C1C]">→</span><span><strong className="text-[#0B1F3A]">Radio-Canada</strong> — public broadcaster, news in clear standard Quebec French</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 font-black text-[#B91C1C]">→</span><span><strong className="text-[#0B1F3A]">Le Devoir</strong> — quality newspaper, more formal written French</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 font-black text-[#B91C1C]">→</span><span><strong className="text-[#0B1F3A]">OQLF (oqlf.gouv.qc.ca)</strong> — language office, useful for terminology</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5 shrink-0 font-black text-[#B91C1C]">→</span><span><strong className="text-[#0B1F3A]">Store signs & menus</strong> — informal commercial French, great for vocabulary</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {/* Sample A */}
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#526173]">Sample A — Store flyer</p>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6">
              <p className="font-black text-[#B91C1C]">LIQUIDATION DE FIN DE SAISON</p>
              <p className="mt-2 leading-7 text-[#0B1F3A]">
                Profitez d'un rabais de 30 % sur toute notre collection de manteaux et tuques d'hiver. Vente en magasin seulement: stationnement gratuit pour les clients. Heures d'ouverture: du lundi au vendredi, 9 h à 21 h. Samedi et dimanche, 10 h à 17 h. Ne manquez pas cette occasion!
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q1: What discount is being offered?</p>
                <p className="mt-1 text-[#0B1F3A]">A: 30% off (rabais de 30 %) on all winter coats and tuques.</p>
              </div>
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q2: What does 'stationnement gratuit' mean?</p>
                <p className="mt-1 text-[#0B1F3A]">A: Free parking for customers. 'Stationnement' is the Quebec French word for parking lot.</p>
              </div>
            </div>
          </div>

          {/* Sample B */}
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#526173]">Sample B — Informal social media post</p>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6">
              <p className="leading-7 text-[#0B1F3A]">
                Bon, ça fait que ce matin j'ai pogné le mauvais bus pis je suis arrivée en retard au bureau. Mon patron était pas super content, mais y'a été correct avec moi. Tantôt je lui apporte un café pour me faire pardonner lol. En tout cas, vous avez passé une bonne fin de semaine, vous autres? Moi j'ai magasiné avec ma blonde samedi: c'était le boutte!
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q1: What happened to the writer this morning?</p>
                <p className="mt-1 text-[#0B1F3A]">A: She caught the wrong bus (pogné le mauvais bus) and arrived late to the office.</p>
              </div>
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q2: Who did she go shopping with on Saturday?</p>
                <p className="mt-1 text-[#0B1F3A]">A: Her girlfriend (ma blonde — in Quebec French, blonde means girlfriend).</p>
              </div>
            </div>
          </div>

          {/* Sample C */}
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-[#526173]">Sample C — Government notice</p>
            <div className="rounded-2xl border border-[#E7DAB9] bg-white p-6">
              <p className="font-black text-[#0B1F3A]">AVIS AUX CITOYENS</p>
              <p className="mt-2 leading-7 text-[#0B1F3A]">
                Conformément à la réglementation en vigueur, les résidents de l'arrondissement sont priés de s'adresser au bureau municipal pour le renouvellement de leur vignette de stationnement. Les demandes doivent être accompagnées d'une pièce d'identité valide et d'une preuve de résidence récente. Pour toute question, communiquez avec nous par courriel à l'adresse indiquée ci-dessous. Nos agents sont disponibles du lundi au vendredi, de 8 h 30 à 16 h 30.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q1: What are residents being asked to do?</p>
                <p className="mt-1 text-[#0B1F3A]">A: Go to the municipal office to renew their parking permit (vignette de stationnement).</p>
              </div>
              <div className="rounded-xl bg-[#FEF2F2] p-4 text-sm">
                <p className="font-black text-[#B91C1C]">Q2: What documents must accompany the request?</p>
                <p className="mt-1 text-[#0B1F3A]">A: A valid ID (pièce d'identité valide) and recent proof of residence (preuve de résidence récente).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FlashCardDeck cards={cards} title="Key vocabulary from the samples" />
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="text-lg font-black">L'Office québécois de la langue française (OQLF)</p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            The OQLF is the Quebec government body responsible for defining and promoting French in Quebec. It was established by the Charter of the French Language (Bill 101 / Loi 101) in 1977: the landmark legislation that made French the official language of the province.
          </p>
          <p className="mt-3 leading-7 text-[#CBD5E1]">
            The OQLF creates official Quebec French terminology for new concepts: the word <strong className="text-white">courriel</strong> (email) is one of its most famous inventions. It also maintains the <em>Grand dictionnaire terminologique</em>, a public database of French terminology across hundreds of professional fields. When you're unsure whether a word has an official French equivalent in Quebec, that's the first place to check.
          </p>
        </div>

        <div className="mt-12">
          <MatchPairs pairs={pairs} title="Match the term to its meaning" />
        </div>

        <div className="mt-12">
          <FillInTheBlank exercises={exercises} title="Fill in with the right vocabulary" />
        </div>

        <div className="mt-12">
          <MultipleChoiceQuiz questions={questions} title="Quebec French in context quiz" />
        </div>

        <div className="mt-16 flex items-center justify-between gap-4">
          <Link href="/learn/canadian-life/unit-1/lesson-2" className="rounded-full border border-[#E7DAB9] bg-white px-5 py-2.5 text-sm font-black text-[#0B1F3A] transition hover:-translate-y-0.5">← Previous lesson</Link>
          <Link href="/learn/canadian-life/unit-1/lesson-4" className="rounded-full bg-[#B91C1C] px-5 py-2.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#991B1B]">Next lesson →</Link>
        </div>
      </section>
    </main>
  );
}
