<script>
    import { page } from "$app/stores";

    export let title
    export let date
    export let category
    export let summary
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:site_name" content={title}/>
    <meta name="description"
          content={summary}>
    <meta property="og:title" content={title}/>
    <meta property="og:description" content={summary}/>
    <meta property="og:url" content={$page.url.href}/>
    <meta property="og:locale" content="en"/>
    <link rel="alternate" href={$page.url.href} hreflang="en"/>
    <link rel="alternate" href={$page.url.href} hreflang="x-default"/>
</svelte:head>

<div class="wrapper">
    <p>Category: {category}</p>
    <p>Published: {date}</p>
    <h1>{title}</h1>
    <slot/>
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