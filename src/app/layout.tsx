import type { Metadata, Viewport } from "next"
import Footer from "@/lib/components/footer"
import Header from "@/lib/components/header"
import Motion from "@/lib/components/motion"
import { site } from "@/data/site"
import { sans, slab } from "./fonts"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Livingston, NJ`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_US", images: ["/og.png"] },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = { themeColor: "#12402b" }

// Runs before first paint: reveal styles only apply when scripts and motion are both on.
const flags = `(function(){var h=document.documentElement;h.classList.add('js');if(!matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('motion')})()`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: site.name,
  sport: "Soccer",
  url: site.url,
  logo: `${site.url}/crest.png`,
  address: {
    "@type": "PostalAddress",
    postOfficeBoxNumber: "137",
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  sameAs: site.social.map((s) => s.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${slab.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: flags }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <Motion />
      </body>
    </html>
  )
}
