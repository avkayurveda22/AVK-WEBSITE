import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ReviewProvider } from "@/components/ReviewModal";
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

export const metadata: Metadata = {
  title: "AVK Ayurvedic Clinic & Pharmacy — Bangalore",
  description: "Specialised Ayurvedic care in Bangalore — Spine & Joint, Skin Ailments, and Geriatric Care. In Akshayanagar since 2008.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="serif-playfair">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="accent-teal serif-playfair">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `}
        </Script>
        <GoogleAnalyticsTracker/>
        <ReviewProvider>
          <Nav/>
          {children}
          <Footer/>
        </ReviewProvider>
      </body>
    </html>
  );
}
