<script>
    import {browser} from "$app/env";
    import {onMount} from "svelte";
    import {page} from "$app/stores";
    import {locale} from "$i18n/i18n-svelte";
    import LatestPosts from "$lib/components/articles/LatestPosts.svelte";
    import PageHeader from "$lib/components/articles/PageHeader.svelte";

    //Incoming data
    export let post
    export let related

    //Function to get h2's
    let headings = []
    const getHeadings = () => {
        headings = []
        if (browser) {
            document.querySelectorAll('.post h2').forEach(element => {
                headings.push({text: element.textContent})
                element.setAttribute('id', element.textContent)
            });
        }
    }

    //Look for h2's when we mount
    onMount(() => {
        getHeadings()
    })

    //Look for h2's when page change
    $: {
        $page
        getHeadings()
    }

</script>

<svelte:head>
    <link rel="canonical" href={$page.url}/>
    <title>{post.title}</title>
    <meta name="description" content={post.summary}/>
</svelte:head>

<PageHeader title={post.title} />

<div class="content container">
    <div class="post-wrapper">
        <div class="post">
            <article>
                {@html post.body}
            </article>
        </div>

        <div class="side-wrapper">
            <div class="on-page">
                <h2>On this page</h2>
                    {#each headings as item}
                        <a href="#{item.text}">{item.text}</a>
                    {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">

  .content {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 60px;

    @media screen and (max-width: 1080px) {
      flex-direction: column;
    }
  }

  .post-wrapper {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2rem;

    .post {
      grid-column: span 8 / span 8;

      @media screen and (max-width: 768px) {
        grid-column: span 12 / span 12;
      }

      img {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius);
      }
    }

    .side-wrapper {
      grid-column: span 3 / span 3;
      grid-column-start: 10;

      @media screen and (max-width: 1024px) {
        grid-column: span 4 / span 4;
        grid-column-start: 9;
      }

      @media screen and (max-width: 768px) {
        grid-column: span 12 / span 12;
      }
    }
  }


  .on-page {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 60px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
</style>
