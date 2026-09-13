import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA',
  description:
    'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering therapy for adults navigating anxiety, panic, trauma, stress, burnout, and perfectionism, with in-person and secure telehealth sessions in California.',
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA',
    description:
      'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering therapy for adults navigating anxiety, panic, trauma, stress, burnout, and perfectionism, with in-person and secure telehealth sessions in California.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA',
    description:
      'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering therapy for adults navigating anxiety, panic, trauma, stress, burnout, and perfectionism, with in-person and secure telehealth sessions in California.',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Cormorant+Garamond:wght@400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7F5F1] text-[#302A29] antialiased">
        {children}
      </body>
    </html>
  );
}
