import Link from 'next/link'

export default function Sitemap() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
        <p className="text-xl text-gray-600">
          Complete overview of all pages and resources available on OpenSpec Tutorials
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Main Pages */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Main Pages
          </h2>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Home
              </Link>
            </li>
            <li>
              <Link href="/playground" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Playground
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Try OpenSpec interactively</p>
            </li>
            <li>
              <Link href="/samples" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Sample Projects
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Complete working examples</p>
            </li>
          </ul>
        </div>

        {/* Getting Started */}
        <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            Getting Started
          </h2>
          <ul className="space-y-3">
            <li>
              <Link href="/getting-started" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Overview
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Introduction to OpenSpec</p>
            </li>
            <li>
              <Link href="/getting-started/quick-reference" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Quick Reference
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Essential commands and syntax</p>
            </li>
            <li>
              <Link href="/getting-started/sdlc-phases" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> SDLC Phases
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Integration across development lifecycle</p>
            </li>
            <li>
              <Link href="/getting-started/enterprise-features" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Enterprise Features
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Governance, compliance, and security</p>
            </li>
            <li>
              <Link href="/getting-started/integrations" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Integrations
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Connect with your tools</p>
            </li>
            <li>
              <Link href="/getting-started/use-cases" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> Use Cases
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Real-world applications</p>
            </li>
            <li>
              <Link href="/getting-started/roi" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">→</span> ROI Calculator
              </Link>
              <p className="text-sm text-gray-600 ml-5 mt-1">Calculate your return on investment</p>
            </li>
          </ul>
        </div>

        {/* Tutorials */}
        <div className="bg-white rounded-lg border-2 border-green-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            Tutorials
          </h2>
          <ul className="space-y-3">
            <li>
              <Link href="/tutorials/cobol" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">🏢</span> COBOL / JCL
              </Link>
              <p className="text-sm text-gray-600 ml-7 mt-1">Mainframe development with OpenSpec</p>
            </li>
            <li>
              <Link href="/tutorials/java" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">☕</span> Java
              </Link>
              <p className="text-sm text-gray-600 ml-7 mt-1">Spring Boot and microservices</p>
            </li>
            <li>
              <Link href="/tutorials/dotnet" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">🔷</span> .NET
              </Link>
              <p className="text-sm text-gray-600 ml-7 mt-1">ASP.NET Core applications</p>
            </li>
          </ul>
        </div>

        {/* Sample Projects - COBOL */}
        <div className="bg-white rounded-lg border-2 border-purple-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">🏢</span>
            COBOL Samples
          </h2>
          <ul className="space-y-3">
            <li>
              <div className="text-gray-900 font-medium">Hello OpenSpec COBOL</div>
              <p className="text-sm text-gray-600 mt-1">Basic COBOL program with file I/O</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Batch Processing System</div>
              <p className="text-sm text-gray-600 mt-1">Transaction processing with reports</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">DB2 Integration</div>
              <p className="text-sm text-gray-600 mt-1">COBOL with embedded SQL</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Legacy Modernization</div>
              <p className="text-sm text-gray-600 mt-1">Refactoring legacy COBOL code</p>
            </li>
          </ul>
        </div>

        {/* Sample Projects - Java */}
        <div className="bg-white rounded-lg border-2 border-orange-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">☕</span>
            Java Samples
          </h2>
          <ul className="space-y-3">
            <li>
              <div className="text-gray-900 font-medium">Spring Boot REST API</div>
              <p className="text-sm text-gray-600 mt-1">RESTful web services with Spring Boot</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Microservices Architecture</div>
              <p className="text-sm text-gray-600 mt-1">Distributed system with service discovery</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">E-Commerce Platform</div>
              <p className="text-sm text-gray-600 mt-1">Full-stack e-commerce application</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Event-Driven System</div>
              <p className="text-sm text-gray-600 mt-1">Kafka-based event processing</p>
            </li>
          </ul>
        </div>

        {/* Sample Projects - .NET */}
        <div className="bg-white rounded-lg border-2 border-indigo-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">🔷</span>
            .NET Samples
          </h2>
          <ul className="space-y-3">
            <li>
              <div className="text-gray-900 font-medium">ASP.NET Core Web API</div>
              <p className="text-sm text-gray-600 mt-1">Product catalog API with EF Core</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Clean Architecture Template</div>
              <p className="text-sm text-gray-600 mt-1">Enterprise application structure</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Azure Cloud Integration</div>
              <p className="text-sm text-gray-600 mt-1">Cloud-native .NET applications</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">.NET Framework Migration</div>
              <p className="text-sm text-gray-600 mt-1">Migrating to .NET Core/.NET 6+</p>
            </li>
          </ul>
        </div>

        {/* Multi-Language Projects */}
        <div className="bg-white rounded-lg border-2 border-pink-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Multi-Language
          </h2>
          <ul className="space-y-3">
            <li>
              <div className="text-gray-900 font-medium">COBOL-Java Integration</div>
              <p className="text-sm text-gray-600 mt-1">Bridging mainframe and modern systems</p>
            </li>
            <li>
              <div className="text-gray-900 font-medium">Hybrid Cloud System</div>
              <p className="text-sm text-gray-600 mt-1">On-premise and cloud integration</p>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Resources
          </h2>
          <ul className="space-y-3">
            <li>
              <a href="https://docs.openspec.dev" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">↗</span> Official Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/openspec/openspec" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">↗</span> GitHub Repository
              </a>
            </li>
            <li>
              <a href="https://discord.gg/openspec" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">↗</span> Discord Community
              </a>
            </li>
            <li>
              <a href="https://training.openspec.dev" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                <span className="mr-2">↗</span> Training & Certification
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mt-12 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-8 border-2 border-primary-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/getting-started" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="text-primary-600 font-semibold mb-1">New to OpenSpec?</div>
            <div className="text-sm text-gray-600">Start with Getting Started guide</div>
          </Link>
          <Link href="/tutorials/cobol" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="text-primary-600 font-semibold mb-1">COBOL Developer?</div>
            <div className="text-sm text-gray-600">Check out COBOL tutorials</div>
          </Link>
          <Link href="/playground" className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <div className="text-primary-600 font-semibold mb-1">Want to Try It?</div>
            <div className="text-sm text-gray-600">Use the interactive playground</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Made with Bob