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
      trauma: 'Trauma / EMDR',
      dissociation: 'Dissociation',
      emdr: 'Trauma / EMDR',
      'special-needs-parenting': 'Special Needs Parenting',
    };
    handleOpenContact(focusMap[specialtyId] || 'Specialized Therapy');
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#252525] flex flex-col selection:bg-[#6E9FA0]/20 selection:text-[#252525] font-sans-clean antialiased">
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

        {/* How We Work */}
        <HowWeWork onLearnMoreClick={() => handleOpenContact('Learn More About CVFC')} />

        {/* Honoring Where You've Been */}
        <HonoringSection />

        {/* Specialties */}
        <Specialties onLearnMore={handleSpecialtyClick} />

        {/* Appointment / Final CTA */}
        <AppointmentSection onBookClick={() => handleOpenContact('New Appointment')} />
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
