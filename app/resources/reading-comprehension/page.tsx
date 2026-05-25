import Link from "next/link";

export default function ReadingComprehensionPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Link href="/resources" className="text-sm font-black text-[#2563EB] hover:text-[#1D4ED8]">
          ← Resources
        </Link>

        <div className="mt-6">
          <span className="inline-block rounded-full border px-3 py-1 text-sm font-black bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]">
            Reading
          </span>
          <h1 className="mt-4 text-5xl font-black tracking-tight md:text-6xl">
            Reading comprehension
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#526173]">
            Three authentic-style French texts at different difficulty levels, each followed by comprehension questions and answers to check your understanding.
          </p>
        </div>

        {/* Text 1 — Beginner */}
        <div className="mt-12">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">Text 1</span>
            <h2 className="text-xl font-black">La routine de Lucas</h2>
            <span className="rounded-full bg-[#ECFDF5] border border-[#BBF7D0] px-3 py-1 text-xs font-black text-[#16A34A]">Beginner · présent</span>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-white p-6">
            <p className="leading-8 text-[#0B1F3A]">
              Lucas est étudiant. Il habite à Montréal avec sa famille. Tous les matins, il se lève à sept heures. Il prend une douche, puis il mange des céréales. Il boit un grand verre de jus d'orange. Après le petit-déjeuner, il part à l'université en vélo. Ses cours commencent à neuf heures. Le soir, Lucas fait ses devoirs et regarde la télévision. Il aime beaucoup les documentaires sur la nature. Il se couche vers onze heures.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-black text-[#16A34A]">Comprehension questions</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">1. Où habite Lucas ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Lucas habite à Montréal avec sa famille.
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">2. Comment est-ce que Lucas va à l'université ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Il va à l'université en vélo.
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">3. Qu'est-ce que Lucas aime regarder à la télévision ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Il aime regarder des documentaires sur la nature.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text 2 — Intermediate */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">Text 2</span>
            <h2 className="text-xl font-black">Un week-end à Paris</h2>
            <span className="rounded-full bg-[#ECFDF5] border border-[#BBF7D0] px-3 py-1 text-xs font-black text-[#16A34A]">Intermediate · passé composé</span>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-white p-6">
            <p className="leading-8 text-[#0B1F3A]">
              Le mois dernier, Camille et ses amis ont décidé de passer un week-end à Paris. Ils sont partis de Lyon vendredi soir et ils sont arrivés à la gare de Lyon à vingt-deux heures. Le samedi matin, ils ont visité le musée du Louvre. Camille a été surprise par la taille du musée — elle n'a pas pu tout voir en une seule journée ! L'après-midi, ils ont mangé une crêpe près de la tour Eiffel et ils ont pris beaucoup de photos. Le dimanche, avant de rentrer, ils ont fait un tour en bateau sur la Seine. Camille a adoré cette expérience. Elle veut retourner à Paris l'année prochaine.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-black text-[#16A34A]">Comprehension questions</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">1. D'où viennent Camille et ses amis ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Ils viennent de Lyon.
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">2. Pourquoi est-ce que Camille a été surprise au Louvre ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Elle a été surprise par la taille du musée — elle n'a pas pu tout voir en une seule journée.
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">3. Qu'est-ce qu'ils ont fait le dimanche ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Ils ont fait un tour en bateau sur la Seine.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text 3 — Upper-intermediate */}
        <div className="mt-14">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-[#F0FDF4] px-3 py-1 text-sm font-black text-[#16A34A]">Text 3</span>
            <h2 className="text-xl font-black">Les jeunes et la technologie</h2>
            <span className="rounded-full bg-[#ECFDF5] border border-[#BBF7D0] px-3 py-1 text-xs font-black text-[#16A34A]">Upper-intermediate · mixed tenses</span>
          </div>

          <div className="mt-6 rounded-2xl border border-[#E7DAB9] bg-white p-6">
            <p className="leading-8 text-[#0B1F3A]">
              La relation entre les jeunes et la technologie a profondément changé au cours des vingt dernières années. Autrefois, les adolescents passaient leurs soirées à regarder la télévision ou à téléphoner à leurs amis. Aujourd'hui, ils passent en moyenne quatre heures par jour sur leur smartphone. Selon une étude récente, plus de soixante-dix pour cent des jeunes déclarent qu'ils se sentent anxieux sans leur téléphone. Cependant, la technologie offre aussi des avantages considérables : elle permet d'accéder à l'information en quelques secondes, de rester en contact avec des personnes éloignées et de développer de nouvelles compétences numériques. Les experts s'accordent à dire qu'il faudra trouver un équilibre entre l'usage responsable des écrans et les activités physiques et sociales. Si les jeunes apprennent à utiliser la technologie de façon réfléchie, elle deviendra un outil puissant pour leur avenir.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-black text-[#16A34A]">Comprehension questions</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">1. Combien de temps les jeunes passent-ils en moyenne sur leur smartphone chaque jour ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Ils passent en moyenne quatre heures par jour sur leur smartphone.
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">2. Citez deux avantages de la technologie mentionnés dans le texte.</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Elle permet d'accéder à l'information rapidement et de rester en contact avec des personnes éloignées. (Also: développer de nouvelles compétences numériques.)
                </div>
              </div>
              <div className="rounded-2xl border border-[#E7DAB9] bg-white p-5">
                <p className="font-black">3. Quelle solution proposent les experts ?</p>
                <div className="mt-2 rounded-xl bg-[#F0FDF4] px-4 py-2 text-sm">
                  <span className="font-black text-[#16A34A]">Answer: </span>Ils disent qu'il faudra trouver un équilibre entre l'usage responsable des écrans et les activités physiques et sociales.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-[#0B1F3A] p-6 text-white">
          <p className="font-black text-[#C9A44C]">Reading strategies</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Read for gist first</p>
              <p className="mt-1 text-white/70">Skim the whole text before attempting the questions. Get the main idea before focusing on details.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Use context clues</p>
              <p className="mt-1 text-white/70">Unfamiliar words often have clues nearby — the surrounding sentence usually hints at the meaning.</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3">
              <p className="font-black">Spot the tenses</p>
              <p className="mt-1 text-white/70">Identifying verb tenses tells you whether events are present, past, or future — key for comprehension questions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
