import { ContactInfo, NavItem, SiteImages, SpecialtyItem, WhoWeHelpItem } from '@/types';

export const siteImages: SiteImages = {
  // Official brand logo image from the site
  logo: '/logo-trimmed.png',
  logoTrimmed: '/logo-trimmed.png',
  // Dr. Maya Reynolds portrait for Hero left photo
  heroFamily: '/images/dr-maya-reynolds.jpg',
  heroOceanNarrow: '/images/journal-writing-tea.jpg',
  hopeOcean: 'https://images.unsplash.com/photo-1709402740413-4e6ed30e49ef?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  // Who We Help images:
  adultsBeach: '/images/who-we-help-adults.png',
  couplesBeach: '/images/who-we-help-professionals.jpg',
  childrenBeach: '/images/who-we-help-trauma.png',

  // How We Work: Dr. Maya Reynolds in collaborative therapy session
  howWeWorkBeach: '/images/dr-maya-therapy-session.jpg',
  
  // Honoring Where You've Been: Books on healing and cozy therapy armchair
  honoringFamily: '/images/honoring-healing-process.jpg',

  // Specialties section: wide coastal family / peaceful beach shoreline
  specialtiesBeach: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer%2BA%2B-%2BImages%2B%2866%29.jpg',

  // Appointment / Final CTA: serene vast Pacific beach shoreline
  appointmentBeach: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
  appointmentLeftSand: '/images/appointment-left-flower.png',
  appointmentRightPointing: '/images/find-therapist-hands.jpg',
};

export const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'APPROACH', href: '#approach' },
  { label: 'SPECIALTIES', href: '#specialties' },
  { label: 'THE SPACE', href: '#the-space' },
  { label: 'FAQS', href: '#faqs' },
];

export const heroContent = {
  eyebrow: 'THERAPY FOR ADULTS IN SANTA MONICA, CALIFORNIA',
  headingLead: 'Feel more grounded and like ',
  headingScriptAccent: 'yourself again.',
  subheading: 'Therapy for anxiety, stress, trauma, and burnout.',
  ctaText: 'BOOK AN APPOINTMENT',
};

export const hopeContent = {
  headline: 'You’re not alone in feeling this way.',
  subhead: '', // Left blank as per design request
  paragraph1: 'Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.',
  paragraph2: 'I support adults navigating anxiety, stress, trauma, burnout, and the lingering effects of past experiences.',
};

export const whoWeHelpItems: WhoWeHelpItem[] = [
  {
    id: 'adults',
    title: 'Adults',
    description: 'Therapy for adults experiencing anxiety, stress, trauma, burnout, or emotional overwhelm.',
    imageUrl: siteImages.adultsBeach,
    imageAlt: 'Adults',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'professionals',
    title: 'Professionals',
    description: 'Support for entrepreneurs, creatives, and professionals experiencing burnout, perfectionism, and high internal pressure.',
    imageUrl: siteImages.couplesBeach,
    imageAlt: 'Professionals',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'trauma',
    title: 'Adults Navigating Trauma',
    description: 'Support for adults navigating single-incident trauma or longer-standing patterns connected to childhood, relationships, or chronic stress.',
    imageUrl: siteImages.childrenBeach,
    imageAlt: 'Adults Navigating Trauma',
    aspectRatio: 'aspect-[3/4]',
  },
];

export const statementContent = {
  quote: 'You deserve a place where your story is heard, valued, and understood.',
  image: '/images/deserve-a-place.png',
  areasTitle: 'Our areas of support',
  expertiseList: [
    'Anxiety & Panic',
    'Trauma',
    'Burnout',
    'Perfectionism',
    'Stress',
    'EMDR',
    'CBT',
    'Mindfulness',
    'Body-Oriented Techniques',
  ],
};

export const howWeWorkContent = {
  eyebrow: 'ABOUT DR. MAYA REYNOLDS',
  heading: 'A warm, collaborative, and grounded approach.',
  paragraphs: [
    'I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.',
    'I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.',
  ],
  ctaText: 'LEARN MORE ABOUT MAYA',
};

export const specialtiesContent = {
  heading: 'Helping you understand what’s happening and move toward a more sustainable way of living.',
  items: [
    {
      id: 'anxiety-panic',
      title: 'Anxiety & Panic',
      description:
        'Support for adults experiencing anxiety, panic, constant overthinking, and feeling emotionally or physiologically on edge. Therapy combines practical tools and mindfulness to restore a sense of calm and control.',
      href: '#contact',
    },
    {
      id: 'trauma',
      title: 'Trauma',
      description:
        'Support for adults navigating single-incident trauma or longer-standing patterns connected to childhood, relationships, or chronic stress, using evidence-based approaches including EMDR and CBT to help you heal and feel grounded.',
      href: '#contact',
    },
    {
      id: 'burnout-perfectionism',
      title: 'Burnout & Perfectionism',
      description:
        'Support for entrepreneurs, creatives, and high-achieving professionals experiencing burnout, perfectionism, and high internal pressure, helping you rebuild balance and move toward a more sustainable way of living.',
      href: '#contact',
    },
  ] as SpecialtyItem[],
};

export const appointmentContent = {
  eyebrow: '',
  heading: 'Find a therapist who is the right fit for you.',
  paragraph1:
    'If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.',
  prompt: 'In-person therapy in Santa Monica and secure telehealth for clients in California.',
  ctaText: 'SCHEDULE A CONSULTATION',
  supportingCopy: 'In-person therapy in Santa Monica and secure telehealth for clients in California.',
};

export const officeContent = {
  eyebrow: 'THE OFFICE',
  heading: 'Our Office',
  body: 'My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.',
  location: '123th Street 45 W, Santa Monica, CA 90401',
  availability: 'In-person therapy in Santa Monica.',
};

export const contactInfo: ContactInfo = {
  addressLines: ['123th Street 45 W', 'Santa Monica, CA 90401'],
  email: '',
  phone: '',
  serviceAreas: '',
};

export const teamMembers: string[] = []; // Removed per new requirements

export const footerNavigateLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'The Space', href: '#the-space' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const legalLinks = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Disclaimer', href: '#disclaimer' },
];
