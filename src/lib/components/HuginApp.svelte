<script>

import LinkButton from "./buttons/LinkButton.svelte";

const data = [
    {user: "AnonMan", msg: "This is awesome, the world needs Hugin, period."},
    {user: "Satoshi", msg: "Yes, you can @WhoDis, glhf!"},
    {user: "WhoDis", msg: "So I can speak freely here?"},
    {user: "MrCoin", msg: "I tipped you 7 XKR, spread the love!"},
    {user: "Anonymous", msg: "Testing the new functions, great update guys!"},
    {user: "PlsSendHelp", msg: "Who tipped me?"},
    {user: "AnonMan", msg: "This is awesome, the world needs Hugin, period."},
    {user: "Satoshi", msg: "Yes, you can @WhoDis, glhf!"},
    {user: "WhoDis", msg: "So I can speak freely here?"},
    {user: "MrCoin", msg: "I tipped you 7 XKR, spread the love!"},
    {user: "Anonymous", msg: "Testing the new functions, great update guys!"},
    {user: "PlsSendHelp", msg: "Who tipped me?"},
    {user: "AnonMan", msg: "This is awesome, the world needs Hugin, period."},
    {user: "Satoshi", msg: "Yes, you can @WhoDis, glhf!"},
    {user: "WhoDis", msg: "So I can speak freely here?"},
    {user: "MrCoin", msg: "I tipped you 7 XKR, spread the love!"},
    {user: "Anonymous", msg: "Testing the new functions, great update guys!"},
    {user: "PlsSendHelp", msg: "Who tipped me?"},
]
</script>

<div class="app">
    <div class="wrapper">
        <div class="col left">
            <div class="nav">
                <h1>Hugin Boards</h1>
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
            {#each data as post}
                <div class="post">
                    <h2>{post.user}</h2>
                    <p>{post.msg}</p>
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
    margin-top: 100px;
    overflow: hidden;
  }

    .wrapper {
      display: flex;
      height: 800px;
      border-top:1px solid rgba(255, 255, 255, 0.1);
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
      align-items: center;
      max-width: 300px;
      width: 100%;
      height: 100%;
      padding: 2rem;

    }

  .left {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  .right {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
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
      width: 300px;

      h3 {
        margin: 0;
      }
    }

</style>