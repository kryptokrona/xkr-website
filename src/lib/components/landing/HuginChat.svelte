<script>
    import {cache} from "$lib/stores/cache";
    import {get_avatar} from "$lib/utils/get-avatar";
    import moment from "moment/moment.js";
    import {onMount} from "svelte";
    import {locale, LL} from "$i18n/i18n-svelte";
    import LinkButton from "../buttons/LinkButton.svelte";


    let scrolldelay

    const avatar = (adr) => {
        return get_avatar(adr)
    }

    onMount(() => {
        setTimeout(pageScroll, 1000)
    })

    function pageScroll() {
        document.getElementById('scroll').scrollBy(0, 1);
        scrolldelay = setTimeout(pageScroll, 20);
    }

</script>

<div>
    <div class="text">
        <h2>{$LL.components.huginChat.title()}</h2>
        <p>{$LL.components.huginChat.text()}</p>
        <LinkButton text={$LL.components.huginChat.button()} url="/{locale}/hugin" enabled={true}/>
    </div>
    <div class="chat">
        <div class="fade-top"></div>
        <div class="posts" id="scroll">
            {#if $cache.length > 0}
                {#each $cache as post}
                    <div class="post">
                        <div style="display: flex; justify-content: space-between; align-items: center">
                            <div style="display: flex; align-items: center; margin: 0 0 0 -10px">
                                <!--
                                <img width="36px" height="36px" class="avatar" src="data:image/png;base64,{avatar(post.key)}" alt="">
                                -->
                                <h4>{post.nickname ? post.nickname : 'Anonymous'}</h4>
                            </div>
                            <h5>{moment(post.time * 1000).fromNow()}</h5>
                        </div>
                        <p>{@html post.message}</p>
                    </div>
                {/each}
            {:else}
                <div class="no-msg">
                    <h2>Cache not connected 😭</h2>
                </div>
            {/if}
        </div>
        <div class="fade-bottom"></div>
    </div>
    <div>

    </div>
</div>

<style lang="scss">

  .text {
    margin-bottom: 4rem;

    @media screen and (max-width: 1000px) {
      text-align: center;
    }

    h2 {
      font-size: 3rem;
      margin: 0;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }

    p {
      margin-bottom: 2rem;
    }
  }

  .chat {
    position: relative;
    height: 450px;
    margin: 1rem 0;
    z-index: -1;
  }

  .posts {
    pointer-events: none;
    overflow: scroll;
    scrollbar-width: none;
    height: 100%;
    width: 100%;

    h4, p {
      margin: 0;
    }

    .post {
      margin: 1rem 0;
      padding: 0 1.5rem 1rem 1.5rem;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      /* Non standard for WebKit */
      word-break: break-word;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .no-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
  }

  .fade-top {
    top: 0;
    position: absolute;
    background: linear-gradient(180deg, #121212, #12121200);
    width: 100%;
    height: 100px;
  }

  .fade-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(360deg, #121212, #12121200);
  }
</style>