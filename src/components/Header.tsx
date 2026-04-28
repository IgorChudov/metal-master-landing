"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-steel-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight shrink-0"
            onClick={() => setIsOpen(false)}
          >
            МеталлоМастер
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Главная
            </Link>
            {/* Услуги — теперь ведёт на /uslugi, а не на конкретную */}
            <div className="relative group">
              <Link
                href="/uslugi"
                className="hover:text-gray-300 transition-colors"
              >
                Услуги
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/uslugi/angary" className="block px-4 py-2 hover:bg-gray-100">Ангары</Link>
                <Link href="/uslugi/fermy" className="block px-4 py-2 hover:bg-gray-100">Фермы</Link>
                <Link href="/uslugi/svarka" className="block px-4 py-2 hover:bg-gray-100">Сварка</Link>
                <Link href="/uslugi/karkasy" className="block px-4 py-2 hover:bg-gray-100">Каркасы</Link>
                <Link href="/uslugi/navesy" className="block px-4 py-2 hover:bg-gray-100">Навесы</Link>
                <Link href="/uslugi/metalloobrabotka" className="block px-4 py-2 hover:bg-gray-100">Металлообработка</Link>
              </div>
            </div>
            <Link href="/portfolio" className="hover:text-gray-300 transition-colors">
              Кейсы
            </Link>
            <Link href="/blog" className="hover:text-gray-300 transition-colors">
              Блог
            </Link>
            <Link href="/team" className="hover:text-gray-300 transition-colors">
              Команда
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              О нас
            </Link>
            <Link href="/contacts" className="hover:text-gray-300 transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-expanded={isOpen}
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="pt-2 pb-4 space-y-1 bg-steel-900">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Главная</Link>
            <Link href="/uslugi" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Услуги</Link>
            <Link href="/portfolio" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Кейсы</Link>
            <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Блог</Link>
            <Link href="/team" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Команда</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>О нас</Link>
            <Link href="/contacts" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-steel-800" onClick={() => setIsOpen(false)}>Контакты</Link>
          </div>
        </div>
      </div>
    </header>
  );
}