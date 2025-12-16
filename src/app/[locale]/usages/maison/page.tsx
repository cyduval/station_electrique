import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages.home" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/usages/maison`,
      languages: {
        fr: "/fr/usages/maison",
        en: "/en/usages/maison",
        de: "/de/usages/maison",
      },
    },
  };
}

const homeEquipments = [
  { name: "Réfrigérateur", power: "150W", autonomy: "~6-8h" },
  { name: "Congélateur", power: "100W", autonomy: "~10h" },
  { name: "Box internet + TV", power: "80W", autonomy: "~12h" },
  { name: "Éclairage LED (5 ampoules)", power: "50W", autonomy: "~20h" },
  { name: "Chargeur téléphone", power: "20W", autonomy: "~50 charges" },
  { name: "Ordinateur portable", power: "65W", autonomy: "~15h" },
  { name: "Micro-ondes", power: "1200W", autonomy: "~45min" },
];

export default async function MaisonPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "usages.home" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🏠</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Protection contre les pannes électriques
            </h2>
            <div className="prose prose-lg dark:prose-invert mb-12">
              <p>
                Les coupures de courant sont de plus en plus fréquentes. L&apos;EcoFlow DELTA 2 
                vous permet de maintenir vos appareils essentiels en fonctionnement pendant 
                plusieurs heures, voire plusieurs jours avec une recharge solaire.
              </p>
            </div>

            {/* EPS Feature */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-4">
                ⚡ Fonction EPS (Emergency Power Supply)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La fonction EPS permet à l&apos;EcoFlow DELTA 2 de basculer automatiquement 
                sur batterie en moins de 30 millisecondes en cas de coupure de courant.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ Protection des appareils sensibles (box internet, NAS, etc.)</li>
                <li>✓ Basculement automatique sans intervention</li>
                <li>✓ Temps de commutation &lt; 30 ms</li>
                <li>✓ Idéal pour le télétravail</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Autonomie des équipements domestiques
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
                  {homeEquipments.map((eq, index) => (
                    <tr
                      key={eq.name}
                      className={index % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-700/50"}
                    >
                      <td className="px-6 py-4 text-gray-900 dark:text-white">
                        {eq.name}
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600 dark:text-gray-300">
                        {eq.power}
                      </td>
                      <td className="px-6 py-4 text-center text-blue-600 dark:text-blue-400 font-medium">
                        {eq.autonomy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Scénario type : Panne électrique
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Situation :</strong> Panne de courant de 6 heures en soirée
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Appareils maintenus :</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>• Réfrigérateur (150W)</li>
                <li>• Éclairage LED (30W)</li>
                <li>• Box internet (20W)</li>
                <li>• Recharge téléphones (20W)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Consommation totale :</strong> ~220W<br />
                <strong>Autonomie avec DELTA 2 :</strong> ~4-5 heures ✓
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sécurisez votre foyer
          </h2>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-blue-200 max-w-xl mx-auto">
            {tCommon("affiliateDisclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
