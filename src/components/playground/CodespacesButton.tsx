'use client'

interface CodespacesButtonProps {
  repoUrl: string
  projectPath?: string
  label?: string
}

export default function CodespacesButton({ 
  repoUrl, 
  projectPath = '', 
  label = 'Open in Codespaces' 
}: CodespacesButtonProps) {
  const handleClick = () => {
    // Extract owner and repo from URL
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/)
    if (!match) return

    const [, owner, repo] = match
    const cleanRepo = repo.replace('.git', '')
    
    // Construct Codespaces URL
    let codespacesUrl = `https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=${owner}/${cleanRepo}`
    
    if (projectPath) {
      codespacesUrl += `&devcontainer_path=.devcontainer%2F${projectPath}%2Fdevcontainer.json`
    }
    
    window.open(codespacesUrl, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25Zm1.75-.25a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25Z"/>
        <path d="M7 6.75A.75.75 0 0 1 7.75 6h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 6.75Zm-.75 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-2.5-5.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3 8.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/>
      </svg>
      {label}
    </button>
  )
}

// Made with Bob
