import Link from "next/link";

// for now, keep posts inline. Later you can load from a CMS or markdown files.
const posts = [
  {
    slug: "blue-team-beginners-treasure-map",
    title: "Coming Soon",
    excerpt:
      "Soon",
    date: "2025-08-18",
    tags: ["coming-soon"],
  },
];

export const metadata = {
  title: "Blogs | One Piece Portfolio",
  description: "Writings from the voyage — dev notes, security, and projects.",
};

export default function BlogsPage() {
  return (
    <section className="mx-auto max-w-6xl p-8">
      <h1 className="text-3xl font-bold mb-2">📝 Blogs</h1>
      <p className="text-stone-700 mb-6">
        Writings from the voyage — tutorials, notes, and reflections.
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
              <Link href={`/blogs/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-1 text-stone-700">{p.excerpt}</p>
            <Link
              href={`/blogs/${p.slug}`}
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
