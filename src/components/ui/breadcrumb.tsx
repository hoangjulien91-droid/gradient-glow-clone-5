"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Fragment } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-label="breadcrumb"
      className={`w-full border-b border-white/5 bg-bg-primary/95 backdrop-blur-md lg:sticky lg:z-[var(--z-breadcrumb)] ${className}`}
      style={{ top: 'var(--header-height)' }}
    >
      <ol
        className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center gap-2 py-3 text-sm text-text-secondary overflow-x-auto scrollbar-hide"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {/* Home */}
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
          className="flex-shrink-0"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-accent-coral transition-colors duration-200"
            itemProp="item"
          >
            <Home className="w-4 h-4" />
            <span className="whitespace-nowrap" itemProp="name">Accueil</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const position = index + 2;

          return (
            <Fragment key={index}>
              <ChevronRight className="w-4 h-4 text-text-muted flex-shrink-0" />

              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className={isLast ? "text-text-primary font-medium" : ""}
              >
                {isLast || !item.href ? (
                  <span
                    itemProp="name"
                    className="line-clamp-1 max-w-[200px] sm:max-w-md whitespace-nowrap"
                    aria-current={isLast ? "page" : undefined}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-accent-coral transition-colors duration-200 whitespace-nowrap"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={position.toString()} />
              </li>
            </Fragment>
          );
        })}
      </ol>
    </motion.nav>
  );
}