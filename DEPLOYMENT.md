# Deployment Guide - OpenSpec Tutorial Website

## 🎯 Most Cost-Effective Solution: Vercel (FREE)

**Total Cost: $0/month** ✅

Vercel is the **recommended and most cost-effective** hosting solution for this Next.js website.

### Why Vercel?

1. **Completely FREE** for hobby/personal projects
2. Built specifically for Next.js (zero configuration)
3. Automatic deployments from GitHub
4. Global CDN included
5. Free SSL certificate
6. 100GB bandwidth/month (sufficient for tutorial sites)
7. Unlimited websites on free tier
8. Preview deployments for every pull request
9. No credit card required

### Quick Deployment to Vercel

#### Method 1: Web Interface (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/openspec-tutorials.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" (use GitHub account)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy" (no configuration needed!)
   - Done! Your site is live at `https://your-project.vercel.app`

#### Method 2: CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd tutorial-website
vercel

# Follow prompts (all defaults work)
```

### Custom Domain (Optional)

**Free with Vercel:**
- Go to Project Settings → Domains
- Add your domain (e.g., `tutorials.openspec.dev`)
- Update DNS records as instructed
- SSL certificate automatically provisioned

---

## 📊 Alternative Hosting Options

### Option 2: Netlify (FREE)

**Cost: $0/month**

Very similar to Vercel, also excellent for Next.js.

**Deployment:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

**Features:**
- 100GB bandwidth/month
- Automatic HTTPS
- Form handling
- Serverless functions

### Option 3: Cloudflare Pages (FREE)

**Cost: $0/month**

Great performance with Cloudflare's global network.

**Deployment:**
1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect repository
4. Build settings:
   - Framework preset: Next.js
   - Build command: `npm run build`
5. Deploy

**Features:**
- Unlimited bandwidth
- Unlimited requests
- Global CDN
- DDoS protection

### Option 4: GitHub Pages (FREE - Static Only)

**Cost: $0/month**

Only for static export (no server-side features).

**Setup:**
1. Update `next.config.js`:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/openspec-tutorials'
   }
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Push 'out' folder to gh-pages branch
   ```

**Limitations:**
- No API routes
- No server-side rendering
- No image optimization

### Option 5: Railway (Low Cost)

**Cost: $5/month**

Good if you need database or backend services.

**Deployment:**
1. Go to [railway.app](https://railway.app)
2. Connect GitHub
3. Deploy automatically

**Features:**
- PostgreSQL database included
- Environment variables
- Custom domains
- Automatic SSL

### Option 6: DigitalOcean App Platform

**Cost: $5/month (Basic tier)**

Managed platform with good performance.

**Deployment:**
1. Go to [digitalocean.com/products/app-platform](https://digitalocean.com/products/app-platform)
2. Connect GitHub
3. Configure build settings
4. Deploy

**Features:**
- 1TB bandwidth
- Automatic scaling
- Database add-ons available

---

## 💰 Cost Comparison Table

| Platform | Monthly Cost | Bandwidth | SSL | CDN | Best For |
|----------|-------------|-----------|-----|-----|----------|
| **Vercel** ⭐ | **$0** | 100GB | ✅ | ✅ | **Recommended** |
| Netlify | $0 | 100GB | ✅ | ✅ | Alternative |
| Cloudflare Pages | $0 | Unlimited | ✅ | ✅ | High traffic |
| GitHub Pages | $0 | 100GB | ✅ | ❌ | Static only |
| Railway | $5 | Unlimited | ✅ | ✅ | Need backend |
| DigitalOcean | $5 | 1TB | ✅ | ✅ | Enterprise |

---

## 🚀 Recommended Setup: Vercel FREE Tier

### What You Get FREE:

✅ **Hosting**
- Unlimited websites
- Automatic deployments
- Preview deployments for PRs

✅ **Performance**
- Global CDN (Edge Network)
- Automatic caching
- Image optimization
- 100GB bandwidth/month

✅ **Developer Experience**
- Zero configuration
- Instant rollbacks
- Environment variables
- Analytics (basic)

✅ **Security**
- Free SSL certificate
- DDoS protection
- Automatic HTTPS

### Bandwidth Estimation

For a tutorial website:
- Average page size: ~500KB
- 100GB = ~200,000 page views/month
- More than sufficient for most tutorial sites

If you exceed 100GB:
- Upgrade to Pro: $20/month (1TB bandwidth)
- Or use Cloudflare Pages (unlimited bandwidth)

---

## 📝 Deployment Checklist

### Before Deployment

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Check for errors: `npm run lint`
- [ ] Update environment variables
- [ ] Test on mobile devices
- [ ] Verify all links work

### After Deployment

- [ ] Test live site
- [ ] Check all pages load
- [ ] Verify navigation works
- [ ] Test on different browsers
- [ ] Check mobile responsiveness
- [ ] Set up custom domain (optional)
- [ ] Configure analytics (optional)
- [ ] Set up monitoring (optional)

---

## 🔧 Environment Variables

### Required Variables

None required for basic deployment.

### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (if needed later)
NEXT_PUBLIC_API_URL=https://api.openspec.dev
```

Set these in Vercel dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables
4. Redeploy

---

## 🎯 Final Recommendation

**Use Vercel FREE tier** - It's the perfect solution because:

1. ✅ **Zero cost** - No credit card needed
2. ✅ **Zero configuration** - Works out of the box
3. ✅ **Best performance** - Built for Next.js
4. ✅ **Automatic deployments** - Push to GitHub = deployed
5. ✅ **100GB bandwidth** - More than enough
6. ✅ **Professional features** - SSL, CDN, previews included

### Deployment Time: ~5 minutes

```bash
# 1. Push to GitHub (2 min)
git push origin main

# 2. Import on Vercel (2 min)
# Click, click, done!

# 3. Live! (1 min)
# Your site is now at https://your-project.vercel.app
```

---

## 📞 Support

If you need help with deployment:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Vercel Discord: [vercel.com/discord](https://vercel.com/discord)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Bottom Line:** Deploy to Vercel for free, and you're done! 🎉