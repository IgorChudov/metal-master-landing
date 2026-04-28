import Link from "next/link";
import Image from "next/image";

const services = [
  { title: "Ангары", slug: "angary", description: "Быстровозводимые ангары из металлоконструкций." },
  { title: "Фермы", slug: "fermy", description: "Стропильные и подстропильные фермы." },
  { title: "Сварка", slug: "svarka", description: "Сварочные работы любой сложности." },
  { title: "Каркасы", slug: "karkasy", description: "Каркасы зданий и сооружений." },
  { title: "Навесы", slug: "navesy", description: "Навесы из металла для авто и не только." },
  { title: "Металлообработка", slug: "metalloobrabotka", description: "Резка, гибка, покраска металла." }, // extra one to show 6
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/uslugi/${service.slug}`}
              className="group block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 relative">
                <Image
                  src={`https://placehold.co/64x64/1f2429/FFFFFF?text=${encodeURIComponent(service.title.slice(0, 2))}`}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-steel-700">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}