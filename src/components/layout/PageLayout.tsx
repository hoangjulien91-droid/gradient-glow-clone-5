"use client";

// CORRECTION : Imports par défaut sans accolades {}
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
  const showBreadcrumb = breadcrumbs && breadcrumbs.length > 0;

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex flex-col" style={{ paddingTop: '64px' }}>
        {showBreadcrumb && <Breadcrumb items={breadcrumbs} />}
        <main className="flex-1">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}

