# nativ.social — landing page

Next.js 14 landing page with Resend waitlist.

## Local dev

```bash
npm install
cp .env.local.example .env.local
# fill in RESEND_API_KEY and NOTIFY_EMAIL
npm run dev
```

## Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "init"
gh repo create nativ-social --private --push --source=.
# or just push to your existing repo
```

### 2. Connect to Vercel
- Go to vercel.com → New Project → import your repo
- Framework: Next.js (auto-detected)
- Add env vars in Vercel dashboard:
  - `RESEND_API_KEY` = your key from resend.com
  - `NOTIFY_EMAIL` = your email

### 3. Set up Resend
- Create account at resend.com
- Go to Domains → Add Domain → `nativ.social`
- Resend gives you DNS records — add them in GoDaddy DNS
- Wait for verification (usually <10min)
- Get API key from API Keys section

### 4. Point GoDaddy DNS → Vercel
After deploying, in Vercel:
- Project → Settings → Domains → Add `nativ.social` and `www.nativ.social`

In GoDaddy DNS:
- `A` record: `@` → `76.76.21.21`
- `CNAME`: `www` → `cname.vercel-dns.com`

SSL is automatic.

### 5. Resend domain DNS (also in GoDaddy)
Resend will give you ~3 TXT/CNAME records to add for email sending.
Add all of them. Without this, emails go to spam or fail.
