import { ContactInfo, NavItem, SiteImages, SpecialtyItem, WhoWeHelpItem } from '../types';

export const siteImages: SiteImages = {
  // Original reference photos from the Squarespace site
  heroFamily: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer%2BA%2B-%2BImages%2B%2866%29.jpg',
  heroOceanNarrow: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer%2BA%2B-%2BImages%2B%283%29.jpg',
  hopeOcean: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer%2BA%2B-%2BImages%2B%283%29.jpg',
  
  // Who We Help images:
  // Adults: calm natural coastal setting / walking along water
  adultsBeach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  // Couples: beach couple walking peacefully by the tide
  couplesBeach: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80',
  // Children & Teens: playful family beach image
  childrenBeach: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/389808ad-7273-4e03-a32b-c172aa735f12/Jennifer%2BA%2B-%2BImages%2B%286%29.jpg',

  // How We Work: Woman and child in white dresses on a beach, warm sunset lighting
  howWeWorkBeach: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer%2BA%2B-%2BImages%2B%2867%29.jpg',
  
  // Specialties section: wide coastal family / peaceful beach shoreline
  specialtiesBeach: 'https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer%2BA%2B-%2BImages%2B%2866%29.jpg',

  // Appointment / Final CTA: serene vast Pacific beach shoreline
  appointmentBeach: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
};

export const navItems: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'OUR TEAM', href: '#team' },
  { label: 'SPECIALTIES', href: '#specialties' },
  { label: 'METHODS', href: '#methods' },
  { label: 'FAQS', href: '#faqs' },
];

export const heroContent = {
  eyebrow: 'ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA',
  headingLead: 'Rebuild your foundation on solid ground and finally begin to',
  headingScriptAccent: 'thrive.',
  subheading: 'Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.',
  ctaText: 'BOOK AN APPOINTMENT',
};

export const hopeContent = {
  headline: 'You’re holding onto hope that life can be better than it is right now.',
  paragraph1:
    'At Conejo Valley Family Counseling we want to make that hope a reality. We offer specialized counseling services designed to provide a compassionate and safe space for individuals, couples, and families navigating life’s challenges. Whether you’re an adult seeking personal growth or working through trauma, a couple addressing relationship issues, or a parent seeking support for your child, we are here to walk with you every step of the way.',
  paragraph2:
    'First and foremost, we believe what you’re going through is real, valid, and worthy of support. Finding the courage to reach out can feel daunting, but you don’t have to carry your burdens in isolation. Together, we will work toward healing, discovering inner resilience, and fostering meaningful connections.',
};

export const whoWeHelpItems: WhoWeHelpItem[] = [
  {
    id: 'adults',
    title: 'Adults',
    description:
      'Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.',
    imageUrl: siteImages.adultsBeach,
    imageAlt: 'Adult walking along a quiet, misty coastal shoreline',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 'couples',
    title: 'Couples',
    description:
      'Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.',
    imageUrl: siteImages.couplesBeach,
    imageAlt: 'Couple walking peacefully along the Pacific ocean shore',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'children-teens',
    title: 'Children & Teens',
    description:
      'Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.',
    imageUrl: siteImages.childrenBeach,
    imageAlt: 'Children playing freely along the sandy beach in soft daylight',
    aspectRatio: 'aspect-[3/4]',
  },
];

export const statementContent = {
  quote:
    'You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.',
  areasTitle: 'Our areas of expertise',
  expertiseList: [
    'Dissociation',
    'Trauma',
    'Family conflict',
    'Special needs parenting',
    'Depression',
    'Marriage',
    'Anxiety',
    'Relationships',
    'Children',
    'Teens',
    'Intimacy & connection',
    '…and more.',
  ],
};

export const howWeWorkContent = {
  eyebrow: 'HOW WE WORK',
  heading: 'We’re here to make a difference.',
  paragraphs: [
    'The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.',
    'Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.',
    'Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships.',
    'Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.',
  ],
  ctaText: 'LEARN MORE ABOUT US',
};

export const specialtiesContent = {
  heading: 'Honoring where you’ve been & helping shape where you’re headed.',
  subheading: 'Our specialties include…',
  items: [
    {
      id: 'trauma',
      title: 'TRAUMA',
      description:
        'We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.',
      href: '#specialties-trauma',
    },
    {
      id: 'dissociation',
      title: 'DISSOCIATION',
      description:
        'The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.',
      href: '#specialties-dissociation',
    },
    {
      id: 'emdr',
      title: 'EMDR',
      description:
        'Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.',
      href: '#specialties-emdr',
    },
    {
      id: 'special-needs-parenting',
      title: 'SPECIAL NEEDS PARENTING',
      description:
        'Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.',
      href: '#specialties-special-needs',
    },
  ] as SpecialtyItem[],
};

export const appointmentContent = {
  eyebrow: 'SCHEDULE AN APPOINTMENT',
  heading: 'Find a therapist who is the right fit for you.',
  paragraph1:
    'Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we’re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.',
  prompt: 'Click the button below to schedule an appointment.',
  ctaText: 'BOOK NOW',
  supportingCopy:
    'We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.',
};

export const contactInfo: ContactInfo = {
  addressLines: ['925 Broadbeck Dr', 'Suites 200 and 225', 'Newbury Park, CA 91320'],
  email: 'info@conejovalleycounseling.com',
  phone: '805.242.3120',
  serviceAreas: 'Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley',
};

export const teamMembers: string[] = [
  'Jennifer Anderson',
  'Heather Williams-Baumgart',
  'Autumn Bodily',
  'Michaela Gorospe',
  'Candace Bletscher',
  'Samantha Johnson',
  'Andrea Watkins',
  'Rosa Gomez',
  'Chad Flores',
];

export const footerNavigateLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
];

export const legalLinks = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
  { label: 'Disclaimer', href: '#disclaimer' },
];
