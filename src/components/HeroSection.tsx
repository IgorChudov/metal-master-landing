import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[70vh] min-h-[500px]"
      style={{
        backgroundImage:
          "url('https://placehold.co/1920x1080/1f2429/FFFFFF?text=Металлоконструкции')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Изготовление металлоконструкций
          <br /> любой сложности
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Проектирование, производство и монтаж. Ангары, фермы, каркасы, навесы и
          сварные работы.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Получить расчёт
        </Link>
      </div>
    </section>
  );
}