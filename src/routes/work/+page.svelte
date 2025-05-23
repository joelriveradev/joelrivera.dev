<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte'

  export let data
  const { projects } = data
</script>

<svelte:head>
  <title>Joel Rivera — Work</title>

  <meta
    name="description"
    content="I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development."
  />

  <meta name="og:title" content="Joel Rivera — Work" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`I have a decade of experience leading and executing web development projects with a focus on
    crafting high-quality, accessible, and inclusive user experiences. I have technical expertise in
    TypeScript, React, and AI integration, with a passion for learning and design-driven
    development.`}
  />
</svelte:head>

<main class="antialiased mb-32 lg:mb-10">
  <h1 class="flex flex-col">Work & Skills</h1>

  <section class="my-10">
    <p class="opacity-50">
      TypeScript, React, Next.js, TailwindCSS, GraphQL, Node.js, Jest, React Testing
      Library, Cypress, Supabase (Postgres), MongoDB, Vercel, LangChain, LangGraph, Pinecone, LLM APIs (OpenAI, Anthropic)
    </p>
  </section>

  <!--Apps-->
  <section class='mb-10'>
    <h2 class="mb-8">Side Projects</h2>

    <ul>
      {#each projects as { id, name, description, repo, } (id)}
        <li>
          <a
            class="block focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
            href={repo}
            rel="noreferrer nofollow"
            target="_blank"
          >
            <div class="w-full mb-8">
              <p class="antialiased text-sm">{name}</p>
              <p class="antialiased opacity-50">{description}</p>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </section>


    <a href='/resume.pdf' target="_blank" class=" inline-flex items-center gap-1 hover:opacity-80 hover:underline underline-offset-4 transition-all">
      View Resume
      <ArrowUpRight size={14} />
    </a>
</main>
