export default function GettingStarted() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          OpenSpec for Enterprise SDLC
        </h1>
        <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Specification-driven development from requirements to deployment with complete traceability, governance, and compliance
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
            <div className="text-gray-700">Faster Development</div>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">75%</div>
            <div className="text-gray-700">Fewer Defects</div>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700">Audit Ready</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">2,447%</div>
            <div className="text-gray-700">ROI Year 1</div>
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* Why OpenSpec for Enterprise */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why OpenSpec for Enterprise SDLC?</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Enterprise Development Challenge</h3>
            <ul className="space-y-2 text-gray-700">
              <li>❌ Requirements scattered across emails, meetings, and documents</li>
              <li>❌ Architecture decisions lost in developers' heads</li>
              <li>❌ No traceability from requirement to production</li>
              <li>❌ Weeks spent preparing for audits</li>
              <li>❌ Inconsistent coding standards across teams</li>
              <li>❌ New developers take months to become productive</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The OpenSpec Solution</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>Complete Traceability:</strong> Every requirement tracked from spec to production</li>
              <li>✅ <strong>Built-in Governance:</strong> Approval workflows and policy enforcement</li>
              <li>✅ <strong>Audit-Ready Documentation:</strong> Complete change history and compliance evidence</li>
              <li>✅ <strong>AI-Assisted Development:</strong> IBM Bob generates code from specifications</li>
              <li>✅ <strong>Standards Enforcement:</strong> Organization-wide coding standards embedded in specs</li>
              <li>✅ <strong>Knowledge Preservation:</strong> Institutional knowledge captured in specifications</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
            <p className="text-gray-800 text-lg">
              <strong>Key Concept:</strong> OpenSpec integrates specification-driven development into every phase of your SDLC, 
              ensuring that what you plan is what you build, what you build is what you test, and what you test is what you deploy.
            </p>
          </div>
        </section>

        {/* OpenSpec Across the SDLC */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">OpenSpec Across Your SDLC</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how OpenSpec enhances every phase of your software development lifecycle
          </p>

          {/* SDLC Phase Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            
            {/* Requirements Phase */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Capture business needs in structured format with unique IDs and acceptance criteria
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Structured proposal.md format</li>
                <li>✓ Link to JIRA/Azure DevOps</li>
                <li>✓ Version controlled with code</li>
              </ul>
              <div className="text-primary-600 font-semibold">→ Clear, traceable requirements</div>
            </div>

            {/* High-Level Design */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">High-Level Design</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Document system architecture and design decisions with Architecture Decision Records
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Architecture diagrams</li>
                <li>✓ ADRs for key decisions</li>
                <li>✓ Component interactions</li>
              </ul>
              <div className="text-purple-600 font-semibold">→ Architecture blueprint</div>
            </div>

            {/* Low-Level Design */}
            <div className="bg-white border-2 border-indigo-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Low-Level Design</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Define API contracts, database schemas, and detailed technical specifications
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ API endpoint definitions</li>
                <li>✓ Database schemas</li>
                <li>✓ Interface specifications</li>
              </ul>
              <div className="text-indigo-600 font-semibold">→ Implementation guide</div>
            </div>

            {/* Development */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Development</h3>
              </div>
              <p className="text-gray-700 mb-4">
                IBM Bob generates code from specifications following organization standards
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ AI-assisted code generation</li>
                <li>✓ Standards enforcement</li>
                <li>✓ 40-60% time savings</li>
              </ul>
              <div className="text-green-600 font-semibold">→ Working software</div>
            </div>

            {/* Code Review */}
            <div className="bg-white border-2 border-yellow-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Code Review</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Review code against specifications with objective criteria and AI assistance
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Spec-driven checklist</li>
                <li>✓ Automated validation</li>
                <li>✓ 70% faster reviews</li>
              </ul>
              <div className="text-yellow-600 font-semibold">→ Approved code</div>
            </div>

            {/* Testing */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">🧪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Testing</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Generate test cases from requirements with complete coverage mapping
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Tests from acceptance criteria</li>
                <li>✓ Coverage to requirements</li>
                <li>✓ Automated test generation</li>
              </ul>
              <div className="text-orange-600 font-semibold">→ Quality assurance</div>
            </div>

            {/* Deployment */}
            <div className="bg-white border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Deployment</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Follow documented procedures with rollback plans and complete audit trail
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Deployment runbooks</li>
                <li>✓ Rollback procedures</li>
                <li>✓ Change documentation</li>
              </ul>
              <div className="text-red-600 font-semibold">→ Production release</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary-300 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete SDLC Integration</h3>
            <p className="text-lg text-gray-700 mb-6">
              Every phase connected through specifications, ensuring complete traceability from business need to production deployment
            </p>
            <div className="text-6xl mb-4">📋 → 🏗️ → ⚙️ → 💻 → 👥 → 🧪 → 🚀</div>
            <p className="text-gray-600 mb-6">Requirements → HLD → LLD → Dev → Review → Test → Deploy</p>
            <a href="/getting-started/sdlc-phases" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
              View Detailed SDLC Guide →
            </a>
          </div>
        </section>

        {/* What is IBM Bob */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet IBM Bob: Your AI Development Assistant</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                IBM Bob is an AI-powered development assistant that understands OpenSpec specifications and helps you implement them efficiently.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Reads and understands natural language specifications</li>
                <li>Generates production-ready code in COBOL, Java, .NET, and more</li>
                <li>Follows your organization's coding standards automatically</li>
                <li>Creates comprehensive test suites from acceptance criteria</li>
                <li>Assists with code reviews and validation</li>
                <li>Suggests improvements and best practices</li>
              </ul>
            </div>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
              <div className="text-green-400 mb-2">$ Developer Workflow with Bob</div>
              <div className="space-y-2 text-sm font-mono">
                <div><span className="text-blue-400">You:</span> "Bob, read the user-auth proposal"</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Analyzed 5 requirements</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Reviewed architecture section</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Ready to implement</div>
                <div className="pt-2"><span className="text-blue-400">You:</span> "Implement REQ-1 and REQ-2"</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Generated AuthController.java</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Generated SecurityConfig.java</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Created 12 unit tests</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Created 5 integration tests</div>
                <div className="pt-2 text-green-400">⚡ 40-60% time savings vs manual coding</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features Highlight */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade Features</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔒 Governance & Compliance</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Policy enforcement through templates</li>
                <li>• Approval workflows</li>
                <li>• SOX, HIPAA, GDPR compliance</li>
                <li>• Complete audit trails</li>
                <li>• Regulatory reporting</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🔗 Tool Integrations</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• JIRA & Azure DevOps sync</li>
                <li>• GitHub & GitLab workflows</li>
                <li>• CI/CD pipeline integration</li>
                <li>• Confluence documentation</li>
                <li>• Slack & Teams notifications</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Metrics & Insights</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Real-time dashboards</li>
                <li>• Requirement traceability</li>
                <li>• Quality metrics</li>
                <li>• Team velocity tracking</li>
                <li>• ROI measurement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Quick Start</h2>
          
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-300 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Started in 15 Minutes</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Install</h4>
                <p className="text-sm text-gray-700">Install OpenSpec CLI</p>
              </div>
              <div>
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Create</h4>
                <p className="text-sm text-gray-700">Write your first spec</p>
              </div>
              <div>
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Implement</h4>
                <p className="text-sm text-gray-700">Let Bob generate code</p>
              </div>
              <div>
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Deploy</h4>
                <p className="text-sm text-gray-700">Ship with confidence</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Installation</h3>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-3">Install OpenSpec CLI using npm or Python:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-2 overflow-x-auto">
              <code>npm install -g openspec</code>
            </div>
            <p className="text-gray-700 mb-3">Or using Python:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
              <code>pip install openspec</code>
            </div>
            <p className="text-gray-700 mb-3">Verify installation:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>openspec --version</code>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your First Enterprise Specification</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Initialize OpenSpec</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>cd your-project<br/>openspec init</code>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Create Your Specification</h4>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
                <code>openspec create user-authentication</code>
              </div>
              <p className="text-gray-700">This creates <code className="bg-gray-100 px-2 py-1 rounded">openspec/changes/user-authentication/proposal.md</code></p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 3: Write Your Specification</h4>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <pre className="text-sm text-gray-800 whitespace-pre-wrap overflow-x-auto">
{`# User Authentication System

## Problem Statement
Our application needs secure user authentication to protect 
customer data and comply with security requirements.

## Requirements

### Functional Requirements
- REQ-1: Users can register with email and password
- REQ-2: Users can log in with credentials
- REQ-3: System generates JWT tokens for authenticated sessions
- REQ-4: Tokens expire after 24 hours
- REQ-5: Support password reset functionality

### Non-Functional Requirements
- NFR-1: Authentication response time < 200ms (p95)
- NFR-2: Support 10,000 concurrent users
- NFR-3: 99.9% uptime SLA
- NFR-4: OWASP Top 10 compliance

## Architecture
- OAuth 2.0 with JWT tokens
- bcrypt for password hashing (cost factor 12)
- Redis for session management
- Rate limiting: 5 attempts per minute

## Acceptance Criteria
- AC-1: Valid credentials return JWT token
- AC-2: Invalid credentials return 401 error
- AC-3: Expired tokens return 403 error
- AC-4: Failed attempts are logged for security monitoring`}
                </pre>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Step 4: Implement with IBM Bob</h4>
              <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
                <p className="text-gray-800 mb-2">
                  <strong>Ask Bob:</strong> "Bob, please implement the user authentication system according to the OpenSpec proposal in openspec/changes/user-authentication/proposal.md"
                </p>
                <p className="text-gray-700 text-sm">
                  Bob will generate the complete implementation including controllers, services, tests, and documentation following your organization's standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-World Enterprise Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏦 Financial Services</h3>
              <p className="text-gray-700 mb-4">
                Global Bank modernized payment processing while maintaining SOX compliance
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Reduced processing time from 4 hours to 1.8 seconds</li>
                <li>✓ Passed SOX audit with zero findings</li>
                <li>✓ Zero data loss during migration</li>
                <li>✓ 40% reduction in operational costs</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏥 Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Regional Healthcare Network built HIPAA-compliant patient management system
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Achieved HIPAA compliance certification</li>
                <li>✓ Zero security breaches in first year</li>
                <li>✓ 75% faster patient record access</li>
                <li>✓ Unified records across 15 hospitals</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🛒 E-Commerce</h3>
              <p className="text-gray-700 mb-4">
                Fortune 500 retailer migrated to microservices architecture
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Handled 200K requests/second on Black Friday</li>
                <li>✓ Zero downtime during peak season</li>
                <li>✓ 94% reduction in deployment time</li>
                <li>✓ $25M additional revenue (no outages)</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏭 Manufacturing</h3>
              <p className="text-gray-700 mb-4">
                AutoParts modernized 40-year-old mainframe inventory system
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Kept proven COBOL code running</li>
                <li>✓ Added modern API layer in 3 months</li>
                <li>✓ Real-time inventory visibility</li>
                <li>✓ 60% reduction in integration costs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ROI Highlight */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Business Case</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">$8.9M</div>
                <div className="text-gray-700 font-semibold">Year 1 Benefits</div>
                <div className="text-sm text-gray-600">Typical 50-developer team</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary-600 mb-2">2,447%</div>
                <div className="text-gray-700 font-semibold">ROI in Year 1</div>
                <div className="text-sm text-gray-600">$350K investment</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">2 weeks</div>
                <div className="text-gray-700 font-semibold">Payback Period</div>
                <div className="text-sm text-gray-600">Fastest ROI in industry</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Value Drivers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">54% faster time to market</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">75% defect reduction</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">80% fewer production incidents</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">100% compliance violation reduction</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">50% productivity improvement</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">80% faster audit preparation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/tutorials/cobol" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">COBOL/JCL</h3>
              <p className="text-gray-600">Mainframe development with OpenSpec</p>
            </a>
            <a href="/tutorials/java" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Java</h3>
              <p className="text-gray-600">Spring Boot microservices</p>
            </a>
            <a href="/tutorials/dotnet" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">.NET</h3>
              <p className="text-gray-600">ASP.NET Core applications</p>
            </a>
            <a href="/samples" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sample Projects</h3>
              <p className="text-gray-600">Complete working examples</p>
            </a>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Resources</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
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
                    <a href="/playground" className="text-primary-600 hover:text-primary-700 font-medium">
                      🎮 Interactive Playground
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://discord.gg/openspec" className="text-primary-600 hover:text-primary-700 font-medium">
                      💬 Discord Community
                    </a>
                  </li>
                  <li>
                    <a href="https://training.openspec.dev" className="text-primary-600 hover:text-primary-700 font-medium">
                      🎓 Training & Certification
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@openspec.dev" className="text-primary-600 hover:text-primary-700 font-medium">
                      📧 Enterprise Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
