"use client";

import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import { PageLayout } from "./PageLayout";
import { usePathname } from "next/navigation";

interface AutoPageLayoutProps {
  children: React.ReactNode;
  customTitle?: string;
  disableBreadcrumb?: boolean;
}

export function AutoPageLayout({ children, customTitle, disableBreadcrumb = false }: AutoPageLayoutProps) {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(customTitle);

  // Ne pas afficher le breadcrumb sur la page d'accueil
  const showBreadcrumb = pathname !== '/' && !disableBreadcrumb;

  return (
    <PageLayout breadcrumbs={showBreadcrumb ? breadcrumbs : []}>
      {children}
    </PageLayout>
  );
}

