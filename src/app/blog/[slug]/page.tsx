import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blog-posts";

/* ── Static params for SSG ────────────────────── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata per post ────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      siteName: "Promoora",
      url: `https://promoora.in/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
    },
    alternates: {
      canonical: `https://promoora.in/blog/${post.slug}`,
    },
  };
}

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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Promoora",
      url: "https://promoora.in",
    },
    publisher: {
      "@type": "Organization",
      name: "Promoora",
      url: "https://promoora.in",
      logo: {
        "@type": "ImageObject",
        url: "https://promoora.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://promoora.in/blog/${post.slug}`,
    },
    url: `https://promoora.in/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main className="min-h-screen bg-navy-950">
        {/* Article Header */}
        <header className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-slate-500 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link
                href="/blog"
                className="text-slate-500 hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400 truncate max-w-48">
                {post.title}
              </span>
            </nav>

            {/* Category & Read Time */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full border ${
                  categoryColors[post.category] ??
                  "bg-white/10 text-slate-300 border-white/10"
                }`}
              >
                {post.category}
              </span>
              <span className="text-xs text-slate-500">{post.readTime}</span>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-slate-500"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 pb-16">
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-slate-300 prose-p:leading-relaxed
              prose-li:text-slate-300 prose-li:leading-relaxed
              prose-strong:text-white prose-strong:font-semibold
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-ul:pl-6 prose-ol:pl-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <section className="max-w-3xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-slate-500 mr-1">Tags:</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-400 border border-white/8"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              More Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group glass rounded-2xl p-6 hover:border-accent/20 transition-all duration-500 hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${
                        categoryColors[rp.category] ??
                        "bg-white/10 text-slate-300 border-white/10"
                      }`}
                    >
                      {rp.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {rp.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors leading-snug flex-1">
                    {rp.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 line-clamp-2">
                    {rp.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24 text-center">
          <div className="glass-strong rounded-3xl p-10 sm:p-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Want a Website That Actually Converts?
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              We help local businesses in India build professional, SEO-optimized
              websites that generate real leads.
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
