# Cloud Architect AI Flow

Cloud Architect AI Flow is a public React and TypeScript prototype for an AI-assisted cloud architecture SaaS experience. It presents the product narrative, onboarding surfaces, pricing, roadmap, contact flow, and account screens for a multi-cloud architecture planning platform.

This repository is intentionally portfolio-safe. It is a frontend product prototype, not a production backend or live cloud integration.

## Product Snapshot

| Area | What It Shows |
| --- | --- |
| Product narrative | Landing, feature, pricing, roadmap, about, contact, login, and signup surfaces. |
| Multi-cloud positioning | Messaging and UI patterns for AWS, Azure, and Google Cloud architecture workflows. |
| SaaS UX | Conversion-focused pages, reusable sections, pricing cards, CTAs, and account entry points. |
| Component system | Shared layout, common product sections, shadcn/ui primitives, and responsive Tailwind styling. |
| Motion and polish | Framer Motion, Lucide icons, and structured visual hierarchy for a modern AI product site. |

## Tech Stack

- React 18
- TypeScript
- Vite 8
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- Lucide React

## Repository Structure

```text
src/
  components/
    common/        Reusable marketing and product-section components
    features/      Feature-specific presentation components
    layout/        Navbar, footer, and page shell
    sections/      Larger homepage and product sections
    timeline/      Roadmap presentation
    ui/            Reusable shadcn/ui primitives
  hooks/           Shared UI hooks
  lib/             Utility helpers
  pages/           Route-level product and account screens
public/            Static assets
```

## Local Development

```bash
npm install
npm run dev
```

The dev server binds to localhost only:

```text
http://127.0.0.1:8080
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npm run check
```

## Environment

No secrets are required for the public prototype. Use `.env.example` only as a placeholder for future public-safe configuration.

Never commit `.env`, API keys, cloud credentials, OAuth secrets, service-role keys, or private infrastructure endpoints.

## Security Notes

- No production auth, database, AI provider, or cloud account access is included.
- Login, signup, and forgot-password flows are frontend demonstration screens.
- The Vite dev server is restricted to localhost to avoid exposing local files over the network.
- Dependency updates are tracked through Dependabot and CI.
- Report security concerns privately through the process in [SECURITY.md](SECURITY.md).

## CI

GitHub Actions validates linting, TypeScript, and production builds on pull requests and pushes to `main`.

## Portfolio Context

This project is part of Apurv Sheldiya's public AI product portfolio. It demonstrates SaaS product storytelling, AI cloud architecture positioning, frontend composition, and secure public-repo hygiene without exposing private or production systems.
