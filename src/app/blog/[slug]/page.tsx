import type { Metadata } from "next";
import { notFound } from "next/navigation";

const validSlugs = [
  "kak-vybrat-angar",
  "preimushchestva-metallokonstruktsiy",
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ");
  return {
    title: `${title} | Блог МеталлоМастер`,
    description: `Статья: ${title}`,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Статья: {params.slug.replace(/-/g, " ")}
      </h1>
      <div className="prose max-w-none">
        <p>Текст статьи появится здесь. Страница в разработке.</p>
      </div>
    </div>
  );
}