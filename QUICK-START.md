# 🚀 Quick Start Guide

Get your OpenSpec Tutorial Website live in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
cd tutorial-website
npm install
```

## Step 2: Test Locally (1 minute)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Step 3: Deploy to Vercel FREE (3 minutes)

### Option A: Web Interface (Recommended)

1. **Create GitHub Repository**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it `openspec-tutorials` or similar

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/openspec-tutorials.git
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use your GitHub account)
   - Click "Import Project"
   - Select your `openspec-tutorials` repository
   - Click "Deploy" (no configuration needed!)
   - ✅ Done! Your site is live at `https://your-project.vercel.app`

### Option B: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts (accept all defaults)
```

## Step 4: Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `tutorials.openspec.dev`)
4. Update your DNS records as instructed
5. SSL certificate is automatically provisioned

## 🎉 You're Live!

Your tutorial website is now:
- ✅ Deployed globally on Vercel's CDN
- ✅ Secured with free SSL certificate
- ✅ Automatically deployed on every git push
- ✅ Costing you $0/month

## 📝 What You Built

Your website includes:
- **Homepage** with language selector (COBOL, Java, .NET)
- **Getting Started Guide** for new users
- **Language-Specific Tutorials** with comprehensive content
- **Interactive Playground** for trying specs without installation
- **Sample Projects** section with example repositories
- **Responsive Design** that works on all devices

## 🔄 Making Updates

```bash
# Make your changes
# Then commit and push

git add .
git commit -m "Update content"
git push

# Vercel automatically deploys your changes!
```

## 📊 Monitor Your Site

- **Analytics**: Go to Vercel dashboard → Analytics
- **Deployments**: See all deployments and their status
- **Logs**: View real-time logs for debugging

## 💡 Next Steps

1. **Customize Content**
   - Edit tutorial pages in `src/app/tutorials/`
   - Update sample projects in `src/app/samples/page.tsx`
   - Modify playground examples

2. **Add Your Branding**
   - Update colors in `tailwind.config.js`
   - Add your logo to `public/` folder
   - Customize navigation in `src/app/layout.tsx`

3. **Enhance Features**
   - Add video tutorials
   - Integrate with OpenSpec CLI
   - Add user authentication (if needed)
   - Set up analytics (Google Analytics, Plausible, etc.)

## 🆘 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Guide**: See `DEPLOYMENT.md` for detailed options

## 💰 Cost Breakdown

**Total Monthly Cost: $0** 🎉

- Hosting: FREE (Vercel)
- SSL Certificate: FREE (Vercel)
- CDN: FREE (Vercel)
- Bandwidth: 100GB FREE (Vercel)
- Deployments: Unlimited FREE (Vercel)

**When to Upgrade:**
- If you exceed 100GB bandwidth/month → Vercel Pro ($20/month for 1TB)
- If you need team collaboration → Vercel Pro
- If you need advanced analytics → Vercel Pro

For most tutorial websites, the FREE tier is more than sufficient!

---

**Congratulations! Your OpenSpec Tutorial Website is live! 🚀**