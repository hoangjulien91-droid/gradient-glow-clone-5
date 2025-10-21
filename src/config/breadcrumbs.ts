/**
 * Configuration centralisée des breadcrumbs
 * 
 * Permet de gérer les labels et les routes de manière cohérente
 */

// Type pour une meilleure autocomplétion
export type BreadcrumbConfig = {
  label: string;
  href?: string;
};

// Mapping des routes vers les libellés
export const BREADCRUMB_CONFIG: Record<string, BreadcrumbConfig[]> = {
  "/": [{ label: "Accueil" }],
  "/services": [{ label: "Services" }],
  "/equipe": [{ label: "L'équipe" }],
  "/tarifs": [{ label: "Tarifs" }],
  "/faq": [{ label: "FAQ" }],
  "/contact": [{ label: "Contact" }],
  "/blog": [{ label: "Blog" }],
  "/blog/[slug]": [
    { label: "Blog", href: "/blog" },
    { label: "Article" }, // Ce label sera remplacé par le titre de l'article
  ],
};

/**
 * Récupère la configuration de breadcrumb pour une route donnée
 * @param pathname - Chemin de la route actuelle
 * @returns Configuration du breadcrumb ou undefined si non trouvé
 */
export function getBreadcrumbConfig(pathname: string): BreadcrumbConfig[] | undefined {
  // Exact match
  if (BREADCRUMB_CONFIG[pathname]) {
    return BREADCRUMB_CONFIG[pathname];
  }
  
  // Dynamic route match (ex: /blog/mon-article -> /blog/[slug])
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length >= 2) {
    const dynamicPath = `/${segments[0]}/[slug]`;
    if (BREADCRUMB_CONFIG[dynamicPath]) {
      return BREADCRUMB_CONFIG[dynamicPath];
    }
  }
  
  return undefined;
}

