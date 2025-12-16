import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import AmazonButton from "@/components/common/AmazonButton";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides.powerOutage" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/guide/panne-electrique-que-faire`,
      languages: {
        fr: "/fr/guide/panne-electrique-que-faire",
        en: "/en/guide/panne-electrique-que-faire",
        de: "/de/guide/panne-electrique-que-faire",
      },
    },
  };
}

export default async function PanneElectriquePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guides.powerOutage" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>Avant la panne : Se préparer</h2>
            
            <h3>Kit d&apos;urgence à préparer</h3>
            <ul>
              <li>✓ Station d&apos;énergie portable (chargée à 100%)</li>
              <li>✓ Lampes de poche / lampes frontales</li>
              <li>✓ Batteries de rechange</li>
              <li>✓ Radio à piles ou à manivelle</li>
              <li>✓ Eau potable (2L par personne par jour)</li>
              <li>✓ Nourriture non périssable</li>
              <li>✓ Trousse de premiers secours</li>
              <li>✓ Couvertures chaudes</li>
            </ul>

            <h3>Préparation de votre station d&apos;énergie</h3>
            <ul>
              <li>Maintenez-la chargée entre 50% et 100%</li>
              <li>Testez-la régulièrement</li>
              <li>Gardez des panneaux solaires prêts à l&apos;emploi</li>
              <li>Configurez la fonction EPS si disponible</li>
            </ul>

            <h2>Pendant la panne : Premiers réflexes</h2>
            
            <h3>1. Vérifier l&apos;étendue de la panne</h3>
            <p>
              Regardez si vos voisins sont également affectés. Vérifiez votre tableau 
              électrique (disjoncteur). Consultez le site de votre fournisseur d&apos;électricité.
            </p>

            <h3>2. Prioriser les appareils essentiels</h3>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 not-prose">
              <h4 className="font-bold text-red-700 dark:text-red-400 mb-3">
                Priorité haute
              </h4>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Réfrigérateur/Congélateur (préserver les aliments)</li>
                <li>• Équipements médicaux</li>
                <li>• Téléphones (communication)</li>
                <li>• Éclairage minimal</li>
              </ul>
            </div>

            <h3>3. Économiser l&apos;énergie</h3>
            <ul>
              <li>N&apos;ouvrez le réfrigérateur que si nécessaire</li>
              <li>Utilisez l&apos;éclairage LED basse consommation</li>
              <li>Désactivez les appareils en veille</li>
              <li>Rechargez tous les appareils dès que possible</li>
            </ul>

            <h2>Combien de temps peut durer une panne ?</h2>
            <table className="not-prose w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-4 py-3 text-left">Type de panne</th>
                  <th className="px-4 py-3 text-left">Durée typique</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b dark:border-gray-700">Panne locale</td>
                  <td className="px-4 py-3 border-b dark:border-gray-700">1-4 heures</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b dark:border-gray-700">Tempête/Intempéries</td>
                  <td className="px-4 py-3 border-b dark:border-gray-700">4-24 heures</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b dark:border-gray-700">Catastrophe naturelle</td>
                  <td className="px-4 py-3 border-b dark:border-gray-700">1-7 jours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Panne majeure du réseau</td>
                  <td className="px-4 py-3">Plusieurs jours à semaines</td>
                </tr>
              </tbody>
            </table>

            <h2>Pourquoi une station d&apos;énergie ?</h2>
            <p>
              Contrairement aux groupes électrogènes à essence, une station d&apos;énergie 
              portable comme l&apos;EcoFlow DELTA 2 offre :
            </p>
            <ul>
              <li>✓ Utilisation en intérieur (pas d&apos;émissions)</li>
              <li>✓ Fonctionnement silencieux</li>
              <li>✓ Pas de carburant à stocker</li>
              <li>✓ Recharge solaire possible</li>
              <li>✓ Démarrage instantané</li>
              <li>✓ Aucun entretien</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Préparez-vous avec l&apos;EcoFlow DELTA 2
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
