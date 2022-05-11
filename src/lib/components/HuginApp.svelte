<script>
import {fade} from "svelte/transition";
import LinkButton from "./buttons/LinkButton.svelte";
import {cache} from "../stores/cache.js";
import moment from "moment/moment.js";
import {get_avatar} from "../utils/get-avatar.js";

const avatar = (adr) => {
    return get_avatar(adr)
}
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
            <div class="action small">
                <h2>Want to join the conversation?</h2>
                <p>Download Hugin Messenger and get 5 XKR to start chatting straight away!</p>
                <LinkButton text="Download" enabled={true}/>
            </div>
        </div>
        <div class="posts">

                {#each $cache as post}
                    <div in:fade class="post">
                        <div style="display: flex; justify-content: space-between">
                            <div style="display: flex; align-items: center; margin: -10px 0 0 -10px">
                                <img class="avatar" src="data:image/png;base64,{avatar(post.key)}" alt="">
                                <h4>{post.nickname ? post.nickname : 'Anonymous'}</h4>
                            </div>
                            <h5>{moment(post.time * 1000).fromNow()}</h5>
                        </div>

                        <p>{post.message}</p>
                    </div>
                {/each}

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

      @media only screen and (max-width: 1000px) {
        padding: 2rem 0 2rem 2rem;
        border-right: none;
      }

      @media only screen and (max-width: 700px) {
        padding: 0;
        border-left: none;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .post {
      box-sizing: border-box;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      padding: 1rem;
      border-radius: 0.4rem;

      h4 {
        margin: 0;
        white-space: nowrap;
        max-width: 100px;
        overflow: hidden;
        text-overflow: ellipsis
      }
      h5 {
        margin: 0;
      }

      p{
        margin: 10px 0 0 0;
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

    .left {
      justify-content: space-between;
      padding-bottom: 2rem;

      @media only screen and (max-width: 700px) {
        display: none;
      }

      .small {
        display: none;
        @media only screen and (max-width: 1000px) {
          display: block;
        }
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