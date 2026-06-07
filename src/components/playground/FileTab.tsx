'use client'

interface FileTabProps {
  name: string
  active: boolean
  onClick: () => void
  icon?: string
}

export default function FileTab({ name, active, onClick, icon }: FileTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium border-r border-gray-700 transition ${
        active
          ? 'bg-gray-900 text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
      }`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {name}
    </button>
  )
}

// Made with Bob
