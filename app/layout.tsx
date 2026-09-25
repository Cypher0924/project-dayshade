import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, League_Spartan } from "next/font/google";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/global/LayoutWrapper";
import { Toaster } from "@/components/ui/sonner";

// League Spartan is the brand voice and is reserved for display type.
const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

// Plex Sans carries prose; Plex Mono carries every number, label and credit.
// Siblings on purpose — the two data/prose roles should feel related, leaving
// League Spartan to stand alone.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Programmers' Den",
  description: "A community for programmers to share and learn.",
  icons: { icon: "/assets/pd-logo.png" },
  keywords: [
    "programming",
    "community",
    "coding",
    "developers",
    "TSU",
    "Tarlac State University",
    "Programmers' Den",
    "progden",
  ],
  // TODO: put the authors in an array
  authors: [
    {
      name: "John Andrei Tacujan",
      url: "https://dreidevs-portfolio.vercel.app",
    },
    {
      name: "Marc Jersey Castro",
      url: "wala pa",
    },
    {
      name: "King Paolo Franco",
      url: "https://github.com/sudo-paoo",
    },
    {
      name: "Gilbert Cura",
      url: "https://github.com/Gilbert-Dev17",
    },
    {
      name: "Eithan Matthew Malonzo",
      url: "https://github.com/mintyZer0",
    },
    {
      name: "Kharl Asuncion",
      url: "https://www.linkedin.com/in/kharl-asuncion-b7995b348/",
    },
    {
      name: "Mark Louis Cadiente",
      url: "https://github.com/RimeValkyris",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Toaster richColors />
      </body>
    </html>
  );
}
