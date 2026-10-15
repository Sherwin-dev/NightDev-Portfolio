# Admin Dashboard Optimization and Refactoring Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Optimize the admin dashboard for better performance, maintainability, and user experience by refactoring the dashboard component, improving data fetching patterns, and enhancing the UI feedback.

**Architecture:** Refactor the existing AdminDashboard component to separate concerns, move utility functions to appropriate locations, optimize data fetching with potential batching/caching, and improve loading/error states. Maintain existing functionality while improving code organization.

**Tech Stack:** Next.js 16, TypeScript, React, Tailwind CSS, Supabase

**Spec:** C:\Users\sherw\HDD Backup\Nightdev\NightDev-Portfolio\src\app\(admin)\admin\dashboard-content.tsx (existing component to be optimized)

## Global Constraints

- Must maintain all existing dashboard functionality
- Must not break any existing admin dashboard features
- Should follow existing code patterns in the codebase
- Must be compatible with Next.js 16 App Router
- Should maintain responsive design
- All changes must be TypeScript safe

## Review Focus

- Database connection error states are not clearly visible to users
- Dashboard makes multiple individual requests that could potentially be optimized
- Loading states are not shown during initial data fetch
- Utility function (checkDatabaseHealth) is co-located with component logic
- Hardcoded dashboard cards configuration lacks flexibility

---

## Task 1: Move Database Health Check to Utilities

**Files:**
- Create: `src/lib/supabase/health.ts`
- Modify: `src/app\(admin)\admin\dashboard-content.tsx`

**Interfaces:**
- Consumes: None (creating new utility)
- Produces: `checkDatabaseHealth()` function that returns Promise<{status: 'connected' | 'error', message: string}>

- [ ] **Step 1: Write the failing test**

```typescript
import { checkDatabaseHealth } from '@/lib/supabase/health'

describe('checkDatabaseHealth', () => {
  it('should return connected status when database is healthy', async () => {
    const result = await checkDatabaseHealth()
    expect(result.status).toBe('connected')
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `vitest src/lib/supabase/health.test.ts`
Expected: FAIL with "file not found" or "function not defined"

- [ ] **Step 3: Write minimal implementation**

```typescript
// src/lib/supabase/health.ts
import { createAdminClient } from './admin'

export async function checkDatabaseHealth() {
  try {
    const supabase = createAdminClient()
    const { data, error } = await supabase.from('projects').select('count', { count: 'exact', head: true }).limit(1)
    if (error) throw error
    return { status: 'connected' as const, message: 'Database is healthy' }
  } catch (err) {
    console.error('Database health check failed:', err)
    return { status: 'error' as const, message: 'Database connection failed' }
  }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `vitest src/lib/supabase/health.test.ts`
Expected: PASS

- [ ] **Step 5: Update dashboard component to use new utility**

```typescript
// src/app\(admin)\admin\dashboard-content.tsx
- import { createAdminClient } from '@/lib/supabase/admin'
+ import { checkDatabaseHealth } from '@/lib/supabase/health'
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/supabase/health.ts src/app\(admin)\admin\dashboard-content.tsx
git commit -m "feat: move database health check to utilities"
```

## Task 2: Create Dashboard Data Fetching Hook

**Files:**
- Create: `src/lib/dashboard/useDashboardData.ts`
- Modify: `src/app\(admin)\admin\dashboard-content.tsx`

**Interfaces:**
- Consumes: None (creating new hook)
- Produces: `useDashboardData()` hook that returns { projects, posts, skills, experiences, resumeSections, testimonials, messages, databaseHealth, isLoading, error }

- [ ] **Step 1: Write the failing test**

```typescript
import { useDashboardData } from '@/lib/dashboard/useDashboardData'

describe('useDashboardData', () => {
  it('should fetch dashboard data', async () => {
    const { result } = renderHook(() => useDashboardData())
    expect(result.current.isLoading).toBe(true)
    // Additional assertions would go here
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `vitest src/lib/dashboard/useDashboardData.test.ts`
Expected: FAIL with "file not found" or "hook not defined"

- [ ] **Step 3: Write minimal implementation**

```typescript
// src/lib/dashboard/useDashboardData.ts
import { useState, useEffect } from 'react'
import { getAllProjectsAdmin } from '@/features/projects/queries'
import { getAllPostsAdmin } from '@/features/blog/queries'
import { getSkills } from '@/features/skills/queries'
import { getExperiences } from '@/features/experience/queries'
import { getResumeSections } from '@/features/resume/queries'
import { getAllTestimonialsAdmin } from '@/features/testimonials/queries'
import { getContactMessages } from '@/features/contact/actions'
import { checkDatabaseHealth } from '@/lib/supabase/health'

export function useDashboardData() {
  const [data, setData] = useState({
    projects: [],
    posts: [],
    skills: [],
    experiences: [],
    resumeSections: [],
    testimonials: [],
    messages: [],
    databaseHealth: { status: 'loading' as const, message: '' },
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [
          projects,
          posts,
          skills,
          experiences,
          resumeSections,
          testimonials,
          messages,
          databaseHealth
        ] = await Promise.all([
          getAllProjectsAdmin(),
          getAllPostsAdmin(),
          getSkills(),
          getExperiences(),
          getResumeSections(),
          getAllTestimonialsAdmin(),
          getContactMessages(),
          checkDatabaseHealth()
        ])

        if (isMounted) {
          setData({
            projects,
            posts,
            skills,
            experiences,
            resumeSections,
            testimonials,
            messages,
            databaseHealth
          })
          setIsLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown error')
          setIsLoading(false)
        }
      }
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [])

  return { ...data, isLoading, error }
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `vitest src/lib/dashboard/useDashboardData.test.ts`
Expected: PASS

- [ ] **Step 5: Update dashboard component to use new hook**

```typescript
// src/app\(admin)\admin\dashboard-content.tsx
- import { getAllProjectsAdmin } from '@/features/projects/queries'
- import { getAllPostsAdmin } from '@/features/blog/queries'
- import { getSkills } from '@/features/skills/queries'
- import { getExperiences } from '@/features/experience/queries'
- import { getResumeSections } from '@/features/resume/queries'
- import { getAllTestimonialsAdmin } from '@/features/testimonials/queries'
- import { getContactMessages } from '@/features/contact/actions'
- import { checkDatabaseHealth } from '@/lib/supabase/health'
+ import { useDashboardData } from '@/lib/dashboard/useDashboardData'

export async function AdminDashboard() {
-   const [projects, posts, skills, experiences, resumeSections, testimonials, messages, databaseHealth] = await Promise.all([
-     getAllProjectsAdmin(),
-     getAllPostsAdmin(),
-     getSkills(),
-     getExperiences(),
-     getResumeSections(),
-     getAllTestimonialsAdmin(),
-     getContactMessages(),
-     checkDatabaseHealth(),
-   ])
-
-   const counts: Record<string, number> = {
-     projects: projects.length,
-     posts: posts.length,
-     skills: skills.length,
-     experiences: experiences.length,
-     resume: resumeSections.length,
-     testimonials: testimonials.length,
-     messages: messages.length,
-   }
-
-   const unreadMessages = messages.filter((m: { read: boolean }) => !m.read).length
+   const { projects, posts, skills, experiences, resumeSections, testimonials, messages, databaseHealth, isLoading, error } = useDashboardData()
+
+   if (isLoading) {
+     // Return loading state (to be implemented in next task)
+     return <div>Loading...</div>
+   }
+
+   if (error) {
+     // Return error state (to be implemented in next task)
+     return <div>Error: {error}</div>
+   }
+
+   const counts: Record<string, number> = {
+     projects: projects.length,
+     posts: posts.length,
+     skills: skills.length,
+     experiences: experiences.length,
+     resume: resumeSections.length,
+     testimonials: testimonials.length,
+     messages: messages.length,
+   }
+
+   const unreadMessages = messages.filter((m: { read: boolean }) => !m.read).length
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/dashboard/useDashboardData.ts src/app\(admin)\admin\dashboard-content.tsx
git commit -m "feat: create dashboard data fetching hook"
```

## Task 3: Improve Loading and Error States

**Files:**
- Modify: `src/app\(admin)\admin\dashboard-content.tsx`

**Interfaces:**
- Consumes: isLoading, error from useDashboardData hook
- Produces: Enhanced UI with loading skeletons and error messaging

- [ ] **Step 1: Write the failing test**

```typescript
import { AdminDashboard } from '@/app/(admin)/admin/dashboard-content.tsx'

describe('AdminDashboard', () => {
  it('shows loading state when data is fetching', () => {
    // Render component with mock hook returning isLoading: true
    expect(screen.getByText(/loading/i)).toBeInTheDocument()
  })
  
  it('shows error state when data fetch fails', () => {
    // Render component with mock hook returning error message
    expect(screen.getByText(/error/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `vitest src/app/(admin)/admin/dashboard-content.test.tsx`
Expected: FAIL with "test file not found" or "component not handling loading/error states"

- [ ] **Step 3: Write minimal implementation**

```typescript
// src/app\(admin)\admin\dashboard-content.tsx
export async function AdminDashboard() {
  const { projects, posts, skills, experiences, resumeSections, testimonials, messages, databaseHealth, isLoading, error } = useDashboardData()

  if (isLoading) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Overview of your portfolio content and activity.
            </p>
          </div>
        </div>
        
        {/* Loading Skeletons */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 p-5 animate-pulse">
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm border border-border/30 shadow-sm">
                  {/* Icon placeholder */}
                </div>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Loading</p>
                <p className="text-3xl font-bold tracking-tight">--</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Overview of your portfolio content and activity.
            </p>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
          <h3 className="text-sm font-semibold mb-3">Error Loading Dashboard</h3>
          <p className="text-sm text-destructive">{error}</p>
        </div>
      </div>
    )
  }

  // Rest of the original component remains unchanged...
  // (existing JSX for displaying dashboard cards and quick info)
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `vitest src/app/(admin)/admin/dashboard-content.test.tsx`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app\(admin)\admin\dashboard-content.tsx
git commit -m "feat: add loading and error states to dashboard"
```

## Task 4: Make Dashboard Cards Configurable

**Files:**
- Create: `src/lib/dashboard/dashboardConfig.ts`
- Modify: `src/app\(admin)\admin\dashboard-content.tsx`

**Interfaces:**
- Consumes: None (creating new config)
- Produces: DashboardCardConfig type and dashboardCardsConfig array

- [ ] **Step 1: Write the failing test**

```typescript
import { dashboardCardsConfig } from '@/lib/dashboard/dashboardConfig'

describe('dashboardCardsConfig', () => {
  it('should contain configuration for all dashboard sections', () => {
    expect(dashboardCardsConfig).toHaveLength(8)
    expect(dashboardCardsConfig[0]).toMatchObject({
      label: 'Projects',
      href: '/admin/projects',
      getKey: 'projects'
    })
  })
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `vitest src/lib/dashboard/dashboardConfig.test.ts`
Expected: FAIL with "file not found" or "config not defined"

- [ ] **Step 3: Write minimal implementation**

```typescript
// src/lib/dashboard/dashboardConfig.ts
import { FolderKanban, FileText, Wrench, Briefcase, MessageSquare, FileUser, Quote, Database } from 'lucide-react'

export type DashboardCardConfig = {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  getKey: keyof NonNullable<ReturnType<typeof useDashboardData>>
  color: string
  iconColor: string
  borderHover: string
}

export const dashboardCardsConfig: DashboardCardConfig[] = [
  {
    label: 'Projects',
    href: '/admin/projects',
    icon: FolderKanban,
    getKey: 'projects',
    color: 'from-blue-500/20 to-blue-600/5',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/30'
  },
  {
    label: 'Blog Posts',
    href: '/admin/blog',
    icon: FileText,
    getKey: 'posts',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/30'
  },
  {
    label: 'Skills',
    href: '/admin/skills',
    icon: Wrench,
    getKey: 'skills',
    color: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/30'
  },
  {
    label: 'Experience',
    href: '/admin/experience',
    icon: Briefcase,
    getKey: 'experiences',
    color: 'from-purple-500/20 to-purple-600/5',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/30'
  },
  {
    label: 'Resume',
    href: '/admin/resume',
    icon: FileUser,
    getKey: 'resume',
    color: 'from-cyan-500/20 to-cyan-600/5',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/30'
  },
  {
    label: 'Testimonials',
    href: '/admin/testimonials',
    icon: Quote,
    getKey: 'testimonials',
    color: 'from-pink-500/20 to-pink-600/5',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/30'
  },
  {
    label: 'Messages',
    href: '/admin/messages',
    icon: MessageSquare,
    getKey: 'messages',
    color: 'from-rose-500/20 to-rose-600/5',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/30'
  },
  {
    label: 'Database',
    href: '#',
    icon: Database,
    getKey: 'database',
    color: 'from-green-500/20 to-green-600/5',
    iconColor: 'text-green-400',
    borderHover: 'hover:border-green-500/30'
  }
]
```

- [ ] **Step 4: Run test to verify it passes**

Run: `vitest src/lib/dashboard/dashboardConfig.test.ts`
Expected: PASS

- [ ] **Step 5: Update dashboard component to use config**

```typescript
// src/app\(admin)\admin\dashboard-content.tsx
- import { FolderKanban, FileText, Wrench, Briefcase, MessageSquare, FileUser, Quote, Database } from 'lucide-react'
+ import { dashboardCardsConfig } from '@/lib/dashboard/dashboardConfig'
 
- const dashboardCards = [
-   { label: 'Projects', href: '/admin/projects', icon: FolderKanban, getKey: 'projects', color: 'from-blue-500/20 to-blue-600/5', iconColor: 'text-blue-400', borderHover: 'hover:border-blue-500/30' },
-   { label: 'Blog Posts', href: '/admin/blog', icon: FileText, getKey: 'posts', color: 'from-emerald-500/20 to-emerald-600/5', iconColor: 'text-emerald-400', borderHover: 'hover:border-emerald-500/30' },
-   { label: 'Skills', href: '/admin/skills', icon: Wrench, getKey: 'skills', color: 'from-amber-500/20 to-amber-600/5', iconColor: 'text-amber-400', borderHover: 'hover:border-amber-500/30' },
-   { label: 'Experience', href: '/admin/experience', icon: Briefcase, getKey: 'experiences', color: 'from-purple-500/20 to-purple-600/5', iconColor: 'text-purple-400', borderHover: 'hover:border-purple-500/30' },
-   { label: 'Resume', href: '/admin/resume', icon: FileUser, getKey: 'resume', color: 'from-cyan-500/20 to-cyan-600/5', iconColor: 'text-cyan-400', borderHover: 'hover:border-cyan-500/30' },
-   { label: 'Testimonials', href: '/admin/testimonials', icon: Quote, getKey: 'testimonials', color: 'from-pink-500/20 to-pink-600/5', iconColor: 'text-pink-400', borderHover: 'hover:border-pink-500/30' },
-   { label: 'Messages', href: '/admin/messages', icon: MessageSquare, getKey: 'messages', color: 'from-rose-500/20 to-rose-600/5', iconColor: 'text-rose-400', borderHover: 'hover:border-rose-500/30' },
-   { label: 'Database', href: '#', icon: Database, getKey: 'database', color: 'from-green-500/20 to-green-600/5', iconColor: 'text-green-400', borderHover: 'hover:border-green-500/30' },
- ]
+ const dashboardCards = dashboardCardsConfig
```

- [ ] **Step 6: Commit**

```bash
git add src/lib/dashboard/dashboardConfig.ts src/app\(admin)\admin\dashboard-content.tsx
git commit -m "feat: make dashboard cards configurable"
```

## Task 5: Final Cleanup and Lint Fixes

**Files:**
- Modify: Various files to fix linting warnings

**Interfaces:**
- Consumes: Existing codebase
- Produces: Lint-clean codebase

- [ ] **Step 1: Identify linting issues**

Run: `bun run lint`
Expected: List of unused eslint-disable directives and other warnings

- [ ] **Step 2: Fix unused eslint-disable directives**

For each file with unused eslint-disable directive:
- Remove the disable directive if no linting errors exist
- Or fix the underlying issue and keep the directive if needed

- [ ] **Step 3: Run lint to verify fixes**

Run: `bun run lint --fix`
Expected: No errors or warnings

- [ ] **Step 4: Commit**

```bash
git add -u
git commit -m "chore: fix linting warnings"
```

---