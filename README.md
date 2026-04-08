# 🎺 Mariachi Amigos LA — Website

**Professional website for Mariachi Amigos LA** — Built with Next.js 15, Tailwind CSS, and Framer Motion.

**Live site:** [mariachiamigosla.com](https://mariachiamigosla.com)  
**Phone:** [(323) 767-6657](tel:+13237676657)  
**Email:** [mariachiamigosla@gmail.com](mailto:mariachiamigosla@gmail.com)

---

## 📋 Table of Contents

1. [Tech Stack](#tech-stack)
2. [Local Development](#local-development)
3. [Project Structure](#project-structure)
4. [Environment Variables](#environment-variables)
5. [Email Setup (Contact Form)](#email-setup)
6. [Deploying to Vercel](#deploying-to-vercel)
7. [Domain Configuration (Namecheap → Vercel)](#domain-configuration)
8. [Customization Guide](#customization-guide)
9. [Performance & SEO](#performance--seo)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |
| **Lucide React** | Icon library |

---

## Local Development

### Prerequisites

- **Node.js 18.17+** — Download at [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js), or **pnpm** / **yarn**

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Start the development server

```bash
npm run dev
```

This starts the Next.js development server with **hot reloading**.  
Open your browser and go to: **[http://localhost:3000](http://localhost:3000)**

The site will automatically update as you edit files — no refresh needed.

### Step 3 — Optional: Set up environment variables

Copy the example env file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your values (see [Environment Variables](#environment-variables)).

### Other commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at localhost:3000 |
| `npm run build` | Build for production (checks for errors) |
| `npm run start` | Start production server locally |
| `npm run lint` | Run ESLint checks |

### Verify the build before deploying

Always run a production build locally before pushing:

```bash
npm run build && npm run start
```

Then visit [http://localhost:3000](http://localhost:3000) to confirm everything works.

---

## Project Structure

```
mariachi-amigos-la/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles, animations, utilities
│   ├── layout.tsx                # Root layout with SEO metadata
│   └── page.tsx                  # Main page (assembles all sections)
│
├── components/
│   ├── Navigation.tsx            # Sticky nav with language toggle + phone CTA
│   ├── Hero.tsx                  # Full-viewport hero with image carousel
│   ├── About.tsx                 # Band bio and stats
│   ├── Services.tsx              # Pricing cards + event types + service areas
│   ├── Gallery.tsx               # Masonry photo grid with lightbox
│   ├── Booking.tsx               # Contact/booking form
│   └── Footer.tsx                # Footer with CTA, links, contacts
│
├── lib/
│   ├── translations.ts           # All English + Spanish text content
│   └── LanguageProvider.tsx      # React context for language switching
│
├── public/                       # Static assets
│   ├── favicon.ico
│   ├── og-image.jpg              # Open Graph image (add your photo here)
│   └── apple-touch-icon.png
│
├── .env.example                  # Environment variable template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind + custom colors/animations
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# ── Contact Form Email (choose one method below) ────────────

# Method 1: Gmail via Nodemailer
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.gmail@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_EMAIL=mariachiamigosla@gmail.com

# Method 2: Resend (recommended — easier setup)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

**Gmail App Password Setup:**
1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Security → 2-Step Verification (enable it)
3. Security → App Passwords → Create one for "Mail"
4. Use the 16-character code as `SMTP_PASS`

---

## Email Setup

The contact form at `/api/contact` currently **logs submissions to the console** in development. To enable real email delivery:

### Option A: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Create an API key
3. Add to `.env.local`: `RESEND_API_KEY=re_your_key`
4. Install: `npm install resend`
5. Uncomment the Resend block in `app/api/contact/route.ts`

### Option B: Nodemailer + Gmail

1. Set up Gmail App Password (see above)
2. Fill in all `SMTP_*` variables in `.env.local`
3. Install: `npm install nodemailer @types/nodemailer`
4. Uncomment the Nodemailer block in `app/api/contact/route.ts`

---

## Deploying to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Mariachi Amigos LA website"
git remote add origin https://github.com/yourusername/mariachi-amigos-la.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (or create account)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"** → select your GitHub repo
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site will be live at `https://your-project.vercel.app` in ~2 minutes

### Step 3 — Add Environment Variables to Vercel

1. In Vercel Dashboard → your project → **Settings → Environment Variables**
2. Add each variable from your `.env.local` file
3. Set environment to **Production** (and Preview/Development as needed)
4. Redeploy: Deployments tab → "..." → **Redeploy**

---

## Domain Configuration

### Connecting mariachiamigosla.com (Namecheap → Vercel)

There are **two methods**. We recommend **Method 1** (Vercel Nameservers) as it's simpler and gives Vercel full DNS control.

---

### METHOD 1: Vercel Nameservers (Recommended ✅)

**In Vercel:**

1. Go to your project → **Settings → Domains**
2. Click **"Add Domain"**
3. Enter `mariachiamigosla.com` and click **Add**
4. Vercel will show you nameservers like:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
5. Copy these nameservers

**In Namecheap:**

1. Log in at [namecheap.com](https://namecheap.com)
2. Go to **Domain List** → click **Manage** next to `mariachiamigosla.com`
3. Under **Nameservers**, select **"Custom DNS"** from the dropdown
4. Enter the Vercel nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Click the **checkmark ✓** to save
6. Wait **24–48 hours** for DNS propagation

**Verify:** Go to [dnschecker.org](https://dnschecker.org) and check `mariachiamigosla.com` — it should resolve to Vercel's IPs.

---

### METHOD 2: Advanced DNS (A Record + CNAME)

Use this if you need to keep Namecheap as your DNS provider.

**In Vercel:**

1. Go to your project → **Settings → Domains**
2. Click **"Add Domain"** → enter `mariachiamigosla.com` → Add
3. Also add `www.mariachiamigosla.com`
4. Vercel will show you the required records

**In Namecheap → Advanced DNS:**

1. Log in → **Domain List** → **Manage** → **Advanced DNS** tab
2. **Delete** any existing A records for `@` and CNAME for `www`
3. Add these records:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | `@` | `76.76.21.21` | Automatic |
| CNAME | `www` | `cname.vercel-dns.com` | Automatic |

4. Click **Save All Changes**
5. Wait **24–48 hours** for DNS propagation

**Also add the domain in Vercel:**

Back in Vercel → Settings → Domains, make sure both these are added and verified:
- `mariachiamigosla.com`
- `www.mariachiamigosla.com`

Vercel handles SSL/HTTPS automatically via Let's Encrypt — no extra configuration needed!

---

### Verifying DNS Propagation

Check these tools to confirm your DNS is active:
- [dnschecker.org](https://dnschecker.org) — check A records globally
- [mxtoolbox.com](https://mxtoolbox.com/DNSLookup.aspx) — DNS lookup
- `nslookup mariachiamigosla.com` in your terminal

You'll know it's working when visiting `mariachiamigosla.com` loads your Vercel deployment.

---

## Customization Guide

### Updating Colors

Edit `tailwind.config.ts` → `colors.fiesta` to adjust the palette.

### Updating Text Content (Bilingual)

All text is in `lib/translations.ts`. Edit the `en` and `es` objects to update any copy in both languages simultaneously.

### Replacing Photos

**Hero images** — Edit the `BG_IMAGES` array in `components/Hero.tsx`:
```ts
const BG_IMAGES = [
  "https://your-image-url.com/photo1.jpg",
  // ...
];
```

**Gallery photos** — Edit the `GALLERY_IMAGES` array in `components/Gallery.tsx`.

**About section photo** — Replace the `src` in the `<img>` tag in `components/About.tsx`.

**Open Graph image** — Replace `public/og-image.jpg` with a 1200×630px photo of the band.

### Adding Real Band Photos

1. Place photos in `public/images/` (e.g., `public/images/band-hero.jpg`)
2. Reference them as `/images/band-hero.jpg` in the `src` attribute
3. For optimal performance, use Next.js `<Image>` from `next/image`

### Pricing Updates

Edit the `packages` array in `lib/translations.ts` — update both `en.services.packages` and `es.services.packages`.

---

## Performance & SEO

The site is optimized out of the box:

- **Structured Data** — LocalBusiness + MusicGroup schema in `app/layout.tsx`
- **Open Graph** — Social preview cards configured
- **Image optimization** — Next.js `<Image>` for remote images
- **Font optimization** — System fonts (no external font loading delay)
- **Animation** — Framer Motion with `useInView` for viewport-triggered animations
- **Core Web Vitals** — Scroll-based parallax with `useTransform`

**Google Search Console:** After domain is live, verify at [search.google.com/search-console](https://search.google.com/search-console).

**Google Business Profile:** Create a free listing at [business.google.com](https://business.google.com) to appear in Google Maps searches for "mariachi band Los Angeles."

---

## Support

**Questions?** Contact: mariachiamigosla@gmail.com  
**Phone:** (323) 767-6657

---

*Built with ♥ in Los Angeles*
