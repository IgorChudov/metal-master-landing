import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Блог | МеталлоМастер",
  description: "Статьи о металлоконструкциях, проектировании и производстве.",
};

const posts = [
  { slug: "kak-vybrat-angar", title: "Как выбрать ангар для бизнеса" },
  { slug: "preimushchestva-metallokonstruktsiy", title: "Преимущества металлоконструкций" },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Блог</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl text-steel-700 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-gray-500">Дата публикации: скоро</p>
          </li>
        ))}
      </ul>
    </div>
  );
}