import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ImageGallery from "@/components/common/ImageGallery";
import YouTubeVideo from "@/components/common/YouTubeVideo";
import AmazonButton from "@/components/common/AmazonButton";
import ProductSchema from "@/components/seo/ProductSchema";
import { productImages, youtubeVideos } from "@/lib/images";
import { type Locale } from "@/i18n/config";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "product" });

  return {
    title: t("title"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/ecoflow-delta-2`,
      languages: {
        fr: "/fr/ecoflow-delta-2",
        en: "/en/ecoflow-delta-2",
        de: "/de/ecoflow-delta-2",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("metaDescription"),
      images: [productImages.gallery[0].src],
    },
  };
}

const specifications = [
  { key: "capacity", value: "1024 Wh (extensible à 3072 Wh)" },
  { key: "output", value: "1800W (3400W crête)" },
  { key: "weight", value: "12 kg" },
  { key: "dimensions", value: "40 x 21 x 28 cm" },
  { key: "chargingTime", value: "50 min (0-80%), 80 min (100%)" },
  { key: "batteryType", value: "LFP (Lithium Fer Phosphate)" },
  { key: "warranty", value: "5 ans" },
  { key: "lifespan", value: "3000+ cycles (10 ans)" },
];

export default function ProductPage() {
  const t = useTranslations("product");
  const tCommon = useTranslations("common");

  const pros = t.raw("pros.list") as string[];
  const cons = t.raw("cons.list") as string[];

  return (
    <>
      <ProductSchema />

      {/* Hero Section with Product Gallery */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Gallery */}
            <div className="order-2 lg:order-1">
              <ImageGallery images={productImages.gallery} />
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-medium rounded-full mb-4">
                ⭐ Best-seller 2024
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {t("title")}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {t("overview.description")}
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600">
                    1024 Wh
                  </div>
                  <div className="text-sm text-gray-500">Capacité</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600">1800W</div>
                  <div className="text-sm text-gray-500">Puissance</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600">
                    50 min
                  </div>
                  <div className="text-sm text-gray-500">Charge 0-80%</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600">5 ans</div>
                  <div className="text-sm text-gray-500">Garantie</div>
                </div>
              </div>

              <AmazonButton size="large" className="w-full sm:w-auto" />
              <p className="mt-3 text-sm text-gray-500">
                {tCommon("affiliateDisclaimer")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Découvrez l&apos;EcoFlow DELTA 2 en vidéo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            Regardez notre présentation complète pour voir toutes les
            fonctionnalités en action.
          </p>
          <div className="max-w-4xl mx-auto">
            <YouTubeVideo
              videoId={youtubeVideos.productReview}
              title="Test complet EcoFlow DELTA 2 - La meilleure station portable ?"
            />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("overview.title")}
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("overview.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            {t("specs.title")}
          </h2>
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {specifications.map((spec, index) => (
                  <tr
                    key={spec.key}
                    className={
                      index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : ""
                    }
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {t(`specs.${spec.key}`)}
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-6 flex items-center">
                <CheckIcon className="w-8 h-8 mr-3" />
                {t("pros.title")}
              </h3>
              <ul className="space-y-4">
                {pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center">
                <XMarkIcon className="w-8 h-8 mr-3" />
                {t("cons.title")}
              </h3>
              <ul className="space-y-4">
                {cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <XMarkIcon className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Polyvalente pour tous vos besoins
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            La DELTA 2 s&apos;adapte à tous vos usages : camping, maison,
            télétravail...
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80"
                alt="EcoFlow DELTA 2 en camping"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl">
                  Camping & Vanlife
                </h3>
                <p className="text-gray-200 text-sm">
                  Autonomie totale en nature
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                alt="EcoFlow DELTA 2 à la maison"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl">À la maison</h3>
                <p className="text-gray-200 text-sm">Backup en cas de panne</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80"
                alt="EcoFlow DELTA 2 pour télétravail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl">Télétravail</h3>
                <p className="text-gray-200 text-sm">Travaillez de partout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à passer à l&apos;autonomie énergétique ?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Rejoignez des milliers d&apos;utilisateurs satisfaits de
            l&apos;EcoFlow DELTA 2.
          </p>
          <AmazonButton size="large" variant="light" />
          <p className="mt-6 text-sm text-green-200 max-w-xl mx-auto">
            {tCommon("affiliateDisclaimer")}
          </p>
        </div>
      </section>
    </>
  );
}
