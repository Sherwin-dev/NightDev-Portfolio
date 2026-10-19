# Engineering Task Plan: Hero Animation Refactor, CI Workflow, and UI Variant Simplification

## Phase A: Inspect and Plan

### Current Baseline Results
- **Tests**: 3 test files, 14 tests passing (`bun run test`)
- **Lint**: Passed with only minor warnings about unused eslint-disable directives in coverage files
- **TypeScript**: Checking in progress (no errors reported yet)
- **Build**: Checking in progress (no errors reported yet)

### Files Likely to Change

#### Task 1 — Simplify HeroSection animations
- **Primary file**: `src/components/sections/HeroSection.tsx`
- **Potential test updates**: May need to update or add tests if animation behavior changes significantly
- **Risks**: 
  - Losing visual appeal or intended brand impact
  - Breaking responsive behavior or reduced-motion support
  - Incorrect cleanup of animation loops/event listeners
- **Dependencies**: 
  - framer-motion (already used in file)
  - lucide-react (already used in file)
  - No new dependencies needed

#### Task 2 — Add GitHub Actions CI
- **Current state**: Existing `.github/workflows/dockerhub.yml` provides CI and Docker publishing
- **Analysis**: The existing workflow already includes:
  - Bun setup with `oven-sh/setup-bun@v2`
  - Dependency installation with `bun install --frozen-lockfile`
  - Lint checking with `bun run lint`
  - Production build with `bun run build`
- **Missing elements**:
  - Test execution (`bun run test`)
  - Explicit TypeScript type checking (though build includes type checking)
- **Likely changes**:
  - Option A: Enhance existing dockerhub.yml to add test and explicit type check steps
  - Option B: Create new `.github/workflows/ci.yml` focused solely on CI
- **Risks**: Minimal - only adding validation steps
- **Dependencies**: None new (uses existing scripts)

#### Task 3 — Audit and simplify UI component variants
- **Target directory**: `src/components/ui/` (40+ component files)
- **Components to audit**: All UI components including button, input, select, dialog, card, badge, etc.
- **Risks**:
  - Removing variants that are actually used elsewhere in the codebase
  - Breaking component APIs or customization options
  - Introducing inconsistencies in styling or behavior
- **Dependencies**: 
  - Need to verify usage of components across the repository before removing/changing variants
  - May need to update usage sites if variant APIs change
- **Process**:
  1. Audit each component for excessive variants/complicated logic
  2. Search for usage of each variant across the codebase
  3. Only simplify where justified and safe
  4. Add regression tests for changed behavior where practical

### Agent Assignments and File Ownership

#### Task 1 — Simplify HeroSection animations
- **Agent**: `frontend-developer` with `frontend-design` Skill
- **File ownership**: `frontend-developer` (sole owner of `src/components/sections/HeroSection.tsx`)
- **Deliverables**: Simplified HeroSection implementation preserving visual impact while reducing complexity

#### Task 2 — Add GitHub Actions CI
- **Agent**: `backend-developer` (appropriate for DevOps/infrastructure tasks)
- **File ownership**: `backend-developer` (for workflow files in `.github/workflows/`)
- **Note**: This task is straightforward enough that we could handle it directly, but assigning to backend-developer follows the pattern
- **Deliverables**: CI workflow that validates changes via test, lint, type check, and build

#### Task 3 — Audit and simplify UI component variants
- **Implementation**: `frontend-developer` 
- **Review**: `code-reviewer` (for independent review of changes)
- **File ownership**: 
  - `frontend-developer` (for changes to `src/components/ui/` files)
  - `code-reviewer` (review only, no file ownership)
- **Deliverables**: Simplified UI component variants with preserved APIs and validated usage

### Dependencies and Integration Points
- No new npm/Bun dependencies required for any task
- All tasks use existing development dependencies and scripts
- Tasks are largely independent:
  - Task 1 affects only HeroSection component
  - Task 2 affects only GitHub workflows
  - Task 3 affects UI component library
- Integration points to verify:
  - Task 1: Ensure HeroSection still works in layout/pages
  - Task 3: Ensure simplified UI components work wherever used

### Execution Readiness Check
✅ Working tree is safe (no destructive/production-sensitive operations required)  
✅ No material architectural conflicts identified  
✅ No need to change authentication, database security, deployment behavior, or production configuration  
✅ Proceed with Phase B implementation  

---