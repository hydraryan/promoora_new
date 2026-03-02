# Promoora — Turning Offline Businesses Online

Premium web agency site built with **Next.js 16**, **Tailwind CSS 4**, **Framer Motion**, and **MongoDB**.

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| Framework  | Next.js 16 (App Router)             |
| Language   | TypeScript                          |
| Styling    | Tailwind CSS 4                      |
| Animations | Framer Motion                       |
| Database   | MongoDB Atlas (via native driver)   |
| Hosting    | Vercel (recommended)                |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- A MongoDB Atlas cluster (or local MongoDB instance)

### Installation

```bash
# Clone the repository
git clone https://github.com/hydraryan/promoora_new.git
cd promoora_new

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                   # Next.js App Router pages & API routes
│   ├── api/               # Backend API routes (book-a-call, get-started)
│   ├── services/          # Service detail pages
│   ├── book-a-call/       # Booking form page
│   ├── get-started/       # Get started form page
│   ├── privacy-policy/    # Legal pages
│   ├── terms-of-service/
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable UI components
└── lib/                   # Utilities (MongoDB client, etc.)
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable      | Description                        |
| ------------- | ---------------------------------- |
| `MONGODB_URI` | MongoDB Atlas connection string    |
| `MONGODB_DB`  | Database name (default: `promoora`)|

## Security

- HTTPS enforced via middleware (HTTP → HTTPS redirect in production)
- HSTS enabled (`max-age=63072000; includeSubDomains; preload`)
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`

## Deployment

Deploy on [Vercel](https://vercel.com) for zero-config Next.js hosting:

1. Push to GitHub
2. Import the repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

## License

All rights reserved © Promoora 2026
