import Link from 'next/link'
import { FolderKanban, FileText, Wrench, Briefcase, MessageSquare, FileUser, Quote, ArrowUpRight, Database } from 'lucide-react'
import { getAllProjectsAdmin } from '@/features/projects/queries'
import { getAllPostsAdmin } from '@/features/blog/queries'
import { getSkills } from '@/features/skills/queries'
import { getExperiences } from '@/features/experience/queries'
import { getContactMessages } from '@/features/contact/actions'
import { getResumeSections } from '@/features/resume/queries'
import { getAllTestimonialsAdmin } from '@/features/testimonials/queries'
import { createAdminClient } from '@/lib/supabase/admin'
import type { Database as Db } from '@/types/database'

async function checkDatabaseHealth() {
  try {
    const supabase = createAdminClient()
    // Simple query to check connectivity
    const { data, error } = await supabase.from('projects').select('count', { count: 'exact', head: true }).limit(1)
    if (error) throw error
    return { status: 'connected' as const }
  } catch (err) {
    console.error('Database health check failed:', err)
    return { status: 'error' as const }
  }
}

const dashboardCards = [
  { label: 'Projects', href: '/admin/projects', icon: FolderKanban, getKey: 'projects' },
  { label: 'Blog Posts', href: '/admin/blog', icon: FileText, getKey: 'posts' },
  { label: 'Skills', href: '/admin/skills', icon: Wrench, getKey: 'skills' },
  { label: 'Experience', href: '/admin/experience', icon: Briefcase, getKey: 'experiences' },
  { label: 'Resume', href: '/admin/resume', icon: FileUser, getKey: 'resume' },
  { label: 'Testimonials', href: '/admin/testimonials', icon: Quote, getKey: 'testimonials' },
  { label: 'Messages', href: '/admin/messages', icon: MessageSquare, getKey: 'messages' },
  { label: 'Database', href: '#', icon: Database, getKey: 'database' },
]

export async function AdminDashboard() {
  const [projects, posts, skills, experiences, resumeSections, testimonials, messages, databaseHealth] = await Promise.all([
    getAllProjectsAdmin(),
    getAllPostsAdmin(),
    getSkills(),
    getExperiences(),
    getResumeSections(),
    getAllTestimonialsAdmin(),
    getContactMessages(),
    checkDatabaseHealth(),
  ])

  const counts: Record<string, number> = {
    projects: projects.length,
    posts: posts.length,
    skills: skills.length,
    experiences: experiences.length,
    resume: resumeSections.length,
    testimonials: testimonials.length,
    messages: messages.length,
  }

  const unreadMessages = messages.filter((m: { read: boolean }) => !m.read).length

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
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Session active
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dashboardCards.map((card) => (
          <Link key={card.getKey} href={card.href} className="group">
            <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-card/60 hover:shadow-lg hover:shadow-black/5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 backdrop-blur-sm border border-border/30">
                  <card.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-foreground" />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {card.label}
                </p>
                {card.getKey === 'database' ? (
                  <div className="flex items-center space-x-2">
                    <div className="h-2.5 w-2.5 rounded-full">
                      {databaseHealth.status === 'connected' ? (
                        <div className="bg-emerald-500" />
                      ) : (
                        <div className="bg-destructive" />
                      )}
                    </div>
                    <p className="text-sm font-medium">
                      {databaseHealth.status === 'connected' ? 'Connected' : 'Disconnected'}
                    </p>
                  </div>
                ) : (
                  <p className="text-2xl font-bold tracking-tight text-foreground">
                    {counts[card.getKey]}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
          <h3 className="text-sm font-semibold mb-3">Content Summary</h3>
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Published projects</span>
              <span className="font-medium">{projects.filter((p: { published: boolean }) => p.published).length} / {projects.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Published posts</span>
              <span className="font-medium">{posts.filter((p: { published: boolean }) => p.published).length} / {posts.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Resume sections</span>
              <span className="font-medium">{resumeSections.length}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Unread messages</span>
              <span className="font-medium">{unreadMessages}</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-5">
          <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <FolderKanban className="h-4 w-4 text-blue-400" />
              Add new project
            </Link>
            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              Write new post
            </Link>
            <Link
              href="/admin/messages"
              className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-rose-400" />
              {unreadMessages > 0 ? `View ${unreadMessages} unread messages` : 'View messages'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}