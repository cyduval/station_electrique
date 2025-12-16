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
  const t = await getTranslations({ locale, namespace: "comparisons" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/comparatif`,
      languages: {
        fr: "/fr/comparatif",
        en: "/en/comparatif",
        de: "/de/comparatif",
      },
    },
  };
}

export default function ComparisonsPage() {
  const t = useTranslations("comparisons");
  const tCommon = useTranslations("common");

  const comparisons = [
    {
      title: t("vsJackery.title"),
      description: t("vsJackery.description"),
      href: "comparatif/ecoflow-delta-2-vs-jackery",
      image: "🆚",
    },
    {
      title: t("vsDeltaMax.title"),
      description: t("vsDeltaMax.description"),
      href: "comparatif/ecoflow-delta-2-vs-delta-max",
      image: "🔋",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("metaDescription")}
          </p>
        </div>
      </section>

      {/* Comparisons List */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.href}
                href={comparison.href}
                className="block p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{comparison.image}</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {comparison.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {comparison.description}
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-medium">
                  {tCommon("learnMore")} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
