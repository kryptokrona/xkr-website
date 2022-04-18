<footer>
    <div class="wrapper">
        <div class="footer-nav-wrapper">
            <div class="footer-nav">
                <h3>Site</h3>
                <a href="/" class="footer-link"><p>Home</p></a>
                <a href="/" class="footer-link"><p>Wallet</p></a>
                <a href="/" class="footer-link"><p>Hugin</p></a>
                <a href="/" class="footer-link"><p>Mining</p></a>
                <a href="/" class="footer-link"><p>About</p></a>
            </div>
            <div class="footer-nav">
                <h3>XKR</h3>
                <a href="/" class="footer-link"><p>Explorer</p></a>
                <a href="/" class="footer-link"><p>Whiteppaper</p></a>
                <a href="/" class="footer-link"><p>Blog</p></a>
                <a href="/" class="footer-link"><p>Guides</p></a>
            </div>
            <div class="footer-nav">
                <h3>Hugin</h3>
                <a href="/" class="footer-link"><p>Webiste</p></a>
                <a href="/" class="footer-link"><p>Whiteppaper</p></a>
                <a href="/" class="footer-link"><p>Faucet</p></a>
                <a href="/" class="footer-link"><p>Github</p></a>
            </div>
        </div>
        <div class="other">
            <p>Developed by Kryptokrona</p>
        </div>
    </div>
</footer>

<style lang="scss">

    footer {
      width: 100%;
      border-top: 1px solid var(--border-color);
      background-color: var(--backgound-color);
      margin-top: 60px;
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      max-width: var(--website-width);
      margin: 0 auto;
      padding: 140px 40px;

      @media only screen and (max-width: 600px) {
        padding: 40px 20px;
      }

    }

    .footer-nav-wrapper {
      display: flex;
      gap: 20px;

      @media only screen and (max-width: 720px) {
        flex-direction: column;
        flex-wrap: wrap;
      }

      div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 120px;

        a {
          text-decoration: none;

          p {
            margin: 0;
            transition: 250ms ease-in-out;
            &:hover {
              color: var(--title-color);
            }
          }
        }

        h3 {
          margin: 0;
        }
      }
    }

    .other {

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        margin: 0;
        text-align: end;
      }

    }

</style>