"use client";

import Link from "next/link";
import SpeakButton from "@/components/SpeakButton";

const vocabRows: [string, string, string][] = [
  // Everyday life
  ["fin de semaine", "week-end", "weekend"],
  ["magasinage", "courses / shopping", "shopping (activity)"],
  ["dépanneur", "épicerie / supérette", "corner store / convenience store"],
  ["stationnement", "parking", "parking lot / space"],
  ["char", "voiture / auto", "car"],
  ["courriel", "e-mail", "email (official Quebec term)"],
  // People / relationships
  ["chum", "petit ami / copain", "boyfriend (also: buddy)"],
  ["blonde", "petite amie / copine", "girlfriend"],
  ["chum d'enfance", "ami d'enfance", "childhood friend"],
  ["les boys", "les gars / les amis", "the guys / the crew"],
  ["la gang", "le groupe / la bande", "the group / the gang (neutral)"],
  // Feelings / states
  ["être tanné(e)", "en avoir assez / être fatigué(e) de", "to be fed up / sick of something"],
  ["avoir de la misère", "avoir du mal / avoir des difficultés", "to have trouble / to struggle"],
  ["être game", "être partant(e) / être prêt(e)", "to be up for it / willing"],
  ["être écoeurant(e)", "être dégoûtant(e) OR être incroyable", "disgusting: OR (Quebec slang) awesome!"],
  // Actions
  ["jaser", "bavarder / discuter", "to chat / to talk"],
  ["placoter", "potiner / jaser", "to gossip / to chitchat"],
  ["pogner", "attraper / réussir / plaire", "to catch, to work, to be popular"],
  ["virer", "tourner / devenir", "to turn / to become"],
  ["lâcher", "abandonner / relâcher", "to let go / to quit / to give up"],
  // Time / space
  ["tantôt", "tout à l'heure", "earlier OR later (context-dependent!)"],
  ["à matin", "ce matin", "this morning"],
  ["à soir", "ce soir", "this evening / tonight"],
  ["en quelque part", "quelque part", "somewhere"],
  // School / work
  ["polyvalente", "lycée / collège", "high school (secondary)"],
  ["cégep", "(n/a in France)", "Quebec college (pre-university or technical)"],
  ["baccalauréat (BAC)", "licence (3 or 4 ans en France)", "bachelor's degree: only 3 years in Quebec"],
  ["stage", "stage / placement", "internship / practicum"],
  // Intensifiers
  ["ben", "bien / très", "very / really (casual intensifier)"],
  ["pas pire", "pas mal / assez bien", "pretty good (false friend: means good, not mediocre!)"],
  ["vraiment correct", "parfaitement bien / très bien", "totally fine / absolutely okay"],
];

const expressionRows: [string, string, string][] = [
  ["C'est le boutte!", "It's awesome! / It's the best!", "C'est le boutte, cette émission-là!"],
  ["C'est de valeur.", "That's a shame. / What a pity.", "C'est de valeur que tu puisses pas venir."],
  ["Wo!", "Hold on! / Wait! / Whoa!", "Wo, wo, wo: ralentis un peu!"],
  ["Ben là...", "Well... / Come on... / Seriously?", "Ben là, tu pouvais pas me le dire avant?"],
  ["Ça fait que...", "So... / And so... / Therefore...", "Ça fait que j'ai décidé de partir."],
  ["T'as-tu vu?", "Did you see? / Have you seen?", "T'as-tu vu le dernier film de Villeneuve?"],
  ["Y'a pas de quoi.", "You're welcome. / Don't mention it.", "— Merci!: Y'a pas de quoi."],
  ["Avoir de la misère", "To have trouble / to struggle", "J'ai de la misère avec les maths."],
  ["Être dans le trouble", "To be in trouble", "Si tu dis ça, t'es dans le trouble."],
  ["Lâche pas!", "Don't give up! / Keep at it!", "C'est dur, mais lâche pas!"],
  ["C'est correct.", "It's fine. / Okay. / No problem.", "T'inquiète, c'est correct."],
  ["Faire du pouce", "To hitchhike", "On a fait du pouce jusqu'à Québec."],
  ["Être game", "To be up for it / willing", "Es-tu game pour aller camper ce week-end?"],
  ["Passer au cash", "To pay (at the register)", "Je passe au cash et je te rejoins dehors."],
  ["C'est parti mon kiki!", "Here we go! / Let's do this!", "C'est parti mon kiki: bonne chance à tous!"],
  ["Sur le bord de", "On the verge of / about to", "J'étais sur le bord de pleurer."],
  ["Aller aux vues", "To go to the movies", "On va-tu aux vues ce soir?"],
  ["Être chaud / être soûl", "To be drunk", "Il était ben chaud hier soir."],
  ["Crinquer", "To wind up / to energize / to excite", "Le café du matin me crinque!"],
  ["Magasiner", "To go shopping", "On va magasiner au centre commercial."],
  ["En masse", "Plenty / more than enough", "T'inquiète, on a du temps en masse."],
  ["Ostie / tabarnak / câlice", "Oath-based swear words (sacres)", "Sacres are culturally specific Quebec expletives: avoid in formal contexts."],
];

export default function QuebecFrenchPage() {
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
            Quebec French essentials
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            A reference guide to the vocabulary, expressions, and linguistic features that make Quebec French distinct.
          </p>
        </div>

        {/* Section 1: Vocabulary differences */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Vocabulary differences</h2>
          <p className="mt-4 text-[#526173] leading-7">
            Quebec French has hundreds of words that differ from standard European French. Many are older French words
            preserved in Quebec since the 17th century; others are anglicisms adapted into French phonology, or
            inventions by the Office québécois de la langue française.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Quebec French</th>
                  <th className="pb-3 text-left font-black">Standard French</th>
                  <th className="pb-3 text-left text-[#526173]">English meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {vocabRows.map(([qc, fr, en]) => (
                  <tr key={qc}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={qc} lang="fr-CA" size="sm" /></td>
                    <td className="py-3 font-black">{qc}</td>
                    <td className="py-3 text-[#526173]">{fr}</td>
                    <td className="py-3 text-[#526173]">{en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">False friend alert — pas pire: </span>
            In standard French, "pas pire" would mean "not worse." In Quebec French it means "pretty good" or even
            "really great." If a Quebecer tells you your French is "pas pire," that is a genuine compliment!
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">tantôt — context is everything: </span>
            "Tantôt" can mean both earlier ("Je l'ai vu tantôt" = I saw him earlier) AND later ("On se voit tantôt" =
            See you later). Listen for surrounding context or simply ask for clarification.
          </div>
        </div>

        {/* Section 2: Quebec expressions */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Quebec expressions</h2>
          <p className="mt-4 text-[#526173] leading-7">
            These expressions are used daily in Quebec and rarely appear in standard French textbooks. Learning them
            will help you understand spoken Quebec French and connect naturally with Québécois speakers.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#E7DAB9]">
                  <th className="w-8 pb-3 pl-3" />
                  <th className="pb-3 text-left font-black">Expression</th>
                  <th className="pb-3 text-left font-black">Meaning</th>
                  <th className="pb-3 text-left text-[#526173]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3EDD8]">
                {expressionRows.map(([expr, meaning, example]) => (
                  <tr key={expr}>
                    <td className="py-3 pl-3 w-8"><SpeakButton text={expr} lang="fr-CA" size="sm" /></td>
                    <td className="py-3 font-black">{expr}</td>
                    <td className="py-3 text-[#526173]">{meaning}</td>
                    <td className="py-3 text-[#526173] italic">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-2xl bg-[#FFF8ED] border border-[#E7DAB9] p-4 text-sm text-[#526173]">
            <span className="font-black text-[#0B1F3A]">On sacres: </span>
            Quebec French has a unique family of oath-based swear words called <em>sacres</em>, derived from Catholic
            religious terms (ostie, tabarnak, câlice, crisse, etc.). They are very common in casual speech but highly
            offensive in formal settings. Learners should understand them receptively but use them with extreme caution.
          </div>
        </div>

        {/* Section 3: Grammar and pronunciation */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">Grammar and pronunciation notes</h2>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Key spoken features of Quebec French</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-black">tu elision</p>
                <p className="mt-1 text-white/70">
                  "tu es" becomes "t'es" and "tu as" becomes "t'as" in everyday speech.
                  This is extremely common: you will hear it constantly.
                </p>
                <p className="mt-2 font-black text-[#C9A44C]">T'as faim? / T'es prêt?</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-black">The -tu question marker</p>
                <p className="mt-1 text-white/70">
                  An informal yes/no question particle unique to Quebec French.
                  It is added after the verb and has nothing to do with the pronoun "tu."
                </p>
                <p className="mt-2 font-black text-[#C9A44C]">T'as-tu faim? (Are you hungry?)</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-black">Affirmative "là"</p>
                <p className="mt-1 text-white/70">
                  Added at the end of a sentence for emphasis or to ground the listener in the
                  present moment. Similar to "you know" or "right" in English.
                </p>
                <p className="mt-2 font-black text-[#C9A44C]">C'est là que ça se passe.</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="font-black">On for nous</p>
                <p className="mt-1 text-white/70">
                  Using "on" instead of "nous" for "we" is universal in Quebec (and common in
                  France too). It takes a third-person singular verb.
                </p>
                <p className="mt-2 font-black text-[#C9A44C]">On y va! (Let's go!)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-[#0B1F3A] p-5 text-white">
            <p className="font-black text-[#C9A44C]">Pronunciation: what makes Quebec French sound different</p>
            <div className="mt-4 space-y-3 text-sm text-white/80">
              <div>
                <p className="font-black text-white">Nasal vowel distinction</p>
                <p className="mt-1">
                  Quebec French preserves the phonemic distinction between "brun" (brown) and "brin"
                  (strand), which has merged in most European French dialects. Quebec speakers
                  maintain four distinct nasal vowels.
                </p>
              </div>
              <div>
                <p className="font-black text-white">Affrication of t and d</p>
                <p className="mt-1">
                  Before the vowels /i/ and /u/, the consonants t and d are affricated: they gain a
                  "ts" or "dz" quality. So "tu" sounds like "tsu," and "di" sounds like "dzi." This is
                  one of the most immediately recognizable features of Quebec French.
                </p>
              </div>
              <div>
                <p className="font-black text-white">Vowel lengthening</p>
                <p className="mt-1">
                  Long vowels in stressed syllables are held longer in Quebec French than in European
                  French. This gives Quebec speech a distinct rhythm and musicality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: The OQLF */}
        <div className="mt-12">
          <h2 className="text-2xl font-black">The Office québécois de la langue française (OQLF)</h2>
          <div className="mt-6 space-y-4 text-[#526173] leading-7">
            <p>
              Founded in 1961 and significantly strengthened by the Charter of the French Language (Bill 101 /
              Loi 101) in 1977, the Office québécois de la langue française (OQLF) is Quebec's official language
              authority. Its mandate is to define, promote, and enforce the use of French as the common public
              language of Quebec: in government, commerce, education, and the workplace.
            </p>
            <p>
              One of the OQLF's most visible roles is coining and promoting French-language alternatives to English
              technical terms. Examples you will encounter everywhere in Quebec:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#E7DAB9] bg-white p-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#E7DAB9]">
                    <th className="pb-3 text-left font-black">OQLF term</th>
                    <th className="pb-3 text-left font-black">English</th>
                    <th className="pb-3 text-left text-[#526173]">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F3EDD8]">
                  {[
                    ["courriel", "email", "Now used across Canada in official contexts"],
                    ["clavardage", "online chat", "From clavier (keyboard) + bavardage (chatter)"],
                    ["téléchargement", "download / upload", "Context determines direction"],
                    ["logiciel", "software", "Now standard across the French-speaking world"],
                    ["pourriel", "spam (email)", "From poubelle (trash) + courriel"],
                    ["clavarder", "to chat online", "Verb form of clavardage"],
                  ].map(([term, en, note]) => (
                    <tr key={term}>
                      <td className="py-3 font-black">{term}</td>
                      <td className="py-3 text-[#526173]">{en}</td>
                      <td className="py-3 text-[#526173] italic">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              Bill 101 (Loi sur la langue française) requires that French be the language of instruction in most
              Quebec schools, the language of the workplace for businesses with 50 or more employees, and the
              language of commercial signage. The OQLF investigates complaints and issues compliance orders.
              Understanding this context helps explain why Quebec French has evolved so distinctly: it has an
              institutional protector that actively shapes its vocabulary.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-[#E7DAB9] bg-white p-6 shadow-sm">
          <p className="font-black">Ready to practise Quebec French in context?</p>
          <p className="mt-2 text-sm text-[#526173]">
            The Canadian Life unit covers Quebec vocabulary, culture, and real-world listening in an interactive
            lesson format.
          </p>
          <Link
            href="/learn/canadian-life/unit-1/lesson-1"
            className="mt-4 inline-block rounded-full bg-[#D62828] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#B91C1C]"
          >
            Go to course →
          </Link>
        </div>
      </section>
    </main>
  );
}
