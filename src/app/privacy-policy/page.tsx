import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Promoora",
  description:
    "Learn how Promoora collects, uses, and protects your personal data. Compliant with Indian data protection laws including DPDP Act, 2023.",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-navy-950 pt-28 pb-20">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-150 h-100 bg-accent/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">
          Promoora
        </p>
        <p className="text-slate-500 text-sm mb-4">Last updated: 6th March 2026</p>
        <p className="text-slate-400 text-sm mb-10">
          <strong className="text-slate-300">Contact / Grievance Officer:</strong> Aryan —{" "}
          <a href="mailto:ceo@promoora.in" className="text-accent hover:underline">
            ceo@promoora.in
          </a>{" "}
          |{" "}
          <a href="tel:+919627277003" className="text-accent hover:underline">
            +91 9627277003
          </a>
        </p>

        <div className="section-divider mb-10" />

        {/* Content */}
        <article className="prose-policy space-y-10 text-slate-300 text-[15px] leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Promoora (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting the privacy of visitors and customers who use our website, services, or who otherwise interact with us. This Privacy Policy explains what personal data we collect, how we use it, how we share it, and the choices you have. It is intended to meet the requirements of Indian data/privacy laws, including the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable IT rules.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Scope</h2>
            <p className="mb-3">This Policy applies to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Visitors to promoora.in and subdomains;</li>
              <li>Customers and leads who request proposals, pay for services, or otherwise engage with Promoora;</li>
              <li>Users of any web-based dashboards, portals, or forms we operate.</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Personal Data We Collect</h2>
            <p className="mb-4">
              We collect only data necessary to provide our services and operate the website. Typical categories:
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-1">a) Contact &amp; Identity Data</h3>
            <p className="mb-4 text-slate-400">
              Name, business name, email address, phone number, physical address, role/title.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-1">b) Business &amp; Transactional Data</h3>
            <p className="mb-4 text-slate-400">
              Company details, service preferences, proposal/contract information, invoices, payment receipts.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-1">c) Technical &amp; Usage Data</h3>
            <p className="mb-4 text-slate-400">
              IP address, browser type, device type, operating system, pages visited, referring URL, cookies and similar tracking data (analytics), page interactions.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-1">d) Communications</h3>
            <p className="mb-4 text-slate-400">
              Messages you send to us (e.g., emails, chat transcripts), recordings of calls if you provide consent or we inform you.
            </p>

            <h3 className="text-base font-semibold text-slate-200 mb-1">e) Sensitive Personal Data</h3>
            <p className="text-slate-400">
              We do not intentionally collect special categories of personal data (e.g., health, caste, religion, biometric data). If we ever need to process such data (e.g., clinical client use-cases), we will request explicit consent and store/process it under stricter controls per law. The IT Rules / SPDI guidance require additional protections for sensitive personal data.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How We Collect Data</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Directly from you (forms, emails, contract, calls).</li>
              <li>Automatically via cookies, logs, and analytics tools.</li>
              <li>From public sources or your authorised representatives.</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Purposes of Processing &amp; Legal Basis</h2>
            <p className="mb-3">We process personal data to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-3">
              <li>Provide and manage the services you request (contract performance);</li>
              <li>Communicate with you (customer support and account management);</li>
              <li>Process payments, billing and legal compliance;</li>
              <li>Improve our website, monitor usage and perform analytics (legitimate interest / service improvement), provided such processing is balanced with your rights;</li>
              <li>Marketing communications, only with your consent or where law permits;</li>
              <li>Fulfil legal obligations (tax, dispute resolution, regulatory requests).</li>
            </ul>
            <p className="text-slate-400">
              Under the DPDP Act, processing should be lawful and limited to specified purposes; this policy describes those purposes.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Cookies &amp; Tracking</h2>
            <p className="mb-3">We use cookies and similar technologies for:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-3">
              <li>Essential functionality (session cookies).</li>
              <li>Analytics (Google Analytics or similar) to measure and improve the site.</li>
              <li>Optional marketing/tracking cookies (used only with your consent where required).</li>
            </ul>
            <p className="text-slate-400">
              You can manage cookie preferences through your browser or the cookie control on the site.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Sharing &amp; Third Parties</h2>
            <p className="mb-3">We may share personal data with:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-3">
              <li>Service providers (hosting, payment processors, email, analytics, CRM) under contract requiring confidentiality and security;</li>
              <li>Professional advisors (legal, auditors) when needed;</li>
              <li>Law enforcement or government agencies where required by law or a valid order;</li>
              <li>A buyer or investor if the business (or assets) are sold — with notice to data subjects where feasible.</li>
            </ul>
            <p className="text-slate-400">
              Where data is shared, we require third parties to implement reasonable security and comply with applicable laws. The SPDI Rules and DPDP Act set expectations for contracts and security when sharing personal data.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Cross-Border Transfers</h2>
            <p className="text-slate-400">
              If we transfer personal data outside India (e.g., to host on global cloud providers or use foreign service providers), we will ensure lawful transfer mechanisms (e.g., data processing agreements and contractual safeguards) and comply with any requirements under the DPDP Act and applicable government notifications.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Data Retention</h2>
            <p className="mb-3">
              We retain personal data only as long as needed for the purposes described (service provision, legal compliance, dispute resolution). Typical retention periods:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li><strong className="text-slate-300">Leads &amp; proposals:</strong> up to 3 years after last contact (unless you request deletion).</li>
              <li><strong className="text-slate-300">Financial records:</strong> as required by tax laws (typically 7–8 years).</li>
              <li><strong className="text-slate-300">Analytics logs:</strong> aggregated or anonymised where possible and kept no longer than necessary.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Security</h2>
            <p className="mb-3">
              We implement &ldquo;reasonable security practices and procedures&rdquo; (as required under the IT Act &amp; SPDI Rules) including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-3">
              <li>Access controls and role-based access;</li>
              <li>Encrypted storage for sensitive fields;</li>
              <li>HTTPS/TLS on the website;</li>
              <li>Regular backups and patching;</li>
              <li>Periodic security reviews.</li>
            </ul>
            <p className="text-slate-400">
              No system is 100% secure. If a data breach occurs, we will investigate and notify affected individuals and authorities as required by law.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Your Rights (Data Subject Rights)</h2>
            <p className="mb-3">Subject to law, you have rights to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-3">
              <li><strong className="text-slate-300">Access:</strong> request a copy of your personal data we hold;</li>
              <li><strong className="text-slate-300">Correction:</strong> correct inaccurate or incomplete data;</li>
              <li><strong className="text-slate-300">Deletion:</strong> request deletion (subject to legal retention obligations);</li>
              <li><strong className="text-slate-300">Portability:</strong> receive your personal data in a machine-readable format where applicable;</li>
              <li><strong className="text-slate-300">Withdraw consent:</strong> withdraw consent for processing that relied on consent;</li>
              <li><strong className="text-slate-300">Object:</strong> object to certain processing (e.g., direct marketing);</li>
              <li><strong className="text-slate-300">Lodge a grievance</strong> or complaint with us or the relevant authority.</li>
            </ul>
            <p className="text-slate-400">
              To exercise rights, contact:{" "}
              <a href="mailto:ceo@promoora.in" className="text-accent hover:underline">ceo@promoora.in</a>{" "}
              or use the contact form. We will respond within the timelines required by applicable law. Under the IT rules and DPDP Act, grievance redress and timely responses are required.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Grievance Officer &amp; Contact</h2>
            <p className="mb-2 text-slate-400">
              Pursuant to IT Rules and good practice, we designate a Grievance Officer:
            </p>
            <ul className="space-y-1 text-slate-400">
              <li><strong className="text-slate-300">Name:</strong> Aryan</li>
              <li><strong className="text-slate-300">Email:</strong>{" "}
                <a href="mailto:ceo@promoora.in" className="text-accent hover:underline">ceo@promoora.in</a>
              </li>
              <li><strong className="text-slate-300">Phone:</strong>{" "}
                <a href="tel:+919627277003" className="text-accent hover:underline">+91 9627277003</a>
              </li>
            </ul>
            <p className="mt-2 text-slate-400">
              You may raise data or policy concerns with the Grievance Officer; we aim to resolve complaints promptly (within applicable timelines).
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Children</h2>
            <p className="text-slate-400">
              Our services are not for children under 18. We do not knowingly collect data from minors. If we learn we collected data from a minor without consent, we will delete it promptly.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Links to Other Sites</h2>
            <p className="text-slate-400">
              Our site may link to third-party sites. We are not responsible for their privacy practices; review their policies.
            </p>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">15. Changes to Policy</h2>
            <p className="text-slate-400">
              We may update this Policy to reflect legal or operational changes. We will publish the revised date at the top and notify users where required.
            </p>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">16. Governing Law &amp; Contact</h2>
            <p className="text-slate-400">
              This Policy is governed by the laws of India. For questions or to exercise your rights, contact:{" "}
              <a href="mailto:ceo@promoora.in" className="text-accent hover:underline">ceo@promoora.in</a>{" "}
              |{" "}
              <a href="tel:+919627277003" className="text-accent hover:underline">+91 9627277003</a>.
            </p>
          </section>
        </article>

        {/* Bottom divider */}
        <div className="section-divider mt-16 mb-8" />
        <p className="text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Promoora. All rights reserved.
        </p>
      </div>
    </main>
  );
}
