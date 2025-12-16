"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { type Locale, locales, localeFlags, localeNames } from "@/i18n/config";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations("navigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("product"), href: `/${locale}/ecoflow-delta-2` },
    { name: t("comparisons"), href: `/${locale}/comparatif` },
    { name: t("usages"), href: `/${locale}/usages` },
    { name: t("guide"), href: `/${locale}/guide` },
    { name: t("faq"), href: `/${locale}/faq` },
    { name: t("blog"), href: `/${locale}/blog` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 text-xl font-bold text-green-600"
          >
            <span className="text-2xl">⚡</span>
            <span className="hidden sm:inline">EcoFlow DELTA 2</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center space-x-2">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`px-2 py-1 rounded text-sm ${
                  locale === loc
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                title={localeNames[loc]}
              >
                {localeFlags[loc]}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}`}
                    className={`px-3 py-2 rounded ${
                      locale === loc
                        ? "bg-green-100 text-green-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {localeFlags[loc]} {localeNames[loc]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
