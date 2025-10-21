"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-bg-primary/80 backdrop-blur-sm border-b border-white/5 sticky top-[80px] z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1.5 text-text-secondary hover:text-accent-coral transition-colors duration-200"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-text-muted" />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-text-secondary hover:text-accent-coral transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-primary font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}