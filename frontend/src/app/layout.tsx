import type { Metadata } from "next";
import localFont from "next/font/local";
// Removed: import { headers } from 'next/headers';
import "./globals.css";
// Removed: import Header from '@/components/Header';
// Removed: import Footer from '@/components/Footer';
import Script from 'next/script'; // Import Script component
import LayoutWrapper from '@/components/LayoutWrapper'; // Import LayoutWrapper
import { Toaster } from "sonner"; // Import Toaster directly
const ttHovesPro = localFont({
  src: [
    {
      path: "../../public/fonts/TT-Hoves-Pro/TT-Hoves-Pro-normal-400-100.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TT-Hoves-Pro/TT-Hoves-Pro-normal-500-100.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TT-Hoves-Pro/TT-Hoves-Pro-normal-600-100.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tt-hoves-pro",
});

export const metadata: Metadata = {
  title: "Quantum Hive: Enterprise AI Solutions for Mid-Market Growth",
  description: "Quantum Hive delivers productized AI solutions for mid-market companies. Get accessible, ROI-driven AI development without enterprise complexity. Explore AI agents.",
};

export default function RootLayout({ // Can remove async now
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Removed server-side path checking logic
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${ttHovesPro.variable} font-sans antialiased flex flex-col min-h-screen bg-[#0A0A0A] text-[#EDEDED]`}
      >
        <LayoutWrapper> {/* Use LayoutWrapper for conditional Header/Footer */}
          <main className="flex-grow">{children}</main> {/* Main content */}
          <Toaster richColors position="top-right" /> {/* Keep Toaster inside wrapper if needed by Header/Footer, or move outside if independent */}
        </LayoutWrapper>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Quantum Hive",
                  "url": "https://www.quantumhive.us/", // Replace with your actual domain
                  "logo": "https://www.quantumhive.us/images/logos/quantumhive-logo.svg", // Replace with your actual domain and logo path
                  "sameAs": [ // Add your social media profile URLs here
                    "https://x.com/QuantumHiveInc",
                    "https://github.com/quantumhiveinc",
                    "https://www.instagram.com/quantumhiveinc/"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-707-722-2212",
                    "contactType": "Customer Service",
                    "email": "hello@quantumhive.us"
                  }
                },
                {
                  "@type": "WebSite",
                  "url": "https://www.quantumhive.us/", // Replace with your actual domain
                  "name": "Quantum Hive",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Quantum Hive",
                    "url": "https://www.quantumhive.us/", // Replace with your actual domain
                     "logo": {
                       "@type": "ImageObject",
                       "url": "https://www.quantumhive.us/images/logos/quantumhive-logo.svg" // Replace with your actual domain and logo path
                     }
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://www.quantumhive.us/search?q={search_term_string}", // Optional: Replace if you have site search
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

