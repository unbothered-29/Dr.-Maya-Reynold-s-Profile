'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { HopeSection } from '@/components/sections/HopeSection';
import { WhoWeHelp } from '@/components/sections/WhoWeHelp';
import { StoryQuoteBanner } from '@/components/sections/StoryQuoteBanner';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { HowWeWork } from '@/components/sections/HowWeWork';
import { HonoringSection } from '@/components/sections/HonoringSection';
import { Specialties } from '@/components/sections/Specialties';
import { AppointmentSection } from '@/components/sections/AppointmentSection';
import { OurOfficeSection } from '@/components/sections/OurOfficeSection';
import { Footer } from '@/components/layout/Footer';
import { ContactModal } from '@/components/ui/ContactModal';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState('Adult Therapy');

  const handleOpenContact = (focus = 'Adult Therapy') => {
    setSelectedFocus(focus);
    setIsContactModalOpen(true);
  };

  const handleSpecialtyClick = (specialtyId: string) => {
    const focusMap: Record<string, string> = {
      'anxiety-panic': 'Anxiety & Panic',
      trauma: 'Trauma',
      'burnout-perfectionism': 'Burnout & Perfectionism',
    };
    handleOpenContact(focusMap[specialtyId] || 'Specialized Therapy');
  };

  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#302A29] flex flex-col selection:bg-[#5A3E4B]/20 selection:text-[#302A29] font-sans-body antialiased">
      {/* Header / Navigation */}
      <Header onContactClick={() => handleOpenContact('General Inquiry')} />

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => handleOpenContact('General Inquiry')} />

        {/* Intro / Hope Section */}
        <HopeSection />

        {/* Who We Help */}
        <WhoWeHelp />

        {/* Story Quote Banner (Beach Ocean Panorama) */}
        <StoryQuoteBanner />

        {/* Large Statement / Expertise Intro */}
        <ExpertiseSection />

        {/* How We Work (About Maya) */}
        <HowWeWork onLearnMoreClick={() => handleOpenContact('Learn More About Dr. Maya Reynolds')} />

        {/* Honoring Where You've Been */}
        <HonoringSection />

        {/* Specialties */}
        <Specialties onLearnMore={handleSpecialtyClick} />

        {/* Appointment / Final CTA */}
        <AppointmentSection onBookClick={() => handleOpenContact('New Appointment')} />

        {/* Our Office Section */}
        <OurOfficeSection />
      </main>

      {/* Footer */}
      <Footer onContactClick={() => handleOpenContact('General Inquiry')} />

      {/* Interactive Consultation / Appointment Dialog */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialInterest={selectedFocus}
      />
    </div>
  );
}
