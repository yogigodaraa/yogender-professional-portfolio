# 🚀 Setting Up Your Development Environment

## Problem
`npm run dev` is not working because Node.js is not installed on your system.

## Solution: Install Node.js

### Option 1: Using Homebrew (Recommended for macOS)

**Step 1: Install Homebrew** (if you don't have it)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 2: Install Node.js**
```bash
brew install node
```

**Step 3: Verify Installation**
```bash
node --version
npm --version
```

### Option 2: Direct Download from nodejs.org
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer
4. Verify: `node --version`

### Option 3: Using nvm (Node Version Manager)

**Install nvm:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

**Install Node:**
```bash
nvm install --lts
nvm use --lts
```

---

## After Installing Node.js

### Step 1: Install Dependencies
```bash
cd /Users/yogigodara/Downloads/Projects/yogender-portfolio-professional
npm install
```

Or if using pnpm:
```bash
pnpm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

You should see:
```
> next dev
  ▲ Next.js 15.5.2
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Step 3: Open in Browser
Visit: http://localhost:3000

---

## Troubleshooting

### If you see "pnpm-lock.yaml" issues:
Your project uses **pnpm** (faster than npm)

```bash
# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Run dev server
pnpm dev
```

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

---

## Quick Checklist

- [ ] Node.js installed (`node --version`)
- [ ] npm/pnpm installed (`npm --version` or `pnpm --version`)
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Can access http://localhost:3000

---

## What to Expect After Setup

Once running, you'll see your portfolio at:
- **Local:** http://localhost:3000
- **Hot reload:** Changes auto-refresh
- **Skills page:** Shows new skills matrix ✅
- **Experience page:** Shows centralized experience data ✅
- **About page:** Shows tools & certifications ✅

---

**Once installed, run:** `npm run dev` and you're all set! 🎉
