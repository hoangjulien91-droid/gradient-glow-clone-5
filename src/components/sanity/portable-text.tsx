"use client";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.client";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlFor(value)?.width(1200).height(800).fit("max").url();
      if (!url) return null;
      const alt: string = value?.alt || "";
      return (
        <div className="my-6 overflow-hidden rounded-2xl border border-[var(--color-border)]">
          <Image src={url} alt={alt} width={1200} height={800} className="h-auto w-full object-cover" />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href: string = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[var(--color-accent)] underline hover:opacity-90"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-[var(--color-bg-secondary)] px-1 py-0.5 text-[var(--color-accent-blue)]">
        {children}
      </code>
    ),
  },
};

export function PortableTextRenderer({ value }: { value: any[] }) {
  return <PortableText value={value} components={components} />;
}