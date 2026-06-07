# OpenSpec Tutorial Website

A comprehensive tutorial platform for learning OpenSpec and IBM Bob, focused on enterprise languages: COBOL, JCL, Java, and .NET.

## 🚀 Features

- **Language-Specific Tutorials**: Dedicated learning paths for COBOL/JCL, Java, and .NET
- **Enhanced Interactive Playground**:
  - Multi-file editor with tabs (proposal.md, .openspec.yaml, source code)
  - Real-time terminal simulator with OpenSpec CLI commands
  - Progress tracking with guided learning steps
  - GitHub Codespaces integration for one-click development environments
  - Language-specific examples (COBOL, Java, .NET)
- **Sample Projects**: Clone-and-run examples for each language
- **Getting Started Guide**: Quick onboarding for new users
- **Responsive Design**: Works on desktop, tablet, and mobile

## 📋 Prerequisites

- Node.js 18+ or later
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/shobhitguptaInd/openspec-tutorials.git
cd openspec-tutorials/tutorial-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
tutorial-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   ├── getting-started/    # Getting started guide
│   │   ├── tutorials/          # Language-specific tutorials
│   │   │   ├── cobol/
│   │   │   ├── java/
│   │   │   └── dotnet/
│   │   ├── playground/         # Enhanced interactive playground
│   │   └── samples/            # Sample projects
│   └── components/

## 🎮 Enhanced Interactive Playground

The playground has been completely redesigned to provide a realistic OpenSpec development experience:

### Key Features

1. **Multi-File Editor**
   - Edit `proposal.md`, `.openspec.yaml`, and source code files in tabs
   - Syntax highlighting for Markdown, YAML, COBOL, Java, and C#
   - Real-time content updates

2. **Terminal Simulator**
   - Run actual OpenSpec CLI commands:
     - `openspec validate` - Validate specifications
     - `openspec status` - Check project status
     - `openspec init` - Initialize configuration
   - See realistic command output
   - Learn CLI workflow without installation

3. **Progress Tracking**
   - Visual progress indicators for learning steps
   - Automatic detection of completed tasks
   - Guided learning path through OpenSpec workflow

4. **GitHub Codespaces Integration**
   - One-click access to full development environment
   - Pre-configured with OpenSpec CLI and language tools
   - No local setup required

5. **Language Examples**
   - COBOL: Batch processing with file I/O
   - Java: Spring Boot REST API
   - .NET: ASP.NET Core Web API
   - Switch between examples instantly

### How It Works

The playground simulates the complete OpenSpec workflow:

1. **Create Specification**: Write `proposal.md` with Problem, Solution, and Requirements
2. **Configure Project**: Set up `.openspec.yaml` with project metadata
3. **Validate**: Run `openspec validate` in the terminal
4. **Review Code**: See example implementation in source files
5. **Deploy**: Use Codespaces button for real environment

This approach ensures users learn the **actual OpenSpec process** rather than a simplified simulation.

│       ├── Navigation.tsx      # Main navigation
│       ├── Breadcrumbs.tsx     # Breadcrumb navigation
│       └── playground/         # Playground components
│           ├── FileTab.tsx     # Multi-file tab component
│           ├── TerminalSimulator.tsx  # CLI simulator
│           ├── CodespacesButton.tsx   # GitHub Codespaces integration
│           └── ProgressTracker.tsx    # Learning progress tracker
├── public/                     # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Deployment

### Option 1: Vercel (Recommended - FREE)

**Cost: $0/month**

Vercel is the easiest and most cost-effective option for Next.js applications.

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**Features:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- 100GB bandwidth/month (free tier)
- Unlimited websites on hobby plan

### Option 2: Netlify (FREE)

**Cost: $0/month**

Another excellent free option with similar features.

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

**Features:**
- 100GB bandwidth/month
- Automatic HTTPS
- Continuous deployment
- Form handling

### Option 3: GitHub Pages + Cloudflare (FREE)

**Cost: $0/month**

For static export only.

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
}
```

2. Build and export:
```bash
npm run build
```

3. Deploy to GitHub Pages or use Cloudflare Pages

### Option 4: Railway (Low Cost)

**Cost: ~$5/month**

Good for applications needing server-side features.

1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Deploy automatically

### Option 5: DigitalOcean App Platform

**Cost: $5/month (Basic tier)**

Managed platform with good performance.

## 💰 Cost Comparison

| Platform | Cost | Bandwidth | Build Minutes | Best For |
|----------|------|-----------|---------------|----------|
| **Vercel** | **FREE** | 100GB | Unlimited | **Recommended** |
| **Netlify** | FREE | 100GB | 300 min | Alternative |
| **GitHub Pages** | FREE | 100GB | N/A | Static only |
| **Railway** | $5/mo | Unlimited | Unlimited | Server features |
| **DigitalOcean** | $5/mo | 1TB | Unlimited | High traffic |

## 🎯 Recommended: Vercel (FREE)

**Why Vercel?**
1. ✅ **Zero cost** for hobby/personal projects
2. ✅ Built specifically for Next.js
3. ✅ Automatic deployments from GitHub
4. ✅ Global CDN included
5. ✅ Free SSL certificate
6. ✅ Preview deployments for pull requests
7. ✅ 100GB bandwidth (sufficient for most tutorials)
8. ✅ No credit card required for free tier

**Deployment Steps:**
```bash
# 1. Install Vercel CLI (optional)
npm i -g vercel

# 2. Deploy
vercel

# Or just push to GitHub and import on vercel.com
```

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set these in your hosting platform's dashboard.

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Update Branding
- Edit `src/app/layout.tsx` for site title and navigation
- Modify `tailwind.config.js` for color scheme
- Update `public/` folder for logos and images

### Add Content
- Add new tutorial pages in `src/app/tutorials/`
- Update sample projects in `src/app/samples/page.tsx`
- Modify playground examples in `src/app/playground/page.tsx`

## 📈 Performance

- Lighthouse Score Target: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Core Web Vitals: All green

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [OpenSpec Documentation](https://docs.openspec.dev)
- [GitHub Repository](https://github.com/openspec/openspec)
- [Tutorial Repository](https://github.com/shobhitguptaInd/openspec-tutorials)
- [Community Discord](https://discord.gg/openspec)

## 💡 Support

- 📧 Email: support@openspec.dev
- 💬 Discord: [Join our community](https://discord.gg/openspec)
- 🐛 Issues: [GitHub Issues](https://github.com/shobhitguptaInd/openspec-tutorials/issues)

---

Built with ❤️ for enterprise developers