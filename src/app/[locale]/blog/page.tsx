import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title") + " | EcoFlow DELTA 2",
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        fr: "/fr/blog",
        en: "/en/blog",
        de: "/de/blog",
      },
    },
  };
}

// Exemple d'articles de blog (à remplacer par une source de données dynamique)
const blogPosts = [
  {
    slug: "meilleurs-panneaux-solaires-portables-2024",
    title: "Les meilleurs panneaux solaires portables en 2024",
    excerpt:
      "Guide complet pour choisir vos panneaux solaires portables et les coupler avec votre station d'énergie.",
    date: "2024-12-10",
    image: "☀️",
    readingTime: 8,
  },
  {
    slug: "preparer-coupure-courant-hiver",
    title: "Comment se préparer aux coupures de courant en hiver",
    excerpt:
      "Conseils pratiques pour faire face aux pannes électriques pendant la saison froide.",
    date: "2024-12-05",
    image: "❄️",
    readingTime: 6,
  },
  {
    slug: "vanlife-equipement-electrique-essentiel",
    title: "Vanlife : l'équipement électrique essentiel",
    excerpt:
      "Tout ce qu'il faut savoir pour équiper votre van en autonomie énergétique.",
    date: "2024-11-28",
    image: "🚐",
    readingTime: 10,
  },
];

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t("metaDescription")}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4">{post.image}</div>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readingTime} {t("readMore")}
                    </span>
                    <Link
                      href={`blog/${post.slug}`}
                      className="text-green-600 dark:text-green-400 font-medium hover:underline"
                    >
                      {t("readMore")} →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
