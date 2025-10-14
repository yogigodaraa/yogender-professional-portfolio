import Link from "next/link";

// for now, keep posts inline. Later you can load from a CMS or markdown files.
const posts = [
  {
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals for Modern Networks",
    excerpt: "Essential cybersecurity principles and best practices for securing modern network infrastructure.",
    date: "2025-11-01",
    tags: ["cybersecurity", "networking", "fundamentals"],
    status: "coming-soon"
  },
  {
    slug: "blue-team-strategies",
    title: "Blue Team Defense Strategies",
    excerpt: "Comprehensive guide to blue team methodologies and defensive cybersecurity practices.",
    date: "2025-11-15",
    tags: ["blue-team", "defense", "incident-response"],
    status: "coming-soon"
  },
  {
    slug: "network-security-automation",
    title: "Automating Network Security Monitoring",
    excerpt: "How to implement automated security monitoring solutions for enterprise networks.",
    date: "2025-12-01",
    tags: ["automation", "monitoring", "security"],
    status: "coming-soon"
  }
];

export const metadata = {
  title: "Blog | Yogender Godara - Cybersecurity Professional",
  description: "Technical articles about cybersecurity, network security, and IT infrastructure best practices.",
};

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold mb-2">📝 Technical Blog</h1>
      <p className="text-stone-700 mb-6">
        Technical articles, cybersecurity insights, and best practices from the field.
      </p>

      <div className="space-y-4">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="rounded-xl border border-black/10 bg-white p-5 hover:shadow transition"
          >
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <time dateTime={p.date}>{new Date(p.date).toLocaleDateString()}</time>
              <span>•</span>
              <ul className="flex gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="px-2 py-0.5 rounded bg-stone-100">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="mt-2 text-lg font-semibold">
              {p.status === 'coming-soon' ? (
                <span className="text-stone-600">{p.title}</span>
              ) : (
                <Link href={`/blogs/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              )}
            </h2>
            <p className="mt-1 text-stone-700">{p.excerpt}</p>
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
