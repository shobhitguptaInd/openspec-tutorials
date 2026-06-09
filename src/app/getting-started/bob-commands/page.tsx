import Link from 'next/link'
import { links } from '@/config/links'

export default function BobCommands() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          OpenSpec Commands for IBM Bob
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          This guide showcases the OpenSpec commands available in Bob's workflow, demonstrating the prompts, purposes, and structures used for AI-driven software development.
        </p>

        {/* Command Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Command Architecture</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8 overflow-x-auto">
            <pre className="text-sm">
{`┌─────────────────────────────────────────────────────────────┐
│                    OpenSpec Workflow                        │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ EXPLORE │          │ PROPOSE │          │  APPLY  │
   │  Mode   │─────────▶│ Change  │─────────▶│  Tasks  │
   └─────────┘          └─────────┘          └─────────┘
        │                     │                     │
        │                     ▼                     ▼
        │               ┌─────────┐          ┌─────────┐
        └──────────────▶│  SYNC   │◀─────────│ ARCHIVE │
                        │  Specs  │          │ Change  │
                        └─────────┘          └─────────┘`}
            </pre>
          </div>
        </section>

        {/* opsx-propose Deep Dive */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            <code className="bg-gray-100 px-3 py-1 rounded text-primary-600">/opsx-propose</code> - Change Proposal Generation
          </h2>
          
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Purpose</h3>
            <p className="text-gray-800">
              Create a new change with all artifacts (proposal, design, specs, tasks) generated in one step, ready for implementation.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Characteristics</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
            <li><strong>All-in-one artifact generation</strong> - Creates complete change structure</li>
            <li><strong>Dependency-aware</strong> - Follows artifact dependency graph</li>
            <li><strong>Template-driven</strong> - Uses OpenSpec templates for consistency</li>
            <li><strong>Context-constrained</strong> - Uses project context to guide artifact creation without copying it</li>
          </ul>

          {/* Workflow Steps */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Detailed Workflow</h3>
          
          {/* Step 1 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</div>
              <h4 className="text-xl font-semibold text-gray-900">Input Handling & Change Creation</h4>
            </div>
            
            <p className="text-gray-700 mb-4">
              If no input provided, Bob asks: <em>"What change do you want to work on? Describe what you want to build or fix."</em>
            </p>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded mb-4">
              <p className="text-sm text-gray-600 mb-2">Example:</p>
              <p className="text-gray-800 mb-2"><strong>User:</strong> I want to add a REST API for managing tasks in our Spring Boot application</p>
              <p className="text-gray-800"><strong>Bot:</strong> Creating change: add-task-rest-api</p>
            </div>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded">
              <code>openspec new change "add-task-rest-api"</code>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</div>
              <h4 className="text-xl font-semibold text-gray-900">Get Artifact Build Order</h4>
            </div>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded mb-4">
              <code>openspec status --change "add-task-rest-api" --json</code>
            </div>
            
            <p className="text-gray-700 mb-4">This returns the dependency graph:</p>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`{
  "applyRequires": ["tasks"],
  "artifacts": [
    {"id": "proposal", "status": "ready", "dependencies": []},
    {"id": "design", "status": "pending", "dependencies": ["proposal"]},
    {"id": "specs", "status": "pending", "dependencies": ["proposal", "design"]},
    {"id": "tasks", "status": "pending", "dependencies": ["proposal", "design", "specs"]}
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">3</div>
              <h4 className="text-xl font-semibold text-gray-900">Create Artifacts in Dependency Order</h4>
            </div>
            
            <p className="text-gray-700 mb-4">
              For each artifact, Bob gets instructions and creates the file:
            </p>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded mb-4">
              <code>openspec instructions proposal --change "add-task-rest-api" --json</code>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-gray-800 font-semibold mb-2">Critical Concept: Context Constraints</p>
              <p className="text-gray-700">
                The instructions include <code className="bg-gray-100 px-2 py-1 rounded">context</code> and <code className="bg-gray-100 px-2 py-1 rounded">rules</code> that guide the AI, 
                but these <strong>NEVER appear in the output file</strong>. They are constraints for the AI, not content for the artifact.
              </p>
            </div>
          </div>

          {/* Artifacts Generated */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Artifacts Generated</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">📋 proposal.md</h4>
              <p className="text-gray-700 mb-3"><strong>Purpose:</strong> What and why</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Problem Statement</li>
                <li>• Proposed Solution</li>
                <li>• Requirements (Functional & Non-Functional)</li>
                <li>• Success Criteria</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">🏗️ design.md</h4>
              <p className="text-gray-700 mb-3"><strong>Purpose:</strong> How to build it</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Architecture Overview (with ASCII diagrams)</li>
                <li>• Component Design</li>
                <li>• Data Model</li>
                <li>• Technology Choices</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">📝 specs/*.md</h4>
              <p className="text-gray-700 mb-3"><strong>Purpose:</strong> Testable requirements</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Formal requirement statements (SHALL)</li>
                <li>• GIVEN-WHEN-THEN scenarios</li>
                <li>• Expected behaviors</li>
                <li>• Edge cases</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">✅ tasks.md</h4>
              <p className="text-gray-700 mb-3"><strong>Purpose:</strong> Implementation checklist</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Setup tasks</li>
                <li>• Core implementation tasks</li>
                <li>• Testing tasks</li>
                <li>• Documentation tasks</li>
              </ul>
            </div>
          </div>

          {/* Example Output */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Example: Complete Flow</h3>
          
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-8">
            <div className="space-y-3 text-sm font-mono">
              <div><span className="text-blue-400">User:</span> /opsx-propose add-payment-gateway</div>
              <div className="text-gray-400">---</div>
              <div><span className="text-green-400">Bot:</span> Creating change: add-payment-gateway</div>
              <div><span className="text-green-400">Bot:</span> ✓ Change created</div>
              <div><span className="text-green-400">Bot:</span> Creating proposal.md...</div>
              <div><span className="text-green-400">Bot:</span> ✓ proposal.md created</div>
              <div><span className="text-green-400">Bot:</span> Creating design.md...</div>
              <div><span className="text-green-400">Bot:</span> ✓ design.md created</div>
              <div><span className="text-green-400">Bot:</span> Creating specs...</div>
              <div><span className="text-green-400">Bot:</span> ✓ specs/payment-processing/spec.md created</div>
              <div><span className="text-green-400">Bot:</span> Creating tasks.md...</div>
              <div><span className="text-green-400">Bot:</span> ✓ tasks.md created</div>
              <div className="text-gray-400">---</div>
              <div className="text-yellow-400">## Change Proposed: add-payment-gateway</div>
              <div className="text-gray-300">**Location:** openspec/changes/add-payment-gateway/</div>
              <div className="text-gray-300">**Status:** All artifacts created! Ready for implementation.</div>
              <div className="text-gray-300">**Next Steps:** Run `/opsx-apply` to start implementing.</div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">2-5 min</div>
                <div className="text-gray-700">Typical completion time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">4-6</div>
                <div className="text-gray-700">Artifacts created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">500-1000</div>
                <div className="text-gray-700">Lines of documentation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Commands Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Other OpenSpec Commands</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <code className="bg-gray-100 px-2 py-1 rounded text-primary-600">/opsx-explore</code>
              </h3>
              <p className="text-gray-700 mb-3">
                Enter thinking-partner mode for exploring ideas, investigating problems, and clarifying requirements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Stance-based, not workflow-based</li>
                <li>✓ Visual with ASCII diagrams</li>
                <li>✓ Adaptive to interesting threads</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <code className="bg-gray-100 px-2 py-1 rounded text-primary-600">/opsx-apply</code>
              </h3>
              <p className="text-gray-700 mb-3">
                Implement tasks from an OpenSpec change, working through the task list systematically.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Schema-aware implementation</li>
                <li>✓ Context-driven from artifacts</li>
                <li>✓ Incremental progress tracking</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <code className="bg-gray-100 px-2 py-1 rounded text-primary-600">/opsx-sync</code>
              </h3>
              <p className="text-gray-700 mb-3">
                Sync delta specs from a change to main specs using intelligent, agent-driven merging.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ AI-driven intelligent merging</li>
                <li>✓ Partial updates supported</li>
                <li>✓ Intent-based, not replacement</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <code className="bg-gray-100 px-2 py-1 rounded text-primary-600">/opsx-archive</code>
              </h3>
              <p className="text-gray-700 mb-3">
                Archive a completed change after verifying artifact and task completion.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Completion verification</li>
                <li>✓ Spec sync integration</li>
                <li>✓ Date-stamped archival</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Diagram */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Fluid Workflow</h2>
          
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg mb-6">
            <pre className="text-sm overflow-x-auto">
{`┌──────────────────────────────────────────────────────────┐
│                    Fluid Workflow                        │
└──────────────────────────────────────────────────────────┘

/opsx-explore ←──────────────────────────────┐
     │                                       │
     ↓                                       │
/opsx-propose                                │
     │                                       │
     ↓                                       │
/opsx-apply ←────────┐                       │
     │               │                       │
     ↓               │                       │
/opsx-explore (mid-implementation)           │
     │               │                       │
     ↓               │                       │
Update artifacts     │                       │
     │               │                       │
     ↓               │                       │
/opsx-apply (continue) ──────────────────────┘
     │
     ↓
/opsx-sync (optional, can happen anytime)
     │
     ↓
/opsx-archive`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Principles</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ <strong>Not Phase-Locked:</strong> Can invoke actions anytime, interleave with other actions</li>
              <li>✓ <strong>Artifact Updates Allowed:</strong> If implementation reveals issues, update artifacts</li>
              <li>✓ <strong>Context-Aware:</strong> Each command reads current state from OpenSpec CLI</li>
              <li>✓ <strong>User-Driven:</strong> Commands prompt for clarification, don't guess</li>
              <li>✓ <strong>Incremental:</strong> Work can be paused and resumed at any point</li>
            </ul>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Learn More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href={links.internal.gettingStarted.url} className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-600">Introduction to OpenSpec and IBM Bob</p>
            </Link>
            <Link href={links.internal.tutorialsJava.url} className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Java Tutorials</h3>
              <p className="text-gray-600">Hands-on Spring Boot examples</p>
            </Link>
            <Link href={links.internal.playground.url} className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Try Playground</h3>
              <p className="text-gray-600">Interactive OpenSpec experience</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob