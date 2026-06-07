'use client'

import { useState, useEffect } from 'react'
import FileTab from '@/components/playground/FileTab'
import TerminalSimulator from '@/components/playground/TerminalSimulator'
import CodespacesButton from '@/components/playground/CodespacesButton'
import ProgressTracker from '@/components/playground/ProgressTracker'

interface FileContent {
  name: string
  content: string
  language: string
  icon: string
}

export default function EnhancedPlayground() {
  const [selectedLanguage, setSelectedLanguage] = useState('cobol')
  const [activeFile, setActiveFile] = useState('proposal.md')
  const [showTerminal, setShowTerminal] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  
  // Define COBOL code constant before using it
  const cobolCode = `       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO-OPENSPEC.
       AUTHOR. OpenSpec Community.
       
       ENVIRONMENT DIVISION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.
           SELECT INPUT-FILE ASSIGN TO "INPUT.TXT"
               ORGANIZATION IS LINE SEQUENTIAL.
       
       DATA DIVISION.
       FILE SECTION.
       FD  INPUT-FILE.
       01  INPUT-RECORD.
           05  INPUT-NAME          PIC X(50).
       
       WORKING-STORAGE SECTION.
       01  WS-EOF-FLAG             PIC X VALUE 'N'.
       01  WS-COUNTER              PIC 9(3) VALUE 0.
       
       PROCEDURE DIVISION.
       MAIN-LOGIC.
           OPEN INPUT INPUT-FILE
           PERFORM READ-FILE UNTIL WS-EOF-FLAG = 'Y'
           CLOSE INPUT-FILE
           DISPLAY "Processed " WS-COUNTER " records"
           STOP RUN.
       
       READ-FILE.
           READ INPUT-FILE
               AT END
                   MOVE 'Y' TO WS-EOF-FLAG
               NOT AT END
                   ADD 1 TO WS-COUNTER
                   DISPLAY "Hello, " INPUT-NAME "!"
           END-READ.`
  
  const [files, setFiles] = useState<Record<string, FileContent>>({
    'proposal.md': {
      name: 'proposal.md',
      language: 'markdown',
      icon: '📝',
      content: `# COBOL Batch Program

## Problem
Need a batch program to process customer transactions.

## Solution
Create COBOL program CUSTPROC that reads transaction file and updates customer master.

## Requirements
- REQ-1: Read TRANFILE sequentially
- REQ-2: Update CUSTMAST by customer ID
- REQ-3: Generate summary report
- REQ-4: Handle file errors gracefully`
    },
    '.openspec.yaml': {
      name: '.openspec.yaml',
      language: 'yaml',
      icon: '⚙️',
      content: `version: 1.0

project:
  name: hello-openspec-cobol
  description: Basic COBOL program with OpenSpec
  language: cobol
  difficulty: beginner
  
specs:
  - path: proposal.md
    type: proposal
    
structure:
  src: Source code files
  tests: Test files and scripts`
    },
    'HELLO.cbl': {
      name: 'HELLO.cbl',
      language: 'cobol',
      icon: '💻',
      content: cobolCode
    }
  })

  const steps = [
    { id: 'create-spec', title: 'Create proposal.md', completed: false },
    { id: 'add-problem', title: 'Add Problem section', completed: false },
    { id: 'add-solution', title: 'Add Solution section', completed: false },
    { id: 'add-requirements', title: 'Add Requirements', completed: false },
    { id: 'create-config', title: 'Create .openspec.yaml', completed: false },
    { id: 'validate', title: 'Run validation', completed: false },
  ]

  const [progress, setProgress] = useState(steps)

  const examples = {
    cobol: {
      'proposal.md': `# COBOL Batch Program

## Problem
Need a batch program to process customer transactions.

## Solution
Create COBOL program CUSTPROC that reads transaction file and updates customer master.

## Requirements
- REQ-1: Read TRANFILE sequentially
- REQ-2: Update CUSTMAST by customer ID
- REQ-3: Generate summary report
- REQ-4: Handle file errors gracefully`,
      '.openspec.yaml': `version: 1.0

project:
  name: cobol-batch-processor
  description: COBOL batch processing system
  language: cobol
  difficulty: intermediate`,
      'HELLO.cbl': cobolCode
    },
    java: {
      'proposal.md': `# Spring Boot REST API

## Problem
Need a REST API for user management.

## Solution
Create Spring Boot application with User entity and CRUD endpoints.

## Requirements
- REQ-1: GET /api/users - List all users
- REQ-2: POST /api/users - Create user
- REQ-3: PUT /api/users/{id} - Update user
- REQ-4: DELETE /api/users/{id} - Delete user
- REQ-5: Validate email format`,
      '.openspec.yaml': `version: 1.0

project:
  name: spring-boot-user-api
  description: User management REST API
  language: java
  difficulty: beginner`,
      'UserController.java': `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PostMapping
    public User createUser(@Valid @RequestBody User user) {
        return userService.save(user);
    }
}`
    },
    dotnet: {
      'proposal.md': `# ASP.NET Core Web API

## Problem
Need a product catalog API with search capabilities.

## Solution
Create ASP.NET Core Web API with Product entity and search endpoints.

## Requirements
- REQ-1: GET /api/products - List products with pagination
- REQ-2: GET /api/products/search - Search by name
- REQ-3: POST /api/products - Create product
- REQ-4: Validate SKU uniqueness
- REQ-5: Support filtering by category`,
      '.openspec.yaml': `version: 1.0

project:
  name: product-catalog-api
  description: Product catalog with search
  language: dotnet
  difficulty: intermediate`,
      'ProductController.cs': `[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly IProductService _productService;
    
    public ProductController(IProductService productService)
    {
        _productService = productService;
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return Ok(await _productService.GetAllAsync());
    }
}`
    }
  }

  const loadExample = (lang: string) => {
    setSelectedLanguage(lang)
    const exampleFiles = examples[lang as keyof typeof examples]
    
    const newFiles: Record<string, FileContent> = {}
    Object.entries(exampleFiles).forEach(([filename, content]) => {
      const ext = filename.split('.').pop() || ''
      const icons: Record<string, string> = {
        'md': '📝',
        'yaml': '⚙️',
        'cbl': '💻',
        'java': '☕',
        'cs': '🔷'
      }
      
      newFiles[filename] = {
        name: filename,
        content,
        language: ext === 'md' ? 'markdown' : ext === 'yaml' ? 'yaml' : ext === 'cbl' ? 'cobol' : ext === 'java' ? 'java' : 'csharp',
        icon: icons[ext] || '📄'
      }
    })
    
    setFiles(newFiles)
    setActiveFile(Object.keys(newFiles)[0])
  }

  const updateFileContent = (filename: string, content: string) => {
    setFiles(prev => ({
      ...prev,
      [filename]: {
        ...prev[filename],
        content
      }
    }))
    
    // Update progress based on content
    if (filename === 'proposal.md') {
      const hasProb = content.includes('## Problem')
      const hasSol = content.includes('## Solution')
      const hasReq = content.includes('## Requirements')
      const reqCount = (content.match(/REQ-\d+/g) || []).length
      
      setProgress(prev => prev.map(step => {
        if (step.id === 'create-spec') return { ...step, completed: content.length > 10 }
        if (step.id === 'add-problem') return { ...step, completed: hasProb }
        if (step.id === 'add-solution') return { ...step, completed: hasSol }
        if (step.id === 'add-requirements') return { ...step, completed: hasReq && reqCount >= 3 }
        return step
      }))
    }
  }

  const fileList = Object.values(files)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Enhanced Interactive Playground</h1>
          <p className="text-xl text-gray-600">
            Experience the complete OpenSpec workflow with real validation, terminal simulation, and GitHub Codespaces integration
          </p>
        </div>

        {/* Language Examples & Actions */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-3">
            <button
              onClick={() => loadExample('cobol')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'cobol'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              🏢 COBOL Example
            </button>
            <button
              onClick={() => loadExample('java')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'java'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              ☕ Java Example
            </button>
            <button
              onClick={() => loadExample('dotnet')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'dotnet'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              🔷 .NET Example
            </button>
          </div>
          
          <CodespacesButton 
            repoUrl="https://github.com/shobhitguptaInd/openspec-tutorials"
            projectPath={`${selectedLanguage}/hello-openspec-${selectedLanguage}`}
            label="🚀 Try in Codespaces"
          />
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left: Editor & Terminal */}
          <div className="lg:col-span-3 space-y-6">
            {/* Multi-File Editor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* File Tabs */}
              <div className="bg-gray-800 flex overflow-x-auto">
                {fileList.map(file => (
                  <FileTab
                    key={file.name}
                    name={file.name}
                    icon={file.icon}
                    active={activeFile === file.name}
                    onClick={() => setActiveFile(file.name)}
                  />
                ))}
              </div>
              
              {/* Editor */}
              <div className="relative">
                <textarea
                  value={files[activeFile]?.content || ''}
                  onChange={(e) => updateFileContent(activeFile, e.target.value)}
                  className="w-full h-[500px] p-4 font-mono text-sm focus:outline-none resize-none bg-gray-50"
                  placeholder="Write your OpenSpec specification here..."
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Terminal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                <span className="text-white font-semibold">Terminal Simulator</span>
                <button
                  onClick={() => setShowTerminal(!showTerminal)}
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  {showTerminal ? 'Hide' : 'Show'}
                </button>
              </div>
              {showTerminal && (
                <div className="h-[300px]">
                  <TerminalSimulator 
                    onCommand={(cmd) => {
                      if (cmd === 'openspec validate' || cmd === 'openspec validate proposal.md') {
                        setProgress(prev => prev.map(step => 
                          step.id === 'validate' ? { ...step, completed: true } : step
                        ))
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: Progress & Resources */}
          <div className="space-y-6">
            {/* Progress Tracker */}
            <ProgressTracker 
              steps={progress} 
              currentStep={progress.findIndex(s => !s.completed)}
            />

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition text-sm">
                  ✓ Validate Spec
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition text-sm">
                  📥 Export Files
                </button>
                <button className="w-full bg-white text-gray-700 px-4 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition text-sm">
                  🔗 Share Link
                </button>
              </div>
            </div>

            {/* Learning Resources */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Learning Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Edit files in the multi-file editor</li>
                <li>• Use terminal commands to validate</li>
                <li>• Track your progress in real-time</li>
                <li>• Try Codespaces for full environment</li>
                <li>• Switch between language examples</li>
              </ul>
            </div>

            {/* Video Tutorial Placeholder */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎥 Video Tutorial</h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <p className="text-sm">Video coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">📁</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-File Editor</h3>
            <p className="text-gray-600 text-sm">
              Edit proposal.md, .openspec.yaml, and source code in tabs
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">🖥️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Terminal Simulator</h3>
            <p className="text-gray-600 text-sm">
              Run OpenSpec CLI commands and see real-time output
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track your learning progress through guided steps
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Codespaces Ready</h3>
            <p className="text-gray-600 text-sm">
              One-click access to full development environment
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
