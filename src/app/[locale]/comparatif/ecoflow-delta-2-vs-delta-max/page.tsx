import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: "EcoFlow DELTA 2 vs DELTA Max - Comparatif complet",
    description:
      "Quelle EcoFlow choisir ? Comparaison détaillée entre DELTA 2 et DELTA Max. Capacité, puissance, prix.",
    alternates: {
      canonical: `/${locale}/comparatif/ecoflow-delta-2-vs-delta-max`,
      languages: {
        fr: "/fr/comparatif/ecoflow-delta-2-vs-delta-max",
        en: "/en/comparatif/ecoflow-delta-2-vs-delta-max",
        de: "/de/comparatif/ecoflow-delta-2-vs-delta-max",
      },
    },
  };
}

const comparisonData = [
  {
    feature: "Capacité",
    delta2: "1024 Wh",
    deltaMax: "2016 Wh",
    winner: "deltaMax",
  },
  {
    feature: "Extensible jusqu'à",
    delta2: "3 kWh",
    deltaMax: "6 kWh",
    winner: "deltaMax",
  },
  {
    feature: "Puissance de sortie",
    delta2: "1800W",
    deltaMax: "2400W",
    winner: "deltaMax",
  },
  {
    feature: "Puissance crête",
    delta2: "3400W",
    deltaMax: "5000W",
    winner: "deltaMax",
  },
  { feature: "Poids", delta2: "12 kg", deltaMax: "22 kg", winner: "delta2" },
  {
    feature: "Temps de charge (AC)",
    delta2: "50 min (80%)",
    deltaMax: "1.6h (80%)",
    winner: "delta2",
  },
  {
    feature: "Charge solaire max",
    delta2: "500W",
    deltaMax: "800W",
    winner: "deltaMax",
  },
  {
    feature: "Type de batterie",
    delta2: "LFP",
    deltaMax: "NCM",
    winner: "delta2",
  },
  {
    feature: "Cycles de vie",
    delta2: "3000+",
    deltaMax: "800+",
    winner: "delta2",
  },
  {
    feature: "Prix indicatif",
    delta2: "~999€",
    deltaMax: "~1999€",
    winner: "delta2",
  },
];

export default async function VsDeltaMaxPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comparisons.table" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            EcoFlow DELTA 2 vs DELTA Max
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Quelle EcoFlow correspond le mieux à vos besoins ? Comparaison
            détaillée.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Tableau comparatif
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 dark:text-white">
                    {t("feature")}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600 dark:text-green-400">
                    EcoFlow DELTA 2
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-blue-600 dark:text-blue-400">
                    EcoFlow DELTA Max
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-gray-700/50"
                    }
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {row.feature}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.winner === "delta2"
                          ? "text-green-600 dark:text-green-400 font-semibold"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {row.delta2} {row.winner === "delta2" && "✓"}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.winner === "deltaMax"
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {row.deltaMax} {row.winner === "deltaMax" && "✓"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Comment choisir ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-green-600 mb-4">
                Choisissez DELTA 2 si...
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Vous cherchez un bon rapport qualité/prix</li>
                <li>✓ La portabilité est importante (12 kg vs 22 kg)</li>
                <li>✓ Vous préférez une batterie LFP longue durée</li>
                <li>✓ Vos besoins sont modérés (1024 Wh suffisent)</li>
                <li>✓ La recharge rapide est prioritaire</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                Choisissez DELTA Max si...
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Vous avez besoin d&apos;une grande capacité (2016 Wh)</li>
                <li>✓ Vous alimentez des appareils puissants (2400W)</li>
                <li>✓ Vous voulez une extensibilité maximale (6 kWh)</li>
                <li>✓ Le poids n&apos;est pas un critère</li>
                <li>✓ Vous avez le budget supérieur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            DELTA 2 : Le meilleur rapport qualité/prix
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
