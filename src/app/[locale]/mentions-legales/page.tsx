import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return {
    title: t("title"),
    description: "Mentions légales du site EcoFlow DELTA 2 Guide",
    robots: "noindex, nofollow",
    alternates: {
      canonical: `/${locale}/mentions-legales`,
    },
  };
}

export default function MentionsLegalesPage() {
  const t = useTranslations("legal");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t("title")}
          </h1>

          <article className="prose prose-lg dark:prose-invert">
            <h2>Éditeur du site</h2>
            <p>
              Ce site est édité par [Votre nom ou raison sociale]<br />
              Adresse : [Votre adresse]<br />
              Email : [votre@email.com]
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par [Nom de l&apos;hébergeur]<br />
              Adresse : [Adresse de l&apos;hébergeur]
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos, 
              logos) sont protégés par le droit d&apos;auteur. Toute reproduction, même 
              partielle, est interdite sans autorisation préalable.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations fournies sur ce site le sont à titre indicatif. 
              Nous nous efforçons de maintenir des informations exactes et à jour, 
              mais ne pouvons garantir l&apos;exactitude de toutes les informations.
            </p>

            <h2>Programme d&apos;affiliation Amazon</h2>
            <p className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
              <strong>En tant que Partenaire Amazon, ce site réalise un bénéfice 
              sur les achats remplissant les conditions requises.</strong>
            </p>
            <p>
              Ce site participe au Programme Partenaires d&apos;Amazon EU, un programme 
              d&apos;affiliation conçu pour permettre à des sites de percevoir une 
              rémunération grâce à la création de liens vers Amazon.fr.
            </p>

            <h2>Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers d&apos;autres sites. Nous n&apos;exerçons 
              aucun contrôle sur ces sites et déclinons toute responsabilité quant 
              à leur contenu.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez 
              nous contacter à l&apos;adresse : [votre@email.com]
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
