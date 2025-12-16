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
    title: "EcoFlow DELTA 2 vs Jackery Explorer 1000 - Comparatif complet",
    description:
      "Comparaison détaillée entre l'EcoFlow DELTA 2 et le Jackery Explorer 1000. Capacité, puissance, prix et verdict.",
    alternates: {
      canonical: `/${locale}/comparatif/ecoflow-delta-2-vs-jackery`,
      languages: {
        fr: "/fr/comparatif/ecoflow-delta-2-vs-jackery",
        en: "/en/comparatif/ecoflow-delta-2-vs-jackery",
        de: "/de/comparatif/ecoflow-delta-2-vs-jackery",
      },
    },
  };
}

const comparisonData = [
  {
    feature: "Capacité",
    delta2: "1024 Wh",
    jackery: "1002 Wh",
    winner: "delta2",
  },
  {
    feature: "Puissance de sortie",
    delta2: "1800W",
    jackery: "1000W",
    winner: "delta2",
  },
  {
    feature: "Puissance crête",
    delta2: "3400W",
    jackery: "2000W",
    winner: "delta2",
  },
  { feature: "Poids", delta2: "12 kg", jackery: "10.6 kg", winner: "jackery" },
  {
    feature: "Temps de charge (AC)",
    delta2: "50 min (80%)",
    jackery: "5.5h",
    winner: "delta2",
  },
  {
    feature: "Charge solaire max",
    delta2: "500W",
    jackery: "200W",
    winner: "delta2",
  },
  {
    feature: "Type de batterie",
    delta2: "LFP",
    jackery: "Li-ion NMC",
    winner: "delta2",
  },
  {
    feature: "Cycles de vie",
    delta2: "3000+",
    jackery: "500+",
    winner: "delta2",
  },
  { feature: "Garantie", delta2: "5 ans", jackery: "2 ans", winner: "delta2" },
  {
    feature: "Application mobile",
    delta2: "Oui",
    jackery: "Non",
    winner: "delta2",
  },
];

export default async function VsJackeryPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "comparisons.table" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            EcoFlow DELTA 2 vs Jackery Explorer 1000
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Comparaison détaillée entre deux des stations d&apos;énergie les
            plus populaires du marché.
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
                  <th className="px-6 py-4 text-center font-semibold text-orange-600 dark:text-orange-400">
                    Jackery Explorer 1000
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
                        row.winner === "jackery"
                          ? "text-orange-600 dark:text-orange-400 font-semibold"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {row.jackery} {row.winner === "jackery" && "✓"}
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
            Notre verdict
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              L&apos;<strong>EcoFlow DELTA 2</strong> surpasse le Jackery
              Explorer 1000 sur presque tous les critères importants :
            </p>
            <ul>
              <li>
                <strong>Puissance supérieure</strong> : 1800W contre 1000W,
                permettant d&apos;alimenter plus d&apos;appareils
              </li>
              <li>
                <strong>Charge ultra-rapide</strong> : 50 minutes pour atteindre
                80% contre 5.5 heures
              </li>
              <li>
                <strong>Batterie LFP</strong> : 3000+ cycles contre 500+, soit
                une durée de vie 6x plus longue
              </li>
              <li>
                <strong>Application mobile</strong> : Contrôle à distance et
                monitoring
              </li>
              <li>
                <strong>Garantie étendue</strong> : 5 ans contre 2 ans
              </li>
            </ul>
            <p>
              Le Jackery reste légèrement plus léger (10.6 kg vs 12 kg), mais
              l&apos;EcoFlow DELTA 2 offre un bien meilleur rapport qualité/prix
              sur le long terme grâce à sa durée de vie supérieure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Choisissez l&apos;EcoFlow DELTA 2
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
