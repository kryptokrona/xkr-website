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

<div>
    <h2>Blog</h2>
    <div class="wrapper">
        {#each latestPosts as post}
            <div>
                <h2>
                    <a href={post.path}>
                        {post.meta.title}
                    </a>
                </h2>
                <p>{post.meta.summary}</p>
                {post.meta.date}
            </div>
        {/each}

    </div>
</div>

<style lang="scss">

    .wrapper {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      @media only screen and (max-width: 1000px) {
        flex-direction: column;
      }

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        max-height: 100px;
      }
    }

</style>