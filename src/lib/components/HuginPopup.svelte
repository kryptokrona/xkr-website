<script>

    import {cache} from "../stores/cache.js";
    import {get_avatar} from "../utils/get-avatar.js";
    import moment from "moment/moment.js";

    let open = false
    const avatar = (adr) => {
        return get_avatar(adr)
    }

    const handleClick = () => {
        open = !open
    }

</script>

<div class="wrapper">
    {#if !open}
        <div class="circle" on:click={handleClick}>
            <div class="dot blink_me"></div>
            <img height="36px" src="/static/hugintray.png" alt="">
        </div>
    {/if}
    {#if open}
        <div class="chat">
            <div class="chat-header">
                <h4 style="margin: 0">Hugin Messenger</h4>
                <svg class="close" on:click={handleClick} width="24px" height="24px" viewBox="0 0 79 79" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                       stroke-linecap="round">
                        <g id="Group-23"
                           transform="translate(39.500000, 39.500000) rotate(-315.000000) translate(-39.500000, -39.500000) translate(14.500000, 14.500000)"
                           stroke="var(--title-color)" stroke-width="5">
                            <line x1="2.36161665e-16" y1="25" x2="50" y2="25" id="Line-9"></line>
                            <line x1="25" y1="50" x2="25" y2="1.91800598e-15" id="Line-9"></line>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="posts">
                {#each $cache as post}
                    <div class="post">
                        <div style="display: flex; justify-content: space-between">
                            <div style="display: flex; align-items: center; margin: -10px 0 0 -10px">
                                <img class="avatar" src="data:image/png;base64,{avatar(post.key)}" alt="">
                                <h4>{post.nickname ? post.nickname : 'Anonymous'}</h4>
                            </div>
                            <h5>{moment(post.time * 1000).fromNow()}</h5>
                        </div>
                        <p>{@html post.message}</p>
                    </div>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
  .wrapper {
    position: fixed;
    right: 20px;
    bottom: 20px;

    @media only screen and (max-width: 1000px) {
      display: none;
    }

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      cursor: pointer;

      .dot {
        position: absolute;
        top: 0;
        left: 0;
        width: 1rem;
        height: 1rem;
        background-color: var(--warn-color);
        border-radius: 50%;
      }

      &:hover {
        opacity: 80%;
      }
    }

    .chat {
      box-sizing: border-box;
      width: 400px;
      height: 500px;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      border-radius: 0.4rem;
      overflow: hidden;
    }

    .posts {
      overflow: scroll;
      height: 100%;

      h4, p {
        margin: 0;
      }

      .post {
        padding: 0 1rem 1rem 1rem;
        border-bottom: 1px solid var(--card-border);
      }
    }

    .chat-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--card-border);
      background-color: var(--card-background);
      padding: 1rem;

      .close {
        cursor: pointer;
      }
    }
  }
</style>