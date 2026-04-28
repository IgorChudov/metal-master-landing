import Link from "next/link";

const socialLinks = [
  { name: "VK", href: "#" },
  { name: "Telegram", href: "#" },
  { name: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">МеталлоМастер</h3>
            <p className="text-sm">
              Изготовление металлоконструкций с 2010 года. Работаем по всей
              России.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Контакты</h3>
            <ul className="text-sm space-y-1">
              <li>📞 +7 (900) 123-45-67</li>
              <li>✉️ info@metallomaster.ru</li>
              <li>📍 г. Москва, ул. Стальная, д. 10</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} МеталлоМастер. Все права защищены.
        </div>
      </div>
    </footer>
  );
}