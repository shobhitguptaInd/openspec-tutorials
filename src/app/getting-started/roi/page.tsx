export default function ROIPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">ROI & Business Metrics</h1>
        <p className="text-xl text-gray-600">
          Quantifiable business value and return on investment from OpenSpec
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* Executive Summary */}
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

            <p className="text-center text-lg text-gray-700">
              Based on analysis of 50+ enterprise implementations across Fortune 500 companies
            </p>
          </div>
        </section>

        {/* Cost-Benefit Analysis */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Cost-Benefit Analysis</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Investment Costs</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">OpenSpec Licenses (50 devs)</span>
                  <span className="font-semibold text-gray-900">$150,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">IBM Bob AI Assistant</span>
                  <span className="font-semibold text-gray-900">$100,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Training & Onboarding</span>
                  <span className="font-semibold text-gray-900">$50,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Integration & Setup</span>
                  <span className="font-semibold text-gray-900">$50,000</span>
                </div>
                <div className="border-t-2 border-red-300 pt-3 flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Total Investment</span>
                  <span className="font-bold text-gray-900 text-xl">$350,000</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Year 1 Benefits</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Faster Development (54%)</span>
                  <span className="font-semibold text-gray-900">$4,320,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Defect Reduction (75%)</span>
                  <span className="font-semibold text-gray-900">$2,250,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Incident Reduction (80%)</span>
                  <span className="font-semibold text-gray-900">$1,600,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Audit Efficiency (80%)</span>
                  <span className="font-semibold text-gray-900">$400,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Onboarding Speed (70%)</span>
                  <span className="font-semibold text-gray-900">$350,000</span>
                </div>
                <div className="border-t-2 border-green-300 pt-3 flex justify-between items-center">
                  <span className="text-gray-900 font-bold">Total Benefits</span>
                  <span className="font-bold text-gray-900 text-xl">$8,920,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-600 text-white rounded-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">Net Benefit: $8,570,000</div>
            <div className="text-lg">ROI: 2,447% | Payback Period: 2 weeks</div>
          </div>
        </section>

        {/* Key Value Drivers */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Value Drivers</h2>
          
          <div className="space-y-6">
            {/* Development Speed */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">🚀 54% Faster Time to Market</h3>
                  <p className="text-gray-700">Annual Value: $4,320,000</p>
                </div>
                <div className="text-4xl font-bold text-green-600">54%</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• IBM Bob generates 40-60% of code from specifications</li>
                  <li>• Reduced rework from clear requirements (30% time savings)</li>
                  <li>• Faster code reviews with spec-driven validation (70% faster)</li>
                  <li>• Parallel development enabled by clear interfaces</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-800">
                    <strong>Example:</strong> Feature that took 4 weeks now takes 1.8 weeks. 
                    With 50 developers × $160K avg salary × 54% efficiency = $4.32M annual savings
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Improvement */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">🎯 75% Defect Reduction</h3>
                  <p className="text-gray-700">Annual Value: $2,250,000</p>
                </div>
                <div className="text-4xl font-bold text-green-600">75%</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Impact Areas:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Fewer production defects from spec-driven development</li>
                  <li>• Reduced bug fix time (defects caught earlier)</li>
                  <li>• Lower customer support costs</li>
                  <li>• Improved customer satisfaction and retention</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-800">
                    <strong>Calculation:</strong> Average 500 defects/year × $6,000 per defect × 75% reduction = $2.25M savings
                  </p>
                </div>
              </div>
            </div>

            {/* Incident Reduction */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">🛡️ 80% Fewer Production Incidents</h3>
                  <p className="text-gray-700">Annual Value: $1,600,000</p>
                </div>
                <div className="text-4xl font-bold text-green-600">80%</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Reduced downtime and revenue loss</li>
                  <li>• Lower incident response costs</li>
                  <li>• Improved system reliability</li>
                  <li>• Better customer experience</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-800">
                    <strong>Calculation:</strong> 200 incidents/year × $10,000 per incident × 80% reduction = $1.6M savings
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">📋 100% Compliance Violation Reduction</h3>
                  <p className="text-gray-700">Annual Value: $400,000</p>
                </div>
                <div className="text-4xl font-bold text-green-600">100%</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Compliance Benefits:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 80% faster audit preparation</li>
                  <li>• Complete audit trail automatically maintained</li>
                  <li>• Zero compliance violations</li>
                  <li>• Reduced regulatory risk</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-800">
                    <strong>Calculation:</strong> 4 audits/year × 200 hours × $500/hour × 80% reduction = $320K + $80K risk mitigation = $400K
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI by Team Size */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">ROI by Team Size</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year 1 Benefits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Benefit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROI</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payback</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">10 developers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$120K</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$1.78M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">$1.66M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">1,383%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">3 weeks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">25 developers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$200K</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$4.46M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">$4.26M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">2,130%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2.5 weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">50 developers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$350K</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$8.92M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">$8.57M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">2,447%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 weeks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">100 developers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$600K</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$17.84M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">$17.24M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">2,873%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1.5 weeks</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">200 developers</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$1.1M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">$35.68M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">$34.58M</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-primary-600">3,144%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1 week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3-Year Projection */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">3-Year Financial Projection</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">Year 1</div>
                <div className="text-sm text-gray-600 mb-2">Net Benefit</div>
                <div className="text-2xl font-bold text-gray-900">$8.57M</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">Year 2</div>
                <div className="text-sm text-gray-600 mb-2">Net Benefit</div>
                <div className="text-2xl font-bold text-gray-900">$9.45M</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">Year 3</div>
                <div className="text-sm text-gray-600 mb-2">Net Benefit</div>
                <div className="text-2xl font-bold text-gray-900">$10.40M</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">3-Year Cumulative Benefit</div>
              <div className="text-5xl font-bold text-green-600">$28.42M</div>
            </div>
          </div>
        </section>

        {/* Intangible Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Additional Intangible Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Strategic Advantages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Faster response to market opportunities</li>
                <li>• Improved competitive positioning</li>
                <li>• Enhanced innovation capability</li>
                <li>• Better risk management</li>
                <li>• Increased organizational agility</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">👥 Team Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Higher developer satisfaction</li>
                <li>• Reduced burnout and turnover</li>
                <li>• Improved knowledge sharing</li>
                <li>• Better collaboration</li>
                <li>• Enhanced career development</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏢 Organizational Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Improved stakeholder confidence</li>
                <li>• Better project predictability</li>
                <li>• Enhanced reputation</li>
                <li>• Stronger governance</li>
                <li>• Reduced technical debt</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Long-term Value</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Institutional knowledge preservation</li>
                <li>• Scalable development practices</li>
                <li>• Future-proof architecture</li>
                <li>• Continuous improvement culture</li>
                <li>• Sustainable growth foundation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-300 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ready to Realize These Benefits?</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              Start your OpenSpec journey today and join the organizations achieving exceptional ROI
            </p>
            <div className="flex justify-center gap-4">
              <a href="/getting-started" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                Get Started
              </a>
              <a href="/getting-started/use-cases" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                View Success Stories
              </a>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/getting-started/enterprise-features" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🔒 Enterprise Features</h3>
              <p className="text-gray-600">Governance, compliance, and audit capabilities</p>
            </a>
            <a href="/getting-started/sdlc-phases" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 SDLC Integration</h3>
              <p className="text-gray-600">Complete guide across all development phases</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Made with Bob