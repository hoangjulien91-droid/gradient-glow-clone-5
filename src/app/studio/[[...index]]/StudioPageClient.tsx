"use client";
import { Studio } from "sanity";
import config from "@/sanity/sanity.config";

export default function StudioPageClient() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Studio config={config} />
    </div>
  );
}