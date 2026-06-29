import Link from "next/link";

export const revalidate = 3600;

const differentiators = [
  {
    label: "Quebec French",
    detail: "Fin de semaine, dépanneur, magasinage: the vocabulary that changes across the border.",
  },
  {
    label: "Government forms",
    detail: "Health cards, tax returns, immigration documents: navigating official French with confidence.",
  },
  {
    label: "Bilingual workplaces",
    detail: "Job postings, cover letters, workplace emails, and French job interviews.",
  },
  {
    label: "University applications",
    detail: "Cégep, bourse, dossier d'admission: the education French you need in Canada.",
  },
];

const offerings = [
  {
    title: "French for Canadian Life",
    description: "Quebec expressions, government forms, bilingual job postings, university applications.",
    href: "/learn/canadian-life",
  },
  {
    title: "French for Canadian Tests",
    description: "Government vocabulary and exam strategy for the SLE and TEF Canada.",
    href: "/learn/canadian-french-tests",
  },
  {
    title: "All Courses",
    description: "Structured French from zero to advanced, including IB prep, school support, grammar, and verb tenses.",
    href: "/learn",
  },
  {
    title: "Tutoring",
    description: "One-on-one support for homework, tests, speaking practice, and grammar questions.",
    href: "/tutoring",
  },
];

const weeklyWords = [
  { word: "la francophonie", pos: "n.f.", meaning: "the French-speaking world and its community", example: "Le Canada joue un rôle important au sein de la francophonie mondiale." },
  { word: "l'achalandage", pos: "n.m.", meaning: "foot traffic, patronage, customer volume", example: "L'achalandage dans ce quartier a augmenté depuis l'ouverture du métro." },
  { word: "le bénévolat", pos: "n.m.", meaning: "volunteer work, volunteering", example: "Le bénévolat est au coeur du mandat de notre organisation." },
  { word: "les démarches", pos: "n.f.pl.", meaning: "steps, procedures, formalities to complete", example: "Il faut effectuer les démarches nécessaires avant de soumettre votre dossier." },
  { word: "l'embauche", pos: "n.f.", meaning: "hiring, recruitment", example: "L'offre d'embauche a été envoyée par courriel vendredi matin." },
  { word: "le dossier", pos: "n.m.", meaning: "file, case, application, portfolio", example: "Votre dossier de candidature sera examiné dans les prochains jours." },
  { word: "l'arrondissement", pos: "n.m.", meaning: "borough (used in Montreal, Quebec City, and other cities)", example: "L'arrondissement du Plateau-Mont-Royal est connu pour ses cafés et sa vie culturelle." },
  { word: "la formation", pos: "n.f.", meaning: "training program, education, professional development", example: "Elle suit une formation en gestion de projet pour progresser dans sa carrière." },
  { word: "le palier", pos: "n.m.", meaning: "level, tier (especially of government)", example: "Cette compétence relève du palier provincial, non fédéral." },
  { word: "l'équité", pos: "n.f.", meaning: "equity, fairness", example: "La politique vise à garantir l'équité entre les différentes régions du pays." },
  { word: "le suivi", pos: "n.m.", meaning: "follow-up, monitoring, tracking", example: "Assurez-vous de faire un suivi auprès du bureau des admissions après avoir soumis votre demande." },
  { word: "se brancher", pos: "v.", meaning: "to make up one's mind, to commit to a choice (Quebec informal)", example: "Branche-toi: tu viens ou tu viens pas?" },
  { word: "le prestataire", pos: "n.m.", meaning: "benefit recipient, service provider (government context)", example: "Les prestataires de l'aide sociale doivent renouveler leur demande chaque trimestre." },
  { word: "prévaloir", pos: "v.", meaning: "to prevail, to take precedence", example: "En cas de contradiction, la version française prévaut sur la version anglaise." },
  { word: "la mise en candidature", pos: "n.f.", meaning: "nomination, candidacy submission", example: "La période de mise en candidature se termine le 30 juin." },
  { word: "le courriel", pos: "n.m.", meaning: "email (the official Quebec/Canadian French term)", example: "Veuillez nous contacter par courriel à l'adresse indiquée sur notre site." },
  { word: "la relâche", pos: "n.f.", meaning: "school break (Quebec term for March break or spring break)", example: "Les enfants ont une semaine de relâche en mars." },
  { word: "le chalet", pos: "n.m.", meaning: "cottage, cabin (quintessentially Canadian summer tradition)", example: "On passe le long weekend au chalet dans les Laurentides." },
  { word: "le concours", pos: "n.m.", meaning: "competition; specifically a government job competition", example: "Elle a réussi le concours et obtenu un poste à la fonction publique fédérale." },
  { word: "le congé férié", pos: "n.m.", meaning: "statutory holiday, public holiday", example: "La fête du Canada est un congé férié partout au pays." },
  { word: "l'infolettre", pos: "n.f.", meaning: "newsletter (Quebec coinage, widely used in institutions)", example: "Abonnez-vous à notre infolettre pour recevoir les dernières nouvelles." },
  { word: "le guichet", pos: "n.m.", meaning: "service counter, teller window, ATM", example: "Présentez-vous au guichet du bureau des passeports avec vos documents." },
  { word: "achaler", pos: "v.", meaning: "to bother, to pester, to annoy (Quebec informal)", example: "Arrête de m'achaler, je suis en train de travailler." },
  { word: "correct", pos: "adj.", meaning: "fine, okay, decent — much milder than the English 'correct' (Quebec)", example: "T'es correct? — Oui, ça va, merci." },
  { word: "le magasinage", pos: "n.m.", meaning: "shopping (Quebec term; France says 'les courses' or 'le shopping')", example: "On fait du magasinage au centre commercial ce samedi." },
  { word: "la tuque", pos: "n.f.", meaning: "winter hat, toque — a Canadian winter essential", example: "N'oublie pas ta tuque, il fait moins quinze dehors." },
  { word: "se dépanner", pos: "v.", meaning: "to help out in a pinch, to get by with what's available", example: "Il m'a dépanné en me prêtant son auto pour la matinée." },
  { word: "la politique", pos: "n.f.", meaning: "policy (government or institutional); also politics", example: "La politique de confidentialité de l'organisme a été mise à jour ce mois-ci." },
  { word: "le plan d'action", pos: "n.m.", meaning: "action plan (extremely common in Canadian government and nonprofits)", example: "Le plan d'action gouvernemental prévoit des investissements sur cinq ans." },
  { word: "la permanence", pos: "n.f.", meaning: "permanent status, tenure (in employment or a union context)", example: "Après trois ans, elle a obtenu sa permanence au sein de la fonction publique." },
];

const weeklyExpressions = [
  { expression: "Tomber dans l'oeil", meaning: "To catch someone's eye, to appeal to someone" },
  { expression: "Prendre une marche", meaning: "To go for a walk (Quebec expression)" },
  { expression: "Ca fait mon affaire", meaning: "That works for me, that suits me fine (Quebec)" },
  { expression: "Avoir les deux pieds dans la meme bottine", meaning: "To be clumsy or incompetent (Quebec)" },
  { expression: "Passer comme une lettre a la poste", meaning: "To go smoothly, without a hitch" },
  { expression: "Partir en peur", meaning: "To go full throttle, to freak out, to overreact (Quebec)" },
  { expression: "Faire le pont", meaning: "To take extra days off to bridge a long weekend" },
  { expression: "Avoir du front tout le tour de la tete", meaning: "To have a lot of nerve (Quebec)" },
  { expression: "Brasser la cage", meaning: "To shake things up, to stir the pot (Quebec)" },
  { expression: "Passer un mauvais quart d'heure", meaning: "To have a rough time, to go through a difficult moment" },
  { expression: "Donner sa langue au chat", meaning: "To give up guessing" },
  { expression: "Se mettre le doigt dans l'oeil", meaning: "To be completely wrong, to fool oneself" },
  { expression: "Braser les cartes", meaning: "To shuffle the deck, to start fresh" },
  { expression: "Se faire la main", meaning: "To practice, to get the hang of something" },
  { expression: "Monter aux barricades", meaning: "To take a stand, to fight back against something" },
  { expression: "Etre sur la coche", meaning: "To be on top of things, to be doing great (Quebec)" },
  { expression: "S'en laver les mains", meaning: "To wash one's hands of something, to take no responsibility" },
  { expression: "Tenir parole", meaning: "To keep one's word, to follow through on a promise" },
  { expression: "Avoir le compas dans l'oeil", meaning: "To have a great eye for proportion or detail" },
  { expression: "Battre le fer pendant qu'il est chaud", meaning: "To strike while the iron is hot" },
  { expression: "Ça adonne bien", meaning: "That works out well, good timing (Quebec)" },
  { expression: "C'est de valeur", meaning: "That's a shame, too bad (Quebec)" },
  { expression: "Lâche pas", meaning: "Don't give up, hang in there (Quebec)" },
  { expression: "Être dans le jus", meaning: "To be swamped, overwhelmed with work (Quebec)" },
  { expression: "Avoir le feu vert", meaning: "To get the green light, to receive approval" },
  { expression: "Tirer son épingle du jeu", meaning: "To hold one's own, to come out ahead in a difficult situation" },
  { expression: "Mettre les points sur les i", meaning: "To spell it out clearly, to be precise and leave no ambiguity" },
  { expression: "Ça ne donne rien", meaning: "It's pointless, it won't help, there's no use (Quebec)" },
  { expression: "Se virer de bord", meaning: "To turn things around, to change direction entirely (Quebec)" },
  { expression: "Passer au cash", meaning: "To face the consequences, to pay the price (Quebec informal)" },
];

export default function HomePage() {
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000));
  const word = weeklyWords[weekNumber % weeklyWords.length];
  const expression = weeklyExpressions[(weekNumber + 7) % weeklyExpressions.length];

  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">

      {/* Hero */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold text-[#526173]">
            Youth-led · Free · Students in Canada
          </p>
          <h1 className="mt-6 max-w-2xl text-6xl font-black leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
            French built<br />for Canadian<br />life.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#526173]">
            Quebec expressions, government forms, bilingual job postings, university applications. The French no app teaches you. Free, made by Canadian youth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/learn/canadian-life"
              className="rounded-full bg-[#D62828] px-7 py-3 text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              French for Canadian Life
            </Link>
            <Link
              href="/learn"
              className="rounded-full border border-[#0B1F3A] px-7 py-3 text-sm font-black text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              All courses
            </Link>
          </div>
        </div>
      </section>

      {/* Word / Expression strip */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 md:divide-x md:divide-[#E7DAB9]">
            <div className="border-b border-[#E7DAB9] py-8 md:border-b-0 md:pr-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#526173]">Mot de la semaine</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-black">{word.word}</span>
                <span className="text-xs text-[#526173]">{word.pos}</span>
              </div>
              <p className="mt-0.5 text-sm leading-5 text-[#526173]">{word.meaning}</p>
              <p className="mt-3 border-l-2 border-[#E7DAB9] pl-3 text-sm italic leading-6 text-[#526173]">{word.example}</p>
            </div>
            <div className="py-8 md:pl-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#526173]">Expression de la semaine</p>
              <p className="mt-3 text-xl font-black">{expression.expression}</p>
              <p className="mt-1 text-sm leading-6 text-[#526173]">{expression.meaning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why CYFFL */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Most French courses weren&apos;t built for Canada.
              </h2>
              <p className="mt-5 leading-7 text-[#526173]">
                Knowing how to order a coffee in Paris won&apos;t help you fill out a RAMQ form, read a federal job posting, or understand why Quebecers say <em>fin de semaine</em> instead of <em>weekend</em>. CYFFL teaches the French that actually comes up in Canadian life. Not textbook scenarios.
              </p>
              <Link
                href="/learn/canadian-life"
                className="mt-6 inline-block text-sm font-black text-[#D62828] hover:underline"
              >
                See the course →
              </Link>
            </div>

            <div className="divide-y divide-[#E7DAB9]">
              {differentiators.map((d) => (
                <div key={d.label} className="py-5">
                  <p className="font-black">{d.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[#526173]">{d.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-b border-[#E7DAB9]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-2xl font-black">Courses &amp; services</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col rounded-2xl border border-[#E7DAB9] bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-black group-hover:text-[#D62828]">
                  {item.title} →
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#526173]">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-2xl font-black">
                Help make French click for students across Canada.
              </h2>
              <p className="mt-2 leading-7 text-[#526173]">
                CYFFL runs on volunteers. If you know French and want to teach, create resources, or help grow the community, we want you.
              </p>
            </div>
            <Link
              href="/volunteer"
              className="shrink-0 rounded-full bg-[#D62828] px-7 py-3 text-center text-sm font-black text-white transition hover:bg-[#B91C1C]"
            >
              Join as a volunteer
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
