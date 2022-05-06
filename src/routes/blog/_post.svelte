<script>
    export let title
    export let date
    export let category
    export let summary
</script>

<svelte:head>
    <title>Kryptokrona | Blog</title>
    <meta name="description" content={summary}/>
</svelte:head>

<div class="wrapper">
    <p>Category: {category}</p>
    <p>Published: {date}</p>
    <h1>{title}</h1>
    <slot />
</div>

<style lang="scss">
    .wrapper {
      margin: 200px auto 150px auto;
      box-sizing: border-box;
      max-width: var(--website-width);

      -ms-word-break: break-word;
      word-break: break-word;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
    }
</style>