<div align="center">

<img src="public/icon.png" alt="WhizzLink Logo" width="80" />

# WhizzLink

**Shorten. Transform. Connect.**

A fast, open-source URL shortener and QR code generator built with Next.js.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-whizzlink.vercel.app-F4652D?style=for-the-badge&logo=vercel&logoColor=white)](https://whizzlink.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

- 🔗 **URL Shortener** — Turn long URLs into clean, shareable short links instantly
- 📱 **QR Code Generator** — Create and download QR codes for any URL
- 💾 **Save & Manage** — Sign in to save your links and QR codes in a personal dashboard
- 🔐 **OAuth Authentication** — Sign in with Google or GitHub via NextAuth
- 🌍 **Internationalization** — English and Spanish support out of the box
- 📋 **Copy to Clipboard** — One-click copy for shortened links
- ✏️ **Edit & Delete** — Full CRUD on your saved links and QR codes
- 📄 **Pagination** — Clean paginated lists for links and QR codes
- 📱 **Responsive** — Works great on desktop, tablet and mobile

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | CSS Modules + [Material UI](https://mui.com) |
| Database | PostgreSQL via [Neon](https://neon.tech) |
| ORM | [Prisma](https://prisma.io) |
| Auth | [NextAuth.js](https://next-auth.js.org) |
| i18n | [React Intl](https://formatjs.io/docs/react-intl/) |
| QR Generation | [qrcode](https://www.npmjs.com/package/qrcode) |
| Notifications | [React Hot Toast](https://react-hot-toast.com) |
| Deployment | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database (we recommend [Neon](https://neon.tech) — free tier available)
- Google and/or GitHub OAuth credentials

### 1. Clone the repository

```bash
git clone https://github.com/Congrak/WhizzLink.git
cd WhizzLink
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root:

```env
# App
NEXT_URL=http://localhost:3000/

# Database (Neon or any PostgreSQL)
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
DIRECT_URL=postgresql://user:password@host-direct/dbname?sslmode=require

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-random-secret-here   # openssl rand -base64 32
SECRET=your-random-secret-here

# Google OAuth
NEXTAUTH_GOOGLE_CLIENT_ID=your-google-client-id
NEXTAUTH_SECRET_GOOGLE_CLIENT=your-google-client-secret

# GitHub OAuth
NEXTAUTH_GITHUB_CLIENT_ID=your-github-client-id
NEXTAUTH_SECRET_GITHUB_CLIENT=your-github-client-secret

# Environment
PROJECT_ENV=development

# Optional: Analytics
NEXT_GOOGLE_ANALITYCS=G-XXXXXXXXXX
NEXT_GOOGLE_TAGS_MANAGER=GTM-XXXXXXX
```

### 4. Set up the database

```bash
npx prisma migrate deploy
npx prisma generate
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 OAuth Setup

### Google
1. Go to [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials
2. Create an OAuth 2.0 Client ID (Web application)
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. For production add: `https://yourdomain.com/api/auth/callback/google`

### GitHub
1. Go to GitHub → Settings → Developer settings → OAuth Apps → New OAuth App
2. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. For production add: `https://yourdomain.com/api/auth/callback/github`

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── api/
│   │   ├── auth/           # NextAuth handler
│   │   ├── links/          # Link CRUD endpoints
│   │   ├── qr/             # QR code endpoints
│   │   ├── delete/         # Delete endpoint
│   │   ├── shorted/        # URL redirect endpoint
│   │   └── updateLink/     # Update link endpoint
│   └── [shorted]/          # Dynamic redirect route
├── componets/              # React components
│   ├── blocks/             # Page-level blocks (creation, save, notLogged)
│   ├── common/             # Reusable UI (Button, Tab, Pagination, Skeleton...)
│   ├── home/               # Home page component
│   ├── navbar/             # Navigation bar
│   ├── footer/             # Footer
│   ├── login/              # Sign in modal content
│   ├── modal/              # Modal wrapper
│   ├── settings/           # Link edit modal
│   └── showQR/             # QR display modal
├── lib/                    # Prisma client
├── locales/                # i18n translations (en, es)
├── provider/               # React context providers
├── service/                # API client functions
├── types/                  # TypeScript type definitions
└── utils/                  # Helper functions
```

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Add all environment variables from `.env.local`
4. Deploy

> **Note:** Make sure `DATABASE_URL` and `DIRECT_URL` point to a production PostgreSQL instance (e.g. [Neon](https://neon.tech)).

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add my feature'`
4. Push and open a PR

---

## 🐛 Found a bug?

Please [open an issue](https://github.com/Congrak/WhizzLink/issues) and describe what happened.

---

## 📄 License

MIT © [Rodrigo Celis](https://github.com/Congrak)

---

<div align="center">

Made with ❤️ by [Rodrigo Celis](https://www.linkedin.com/in/rodrigo-celis-zamora/)

</div>
