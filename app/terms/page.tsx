import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CYFFL",
  description:
    "The terms that govern your use of the Canadian Youth Foundation for French Literacy (CYFFL) website and resources.",
};

const LAST_UPDATED = "July 20, 2026";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-widest text-[#C9A44C]">
          Legal
        </p>
        <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Terms of Service.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#526173]">
          These terms govern your use of the Canadian Youth Foundation for
          French Literacy (&ldquo;CYFFL,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) website and the free lessons,
          tutoring, and resources we offer.
        </p>
        <p className="mt-3 text-sm font-semibold text-[#526173]">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-12 space-y-10">
          <Clause title="1. Acceptance of these terms">
            <p>
              By accessing or using this website, you agree to be bound by these
              Terms of Service and our{" "}
              <Link href="/privacy" className="font-semibold text-[#D62828] underline">
                Privacy Policy
              </Link>
              . If you do not agree, please do not use the site. If you are under
              the age of majority in your province or territory, you should
              review these terms with a parent or guardian.
            </p>
          </Clause>

          <Clause title="2. Who we are">
            <p>
              CYFFL is a youth-led initiative that provides free French-learning
              resources for students in Canada. Our services are intended for
              learners in Canada and are offered at no cost, without paywalls or
              required sign-ups.
            </p>
          </Clause>

          <Clause title="3. Use of the site">
            <p>You agree to use the site lawfully and responsibly. You will not:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                use the site in any way that violates applicable laws or
                regulations;
              </li>
              <li>
                attempt to disrupt, overload, or gain unauthorized access to the
                site, its servers, or connected systems;
              </li>
              <li>
                copy, scrape, or redistribute our content for commercial purposes
                without permission;
              </li>
              <li>
                misrepresent your identity or impersonate CYFFL or its
                volunteers.
              </li>
            </ul>
          </Clause>

          <Clause title="4. Educational content only">
            <p>
              Our lessons, resources, and tutoring are provided for general
              educational purposes. While we work to keep content accurate and
              up to date, we make no guarantee that it is complete, error-free,
              or suitable for any particular exam, program, or official
              requirement. It is not a substitute for accredited instruction,
              certification, or professional advice.
            </p>
          </Clause>

          <Clause title="5. Tutoring and volunteers">
            <p>
              CYFFL connects students with volunteer tutors. Tutors are
              volunteers, not employees, and we do not guarantee any specific
              outcome, availability, or result from tutoring sessions. You are
              responsible for arranging sessions appropriately, and we encourage
              students who are minors to involve a parent or guardian.
            </p>
          </Clause>

          <Clause title="6. Intellectual property">
            <p>
              Unless otherwise noted, the content on this site, including text,
              lessons, and design, is owned by CYFFL or used with permission. You
              may use our resources for your own personal, non-commercial
              learning. All trademarks and third-party materials remain the
              property of their respective owners.
            </p>
          </Clause>

          <Clause title="7. Third-party links and services">
            <p>
              The site may link to external websites or rely on third-party
              services (for example, analytics or text-to-speech tools). We are
              not responsible for the content, policies, or practices of those
              third parties.
            </p>
          </Clause>

          <Clause title="8. Disclaimer of warranties">
            <p>
              The site and all content are provided &ldquo;as is&rdquo; and
              &ldquo;as available,&rdquo; without warranties of any kind, whether
              express or implied, to the fullest extent permitted by law. We do
              not warrant that the site will be uninterrupted, secure, or
              error-free.
            </p>
          </Clause>

          <Clause title="9. Limitation of liability">
            <p>
              To the fullest extent permitted by law, CYFFL and its volunteers
              will not be liable for any indirect, incidental, or consequential
              damages arising from your use of, or inability to use, the site or
              its resources.
            </p>
          </Clause>

          <Clause title="10. Changes to these terms">
            <p>
              We may update these terms from time to time. When we do, we will
              revise the &ldquo;Last updated&rdquo; date above. Your continued
              use of the site after changes take effect means you accept the
              revised terms.
            </p>
          </Clause>

          <Clause title="11. Governing law">
            <p>
              These terms are governed by the laws of Canada and the province in
              which CYFFL operates, without regard to conflict-of-law
              principles.
            </p>
          </Clause>

          <Clause title="12. Contact us">
            <p>
              Questions about these terms? Email us at{" "}
              <a
                href="mailto:canadianyouthffl@gmail.com"
                className="font-semibold text-[#D62828] underline"
              >
                canadianyouthffl@gmail.com
              </a>
              .
            </p>
          </Clause>
        </div>
      </section>
    </main>
  );
}

function Clause({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-black tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-lg leading-8 text-[#526173]">
        {children}
      </div>
    </section>
  );
}
