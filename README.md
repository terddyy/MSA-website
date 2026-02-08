# Microsoft Learning Resource Hub

Production-ready MVP for a Microsoft learning resource hub built with Next.js (App Router) and Tailwind CSS.

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Content updates

Resource content is stored in a single data file:

- `src/features/resources/model/resources_data.ts`

Replace any `https://learn.microsoft.com/PLACEHOLDER` URLs with official Microsoft links when ready.

## Structure overview

- `src/app`: App Router pages (landing, resources, resource detail, about)
- `src/components`: reusable UI components (Button, Card, Badge, Container)
- `src/features`: feature-based MVC structure for resources and home sections

## Commands

- `npm run dev` start the development server
- `npm run build` build for production
- `npm run lint` run lint checks
