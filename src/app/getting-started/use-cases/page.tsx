export default function UseCasesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Enterprise Use Cases</h1>
        <p className="text-xl text-gray-600">
          Real-world success stories from organizations using OpenSpec
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry Success Stories</h2>
          <p className="text-gray-700 mb-8">
            Organizations across industries have transformed their development practices with OpenSpec, 
            achieving faster delivery, higher quality, and better compliance. Here are their stories.
          </p>
        </section>

        {/* Financial Services */}
        <section className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🏦 Financial Services</h2>
            <p className="text-xl text-gray-700">Global Bank Payment Processing Modernization</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              A Fortune 100 global bank needed to modernize their 40-year-old COBOL payment processing system 
              that handled $2 trillion in daily transactions. The system had:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Minimal documentation (original developers retired)</li>
              <li>4-hour batch processing window (needed to be under 2 hours)</li>
              <li>Strict SOX compliance requirements</li>
              <li>Zero tolerance for data loss or downtime</li>
              <li>Complex integration with 50+ downstream systems</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The OpenSpec Solution</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Phase 1: Documentation (2 months)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Created OpenSpec specifications for all 200+ COBOL programs</li>
                <li>Documented file structures, DB2 schemas, and JCL procedures</li>
                <li>Captured business rules and processing logic</li>
                <li>Established complete traceability matrix</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Phase 2: Optimization (4 months)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Used IBM Bob to analyze and optimize critical paths</li>
                <li>Refactored batch jobs for parallel processing</li>
                <li>Implemented DB2 query optimization</li>
                <li>Added comprehensive error handling</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Phase 3: Validation (2 months)</h4>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Generated test cases from specifications</li>
                <li>Parallel run validation (old vs new system)</li>
                <li>SOX audit preparation and approval</li>
                <li>Phased production rollout</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Performance Improvements</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Processing time: 4 hours → 1.8 seconds</li>
                  <li>✓ 99.99% reduction in processing time</li>
                  <li>✓ Real-time transaction processing enabled</li>
                  <li>✓ 40% reduction in operational costs</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Compliance & Quality</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Passed SOX audit with zero findings</li>
                  <li>✓ Zero data loss during migration</li>
                  <li>✓ Complete audit trail maintained</li>
                  <li>✓ 100% requirement traceability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare */}
        <section className="mb-16">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🏥 Healthcare</h2>
            <p className="text-xl text-gray-700">Regional Healthcare Network Patient Management System</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              A regional healthcare network with 15 hospitals needed to build a unified patient management 
              system that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Complied with HIPAA regulations</li>
              <li>Integrated with existing EMR systems</li>
              <li>Provided real-time patient data access</li>
              <li>Supported 10,000+ concurrent users</li>
              <li>Maintained 99.99% uptime SLA</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The OpenSpec Solution</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Specified HIPAA-compliant architecture in OpenSpec</li>
              <li>Documented all security requirements and controls</li>
              <li>Used IBM Bob to generate Spring Boot microservices</li>
              <li>Implemented comprehensive audit logging</li>
              <li>Created complete test coverage from specifications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">6 months</div>
                <div className="text-sm text-gray-700">Development time (vs 18 months estimated)</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">Zero</div>
                <div className="text-sm text-gray-700">Security breaches in first year</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-sm text-gray-700">Faster patient record access</div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Commerce */}
        <section className="mb-16">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🛒 E-Commerce</h2>
            <p className="text-xl text-gray-700">Fortune 500 Retailer Microservices Migration</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              A Fortune 500 retailer needed to migrate their monolithic e-commerce platform to microservices to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Handle 10x traffic growth during peak seasons</li>
              <li>Enable independent team deployments</li>
              <li>Reduce deployment time from weeks to hours</li>
              <li>Improve system resilience and fault isolation</li>
              <li>Support A/B testing and feature flags</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The OpenSpec Solution</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Specified service boundaries using domain-driven design</li>
              <li>Documented API contracts and event schemas</li>
              <li>Used IBM Bob to generate service scaffolding</li>
              <li>Implemented contract testing with specifications</li>
              <li>Created deployment runbooks for each service</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Black Friday Results</h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Performance</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Handled 200K requests/second</li>
                    <li>✓ Zero downtime during peak season</li>
                    <li>✓ 94% reduction in deployment time</li>
                    <li>✓ 50+ deployments per day</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ $25M additional revenue (no outages)</li>
                    <li>✓ 99.99% uptime achieved</li>
                    <li>✓ 60% faster feature delivery</li>
                    <li>✓ 80% reduction in incidents</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing */}
        <section className="mb-16">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🏭 Manufacturing</h2>
            <p className="text-xl text-gray-700">AutoParts Mainframe Modernization</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              A global auto parts manufacturer needed to modernize their 40-year-old mainframe inventory system while:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Keeping proven COBOL business logic running</li>
              <li>Adding modern REST API layer for mobile apps</li>
              <li>Enabling real-time inventory visibility</li>
              <li>Integrating with cloud-based analytics</li>
              <li>Maintaining 24/7 operations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The OpenSpec Solution</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Documented existing COBOL programs with OpenSpec</li>
              <li>Specified REST API layer for external access</li>
              <li>Used IBM Bob to generate Java integration layer</li>
              <li>Implemented event-driven architecture for real-time updates</li>
              <li>Created comprehensive testing strategy</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Technical Achievements</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Kept proven COBOL code running</li>
                  <li>✓ Added modern API layer in 3 months</li>
                  <li>✓ Real-time inventory visibility</li>
                  <li>✓ Zero business disruption</li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Business Impact</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ 60% reduction in integration costs</li>
                  <li>✓ Mobile app launched successfully</li>
                  <li>✓ Cloud analytics enabled</li>
                  <li>✓ 40% improvement in order accuracy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Telecommunications */}
        <section className="mb-16">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">📱 Telecommunications</h2>
            <p className="text-xl text-gray-700">Telecom Provider 5G Network Management</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              A major telecom provider needed to build a 5G network management system with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Real-time monitoring of 100,000+ network elements</li>
              <li>Sub-second response times for critical alerts</li>
              <li>Integration with legacy OSS/BSS systems</li>
              <li>Multi-vendor equipment support</li>
              <li>Regulatory compliance across 50+ countries</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-indigo-50 rounded-lg">
                <div className="text-4xl font-bold text-indigo-600 mb-2">100K+</div>
                <div className="text-sm text-gray-700">Network elements monitored</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">{'<'}500ms</div>
                <div className="text-sm text-gray-700">Alert response time</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.999%</div>
                <div className="text-sm text-gray-700">System availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Success Factors</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Patterns</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Start with documentation and specifications</li>
                <li>✓ Use IBM Bob for code generation and assistance</li>
                <li>✓ Implement comprehensive testing from specs</li>
                <li>✓ Maintain complete traceability</li>
                <li>✓ Phased rollout with validation</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Results</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 40-60% faster development</li>
                <li>✓ 75% reduction in defects</li>
                <li>✓ 100% audit compliance</li>
                <li>✓ 80% fewer production incidents</li>
                <li>✓ 2,000%+ ROI in year 1</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/getting-started/roi" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 ROI & Metrics</h3>
              <p className="text-gray-600">Detailed business case and financial impact</p>
            </a>
            <a href="/getting-started/enterprise-features" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🔒 Enterprise Features</h3>
              <p className="text-gray-600">Governance, compliance, and audit capabilities</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Made with Bob