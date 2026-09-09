export interface NavItem {
  label: string;
  href: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  href?: string;
}

export interface WhoWeHelpItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  aspectRatio: string;
}

export interface ContactInfo {
  addressLines: string[];
  email: string;
  phone: string;
  serviceAreas: string;
}

export interface SiteImages {
  heroFamily: string;
  heroOceanNarrow: string;
  hopeOcean: string;
  adultsBeach: string;
  couplesBeach: string;
  childrenBeach: string;
  howWeWorkBeach: string;
  specialtiesBeach: string;
  appointmentBeach: string;
}
