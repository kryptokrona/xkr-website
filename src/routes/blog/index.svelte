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

<ul>
    {#each posts as post}
        <li>
            <h2>
                <a href={post.path}>
                    {post.meta.title}
                </a>
            </h2>
            {post.meta.date}
        </li>
    {/each}
</ul>

<style lang="scss">

    div {
      margin-top: 100px;
    }
</style>