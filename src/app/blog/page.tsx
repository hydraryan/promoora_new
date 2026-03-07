import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Promoora | Web Development & Digital Growth Insights",
  description:
    "Expert insights on web development, SEO, digital marketing, and online business growth for local businesses in India. Learn how to grow your business online with Promoora.",
  keywords: [
    "web development blog",
    "SEO tips India",
    "digital marketing blog",
    "business website tips",
    "online presence",
    "local business growth",
    "Promoora blog",
    "website design insights",
    "landing page tips",
    "conversion optimization",
  ],
  openGraph: {
    title: "Blog — Promoora | Web Development & Digital Growth Insights",
    description:
      "Expert insights on web development, SEO, digital marketing, and online business growth for local businesses in India.",
    type: "website",
    siteName: "Promoora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Promoora | Web Development & Digital Growth Insights",
    description:
      "Expert insights on web development, SEO, digital marketing, and online business growth for local businesses in India.",
  },
  alternates: {
    canonical: "https://promoora.in/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Business Growth": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Guide: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "Digital Strategy": "bg-purple-500/15 text-purple-400 border-purple-500/20",
  Conversion: "bg-orange-500/15 text-orange-400 border-orange-500/20",
  SEO: "bg-accent/15 text-accent border-accent/20",
};

export default function BlogPage() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Promoora Blog",
    description:
      "Expert insights on web development, SEO, digital marketing, and online business growth for local businesses in India.",
    url: "https://promoora.in/blog",
    publisher: {
      "@type": "Organization",
      name: "Promoora",
      url: "https://promoora.in",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      author: { "@type": "Organization", name: "Promoora" },
      url: `https://promoora.in/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="min-h-screen bg-navy-950">
        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Home
            </Link>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-white">Promoora </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-light">
                Blog
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Actionable insights on web development, SEO, and digital growth — 
              designed to help local businesses in India build a powerful online
              presence.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass rounded-2xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 flex flex-col"
              >
                {/* Category & Meta */}
                <div className="p-6 pb-0 flex items-center gap-3 flex-wrap">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${
                      categoryColors[post.category] ??
                      "bg-white/10 text-slate-300 border-white/10"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-slate-500"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <span className="text-sm text-accent font-medium group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                      Read
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
          <div className="glass-strong rounded-3xl p-10 sm:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to Take Your Business Online?
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Stop reading, start growing. Let us build a website that turns
              visitors into customers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-a-call" className="btn-futuristic">
                Book a Free Call
              </Link>
              <Link href="/get-started" className="btn-futuristic-outline">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
