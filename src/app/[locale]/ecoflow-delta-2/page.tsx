import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AmazonButton from "@/components/common/AmazonButton";
import ProductSchema from "@/components/seo/ProductSchema";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "product" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/ecoflow-delta-2`,
      languages: {
        fr: "/fr/ecoflow-delta-2",
        en: "/en/ecoflow-delta-2",
        de: "/de/ecoflow-delta-2",
      },
    },
  };
}

const specifications = [
  { key: "capacity", value: "1024 Wh" },
  { key: "output", value: "1800W (3400W crête)" },
  { key: "weight", value: "12 kg" },
  { key: "dimensions", value: "40 x 21 x 28 cm" },
  { key: "chargingTime", value: "50 min (0-80%)" },
  { key: "batteryType", value: "LFP (Lithium Fer Phosphate)" },
  { key: "warranty", value: "5 ans" },
  { key: "lifespan", value: "3000+ cycles" },
];

export default function ProductPage() {
  const t = useTranslations("product");
  const tCommon = useTranslations("common");

  const pros = t.raw("pros.list") as string[];
  const cons = t.raw("cons.list") as string[];

  return (
    <>
      <ProductSchema />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {t("overview.description")}
            </p>
            <AmazonButton size="large" />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("overview.title")}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("overview.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("specs.title")}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, index) => (
                  <tr
                    key={spec.key}
                    className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {t(`specs.${spec.key}`)}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center">
                <CheckIcon className="w-8 h-8 mr-3" />
                {t("pros.title")}
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center">
                <XMarkIcon className="w-8 h-8 mr-3" />
                {t("cons.title")}
              </h3>
              <ul className="space-y-4">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <XMarkIcon className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("availableOn")}</h2>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-green-200 max-w-xl mx-auto">
            {tCommon("affiliateDisclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
