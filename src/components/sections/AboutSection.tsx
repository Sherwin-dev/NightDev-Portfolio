import { MotionWrapper } from '@/components/sections/MotionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Code2, Database, Layers, Server, Wrench, GraduationCap } from 'lucide-react'

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and performant user interfaces with React, Next.js, Vue 3, TypeScript, and Tailwind CSS.',
    color: 'text-muted-foreground',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description:
      'Designing APIs and server-side logic with Python, FastAPI, Django, Node.js, Express, C#, and .NET 8.',
    color: 'text-muted-foreground',
  },
  {
    icon: Layers,
    title: 'Desktop Applications',
    description:
      'Creating cross-platform desktop apps with Avalonia UI, MVVM architecture, and .NET 8 with Entity Framework Core.',
    color: 'text-muted-foreground',
  },
  {
    icon: Database,
    title: 'Database Management',
    description:
      'Working with PostgreSQL, Supabase, SQLite, MongoDB, and Redis for data persistence and caching strategies.',
    color: 'text-muted-foreground',
  },
  {
    icon: Wrench,
    title: 'DevOps & Tooling',
    description:
      'Containerizing applications with Docker and Docker Compose, managing Git workflows, and working in Linux environments.',
    color: 'text-muted-foreground',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Always exploring new technologies — from system design fundamentals to OpenSearch, Redis, and advanced authentication patterns.',
    color: 'text-muted-foreground',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeader
            label="About"
            title="What I Do"
            subtitle="A developer focused on full-stack engineering, clean architecture, and continuous technical growth."
          />
        </MotionWrapper>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <MotionWrapper key={item.title} variants={containerVariants} initial="hidden" animate="visible">
              <div className="relative h-full rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30 mb-4">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
