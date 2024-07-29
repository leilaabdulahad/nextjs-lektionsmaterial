import "./globals.css"
import { Inter } from "next/font/google"
import ConvexClientProvider from "@/components/convex-client-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LektionsMaterial",
  description: "En hemsida för lärare med lektionsmaterial för årskurserna 6-9.",
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-backgroundColor" lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ConvexClientProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  )
}