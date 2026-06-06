export default function GettingStarted() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting Started with OpenSpec</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Learn the fundamentals of spec-driven development with OpenSpec and IBM Bob in just 30 minutes.
        </p>

        {/* What is OpenSpec */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is OpenSpec?</h2>
          <p className="text-gray-700 mb-4">
            OpenSpec is a specification-driven development framework that helps teams plan, document, and implement changes systematically. 
            It provides a structured approach to software development that works across any programming language.
          </p>
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-6">
            <p className="text-gray-800">
              <strong>Key Concept:</strong> Instead of jumping straight into code, OpenSpec encourages you to first specify 
              what you want to build, why you're building it, and how it should work. This specification becomes the 
              foundation for implementation and testing.
            </p>
          </div>
        </section>

        {/* What is IBM Bob */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What is IBM Bob?</h2>
          <p className="text-gray-700 mb-4">
            IBM Bob is an AI-powered development assistant that understands OpenSpec specifications and helps you implement them. 
            Bob can read your specs, generate code, and ensure implementations match your requirements.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Understands natural language specifications</li>
            <li>Generates code in COBOL, Java, .NET, and more</li>
            <li>Validates implementations against specs</li>
            <li>Suggests improvements and best practices</li>
          </ul>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Prerequisites</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Node.js 18+ or Python 3.8+</li>
            <li>Git</li>
            <li>Your preferred code editor (VS Code recommended)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Install OpenSpec CLI</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
            <code>npm install -g openspec</code>
          </div>
          <p className="text-gray-700 mb-4">Or using Python:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>pip install openspec</code>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Verify Installation</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>openspec --version</code>
          </div>
        </section>

        {/* Your First Change */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your First Change</h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 1: Initialize OpenSpec</h3>
          <p className="text-gray-700 mb-4">Navigate to your project directory and initialize OpenSpec:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>cd your-project<br/>openspec init</code>
          </div>
          <p className="text-gray-700 mb-6">
            This creates an <code className="bg-gray-100 px-2 py-1 rounded">openspec/</code> directory with the basic structure.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 2: Create a Change</h3>
          <p className="text-gray-700 mb-4">Create your first change specification:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>openspec change create add-user-authentication</code>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 3: Write Your Specification</h3>
          <p className="text-gray-700 mb-4">
            Edit the generated <code className="bg-gray-100 px-2 py-1 rounded">proposal.md</code> file to describe what you want to build:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
{`# Add User Authentication

## Problem
Our application currently has no user authentication system.
Users cannot securely log in or manage their accounts.

## Solution
Implement a JWT-based authentication system with:
- User registration endpoint
- Login/logout functionality
- Password hashing with bcrypt
- JWT token generation and validation

## Requirements
- REQ-1: Users can register with email and password
- REQ-2: Passwords must be hashed before storage
- REQ-3: Login returns a JWT token valid for 24 hours
- REQ-4: Protected routes validate JWT tokens`}
            </pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step 4: Work with Bob</h3>
          <p className="text-gray-700 mb-4">
            Now you can use IBM Bob to implement your specification. Bob will read your proposal and help generate the code:
          </p>
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-6">
            <p className="text-gray-800">
              <strong>With Bob:</strong> "Bob, please implement the user authentication system according to the OpenSpec proposal 
              in openspec/changes/add-user-authentication/proposal.md"
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/tutorials/cobol" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">COBOL/JCL Tutorial</h3>
              <p className="text-gray-600">Learn OpenSpec for mainframe development</p>
            </a>
            <a href="/tutorials/java" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Java Tutorial</h3>
              <p className="text-gray-600">Build Spring Boot apps with OpenSpec</p>
            </a>
            <a href="/tutorials/dotnet" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">.NET Tutorial</h3>
              <p className="text-gray-600">Create ASP.NET Core apps with specs</p>
            </a>
            <a href="/playground" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Try the Playground</h3>
              <p className="text-gray-600">Practice without installation</p>
            </a>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
          <ul className="space-y-3">
            <li>
              <a href="https://docs.openspec.dev" className="text-primary-600 hover:text-primary-700 font-medium">
                📖 Official Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/openspec/openspec" className="text-primary-600 hover:text-primary-700 font-medium">
                💻 GitHub Repository
              </a>
            </li>
            <li>
              <a href="/samples" className="text-primary-600 hover:text-primary-700 font-medium">
                🚀 Sample Projects
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
