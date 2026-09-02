import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buyallscrapksa.com";

  const routes = [
    "",
    "/buy-used-ac-qatif",
    "/buy-scrap-qatif",
    "/buy-used-furniture-qatif",
    "/buy-appliances-qatif",
    "/buy-used-furniture-dammam",
    "/buy-used-furniture-khobar",
    "/regions/qatif",
    "/regions/dammam",
    "/regions/khobar",
    "/blog",
    "/about",
  ];

  return routes.map((route) => {
    let priority = 0.8;
    if (route === "") priority = 1.0;
    else if (route.includes("buy-") || route.includes("شراء") || route.includes("مشتري")) priority = 0.95;
    else if (route.includes("regions")) priority = 0.85;

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? 'daily' : 'weekly',
      priority,
    }
  })
}