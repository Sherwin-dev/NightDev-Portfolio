# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Development Commands

### Package Management

- Install dependencies: `bun install`
- Add a dependency: `bun add <package>`
- Add a development dependency: `bun add -d <package>`

### Development Server

- Start development server: `bun run dev`
- Start development server on Windows: `bun run dev:win`

### Production

- Build for production: `bun run build`
- Build for production on Windows: `bun run build:win`
- Start production server: `bun run start`
- Start production server on Windows: `bun run start:win`

### Code Quality

- Lint code: `bun run lint`
- Run tests: inspect `package.json` for the available test scripts.
- Run TypeScript checks: inspect `package.json` and `tsconfig.json` for the project's configured type-checking command.

Do not assume a test, formatting, or type-checking script exists without inspecting the repository.

### Database Commands

The project uses Supabase as its primary database. Prisma commands are intended for local development with SQLite unless the existing configuration explicitly specifies otherwise.

- Push schema: `bun run db:push`
- Generate Prisma client: `bun run db:generate`
- Run migrations: `bun run db:migrate`
- Reset local database: `bun run db:reset`

**Database safety rules:**

- Inspect the database configuration before executing database commands.
- Do not run destructive commands against production databases.
- Do not reset databases, drop tables, delete records, or overwrite migrations without explicit authorization.
- Understand the difference between the production Supabase database and the local Prisma/SQLite setup before making schema changes.
- Preserve existing migration history and database compatibility.

## Architecture Overview

### Technology Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **State Management:** TanStack React Query and Zustand
- **Backend:** Supabase PostgreSQL
- **Authentication:** Supabase Auth with custom administrative protection
- **Validation:** Zod where established by the project
- **Animations:** Framer Motion
- **ORM:** Prisma for local SQLite development
- **Deployment:** Docker, with configuration for Vercel where applicable
- **Package Manager:** Bun

Use the versions and configurations already defined by the repository. Do not upgrade frameworks, dependencies, or tooling without a clear requirement.

### Directory Structure

#### Application Routes

`src/app/`

Contains Next.js App Router routes.

- `(public)/`: Public portfolio pages, including home, about, projects, blog, contact, and resume.
- `(admin)/`: Administrative dashboard routes protected by the existing authentication and authorization architecture.
- `api/`: API route handlers, including contact form and storage-related operations where implemented.

Inspect the actual route structure before creating new pages or assuming a route exists.

#### Components

`src/components/`

Reusable UI components.

- `layout/`: Navbar, footer, and shared layout components.
- `sections/`: Portfolio page sections, including hero, about, skills, and related content.
- `ui/`: shadcn/ui components and shared interface primitives.

Prefer reusing and extending existing components rather than creating duplicate implementations.

#### Features

`src/features/`

Feature-specific logic for:

- Projects
- Blog
- Skills
- Experience
- Contact
- Authentication
- Resume
- Testimonials

Feature modules may contain:

- `actions.ts`: Server actions and mutations.
- `queries.ts`: Data fetching and query functions.
- `schemas.ts`: Validation schemas.
- `types.ts`: Feature-specific TypeScript types.

Inspect the existing module before adding files. Not every feature is required to have every file.

#### Libraries and Utilities

`src/lib/`

Shared utility modules and service integrations.

- `supabase/`: Supabase client wrappers for browser, server, administrative, and middleware-related operations, according to the existing implementation.
- `constants.ts`: Site configuration, role information, navigation, and social links.
- `motion.ts`: Reusable Framer Motion animation variants.
- `utils.ts`: Shared utility functions.
- `db.ts`: Prisma client singleton for local development.

#### Database Types

`src/types/database.ts`

Contains generated Supabase database types.

When database schemas change:

1. Inspect the existing database schema and types.
2. Use the project's established type-generation workflow.
3. Update generated types through the appropriate generation process.
4. Avoid manually editing generated types unless the repository explicitly requires it.
5. Verify that affected queries and mutations remain type-safe.

## Key Features

The portfolio includes:

- Public portfolio pages with dynamic content from Supabase.
- Administrative dashboard for portfolio content management.
- CRUD operations for supported content types.
- Contact form with validation and appropriate data handling.
- Blog with Markdown support.
- Resume section with downloadable PDF.
- Framer Motion animations.
- Authentication and administrative access protection.

Preserve existing functionality when implementing new features. Do not remove or replace working functionality merely to simplify implementation.

## Environment Variables

Configure the required variables in `.env.local`.

```dotenv
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

These are example placeholders, not real credentials.

### Environment Security

- Never commit `.env.local` or other files containing real secrets.
- Keep `.env.example` synchronized with the variables the application actually requires, using placeholders only.
- Never place service-role keys or other privileged credentials in `NEXT_PUBLIC_` variables.
- Use privileged Supabase clients exclusively in trusted server-side execution contexts.
- Never expose server-only secrets through client components, API responses, logs, or generated public artifacts.
- Validate required environment variables where they are consumed.
- Avoid printing environment variable values during debugging.
- Preserve existing environment configuration unless a change is necessary.

## Getting Started

1. Install dependencies using `bun install`.
2. Configure the Supabase project.
3. Review the README and existing database schema instructions.
4. Configure `.env.local` using valid credentials.
5. Start the development server:
   - Windows: `bun run dev:win`
   - Linux/macOS: `bun run dev`

Before starting development, inspect the repository status and existing configuration. Do not overwrite local changes or recreate deleted environment files without understanding the current state.

---

## Engineering Standards

### 1. Repository Inspection

Before modifying code:

1. Read this `CLAUDE.md`.
2. Inspect the repository structure and relevant source files.
3. Review `package.json`, `tsconfig.json`, and relevant configuration.
4. Inspect existing implementations, related features, and established patterns.
5. Check Git status to identify pre-existing changes.
6. Identify dependencies, integration points, and potential regressions.
7. Establish an implementation plan for work involving multiple files or features.

Do not assume the documentation perfectly reflects the current codebase. Verify important architectural details against the actual implementation.

### 2. Code Quality

- Use strict, meaningful TypeScript types.
- Avoid `any` unless justified by a specific technical constraint.
- Prefer small, cohesive functions and components.
- Keep business logic separate from presentation where appropriate.
- Reuse existing utilities, schemas, components, and service wrappers.
- Follow established naming conventions.
- Avoid unnecessary abstraction and premature optimization.
- Avoid duplicating validation, authorization, or data-access logic.
- Handle expected failure cases explicitly.
- Remove newly introduced dead code and unused imports.
- Keep changes focused on the requested task.

### 3. File Size and Maintainability

- Prefer keeping individual source files below approximately 500 lines when practical.
- Treat this as a maintainability guideline rather than an absolute requirement.
- Split oversized modules into cohesive components, hooks, services, or utilities when doing so improves readability.
- Do not split files artificially merely to meet a line-count target.
- Do not perform unrelated refactoring to reduce file size.

### 4. Preserve Existing Code

- Do not delete working features or necessary code without justification.
- Do not replace an existing implementation with a different architecture without establishing why the change is needed.
- Do not overwrite unrelated user changes.
- Do not revert user changes or run destructive Git commands without explicit authorization.
- Avoid changing dependency versions unless the task requires it.
- Preserve compatibility with existing routes, data structures, and API contracts where possible.

### 5. Next.js and React

- Follow Next.js App Router conventions.
- Prefer Server Components unless client-side interactivity or browser APIs require a Client Component.
- Add `"use client"` only where necessary.
- Keep server-only modules out of client-side dependency graphs.
- Use appropriate server-side data access patterns.
- Avoid unnecessary client-side fetching when server-side rendering or existing query utilities are more appropriate.
- Use React Query for client-side server-state management according to existing project conventions.
- Use Zustand for shared client state when appropriate.
- Handle loading, empty, error, and success states in user interfaces.
- Follow existing routing, metadata, and error-handling conventions.

### 6. TypeScript

- Maintain compatibility with the project's `tsconfig.json`.
- Use explicit types for important application boundaries.
- Avoid unsafe type assertions when proper validation or type narrowing is available.
- Use generated Supabase types where appropriate.
- Keep API request and response types consistent across the frontend and backend.
- Validate untrusted runtime input instead of assuming TypeScript types guarantee data validity.
- Do not suppress compiler errors without understanding and documenting the reason.

### 7. UI/UX and Accessibility

- Follow existing Tailwind CSS and shadcn/ui conventions.
- Reuse design tokens, CSS variables, and shared UI components.
- Maintain responsive behavior across mobile, tablet, and desktop.
- Use semantic HTML and accessible interactive controls.
- Provide appropriate labels, keyboard interaction, focus visibility, and accessible names.
- Respect reduced-motion preferences for animations.
- Avoid excessive animations that interfere with usability.
- Provide appropriate loading, empty, error, and success states.
- Maintain visual consistency across public and administrative interfaces.
- Avoid introducing duplicate design systems or unnecessary component libraries.

### 8. Data Access and State Management

- Use Supabase as the primary data source according to the existing architecture.
- Reuse existing query functions and mutation patterns.
- Use React Query for server-state caching and synchronization where established.
- Use Zustand for client state where justified.
- Avoid unnecessary duplicated sources of truth.
- Handle asynchronous operations, errors, and stale data appropriately.
- Preserve the separation between production Supabase functionality and local Prisma/SQLite development unless a task explicitly requires an architectural change.

### 9. Authentication and Authorization

- Use the existing Supabase Auth integration.
- Verify authentication on the server for protected operations.
- Enforce authorization independently of frontend visibility.
- Protect administrative pages, API routes, server actions, and database operations as applicable.
- Apply least-privilege access principles.
- Validate user identity and permissions before performing privileged mutations.
- Follow existing session-management and middleware conventions.
- Never assume that hiding an administrative button makes the underlying operation secure.
- Review Row Level Security (RLS) policies when database access or authorization changes.

### 10. Validation and Error Handling

- Use existing Zod schemas for runtime validation where appropriate.
- Validate user-controlled input at server-side trust boundaries.
- Return safe, predictable errors from API routes and server actions.
- Do not expose internal stack traces, secrets, or sensitive database details to users.
- Distinguish validation failures, authentication failures, authorization failures, and unexpected server errors.
- Avoid silently swallowing exceptions.
- Log operationally useful information without exposing sensitive data.
- Keep frontend error messages understandable and backend diagnostics actionable.

---

## Skill Discovery and Orchestration

### 1. Discover Relevant Skills

For tasks that benefit from specialized workflows:

1. Inspect available project-level Skills under `.claude/skills/`.
2. Inspect relevant user-level Skills when available.
3. Identify Skills applicable to the task.
4. Read the selected Skill instructions before relying on them.
5. Apply the relevant instructions throughout implementation and verification.

Use only Skills that actually exist and are available in the current Claude Code environment.

Do not invent Skill names, assume every Skill is automatically loaded, or claim a Skill was used without actually invoking or loading it.

### 2. Use Multiple Skills Together

A single task may require several Skills.

For example, implementing an administrative feature may require:

- Frontend design and accessibility.
- Next.js and React implementation.
- Supabase data access.
- Authentication and authorization.
- Zod validation.
- Automated testing.
- Security review.

Combine relevant Skills when their instructions are compatible.

When instructions conflict:

1. Identify the conflicting requirements.
2. Follow applicable higher-priority instructions.
3. Preserve security and data integrity.
4. Follow the repository's established architecture.
5. Explain any unresolved trade-offs.

Do not invoke unrelated Skills merely to maximize the number of Skills used.

### 3. Skill and Agent Responsibilities

Skills provide reusable instructions and workflows. Agents provide specialized execution contexts.

Use Skills to guide how work should be performed and agents to delegate work when separate execution is useful.

Do not assume that creating a Skill automatically launches an agent or that defining an agent automatically invokes every potentially relevant Skill.

---

## Agent Orchestration

### 1. Main Agent Responsibilities

The main Claude Code session acts as the coordinator for complex tasks.

It should:

1. Inspect the repository and applicable instructions.
2. Clarify requirements when essential details are missing.
3. Create a plan with clear acceptance criteria.
4. Identify relevant Skills and agents.
5. Define dependencies and file ownership.
6. Delegate independent work when beneficial.
7. Monitor task completion and integration risks.
8. Review the combined implementation.
9. Run appropriate verification.
10. Report actual results and unresolved issues.

The coordinator remains responsible for integration and the final result.

### 2. Frontend Developer Agent

Primary responsibilities:

- Next.js App Router pages.
- React components.
- Tailwind CSS and shadcn/ui.
- Responsive design.
- Accessibility.
- Framer Motion animations.
- Frontend loading, error, empty, and success states.
- Integration with agreed API contracts and existing feature modules.

Expected behavior:

- Inspect existing components before creating new ones.
- Reuse shared UI components and design tokens.
- Respect Server Component and Client Component boundaries.
- Avoid implementing security-critical authorization solely in the frontend.
- Coordinate shared interfaces with the backend developer.

### 3. Backend Developer Agent

Primary responsibilities:

- Server actions.
- API route handlers.
- Supabase queries and mutations.
- Database integration.
- Zod validation.
- Authentication and authorization enforcement.
- Error handling.
- Type-safe data contracts.

Expected behavior:

- Inspect existing Supabase wrappers and feature modules.
- Reuse existing database and service-access patterns.
- Validate untrusted input at server-side boundaries.
- Enforce authorization before privileged operations.
- Preserve RLS and least-privilege requirements.
- Keep privileged credentials server-side.
- Coordinate request and response contracts with the frontend developer.

### 4. Code Reviewer Agent

Primary responsibilities:

- Security review.
- Architectural consistency.
- Regression detection.
- Type safety.
- Error-handling quality.
- Maintainability.
- Identification of unnecessary changes.
- Verification of requirements and acceptance criteria.

Expected behavior:

- Inspect actual changes and relevant surrounding code.
- Prioritize concrete findings over stylistic preferences.
- Identify affected files and explain the impact of each finding.
- Distinguish confirmed defects from potential risks.
- Recommend targeted corrections.
- Avoid modifying implementation files unless explicitly assigned to fix identified issues.

### 5. Testing Agent

Primary responsibilities:

- Identify appropriate test coverage.
- Write or update tests.
- Execute available automated tests.
- Validate API contracts.
- Test failure cases and authorization boundaries.
- Verify regression-sensitive behavior.
- Report reproducible failures.

Expected behavior:

- Inspect available test frameworks and existing conventions.
- Reuse established testing utilities.
- Avoid modifying production code solely to make tests pass without understanding the failure.
- Never report tests as passing unless they were actually executed successfully.
- Clearly distinguish tests that were written from tests that were executed.

### 6. Agent Selection

Do not launch every agent for every task.

Choose agents according to the work:

- Small, isolated UI change: main session or frontend agent.
- API-only change: backend agent and relevant tests.
- Cross-stack feature: frontend and backend agents.
- Authentication or data-access changes: backend agent and independent security review.
- Complex feature: coordinator, relevant implementation agents, reviewer, and testing agent.

Use the smallest effective set of agents.

---

## Parallel Execution and Coordination

### 1. Identify Dependencies First

Before launching parallel work, classify tasks as:

- **Independent:** Can be executed concurrently without conflicting edits or dependencies.
- **Contract-dependent:** Can proceed concurrently after shared interfaces and assumptions are established.
- **Sequential:** Requires the output of an earlier task.

Examples:

- Frontend and backend implementation can run concurrently after the API contract is agreed.
- Independent code review can run while implementation proceeds, provided the reviewer understands that the code may still change.
- Database schema changes must be coordinated with dependent query and mutation implementations.
- Final integration testing must use the integrated implementation.

### 2. Establish Shared Contracts

For cross-stack features, define the following before concurrent implementation:

- Feature requirements and acceptance criteria.
- API endpoints and HTTP methods, where applicable.
- Request and response schemas.
- Validation and error formats.
- Authentication and authorization requirements.
- Relevant database entities and relationships.
- Expected loading, empty, and error states.

Use existing project types and schemas where possible rather than introducing competing definitions.

### 3. File Ownership

- Assign clear file ownership to each implementation agent.
- Avoid assigning multiple agents to rewrite the same files simultaneously.
- Shared files, including routing configuration, database schemas, shared types, and package configuration, require explicit coordination.
- Have one designated owner integrate conflicting changes.
- Inspect Git status and diffs before accepting changes.
- Never overwrite unrelated user modifications.

### 4. Launch and Completion

When parallel execution is supported:

1. Launch independent agent tasks through the available Claude Code agent mechanism.
2. Track each task and its dependencies.
3. Allow dependent tasks to begin only when their required contracts or prerequisites are available.
4. Collect results from all required agents.
5. Resolve conflicting assumptions and implementation differences.
6. Integrate the changes.
7. Run tests, linting, type checks, and builds as appropriate.

A prompt that merely lists multiple agents does not guarantee parallel execution. The coordinator must actually launch the independent tasks concurrently using the available tools.

Do not declare the overall task complete while required agent work or integration checks remain unresolved.

---

## Implementation Workflow

For nontrivial tasks, follow these phases.

### Phase 1: Inspect

- Read the applicable project instructions.
- Inspect relevant files and existing implementations.
- Review Git status.
- Identify existing Skills and agent definitions relevant to the task.
- Determine available scripts and test tools.
- Identify risks and dependencies.

### Phase 2: Plan

- Define the required behavior.
- Establish acceptance criteria.
- Identify affected files and modules.
- Identify database or API contract changes.
- Select appropriate Skills and agents.
- Determine which work can run in parallel.
- Identify tests needed to verify the result.

### Phase 3: Implement

- Follow established architecture and coding conventions.
- Use relevant Skills and specialized agents.
- Make focused changes.
- Preserve existing behavior unless explicitly changing it.
- Validate inputs and enforce authorization.
- Avoid unrelated refactoring and dependency changes.

### Phase 4: Integrate

- Review the output of each agent.
- Check API and type compatibility.
- Resolve conflicting file changes.
- Inspect the complete diff.
- Verify that required features remain intact.

### Phase 5: Verify

Run the applicable checks supported by the repository:

- Unit tests.
- Integration tests.
- End-to-end tests, when configured.
- TypeScript checks.
- Linting.
- Production build.
- Security-sensitive authorization checks.

Use the actual scripts and tools defined by the repository. Do not invent commands or claim that unexecuted checks succeeded.

### Phase 6: Report

Provide a concise summary containing:

1. What was implemented.
2. Which files were changed.
3. Which Skills and agents were actually used, when relevant.
4. Which verification commands were executed.
5. Actual test, lint, type-check, and build results.
6. Known limitations or unresolved issues.
7. Any required manual setup or follow-up.

---

## Testing and Quality Assurance

- Test the behavior changed by the task.
- Add regression tests for important bug fixes.
- Cover validation failures and authorization boundaries for security-sensitive operations.
- Check loading, empty, success, and error states for relevant UI changes.
- Verify type safety and integration contracts.
- Prefer targeted tests during development and broader checks before finalizing complex changes.
- Do not modify unrelated tests or suppress legitimate failures to create a passing result.
- If a check cannot run because of missing dependencies, credentials, configuration, or infrastructure, report the reason.

### Git and Change Safety

- Inspect `git status` before making changes.
- Do not discard, reset, or overwrite unrelated local modifications.
- Do not run destructive Git commands without explicit authorization.
- Do not create commits, push branches, or deploy changes unless requested or otherwise explicitly authorized.
- Keep changes scoped to the task.
- Review the final diff for accidental deletions, generated artifacts, secrets, and unrelated modifications.

## Final Completion Criteria

A task is complete only when:

- The requested behavior has been implemented.
- Existing functionality has been preserved where required.
- Relevant Skills and agent instructions have been applied when applicable.
- Parallel work has been integrated.
- Required verification has been executed or its limitations explicitly reported.
- Security-sensitive behavior has been reviewed appropriately.
- Actual results and remaining issues have been communicated clearly.

Never claim that implementation, testing, security review, or deployment succeeded unless the corresponding work was actually performed and its outcome verified.