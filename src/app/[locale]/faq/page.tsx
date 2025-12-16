import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import FAQSchema from "@/components/seo/FAQSchema";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        fr: "/fr/faq",
        en: "/en/faq",
        de: "/de/faq",
      },
    },
  };
}

export default function FAQPage() {
  const t = useTranslations("faq");
  const tCommon = useTranslations("common");

  const questions = t.raw("questions") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <>
      <FAQSchema questions={questions} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            {t("metaDescription")}
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {questions.map((item, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {item.question}
                    </h2>
                    <span className="text-2xl text-amber-500 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Encore des questions ? Découvrez le produit
          </h2>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-green-200 max-w-xl mx-auto">
            {tCommon("affiliateDisclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
