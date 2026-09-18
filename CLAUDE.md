# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- Install dependencies: `bun install`
- Start development server: `bun run dev` (or `bun run dev:win` on Windows)
- Build for production: `bun run build` (or `bun run build:win` on Windows)
- Start production server: `bun run start` (or `bun run start:win` on Windows)
- Lint code: `bun run lint`
- Database (Prisma) commands:
  * Push schema: `bun run db:push`
  * Generate client: `bun run db:generate`
  * Run migrations: `bun run db:migrate`
  * Reset database: `bun run db:reset`

Note: The primary database is Supabase. The Prisma commands are for local development with SQLite.

## Architecture Overview

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **State Management**: React Query (tanstack/react-query) and Zustand
- **Backend**: Supabase (PostgreSQL) for database, authentication, and storage
- **Authentication**: Supabase Auth with custom admin protection
- **Deployment**: Containerized with Docker, configurable for Vercel

### Directory Structure

- `src/app`: Contains the Next.js App Router routes, divided into:
  * `(public)`: Publicly accessible pages (home, about, projects, blog, contact, resume)
  * `(admin)`: Admin dashboard (protected by Supabase Auth)
  * `api`: API route handlers (contact form, storage operations, etc.)
- `src/components`: Reusable UI components, split into:
  * `layout`: Navbar, Footer
  * `sections`: Page sections (Hero, About, Skills, etc.)
  * `ui`: shadcn/ui base components
- `src/features`: Feature-specific logic (projects, blog, skills, experience, contact, auth, resume, testimonials), each containing:
  * `actions.ts`: Server actions or mutations
  * `queries.ts`: Data fetching queries
  * `schemas.ts`: Zod schemas for validation
  * `types.ts`: TypeScript types
- `src/lib`: Utility modules and Supabase client wrappers:
  * `supabase/`: Client, server, admin, and middleware for Supabase
  * `constants.ts`: Site configuration (name, role, social links, navigation)
  * `motion.ts`: Reusable Framer Motion animation variants
  * `utils.ts`: Helper functions
  * `db.ts`: Prisma client singleton (for local development)
- `src/types/database.ts`: Generated Supabase database types (for TypeScript safety)

### Key Features

- Public portfolio with dynamic content from Supabase
- Admin dashboard for managing portfolio content (CRUD operations)
- Contact form with validation and Supabase storage
- Blog with markdown support
- Resume section with downloadable PDF
- Framer Motion animations for enhanced UI

### Environment Variables

Copy `.env.local` and set:
  NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
  SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

### Getting Started

1. Install dependencies: `bun install`
2. Set up a Supabase project and run the schema (found in the README)
3. Configure environment variables
4. Run the development server: `bun run dev`