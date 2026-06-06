'use client'

import { useState } from 'react'

export default function Playground() {
  const [spec, setSpec] = useState(`# My First OpenSpec Change

## Problem
Describe the problem you're trying to solve...

## Solution
Describe your proposed solution...

## Requirements
- REQ-1: First requirement
- REQ-2: Second requirement
`)

  const [selectedLanguage, setSelectedLanguage] = useState('cobol')

  const examples = {
    cobol: `# COBOL Batch Program

## Problem
Need a batch program to process customer transactions.

## Solution
Create COBOL program CUSTPROC that reads transaction file and updates customer master.

## Requirements
- REQ-1: Read TRANFILE sequentially
- REQ-2: Update CUSTMAST by customer ID
- REQ-3: Generate summary report
- REQ-4: Handle file errors gracefully`,
    java: `# Spring Boot REST API

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
    dotnet: `# ASP.NET Core Web API

## Problem
Need a product catalog API with search capabilities.

## Solution
Create ASP.NET Core Web API with Product entity and search endpoints.

## Requirements
- REQ-1: GET /api/products - List products with pagination
- REQ-2: GET /api/products/search - Search by name
- REQ-3: POST /api/products - Create product
- REQ-4: Validate SKU uniqueness
- REQ-5: Support filtering by category`
  }

  const loadExample = (lang: string) => {
    setSelectedLanguage(lang)
    setSpec(examples[lang as keyof typeof examples])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Playground</h1>
          <p className="text-xl text-gray-600">
            Try OpenSpec specifications without installation. Edit the spec and see validation in real-time.
          </p>
        </div>

        {/* Language Examples */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Load Example:</h2>
          <div className="flex gap-3">
            <button
              onClick={() => loadExample('cobol')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'cobol'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              COBOL Example
            </button>
            <button
              onClick={() => loadExample('java')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'java'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Java Example
            </button>
            <button
              onClick={() => loadExample('dotnet')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedLanguage === 'dotnet'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              .NET Example
            </button>
          </div>
        </div>

        {/* Editor and Preview */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Editor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Specification Editor</span>
              <span className="text-sm text-gray-400">proposal.md</span>
            </div>
            <textarea
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
              className="w-full h-[600px] p-4 font-mono text-sm focus:outline-none resize-none"
              placeholder="Write your OpenSpec specification here..."
            />
          </div>

          {/* Preview */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
              <span className="font-semibold">Preview</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-sm text-gray-400">Valid</span>
              </div>
            </div>
            <div className="p-6 h-[600px] overflow-y-auto prose prose-sm max-w-none">
              {spec.split('\n').map((line, i) => {
                if (line.startsWith('# ')) {
                  return <h1 key={i} className="text-2xl font-bold text-gray-900 mb-4">{line.substring(2)}</h1>
                } else if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.substring(3)}</h2>
                } else if (line.startsWith('- ')) {
                  return <li key={i} className="text-gray-700 ml-4">{line.substring(2)}</li>
                } else if (line.trim() === '') {
                  return <br key={i} />
                } else {
                  return <p key={i} className="text-gray-700 mb-2">{line}</p>
                }
              })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition">
            Validate Specification
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition">
            Export as Markdown
          </button>
          <button className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition">
            Share Link
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Editing</h3>
            <p className="text-gray-600 text-sm">
              Edit specifications and see changes in real-time with syntax highlighting
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Validation</h3>
            <p className="text-gray-600 text-sm">
              Instant validation feedback to ensure your specs follow best practices
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Share & Export</h3>
            <p className="text-gray-600 text-sm">
              Share your specifications with team members or export for use in projects
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-12 bg-blue-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Playground Tips</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Start with a clear problem statement</li>
            <li>• Break down your solution into specific requirements</li>
            <li>• Use the REQ-N format for requirements (e.g., REQ-1, REQ-2)</li>
            <li>• Include technical details relevant to your language/framework</li>
            <li>• Try the example specifications to see different patterns</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
