"use client";

import { usePathname } from "next/navigation";
import { getBreadcrumbConfig } from "@/config/breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Hook personnalisé pour générer automatiquement les breadcrumbs
 * basé sur la route actuelle
 * 
 * @param customTitle - Titre personnalisé pour remplacer le dernier élément (ex: titre d'article)
 * @returns Array de breadcrumb items ou undefined si page d'accueil
 */
export function useBreadcrumbs(customTitle?: string): BreadcrumbItem[] | undefined {
  const pathname = usePathname();
  
  // Page d'accueil = pas de breadcrumb
  if (pathname === "/") {
    return undefined;
  }
  
  // Récupérer la config depuis le fichier de configuration
  let breadcrumbs = getBreadcrumbConfig(pathname);
  
  // Si customTitle fourni, remplacer le dernier élément
  if (breadcrumbs && customTitle) {
    breadcrumbs = [
      ...breadcrumbs.slice(0, -1),
      { label: customTitle }
    ];
  }
  
  return breadcrumbs;
}

