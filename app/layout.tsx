import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Omikron-Software — aplikacje szyte na miarę",
  description:
    "Tworzymy narzędzia szyte na miarę i wdrażamy AI do pomocy w firmie. Bez abonamentów za kombajny, których nie potrzebujesz.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className="h-full antialiased">
      <body className={`${outfit.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
