import Link from 'next/link'
import { MotionWrapper } from '@/components/sections/MotionWrapper'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BlogCard } from '@/components/ui/BlogCard'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/features/blog/types'

interface BlogSectionProps {
  posts: BlogPost[]
  showAll?: boolean
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export function BlogSection({ posts, showAll = false }: BlogSectionProps) {
  const displayPosts = showAll ? posts : posts.slice(0, 3)

  return (
    <section id="blog" className="py-28 px-6 relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <MotionWrapper>
          <SectionHeader
            label="Blog"
            title="Developer Journal"
            subtitle="Technical notes, learning logs, and documentation from my engineering journey."
          />
        </MotionWrapper>

        {posts.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/60 mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <p className="text-muted-foreground">
              No blog posts published yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post, index) => (
              <MotionWrapper key={post.id} variants={containerVariants} initial="hidden" animate="visible">
                <BlogCard post={post} />
              </MotionWrapper>
            ))}
          </div>
        )}

        {!showAll && posts.length > 3 && (
          <MotionWrapper className="mt-12 text-center" variants={containerVariants} initial="hidden" animate="visible">
            <Button asChild variant="outline" size="lg" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 group">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </MotionWrapper>
        )}
      </div>
    </section>
  )
}
