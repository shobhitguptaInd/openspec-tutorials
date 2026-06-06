'use client';

export default function QuickReferencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Quick Reference Guide</h1>
        <p className="text-xl text-gray-600">
          Commands, templates, and troubleshooting for OpenSpec
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* SDLC Phase Mapping */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📋 SDLC Phase Quick Reference</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-primary-300 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-7 gap-4 text-center">
              <div>
                <div className="text-4xl mb-2">📋</div>
                <div className="font-semibold text-sm">Requirements</div>
                <div className="text-xs text-gray-600 mt-2">proposal.md</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🏗️</div>
                <div className="font-semibold text-sm">HLD</div>
                <div className="text-xs text-gray-600 mt-2">Architecture</div>
              </div>
              <div>
                <div className="text-4xl mb-2">⚙️</div>
                <div className="font-semibold text-sm">LLD</div>
                <div className="text-xs text-gray-600 mt-2">API Specs</div>
              </div>
              <div>
                <div className="text-4xl mb-2">💻</div>
                <div className="font-semibold text-sm">Dev</div>
                <div className="text-xs text-gray-600 mt-2">Bob AI</div>
              </div>
              <div>
                <div className="text-4xl mb-2">👥</div>
                <div className="font-semibold text-sm">Review</div>
                <div className="text-xs text-gray-600 mt-2">Validation</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🧪</div>
                <div className="font-semibold text-sm">Testing</div>
                <div className="text-xs text-gray-600 mt-2">Coverage</div>
              </div>
              <div>
                <div className="text-4xl mb-2">🚀</div>
                <div className="font-semibold text-sm">Deploy</div>
                <div className="text-xs text-gray-600 mt-2">Runbooks</div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Commands */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">⌨️ Common Commands</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project Setup</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Initialize OpenSpec in project</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec init
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Show current configuration</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec config --show
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Creating Specifications</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Create new specification</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec create {'<name>'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Use template</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec create {'<name>'} --template java-service
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Create from JIRA ticket</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec create --from-jira PROJ-123
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Working with Specs</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">List all specifications</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec list
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Show specification details</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec show {'<name>'}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Search specifications</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec search "keyword"
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Validation</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Validate all specs</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec validate
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Check requirement coverage</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec validate --coverage
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Check coding standards</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec lint
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Integration</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Link to JIRA ticket</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec link --jira PROJ-123
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Sync to Azure DevOps</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec sync --to-ado
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Publish to Confluence</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec publish --confluence
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Reporting</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Generate report</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec report
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Coverage report</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec coverage --report
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Show metrics</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec metrics
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">History</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Show change history</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec history
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Track specific requirement</div>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm">
                    openspec history {'<requirement-id>'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📁 File Structure</h2>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`your-project/
├── .openspec.yaml              # OpenSpec configuration
├── openspec/
│   ├── templates/              # Spec templates
│   │   ├── java-service.yaml
│   │   ├── rest-api.yaml
│   │   └── microservice.yaml
│   ├── patterns/               # Reusable patterns
│   │   ├── auth-pattern.yaml
│   │   └── cache-pattern.yaml
│   └── changes/                # All specifications
│       ├── user-auth/
│       │   ├── proposal.md     # Main specification
│       │   ├── adr-001.md      # Architecture decisions
│       │   └── tests.md        # Test specifications
│       └── payment-processing/
│           ├── proposal.md
│           └── deployment.md
├── src/                        # Source code
└── tests/                      # Tests`}
            </pre>
          </div>
        </section>

        {/* Specification Template */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📝 Specification Template</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# [Feature Name]

## Problem Statement
What problem are we solving? Why is it important?

## Proposed Solution
High-level approach to solving the problem.

## Requirements

### Functional Requirements
- REQ-1: [Description]
- REQ-2: [Description]
- REQ-3: [Description]

### Non-Functional Requirements
- NFR-1: Performance requirement
- NFR-2: Security requirement
- NFR-3: Scalability requirement

## Architecture

### System Components
[Describe components and their interactions]

### Technology Stack
- Backend: [Technology]
- Frontend: [Technology]
- Database: [Technology]

### Architecture Diagram
[Include diagram or description]

## Technical Specifications

### API Endpoints
[Define API contracts]

### Database Schema
[Define data models]

### Integration Points
[External systems and APIs]

## Security Considerations
- Authentication approach
- Authorization model
- Data protection
- Audit logging

## Testing Strategy

### Test Cases
- TC-1: [Test case description]
- TC-2: [Test case description]

### Acceptance Criteria
- AC-1: [Criteria]
- AC-2: [Criteria]

## Deployment Specification

### Prerequisites
[What needs to be in place]

### Deployment Steps
[Step-by-step procedure]

### Rollback Procedure
[How to rollback if needed]

## Risks & Mitigation
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| [Risk] | High | Medium | [Strategy] |`}
            </pre>
          </div>
        </section>

        {/* Role-Based Checklists */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">✅ Role-Based Checklists</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Developers</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Install OpenSpec CLI</li>
                <li>☐ Create your first spec</li>
                <li>☐ Write requirements in proposal.md</li>
                <li>☐ Get spec reviewed by team</li>
                <li>☐ Implement with Bob</li>
                <li>☐ Validate against spec</li>
                <li>☐ Submit for code review</li>
                <li>☐ Deploy with documentation</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Tech Leads</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Set up OpenSpec for team</li>
                <li>☐ Define coding standards</li>
                <li>☐ Establish review process</li>
                <li>☐ Integrate with tools</li>
                <li>☐ Train team</li>
                <li>☐ Monitor metrics</li>
                <li>☐ Review and improve process</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Architects</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Create architecture templates</li>
                <li>☐ Document ADRs</li>
                <li>☐ Define standards</li>
                <li>☐ Review specifications</li>
                <li>☐ Maintain pattern library</li>
                <li>☐ Ensure compliance</li>
                <li>☐ Guide technology choices</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For QA Engineers</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Extract test cases from specs</li>
                <li>☐ Create test plans</li>
                <li>☐ Execute testing</li>
                <li>☐ Report coverage</li>
                <li>☐ Validate deployment</li>
                <li>☐ Document test results</li>
                <li>☐ Track defects to requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🔧 Troubleshooting</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ "Spec validation failed"</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Solutions:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Check proposal.md format</li>
                  <li>Ensure all required sections present</li>
                  <li>Validate YAML frontmatter</li>
                  <li>Run: <code className="bg-gray-100 px-2 py-1 rounded">openspec validate --verbose</code></li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ "Coverage below threshold"</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Solutions:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Add tests for missing requirements</li>
                  <li>Link tests to requirements</li>
                  <li>Run: <code className="bg-gray-100 px-2 py-1 rounded">openspec coverage --report</code></li>
                  <li>Check which requirements lack tests</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ "Integration sync failed"</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Solutions:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Check credentials in .openspec.yaml</li>
                  <li>Verify network connectivity</li>
                  <li>Check API permissions</li>
                  <li>Run: <code className="bg-gray-100 px-2 py-1 rounded">openspec sync --debug</code></li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">❌ "Bob not generating code"</h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p><strong>Solutions:</strong></p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Check spec clarity and completeness</li>
                  <li>Ensure requirements are specific</li>
                  <li>Verify Bob has access to spec</li>
                  <li>Try: "Bob, read the spec first"</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">⭐ Best Practices</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do's ✓</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Write specs before code</li>
                  <li>✓ Get specs reviewed by team</li>
                  <li>✓ Use unique requirement IDs</li>
                  <li>✓ Include acceptance criteria</li>
                  <li>✓ Document architecture decisions</li>
                  <li>✓ Link specs to tickets</li>
                  <li>✓ Keep specs up to date</li>
                  <li>✓ Use templates for consistency</li>
                  <li>✓ Include diagrams for clarity</li>
                  <li>✓ Define rollback procedures</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Don'ts ✗</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✗ Skip spec creation</li>
                  <li>✗ Write vague requirements</li>
                  <li>✗ Forget to update specs</li>
                  <li>✗ Skip team review</li>
                  <li>✗ Ignore coding standards</li>
                  <li>✗ Leave specs incomplete</li>
                  <li>✗ Skip testing strategy</li>
                  <li>✗ Forget security considerations</li>
                  <li>✗ Ignore deployment planning</li>
                  <li>✗ Skip risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Wins */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Quick Wins: 4-Week Adoption Plan</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Week 1: Foundation</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Install OpenSpec</li>
                <li>☐ Create first spec</li>
                <li>☐ Get team review</li>
                <li>☐ Implement with Bob</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Week 2: Integration</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Link to JIRA</li>
                <li>☐ Add CI/CD validation</li>
                <li>☐ Create templates</li>
                <li>☐ Set up metrics</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Week 3: Adoption</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Document existing features</li>
                <li>☐ Train team</li>
                <li>☐ Set up dashboard</li>
                <li>☐ Establish standards</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Week 4: Optimization</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>☐ Review process</li>
                <li>☐ Collect feedback</li>
                <li>☐ Measure improvements</li>
                <li>☐ Refine workflow</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">⌨️ VS Code Extension Shortcuts</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Specification Commands</h3>
                <ul className="space-y-2 text-gray-700 text-sm font-mono">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O S</kbd> Create new spec</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O V</kbd> Validate current spec</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O C</kbd> Check coverage</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O L</kbd> List all specs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Navigation & Testing</h3>
                <ul className="space-y-2 text-gray-700 text-sm font-mono">
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O F</kbd> Find requirement</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O R</kbd> Run tests for requirement</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O G</kbd> Go to spec</li>
                  <li><kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl+Shift+O H</kbd> Show history</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Support Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Support Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
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
                  <a href="https://examples.openspec.dev" className="text-primary-600 hover:text-primary-700 font-medium">
                    📊 Example Projects
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community & Support</h3>
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
        </section>

        {/* Back Navigation */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-300 rounded-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Explore more detailed guides and enterprise features
            </p>
            <div className="flex justify-center gap-4">
              <a href="/getting-started" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
                ← Back to Getting Started
              </a>
              <a href="/getting-started/sdlc-phases" className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
                View SDLC Guide →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Made with Bob
