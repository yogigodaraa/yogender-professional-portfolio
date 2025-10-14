import Link from "next/link";

// for now, keep posts inline. Later you can load from a CMS or markdown files.
const posts = [
  {
    slug: "blue-team-level-1-journey",
    title: "Blue Team Level 1: My Journey from Start to Certification",
    excerpt: "My complete journey through the Blue Team Level 1 certification - how I started, what I learned, the challenges I faced, and how I successfully earned the certification.",
    date: "2025-10-14",
    tags: ["blue-team", "certification", "journey", "btl1"],
    status: "coming-soon"
  }
];

export const metadata = {
  title: "Blog | Yogender Godara - Cybersecurity Professional",
  description: "Technical articles about cybersecurity, network security, and IT infrastructure best practices.",
};

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">📝 Technical Blog</h1>
      <p className="text-stone-700 mb-6 text-sm sm:text-base">
        Technical articles, cybersecurity insights, and best practices from the field.
      </p>

      <div className="space-y-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-black/10 bg-white p-4 sm:p-5 hover:shadow transition"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-stone-500">
              <time dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
              <span className="hidden sm:inline">•</span>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-0.5 rounded bg-stone-100 text-xs">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="mt-2 text-base sm:text-lg font-semibold">
              {p.status === 'coming-soon' ? (
                <span className="text-stone-600">{p.title}</span>
              ) : (
                <Link href={`/blogs/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              )}
            </h2>
            <p className="mt-1 text-stone-700 text-sm sm:text-base">{p.excerpt}</p>
            {p.status === 'coming-soon' ? (
              <span className="mt-3 inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                Coming Soon
              </span>
            ) : (
              <Link
                href={`/blogs/${p.slug}`}
                className="mt-3 inline-block text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
