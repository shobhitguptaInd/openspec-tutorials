'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">OpenSpec</span>
                <span className="ml-2 text-gray-500">Tutorials</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {/* Home */}
              <Link
                href="/"
                className={`${
                  pathname === '/' 
                    ? 'border-primary-500 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                Home
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
                    <Link href="/getting-started" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Overview
                    </Link>
                    <Link href="/getting-started/quick-reference" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Quick Reference
                    </Link>
                    <Link href="/getting-started/sdlc-phases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      SDLC Phases
                    </Link>
                    <Link href="/getting-started/enterprise-features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Enterprise Features
                    </Link>
                    <Link href="/getting-started/integrations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Integrations
                    </Link>
                    <Link href="/getting-started/use-cases" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Use Cases
                    </Link>
                    <Link href="/getting-started/roi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      ROI Calculator
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
                    <Link href="/tutorials/cobol" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      🏢 COBOL / JCL
                    </Link>
                    <Link href="/tutorials/java" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      ☕ Java
                    </Link>
                    <Link href="/tutorials/dotnet" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      🔷 .NET
                    </Link>
                  </div>
                )}
              </div>

              {/* Playground */}
              <Link
                href="/playground"
                className={`${
                  isActive('/playground')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                Playground
              </Link>

              {/* Samples */}
              <Link
                href="/samples"
                className={`${
                  isActive('/samples')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                Sample Projects
              </Link>

              {/* Sitemap */}
              <Link
                href="/sitemap"
                className={`${
                  isActive('/sitemap')
                    ? 'border-primary-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium transition`}
              >
                Sitemap
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
            <Link href="/" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              Home
            </Link>
            <div className="pl-3 pr-4 py-2 text-sm font-semibold text-gray-900">Getting Started</div>
            <Link href="/getting-started" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Overview
            </Link>
            <Link href="/getting-started/quick-reference" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Quick Reference
            </Link>
            <Link href="/getting-started/sdlc-phases" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              SDLC Phases
            </Link>
            <Link href="/getting-started/enterprise-features" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Enterprise Features
            </Link>
            <Link href="/getting-started/integrations" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Integrations
            </Link>
            <Link href="/getting-started/use-cases" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              Use Cases
            </Link>
            <Link href="/getting-started/roi" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              ROI Calculator
            </Link>
            <div className="pl-3 pr-4 py-2 text-sm font-semibold text-gray-900">Tutorials</div>
            <Link href="/tutorials/cobol" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              🏢 COBOL / JCL
            </Link>
            <Link href="/tutorials/java" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              ☕ Java
            </Link>
            <Link href="/tutorials/dotnet" className="block pl-6 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
              🔷 .NET
            </Link>
            <Link href="/playground" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              Playground
            </Link>
            <Link href="/samples" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              Sample Projects
            </Link>
            <Link href="/sitemap" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300">
              Sitemap
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

// Made with Bob