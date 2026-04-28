import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ангары из металлоконструкций | МеталлоМастер",
  description: "Проектирование и строительство ангаров из металлоконструкций под ключ.",
};

export default function AngaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Ангары</h1>
      <p className="text-lg text-gray-600">
        Здесь будет подробная информация об ангарах: типы, материалы, цены,
        примеры работ. (Страница в разработке)
      </p>
    </div>
  );
}