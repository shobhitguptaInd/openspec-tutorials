import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Learn OpenSpec for Enterprise Development
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Spec-driven development tutorials for COBOL, Java, and .NET developers.
            Master OpenSpec and IBM Bob with hands-on examples and interactive learning.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/getting-started" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              Get Started
            </Link>
            <Link href="/playground" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition">
              Try Playground
            </Link>
          </div>
        </div>
      </div>

      {/* Language Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Choose Your Language Track
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* COBOL/JCL Card */}
          <Link href="/tutorials/cobol" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border-2 border-transparent hover:border-primary-500">
            <div className="text-4xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">COBOL / JCL</h3>
            <p className="text-gray-600 mb-4">
              Modernize mainframe development with OpenSpec. Learn to document and specify COBOL programs, batch jobs, and DB2 integration.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Batch program specifications</li>
              <li>✓ File handling patterns</li>
              <li>✓ DB2 integration</li>
              <li>✓ JCL workflow specs</li>
            </ul>
            <span className="text-primary-600 font-semibold">Start Learning →</span>
          </Link>

          {/* Java Card */}
          <Link href="/tutorials/java" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border-2 border-transparent hover:border-primary-500">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Java</h3>
            <p className="text-gray-600 mb-4">
              Build enterprise Java applications with spec-driven development. Spring Boot, microservices, and Jakarta EE patterns.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ Spring Boot specs</li>
              <li>✓ REST API design</li>
              <li>✓ Microservices patterns</li>
              <li>✓ CI/CD integration</li>
            </ul>
            <span className="text-primary-600 font-semibold">Start Learning →</span>
          </Link>

          {/* .NET Card */}
          <Link href="/tutorials/dotnet" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition border-2 border-transparent hover:border-primary-500">
            <div className="text-4xl mb-4">🔷</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">.NET</h3>
            <p className="text-gray-600 mb-4">
              Streamline .NET development with OpenSpec. ASP.NET Core, Entity Framework, and Azure integration patterns.
            </p>
            <ul className="text-sm text-gray-500 space-y-2 mb-6">
              <li>✓ ASP.NET Core specs</li>
              <li>✓ Web API design</li>
              <li>✓ Entity Framework patterns</li>
              <li>✓ Azure deployment</li>
            </ul>
            <span className="text-primary-600 font-semibold">Start Learning →</span>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why OpenSpec Tutorials?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold mb-2">Comprehensive Guides</h3>
              <p className="text-gray-600 text-sm">Step-by-step tutorials for every skill level</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-semibold mb-2">Interactive Playground</h3>
              <p className="text-gray-600 text-sm">Try OpenSpec without installation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-lg font-semibold mb-2">Enterprise Focus</h3>
              <p className="text-gray-600 text-sm">Real-world patterns for production systems</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Sample Projects</h3>
              <p className="text-gray-600 text-sm">Clone and run complete examples</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Complete your first OpenSpec change in under 30 minutes
          </p>
          <Link href="/getting-started" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Begin Tutorial
          </Link>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
