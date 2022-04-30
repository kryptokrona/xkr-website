<script>
    import {onMount} from "svelte";

    let username
    let commitMsg
    let additions
    let deletions
    let avatar
    let url

    onMount(() => {
        //Fetches the last commit on given url
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/commits/master")
            .then((response) => response.json())
            .then((data) => {
                username = data.author.login
                commitMsg = data.commit.message
                additions = data.stats.additions
                deletions = data.stats.deletions
                avatar = data.author.avatar_url
                url = data.html_url
            });
    })
</script>

<div class="wrapper">
    <div class="text-wrapper">
        <h2>Contribute</h2>
        <p>This project is open source and maintained by the Community. You can for example make changes to this site,
            suggest awesome new features, or help us squash bugs. Not a developer? No worries, there's tons of things to
            do!</p>
    </div>
    <a href={url}>
    <div class="card">
        <div class="card-top">
            <p class="commit">{commitMsg}</p>
            <div class="changes">
                <p class="add">{additions}</p>
                <p class="del">{deletions}</p>
            </div>
        </div>
        <div class="card-bottom">
            <div class="card-user">
                <img src={avatar} alt="github avatar">
                <h3>{username}</h3>
            </div>
        </div>
    </div>
    </a>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    margin-top: 100px;
    border-bottom: 1px solid var(--border-color);


    h2 {
      margin: 0;
    }

    @media only screen and (max-width: 850px) {
      flex-direction: column;
    }

    a {
      text-decoration: none;
    }
  }

    .card {
      box-sizing: border-box;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      border-radius: 0.4rem;
      max-width: 500px;
      min-width: 280px;
      display: flex;
      gap: 20px;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px;
      transition: 250ms ease-in-out;

      @media only screen and (max-width: 850px) {
        max-width: 100%;
      }

      p {
        margin: 0;
      }

      h3 {
        margin: 0;
      }

      img {
        height: 36px;
        width: 36px;
        border-radius: 5px;
      }

      .changes {
        display: flex;
        gap: 10px;
      }
      .add {
        color: var(--success-color);
      }

      .del {
        color: var(--warn-color);
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
    .card-top {
      display: flex;
      flex-direction: column;
    }

    .card-bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      div {
        display: flex;
        align-items: flex-end;
        gap: 10px;
      }
    }

    .text-wrapper {
      max-width: 500px;

      @media only screen and (max-width: 850px) {
        max-width: 100%;
      }
    }
</style>