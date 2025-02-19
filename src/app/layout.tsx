import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Ryan - Software Engineer",
  description: "Personal website of David Ryan, a software engineer specializing in web development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-800">David Ryan</h1>
          </nav>
        </header>
        <main className="container mx-auto px-6 py-8">{children}</main>
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-6 py-4 text-center">
            © {new Date().getFullYear()} David Ryan. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'