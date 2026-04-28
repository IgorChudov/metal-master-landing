import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фермы металлические | МеталлоМастер",
  description: "Изготовление и монтаж стропильных и подстропильных ферм.",
};

export default function FermyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Сварка</h1>
      <p className="text-lg text-gray-600">
        Производство любых размеров и конфигураций. (Страница в разработке)
      </p>
    </div>
  );
}