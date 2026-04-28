import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | МеталлоМастер",
  description: "Свяжитесь с нами: телефон, адрес, карта проезда.",
};

export default function ContactsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-3">Наши реквизиты</h2>
          <ul className="space-y-2">
            <li>
              <strong>Телефон:</strong> +7 (900) 123-45-67
            </li>
            <li>
              <strong>Email:</strong> info@metallomaster.ru
            </li>
            <li>
              <strong>Адрес:</strong> г. Москва, ул. Стальная, д. 10
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Как добраться</h2>
          <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
            <span className="text-gray-500">Карта проезда (заглушка)</span>
          </div>
        </div>
      </div>
    </div>
  );
}