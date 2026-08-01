# AXY Website

Production preparation of the public AXY marketing website.

The live `axy.net` Coming Soon page remains on the repository's `main` branch. The replacement website is developed and reviewed on `agent/prepare-new-axy-website` and must not be merged into `main` until it is approved.

## Stack

- Next-compatible React application built with Vinext and Vite
- Server-rendered public pages with clean URLs
- Local image assets under `public/images`
- Per-page metadata, canonical URLs, `robots.txt`, and sitemap generation

## Local development

```bash
npm ci
npm run dev
```

## Validation

```bash
npm run build
npm run validate:artifact
```

## Important launch gates

Before merging the replacement into `main`:

- Confirm the final AXY application login URL
- Connect the free-access, walkthrough, pricing, and support forms
- Add the approved GA4 measurement ID and EEA consent flow
- Replace the temporary email-based pricing request with HubSpot submission
- Add counsel-approved privacy, terms, cookie, and data-processing documents
- Complete final visual, accessibility, mobile, and performance review

Stripe checkout is intentionally not connected in this branch.
