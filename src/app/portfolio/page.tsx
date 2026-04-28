import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Портфолио проектов | МеталлоМастер",
  description: "Наши реализованные проекты металлоконструкций.",
};

const projects = [
  { slug: "angar-1", title: "Ангар 24x12 м" },
  { slug: "ferma-1", title: "Ферма для зернохранилища" },
  { slug: "naves-1", title: "Навес для автостоянки" },
  { slug: "karkas-1", title: "Каркас торгового павильона" },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">Наши проекты</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/portfolio/${p.slug}`}
            className="border rounded-lg p-4 hover:shadow-md text-center"
          >
            <div className="bg-gray-200 h-40 rounded mb-3 flex items-center justify-center">
              <span className="text-gray-500">Изображение</span>
            </div>
            <h2 className="font-semibold">{p.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}