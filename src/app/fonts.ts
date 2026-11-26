import { Alfa_Slab_One, Instrument_Sans } from "next/font/google"

// The crest letters LIVINGSTON in a heavy bracketed slab; Alfa Slab One is the closest open face.
export const slab = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-slab", display: "swap" })
export const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
