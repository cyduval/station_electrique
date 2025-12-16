import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  BoltIcon, 
  SunIcon, 
  Battery100Icon,
  DevicePhoneMobileIcon 
} from "@heroicons/react/24/outline";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("siteName"),
    description: t("siteDescription"),
    keywords: t("keywords"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        de: "/de",
      },
    },
  };
}

export default function HomePage() {
  const t = useTranslations();

  const features = [
    {
      icon: Battery100Icon,
      title: t("home.features.capacity.title"),
      description: t("home.features.capacity.description"),
    },
    {
      icon: BoltIcon,
      title: t("home.features.charging.title"),
      description: t("home.features.charging.description"),
    },
    {
      icon: SunIcon,
      title: t("home.features.solar.title"),
      description: t("home.features.solar.description"),
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t("home.features.outlets.title"),
      description: t("home.features.outlets.description"),
    },
  ];

  const useCases = [
    {
      key: "home",
      title: t("home.useCases.home.title"),
      description: t("home.useCases.home.description"),
      href: "usages/maison",
      emoji: "🏠",
    },
    {
      key: "camping",
      title: t("home.useCases.camping.title"),
      description: t("home.useCases.camping.description"),
      href: "usages/camping",
      emoji: "🏕️",
    },
    {
      key: "work",
      title: t("home.useCases.work.title"),
      description: t("home.useCases.work.description"),
      href: "usages/teletravail",
      emoji: "💻",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-4">
              {t("home.hero.subtitle")}
            </p>
            <p className="text-lg text-green-200 mb-8 max-w-2xl mx-auto">
              {t("home.hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="ecoflow-delta-2"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                {t("home.hero.cta")}
              </Link>
              <AmazonButton size="large" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("home.features.title")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {t("home.useCases.title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Link
                key={useCase.key}
                href={useCase.href}
                className="block p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{useCase.emoji}</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {useCase.description}
                </p>
                <span className="inline-flex items-center mt-4 text-green-600 dark:text-green-400 font-medium">
                  {t("common.learnMore")} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t("home.cta.title")}
          </h2>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-green-200 max-w-xl mx-auto">
            {t("home.cta.disclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
