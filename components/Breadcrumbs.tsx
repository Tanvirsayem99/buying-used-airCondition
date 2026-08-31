import React from "react";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";
import { JsonLd, generateBreadcrumbSchema, BreadcrumbItem } from "@/components/JsonLd";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const fullItems: BreadcrumbItem[] = [
    { name: "الرئيسية", url: "/" },
    ...items,
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(fullItems)} />
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-100/80 border border-slate-200/80 rounded-xl px-4 py-2.5 my-4 max-w-7xl mx-auto text-xs sm:text-sm"
      >
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-slate-600 font-medium">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-slate-700 hover:text-cyan-700 font-bold transition-colors"
            >
              <Home className="w-4 h-4 text-cyan-600 shrink-0" />
              <span>الرئيسية</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5 sm:gap-2">
                <ChevronLeft className="w-3.5 h-3.5 text-slate-600 shrink-0 rotate-180" />
                {isLast ? (
                  <span className="text-cyan-900 font-bold bg-cyan-100/70 px-2 py-0.5 rounded-md truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-cyan-700 transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
