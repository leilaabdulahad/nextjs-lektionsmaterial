import "./globals.css"
import { Inter } from "next/font/google"
import ConvexClientProvider from "@/components/convex-client-provider"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LektionsMaterial",
  description: "En hemsida för lärare med lektionsmaterial för årskurserna 6-9.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <Navbar />
      
            {children}
        </ConvexClientProvider>
      </body>
    </html>
  )
}
