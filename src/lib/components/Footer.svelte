<footer>
        <div class="wrapper container">
            <div class="footer-navigation">
                <div>
                    <h3>Site</h3>
                    <a href="/">Home</a>
                    <a href="/wallet">Wallet</a>
                    <a href="/hugin">Hugin</a>
                    <a href="/mining">Mining</a>
                    <a href="https://kryptokrona.se/store/">Store</a>
                    <a href="/about">About</a>
                </div>
                <div>
                    <h3>XKR</h3>
                    <a href="https://explorer.kryptokrona.se">Explorer</a>
                    <a href="https://github.com/kryptokrona/xkr-website/blob/main/static/Whitepaper/Proposal_for_a_New_Nordic_Digital_Currency.pdf">Whitepaper</a>
                    <a href="/blog">Blog</a>
                    <a href="https://github.com/kryptokrona/kryptokrona-stickers">Stickers</a>
                    <a href="https://docs.kryptokrona.se">Docs</a>
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
