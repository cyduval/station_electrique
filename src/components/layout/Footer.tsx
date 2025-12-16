import Link from "next/link";
import { useTranslations } from "next-intl";
import { type Locale } from "@/i18n/config";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const tNav = useTranslations("navigation");

  const quickLinks = [
    { name: tNav("product"), href: `/${locale}/ecoflow-delta-2` },
    { name: tNav("comparisons"), href: `/${locale}/comparatif` },
    { name: tNav("usages"), href: `/${locale}/usages` },
    { name: tNav("guide"), href: `/${locale}/guide` },
    { name: tNav("faq"), href: `/${locale}/faq` },
  ];

  const legalLinks = [
    { name: t("legalNotice"), href: `/${locale}/mentions-legales` },
    { name: t("privacy"), href: `/${locale}/politique-confidentialite` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <Link
              href={`/${locale}`}
              className="flex items-center space-x-2 text-xl font-bold text-white mb-4"
            >
              <span className="text-2xl">⚡</span>
              <span>EcoFlow DELTA 2 Guide</span>
            </Link>
            <p className="text-gray-400 mb-4">{t("aboutText")}</p>
            <p className="text-sm text-gray-500">
              {t("copyright")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("legal")}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            En tant que Partenaire Amazon, ce site réalise un bénéfice sur les achats remplissant les conditions requises.
          </p>
        </div>
      </div>
    </footer>
  );
}
