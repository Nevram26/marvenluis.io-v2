import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter/wght.css";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/lib/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: {
    default: "Marven Luis — Full-Stack Software Engineer",
    template: "%s | Marven Luis",
  },
  description: profile.description,
  authors: [{ name: profile.name, url: profile.url }],
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: profile.shortName,
    title: "Marven Luis — Full-Stack Software Engineer",
    description: profile.description,
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Marven Luis — Thoughtful engineering. Useful software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marven Luis — Full-Stack Software Engineer",
    description: profile.description,
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = {
  themeColor: "#fafaf8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-background p-4 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
