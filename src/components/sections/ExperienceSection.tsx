import { MotionWrapper } from '@/components/sections/MotionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TimelineItem } from '@/components/ui/TimelineItem'
import type { Experience } from '@/features/experience/types'

interface ExperienceSectionProps {
  experiences: Experience[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl">
        <MotionWrapper>
          <SectionHeader
            label="Experience"
            title="Where I've Worked"
            subtitle="My journey as a developer — projects, learning, and growth."
          />
        </MotionWrapper>

        <div className="mt-4">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
