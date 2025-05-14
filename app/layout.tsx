import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Import Plus Jakarta Sans with proper configuration
import { Plus_Jakarta_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content="Framer b83b17b" />
        <title>Adopt AI, No-Code &amp; Blockchain Without the Complexity | VerzNexus</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon as SVG data URL */}
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='65' fill='none'%3E%3Cpath fill='%23fff' d='M63.981 31.633c.635 18.853-15.04 34.217-34 33.066C14.019 63.728 1.097 50.88.032 34.922a30.25 30.25 0 0 1-.023-.394c-.279-5.088 6.95-6.38 8.469-1.516L14.004 50.7h9.446l8.428-31.59V50.7h7.552V34.517l7.19 16.184h7.908V16.728h-7.551v16.184l-7.191-16.184H24.699l-6.173 23.144-4.493-14.384C9.855 12.115 17.896.749 31.906.718c.343 0 .687.004 1.032.014 16.78.49 30.478 14.124 31.043 30.9Z'/%3E%3C/svg%3E" />
      </head>
      <body
        className={`${inter.className} ${plusJakartaSans.className}`}
        style={{
          background: `radial-gradient(ellipse 70% 35% at 50% 80%, rgba(69, 106, 255, 0.10) 0%, rgba(11, 11, 14, 0.98) 80%)`,
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  )
}
