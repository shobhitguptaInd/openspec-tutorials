'use client'

import { useState } from 'react'

export default function Samples() {
  const [copiedProject, setCopiedProject] = useState<string | null>(null)

  const handleClone = (projectName: string) => {
    const repoUrl = `git clone https://github.com/shobhitguptaInd/openspec-tutorials.git`
    navigator.clipboard.writeText(repoUrl)
    setCopiedProject(projectName)
    setTimeout(() => setCopiedProject(null), 2000)
  }

  const samples = [
    {
      category: 'COBOL/JCL',
      icon: '🏢',
      projects: [
        {
          name: 'Hello OpenSpec COBOL',
          description: 'Basic COBOL program with OpenSpec specifications',
          difficulty: 'Beginner',
          topics: ['COBOL', 'File I/O', 'Basic Specs']
        },
        {
          name: 'Batch Processing System',
          description: 'Complete batch processing with JCL and error handling',
          difficulty: 'Intermediate',
          topics: ['COBOL', 'JCL', 'Batch Processing', 'Error Handling']
        },
        {
          name: 'DB2 Integration',
          description: 'COBOL program with embedded SQL and DB2 operations',
          difficulty: 'Advanced',
          topics: ['COBOL', 'DB2', 'SQL', 'Transaction Management']
        },
        {
          name: 'Legacy Modernization',
          description: 'Documenting and refactoring legacy COBOL code',
          difficulty: 'Advanced',
          topics: ['COBOL', 'Refactoring', 'Documentation', 'Best Practices']
        }
      ]
    },
    {
      category: 'Java',
      icon: '☕',
      projects: [
        {
          name: 'Spring Boot REST API',
          description: 'Complete REST API with CRUD operations and validation',
          difficulty: 'Beginner',
          topics: ['Spring Boot', 'REST API', 'JPA', 'Validation']
        },
        {
          name: 'Microservices Architecture',
          description: 'Multi-service application with service discovery',
          difficulty: 'Intermediate',
          topics: ['Microservices', 'Spring Cloud', 'Eureka', 'API Gateway']
        },
        {
          name: 'Event-Driven System',
          description: 'Kafka-based event processing with multiple consumers',
          difficulty: 'Advanced',
          topics: ['Kafka', 'Event Sourcing', 'CQRS', 'Spring Boot']
        },
        {
          name: 'E-Commerce Platform',
          description: 'Full-featured e-commerce backend with payment integration',
          difficulty: 'Advanced',
          topics: ['Spring Boot', 'PostgreSQL', 'Redis', 'Payment Gateway']
        }
      ]
    },
    {
      category: '.NET',
      icon: '🔷',
      projects: [
        {
          name: 'ASP.NET Core Web API',
          description: 'RESTful API with Entity Framework and authentication',
          difficulty: 'Beginner',
          topics: ['ASP.NET Core', 'Entity Framework', 'JWT', 'SQL Server']
        },
        {
          name: 'Clean Architecture Template',
          description: 'Enterprise application following clean architecture principles',
          difficulty: 'Intermediate',
          topics: ['Clean Architecture', 'CQRS', 'MediatR', 'DDD']
        },
        {
          name: 'Azure Cloud Integration',
          description: 'Application deployed to Azure with full cloud services',
          difficulty: 'Advanced',
          topics: ['Azure', 'App Service', 'Blob Storage', 'Key Vault']
        },
        {
          name: '.NET Framework Migration',
          description: 'Migrating legacy .NET Framework app to .NET 8',
          difficulty: 'Advanced',
          topics: ['Migration', '.NET 8', 'Modernization', 'Refactoring']
        }
      ]
    },
    {
      category: 'Multi-Language',
      icon: '🌐',
      projects: [
        {
          name: 'COBOL-Java Integration',
          description: 'Mainframe COBOL calling Java microservices',
          difficulty: 'Advanced',
          topics: ['COBOL', 'Java', 'REST', 'Integration']
        },
        {
          name: 'Hybrid Cloud System',
          description: 'On-premise .NET with cloud-based Java services',
          difficulty: 'Advanced',
          topics: ['.NET', 'Java', 'Cloud', 'Hybrid Architecture']
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sample Projects</h1>
          <p className="text-xl text-gray-600">
            Clone and run complete OpenSpec examples. Each project includes full specifications, 
            working code, and step-by-step tutorials.
          </p>
        </div>

        {/* Quick Start */}
        <div className="bg-primary-600 text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <p className="mb-6 text-lg">
            Clone the entire sample repository to get all examples:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
          </div>
          <p className="mt-4 text-sm opacity-90">
            Or browse individual projects below and clone specific examples
          </p>
        </div>

        {/* Sample Categories */}
        {samples.map((category, idx) => (
          <section key={idx} className="mb-12">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">{category.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.projects.map((project, pidx) => (
                <div key={pidx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.topics.map((topic, tidx) => (
                      <span key={tidx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={`https://github.com/shobhitguptaInd/openspec-tutorials/tree/main/openspec-tutorials/${
                        category.category === 'COBOL/JCL'
                          ? 'cobol-jcl'
                          : category.category.toLowerCase().replace(/\s+/g, '-')
                      }/${project.name.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition text-sm text-center"
                    >
                      View Project
                    </a>
                    <button
                      onClick={() => handleClone(project.name)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition text-sm relative"
                    >
                      {copiedProject === project.name ? '✓ Copied!' : 'Clone'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* What's Included */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included in Each Sample</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-2xl mr-3">📝</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Complete OpenSpec Specifications</h3>
                <p className="text-gray-600 text-sm">
                  Full proposal.md files with problem statements, solutions, and requirements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">💻</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Working Source Code</h3>
                <p className="text-gray-600 text-sm">
                  Production-ready code that implements the specifications
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">📖</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Step-by-Step Tutorial</h3>
                <p className="text-gray-600 text-sm">
                  Detailed README with setup instructions and explanations
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">✅</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Tests & Validation</h3>
                <p className="text-gray-600 text-sm">
                  Unit and integration tests demonstrating best practices
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🎯</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Exercise Files</h3>
                <p className="text-gray-600 text-sm">
                  Practice exercises with solutions to reinforce learning
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-3">🎥</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Video Walkthrough</h3>
                <p className="text-gray-600 text-sm">
                  Optional video tutorial explaining the implementation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contributing */}
        <div className="bg-blue-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">🤝 Contribute Your Own Samples</h3>
          <p className="text-gray-700 mb-4">
            Have a great OpenSpec example to share? We welcome community contributions! 
            Submit your sample project to help other developers learn.
          </p>
          <a href="https://github.com/shobhitguptaInd/openspec-tutorials/blob/main/CONTRIBUTING.md"
             className="text-primary-600 hover:text-primary-700 font-medium">
            Learn how to contribute →
          </a>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
