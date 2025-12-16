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
  const t = await getTranslations({ locale, namespace: "usages.camping" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/usages/camping`,
      languages: {
        fr: "/fr/usages/camping",
        en: "/en/usages/camping",
        de: "/de/usages/camping",
      },
    },
  };
}

const equipments = [
  { name: "Glacière électrique", power: "60W", autonomy: "~17h" },
  { name: "Éclairage LED", power: "10W", autonomy: "~100h" },
  { name: "Laptop", power: "65W", autonomy: "~15h" },
  { name: "Drone (recharge)", power: "100W", autonomy: "~10 charges" },
  { name: "Appareil photo", power: "15W", autonomy: "~68h" },
  { name: "Cafetière électrique", power: "1000W", autonomy: "~10 cafés" },
  { name: "Plaque de cuisson", power: "1800W", autonomy: "~30min" },
];

export default async function CampingPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages.camping" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero with Background Image */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={usageImages.camping.hero}
            alt="Camping avec EcoFlow DELTA 2"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-6xl mb-4">🏕️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Pourquoi l&apos;EcoFlow DELTA 2 pour le camping ?
            </h2>
            <div className="prose prose-lg dark:prose-invert mb-12">
              <p>
                L&apos;EcoFlow DELTA 2 est le compagnon idéal pour le camping et
                la vanlife. Avec sa capacité de 1024 Wh et sa puissance de
                1800W, elle peut alimenter tous vos équipements essentiels
                pendant plusieurs jours.
              </p>
              <ul>
                <li>
                  <strong>Portabilité</strong> : 12 kg avec poignées intégrées
                </li>
                <li>
                  <strong>Recharge solaire</strong> : Compatible panneaux
                  jusqu&apos;à 500W
                </li>
                <li>
                  <strong>Silencieuse</strong> : Fonctionne sans bruit dans la
                  nature
                </li>
                <li>
                  <strong>Résistante</strong> : Conçue pour l&apos;extérieur
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Équipements compatibles
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
                  {equipments.map((eq, index) => (
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
                      <td className="px-6 py-4 text-center text-green-600 dark:text-green-400 font-medium">
                        {eq.autonomy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Configuration solaire recommandée
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-12">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour une autonomie complète en camping, nous recommandons de
                coupler l&apos;EcoFlow DELTA 2 avec des panneaux solaires :
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  • <strong>2 x panneaux 100W</strong> : Recharge en ~5-6h
                  (plein soleil)
                </li>
                <li>
                  • <strong>2 x panneaux 220W</strong> : Recharge en ~2-3h
                  (plein soleil)
                </li>
                <li>
                  • <strong>1 x panneau 400W</strong> : Recharge en ~3h (plein
                  soleil)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt pour l&apos;aventure ?
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
