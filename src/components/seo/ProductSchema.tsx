export default function ProductSchema() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "EcoFlow DELTA 2",
    description:
      "Station d'énergie portable de nouvelle génération avec 1024 Wh de capacité et 1800W de puissance de sortie.",
    brand: {
      "@type": "Brand",
      name: "EcoFlow",
    },
    image: "https://example.com/ecoflow-delta-2.jpg",
    sku: "DELTA2",
    mpn: "ZMR330-EU",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: "899",
      highPrice: "1099",
      offerCount: "10",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacité",
        value: "1024 Wh",
      },
      {
        "@type": "PropertyValue",
        name: "Puissance de sortie",
        value: "1800W (3400W crête)",
      },
      {
        "@type": "PropertyValue",
        name: "Poids",
        value: "12 kg",
      },
      {
        "@type": "PropertyValue",
        name: "Type de batterie",
        value: "LFP (Lithium Fer Phosphate)",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  );
}
