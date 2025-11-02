export interface NavigationItems {
  locations: LocationLinkItem[];
  services: ServiceLinkItem[];
}

export interface LocationLinkItem {
  name: string;
  href: string;
}

export interface ServiceLinkItem {
  name: string;
  href: string;
}

export const navigation: NavigationItems = {
  locations: [
    {
      name: "Arcadia",
      href: "/locations/arcadia-az",
    },
    {

      name: "Chandler",
      href: "/locations/chandler-az",
    },
    {
      name: "Gilbert",
      href: "/locations/gilbert-az",
    },
    {
      name: "Mesa",
      href: "/locations/mesa-az",
    },
    {
      name: "Paradise Valley",
      href: "/locations/paradise-valley-az",
    },
    {
      name: "Phoenix",
      href: "/locations/phoenix-az",
    },
    {
      name: "Scottsdale",
      href: "/locations/scottsdale-az",
    },
    {
      name: "Tempe",
      href: "/locations/tempe-az",
    },
    {
      name: "Queen Creek",
      href: "/locations/queen-creek-az",
    },
  ],
  services: [
    {
      name: "Standard Cleaning",
      href: "/services/house-cleaning",
    },
    {
      name: "Deep Cleaning",
      href: "/services/deep-cleaning",
    },
    {
      name: "Move-in/Move-out Cleaning",
      href: "/services/move-cleaning",
    },
  ],
};
