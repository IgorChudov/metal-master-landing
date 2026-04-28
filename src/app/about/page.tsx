import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О компании | МеталлоМастер",
  description:
    "МеталлоМастер — производитель металлоконструкций с 2010 года. Проектирование, изготовление, монтаж.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">О компании</h1>
      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          Компания «МеталлоМастер» с 2010 года занимается проектированием,
          производством и монтажом металлоконструкций любой сложности.
        </p>
        <p>
          Мы работаем с частными лицами и крупными предприятиями по всей
          России. Собственное производство, современное оборудование и
          квалифицированные инженеры позволяют нам выполнять заказы точно
          в срок.
        </p>
        <p>Наша миссия — создавать надёжные металлоконструкции, которые
        служат десятилетиями.</p>
        <div className="not-prose mt-8">
          <Link
            href="/contacts"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
}