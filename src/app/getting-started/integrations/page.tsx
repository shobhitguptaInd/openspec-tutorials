export default function IntegrationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <nav className="text-sm mb-4">
          <a href="/getting-started" className="text-primary-600 hover:text-primary-700">← Back to Getting Started</a>
        </nav>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Tool Integrations</h1>
        <p className="text-xl text-gray-600">
          Connect OpenSpec with your existing development tools and workflows
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Integration Overview</h2>
          <p className="text-gray-700 mb-6">
            OpenSpec integrates seamlessly with your existing development ecosystem, enabling specification-driven 
            development without disrupting your current workflows. Connect with issue trackers, version control, 
            CI/CD pipelines, and documentation platforms.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🎫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Issue Tracking</h3>
              <p className="text-gray-700 text-sm">JIRA, Azure DevOps, GitHub Issues</p>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Version Control</h3>
              <p className="text-gray-700 text-sm">GitHub, GitLab, Bitbucket</p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">CI/CD</h3>
              <p className="text-gray-700 text-sm">Jenkins, GitHub Actions, Azure Pipelines</p>
            </div>
          </div>
        </section>

        {/* JIRA Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🎫 JIRA Integration</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setup</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`# .openspec.yaml
integrations:
  jira:
    url: "https://your-company.atlassian.net"
    project: "PROJ"
    auth:
      type: "api_token"
      token_env: "JIRA_API_TOKEN"
    
    sync:
      enabled: true
      direction: "bidirectional"
      fields:
        - requirement_id: "customfield_10001"
        - status: "status"
        - assignee: "assignee"`}
            </pre>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Create OpenSpec proposals from JIRA tickets</li>
              <li>✓ Link requirements to JIRA issues</li>
              <li>✓ Sync status updates bidirectionally</li>
              <li>✓ Automatic requirement traceability</li>
              <li>✓ Comment synchronization</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Example</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# Create spec from JIRA ticket
openspec create --from-jira PROJ-123

# Link existing spec to JIRA
openspec link --jira PROJ-456 --spec user-auth

# Sync status
openspec sync --to-jira`}
            </pre>
          </div>
        </section>

        {/* Azure DevOps Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Azure DevOps Integration</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setup</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`# .openspec.yaml
integrations:
  azure_devops:
    organization: "your-org"
    project: "YourProject"
    auth:
      type: "pat"
      token_env: "AZURE_DEVOPS_PAT"
    
    work_items:
      type: "User Story"
      link_requirements: true
      sync_status: true`}
            </pre>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Create specs from work items</li>
              <li>✓ Link to user stories and tasks</li>
              <li>✓ Sync with Azure Boards</li>
              <li>✓ Integration with Azure Repos</li>
              <li>✓ Pipeline integration</li>
            </ul>
          </div>
        </section>

        {/* GitHub Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🐙 GitHub Integration</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">GitHub Actions Workflow</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
{`# .github/workflows/openspec.yml
name: OpenSpec Validation

on:
  pull_request:
    branches: [ main ]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install OpenSpec
        run: npm install -g openspec
      
      - name: Validate Specifications
        run: openspec validate
      
      - name: Check Coverage
        run: openspec coverage --threshold 80
      
      - name: Generate Report
        run: openspec report --format markdown > spec-report.md
      
      - name: Comment on PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const report = fs.readFileSync('spec-report.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: report
            });`}
            </pre>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Automatic spec validation on PRs</li>
              <li>✓ Link specs to GitHub issues</li>
              <li>✓ PR comments with validation results</li>
              <li>✓ Branch protection rules</li>
              <li>✓ Release notes generation</li>
            </ul>
          </div>
        </section>

        {/* CI/CD Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 CI/CD Pipeline Integration</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Jenkins</h3>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
{`pipeline {
  stages {
    stage('Validate Specs') {
      steps {
        sh 'openspec validate'
      }
    }
    stage('Check Coverage') {
      steps {
        sh 'openspec coverage'
      }
    }
  }
}`}
              </pre>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GitLab CI</h3>
              <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
{`validate-specs:
  stage: test
  script:
    - npm install -g openspec
    - openspec validate
    - openspec coverage
  only:
    - merge_requests`}
              </pre>
            </div>
          </div>
        </section>

        {/* Documentation Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">📚 Documentation Integration</h2>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Confluence Integration</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm mb-4">
{`# Publish specs to Confluence
openspec publish --confluence \\
  --space "TECH" \\
  --parent "Architecture Documentation"

# Auto-sync on changes
openspec sync --to-confluence --watch`}
            </pre>
            
            <ul className="space-y-2 text-gray-700">
              <li>✓ Publish specs as Confluence pages</li>
              <li>✓ Maintain version history</li>
              <li>✓ Link to related pages</li>
              <li>✓ Automatic table of contents</li>
            </ul>
          </div>
        </section>

        {/* Slack/Teams Integration */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">💬 Communication Integration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Slack Notifications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Spec creation notifications</li>
                <li>• Review request alerts</li>
                <li>• Approval notifications</li>
                <li>• Deployment updates</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Microsoft Teams</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Channel notifications</li>
                <li>• Adaptive cards for specs</li>
                <li>• Approval workflows</li>
                <li>• Status updates</li>
              </ul>
            </div>
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
            <a href="/getting-started/sdlc-phases" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📋 SDLC Phases</h3>
              <p className="text-gray-600">Complete guide to OpenSpec across all phases</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

// Made with Bob