import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://omikron-software.pl";
const title = "Omikron-Software — aplikacje szyte na miarę";
const description =
  "Tworzymy w Elblągu narzędzia szyte na miarę i wdrażamy AI do pomocy w firmie. Bez abonamentów za kombajny, których nie potrzebujesz.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Omikron-Software",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Omikron-Software",
  url: siteUrl,
  email: "kontakt@omikron-software.pl",
  telephone: "+48503039612",
  image: `${siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Grochowska 4B",
    postalCode: "82-300",
    addressLocality: "Elbląg",
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "City",
    name: "Elbląg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
