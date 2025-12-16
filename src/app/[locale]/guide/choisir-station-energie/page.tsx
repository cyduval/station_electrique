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
  const t = await getTranslations({
    locale,
    namespace: "guides.chooseStation",
  });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/guide/choisir-station-energie`,
      languages: {
        fr: "/fr/guide/choisir-station-energie",
        en: "/en/guide/choisir-station-energie",
        de: "/de/guide/choisir-station-energie",
      },
    },
  };
}

export default async function ChoisirStationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "guides.chooseStation",
  });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2>1. Évaluez vos besoins en puissance</h2>
            <p>
              La première étape est de déterminer quels appareils vous souhaitez
              alimenter et leur consommation électrique.
            </p>
            <ul>
              <li>
                <strong>Usage léger</strong> (smartphones, laptops, éclairage) :
                300-500 Wh
              </li>
              <li>
                <strong>Usage moyen</strong> (réfrigérateur, TV, équipement
                camping) : 500-1000 Wh
              </li>
              <li>
                <strong>Usage intensif</strong> (électroménager, outils) :
                1000-2000+ Wh
              </li>
            </ul>

            <h2>2. Critères essentiels à considérer</h2>

            <h3>Capacité (Wh)</h3>
            <p>
              La capacité en Watt-heures détermine combien de temps vous pouvez
              alimenter vos appareils. Pour calculer : Capacité (Wh) ÷ Puissance
              appareil (W) = Heures d&apos;autonomie.
            </p>

            <h3>Puissance de sortie (W)</h3>
            <p>
              La puissance maximale que peut délivrer la station. Vérifiez que
              vos appareils les plus gourmands ne dépassent pas cette limite.
            </p>

            <h3>Type de batterie</h3>
            <ul>
              <li>
                <strong>LFP (Lithium Fer Phosphate)</strong> : Plus durable
                (3000+ cycles), plus sûre, recommandée
              </li>
              <li>
                <strong>NCM/NMC</strong> : Plus légère mais moins de cycles
                (500-800)
              </li>
            </ul>

            <h3>Vitesse de recharge</h3>
            <p>
              Certaines stations comme l&apos;EcoFlow DELTA 2 offrent une
              recharge ultra-rapide (0-80% en 50 min), idéale pour les
              situations d&apos;urgence.
            </p>

            <h3>Options de recharge</h3>
            <ul>
              <li>Secteur AC</li>
              <li>Panneaux solaires</li>
              <li>Prise voiture 12V</li>
              <li>Combinaison (solar + AC)</li>
            </ul>

            <h2>3. Fonctionnalités avancées</h2>
            <ul>
              <li>
                <strong>EPS/UPS</strong> : Basculement automatique en cas de
                coupure (&lt;30ms)
              </li>
              <li>
                <strong>Application mobile</strong> : Contrôle et monitoring à
                distance
              </li>
              <li>
                <strong>Extensibilité</strong> : Possibilité d&apos;ajouter des
                batteries supplémentaires
              </li>
              <li>
                <strong>Multiples sorties</strong> : AC, USB-A, USB-C, DC
              </li>
            </ul>

            <h2>4. Notre recommandation</h2>
            <p>
              Pour la plupart des utilisateurs, l&apos;
              <strong>EcoFlow DELTA 2</strong> représente le meilleur compromis
              :
            </p>
            <ul>
              <li>1024 Wh de capacité (extensible à 3 kWh)</li>
              <li>1800W de puissance (3400W crête)</li>
              <li>Batterie LFP 3000+ cycles</li>
              <li>Recharge rapide 50 min (0-80%)</li>
              <li>Application mobile intuitive</li>
              <li>5 ans de garantie</li>
            </ul>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Découvrez l&apos;EcoFlow DELTA 2
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
