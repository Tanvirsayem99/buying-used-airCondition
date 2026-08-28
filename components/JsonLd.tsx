import React from "react";

export const siteDomain = "https://buyallscrapksa.com";
export const siteName = "شراء مكيفات مستعمل القطيف";
export const sitePhone = "+966531487293";
export const siteFormattedPhone = "053 148 7293";

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RecyclingCenter", "HomeGoodsStore"],
  "@id": `${siteDomain}/#organization`,
  name: siteName,
  alternateName: [
    "buyallscrapksa",
    "شراء مكيفات مستعملة بالقطيف",
    "شراء سكراب بالقطيف",
    "شراء اثاث مستعمل بالقطيف",
    "شراء اجهزة مستعملة بالقطيف",
  ],
  url: siteDomain,
  logo: `${siteDomain}/favicon.ico`,
  image: `${siteDomain}/images/scrap-ac.jpg`,
  telephone: sitePhone,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "طريق الملك فيصل، حي المجيدية",
    addressLocality: "القطيف",
    addressRegion: "المنطقة الشرقية",
    postalCode: "32631",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.5196,
    longitude: 50.0116,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    { "@type": "City", name: "القطيف" },
    { "@type": "City", name: "سيهات" },
    { "@type": "City", name: "صفوى" },
    { "@type": "City", name: "تاروت" },
    { "@type": "City", name: "العوامية" },
    { "@type": "City", name: "الدمام" },
    { "@type": "City", name: "الخبر" },
  ],
  description:
    "مؤسسة شراء مكيفات مستعمل القطيف وسكراب المعادن والأثاث والأجهزة المستعملة بأعلى أسعار الكاش والفك والنقل المجاني 100% في القطيف، تاروت، سيهات، صفوى والعوامية.",
  sameAs: [siteDomain],
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteDomain}/#website`,
  url: siteDomain,
  name: siteName,
  description: "خدمات شراء مكيفات مستعملة وسكراب وأثاث وأجهزة كهربائية بالقطيف بأعلى سعر كاش",
  inLanguage: ["ar-SA", "en-US"],
});

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => {
    const rawUrl = item.url.startsWith("http") ? item.url : `${siteDomain}${item.url}`;
    return {
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: encodeURI(rawUrl),
    };
  }),
});

export interface FAQItem {
  question: string;
  answer: string;
}

export const generateFAQSchema = (faqs: FAQItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}

export const generateServiceSchema = ({ name, description, serviceType, url }: ServiceSchemaProps) => {
  const fullUrl = url.startsWith("http") ? url : `${siteDomain}${url}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      url: siteDomain,
    },
    areaServed: {
      "@type": "City",
      name: "القطيف والمنطقة الشرقية",
    },
    url: encodeURI(fullUrl),
  };
};

export const JsonLd = ({ data }: { data: object | object[] }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
