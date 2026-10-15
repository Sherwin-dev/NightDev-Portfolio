# Graph Report - NightDev-Portfolio  (2026-10-15)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1052 nodes · 2905 edges · 63 communities (55 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.85)
- Token cost: 282,718 input · 10,453 output

## Graph Freshness
- Built from commit: `46b4b661`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Dependency Management
- UI Components
- Admin Pages
- Admin Authentication
- Form Components
- Resume Skills Forms
- Sidebar UI
- Package Configuration
- Form Validation
- Toast Notifications
- WebSocket Features
- Public Pages
- Resume Sections
- Admin Dashboard
- Project Management
- Global Layout
- TypeScript Configuration
- Auth API Routes
- Component Configuration
- Menubar Component
- Context Menu Component
- Dropdown Menu Component
- Layout Constants
- UI Toggles
- Carousel Component
- Build Scripts
- UI Icons
- Message Actions
- Dialog and Sheet
- Form Labels
- Blog Edit Form
- Blog Pages
- Chart Component
- Drawer Component
- Motion Utilities
- WebSocket Server
- Next Supabase Config
- Testimonials Motion
- Navigation Menu
- Validation Schemas
- Experience Types
- Dev Dependencies
- Blog Cards
- Project Cards
- Skill Cards
- Resume Delete
- Pagination Component
- New Project
- Hero Section
- ESLint Configuration
- Accordion Component
- Popover Component
- Collapsible Component
- Hover Card Component
- Markdown Components
- Resizable Panels
- Prisma Client
- Supabase Migration
- Tailwind Config
- Aspect Ratio
- Checkbox Component
- PostCSS Configuration
- Contact Message

## God Nodes (most connected - your core abstractions)
1. `cn()` - 238 edges
2. `Button()` - 85 edges
3. `react` - 70 edges
4. `next` - 69 edges
5. `lucide-react` - 56 edges
6. `createAdminClient()` - 45 edges
7. `Input()` - 37 edges
8. `Label()` - 28 edges
9. `createServerSupabaseClient()` - 26 edges
10. `Textarea()` - 24 edges

## Surprising Connections (you probably didn't know these)
- `SocketDemo()` --calls--> `Button()`  [EXTRACTED]
  examples/websocket/frontend.tsx → src/components/ui/button.tsx
- `SocketDemo()` --calls--> `Card()`  [EXTRACTED]
  examples/websocket/frontend.tsx → src/components/ui/card.tsx
- `SocketDemo()` --calls--> `Input()`  [EXTRACTED]
  examples/websocket/frontend.tsx → src/components/ui/input.tsx
- `AccordionContent()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionItem()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (63 total, 8 thin omitted)

### Community 0 - "Dependency Management"
Cohesion: 0.03
Nodes (72): dependencies, class-variance-authority, clsx, cmdk, date-fns, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities (+64 more)

### Community 1 - "UI Components"
Cohesion: 0.06
Nodes (39): cmdk, input-otp, @radix-ui/react-avatar, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-tabs (+31 more)

### Community 2 - "Admin Pages"
Cohesion: 0.15
Nodes (34): DeletePostButton(), handleDelete(), AdminBlogPage(), dynamic, DeleteExperienceButton(), handleDelete(), AdminExperiencePage(), dynamic (+26 more)

### Community 3 - "Admin Authentication"
Cohesion: 0.10
Nodes (31): @radix-ui/react-alert-dialog, react-day-picker, AdminLoginPage(), handleLogin(), AdminSidebar(), handleLogout(), AdminLayout(), dynamic (+23 more)

### Community 4 - "Form Components"
Cohesion: 0.17
Nodes (26): react, AddExperienceForm(), handleSubmit(), resetForm(), EditExperienceDialog(), handleSubmit(), AddTestimonialForm(), handleSubmit() (+18 more)

### Community 5 - "Resume Skills Forms"
Cohesion: 0.15
Nodes (29): AddResumeSectionForm(), handleSubmit(), SECTION_TYPES, EditResumeSectionDialog(), handleSubmit(), SECTION_TYPES, AddSkillForm(), handleSubmit() (+21 more)

### Community 6 - "Sidebar UI"
Cohesion: 0.08
Nodes (32): SidebarContent(), SidebarContext, SidebarContextProps, SidebarFooter(), SidebarGroup(), SidebarGroupAction(), SidebarGroupContent(), SidebarGroupLabel() (+24 more)

### Community 7 - "Package Configuration"
Cohesion: 0.06
Nodes (33): name, private, version, bun-types, clsx, date-fns, @dnd-kit/core, @dnd-kit/sortable (+25 more)

### Community 8 - "Form Validation"
Cohesion: 0.17
Nodes (18): @hookform/resolvers, react-hook-form, sonner, EditProjectForm(), onSubmit(), Card(), ImageGallery(), ImageGalleryProps (+10 more)

### Community 9 - "Toast Notifications"
Cohesion: 0.12
Nodes (25): @radix-ui/react-toast, Toast, ToastAction, ToastActionElement, ToastClose, ToastDescription, ToastProps, ToastTitle (+17 more)

### Community 10 - "WebSocket Features"
Cohesion: 0.12
Nodes (18): Message, SocketDemo(), User, @radix-ui/react-scroll-area, NewBlogPostPage(), onSubmit(), AdminMessagesPage(), dynamic (+10 more)

### Community 11 - "Public Pages"
Cohesion: 0.17
Nodes (23): AboutPage(), BlogPage(), dynamic, metadata, ContactPage(), metadata, dynamic, HomePage() (+15 more)

### Community 12 - "Resume Sections"
Cohesion: 0.13
Nodes (20): @radix-ui/react-separator, EditResumeSectionDialogProps, dynamic, formatDateRange(), metadata, parseResumeData(), ResumePage(), Separator() (+12 more)

### Community 13 - "Admin Dashboard"
Cohesion: 0.15
Nodes (17): AdminDashboard(), dashboardCards, AdminPage(), dynamic, GET(), dynamic, highlights, metadata (+9 more)

### Community 14 - "Project Management"
Cohesion: 0.15
Nodes (19): dynamic, EditProjectPage(), EditProjectPageProps, dynamic, metadata, ProjectsPage(), dynamic, generateMetadata() (+11 more)

### Community 15 - "Global Layout"
Cohesion: 0.15
Nodes (13): next-themes, AdminLoading(), inter, jetbrainsMono, JsonLd(), metadata, RootLayout(), RootLoading() (+5 more)

### Community 16 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 17 - "Auth API Routes"
Cohesion: 0.26
Nodes (10): GET(), GET(), POST(), GET(), ALLOWED_TYPES, POST(), loginWithEmail(), logout() (+2 more)

### Community 18 - "Component Configuration"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 19 - "Menubar Component"
Cohesion: 0.12
Nodes (13): @radix-ui/react-menubar, Menubar(), MenubarCheckboxItem(), MenubarContent(), MenubarItem(), MenubarLabel(), MenubarPortal(), MenubarRadioItem() (+5 more)

### Community 20 - "Context Menu Component"
Cohesion: 0.12
Nodes (10): @radix-ui/react-context-menu, ContextMenuCheckboxItem(), ContextMenuContent(), ContextMenuItem(), ContextMenuLabel(), ContextMenuRadioItem(), ContextMenuSeparator(), ContextMenuShortcut() (+2 more)

### Community 21 - "Dropdown Menu Component"
Cohesion: 0.12
Nodes (10): @radix-ui/react-dropdown-menu, DropdownMenuCheckboxItem(), DropdownMenuContent(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuRadioItem(), DropdownMenuSeparator(), DropdownMenuShortcut() (+2 more)

### Community 22 - "Layout Constants"
Cohesion: 0.22
Nodes (7): PublicLayout(), Footer(), Navbar(), ADMIN_NAV_LINKS, NAV_LINKS, SITE_CONFIG, SKILL_CATEGORIES

### Community 23 - "UI Toggles"
Cohesion: 0.18
Nodes (12): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, Alert(), AlertDescription(), AlertTitle(), alertVariants, ToggleGroup() (+4 more)

### Community 24 - "Carousel Component"
Cohesion: 0.17
Nodes (14): embla-carousel-react, Carousel(), CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext() (+6 more)

### Community 25 - "Build Scripts"
Cohesion: 0.14
Nodes (14): scripts, build, build:win, db:generate, db:migrate, db:push, db:reset, dev (+6 more)

### Community 26 - "UI Icons"
Cohesion: 0.27
Nodes (9): lucide-react, DeleteProjectButton(), handleDelete(), DeleteTestimonialButton(), handleDelete(), NotFound(), Button(), deleteProject() (+1 more)

### Community 27 - "Message Actions"
Cohesion: 0.23
Nodes (9): DeleteMessageButton(), handleDelete(), MarkReadButton(), handleMarkRead(), POST(), deleteMessage(), markMessageRead(), ContactFormData (+1 more)

### Community 28 - "Dialog and Sheet"
Cohesion: 0.23
Nodes (10): @radix-ui/react-dialog, Sheet(), SheetContent(), SheetDescription(), SheetFooter(), SheetHeader(), SheetOverlay(), SheetPortal() (+2 more)

### Community 29 - "Form Labels"
Cohesion: 0.21
Nodes (11): @radix-ui/react-label, FormControl(), FormDescription(), FormFieldContext, FormFieldContextValue, FormItem(), FormItemContext, FormItemContextValue (+3 more)

### Community 30 - "Blog Edit Form"
Cohesion: 0.19
Nodes (7): EditBlogPostForm(), onSubmit(), dynamic, EditBlogPostPage(), EditBlogPostPageProps, updateBlogPost(), getPostById()

### Community 31 - "Blog Pages"
Cohesion: 0.24
Nodes (11): BlogPostPage(), BlogPostPageProps, dynamic, generateMetadata(), generateStaticParams(), getReadingTime(), BlogMarkdown(), getAllPostsAdmin() (+3 more)

### Community 32 - "Chart Component"
Cohesion: 0.24
Nodes (11): recharts, ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent() (+3 more)

### Community 33 - "Drawer Component"
Cohesion: 0.20
Nodes (8): vaul, DrawerContent(), DrawerDescription(), DrawerFooter(), DrawerHeader(), DrawerOverlay(), DrawerPortal(), DrawerTitle()

### Community 34 - "Motion Utilities"
Cohesion: 0.17
Nodes (11): buttonTap, cardHover, fadeIn, heroTextContainer, heroTextItem, scaleIn, sectionReveal, slideInLeft (+3 more)

### Community 35 - "WebSocket Server"
Cohesion: 0.22
Nodes (8): createSystemMessage(), createUserMessage(), generateMessageId(), httpServer, io, Message, User, users

### Community 36 - "Next Supabase Config"
Cohesion: 0.24
Nodes (6): nextConfig, next, @supabase/ssr, updateSession(), config, middleware()

### Community 37 - "Testimonials Motion"
Cohesion: 0.24
Nodes (8): framer-motion, EditTestimonialDialogProps, AvatarOrInitials(), containerVariants, getInitials(), itemVariants, SectionHeaderProps, Testimonial

### Community 38 - "Navigation Menu"
Cohesion: 0.22
Nodes (10): @radix-ui/react-navigation-menu, NavigationMenu(), NavigationMenuContent(), NavigationMenuIndicator(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuTrigger() (+2 more)

### Community 39 - "Validation Schemas"
Cohesion: 0.20
Nodes (7): zod, ExperienceFormData, experienceSchema, SkillFormData, skillSchema, TestimonialFormData, testimonialSchema

### Community 40 - "Experience Types"
Cohesion: 0.31
Nodes (7): EditExperienceDialogProps, ExperienceSectionProps, TimelineItemProps, getExperiences(), isSupabaseConfigured(), Experience, fallbackExperiences

### Community 41 - "Dev Dependencies"
Cohesion: 0.20
Nodes (10): devDependencies, bun-types, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, tw-animate-css, @types/react (+2 more)

### Community 42 - "Blog Cards"
Cohesion: 0.40
Nodes (7): EditBlogPostFormProps, BlogSectionProps, BlogCard(), BlogCardProps, FeaturedBlogCard(), getReadingTime(), BlogPost

### Community 43 - "Project Cards"
Cohesion: 0.31
Nodes (5): EditProjectFormProps, MotionWrapperProps, ProjectsSectionProps, ProjectCardProps, Project

### Community 44 - "Skill Cards"
Cohesion: 0.33
Nodes (7): EditSkillDialogProps, SkillsSectionProps, CATEGORY_CONFIG, DEFAULT_CONFIG, SkillCard(), SkillCardProps, Skill

### Community 45 - "Resume Delete"
Cohesion: 0.33
Nodes (6): DeleteResumeSectionButton(), handleDelete(), DeleteResumeSectionButtonProps, deleteResumeSection(), ResumeSectionFormData, resumeSectionSchema

### Community 46 - "Pagination Component"
Cohesion: 0.28
Nodes (7): Pagination(), PaginationContent(), PaginationEllipsis(), PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 47 - "New Project"
Cohesion: 0.29
Nodes (3): NewProjectPage(), onSubmit(), createProject()

### Community 48 - "Hero Section"
Cohesion: 0.25
Nodes (7): containerVariants, heroStats, highlightPills, itemVariants, Point, statsVariants, WaveConfig

### Community 49 - "ESLint Configuration"
Cohesion: 0.29
Nodes (4): __dirname, eslintConfig, __filename, eslint-config-next

### Community 50 - "Accordion Component"
Cohesion: 0.33
Nodes (4): @radix-ui/react-accordion, AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 54 - "Markdown Components"
Cohesion: 0.40
Nodes (4): react-markdown, rehype-raw, remark-gfm, BlogMarkdownProps

### Community 55 - "Resizable Panels"
Cohesion: 0.40
Nodes (3): react-resizable-panels, ResizableHandle(), ResizablePanelGroup()

### Community 56 - "Prisma Client"
Cohesion: 0.50
Nodes (3): @prisma/client, db, globalForPrisma

### Community 58 - "Tailwind Config"
Cohesion: 0.50
Nodes (3): tailwindcss, tailwindcss-animate, config

## Knowledge Gaps
- **285 isolated node(s):** `Message`, `User`, `PersonalInfo`, `ResumeAward`, `ResumeEducation` (+280 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 365 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `UI Components` to `Admin Pages`, `Admin Authentication`, `Form Components`, `Resume Skills Forms`, `Sidebar UI`, `Form Validation`, `Toast Notifications`, `WebSocket Features`, `Public Pages`, `Resume Sections`, `Menubar Component`, `Context Menu Component`, `Dropdown Menu Component`, `Layout Constants`, `UI Toggles`, `Carousel Component`, `UI Icons`, `Dialog and Sheet`, `Form Labels`, `Chart Component`, `Drawer Component`, `Testimonials Motion`, `Navigation Menu`, `Pagination Component`, `Accordion Component`, `Popover Component`, `Hover Card Component`, `Resizable Panels`, `Checkbox Component`?**
  _High betweenness centrality (0.228) - this node is a cross-community bridge._
- **What connects `Message`, `User`, `PersonalInfo` to the rest of the system?**
  _285 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dependency Management` be split into smaller, more focused modules?**
  _Cohesion score 0.027777777777777776 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Dependency Management` to `Package Configuration`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Should `UI Components` be split into smaller, more focused modules?**
  _Cohesion score 0.062040816326530614 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Next Supabase Config` to `Admin Pages`, `Admin Authentication`, `Form Components`, `Resume Skills Forms`, `Package Configuration`, `Form Validation`, `Public Pages`, `Resume Sections`, `Admin Dashboard`, `Project Management`, `Global Layout`, `Auth API Routes`, `Layout Constants`, `UI Icons`, `Message Actions`, `Blog Edit Form`, `Blog Pages`, `Validation Schemas`, `Blog Cards`, `Project Cards`, `Resume Delete`, `Hero Section`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Should `Admin Authentication` be split into smaller, more focused modules?**
  _Cohesion score 0.09878048780487805 - nodes in this community are weakly interconnected._