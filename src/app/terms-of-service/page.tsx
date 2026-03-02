import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Promoora",
  description:
    "Read the terms governing Promoora's web design, development, and digital branding services. Governed by Indian law.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">
          Promoora
        </p>
        <p className="text-slate-500 text-sm mb-4">Effective Date: [DD Month YYYY]</p>
        <p className="text-slate-400 text-sm mb-10">
          <strong className="text-slate-300">Contact:</strong>{" "}
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
            <p className="mb-3">
              These Terms of Service (&ldquo;Terms&rdquo;) form a legally binding agreement between you (the &ldquo;Client&rdquo;, &ldquo;you&rdquo;, &ldquo;your&rdquo;) and Promoora (&ldquo;Promoora&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), governing the use of our website (<a href="https://promoora.in" className="text-accent hover:underline">promoora.in</a>) and the provision of our services.
            </p>
            <p className="text-slate-400">
              By engaging our services, submitting a proposal request, or making any payment, you confirm that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. About Promoora</h2>
            <p className="text-slate-400">
              Promoora is a digital studio offering website design, development, SEO, digital branding, and related services. We are based in India and operate primarily online.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Services We Offer</h2>
            <p className="mb-3 text-slate-400">Our services include (but are not limited to):</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Website design &amp; development (custom and template-based);</li>
              <li>Website maintenance &amp; support;</li>
              <li>Search Engine Optimisation (SEO);</li>
              <li>Domain registration &amp; hosting management;</li>
              <li>Branding and visual identity;</li>
              <li>Google Business Profile setup;</li>
              <li>Social media page setup;</li>
              <li>Business email setup;</li>
              <li>Analytics integration (Google Analytics, Search Console, etc.);</li>
              <li>Other digital solutions as outlined in a project proposal.</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Service Packages &amp; Pricing</h2>
            <p className="mb-4 text-slate-400">
              Below is a summary of our current packages. All prices are in Indian Rupees (₹) and exclusive of GST unless stated otherwise.
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mb-3">A. One-Time Packages</h3>
            <div className="space-y-4 mb-6">
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Starter — ₹9,999</h4>
                <p className="text-slate-400 text-sm">
                  Single-page responsive site, mobile-friendly, basic SEO, contact form, domain + hosting setup, Google Analytics, 1 revision round, 7-day delivery.
                </p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Growth — ₹19,999</h4>
                <p className="text-slate-400 text-sm">
                  Multi-page site (up to 5), CMS integration, on-page SEO, Google Business Profile, social pages setup, 2 revision rounds, 14-day delivery, 30-day support.
                </p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Premium — ₹29,999</h4>
                <p className="text-slate-400 text-sm">
                  Custom multi-page (up to 10), animations, advanced SEO, business email, branding kit, 3 revision rounds, 21-day delivery, 60-day support.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-slate-200 mb-3">B. Monthly Subscription Plans</h3>
            <div className="space-y-4 mb-4">
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Basic — ₹2,999/month</h4>
                <p className="text-slate-400 text-sm">
                  Hosting, SSL, uptime monitoring, monthly content update (1 page), basic analytics report.
                </p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Professional — ₹9,999/month</h4>
                <p className="text-slate-400 text-sm">
                  Everything in Basic + performance optimisation, SEO monitoring, weekly content updates, priority support.
                </p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-1">Enterprise — ₹18,999/month</h4>
                <p className="text-slate-400 text-sm">
                  Everything in Professional + dedicated account manager, custom development hours, A/B testing, monthly strategy call.
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm">
              GST (currently 18%) is added on all invoices as applicable.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Engagement &amp; Proposals</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Every engagement begins with a written or digital proposal/agreement outlining the scope, deliverables, timeline, and fees.</li>
              <li>We may issue proposals via email, linked document, or our website portal.</li>
              <li>Once you accept a proposal (in writing or by making payment), it becomes binding alongside these Terms.</li>
              <li>Any changes to scope after acceptance require a written change request (see Scope Changes below).</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Client Responsibilities</h2>
            <p className="mb-3 text-slate-400">You agree to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Provide complete and accurate information, content, and feedback in a timely manner.</li>
              <li>Ensure you have rights or licences for content you supply (text, images, logos).</li>
              <li>Respond to communications within a reasonable time. Delays in approvals may extend project timelines without penalty to Promoora.</li>
              <li>Maintain backups of your existing website/data before any migration (we offer reasonable help but are not liable for pre-existing data loss).</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Payment Terms</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>One-Time Projects: 50% advance; 50% on project completion (before final handover) unless the proposal specifies a milestone-based breakdown.</li>
              <li>Subscriptions: Billed monthly in advance. Auto-renewed unless you cancel before the next billing date.</li>
              <li>Payment methods: UPI, bank transfer, or other agreed methods.</li>
              <li>Invoices will include applicable GST.</li>
              <li>If payment is delayed beyond 7 days of the due date, we reserve the right to pause work, restrict access to deliverables, or charge late interest at 1.5% per month.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Revisions &amp; Scope Changes</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Each package includes a stated number of revision rounds. Additional revisions are charged at ₹2,000 per round (or as quoted).</li>
              <li>Scope changes (features or pages not in the original proposal) will be evaluated and quoted separately as an addendum.</li>
              <li>We will notify you if your request falls outside the agreed scope before proceeding.</li>
            </ul>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Delivery &amp; Timelines</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Estimated delivery times are provided in goodfaith and depend on timely receipt of content and approvals from you.</li>
              <li>Delays caused by client non-responsiveness (e.g., feedback not provided within 7 days) may extend the project timeline proportionally, with no liability on Promoora.</li>
              <li>We will communicate any material delays proactively.</li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li><strong className="text-slate-300">Client Content:</strong> You retain ownership of all content, trademarks, and assets you provide.</li>
              <li><strong className="text-slate-300">Deliverables:</strong> Upon full payment, the final deliverables (website code, design files as specified) are assigned to you, except for (a) third-party licensed assets (fonts, stock images, open-source code) which are subject to their own licences, and (b) Promoora&apos;s proprietary tools and internal code libraries, which remain ours.</li>
              <li><strong className="text-slate-300">Portfolio Use:</strong> We reserve the right to showcase the completed project (screenshots, descriptions) in our portfolio and marketing materials. If you require non-disclosure, state this in the proposal and we will honour it.</li>
            </ul>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Third-Party Services &amp; Licences</h2>
            <p className="text-slate-400">
              Projects may use third-party services (hosting, CMS, plugins, APIs, fonts, stock media). We will inform you of material third-party dependencies. You are responsible for ongoing licence fees or subscriptions of such services post-handover unless included in a maintenance plan.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Hosting &amp; Domain</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>If Promoora arranges hosting or domain registration on your behalf, ownership of the domain belongs to you. We will provide credentials upon request.</li>
              <li>Renewal fees for domain and hosting are your responsibility after the initial term (unless covered by a subscription plan).</li>
            </ul>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Confidentiality</h2>
            <p className="text-slate-400">
              Both parties agree to keep confidential any non-public business information exchanged during the engagement. This obligation survives termination for a period of 2 years or as otherwise agreed.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">14. Cancellation &amp; Refunds</h2>

            <h3 className="text-base font-semibold text-slate-200 mb-2">One-Time Projects:</h3>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 mb-4">
              <li>Cancellation before work begins: Full refund of advance.</li>
              <li>Cancellation after work has begun: The advance is non-refundable (covers work already performed). Any additional billable work will be invoiced.</li>
              <li>If Promoora cancels, unused advance will be refunded in full.</li>
            </ul>

            <h3 className="text-base font-semibold text-slate-200 mb-2">Subscriptions:</h3>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Cancel anytime before the next billing cycle. The current month&apos;s fee is non-refundable.</li>
              <li>We may terminate a subscription with 30 days&apos; notice if terms are breached.</li>
            </ul>
          </section>

          {/* 15 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">15. Warranties &amp; Disclaimers</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>We warrant that services will be performed with reasonable skill and care.</li>
              <li>We do not guarantee specific business results (traffic, conversions, revenue, search engine rankings).</li>
              <li>Websites are delivered &ldquo;as agreed&rdquo; in the proposal. Post-delivery bugs reported within 30 days (or the agreed support period) will be fixed at no extra cost; issues arising from client modifications, third-party changes, or hosting problems are excluded.</li>
              <li>To the fullest extent permitted by Indian law, all other warranties (express or implied) are disclaimed.</li>
            </ul>
          </section>

          {/* 16 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">16. Limitation of Liability</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Our total liability for any claim arising from services shall not exceed the total fees actually paid by you in the 6 months preceding the claim.</li>
              <li>We are not liable for indirect, incidental, consequential or punitive damages.</li>
              <li>You agree to maintain your own backups. We are not liable for data loss, downtime, or security breaches caused by third-party hosting or your own actions.</li>
            </ul>
          </section>

          {/* 17 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">17. Indemnification</h2>
            <p className="text-slate-400">
              You agree to indemnify and hold harmless Promoora from claims, losses, or damages arising from (a) content you supply, (b) your breach of these Terms, or (c) your use of the deliverables in violation of law.
            </p>
          </section>

          {/* 18 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">18. Force Majeure</h2>
            <p className="text-slate-400">
              Neither party is liable for delays or failure to perform due to events beyond reasonable control (natural disasters, pandemics, government actions, internet outages, etc.).
            </p>
          </section>

          {/* 19 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">19. Dispute Resolution</h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400">
              <li>Both parties will attempt to resolve disputes amicably within 30 days of written notice.</li>
              <li>If unresolved, the dispute may be referred to arbitration under the Arbitration and Conciliation Act, 1996, seated in a mutually agreed city in India (default: Ramnagar, Uttarakhand), with a sole arbitrator.</li>
              <li>Courts in Uttarakhand shall have exclusive jurisdiction.</li>
            </ul>
          </section>

          {/* 20 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">20. Changes to Terms</h2>
            <p className="text-slate-400">
              We may update these Terms from time to time. Material changes will be communicated (via email or website notice). Continued use of services after notice constitutes acceptance.
            </p>
          </section>

          {/* 21 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">21. Contact</h2>
            <p className="text-slate-400">
              For any questions regarding these Terms, contact us at:{" "}
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
