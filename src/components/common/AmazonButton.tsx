"use client";

import { useTranslations } from "next-intl";

interface AmazonButtonProps {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "light";
  productId?: string;
  className?: string;
}

const AMAZON_AFFILIATE_TAG = "votre-tag-21"; // À remplacer par votre tag affilié

export default function AmazonButton({
  size = "medium",
  variant = "primary",
  productId = "B0B9XN73SJ", // EcoFlow DELTA 2 ASIN
  className = "",
}: AmazonButtonProps) {
  const t = useTranslations("common");

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg hover:shadow-xl",
    light:
      "bg-white hover:bg-gray-100 text-green-700 shadow-lg hover:shadow-xl",
  };

  const amazonUrl = `https://www.amazon.fr/dp/${productId}?tag=${AMAZON_AFFILIATE_TAG}`;

  return (
    <a
      href={amazonUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`
        inline-flex items-center justify-center font-semibold rounded-lg transition-all
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      <svg
        className="w-5 h-5 mr-2"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595.394-.15.763-.3 1.108-.447.201-.09.378-.057.512.097.135.155.09.316-.137.483a18.95 18.95 0 01-1.81.93c-2.548 1.114-5.24 1.67-8.074 1.67-4.26 0-8.16-.994-11.702-2.983-.172-.1-.236-.2-.19-.298l.178-.358a.167.167 0 01.092-.076.153.153 0 01.112.008zm5.924-5.31c.053-.05.123-.035.21.044l1.136 1.03c.051.046.061.104.031.172-.512.927-.768 1.931-.768 3.013 0 1.132.228 2.118.684 2.959.456.84 1.074 1.456 1.854 1.847.78.392 1.627.588 2.54.588.813 0 1.563-.144 2.249-.431.687-.288 1.255-.687 1.706-1.197.45-.51.774-1.096.972-1.757.199-.662.298-1.367.298-2.117v-9.14c0-.392.124-.588.373-.588h3.17c.249 0 .374.196.374.588v9.14c0 1.234-.192 2.37-.575 3.409-.384 1.038-.946 1.941-1.686 2.708-.74.768-1.648 1.36-2.724 1.78-1.076.418-2.292.628-3.648.628-1.407 0-2.667-.21-3.78-.628-1.113-.42-2.061-1.012-2.843-1.78-.783-.767-1.381-1.67-1.795-2.708-.413-1.039-.62-2.175-.62-3.409 0-1.184.195-2.278.584-3.282.084-.217.176-.202.275.046l.588 1.49z"/>
      </svg>
      {t("seePrice")}
    </a>
  );
}
