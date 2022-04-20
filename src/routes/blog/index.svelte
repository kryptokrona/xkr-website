<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch('/api/posts.json')
        const allPosts = await posts.json()

        return {
            props: {
                posts: allPosts
            }
        }
    }
</script>

<script>
    export let posts
</script>

<div class="wrapper">
    <h1>News</h1>
    <div class="blog-wrapper">
        {#each posts as post}
            <div>
                <h2>
                    <a href={post.path}>
                        {post.meta.title}
                    </a>
                </h2>
                {post.meta.date}
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .wrapper {
      margin-top: 200px;
    }
</style>