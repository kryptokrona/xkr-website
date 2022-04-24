<script context="module">
    export const load = async ({ fetch }) => {
        const posts = await fetch('/api/posts.json')
        const allPosts = await posts.json()

        console.log(allPosts)

        return {
            props: {
                posts: allPosts
            }
        }
    }
</script>

<script>
    import JoinDiscord from "../../lib/components/JoinDiscord.svelte";
    import StatusBar from "../../lib/components/StatusBar.svelte";
    import DiApple from 'svelte-icons/di/DiApple.svelte'

    export let posts
</script>

<svelte:head>
    <title>Kryptokrona | Blog</title>
    <meta name="description" content=""/>
</svelte:head>

<div class="wrapper">
    <div class="text-wrapper">
        <h1>News</h1>
    </div>
    <div class="blog-wrapper">
        {#each posts as post}
            <div>
                <h2>{post.meta.title}</h2>
                <p>{post.meta.summary}</p>
                <p>{post.meta.date}</p>
                <a href={post.path}>Read more</a>
            </div>
        {/each}
    </div>
</div>
<JoinDiscord/>
<StatusBar/>

<style lang="scss">
    .wrapper {
      margin-top: 200px;
      margin-bottom: 10rem;

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