export default function EnterpriseFeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Enterprise Features</h1>
        <p className="text-xl text-gray-600">
          Governance, compliance, audit trails, and enterprise-grade capabilities
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* Governance Framework */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🔒 Governance Framework</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-4">
              Enterprise organizations need to ensure development practices align with corporate policies, 
              security standards, and architectural guidelines. Without proper governance:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Teams may use unapproved technologies</li>
              <li>• Security reviews get skipped</li>
              <li>• Architectural standards are ignored</li>
              <li>• Technical debt accumulates</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Policy Enforcement</h3>
            <p className="text-gray-700 mb-4">
              OpenSpec enforces organizational standards through specification templates and approval workflows:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# .openspec.yaml
governance:
  required_sections:
    - security_considerations
    - performance_requirements
    - scalability_plan
    - data_privacy_compliance
  
  approvers:
    - role: security_team
      required_for: [security_considerations]
    - role: architecture_board
      required_for: [architecture, technology_stack]
    - role: compliance_officer
      required_for: [data_privacy_compliance]
  
  standards:
    - name: "Coding Standards v2.1"
      enforcement: mandatory
    - name: "API Design Guidelines"
      enforcement: mandatory`}
            </pre>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">✓ Consistent Governance</h4>
              <p className="text-gray-700 text-sm">All projects follow same standards and approval processes</p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">✓ Automated Enforcement</h4>
              <p className="text-gray-700 text-sm">Policies checked automatically in CI/CD pipeline</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">✓ Clear Workflows</h4>
              <p className="text-gray-700 text-sm">Approval paths defined and tracked</p>
            </div>
          </div>
        </section>

        {/* Compliance & Regulatory */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📋 Compliance & Regulatory Requirements</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industry Compliance Support</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Financial Services</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• SOX (Sarbanes-Oxley)</li>
                  <li>• PCI-DSS (Payment Card Industry)</li>
                  <li>• GLBA (Gramm-Leach-Bliley Act)</li>
                  <li>• Basel III/IV</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Healthcare</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• HIPAA (Health Insurance Portability)</li>
                  <li>• HITECH Act</li>
                  <li>• FDA 21 CFR Part 11</li>
                  <li>• HL7/FHIR Standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data Privacy</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• GDPR (General Data Protection)</li>
                  <li>• CCPA (California Consumer Privacy)</li>
                  <li>• PIPEDA (Canada)</li>
                  <li>• LGPD (Brazil)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Security</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• ISO 27001</li>
                  <li>• SOC 2 Type II</li>
                  <li>• NIST Cybersecurity Framework</li>
                  <li>• OWASP Top 10</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Tracking Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## Compliance Requirements

### HIPAA Compliance
- COMP-HIPAA-1: All PHI must be encrypted at rest (AES-256)
  - Implemented in: EncryptionService.java
  - Tested in: EncryptionServiceTest.java
  - Verified by: Security audit 2024-Q1
  - Status: ✓ Compliant

- COMP-HIPAA-2: Access logs retained for 7 years
  - Implemented in: AuditLogger.java
  - Tested in: AuditLoggerTest.java
  - Verified by: Compliance review 2024-Q1
  - Status: ✓ Compliant

### Audit Documentation
- 2024-01-15: Initial proposal created by J. Smith
- 2024-01-18: Security review by Security Team
- 2024-01-20: Approved by Architecture Board
- 2024-01-25: Implementation completed
- 2024-01-28: Security testing passed
- 2024-01-30: Deployed to production

### Compliance Verification
- SOX Controls: Segregation of duties enforced
- GDPR: Data retention policy documented
- PCI-DSS: Cardholder data encryption verified`}
            </pre>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Pass audits with complete documentation</li>
              <li>✓ Demonstrate compliance to regulators</li>
              <li>✓ Reduce audit preparation time by 70%</li>
              <li>✓ Automated compliance reporting</li>
            </ul>
          </div>
        </section>

        {/* Audit Trail */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Audit Trail & Change Management</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Change History</h3>
            <p className="text-gray-700 mb-4">
              Enterprise audits require answering: What changed? When? Who authorized it? Why? Was it tested? What was the impact?
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# Change Audit Trail

## Change ID: CHG-2024-0156
## Title: Implement Multi-Factor Authentication

### Timeline
| Date | Event | Actor | Details |
|------|-------|-------|---------|
| 2024-01-10 | Request Created | Product Owner | Business requirement for MFA |
| 2024-01-12 | Spec Created | Lead Developer | proposal.md created |
| 2024-01-15 | Security Review | Security Team | Approved with recommendations |
| 2024-01-16 | Spec Updated | Lead Developer | Incorporated security feedback |
| 2024-01-18 | Architecture Review | Arch Board | Approved |
| 2024-01-20 | Implementation Start | Dev Team | Code development began |
| 2024-01-25 | Code Review | Senior Dev | Approved |
| 2024-01-27 | Testing Complete | QA Team | All tests passed |
| 2024-01-29 | UAT Complete | Business Users | Accepted |
| 2024-01-30 | Deployed | DevOps | Production deployment |

### Requirements Traceability
- REQ-1: Support TOTP-based MFA → Implemented ✓ → Tested ✓
- REQ-2: Support SMS-based MFA → Implemented ✓ → Tested ✓
- REQ-3: Remember device for 30 days → Implemented ✓ → Tested ✓

### Approvals
- Security Team: Approved (J. Wilson, 2024-01-15)
- Architecture Board: Approved (M. Chen, 2024-01-18)
- Change Advisory Board: Approved (R. Johnson, 2024-01-29)

### Testing Evidence
- Unit Tests: 45 tests, 100% pass rate
- Integration Tests: 12 tests, 100% pass rate
- Security Tests: Penetration testing passed
- UAT: 15 test scenarios, all passed

### Rollback Plan
- Documented in proposal.md section 8
- Tested in staging environment
- Rollback time: < 5 minutes`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Complete Audit Trail</h4>
              <p className="text-gray-700 text-sm mb-3">Every change tracked from request to deployment</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Who made the change</li>
                <li>• When it was made</li>
                <li>• Why it was necessary</li>
                <li>• Who approved it</li>
                <li>• What was tested</li>
              </ul>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Audit Benefits</h4>
              <p className="text-gray-700 text-sm mb-3">Reduce audit burden significantly</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• 80% faster audit preparation</li>
                <li>• Complete documentation ready</li>
                <li>• Quick response to questions</li>
                <li>• Demonstrate due diligence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">⚠️ Risk Management</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Risk Assessment in Specifications</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## Risk Assessment

### Technical Risks
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Database migration failure | Medium | High | Test in staging, have rollback script |
| Third-party API downtime | Low | Medium | Implement circuit breaker, fallback |
| Performance degradation | Medium | High | Load testing, monitoring alerts |

### Security Risks
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| SQL injection | Low | Critical | Parameterized queries, input validation |
| XSS attacks | Medium | High | Output encoding, CSP headers |
| Authentication bypass | Low | Critical | Security review, penetration testing |

### Compliance Risks
| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| GDPR violation | Low | Critical | Privacy impact assessment, legal review |
| Data breach | Low | Critical | Encryption, access controls, monitoring |`}
            </pre>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Proactive risk identification</li>
              <li>✓ Documented mitigation strategies</li>
              <li>✓ Risk-based decision making</li>
              <li>✓ Reduced production incidents</li>
            </ul>
          </div>
        </section>

        {/* Knowledge Management */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📚 Knowledge Management</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ The Problem</h3>
              <p className="text-gray-700 mb-3">Enterprise knowledge often exists in:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Individual developers' heads</li>
                <li>• Scattered documentation</li>
                <li>• Old wiki pages</li>
                <li>• Email threads</li>
                <li>• Lost when people leave</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ OpenSpec Solution</h3>
              <p className="text-gray-700 mb-3">Centralized knowledge base:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• All specs version controlled</li>
                <li>• Searchable repository</li>
                <li>• Historical context preserved</li>
                <li>• Easy onboarding</li>
                <li>• Knowledge retained</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Knowledge Search Examples</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# Search all specifications for authentication patterns
$ openspec search "authentication" --type=proposal

Results:
- user-auth/proposal.md: OAuth 2.0 implementation
- api-gateway/proposal.md: JWT token validation
- mobile-app/proposal.md: Biometric authentication

# Find all changes related to payment processing
$ openspec search "payment" --tag=compliance

Results:
- payment-gateway/proposal.md: PCI-DSS compliance
- refund-system/proposal.md: Two-phase commit pattern
- billing-service/proposal.md: Subscription management

# View history of a specific requirement
$ openspec history REQ-AUTH-001

History:
- 2024-01-15: Created in user-auth proposal
- 2024-02-10: Referenced in mobile-app proposal
- 2024-03-05: Updated for OAuth 2.1 support
- 2024-04-20: Implemented in production`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Institutional knowledge preserved</li>
              <li>✓ Faster onboarding (weeks → days)</li>
              <li>✓ Consistent patterns across teams</li>
              <li>✓ Reduced knowledge silos</li>
            </ul>
          </div>
        </section>

        {/* Metrics Dashboard */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📈 Enterprise Metrics Dashboard</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Real-Time Compliance Monitoring</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">91%</div>
                <div className="text-sm text-gray-700">Projects with OpenSpec</div>
                <div className="text-xs text-gray-600">142 of 156 projects</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
                <div className="text-sm text-gray-700">Complete Audit Trails</div>
                <div className="text-xs text-gray-600">138 of 142 projects</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-sm text-gray-700">Compliance Rate</div>
                <div className="text-xs text-gray-600">All standards met</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Quality Indicators</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Defect rate: ↘️ -75%</li>
                  <li>• Test coverage: ↗️ +25%</li>
                  <li>• Code review time: ↘️ -70%</li>
                  <li>• Requirements coverage: 94%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Compliance Status</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Audit findings: ↘️ -100%</li>
                  <li>• Compliance violations: ↘️ -100%</li>
                  <li>• Documentation quality: ↗️ +58%</li>
                  <li>• Risk mitigation: 98% complete</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Executive Visibility</h3>
            <p className="text-gray-700 mb-4">
              Real-time dashboards provide executives with complete visibility into development practices, 
              compliance status, and risk management across the organization.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Compliance monitoring</li>
              <li>✓ Process improvement insights</li>
              <li>✓ Risk trending analysis</li>
              <li>✓ Team performance metrics</li>
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/getting-started/sdlc-phases" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 SDLC Phases</h3>
              <p className="text-gray-600">Complete guide to OpenSpec across all phases</p>
            </a>
            <a href="/getting-started/integrations" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🔗 Tool Integrations</h3>
              <p className="text-gray-600">JIRA, GitHub, Azure DevOps, and more</p>
            </a>
            <a href="/getting-started/use-cases" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🏢 Enterprise Use Cases</h3>
              <p className="text-gray-600">Real-world success stories</p>
            </a>
            <a href="/getting-started/roi" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📊 ROI & Metrics</h3>
              <p className="text-gray-600">Business case and financial impact</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Made with Bob