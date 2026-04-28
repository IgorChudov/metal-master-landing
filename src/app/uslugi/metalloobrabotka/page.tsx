import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Металлообработка | МеталлоМастер",
  description: "Резка, гибка, покраска металла на заказ.",
};

export default function MetalloobrabotkaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Металлообработка</h1>
      <p className="text-lg text-gray-600">
        Услуги по резке, гибке и покраске металла. (Страница в разработке)
      </p>
    </div>
  );
}