# Architecture Notes

Cloud Architect AI Flow is organized as a static frontend prototype with route-level product pages and reusable SaaS presentation components.

## Frontend Layers

| Layer | Path | Purpose |
| --- | --- | --- |
| Routes | `src/pages` | Landing, features, pricing, about, contact, roadmap, and account screens. |
| Layout | `src/components/layout` | Shared navigation, footer, and page shell. |
| Product sections | `src/components/common`, `src/components/sections`, `src/components/features` | Reusable SaaS content blocks, CTAs, cards, and feature presentations. |
| UI primitives | `src/components/ui` | shadcn/ui components used across the product. |
| Hooks | `src/hooks` | Shared UI hooks. |
| Utilities | `src/lib` | Shared helper functions. |

## Product Boundary

The current prototype uses client-side demo screens. A production version would require:

- Real authentication and session handling
- Server-side workspace and project persistence
- Secure AI review endpoints
- Tenant-aware authorization
- Billing and plan enforcement
- Audit logs for user and architecture activity

## Security Boundary

This repo is public and frontend-only. Any production backend, AI provider key, cloud credential, customer data, or private tenant endpoint must live outside this repository.
