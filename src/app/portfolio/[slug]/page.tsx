import type { Metadata } from "next";
import { notFound } from "next/navigation";

const validSlugs = [
  "angar-1",
  "ferma-1",
  "naves-1",
  "karkas-1",
  "angar-2",
  "svarka-1",
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const title = `Проект ${params.slug}`;
  return {
    title: `${title} | Портфолио МеталлоМастер`,
    description: `Подробности проекта ${params.slug}.`,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) {
    notFound();
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-6">Проект: {params.slug}</h1>
      <div className="bg-gray-200 h-96 rounded mb-6 flex items-center justify-center">
        <span className="text-gray-500">
          Здесь будут фотографии и описание проекта
        </span>
      </div>
      <p className="text-lg text-gray-600">Страница находится в разработке.</p>
    </div>
  );
}