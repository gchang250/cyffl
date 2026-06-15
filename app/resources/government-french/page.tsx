"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const formFieldRows: [string, string][] = [
  ["Nom de famille", "Last name / surname"],
  ["Prénom", "First name / given name"],
  ["Date de naissance", "Date of birth"],
  ["Lieu de naissance", "Place of birth"],
  ["Numéro d'assurance sociale (NAS)", "Social Insurance Number (SIN)"],
  ["Adresse", "Address"],
  ["Code postal", "Postal code"],
  ["Province / territoire", "Province / territory"],
  ["Numéro de téléphone", "Phone number"],
  ["Courriel", "Email address"],
  ["Sexe / Genre", "Sex / Gender"],
  ["État civil", "Marital status"],
  ["Citoyenneté", "Citizenship"],
  ["Statut d'immigration", "Immigration status"],
  ["Signature du demandeur / de la demanderesse", "Applicant's signature"],
  ["Date de la demande", "Date of application"],
  ["Numéro de dossier", "File / case number"],
  ["Pièces justificatives requises", "Required supporting documents"],
  ["Cochez la case appropriée", "Check the appropriate box"],
  ["À l'usage officiel seulement", "For official use only"],
  ["Renseignements obligatoires", "Required information"],
  ["Sans objet (S.O.)", "Not applicable (N/A)"],
  ["Veuillez remplir en lettres moulées", "Please print in block letters"],
  ["Ci-joint", "Enclosed / attached herewith"],
  ["En foi de quoi", "In witness whereof"],
];

const healthcareRows: [string, string, string][] = [
  ["la carte d'assurance maladie", "health insurance card", '"Carte soleil" in Quebec'],
  ["la RAMQ", "Quebec health insurance authority", "Régie de l'assurance maladie du Québec"],
  ["l'OHIP", "Ontario Health Insurance Plan", "Ontario's provincial health card program"],
  ["le médecin de famille", "family doctor / GP", "Can be difficult to find: many Canadians are without one"],
  ["l'urgence (f.)", "emergency room", "Also: la salle d'urgence"],
  ["le rendez-vous", "appointment", "Prendre un rendez-vous = to book an appointment"],
  ["l'ordonnance (f.)", "prescription", "Issued by a doctor; filled at a pharmacie"],
  ["le médicament", "medication / medicine", "Plural: les médicaments"],
  ["les soins de santé (m.pl.)", "healthcare", "Also: le système de santé"],
  ["le CLSC", "local community health centre", "Centre local de services communautaires: Quebec only"],
  ["les antécédents médicaux (m.pl.)", "medical history", "Required on most intake forms"],
  ["l'assurance médicaments (f.)", "drug insurance", "Mandatory in Quebec; private or RAMQ-based"],
  ["le formulaire de réclamation", "claim form", "Used for reimbursement of covered services"],
];

const taxRows: [string, string, string][] = [
  ["la déclaration de revenus", "tax return", "Federal: T1 form; Quebec: TP-1 form"],
  ["le revenu imposable", "taxable income", "After deductions and exemptions"],
  ["le remboursement", "tax refund", "Issued when you overpaid during the year"],
  ["la cotisation", "contribution / assessment", "Used for pension and EI contributions"],
  ["les déductions (f.pl.)", "deductions", "Reduce taxable income (RRSP, childcare, etc.)"],
  ["les crédits d'impôt (m.pl.)", "tax credits", "Reduce tax owed; some are refundable"],
  ["le feuillet T4", "T4 slip", "Federal employment income statement from employer"],
  ["le relevé 1 (RL-1)", "Quebec employment income slip", "Quebec equivalent of T4, issued by employer"],
  ["l'Agence du revenu du Canada (ARC)", "Canada Revenue Agency (CRA)", "Federal tax authority"],
  ["Revenu Québec", "Quebec revenue agency", "Administers both Quebec and federal tax in Quebec"],
  ["l'assurance-emploi (AE)", "Employment Insurance (EI)", "Federal program; apply at Service Canada"],
  ["le Régime de pensions du Canada (RPC)", "Canada Pension Plan (CPP)", "Federal retirement pension"],
  ["le Régime de rentes du Québec (RRQ)", "Quebec Pension Plan (QPP)", "Quebec's equivalent of CPP"],
  ["les prestations (f.pl.)", "benefits", "Includes EI, family benefits, pension payments"],
];

const formalLetterRows: [string, string, string][] = [
  ["Opening", "Je me permets de vous écrire au sujet de...", "I am writing to you regarding..."],
  ["Purpose", "Je vous contacte afin de...", "I am contacting you in order to..."],
  ["Enclosing", "Veuillez trouver ci-joint...", "Please find enclosed..."],
  ["Requesting", "Je vous saurais gré de bien vouloir...", "I would be grateful if you could..."],
  ["Following up", "Suite à notre échange du [date]...", "Following our exchange on [date]..."],
  ["Acknowledging", "J'accuse réception de votre lettre du...", "I acknowledge receipt of your letter dated..."],
  ["Closing (formal)", "Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.", "Yours faithfully / Sincerely (very formal)"],
  ["Closing (semi-formal)", "Dans l'attente de votre réponse, je vous adresse mes cordiales salutations.", "Looking forward to your reply, kind regards."],
];

export default function GovernmentFrenchPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#D62828] hover:text-[#B91C1C]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#FEF2F2] text-[#B91C1C] border-[#FECACA]">
            Canadian French
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Government &amp; official French
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            The vocabulary you need to navigate bilingual government forms, healthcare documents, and official
            Canadian communications.
          </p>
        </div>

        {/* Section 1: Form fields */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Common form fields</h2>
          <p className="mt-4 text-[#526173] leading-7">
            Federal and provincial government forms in Canada are issued in both English and French. These are the
            French terms you will encounter most often when filling out applications, registrations, and official
            paperwork.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French term</th>
                  <th className="pb-3 text-left font-black">English meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {formFieldRows.map(([fr, en]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">État civil — common values: </span>
            célibataire (single), marié(e) (married), divorcé(e) (divorced), séparé(e) (separated),
            veuf / veuve (widower / widow), conjoint(e) de fait (common-law partner).
          </div>
        </div>

        {/* Section 2: Healthcare */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Healthcare vocabulary</h2>
          <p className="mt-4 text-[#526173] leading-7">
            Each Canadian province administers its own health insurance plan. Quebec uses the RAMQ; Ontario uses
            OHIP. Knowing this vocabulary helps you book appointments, understand forms, and communicate with
            healthcare providers in French.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left font-black">English</th>
                  <th className="pb-3 text-left text-[#526173]">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {healthcareRows.map(([fr, en, note]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-[#526173] italic">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Tax vocabulary */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Tax vocabulary</h2>
          <p className="mt-4 text-[#526173] leading-7">
            Quebec residents file two separate tax returns: a federal return with the Canada Revenue Agency
            (ARC) and a provincial return with Revenu Québec. Other Canadians file only federally, with the
            CRA. Understanding these terms will help you read your slips and navigate tax software in French.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">French</th>
                  <th className="pb-3 text-left font-black">English</th>
                  <th className="pb-3 text-left text-[#526173]">Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {taxRows.map(([fr, en, ctx]) => (
                  <tr key={fr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                    <td className="py-3 text-[#526173] italic">{ctx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Quebec only: </span>
            Quebec residents must file with both the ARC (federal) and Revenu Québec (provincial). All other
            provinces have their tax collected by the ARC, even for provincial purposes.
          </div>
        </div>

        {/* Section 4: Key form instruction phrases */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Key phrases on forms</h2>
          <p className="mt-4 text-[#526173] leading-7">
            These instruction phrases appear on government forms across Canada. Recognising them lets you follow
            directions correctly without needing to translate the entire document.
          </p>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Common form instructions</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
              {[
                ["Veuillez remplir en lettres moulées.", "Please print in block letters."],
                ["Cochez la case appropriée.", "Check the appropriate box."],
                ["Joindre les pièces justificatives.", "Attach the supporting documents."],
                ["À l'usage officiel seulement.", "For official use only."],
                ["Sans objet (S.O.)", "Not applicable (N/A)."],
                ["N.B. / Remarque:", "Note: / Please note:"],
                ["Signature requise.", "Signature required."],
                ["Voir au verso.", "See overleaf / See the reverse side."],
              ].map(([fr, en]) => (
                <div key={fr} className="rounded-xl bg-white/10 p-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-0.5 shrink-0">
                      <SpeakButton text={fr} size="sm" />
                    </div>
                    <div>
                      <p className="font-black">{fr}</p>
                      <p className="mt-1 text-white/70">{en}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: Formal letter phrases */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Formal letter and email phrases</h2>
          <p className="mt-4 text-[#526173] leading-7">
            French formal correspondence follows strict conventions. Using the right opening and closing formula
            signals competence and respect. These phrases are expected in communications with government offices,
            professional services, and institutions across Canada.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Function</th>
                  <th className="pb-3 text-left font-black">French phrase</th>
                  <th className="pb-3 text-left text-[#526173]">English equivalent</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {formalLetterRows.map(([fn, fr, en]) => (
                  <tr key={fn}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={fr} size="sm" /></td>
                    <td className="py-3 font-black text-[#526173]">{fn}</td>
                    <td className="py-3 font-black">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">Closing formulas matter: </span>
            "Veuillez agréer... l'expression de mes salutations distinguées" is the most formal closing and is
            expected in government correspondence. For semi-formal contexts (a professional email, a follow-up
            letter), "Cordiales salutations" or "Bien cordialement" is appropriate. Never use "Bonne journée"
            as a letter closing in formal writing.
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Put this vocabulary into practice</p>
          <p className="mt-2 text-sm text-[#526173]">
            The Government &amp; Official Documents unit walks through realistic form-filling, healthcare
            scenarios, and formal letter writing with guided exercises.
          </p>
          <Link
            href="/learn/canadian-life/unit-2/lesson-1"
            className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
