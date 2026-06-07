import Link from 'next/link'

export default function CobolTutorial() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <span className="text-4xl mb-4 block">🏢</span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">COBOL/JCL with OpenSpec</h1>
        <p className="text-xl text-gray-600">
          Modernize your mainframe development workflow with spec-driven development
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            This tutorial teaches you how to use OpenSpec for COBOL and JCL development on mainframe systems. 
            You'll learn to document batch programs, specify file handling, and integrate with DB2 databases.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <p className="text-gray-800">
              <strong>Prerequisites:</strong> Basic COBOL knowledge, access to a mainframe environment (z/OS or emulator), 
              and OpenSpec CLI installed.
            </p>
          </div>
        </section>

        {/* Module 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 1: Setup & Configuration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Configure OpenSpec for COBOL</h3>
          <p className="text-gray-700 mb-4">Create a configuration file for your COBOL project:</p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <pre className="text-sm">{`# openspec/config.yaml
project:
  name: "Mainframe Batch System"
  language: cobol
  platform: z/OS
  
conventions:
  naming:
    programs: "UPPERCASE with 8 chars max"
    files: "UPPERCASE with hyphens"
  
tools:
  - name: "IBM Enterprise COBOL"
    version: "6.3"
  - name: "DB2 for z/OS"
    version: "12"`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Structure</h3>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800">{`your-cobol-project/
├── openspec/
│   ├── config.yaml
│   ├── changes/
│   └── specs/
├── src/
│   ├── cobol/
│   └── jcl/
├── copybooks/
└── db2/`}</pre>
          </div>
        </section>

        {/* Module 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 2: Specifying Batch Programs</h2>
          <p className="text-gray-700 mb-4">Duration: 45 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Example: Customer Report Generator</h3>
          <p className="text-gray-700 mb-4">Let's create a specification for a batch program that generates customer reports:</p>
          
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code>openspec change create customer-report-generator</code>
          </div>

          <p className="text-gray-700 mb-4">Edit the proposal.md:</p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`# Customer Report Generator

## Problem
Need a batch program to generate monthly customer activity reports
from the CUSTOMER and TRANSACTION files.

## Solution
Create COBOL program CUSTRPT1 that:
- Reads CUSTOMER master file (CUSTMAST)
- Reads TRANSACTION detail file (TRANFILE)
- Generates formatted report (CUSTRPT)
- Produces summary statistics

## Requirements
- REQ-1: Read all active customers from CUSTMAST
- REQ-2: Match transactions by customer ID
- REQ-3: Calculate total transaction amount per customer
- REQ-4: Format report with headers and page breaks
- REQ-5: Handle file errors gracefully

## File Specifications

### Input Files
- CUSTMAST: FB, LRECL=200, Customer master file
- TRANFILE: FB, LRECL=150, Transaction detail file

### Output Files
- CUSTRPT: FBA, LRECL=133, Formatted report
- ERRFILE: FB, LRECL=80, Error log

## Processing Logic
1. Open all files
2. Read customer record
3. For each customer:
   - Read matching transactions
   - Calculate totals
   - Write report line
4. Write summary totals
5. Close all files`}</pre>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Working with Bob</h3>
          <div className="bg-blue-50 border-l-4 border-primary-500 p-6 mb-6">
            <p className="text-gray-800 mb-3">
              <strong>Prompt for Bob:</strong>
            </p>
            <p className="text-gray-700 italic">
              "Bob, please generate the COBOL program CUSTRPT1 according to the specification in 
              openspec/changes/customer-report-generator/proposal.md. Follow IBM Enterprise COBOL 6.3 
              standards and include proper error handling."
            </p>
          </div>
        </section>

        {/* Module 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 3: File Handling & Data Processing</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Sequential File Processing</h3>
          <p className="text-gray-700 mb-4">
            Learn to specify file handling patterns for COBOL programs:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Sequential file reading and writing</li>
            <li>Record validation and error handling</li>
            <li>File status checking</li>
            <li>End-of-file processing</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">VSAM File Specifications</h3>
          <p className="text-gray-700 mb-4">
            Specify VSAM KSDS, ESDS, and RRDS file operations:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800">{`## VSAM File Access

### CUSTOMER-FILE (KSDS)
- Key: CUST-ID (PIC 9(8))
- Record Length: 200 bytes
- Operations: READ, UPDATE, DELETE

### Access Patterns
- Random access by customer ID
- Browse by customer name (alternate index)
- Update customer balance
- Delete inactive customers`}</pre>
          </div>
        </section>

        {/* Module 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 4: DB2 Integration</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Embedded SQL Specifications</h3>
          <p className="text-gray-700 mb-4">
            Specify COBOL programs with embedded SQL:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## DB2 Operations

### Tables
- CUSTOMER (CUSTID, NAME, BALANCE, STATUS)
- ACCOUNT (ACCTID, CUSTID, TYPE, BALANCE)

### SQL Operations
1. SELECT customer by ID
2. UPDATE customer balance
3. INSERT new account
4. COMMIT/ROLLBACK handling

### Error Handling
- Check SQLCODE after each operation
- Handle -811 (multiple rows)
- Handle -803 (duplicate key)
- Rollback on errors`}</pre>
          </div>
        </section>

        {/* Module 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 5: JCL Specifications</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Batch Job Specification</h3>
          <p className="text-gray-700 mb-4">
            Specify JCL for running your COBOL programs:
          </p>
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">{`## JCL Job: CUSTRPT

### Job Steps
1. STEP010: Delete old report file
2. STEP020: Run CUSTRPT1 program
3. STEP030: Copy report to output dataset

### DD Statements
- CUSTMAST: Input customer file
- TRANFILE: Input transaction file
- CUSTRPT: Output report file
- SYSOUT: System output

### Conditional Execution
- STEP020 runs only if STEP010 RC=0
- STEP030 runs only if STEP020 RC=0 or 4`}</pre>
          </div>
        </section>

        {/* Module 6 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Module 6: Testing & Validation</h2>
          <p className="text-gray-700 mb-4">Duration: 15 minutes</p>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Test Specifications</h3>
          <p className="text-gray-700 mb-4">
            Define test cases in your OpenSpec change:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Unit tests for program logic</li>
            <li>File handling test scenarios</li>
            <li>DB2 integration tests</li>
            <li>JCL execution tests</li>
            <li>Error condition tests</li>
          </ul>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Study: Modernizing Legacy COBOL</h2>
          <p className="text-gray-700 mb-4">Duration: 30 minutes</p>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scenario</h3>
            <p className="text-gray-800 mb-4">
              A financial institution needs to modernize a 30-year-old COBOL batch system that processes 
              daily transactions. The system has minimal documentation and the original developers have retired.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
            <p className="text-gray-800 mb-4">
              Document the existing system using OpenSpec, then use Bob to help refactor and modernize 
              the code while maintaining business logic integrity.
            </p>
            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
            <ol className="list-decimal pl-6 text-gray-800 space-y-2">
              <li>Analyze existing COBOL programs and create OpenSpec specifications</li>
              <li>Document file structures, DB2 tables, and JCL procedures</li>
              <li>Use Bob to generate test cases based on specifications</li>
              <li>Refactor code incrementally with Bob's assistance</li>
              <li>Validate changes against original specifications</li>
            </ol>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/samples" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">📦 Sample Projects</h3>
              <p className="text-gray-600">Clone complete COBOL examples</p>
            </a>
            <a href="/playground" className="block p-6 bg-white border-2 border-gray-200 rounded-lg hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">🎮 Try Playground</h3>
              <p className="text-gray-600">Practice COBOL specs interactively</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
