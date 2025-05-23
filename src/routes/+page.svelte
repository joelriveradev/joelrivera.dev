<script lang="ts">
  export let data
</script>

<svelte:head>
  <title>Joel Rivera</title>

  <meta
    name="description"
    content="Hey there! I'm Joel, a front-end engineer and designer with a focus on building beautiful AI-powered user experiences."
  />

  <meta name="og:title" content="Joel Rivera" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`Hey there! I'm Joel, a front-end engineer and designer with a focus on building beautiful AI-powered user experiences.`}
  />
</svelte:head>

<main class='mb-32'>
  <h1 class="antialiased flex flex-col">
    Joel Rivera
    <span class="antialiased opacity-50">Full Stack AI Engineer</span>
  </h1>

  <p class="w-full my-20 mt-[68px] antialiased">
    I'm a full-stack engineer, designer, and AI enthusiast. I love solving real-world problems with AI by building practical LLM applications.
  </p>

  <!--Posts-->
  <section class="my-20">
    <h2 class="mb-8">Blog</h2>

    <ul>
      {#each data.posts as { id, slug, title } (id)}
        <li>
          <a
            class="block focus:outline-dotted focus:outline-white/50 focus:outline-offset-[16px] rounded-lg"
            href="/post/{slug}"
          >
            <p class="w-full mb-2 antialiased">{title}</p>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</main>
