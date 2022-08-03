<script>
    import BlogCard from "$lib/components/articles/Card.svelte";
    import {getAssetURL} from "$lib/get-asset-url";
    import {locale} from "$i18n/i18n-svelte";
    import PageHeader from "$lib/components/articles/PageHeader.svelte";

    //Incoming data
    export let posts = []

</script>

<svelte:head>
    <link rel="alternate" href="https://nbx.com/en/blog " hreflang="x-default"/>
    <link rel="alternate" href="https://nbx.com/no/blog " hreflang="no"/>
    <link rel="alternate" href="https://nbx.com/sv/blog " hreflang="sv"/>
    <link rel="alternate" href="https://nbx.com/da/blog " hreflang="da"/>
    <title>Kryptokrona | Blog</title>
    <meta name="description"
          content="Read the blog bitch">
</svelte:head>

<PageHeader title="Articles"/>

<div class="wrapper">
    {#if posts}
        {#each posts.data as post}
            <div>
                <BlogCard post={post}/>
            </div>
        {/each}
    {/if}
</div>


<style lang="scss">

  .featured {
    padding: 60px 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4rem;

    img {
      max-width: 100%;
      height: auto;
      border-radius: var(--border-radius);
    }

    .featured-text {
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  .button-wrapper {

  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 4rem;
    padding: 60px 0;

    div {
      grid-column: span 4/span 4;

      @media screen and (max-width: 1024px) {
        grid-column: span 6/span 6;
        gap: 2rem;
      }
    }

    &:first-child {
    }


    @media only screen and (max-width: 768px) {
      gap: 2rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
