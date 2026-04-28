import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-steel-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl tracking-tight">
            МеталлоМастер
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Главная
            </Link>
            <div className="relative group">
              <Link
                href="/uslugi/angary"
                className="hover:text-gray-300 transition-colors"
              >
                Услуги
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/uslugi/angary"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Ангары
                </Link>
                <Link
                  href="/uslugi/fermy"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Фермы
                </Link>
                <Link
                  href="/uslugi/svarka"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Сварка
                </Link>
                <Link
                  href="/uslugi/karkasy"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Каркасы
                </Link>
                <Link
                  href="/uslugi/navesy"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Навесы
                </Link>
              </div>
            </div>
            <Link
              href="/portfolio"
              className="hover:text-gray-300 transition-colors"
            >
              Портфолио
            </Link>
            <Link
              href="/blog"
              className="hover:text-gray-300 transition-colors"
            >
              Блог
            </Link>
            <Link
              href="/contacts"
              className="hover:text-gray-300 transition-colors"
            >
              Контакты
            </Link>
          </nav>
          {/* Mobile menu placeholder */}
          <div className="md:hidden">
            <span className="text-sm">Меню</span>
          </div>
        </div>
      </div>
    </header>
  );
}