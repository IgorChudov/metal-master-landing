import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Наша команда | МеталлоМастер",
  description:
    "Познакомьтесь с нашей командой инженеров, сварщиков и менеджеров.",
};

const teamMembers = [
  { name: "Иван Петров", role: "Главный инженер", img: "https://placehold.co/200x200/1f2429/FFFFFF?text=Иван" },
  { name: "Ольга Смирнова", role: "Руководитель отдела продаж", img: "https://placehold.co/200x200/4d5f6a/FFFFFF?text=Ольга" },
  { name: "Алексей Иванов", role: "Сварщик-технолог", img: "https://placehold.co/200x200/1f2429/FFFFFF?text=Алексей" },
  { name: "Елена Кузнецова", role: "Менеджер проектов", img: "https://placehold.co/200x200/4d5f6a/FFFFFF?text=Елена" },
];

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Наша команда</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"
            />
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}