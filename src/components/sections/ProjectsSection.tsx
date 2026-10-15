import Link from 'next/link'
import { MotionWrapper } from '@/components/sections/MotionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/features/projects/types'

interface ProjectsSectionProps {
  projects: Project[]
  showAll?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function ProjectsSection({ projects, showAll = false }: ProjectsSectionProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeader
            label="Projects"
            title="Selected Work"
            subtitle="A selection of projects that showcase my skills and experience."
          />
        </MotionWrapper>

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 group">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
