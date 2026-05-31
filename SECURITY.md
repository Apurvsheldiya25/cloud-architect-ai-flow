# Security Policy

## Supported Scope

This repository is a public frontend prototype. It does not contain production infrastructure, backend services, private keys, or live cloud credentials.

Security review scope:

- Public React/TypeScript source code
- Build and dependency configuration
- Static assets
- CI and repository hygiene

Out of scope:

- Private products and internal repositories
- Social engineering
- Denial-of-service testing
- Attempts to access accounts, cloud tenants, or infrastructure not owned by this repository

## Reporting

If you find a security issue, open a private GitHub security advisory or contact the repository owner through GitHub. Do not publish exploit details until the issue has been reviewed.

## Secret Handling

- Do not commit `.env` files.
- Do not commit cloud credentials, API keys, tokens, OAuth secrets, or service-role keys.
- Use `.env.example` for public placeholders only.

## Local Development Safety

The Vite dev server is configured to bind to `127.0.0.1` by default. Avoid exposing the dev server on public networks.
