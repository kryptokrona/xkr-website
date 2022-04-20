<script>
    import {onMount} from "svelte";

    let latestPosts = []
    onMount(async () => {
        const posts = await fetch('/api/posts.json')
        const allPosts = await posts.json()
        latestPosts = allPosts.slice(0, 3)
        console.log(allPosts)
    })
</script>

<div class="wrapper">
    <div class="blog-wrapper">
        {#each latestPosts as post}
            <div>
                <h2>{post.meta.title}</h2>
                <p>{post.meta.summary}</p>
                <p>{post.meta.date}</p>
                <a href={post.path}>Read more</a>
            </div>
        {/each}

    </div>
</div>

<style lang="scss">

  .wrapper {

    .text-wrapper {
      border-bottom: 1px solid var(--border-color);
    }

    .blog-wrapper {
      a {
        color: var(--title-color);
        text-decoration: none;
      }

      div{
        padding: 20px 0;
        border-bottom: 1px solid var(--border-color);
      }

      div:last-child {
        border-bottom: none;
      }
    }
  }

</style>