# Layout System Documentation

## 📋 Vue d'ensemble

Ce système de layout fournit une architecture **propre et sans conflits** pour gérer le sticky header et les breadcrumbs sur toutes les pages de l'application.

### ✨ Principe clé : Séparation sticky / non-sticky

- **Header** : STICKY (toujours visible en haut)
- **Breadcrumb** : NON-STICKY (scroll avec le contenu)
- **Résultat** : Aucun conflit visuel, transitions fluides, code maintenable

## 🏗️ Architecture

### Composants principaux

1. **`PageLayout`** - Layout de base avec Navigation sticky, Breadcrumb non-sticky dans le flow, et Footer
2. **`AutoPageLayout`** - Version automatique qui génère les breadcrumbs selon la route
3. **`useBreadcrumbs`** - Hook pour générer automatiquement les breadcrumbs
4. **`breadcrumbs.ts`** - Configuration centralisée des routes et labels

## 📁 Structure des fichiers

```
src/
├── components/
│   ├── layout/
│   │   ├── PageLayout.tsx        # Layout de base
│   │   ├── AutoPageLayout.tsx    # Layout auto avec breadcrumbs
│   │   ├── index.ts              # Exports centralisés
│   │   └── README.md             # Cette documentation
│   ├── sections/
│   │   ├── navigation.tsx        # Sticky header (z-50, h-73px)
│   │   └── footer.tsx            # Footer global
│   └── ui/
│       └── breadcrumb.tsx        # Composant breadcrumb
├── config/
│   └── breadcrumbs.ts            # Config des routes/labels
└── hooks/
    └── useBreadcrumbs.ts         # Hook pour breadcrumbs auto
```

## 🚀 Utilisation

### Option 1: AutoPageLayout (Recommandé)

Pour les pages standards où le breadcrumb est généré automatiquement :

```tsx
import { AutoPageLayout } from "@/components/layout";

export default function ServicesPage() {
  return (
    <AutoPageLayout>
      <YourContent />
    </AutoPageLayout>
  );
}
```

### Option 2: AutoPageLayout avec titre personnalisé

Pour les pages dynamiques (ex: articles de blog) :

```tsx
import { AutoPageLayout } from "@/components/layout";

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  
  return (
    <AutoPageLayout customTitle={post.title}>
      <ArticleContent post={post} />
    </AutoPageLayout>
  );
}
```

### Option 3: PageLayout manuel

Pour un contrôle total sur les breadcrumbs :

```tsx
import { PageLayout } from "@/components/layout";

export default function CustomPage() {
  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/services" },
      { label: "Sous-catégorie", href: "/services/category" },
      { label: "Page actuelle" }
    ]}>
      <YourContent />
    </PageLayout>
  );
}
```

### Option 4: Désactiver les breadcrumbs

```tsx
import { AutoPageLayout } from "@/components/layout";

export default function NoB readcrumbPage() {
  return (
    <AutoPageLayout disableBreadcrumb>
      <YourContent />
    </AutoPageLayout>
  );
}
```

## ⚙️ Configuration des breadcrumbs

Éditez `src/config/breadcrumbs.ts` pour ajouter/modifier les routes :

```typescript
export const BREADCRUMB_CONFIG: Record<string, BreadcrumbConfig[]> = {
  "/services": [
    { label: "Services" }
  ],
  "/services/[category]": [
    { label: "Services", href: "/services" },
    { label: "Catégorie" } // Sera remplacé par customTitle
  ],
  // Ajoutez vos routes ici
};
```

## 🎨 Spécifications techniques

### Sticky Header (Navigation)
- **Position**: `fixed top-0` (z-index: 50)
- **Hauteur**: 73px
- **Comportement**: 
  - Transparent sur la page d'accueil (non scrollé)
  - Opaque sur les autres pages ou après scroll
  - Transition smooth entre les états
  - **Toujours visible** au scroll

### Breadcrumb (NON-STICKY) ⭐
- **Position**: `static/relative` (dans le flow normal)
- **Padding-top**: 73px pour apparaître juste sous le header sticky
- **Hauteur**: Variable selon le contenu (~45px)
- **Background**: Dégradé subtil pour le différencier du contenu
- **Comportement**:
  - Automatiquement caché sur la page d'accueil
  - Visible sur toutes les autres pages
  - **Scroll avec le contenu** (disparaît au scroll)
  - Animation d'entrée smooth avec framer-motion

### Layout global
- **Structure**: 
  ```
  <div> (flex flex-col min-h-screen)
    <Navigation /> (sticky, z-50, h-73px)
    
    {/* Avec breadcrumb */}
    <div className="pt-[73px]"> (espace pour header)
      <Breadcrumb /> (non-sticky, dans le flow)
    </div>
    <main> (flex-1, contenu)
    
    {/* Sans breadcrumb (homepage) */}
    <main className="pt-[73px]"> (espace pour header)
    
    <Footer />
  </div>
  ```

### Avantages de cette architecture
- ✅ **Zéro conflit visuel** - un seul élément sticky
- ✅ **Performance** - pas de double sticky, moins de re-renders
- ✅ **UX fluide** - breadcrumb disparaît au scroll (pas de distraction)
- ✅ **Code simple** - logique claire et maintenable
- ✅ **Responsive** - fonctionne parfaitement sur mobile

## 🔧 Personnalisation

### Modifier la hauteur du header

1. Changez la hauteur dans `navigation.tsx` (actuellement 73px)
2. Mettez à jour le `pt-[73px]` dans `PageLayout.tsx` (2 occurrences)
3. Documentez la nouvelle hauteur dans ce README

**Exemple pour 80px** :
```tsx
// PageLayout.tsx
<div className="pt-[80px]"> {/* Breadcrumb wrapper */}
<main className="pt-[80px]"> {/* Main sans breadcrumb */}
```

### Ajouter une nouvelle route

```typescript
// src/config/breadcrumbs.ts
export const BREADCRUMB_CONFIG = {
  // ... routes existantes
  "/ma-nouvelle-page": [
    { label: "Ma Page" }
  ],
  "/section/[slug]": [
    { label: "Section", href: "/section" },
    { label: "Détail" }
  ],
};
```

### Modifier les styles du breadcrumb

Éditez `src/components/ui/breadcrumb.tsx` pour personnaliser :
- Couleurs
- Séparateurs
- Animations
- Responsive behavior

## ✅ Best Practices

1. **Utilisez `AutoPageLayout`** par défaut pour la cohérence
2. **Centralisez la config** dans `breadcrumbs.ts`
3. **Évitez les breadcrumbs manuels** sauf cas spéciaux
4. **Testez le responsive** sur mobile/tablet/desktop
5. **Vérifiez le z-index** si vous ajoutez des modals/dropdowns

## 🐛 Troubleshooting

### Les breadcrumbs ne s'affichent pas
- Vérifiez que la route est dans `BREADCRUMB_CONFIG`
- Assurez-vous que `disableBreadcrumb` n'est pas à `true`
- Sur la page d'accueil (`/`), les breadcrumbs sont automatiquement cachés

### Le contenu est caché sous le header sticky
- Le `PageLayout` gère automatiquement le padding-top
- Avec breadcrumb : pas de padding sur `<main>`, le breadcrumb gère l'espacement
- Sans breadcrumb : `<main>` a `pt-[73px]`
- Les sections hero conservent leur propre padding esthétique

### Le breadcrumb est caché par le header
- Le wrapper du breadcrumb a `pt-[73px]` pour apparaître sous le header sticky
- Le breadcrumb est **non-sticky** donc il scroll avec le contenu
- C'est le comportement voulu ✅

### Double espacement en haut de page
- Vérifiez que vous n'avez pas de `pt-[73px]` en double
- Le `PageLayout` gère déjà le padding, ne l'ajoutez pas manuellement dans les pages

## 📊 Migration depuis l'ancien système

Ancienne structure :
```tsx
<div className="min-h-screen bg-bg-primary">
  <Navigation />
  <Breadcrumb items={[{ label: "Services" }]} />
  <main>
    <Content />
  </main>
  <Footer />
</div>
```

Nouvelle structure :
```tsx
<AutoPageLayout>
  <Content />
</AutoPageLayout>
```

**Bénéfices** :
- ✅ Moins de code répété
- ✅ Breadcrumbs automatiques
- ✅ Configuration centralisée
- ✅ Plus facile à maintenir
- ✅ Cohérence garantie

## 🎯 Exemples complets

### Page standard
```tsx
// src/app/services/page.tsx
import { AutoPageLayout } from "@/components/layout";

export default function ServicesPage() {
  return (
    <AutoPageLayout>
      <ServicesHero />
      <ServicesContent />
    </AutoPageLayout>
  );
}
```

### Page d'accueil (pas de breadcrumb)
```tsx
// src/app/page.tsx
import { AutoPageLayout } from "@/components/layout";

export default function HomePage() {
  return (
    <AutoPageLayout>
      {/* Pas de breadcrumb, détecté automatiquement */}
      <Hero />
      <Content />
    </AutoPageLayout>
  );
}
```

### Page dynamique avec breadcrumb personnalisé
```tsx
// src/app/blog/[slug]/page.tsx
import { AutoPageLayout } from "@/components/layout";

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <AutoPageLayout customTitle={post.title}>
      {/* Breadcrumb: Home > Blog > {post.title} */}
      <Article post={post} />
    </AutoPageLayout>
  );
}
```

## 📝 Notes importantes

- Le système est **client-side** (`"use client"`) pour utiliser `usePathname()`
- Les breadcrumbs utilisent **Schema.org markup** pour le SEO
- Les animations utilisent **framer-motion**
- Le style est basé sur **Tailwind CSS**

---

**Dernière mise à jour**: 2025-10-21
**Auteur**: Architecture générée pour Julien Hoang Detective

