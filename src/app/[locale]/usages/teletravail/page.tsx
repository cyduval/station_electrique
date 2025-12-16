import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";
import { usageImages } from "@/lib/images";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages.remotework" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/usages/teletravail`,
      languages: {
        fr: "/fr/usages/teletravail",
        en: "/en/usages/teletravail",
        de: "/de/usages/teletravail",
      },
    },
  };
}

const workEquipments = [
  { name: 'MacBook Pro 16"', power: "100W", autonomy: "~10h" },
  { name: 'Écran externe 27"', power: "40W", autonomy: "~25h" },
  { name: "Box internet / 4G", power: "15W", autonomy: "~68h" },
  { name: "Lampe de bureau LED", power: "10W", autonomy: "~100h" },
  { name: "Webcam + Micro", power: "5W", autonomy: "~200h" },
  { name: "Station d'accueil USB-C", power: "60W", autonomy: "~17h" },
  { name: "Imprimante (en veille)", power: "5W", autonomy: "~200h" },
];

export default async function TeletravailPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages.remotework" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={usageImages.remotework.hero}
            alt="Télétravail avec EcoFlow DELTA 2"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-4">💻</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Travaillez de n&apos;importe où
            </h2>
            <div className="prose prose-lg dark:prose-invert mb-12">
              <p>
                Le télétravail ne doit plus être limité à votre bureau. Avec
                l&apos;EcoFlow DELTA 2, transformez n&apos;importe quel endroit
                en espace de travail : terrasse, jardin, café, co-working, ou
                même en pleine nature.
              </p>
              <p>
                Plus de crainte des coupures de courant pendant vos
                visioconférences importantes !
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🔌</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  6 prises AC
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Branchez tous vos équipements simultanément
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Recharge rapide
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  80% en 50 minutes pour les urgences
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  App mobile
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Surveillez l&apos;autonomie à distance
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Autonomie pour le télétravail
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden mb-12">
              <table className="w-full">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                      Équipement
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                      Puissance
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 dark:text-white">
                      Autonomie estimée
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workEquipments.map((eq, index) => (
                    <tr
                      key={eq.name}
                      className={
                        index % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-700/50"
                      }
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        {eq.name}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                        {eq.power}
                      </td>
                      <td className="px-6 py-4 text-center text-purple-600 dark:text-purple-400 font-medium">
                        {eq.autonomy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Setup télétravail type
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Configuration classique :</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>• Laptop (65W)</li>
                <li>• Écran externe (40W)</li>
                <li>• Box internet (15W)</li>
                <li>• Éclairage (10W)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Consommation totale :</strong> ~130W
                <br />
                <strong>Autonomie avec DELTA 2 :</strong> ~7-8 heures de travail
                ✓
              </p>
              <p className="mt-4 text-purple-600 dark:text-purple-400 font-medium">
                Soit une journée complète de télétravail !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Libérez votre espace de travail
          </h2>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-purple-200 max-w-xl mx-auto">
            {tCommon("affiliateDisclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
