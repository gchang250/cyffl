import Link from "next/link";
import VocabTable from "@/components/VocabTable";
import SpeakButton from "@/components/SpeakButton";

type VocabEntry = {
  term: string;
  pos: string;
  meaning: string;
  context: string;
  example: string;
};

const everydayLife: VocabEntry[] = [
  {
    term: "dépanneur",
    pos: "n.m.",
    meaning: "Convenience store (often called 'le dep')",
    context: "Québec only. A European or international French speaker would not know this word: they say 'épicerie de proximité' or simply describe it.",
    example: "Je passe au dep acheter du lait et des chips.",
  },
  {
    term: "caisse populaire",
    pos: "n.f.",
    meaning: "Credit union (specifically the Desjardins network)",
    context: "A Quebec institution. 'Caisse pop' is the informal version. The Desjardins Group is the largest federation of credit unions in Canada, with deep cultural roots in francophone communities.",
    example: "Mon salaire est déposé directement à la caisse populaire.",
  },
  {
    term: "déjeuner / dîner / souper",
    pos: "n.m.",
    meaning: "Breakfast / lunch / dinner",
    context: "Quebec French shifts all meal names by one: déjeuner = breakfast (in France it means lunch), dîner = lunch (in France it means dinner), souper = dinner (in France it's informal for a late snack). This confuses even fluent French speakers from Europe.",
    example: "On mange le souper à six heures ici.",
  },
  {
    term: "le magasinage",
    pos: "n.m.",
    meaning: "Shopping (as an activity)",
    context: "Quebec and Canadian French. In France and elsewhere, people say 'faire du shopping' (an English loanword). 'Magasinage' and 'magasiner' are the official OQLF-approved Quebec terms.",
    example: "On va faire du magasinage au Carrefour Laval samedi.",
  },
  {
    term: "tuque",
    pos: "n.f.",
    meaning: "Winter knit hat (toque)",
    context: "Canadian. The word is recognized in both French and English across Canada. In France and international French, 'bonnet de laine' is used. 'Tuque' appears in Canadian dictionaries in both official languages.",
    example: "Il fait moins trente dehors: n'oublie pas ta tuque.",
  },
  {
    term: "char",
    pos: "n.m.",
    meaning: "Car (informal Quebec)",
    context: "Quebec only. Derived from the French word for chariot or tank, repurposed in Quebec for 'voiture'. Not used in formal contexts but extremely common in everyday speech.",
    example: "Mon char a brisé encore, je prends l'autobus.",
  },
  {
    term: "la cabane à sucre",
    pos: "n.f.",
    meaning: "Sugar shack",
    context: "Quebec cultural institution. A sugar shack is a farm that produces maple syrup and opens to the public in spring for traditional meals (oreilles de crisse, tire sur la neige, etc.). Deeply embedded in Quebec identity.",
    example: "On va à la cabane à sucre ce weekend: c'est la saison des sucres.",
  },
  {
    term: "la tire sur la neige",
    pos: "n.f.",
    meaning: "Maple taffy poured on snow",
    context: "Quebec tradition. Hot maple syrup is poured onto clean snow and rolled onto a stick as it cools. A defining sugar shack activity with no equivalent elsewhere in the French-speaking world.",
    example: "Les enfants adorent la tire sur la neige à la cabane.",
  },
  {
    term: "le dépanneur est ouvert",
    pos: "expression",
    meaning: "The store is open (implied: 24/7 or late)",
    context: "Culturally, the dépanneur is an institution: late hours, community gathering point. 'Passer au dep' is a marker of everyday Quebec life.",
    example: "T'en as besoin ce soir? Le dep du coin est ouvert jusqu'à minuit.",
  },
  {
    term: "pogner",
    pos: "v.",
    meaning: "To catch, grab, get, succeed: highly versatile verb",
    context: "Quebec only. One of the most-used verbs in Quebec informal speech. 'Ça pogne' means 'it's popular/it's catching on'. Non-Quebec French speakers would not recognize this verb in most uses.",
    example: "T'as-tu pogné le bus?: Did you catch the bus?",
  },
  {
    term: "jaser",
    pos: "v.",
    meaning: "To chat, to talk casually",
    context: "Quebec and some minority francophone communities. Standard French uses 'bavarder'. Widely used across age groups in Quebec in informal contexts.",
    example: "On a jasé pendant des heures après le souper.",
  },
  {
    term: "la gang",
    pos: "n.f.",
    meaning: "The group of friends, the crew, the bunch",
    context: "Quebec Canadian. 'La gang' is neutral and positive: it just means a group of people you hang out with. Non-Quebec French speakers may misread it as having a criminal connotation (as in English 'gang'), but in Quebec it is entirely neutral.",
    example: "Toute la gang vient à la fête ce soir.",
  },
  {
    term: "achaler",
    pos: "v.",
    meaning: "To bother, to annoy, to pester",
    context: "Quebec only. Standard French uses 'embêter' or 'agacer'. A very common Quebec verb across all registers.",
    example: "Arrête de m'achaler, j'essaie de travailler!",
  },
  {
    term: "se brosser les dents avec une débarbouillette",
    pos: "expression",
    meaning: "Washcloth (débarbouillette)",
    context: "'Débarbouillette' is the Quebec French word for a washcloth or facecloth. Standard French says 'gant de toilette'. The Quebec term is unique and widely used.",
    example: "Passe-moi la débarbouillette qui est sur le comptoir.",
  },
];

const governmentCivic: VocabEntry[] = [
  {
    term: "la RAMQ",
    pos: "n.f.",
    meaning: "Régie de l'assurance maladie du Québec (Quebec health insurance)",
    context: "The provincial health card system in Quebec. Every Quebec resident has a 'carte de la RAMQ'. Non-Quebecers, including those from other provinces, would not know this acronym.",
    example: "J'ai besoin de ma carte RAMQ pour voir le médecin.",
  },
  {
    term: "le CLSC",
    pos: "n.m.",
    meaning: "Centre local de services communautaires (community health and social services centre)",
    context: "Quebec health and social services network. CLSCs provide primary care, social services, and prevention programs. This institution does not exist elsewhere in Canada under this name.",
    example: "Pour un bébé, commence par le CLSC de ton quartier.",
  },
  {
    term: "la DPJ",
    pos: "n.f.",
    meaning: "Direction de la protection de la jeunesse (child protection services)",
    context: "Quebec's child welfare authority. Other provinces have different names (e.g., CAS in Ontario). The DPJ is a culturally significant institution in Quebec with high public visibility.",
    example: "Le travailleur social a signalé la situation à la DPJ.",
  },
  {
    term: "Hydro-Québec",
    pos: "n.pr.",
    meaning: "Quebec's state-owned electricity provider",
    context: "Quebec's electricity utility, provincially owned. Deeply embedded in Quebec identity and economy. Bills are called 'factures Hydro'. Other provinces have their own names (BC Hydro, Hydro One in Ontario).",
    example: "La facture d'Hydro est arrivée: on a consommé beaucoup ce mois-ci.",
  },
  {
    term: "le REQ",
    pos: "n.m.",
    meaning: "Registraire des entreprises du Québec (Quebec business registry)",
    context: "Quebec's business registration authority. Any business or non-profit operating in Quebec must register here. Not to be confused with federal incorporation (Corporations Canada).",
    example: "Pour ouvrir ton entreprise, tu dois t'inscrire au REQ.",
  },
  {
    term: "les allocations familiales",
    pos: "n.f.pl.",
    meaning: "Family allowance payments (child benefit)",
    context: "Quebec has its own provincial child benefit program separate from the federal Canada Child Benefit. Quebecers are familiar with both provincial (Retraite Québec) and federal systems.",
    example: "Les allocations familiales sont versées chaque mois par Retraite Québec.",
  },
  {
    term: "le Régime québécois d'assurance parentale (RQAP)",
    pos: "n.m.",
    meaning: "Quebec Parental Insurance Plan (more generous parental leave than other provinces)",
    context: "Quebec opted out of the federal Employment Insurance parental benefits and created its own more generous system. Someone from another province would not know this term or the differences it implies.",
    example: "Grâce au RQAP, j'ai pu prendre cinq semaines de congé de paternité.",
  },
  {
    term: "la Loi 101",
    pos: "n.f.",
    meaning: "Charter of the French Language (Bill 101, 1977)",
    context: "One of the most significant laws in Quebec history. It established French as the official language of the province, required French signs, mandated French schooling for most children, and shaped Quebec society profoundly. Every educated Quebecer knows this reference.",
    example: "La Loi 101 a transformé le visage linguistique de Montréal.",
  },
  {
    term: "le cégep",
    pos: "n.m.",
    meaning: "College d'enseignement général et professionnel (pre-university or technical college)",
    context: "Unique to Quebec. After secondary (high school), Quebec students attend cégep for two years (pre-university) or three years (technical). This stage does not exist elsewhere in Canada. Students outside Quebec go directly from grade 12 to university.",
    example: "J'ai fait mes deux ans au Cégep de Ste-Foy avant d'entrer à Laval.",
  },
  {
    term: "l'OQLF",
    pos: "n.f.",
    meaning: "Office québécois de la langue française (Quebec's language authority)",
    context: "The body responsible for French standardization in Quebec. It coins official terms (like 'courriel' for email, 'clavardage' for online chat). Often referred to colloquially as 'la police de la langue'.",
    example: "L'OQLF recommande d'utiliser 'courriel' plutôt que 'e-mail'.",
  },
];

const culturalTerms: VocabEntry[] = [
  {
    term: "le joual",
    pos: "n.m.",
    meaning: "Working-class urban Quebec dialect (historically Montreal east end)",
    context: "Joual is the name for a variety of informal Quebec French characterized by compressed grammar, heavy English borrowings, and distinctive pronunciation. It was politically significant in the 1960s–70s. Michel Tremblay wrote plays in joual to assert Quebec identity. The name itself comes from the Quebec pronunciation of 'cheval'.",
    example: "Les pièces de Michel Tremblay sont écrites en joual pour refléter la langue populaire de Montréal.",
  },
  {
    term: "la fête nationale (du Québec)",
    pos: "n.f.",
    meaning: "Quebec National Holiday (June 24, Saint-Jean-Baptiste Day)",
    context: "June 24 is Quebec's national holiday, also called 'la Saint-Jean'. It is a major cultural celebration with concerts, bonfires, and community events throughout Quebec. It is Quebec's equivalent of a national day and predates Confederation.",
    example: "Le 24 juin, toute la ville est dans la rue pour fêter la Saint-Jean.",
  },
  {
    term: "le hockey sur glace",
    pos: "n.m.",
    meaning: "Ice hockey: called simply 'le hockey' in everyday speech",
    context: "Hockey is deeply woven into Quebec and Canadian identity. The Montreal Canadiens (les Glorieux / le Canadien) hold enormous cultural significance. Quebec vocabulary around hockey (rondelle, bâton, filet, mise en jeu) is distinct from European French.",
    example: "Le Canadien a gagné hier soir: toute la ville parlait de la game.",
  },
  {
    term: "le sirop d'érable",
    pos: "n.m.",
    meaning: "Maple syrup: a major Quebec and Canadian cultural product",
    context: "Quebec produces about 70% of the world's maple syrup. 'La saison des sucres' (sugaring season) in late winter is a cultural event. 'L'eau d'érable' (maple water, the raw sap) and the stages of syrup production are part of Quebec rural vocabulary.",
    example: "Le sirop d'érable du Québec est exporté dans le monde entier.",
  },
  {
    term: "le sacre",
    pos: "n.m.",
    meaning: "Quebec profanity derived from sacred religious words (tabernac, câline, ostie, crisse...)",
    context: "A linguistic phenomenon unique to Quebec French. Quebec swear words come from Catholic religious vocabulary (tabernacle, calice, ostie/hostie, crisse/Christ), repurposed as expletives. European French speakers use different swear words. Understanding sacres is essential for comprehending informal Quebec speech.",
    example: "En entendant les sacres au Québec, les apprenants sont souvent surpris par leur origine religieuse.",
  },
  {
    term: "souche",
    pos: "n.f.",
    meaning: "Person of old Quebec French ancestry (often 'pure laine')",
    context: "A politically loaded term. 'De souche' or 'pure laine' refers to Quebecers of long-established French-Canadian ancestry. The expression can be used neutrally to describe heritage or critically to imply exclusivity. Understanding this term is important for navigating Quebec identity discourse.",
    example: "Le débat sur l'identité québécoise oppose parfois les 'de souche' aux nouveaux arrivants.",
  },
  {
    term: "allophone",
    pos: "n. / adj.",
    meaning: "Person whose mother tongue is neither French nor English",
    context: "A key term in Quebec and Canadian language policy. Quebec officially distinguishes between francophones, anglophones, and allophones for demographic, political, and school enrollment purposes. The term is rarely used outside Canada.",
    example: "Montréal est une ville accueillante pour les allophones de toutes origines.",
  },
  {
    term: "la Belle Province",
    pos: "n.f.",
    meaning: "Nickname for Quebec ('The Beautiful Province')",
    context: "Affectionate name for Quebec, historically used on license plates. Replaced in 1978 by 'Je me souviens' (the Quebec motto), but the nickname persists in speech.",
    example: "Bienvenue en Belle Province! Le paysage est magnifique en automne.",
  },
  {
    term: "Je me souviens",
    pos: "motto",
    meaning: "Quebec's motto ('I remember'): on license plates and official symbols",
    context: "The motto of Quebec since 1883, appearing on the coat of arms and all Quebec license plates. It signals a commitment to remembering Quebec's French heritage and history. The full phrase attributed to architect Eugène-Étienne Taché is: 'Je me souviens que né sous le lys, je croix sous la rose.'",
    example: "Les plaques d'immatriculation québécoises portent la devise 'Je me souviens'.",
  },
  {
    term: "le festival de jazz de Montréal",
    pos: "n.pr.",
    meaning: "Montreal International Jazz Festival",
    context: "One of the world's largest jazz festivals, held annually in late June in downtown Montreal. A major cultural event drawing millions of visitors. 'Le jazz' and Montreal's vibrant music scene are important to Quebec's cultural identity.",
    example: "Le festival de jazz transforme le centre-ville de Montréal en scène musicale géante chaque été.",
  },
  {
    term: "le Festival d'été de Québec",
    pos: "n.pr.",
    meaning: "Quebec City Summer Festival (one of the world's largest outdoor music events)",
    context: "Held in July on the Plains of Abraham and throughout Old Quebec, this festival draws over one million visitors and features hundreds of free shows. It is central to Quebec City's summer identity.",
    example: "Le Festival d'été de Québec offre des centaines de spectacles gratuits sur les Plaines d'Abraham.",
  },
];

const frenchImmersionTerms: VocabEntry[] = [
  {
    term: "l'immersion française",
    pos: "n.f.",
    meaning: "French immersion school program",
    context: "A Canadian educational program where English-speaking students are taught primarily in French. French immersion exists across Canada in English-majority provinces and is a specifically Canadian phenomenon. Students in French immersion are called 'immersifs' in Quebec.",
    example: "Mon fils est en immersion française depuis la maternelle: il parle couramment.",
  },
  {
    term: "les cours de langue seconde",
    pos: "n.m.pl.",
    meaning: "Second language courses (in the Canadian federal context, French as a second official language)",
    context: "Canada has two official languages under the Official Languages Act. 'Cours de langue seconde' refers specifically to federally funded French instruction for English Canadians (or English for Francophones). This framing is Canada-specific.",
    example: "La fonction publique offre des cours de langue seconde à ses employés.",
  },
  {
    term: "la francisation",
    pos: "n.f.",
    meaning: "French language learning programs for immigrants (Quebec-specific term)",
    context: "Quebec offers 'cours de francisation' free of charge to new immigrants to help them integrate in French. 'Francisation' refers specifically to the Quebec government's integration through French initiative. The term has a distinct political and social meaning in Quebec.",
    example: "Elle suit des cours de francisation pour améliorer son français avant de chercher un emploi.",
  },
  {
    term: "la dualité linguistique",
    pos: "n.f.",
    meaning: "Linguistic duality (Canada's two official languages, coexisting)",
    context: "A foundational Canadian political concept enshrined in the Constitution and the Official Languages Act. It refers to the coexistence and equal status of English and French as official languages. This concept shapes federal institutions, the public service, signage, and services.",
    example: "La dualité linguistique canadienne est protégée par la Charte des droits et libertés.",
  },
  {
    term: "la francophonie canadienne",
    pos: "n.f.",
    meaning: "The totality of French-speaking communities across Canada",
    context: "Refers to all French-speaking Canadians, including Quebecers, Acadians, Franco-Ontarians, Franco-Manitobans, Fransaskois, Franco-Albertans, and others. Each community has distinct cultural traditions and sometimes distinct vocabulary.",
    example: "La francophonie canadienne est plus diverse qu'on ne le croit souvent.",
  },
  {
    term: "l'Acadie",
    pos: "n.f.",
    meaning: "Acadia: the historical and cultural region of Atlantic Canada's French settlers",
    context: "The francophone region primarily in New Brunswick, Nova Scotia, and PEI. Acadian French is distinct from Quebec French with its own accent, vocabulary, and cultural traditions. New Brunswick is Canada's only officially bilingual province. Acadians and Quebecers are both French Canadian but have different histories.",
    example: "Le Nouveau-Brunswick est le coeur de l'Acadie contemporaine au Canada.",
  },
  {
    term: "le bilinguisme officiel",
    pos: "n.m.",
    meaning: "Official bilingualism (federal policy since 1969)",
    context: "Canada's federal policy of treating English and French as equal official languages in Parliament, federal courts, and federal services. Enshrined in the Official Languages Act (1969, revised 1988, 2023). Distinct from provincial bilingualism (only New Brunswick is officially bilingual provincially).",
    example: "Le bilinguisme officiel exige que les services fédéraux soient disponibles dans les deux langues officielles.",
  },
];

type Section = {
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  entries: VocabEntry[];
};

const sections: Section[] = [
  {
    title: "Everyday Life and Vocabulary",
    badge: "Everyday",
    badgeColor: "bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]",
    description: "Words for daily life, food, objects, and activities that exist in Canada and Quebec but have no equivalent in standard French or are completely unknown to non-Canadian French speakers.",
    entries: everydayLife,
  },
  {
    title: "Government, Institutions, and Civic Life",
    badge: "Government",
    badgeColor: "bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]",
    description: "Quebec and Canadian institutions, programs, laws, and abbreviations that require insider knowledge. Even fluent French speakers from France or Africa would not know these without living in Canada.",
    entries: governmentCivic,
  },
  {
    title: "Cultural Identifiers and Social Terms",
    badge: "Culture",
    badgeColor: "bg-[#EDE9FE] text-[#7C3AED] border-[#DDD6FE]",
    description: "Cultural touchstones, identity terms, and expressions that are central to understanding Quebec and Canadian society. These terms carry social and political meaning that no French textbook covers.",
    entries: culturalTerms,
  },
  {
    title: "Language Policy and Education",
    badge: "Language",
    badgeColor: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
    description: "Terms specific to Canada's linguistic landscape: immersion, official bilingualism, francisation, and the distinct communities of the Canadian francophonie.",
    entries: frenchImmersionTerms,
  },
];

function EntryCard({ entry }: { entry: VocabEntry }) {
  return (
    <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-black text-[#0B1F3A]">{entry.term}</span>
          <span className="text-xs text-[#526173]">{entry.pos}</span>
        </div>
      </div>
      <p className="mt-1 font-semibold text-[#D62828]">{entry.meaning}</p>
      <p className="mt-2 text-sm leading-6 text-[#526173]">{entry.context}</p>
      <p className="mt-3 border-l-2 border-[#E7DAB9] pl-3 text-sm italic leading-6 text-[#526173]">
        {entry.example}
      </p>
    </div>
  );
}

export default function CanadianExclusiveVocabPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Back to resources
        </Link>

        <div className="mt-8 max-w-3xl">
          <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-black text-[#B91C1C] border border-[#FECACA]">
            Canadian French
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Canadian-exclusive vocabulary.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#526173]">
            These are words, expressions, institutions, and cultural terms that are specific to Canada and Quebec. A native French speaker from France, Belgium, or West Africa would not know most of these without having lived in Canada. This list covers everyday life, government institutions, cultural identity, and language policy.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-[#E7DAB9] bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Why this matters</p>
          <p className="mt-2 leading-7 text-white/80">
            Standard French courses teach you the language of Paris. But living and working in Canada means encountering vocabulary, institutions, and cultural references that simply do not appear in any European or international French curriculum. You need to know what a CLSC is, why 'dîner' means lunch, what the RQAP covers, and why 'la gang' is not a threat. This resource bridges that gap.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center gap-3">
                <span className={`rounded-full border px-3 py-1 text-sm font-black ${section.badgeColor}`}>
                  {section.badge}
                </span>
                <h2 className="text-2xl font-black">{section.title}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-[#526173]">{section.description}</p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {section.entries.map((entry) => (
                  <EntryCard key={entry.term} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-8 shadow-sm">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-black">Ready to use this vocabulary in context?</p>
              <p className="mt-2 text-[#526173]">
                The French for Canadian Life course puts all of this in action: government forms, Quebec expressions, workplace French, and university applications.
              </p>
            </div>
            <Link
              href="/learn/canadian-life"
              className="whitespace-nowrap rounded-full bg-[#D62828] px-6 py-3 text-center text-sm font-black text-white transition hover:bg-[#B91C1C] hover:-translate-y-0.5"
            >
              Start the course
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-[#FFFDF7] p-6">
          <p className="text-sm font-black text-[#0B1F3A]">Also in Canadian French resources</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <Link href="/resources/quebec-french" className="group rounded-2xl border border-[#E7DAB9] bg-white p-4 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-sm">
              Quebec French essentials
              <span className="ml-1 font-normal text-[#D62828] group-hover:underline">→</span>
            </Link>
            <Link href="/resources/government-french" className="group rounded-2xl border border-[#E7DAB9] bg-white p-4 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-sm">
              Government and official French
              <span className="ml-1 font-normal text-[#D62828] group-hover:underline">→</span>
            </Link>
            <Link href="/resources/workplace-french" className="group rounded-2xl border border-[#E7DAB9] bg-white p-4 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-sm">
              Workplace French
              <span className="ml-1 font-normal text-[#D62828] group-hover:underline">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
