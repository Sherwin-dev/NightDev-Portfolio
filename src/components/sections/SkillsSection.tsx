import { MotionWrapper } from '@/components/sections/MotionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SkillCard } from '@/components/ui/SkillCard'
import { SKILL_CATEGORIES } from '@/lib/constants'
import type { Skill } from '@/features/skills/types'

interface SkillsSectionProps {
  skills: Skill[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const grouped = SKILL_CATEGORIES.map((category) => ({
    category,
    skills: skills.filter((s) => s.category === category),
  })).filter((g) => g.skills.length > 0)

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeader
            label="Tech Stack"
            title="Skills & Technologies"
            subtitle="Technologies I work with across the full stack."
          />
        </MotionWrapper>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grouped.map((group, index) => (
            <SkillCard key={group.category} category={group.category} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  )
}
