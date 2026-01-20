import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiAtLine
} from '@remixicon/react'

interface Project {
  id: string
  title: string
  description: string
  href: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'rwd.chat',
    description: 'An AI-powered Bible study agent',
    href: 'https://rwd.chat/'
  },
  {
    id: '2',
    title: 'tuvio',
    description: 'Agentic AI-powered conversational learning',
    href: 'https://tuvio.vercel.app//'
  }
]

export default function Page() {
  return (
    <div className='w-full min-h-dvh max-w-4xl mx-auto p-7 md:p-16'>
      <header className='flex items-start justify-between'>
        <div className='flex flex-col gap-px'>
          <span>Joel Rivera</span>

          <span className='text-muted-foreground'>AI Software Engineer</span>
        </div>
      </header>

      <main className='mt-20'>
        <h1>
          I'm a designer turned software engineer with more than a decade of
          experience working at the intersection of design, engineering, and
          generative AI.
        </h1>

        <p className='mt-8'>
          I'm passionate about solving real-world problems. My current focus is
          on building conversational AI experiences in education technology.
        </p>

        <p className='mt-8'>
          Currently, I work @{' '}
          <a
            href='https://atos.net/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline-offset-3 underline'
          >
            Atos
          </a>{' '}
          as an AI Software Engineer, and I own an AI services company called
          Rivasyst. If you're interested in building AI-powered solutions,{' '}
          <a
            href='https://rivasyst.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='underline-offset-3 underline'
          >
            let's chat!
          </a>
          .
        </p>

        <section className='mt-20'>
          <h2 className='text-xs text-muted-foreground mb-3'>Projects</h2>

          <ul className='flex lg:flex-row flex-col lg:items-center gap-5'>
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.href}
                className='flex-1 group rounded-lg'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Card className='dark:bg-tranparent dark:group-hover:bg-neutral-800/30 group-hover:bg-neutral-200/30 group-hover:transition-colors'>
                  <CardHeader className='flex items-center gap-2'>
                    <CardTitle className='opacity-50'>
                      {project.title}
                    </CardTitle>

                    <RiArrowRightUpLine
                      className='text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity'
                      size={18}
                    />
                  </CardHeader>

                  <CardContent>
                    <p className='opacity-80'>{project.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </ul>
        </section>

        <section className='mt-20'>
          <h2 className='text-xs text-muted-foreground mb-2 sr-only'>
            Contact
          </h2>

          <div className='flex gap-5'>
            <a
              href='https://github.com/joelriveradev'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground/80 transition-colors'
            >
              <RiGithubFill />
            </a>

            <a
              href='https://www.linkedin.com/in/joel-rivera-24a4b5aa/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground/80 transition-colors'
            >
              <RiLinkedinBoxFill />
            </a>

            <a
              href='mailto:joelrivera.dev@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-foreground/80 transition-colors'
            >
              <RiAtLine />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
