import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sunvalleycleaners.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Services
    {
      url: `${BASE_URL}/services/house-cleaning`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/deep-cleaning`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/move-in-cleaning`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/move-out-cleaning`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/airbnb-cleaning`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // Cleaning checklist
    {
      url: `${BASE_URL}/cleaning-checklist`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Service areas
    {
      url: `${BASE_URL}/locations/paradise-valley-az`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/phoenix-az`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/arcadia-az`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations/chandler-az`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations/gilbert-az`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations/mesa-az`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations/tempe-az`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/locations/queen-creek-az`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Contact
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}