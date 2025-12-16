import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/usages`,
      languages: {
        fr: "/fr/usages",
        en: "/en/usages",
        de: "/de/usages",
      },
    },
  };
}

export default function UsagesPage() {
  const t = useTranslations("usages");
  const tCommon = useTranslations("common");

  const usages = [
    {
      key: "camping",
      title: t("camping.title"),
      description: t("camping.description"),
      href: "usages/camping",
      emoji: "🏕️",
      color: "from-green-500 to-green-700",
    },
    {
      key: "home",
      title: t("home.title"),
      description: t("home.description"),
      href: "usages/maison",
      emoji: "🏠",
      color: "from-blue-500 to-blue-700",
    },
    {
      key: "remotework",
      title: t("remotework.title"),
      description: t("remotework.description"),
      href: "usages/teletravail",
      emoji: "💻",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            {t("metaDescription")}
          </p>
        </div>
      </section>

      {/* Usages Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {usages.map((usage) => (
              <Link
                key={usage.key}
                href={usage.href}
                className="group block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`bg-gradient-to-br ${usage.color} p-8 text-white`}>
                  <div className="text-6xl mb-4">{usage.emoji}</div>
                  <h2 className="text-2xl font-bold mb-2">{usage.title}</h2>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {usage.description}
                  </p>
                  <span className="text-teal-600 dark:text-teal-400 font-medium group-hover:underline">
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
