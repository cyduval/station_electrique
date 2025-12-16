import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/guide`,
      languages: {
        fr: "/fr/guide",
        en: "/en/guide",
        de: "/de/guide",
      },
    },
  };
}

export default function GuidesPage() {
  const t = useTranslations("guides");
  const tCommon = useTranslations("common");

  const guides = [
    {
      key: "chooseStation",
      title: t("chooseStation.title"),
      description: t("chooseStation.description"),
      href: "guide/choisir-station-energie",
      emoji: "🔍",
      color: "from-blue-500 to-blue-700",
    },
    {
      key: "powerOutage",
      title: t("powerOutage.title"),
      description: t("powerOutage.description"),
      href: "guide/panne-electrique-que-faire",
      emoji: "⚡",
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            {t("metaDescription")}
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guides.map((guide) => (
              <Link
                key={guide.key}
                href={guide.href}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-br ${guide.color} p-8 text-white`}
                >
                  <div className="text-6xl mb-4">{guide.emoji}</div>
                  <h2 className="text-2xl font-bold mb-2">{guide.title}</h2>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {guide.description}
                  </p>
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">
                    {tCommon("learnMore")} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
