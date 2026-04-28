import Link from "next/link";
import Image from "next/image";

const projects = [
  { slug: "angar-1", title: "Ангар 24x12 м" },
  { slug: "ferma-1", title: "Ферма для зернохранилища" },
  { slug: "naves-1", title: "Навес для автостоянки" },
  { slug: "karkas-1", title: "Каркас торгового павильона" },
  { slug: "angar-2", title: "Ангар арочного типа" },
  { slug: "svarka-1", title: "Сварка резервуара" },
];

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Наши проекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={`https://placehold.co/600x400/4d5f6a/FFFFFF?text=${encodeURIComponent(project.title)}`}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}