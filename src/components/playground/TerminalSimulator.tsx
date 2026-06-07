'use client'

import { useState } from 'react'

interface TerminalLine {
  type: 'command' | 'output' | 'error' | 'success'
  content: string
}

interface TerminalSimulatorProps {
  onCommand?: (command: string) => void
}

export default function TerminalSimulator({ onCommand }: TerminalSimulatorProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'OpenSpec Terminal Simulator v1.0' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ])
  const [input, setInput] = useState('')

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim()
    
    // Add command to history
    setLines(prev => [...prev, { type: 'command', content: `$ ${trimmedCmd}` }])

    if (!trimmedCmd) {
      setLines(prev => [...prev, { type: 'output', content: '' }])
      return
    }

    // Simulate command execution
    if (trimmedCmd === 'help') {
      setLines(prev => [
        ...prev,
        { type: 'output', content: 'Available commands:' },
        { type: 'output', content: '  openspec validate    - Validate the current specification' },
        { type: 'output', content: '  openspec status      - Show specification status' },
        { type: 'output', content: '  openspec init        - Initialize OpenSpec configuration' },
        { type: 'output', content: '  clear                - Clear terminal' },
        { type: 'output', content: '  help                 - Show this help message' },
        { type: 'output', content: '' },
      ])
    } else if (trimmedCmd === 'clear') {
      setLines([])
    } else if (trimmedCmd === 'openspec validate' || trimmedCmd === 'openspec validate proposal.md') {
      setLines(prev => [
        ...prev,
        { type: 'output', content: 'Validating specification...' },
        { type: 'success', content: '✓ Problem section found' },
        { type: 'success', content: '✓ Solution section found' },
        { type: 'success', content: '✓ Requirements section found' },
        { type: 'success', content: '✓ 3 requirements detected (REQ-1, REQ-2, REQ-3)' },
        { type: 'success', content: '' },
        { type: 'success', content: 'Validation passed! Specification is valid.' },
        { type: 'output', content: '' },
      ])
    } else if (trimmedCmd === 'openspec status') {
      setLines(prev => [
        ...prev,
        { type: 'output', content: 'OpenSpec Status:' },
        { type: 'output', content: '  Configuration: .openspec.yaml found' },
        { type: 'output', content: '  Specification: proposal.md (valid)' },
        { type: 'output', content: '  Requirements: 3 total' },
        { type: 'output', content: '  Language: COBOL' },
        { type: 'output', content: '' },
      ])
    } else if (trimmedCmd === 'openspec init') {
      setLines(prev => [
        ...prev,
        { type: 'output', content: 'Initializing OpenSpec project...' },
        { type: 'success', content: '✓ Created .openspec.yaml' },
        { type: 'success', content: '✓ Created proposal.md template' },
        { type: 'success', content: '' },
        { type: 'success', content: 'OpenSpec initialized successfully!' },
        { type: 'output', content: '' },
      ])
    } else {
      setLines(prev => [
        ...prev,
        { type: 'error', content: `Command not found: ${trimmedCmd}` },
        { type: 'output', content: 'Type "help" for available commands' },
        { type: 'output', content: '' },
      ])
    }

    if (onCommand) {
      onCommand(trimmedCmd)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(input)
    setInput('')
  }

  return (
    <div className="bg-gray-900 text-gray-100 font-mono text-sm h-full flex flex-col">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <span className="font-semibold">Terminal</span>
        <div className="flex gap-2">
          <button
            onClick={() => setLines([])}
            className="text-xs text-gray-400 hover:text-gray-200 transition"
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${
              line.type === 'command'
                ? 'text-blue-400 font-semibold'
                : line.type === 'error'
                ? 'text-red-400'
                : line.type === 'success'
                ? 'text-green-400'
                : 'text-gray-300'
            }`}
          >
            {line.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4">
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-100"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
      </form>
    </div>
  )
}

// Made with Bob
