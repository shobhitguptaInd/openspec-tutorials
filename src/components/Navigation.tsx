'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { links } from '@/config/links'

export default function Navigation() {
  const pathname = usePathname()
  const [gettingStartedOpen, setGettingStartedOpen] = useState(false)
  const [tutorialsOpen, setTutorialsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href={links.internal.home.url} className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">OpenSpec</span>
                <span className="ml-2 text-gray-500">Tutorials</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {/* Home */}
              <Link
                href={links.internal.home.url}
                className={`${
                  pathname === '/' 
                    ? 'border-primary-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                {links.internal.home.label}
              </Link>

              {/* Getting Started Dropdown */}
              <div className="relative" onMouseEnter={() => setGettingStartedOpen(true)} onMouseLeave={() => setGettingStartedOpen(false)}>
                <button
                  className={`${
                    isActive('/getting-started')
                      ? 'border-primary-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
                >
                  Getting Started
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {gettingStartedOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <Link href={links.internal.gettingStarted.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Overview
                    </Link>
                    <Link href={links.internal.quickReference.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.quickReference.label}
                    </Link>
                    <Link href={links.internal.bobCommands.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      🤖 {links.internal.bobCommands.label}
                    </Link>
                    <Link href={links.internal.sdlcPhases.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.sdlcPhases.label}
                    </Link>
                    <Link href={links.internal.enterpriseFeatures.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.enterpriseFeatures.label}
                    </Link>
                    <Link href={links.internal.integrations.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.integrations.label}
                    </Link>
                    <Link href={links.internal.useCases.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.useCases.label}
                    </Link>
                    <Link href={links.internal.roi.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      {links.internal.roi.label}
                    </Link>
                  </div>
                )}
              </div>

              {/* Tutorials Dropdown */}
              <div className="relative" onMouseEnter={() => setTutorialsOpen(true)} onMouseLeave={() => setTutorialsOpen(false)}>
                <button
                  className={`${
                    isActive('/tutorials')
                      ? 'border-primary-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
                >
                  Tutorials
                  <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {tutorialsOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                    <Link href={links.internal.tutorialsCobol.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      🏢 {links.internal.tutorialsCobol.label}
                    </Link>
                    <Link href={links.internal.tutorialsJava.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      ☕ {links.internal.tutorialsJava.label}
                    </Link>
                    <Link href={links.internal.tutorialsDotnet.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      🔷 {links.internal.tutorialsDotnet.label}
                    </Link>
                  </div>
                )}
              </div>

              {/* Playground */}
              <Link
                href={links.internal.playground.url}
                className={`${
                  isActive('/playground')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                <span className="mr-1">🚀</span>
                {links.internal.playground.label}
              </Link>

              {/* Samples */}
              <Link
                href={links.internal.samples.url}
                className={`${
                  isActive('/samples')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                {links.internal.samples.label}
              </Link>

              {/* Sitemap */}
              <Link
                href={links.internal.sitemap.url}
                className={`${
                  isActive('/sitemap')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                {links.internal.sitemap.label}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link href={links.internal.home.url} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              {links.internal.home.label}
            </Link>
            <div className="pl-3 pr-4 py-2 text-sm font-semibold text-gray-900">Getting Started</div>
            <Link href={links.internal.gettingStarted.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Overview
            </Link>
            <Link href={links.internal.quickReference.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.quickReference.label}
            </Link>
            <Link href={links.internal.bobCommands.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              🤖 {links.internal.bobCommands.label}
            </Link>
            <Link href={links.internal.sdlcPhases.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.sdlcPhases.label}
            </Link>
            <Link href={links.internal.enterpriseFeatures.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.enterpriseFeatures.label}
            </Link>
            <Link href={links.internal.integrations.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.integrations.label}
            </Link>
            <Link href={links.internal.useCases.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.useCases.label}
            </Link>
            <Link href={links.internal.roi.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              {links.internal.roi.label}
            </Link>
            <div className="pl-3 pr-4 py-2 text-sm font-semibold text-gray-900">Tutorials</div>
            <Link href={links.internal.tutorialsCobol.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              🏢 {links.internal.tutorialsCobol.label}
            </Link>
            <Link href={links.internal.tutorialsJava.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              ☕ {links.internal.tutorialsJava.label}
            </Link>
            <Link href={links.internal.tutorialsDotnet.url} className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              🔷 {links.internal.tutorialsDotnet.label}
            </Link>
            <Link href={links.internal.playground.url} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              🚀 {links.internal.playground.label}
            </Link>
            <Link href={links.internal.samples.url} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              {links.internal.samples.label}
            </Link>
            <Link href={links.internal.sitemap.url} className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              {links.internal.sitemap.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

// Made with Bob