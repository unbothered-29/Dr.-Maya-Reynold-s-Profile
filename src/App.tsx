/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HopeSection } from './components/HopeSection';
import { WhoWeHelp } from './components/WhoWeHelp';
import { StoryQuoteBanner } from './components/StoryQuoteBanner';
import { ExpertiseSection } from './components/ExpertiseSection';
import { HowWeWork } from './components/HowWeWork';
import { HonoringSection } from './components/HonoringSection';
import { Specialties } from './components/Specialties';
import { AppointmentSection } from './components/AppointmentSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
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
        {/* Section 4: Hero */}
        <Hero onBookClick={() => handleOpenContact('General Inquiry')} />

        {/* Section 5: Intro / Hope Section */}
        <HopeSection />

        {/* Section 6: Who We Help */}
        <WhoWeHelp />

        {/* Section 6b: Story Quote Banner (Beach Ocean Panorama) */}
        <StoryQuoteBanner />

        {/* Section 7: Large Statement / Expertise Intro */}
        <ExpertiseSection />

        {/* Section 8: How We Work */}
        <HowWeWork onLearnMoreClick={() => handleOpenContact('Learn More About CVFC')} />

        {/* Section 8b: Honoring Where You've Been */}
        <HonoringSection />

        {/* Section 9: Specialties */}
        <Specialties onLearnMore={handleSpecialtyClick} />

        {/* Section 10: Appointment / Final CTA */}
        <AppointmentSection onBookClick={() => handleOpenContact('New Appointment')} />
      </main>

      {/* Section 11: Footer */}
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
