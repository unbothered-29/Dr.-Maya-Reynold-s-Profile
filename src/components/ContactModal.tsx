import React, { useEffect, useState } from 'react';
import { X, Check } from 'lucide-react';
import { contactInfo } from '../data/homepage';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialInterest = 'Adult Therapy',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState(initialInterest);
  const [preferredFormat, setPreferredFormat] = useState('In-Person (Newbury Park)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="contact-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#454540]/30 backdrop-blur-[2px] transition-opacity duration-300"
    >
      <div
        className="relative w-full max-w-[560px] bg-[#F4F1EA] p-8 sm:p-10 border border-[#454540]/15 shadow-sm max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-contact-modal-btn"
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 p-1.5 text-[#454540] hover:opacity-60 transition-opacity"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {isSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full border border-[#7DA5A0] text-[#7DA5A0] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-editorial text-[28px] text-[#454540] font-normal">
              Thank you for reaching out.
            </h3>
            <p className="font-sans-clean text-[15px] leading-relaxed text-[#6C6B65] max-w-[420px] mx-auto">
              We received your inquiry. A member of our clinical team will follow up with you within one business day with care and confidentiality.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-[#454540]/40 rounded-full text-[11px] uppercase tracking-[0.18em] font-sans-clean text-[#454540] hover:bg-[#454540] hover:text-[#F4F1EA] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left mb-6 sm:mb-8">
              <p className="text-[10.5px] uppercase tracking-[0.2em] font-sans-clean text-[#6C6B65] mb-1">
                CONEJO VALLEY FAMILY COUNSELING
              </p>
              <h3 className="font-serif-editorial text-[28px] sm:text-[32px] text-[#454540] font-normal leading-tight">
                Schedule a Consultation
              </h3>
              <p className="font-sans-clean text-[13.5px] text-[#6C6B65] mt-2">
                Office: {contactInfo.phone} • {contactInfo.email}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[14px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[14px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(805) 000-0000"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[14px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                    Support Focus
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[13.5px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors"
                  >
                    <option value="Adult Therapy">Adults</option>
                    <option value="Couples Therapy">Couples</option>
                    <option value="Children & Teens">Children & Teens</option>
                    <option value="Trauma / EMDR">Trauma / EMDR</option>
                    <option value="Dissociation">Dissociation</option>
                    <option value="Special Needs Parenting">Special Needs Parenting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                    Format
                  </label>
                  <select
                    value={preferredFormat}
                    onChange={(e) => setPreferredFormat(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[13.5px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors"
                  >
                    <option value="In-Person (Newbury Park)">In-Person (Newbury Park)</option>
                    <option value="Virtual (Anywhere in CA)">Virtual (Anywhere in CA)</option>
                    <option value="Either">Either</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.14em] font-sans-clean text-[#454540] mb-1">
                  How Can We Help You?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Feel free to share what brings you to therapy..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F4] border border-[#454540]/20 rounded-none font-sans-clean text-[14px] text-[#454540] focus:outline-none focus:border-[#7DA5A0] transition-colors resize-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <p className="text-[11px] text-[#6C6B65]">
                  All information is strictly confidential.
                </p>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full border border-[#454540] text-[#454540] text-[11px] uppercase tracking-[0.18em] font-sans-clean hover:bg-[#454540] hover:text-[#F4F1EA] transition-all duration-300"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
