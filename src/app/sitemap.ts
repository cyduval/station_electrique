import { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ecoflow-delta2-guide.com";

// Définition des routes du site
const routes = [
  "",
  "/ecoflow-delta-2",
  "/comparatif",
  "/comparatif/ecoflow-delta-2-vs-jackery",
  "/comparatif/ecoflow-delta-2-vs-delta-max",
  "/usages",
  "/usages/camping",
  "/usages/maison",
  "/usages/teletravail",
  "/guide",
  "/guide/choisir-station-energie",
  "/guide/panne-electrique-que-faire",
  "/faq",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Générer les entrées pour chaque locale et route
  for (const locale of locales) {
    for (const route of routes) {
      const url = `${baseUrl}/${locale}${route}`;
      
      // Définir la priorité selon l'importance de la page
      let priority = 0.5;
      if (route === "") priority = 1.0;
      else if (route === "/ecoflow-delta-2") priority = 0.9;
      else if (route.startsWith("/comparatif") || route.startsWith("/usages")) priority = 0.8;
      else if (route.startsWith("/guide") || route === "/faq") priority = 0.7;
      
      // Définir la fréquence de changement
      let changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";
      if (route === "/blog") changeFrequency = "daily";
      else if (route.includes("mentions-legales") || route.includes("confidentialite")) changeFrequency = "yearly";

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            fr: `${baseUrl}/fr${route}`,
            en: `${baseUrl}/en${route}`,
            de: `${baseUrl}/de${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
