import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Conejo Valley Family Counseling',
  description:
    'Online & in-person counseling in Newbury Park and across CA for adults, couples, teens, and children to reflect, heal, and grow.',
  openGraph: {
    title: 'Conejo Valley Family Counseling',
    description:
      'Online & in-person counseling in Newbury Park and across CA for adults, couples, teens, and children to reflect, heal, and grow.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conejo Valley Family Counseling',
    description:
      'Online & in-person counseling in Newbury Park and across CA for adults, couples, teens, and children to reflect, heal, and grow.',
  },
  icons: {
    icon: '/logo-trimmed.png',
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
        <link rel="stylesheet" href="https://use.typekit.net/fsc1wsd.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Mulish:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cormorant+Infant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Ms+Madi&family=Allison&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F6F4EE] text-[#252525] antialiased">
        {children}
      </body>
    </html>
  );
}
