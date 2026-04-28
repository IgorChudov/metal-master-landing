import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Услуги | МеталлоМастер",
  description:
    "Полный перечень услуг по изготовлению металлоконструкций: ангары, фермы, сварка, каркасы, навесы и металлообработка.",
};

const allServices = [
  { title: "Ангары", slug: "angary", desc: "Быстровозводимые ангары из металлоконструкций" },
  { title: "Фермы", slug: "fermy", desc: "Стропильные и подстропильные фермы" },
  { title: "Сварка", slug: "svarka", desc: "Сварочные работы любой сложности" },
  { title: "Каркасы", slug: "karkasy", desc: "Каркасы зданий и сооружений" },
  { title: "Навесы", slug: "navesy", desc: "Навесы для авто, складов, навесных конструкций" },
  { title: "Металлообработка", slug: "metalloobrabotka", desc: "Резка, гибка, покраска металла" },
];

export default function UslugiPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Наши услуги</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <Link
            key={service.slug}
            href={`/uslugi/${service.slug}`}
            className="rounded-lg border bg-gray-50 p-6 hover:shadow-md transition-shadow flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 flex-1">{service.desc}</p>
            <span className="text-steel-700 mt-3 block">Подробнее →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}