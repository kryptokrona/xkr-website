<script>
    import LL from "$i18n/i18n-svelte";
</script>

<footer>
        <div class="wrapper container">
            <div class="footer-navigation">
                <div>
                    <h3>{$LL.footer.title1()}</h3>
                    <a href="/">{$LL.footer.home()}</a>
                    <a href="/wallet">{$LL.footer.wallet()}</a>
                    <a href="/hugin">Hugin</a>
                    <a href="/mining">{$LL.footer.mining()}</a>
                    <a href="https://kryptokrona.se/store/">{$LL.footer.store()}</a>
                    <a href="/about">{$LL.footer.about()}</a>
                </div>
                <div>
                    <h3>XKR</h3>
                    <a href="https://explorer.kryptokrona.se">Explorer</a>
                    <a href="https://github.com/kryptokrona/xkr-website/blob/main/static/Whitepaper/Proposal_for_a_New_Nordic_Digital_Currency.pdf">Whitepaper</a>
                    <a href="/blog">{$LL.footer.articles()}</a>
                    <a href="https://github.com/kryptokrona/kryptokrona-stickers">{$LL.footer.stickers()}</a>
                    <a href="https://docs.kryptokrona.se">{$LL.footer.docs()}</a>
                    <a href="https://github.com/kryptokrona">Github</a>
                </div>
                <div>
                    <h3>Hugin</h3>
                    <a href="https://github.com/kryptokrona/xkr-website/blob/main/static/Whitepaper/Hugin_Whitepaper.pdf">Whitepaper</a>
                    <a href="/faucet">Faucet</a>
                    <a href="https://github.com/kryptokrona/hugin-messenger">Github</a>
                </div>
            </div>
        </div>
</footer>

<style lang="scss">

  footer {
    padding: 80px 0;
    background-color: var(--backgound-color);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 768px){
      &:last-child {
        order: 1;
        div {
          margin-bottom: 2rem;
        }
      }
    }

    @media screen and (max-width: 768px){
      flex-direction: column;
    }
  }

  .footer-navigation {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    @media screen and (max-width: 768px){
      order: 2;
      gap: 2rem;
    }

    div {
      max-width: 100px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      grid-column: span 4/span 4;

      @media screen and (max-width: 768px){
        grid-column: span 4/span 4;
      }

      @media screen and (max-width: 400px){
        grid-column: span 6/span 6;
      }

      @media screen and (max-width: 320px){
        grid-column: span 12/span 12;
      }

      a {
        max-width: 200px;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        transition: 200ms ease-in-out;

        &:hover {
          color: rgba(255, 255, 255, 1);
        }
      }

      h3 {
        margin: 0;
        color: white;
      }
    }
  }
</style>
