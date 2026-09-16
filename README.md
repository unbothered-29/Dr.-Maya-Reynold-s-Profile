# Dr. Maya Reynolds, PsyD — Licensed Clinical Psychologist

A modern, high-performance, and responsive web application built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4** for the private practice of Dr. Maya Reynolds, PsyD, based in Santa Monica, California.

---

## Overview

This website serves as the primary digital presence and client intake portal for Dr. Maya Reynolds, providing adults navigating anxiety, panic, trauma, stress, burnout, and perfectionism with a serene, grounding, and intuitive user experience.

### Key Highlights

- **Tailored Editorial Aesthetic**: Warm, organic color palette with high-contrast typography, delicate script accents, and balanced editorial whitespace.
- **Next.js 15 App Router Architecture**: Fast server rendering, modular layout hierarchy, structured data, and optimized image delivery.
- **Dynamic Consultation Intake**: Context-aware consultation dialog pre-selecting therapy focus areas (e.g. Anxiety & Panic, Trauma / EMDR, Burnout & Perfectionism) with Santa Monica in-person and California telehealth preferences.
- **Mobile-First Responsive Experience**: Custom mobile drawer navigation, responsive image framing, and touch-optimized interactive controls.
- **Comprehensive Practice Showcase**: Dedicated narrative sections detailing clinical approaches (CBT, EMDR, mindfulness, body-oriented techniques), office environment, and services.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/postcss`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts ([Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond), [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3), [Allura](https://fonts.google.com/specimen/Allura))

---

## Directory Structure

```text
├── app/
│   ├── error.tsx                # Error boundary with user-friendly retry UI
│   ├── globals.css              # Tailwind CSS v4 design tokens & desktop typography rules
│   ├── icon.png                 # Browser tab application icon
│   ├── layout.tsx               # Root layout, Google Fonts link, and global SEO metadata
│   ├── loading.tsx              # Loading skeleton / spinner boundary
│   ├── not-found.tsx            # Custom 404 page
│   └── page.tsx                 # Main single-page layout coordinating all page sections
├── components/
│   ├── layout/
│   │   ├── Footer.tsx           # Practice details, navigation links, and legal notice
│   │   ├── Header.tsx           # Brand identity and desktop navigation header
│   │   └── MobileMenu.tsx       # Full-screen mobile drawer navigation
│   ├── sections/
│   │   ├── AppointmentSection.tsx # Final booking CTA with floral & therapeutic imagery
│   │   ├── ExpertiseSection.tsx   # Two-column comprehensive clinical support areas
│   │   ├── Hero.tsx               # Asymmetric portrait & headline composition
│   │   ├── HonoringSection.tsx    # Grounding narrative unit with script accents
│   │   ├── HopeSection.tsx        # Empathy intro ("You're not alone in feeling this way")
│   │   ├── HowWeWork.tsx          # Practice methodology and Dr. Maya Reynolds intro
│   │   ├── OurOfficeSection.tsx   # Santa Monica physical office photo gallery & details
│   │   ├── Specialties.tsx        # 3 interactive specialty cards with consultation triggers
│   │   ├── StoryQuoteBanner.tsx   # Full-width photo banner with quote overlay
│   │   └── WhoWeHelp.tsx          # 3-card audience overview (Adults, Professionals, Trauma)
│   └── ui/
│       └── ContactModal.tsx     # Interactive consultation inquiry dialog
├── data/
│   └── homepage.ts              # Centralized site copy, navigation links, and image routes
├── public/
│   ├── favicon.ico              # Standard favicon
│   ├── favicon.png              # PNG favicon
│   ├── images/                  # High-resolution clinical and practice photography
│   ├── logo-trimmed.png         # Primary brand identity logo
│   └── logo.png                 # Alternate brand identity logo
├── types/
│   └── index.ts                 # Domain TypeScript interfaces and types
├── next.config.ts               # Next.js configuration with remote image patterns
├── package.json                 # Project dependencies and npm scripts
├── postcss.config.mjs           # PostCSS configuration for Tailwind CSS v4
└── tsconfig.json                # TypeScript compiler configuration
```

---

## Design System

### Color Palette

| Token | Hex Value | Role |
| :--- | :--- | :--- |
| **Porcelain** | `#F7F5F1` | Primary background color |
| **Warm Stone** | `#E7DED4` | Header background & contrasting section blocks |
| **Espresso** | `#302A29` | Primary text and dark borders |
| **Taupe Gray** | `#756C67` | Eyebrow labels, subheadings, and secondary text |
| **Deep Plum** | `#5A3E4B` | Primary interactive buttons, top accent bar, and script accents |
| **Dusty Rose** | `#B88B89` | Subtle borders, dividers, and decorative rules |
| **Mauve Mist** | `#D9C9C9` | Card borders and input outlines |
| **Aubergine** | `#392831` | Dark banner overlay and mobile footer background |

### Typography

- **Serif (Headings)**: `Cormorant Garamond`, Georgia, serif — Used for primary section titles, hero statement, and practice name.
- **Sans-Serif (Body & UI)**: `Source Sans 3`, sans-serif — Used for clean readability in body paragraphs, navigation items, buttons, and form controls.
- **Script (Editorial Accent)**: `Allura`, cursive — Used sparingly on emotional anchor words (`yourself again`, `help`, `specialties`, `living`) for warmth and human touch.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) version `18.18+` or `20+`
- [npm](https://www.npmjs.com/) (bundled with Node.js) or `yarn` / `pnpm`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/dr-maya-reynolds-profile.git
cd dr-maya-reynolds-profile
npm install
```

### Running Locally

Start the local development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Typecheck & Lint

Run the TypeScript compiler in no-emit mode to verify types:

```bash
npm run lint
```

### Production Build

Create an optimized static/production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## Content & Practice Information

All copy, navigation links, and image mappings are centralized in [`data/homepage.ts`](data/homepage.ts). To update practice hours, office location, service areas, or section texts, edit this single file:

- **Practice Location**: `123th Street 45 W, Santa Monica, CA 90401`
- **Clinical Modalities**: CBT, EMDR, Mindfulness, Body-Oriented Techniques
- **Specialty Areas**: Anxiety & Panic, Trauma, Burnout & Perfectionism

---

## License

Private and proprietary project for Dr. Maya Reynolds, PsyD. All rights reserved.
