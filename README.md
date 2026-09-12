# Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist

A production-grade, highly responsive, and accessible Next.js web application for Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica and across California.

## Features & Highlights

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` with customized fonts and palette.
- **Typography**: Custom `@font-face` embeds for `beaufort-pro` and `PrintedMoments`, alongside Google Fonts (`Muli` / `Mulish`).
- **Architecture**:
  - Modular component breakdown (`components/layout/`, `components/sections/`, `components/ui/`).
  - Separation of Server Components and interactive Client Components (`'use client'`).
  - Clean path aliases (`@/*`).
  - Structured domain data and TypeScript interfaces in `data/` and `types/`.
- **Interactivity**:
  - Multi-trigger appointment/consultation modal with context-aware inquiry pre-selection.
  - Full mobile responsive drawer navigation with smooth spring animations.
  - Image fallback resilience and responsive layout fidelity.

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- npm or yarn

### Installation

```bash
npm install
```

### Running Locally

```bash
# Start Next.js development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build

```bash
# Build optimized static bundle
npm run build

# Start production server
npm run start
```

## Directory Structure

```text
├── app/
│   ├── globals.css          # Tailwind CSS v4 + custom font-face definitions
│   ├── layout.tsx           # Root layout with SEO metadata and Typekit fonts
│   ├── page.tsx             # Main landing page coordinating all sections
│   ├── loading.tsx          # Loading boundary
│   ├── error.tsx            # Error boundary
│   └── not-found.tsx        # 404 page
├── components/
│   ├── layout/              # Header, Footer, MobileMenu
│   ├── sections/            # Hero, HopeSection, WhoWeHelp, StoryQuoteBanner,
│   │                        # ExpertiseSection, HowWeWork, HonoringSection,
│   │                        # Specialties, AppointmentSection
│   └── ui/                  # EditorialLink, ImageBlock, ContactModal, SectionEyebrow
├── data/
│   └── homepage.ts          # Centralized homepage content and image URLs
├── types/
│   └── index.ts             # TypeScript domain interfaces
├── public/                  # Static assets and fonts
├── next.config.ts           # Next.js configuration with remote image patterns
└── postcss.config.mjs       # Tailwind CSS PostCSS configuration
```
