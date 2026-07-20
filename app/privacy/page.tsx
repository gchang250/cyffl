import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CYFFL",
  description:
    "How the Canadian Youth Foundation for French Literacy (CYFFL) collects, uses, and protects your information.",
};

const LAST_UPDATED = "July 20, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7] text-[#0B1F3A]">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-widest text-[#C9A44C]">
          Legal
        </p>
        <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
          Privacy Policy.
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#526173]">
          The Canadian Youth Foundation for French Literacy (&ldquo;CYFFL,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed
          to protecting your privacy. This policy explains what information we
          collect, why, and how we handle it.
        </p>
        <p className="mt-3 text-sm font-semibold text-[#526173]">
          Last updated: {LAST_UPDATED}
        </p>

        <div className="mt-12 space-y-10">
          <Clause title="1. Our approach to privacy">
            <p>
              CYFFL is a free, youth-led resource for students in Canada. You do
              not need to create an account or sign in to use our lessons and
              resources. We collect as little information as possible, and we do
              not sell your personal information.
            </p>
          </Clause>

          <Clause title="2. Information we collect">
            <p>We may collect the following:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <span className="font-semibold text-[#0B1F3A]">
                  Information you give us.
                </span>{" "}
                When you request tutoring or apply to volunteer, you complete a
                form that asks for details such as your name, email address, and
                mailing address, along with information about your grade level or
                the support you are looking for. If you email us directly, we
                also receive whatever you choose to include in your message. We
                use this information to respond to you and to match students with
                volunteer tutors.
              </li>
              <li>
                <span className="font-semibold text-[#0B1F3A]">
                  Anonymous usage data.
                </span>{" "}
                We use analytics to see how many people visit the site and how
                many views each page gets. To count unique visitors, our
                analytics assigns an anonymous identifier and may record basic
                technical details such as browser type and approximate,
                city-level location derived from your IP address. This data is
                anonymous. It is never linked to your name or email, and we do
                not use it to personally identify you.
              </li>
            </ul>
          </Clause>

          <Clause title="3. Analytics and cookies">
            <p>
              We use Vercel Analytics and PostHog Analytics to count how many
              people use the site and how many views each page receives. Vercel
              Analytics is cookieless. PostHog stores a small anonymous
              identifier on your device (using a cookie and local storage) so
              that repeat visits from the same browser are counted as one
              visitor rather than many. This identifier is random and anonymous.
              It does not contain your name, email, or any account information,
              and we use it only to produce aggregate visitor and page-view
              counts. You can clear or block this identifier through your browser
              settings.
            </p>
          </Clause>

          <Clause title="4. How we use your information">
            <p>We use information to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>respond to your questions and requests;</li>
              <li>provide and coordinate tutoring and volunteer opportunities;</li>
              <li>maintain, understand, and improve our lessons and resources;</li>
              <li>keep the site secure and functioning properly.</li>
            </ul>
          </Clause>

          <Clause title="5. Third-party services">
            <p>
              We rely on trusted third-party providers to operate the site, such
              as hosting, analytics, and text-to-speech services. Their handling
              of data is governed by their own privacy policies.
            </p>
            <p>
              Our tutoring and volunteer forms are hosted on Google Forms. When
              you submit one, the information you provide, including your name,
              email address, and mailing address, is collected and stored through
              Google on our behalf, subject to Google&rsquo;s privacy policy. We
              access these responses only to coordinate tutoring and volunteering.
            </p>
          </Clause>

          <Clause title="6. Children's and student privacy">
            <p>
              Many of our users are students, some of whom are minors. We do not
              knowingly collect more personal information from students than is
              necessary to provide our resources. If you are a parent or guardian
              and believe your child has provided us with personal information you
              would like removed, please contact us and we will address it
              promptly.
            </p>
          </Clause>

          <Clause title="7. How we protect your information">
            <p>
              We take reasonable measures to protect the information we hold
              against loss, misuse, and unauthorized access. However, no method
              of transmission or storage over the internet is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </Clause>

          <Clause title="8. Data retention">
            <p>
              We keep personal information only as long as needed for the purposes
              described in this policy, or as required by law, and then delete or
              anonymize it.
            </p>
          </Clause>

          <Clause title="9. Your rights">
            <p>
              Depending on your province or territory, you may have the right to
              access, correct, or request deletion of the personal information we
              hold about you. To make a request, email us using the contact
              details below.
            </p>
          </Clause>

          <Clause title="10. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date above. We encourage
              you to review this page periodically.
            </p>
          </Clause>

          <Clause title="11. Contact us">
            <p>
              If you have questions about this policy or how we handle your
              information, email us at{" "}
              <a
                href="mailto:canadianyouthffl@gmail.com"
                className="font-semibold text-[#D62828] underline"
              >
                canadianyouthffl@gmail.com
              </a>
              . See also our{" "}
              <Link href="/terms" className="font-semibold text-[#D62828] underline">
                Terms of Service
              </Link>
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
