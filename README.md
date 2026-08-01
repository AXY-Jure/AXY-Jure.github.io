# AXY Website

Production source and GitHub Pages static output for the public AXY marketing website.

## Stack

- Next-compatible React application exported as static HTML
- Pre-rendered public pages with clean URLs
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

To refresh the committed GitHub Pages output in the repository root:

```bash
npm run prepare:pages
```

## Important launch gates

Remaining launch connections after the approved marketing website is live:

- Confirm the final AXY application login URL
- Connect the free-access, walkthrough, pricing, and support forms
- Replace the temporary email-based pricing request with HubSpot submission
- Add counsel-approved privacy, terms, cookie, and data-processing documents
- Complete final visual, accessibility, mobile, and performance review

Stripe checkout remains intentionally unconnected.
