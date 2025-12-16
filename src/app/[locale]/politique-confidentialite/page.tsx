import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });

  return {
    title: t("title"),
    description: "Politique de confidentialité du site EcoFlow DELTA 2 Guide",
    robots: "noindex, nofollow",
    alternates: {
      canonical: `/${locale}/politique-confidentialite`,
    },
  };
}

export default function PolitiqueConfidentialitePage() {
  const t = useTranslations("legal.privacy");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t("title")}
          </h1>

          <article className="prose prose-lg dark:prose-invert">
            <p className="lead">
              Cette politique de confidentialité explique comment nous collectons, 
              utilisons et protégeons vos données personnelles.
            </p>

            <h2>Collecte des données</h2>
            <p>
              Ce site ne collecte pas de données personnelles directement. 
              Toutefois, nous utilisons des services tiers qui peuvent collecter 
              des informations :
            </p>

            <h3>Google Analytics</h3>
            <p>
              Nous utilisons Google Analytics pour analyser le trafic de notre site. 
              Ce service peut collecter des informations anonymisées sur votre 
              navigation (pages visitées, durée des visites, appareil utilisé).
            </p>

            <h3>Amazon Associates</h3>
            <p>
              En cliquant sur les liens vers Amazon, vous êtes redirigé vers le 
              site Amazon.fr qui a sa propre politique de confidentialité. 
              Amazon peut déposer des cookies pour le suivi des conversions.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour :
            </p>
            <ul>
              <li>Mesurer l&apos;audience (Google Analytics)</li>
              <li>Mémoriser vos préférences (thème, langue)</li>
              <li>Assurer le fonctionnement technique du site</li>
            </ul>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies 
              ou être alerté lorsqu&apos;un cookie est déposé.
            </p>

            <h2>Vos droits (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), 
              vous disposez des droits suivants :
            </p>
            <ul>
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Pour exercer vos droits ou pour toute question concernant vos 
              données personnelles, contactez-nous à : [votre@email.com]
            </p>

            <h2>Mise à jour</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. 
              La date de dernière mise à jour est indiquée en bas de cette page.
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : Décembre 2024
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
