# EcoFlow DELTA 2 - Site Web Multilingue

Site web informatif et optimisé SEO présentant la station d'énergie EcoFlow DELTA 2, avec liens d'affiliation Amazon.

## 🚀 Stack Technique

- **Framework**: Next.js 14+ (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **i18n**: next-intl
- **Icons**: Heroicons
- **SEO**: Schema.org, sitemap.xml, robots.txt

## 🌍 Langues supportées

- 🇫🇷 Français (par défaut)
- 🇬🇧 Anglais
- 🇩🇪 Allemand

## 📁 Structure du projet

```
src/
├── app/
│   ├── [locale]/           # Pages multilingues
│   │   ├── page.tsx        # Page d'accueil
│   │   ├── ecoflow-delta-2/
│   │   ├── comparatif/
│   │   ├── usages/
│   │   ├── guide/
│   │   ├── faq/
│   │   ├── blog/
│   │   ├── mentions-legales/
│   │   └── politique-confidentialite/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── common/             # Composants réutilisables
│   ├── layout/             # Header, Footer
│   └── seo/                # Schemas JSON-LD
├── i18n/                   # Configuration i18n
└── messages/               # Fichiers de traduction
    ├── fr.json
    ├── en.json
    └── de.json
```

## 🛠️ Installation

```bash
# Cloner le projet
git clone <repository-url>
cd station_electrique

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## 📋 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_BASE_URL=https://votre-domaine.com
```

### Affiliation Amazon

Modifiez le tag d'affiliation dans `src/components/common/AmazonButton.tsx` :

```typescript
const AMAZON_AFFILIATE_TAG = "votre-tag-21";
```

## 🔍 SEO

### Fonctionnalités SEO incluses

- ✅ Génération automatique du sitemap.xml
- ✅ Configuration robots.txt
- ✅ Balises hreflang pour le multilingue
- ✅ Schema.org (Product, FAQ)
- ✅ Meta tags optimisés
- ✅ URLs canoniques

### Structure des URLs

```
/fr/                        # Page d'accueil FR
/en/                        # Page d'accueil EN
/de/                        # Page d'accueil DE
/fr/ecoflow-delta-2         # Page produit
/fr/comparatif              # Comparatifs
/fr/usages/camping          # Usage camping
/fr/guide/choisir-station-energie
/fr/faq
```

## 📱 Responsive Design

- Mobile-first approach
- Tableaux scrollables sur mobile
- Navigation hamburger sur mobile
- CTAs optimisés pour touch

## 🍪 Conformité RGPD

- Bandeau de consentement cookies
- Politique de confidentialité
- Mentions légales

## 📊 Analytics (à configurer)

1. Google Analytics 4
2. Google Search Console
3. Suivi des clics affiliés

## 🚀 Déploiement

### Vercel (recommandé)

```bash
npm run build
vercel deploy
```

### Export statique

```bash
npm run build
# Les fichiers sont dans /out
```

## 📝 Checklist avant mise en production

- [ ] Remplacer le tag Amazon (`votre-tag-21`)
- [ ] Configurer le domaine dans les variables d'environnement
- [ ] Ajouter les vraies images produit
- [ ] Compléter les mentions légales
- [ ] Configurer Google Analytics
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Tester les Core Web Vitals
- [ ] Vérifier l'indexation des pages

## 📄 Licence

Ce projet est sous licence MIT.

---

**Note**: Ce site participe au Programme Partenaires d'Amazon EU.
