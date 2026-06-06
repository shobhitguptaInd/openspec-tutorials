'use client';

import { useEffect } from 'react';

export default function SDLCPhasesPage() {
  useEffect(() => {
    // Load Mermaid dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.async = true;
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).mermaid) {
        (window as any).mermaid.initialize({ 
          startOnLoad: true,
          theme: 'default',
          securityLevel: 'loose'
        });
        (window as any).mermaid.contentLoaded();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">OpenSpec Across the SDLC</h1>
        <p className="text-xl text-gray-600">
          Complete guide to integrating OpenSpec into every phase of your software development lifecycle
        </p>
      </div>

      {/* SDLC Overview Diagram */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete SDLC Integration</h2>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-8">
          <div className="mermaid">
{`graph TB
    Start[Business Need] --> Req[📋 Requirements Phase]
    Req --> |OpenSpec Proposal| HLD[🏗️ High-Level Design]
    HLD --> |Architecture Specs| LLD[⚙️ Low-Level Design]
    LLD --> |Technical Specs| Dev[💻 Development]
    Dev --> |Code + Specs| Review[👥 Code Review]
    Review --> |Validated Code| Test[🧪 Testing]
    Test --> |Test Results| Deploy[🚀 Deployment]
    Deploy --> |Production| Monitor[📊 Monitoring]
    
    Req -.-> |Traceability| ReqDoc[Requirements Doc]
    HLD -.-> |Architecture| ADR[Architecture Decisions]
    LLD -.-> |API Contracts| APISpec[API Specifications]
    Dev -.-> |Implementation| Code[Source Code]
    Review -.-> |Audit Trail| ReviewLog[Review Records]
    Test -.-> |Coverage| TestReport[Test Reports]
    Deploy -.-> |Runbooks| DeployDoc[Deployment Docs]
    
    Bob[🤖 IBM Bob AI] -.-> |Assists| Dev
    Bob -.-> |Validates| Review
    Bob -.-> |Generates| Test
    
    Tools[🔧 Enterprise Tools] -.-> |Integration| Req
    Tools -.-> |Integration| Review
    Tools -.-> |Integration| Deploy
    
    style Req fill:#e1f5ff
    style HLD fill:#e1f5ff
    style LLD fill:#e1f5ff
    style Dev fill:#fff4e1
    style Review fill:#fff4e1
    style Test fill:#e8f5e9
    style Deploy fill:#e8f5e9
    style Bob fill:#f3e5f5
    style Tools fill:#fce4ec`}
          </div>
        </div>
        <p className="text-gray-700 text-center text-lg">
          Every phase connected through specifications, ensuring complete traceability from business need to production
        </p>
      </section>

      <div className="prose prose-lg max-w-none">
        
        {/* Phase 1: Requirements */}
        <section className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">📋 Phase 1: Requirements Gathering</h2>
            <p className="text-xl text-gray-700">Capture business needs in structured, traceable format</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ Developer Pain Points</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Requirements scattered across emails, meetings, documents</li>
                <li>• Ambiguous or incomplete requirements</li>
                <li>• Lost context over time</li>
                <li>• Difficulty tracking requirement changes</li>
                <li>• No link between requirements and code</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ OpenSpec Solution</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Structured proposal.md format captures all requirements</li>
                <li>• Problem statement clearly defines the "why"</li>
                <li>• Requirements with unique IDs (REQ-1, REQ-2, etc.)</li>
                <li>• Version controlled alongside code</li>
                <li>• Linked to JIRA/Azure DevOps tickets</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Traceability</h4>
                <p className="text-gray-700">Every requirement has a unique identifier that traces through implementation, testing, and deployment</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📝 Clarity</h4>
                <p className="text-gray-700">Structured format ensures completeness and reduces ambiguity</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Collaboration</h4>
                <p className="text-gray-700">Team reviews specs before coding, catching issues early</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📚 Documentation</h4>
                <p className="text-gray-700">Requirements live with the code, never out of sync</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example: Requirements Section</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## Requirements

### Functional Requirements
- REQ-1: System shall authenticate users via OAuth 2.0
- REQ-2: Session timeout after 30 minutes of inactivity
- REQ-3: Support SSO with corporate identity provider
- REQ-4: Users can reset password via email
- REQ-5: Failed login attempts are logged

### Non-Functional Requirements
- NFR-1: Authentication response time < 200ms (p95)
- NFR-2: Support 10,000 concurrent users
- NFR-3: 99.9% uptime SLA
- NFR-4: OWASP Top 10 compliance`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tool Integration</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Link OpenSpec proposals to JIRA tickets</li>
              <li>✓ Auto-sync requirements to Azure DevOps work items</li>
              <li>✓ Generate requirement traceability matrix</li>
              <li>✓ Bidirectional sync keeps everything in sync</li>
            </ul>
          </div>
        </section>

        {/* Phase 2: High-Level Design */}
        <section className="mb-16">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🏗️ Phase 2: High-Level Design (HLD)</h2>
            <p className="text-xl text-gray-700">Document system architecture and design decisions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">❌ Developer Pain Points</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Architecture decisions not documented</li>
                <li>• System design exists only in architects' heads</li>
                <li>• New team members struggle to understand system</li>
                <li>• Design drift over time</li>
                <li>• No record of why decisions were made</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✅ OpenSpec Solution</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Architecture section in proposals</li>
                <li>• Architecture Decision Records (ADRs)</li>
                <li>• Component interaction diagrams</li>
                <li>• Technology stack decisions documented</li>
                <li>• Integration points clearly defined</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Architecture Decision Record (ADR) Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## ADR-001: Use Microservices Architecture

**Status:** Accepted
**Date:** 2024-01-30
**Deciders:** Architecture Board, Tech Leads

**Context:**
We need to scale our monolithic application to handle 10x traffic 
growth and enable independent team deployments.

**Decision:**
Adopt microservices architecture with:
- Domain-driven design for service boundaries
- Event-driven communication between services
- API Gateway for external access
- Service mesh for internal communication

**Consequences:**

Positive:
- Independent scaling of services
- Technology flexibility per service
- Faster deployment cycles
- Better fault isolation

Negative:
- Increased operational complexity
- Distributed system challenges
- Need for service mesh infrastructure

**Alternatives Considered:**
1. Modular Monolith - Rejected due to scaling limitations
2. Serverless - Rejected due to vendor lock-in concerns`}
            </pre>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Architecture Governance:</strong> Design review before implementation</li>
              <li>✓ <strong>Knowledge Sharing:</strong> Onboard new developers faster</li>
              <li>✓ <strong>Consistency:</strong> Reusable architecture patterns</li>
              <li>✓ <strong>Decision Records:</strong> Why certain choices were made</li>
            </ul>
          </div>
        </section>

        {/* Phase 3: Low-Level Design */}
        <section className="mb-16">
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">⚙️ Phase 3: Low-Level Design (LLD)</h2>
            <p className="text-xl text-gray-700">Define detailed technical specifications and contracts</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">API Specification Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## API Specifications

### POST /api/auth/login

**Request:**
{
  "email": "string",
  "password": "string"
}

**Response (200 OK):**
{
  "token": "string",
  "expiresIn": "number",
  "user": {
    "id": "string",
    "email": "string",
    "firstName": "string",
    "lastName": "string"
  }
}

**Response (401 Unauthorized):**
{
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Invalid email or password"
  }
}

## Database Schema

Table: users
- id: UUID PRIMARY KEY
- email: VARCHAR(255) UNIQUE NOT NULL
- password_hash: VARCHAR(255) NOT NULL
- first_name: VARCHAR(100)
- last_name: VARCHAR(100)
- created_at: TIMESTAMP DEFAULT NOW()
- updated_at: TIMESTAMP DEFAULT NOW()`}
            </pre>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Implementation Clarity:</strong> Developers know exactly what to build</li>
              <li>✓ <strong>API Contracts:</strong> Frontend/backend teams aligned</li>
              <li>✓ <strong>Database Planning:</strong> Schema reviewed before implementation</li>
              <li>✓ <strong>Code Generation:</strong> IBM Bob generates boilerplate from specs</li>
            </ul>
          </div>
        </section>

        {/* Phase 4: Development */}
        <section className="mb-16">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">💻 Phase 4: Development</h2>
            <p className="text-xl text-gray-700">AI-assisted implementation following specifications</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Developer Workflow with Bob</h3>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm">
              <div className="space-y-2">
                <div><span className="text-blue-400">Developer:</span> "Bob, read the user-auth proposal"</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Analyzed 5 requirements</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Reviewed architecture section</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Ready to implement</div>
                <div className="pt-2"><span className="text-blue-400">Developer:</span> "Implement REQ-1 and REQ-2"</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Generated AuthController.java</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Generated SecurityConfig.java</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Created 12 unit tests</div>
                <div><span className="text-purple-400">Bob:</span> ✓ Created 5 integration tests</div>
                <div className="pt-2 text-green-400">⚡ Result: 40-60% time savings vs manual coding</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 40-60% faster development</li>
                <li>✓ Consistent code patterns</li>
                <li>✓ Edge cases handled</li>
                <li>✓ Tests generated automatically</li>
                <li>✓ Standards enforced</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What Bob Generates</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Controllers/Endpoints</li>
                <li>• Service layer logic</li>
                <li>• Data access code</li>
                <li>• Unit tests</li>
                <li>• Integration tests</li>
                <li>• Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 5: Code Review */}
        <section className="mb-16">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">👥 Phase 5: Code Review</h2>
            <p className="text-xl text-gray-700">Spec-driven review with objective criteria</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Review Checklist (Auto-generated from Spec)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Specification Compliance</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>☑ All requirements from spec implemented</li>
                  <li>☑ Code follows specified architecture</li>
                  <li>☑ API contracts match specification</li>
                  <li>☑ Error handling as specified</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Coding Standards</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>☑ Follows organization style guide</li>
                  <li>☑ Naming conventions adhered to</li>
                  <li>☑ No prohibited patterns used</li>
                  <li>☑ Required patterns implemented</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quality Gates</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>☑ Test coverage > 80%</li>
                  <li>☑ No critical security issues</li>
                  <li>☑ Performance requirements met</li>
                  <li>☑ Documentation complete</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Context-Rich Reviews:</strong> Reviewers read spec first</li>
              <li>✓ <strong>Objective Criteria:</strong> Check against documented requirements</li>
              <li>✓ <strong>Faster Reviews:</strong> AI pre-validates common issues (70% faster)</li>
              <li>✓ <strong>Audit Trail:</strong> All review decisions documented</li>
            </ul>
          </div>
        </section>

        {/* Phase 6: Testing */}
        <section className="mb-16">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🧪 Phase 6: Testing</h2>
            <p className="text-xl text-gray-700">Test cases generated from requirements</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance Criteria → Test Cases</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## Acceptance Criteria
AC-1: Given valid credentials, user receives JWT token
AC-2: Given invalid credentials, system returns 401 error
AC-3: Given expired token, system returns 403 error

## Test Cases (Generated)
TC-1: Test successful login (covers AC-1)
  - Input: Valid email and password
  - Expected: 200 OK with JWT token
  - Actual: ✓ Pass

TC-2: Test invalid password (covers AC-2)
  - Input: Valid email, wrong password
  - Expected: 401 Unauthorized
  - Actual: ✓ Pass

TC-3: Test expired token (covers AC-3)
  - Input: Request with expired token
  - Expected: 403 Forbidden
  - Actual: ✓ Pass

## Coverage Report
Requirements Coverage: 100% (3/3)
Test Pass Rate: 100% (3/3)
Code Coverage: 92%`}
            </pre>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Complete Coverage:</strong> Every requirement has tests</li>
              <li>✓ <strong>Automated Generation:</strong> Bob creates test scaffolding</li>
              <li>✓ <strong>Clear Criteria:</strong> Pass/fail based on spec</li>
              <li>✓ <strong>Traceability:</strong> Tests linked to requirements</li>
            </ul>
          </div>
        </section>

        {/* Phase 7: Deployment */}
        <section className="mb-16">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">🚀 Phase 7: Deployment</h2>
            <p className="text-xl text-gray-700">Documented procedures with rollback plans</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Deployment Specification Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`## Deployment Specification

### Prerequisites
- Database migration v2.3.0 applied
- Redis cluster scaled to 3 nodes
- Feature flag 'oauth-login' enabled in config

### Deployment Steps
1. Deploy API Gateway configuration
   Command: kubectl apply -f gateway-config.yaml
   
2. Deploy auth-service v1.2.0
   Command: kubectl set image deployment/auth-service auth=auth:1.2.0
   
3. Run smoke tests
   Command: ./scripts/smoke-test.sh
   
4. Enable traffic routing
   Command: kubectl patch service auth-service -p '{"spec":{"selector":{"version":"1.2.0"}}}'

### Verification
- Health check: GET /health returns 200
- Auth endpoint: POST /api/auth/login works
- Metrics: Error rate < 0.1%

### Rollback Procedure
1. Disable traffic routing
2. Revert to auth-service v1.1.0
3. Restore previous API Gateway config
4. Verify rollback successful

Estimated rollback time: < 5 minutes`}
            </pre>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Reliable Deployments:</strong> Step-by-step procedures</li>
              <li>✓ <strong>Configuration Management:</strong> All settings documented</li>
              <li>✓ <strong>Risk Mitigation:</strong> Rollback plans ready</li>
              <li>✓ <strong>Compliance:</strong> Complete change documentation</li>
            </ul>
          </div>
        </section>

        {/* Workflow Diagram */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Spec-Driven Development Workflow</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <div className="mermaid">
{`sequenceDiagram
    participant Dev as Developer
    participant Spec as OpenSpec
    participant Bob as IBM Bob
    participant Review as Code Review
    participant CI as CI/CD Pipeline
    participant Prod as Production
    
    Dev->>Spec: 1. Create proposal.md
    Note over Spec: Define requirements,<br/>design, acceptance criteria
    
    Spec->>Bob: 2. Request implementation
    Bob->>Bob: Analyze specifications
    Bob->>Dev: 3. Generate code + tests
    
    Dev->>Spec: 4. Validate against specs
    Note over Dev,Spec: Ensure alignment
    
    Dev->>Review: 5. Submit for review
    Review->>Spec: 6. Check spec compliance
    Review->>Bob: 7. AI-assisted review
    
    Review->>CI: 8. Merge to main
    CI->>Spec: 9. Validate requirements
    CI->>CI: Run tests
    
    CI->>Prod: 10. Deploy
    Prod->>Spec: 11. Update deployment docs
    
    Note over Dev,Prod: Complete traceability<br/>from spec to production`}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-300 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Complete SDLC Coverage</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-5xl mb-2">📋→🏗️→⚙️</div>
                <div className="font-semibold text-gray-900">Planning</div>
                <div className="text-sm text-gray-600">Requirements, HLD, LLD</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">💻→👥→🧪</div>
                <div className="font-semibold text-gray-900">Building</div>
                <div className="text-sm text-gray-600">Dev, Review, Testing</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🚀→📊→✅</div>
                <div className="font-semibold text-gray-900">Shipping</div>
                <div className="text-sm text-gray-600">Deploy, Monitor, Audit</div>
              </div>
            </div>
            <p className="text-center text-lg text-gray-700">
              Every phase connected through OpenSpec specifications, ensuring complete traceability and compliance
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Explore More</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/getting-started/enterprise-features" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🔒 Enterprise Features</h3>
              <p className="text-gray-600">Governance, compliance, and audit trails</p>
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