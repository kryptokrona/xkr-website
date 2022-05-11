<script>
import {fade} from "svelte/transition";
import LinkButton from "./buttons/LinkButton.svelte";
import {cache} from "../stores/cache.js";

</script>

<div class="app">
    <div class="wrapper">
        <div class="col left">
            <div class="nav">
                <h1>Hugin</h1>
                <div class="nav-link">
                    <h3>Home</h3>
                </div>
                <div class="nav-link">
                    <h3>Trending posts</h3>
                </div>
                <div class="nav-link">
                    <h3>Trending hashtags</h3>
                </div>
            </div>
        </div>
        <div class="posts">
            {#if $cache}
                {#each $cache.items as post}
                    <div in:fade class="post">
                        <h2>{post.key}</h2>
                        <p>{post.message}</p>
                    </div>
                {/each}
            {/if}
        </div>
        <div class="col right">
            <div class="action">
                <h2>Want to join the conversation?</h2>
                <p>Download Hugin Messenger and get 5 XKR to start chatting straight away!</p>
                <LinkButton text="Download" enabled={true}/>
            </div>
        </div>
    </div>
</div>

<style lang="scss">

  .app {
    width: 100%;
    overflow: hidden;
  }

    .wrapper {
      display: flex;
      height: 800px;
    }

    .posts {
      display: flex;
      padding: 2rem;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      overflow: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      border-left: 1px solid rgba(255, 255, 255, 0.1);

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .post {
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      padding: 1rem;
      border-radius: 0.4rem;

      p, h2{
        margin: 0;
      }
    }

    .col {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      max-width: 250px;
      width: 100%;
      height: 100%;
    }

    .right {
      padding-left: 2rem;

      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }

  .nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
    .nav-link {
      box-sizing: border-box;
      display: flex;
      align-items: center;

      h3 {
        margin: 0;
      }
    }

</style>