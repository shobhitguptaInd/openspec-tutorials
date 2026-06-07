import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/components/Breadcrumbs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OpenSpec Tutorials - Learn Spec-Driven Development',
  description: 'Interactive tutorials for OpenSpec and IBM Bob - COBOL, Java, .NET enterprise development',
  keywords: ['OpenSpec', 'IBM Bob', 'COBOL', 'Java', '.NET', 'tutorials', 'spec-driven development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Breadcrumbs />
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2026 OpenSpec Tutorials. Built for enterprise developers.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

// Made with Bob
