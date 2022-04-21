<script>
    import {fade, fly} from "svelte/transition";
</script>

<div in:fly out:fly="{{delay: 750}}" class="backdrop" on:click>
    <div class="nav-mobile-wrapper">
        <div class="empty"></div>
        <div class="navigation">
            <a class="mobile-link" in:fade="{{delay: 250, duration: 500}}" out:fade="{{delay: 550}}" href="/">Wallet</a>
            <a class="mobile-link" in:fade="{{delay: 350, duration: 500}}" out:fade="{{delay: 450}}" href="/hugin">Hugin</a>
            <a class="mobile-link" in:fade="{{delay: 450, duration: 500}}" out:fade="{{delay: 350}}" href="/mining">Mining</a>
            <a class="mobile-link" in:fade="{{delay: 550, duration: 500}}" out:fade="{{delay: 250}}" href="/blog">Blog</a>
            <a class="mobile-link" in:fade="{{delay: 650, duration: 500}}" out:fade="{{delay: 150}}" href="/about">About</a>
        </div>
        <div class="socials">
            <a class="github" href="https://github.com/kryptokrona/kryptokrona" target="_blank">
                <svg width="16px" height="16px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Linear" stroke="none" stroke-width="1" fill="#f2cb5f" fill-rule="evenodd">
                        <g id="Support,-Like,-Question" transform="translate(-109.000000, -189.000000)">
                            <g id="star" transform="translate(108.000000, 188.000000)">
                                <path d="M15.4899702,7.03001499 C15.7299702,7.520015 16.3699703,7.9900147 16.9099703,8.08001471 L20.0999699,8.61001444 C22.1399698,8.95001444 22.6199691,10.4300146 21.1499691,11.8900146 L18.6699696,14.3700142 C18.2499696,14.7900142 18.0199691,15.6000146 18.1499691,16.1800146 L18.8599701,19.2500153 C19.4199701,21.6800153 18.1299701,22.6200156 15.97997,21.3500156 L12.9899702,19.5800152 C12.4499702,19.2600152 11.5599707,19.2600152 11.0099707,19.5800152 L8.01997042,21.3500156 C5.87997031,22.6200156 4.57997006,21.6700153 5.13997006,19.2500153 L5.8499701,16.1800146 C5.9799701,15.6000146 5.74997011,14.7900142 5.32997012,14.3700142 L2.84997004,11.8900146 C1.38997,10.4300146 1.85997033,8.95001444 3.89997029,8.61001444 L7.08997011,8.08001471 C7.61997008,7.9900147 8.25996996,7.520015 8.49996996,7.03001499 L10.2599707,3.51001465 C11.2199706,1.60001469 12.77997,1.60001469 13.72997,3.51001465 L15.4899702,7.03001499 Z" id="Vector" stroke="#f2cb5f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0,0" fill-rule="nonzero"></path>
                                <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z" id="Vector" opacity="0"></path>
                            </g>
                        </g>
                    </g>
                </svg> Star us on Github</a>
        </div>
    </div>
</div>

<style lang="scss">

  .backdrop {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backgound-color);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .nav-mobile-wrapper {
    box-sizing: border-box;
    padding: 40px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

  }

  .mobile-link {
    text-decoration: none;
    color: var(--nav-link-color);
    font-size: 2rem;
    transition: 200ms ease-in-out;

    &:hover {
      color: rgb(129, 129, 129);
    }
  }

  .github {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px 5px;
    border-radius: 5px;
    width: 170px;
    gap: 10px;
    font-size: 1rem;
    color: var(--text-color);
    text-decoration: none;
    transition: 250ms ease-in-out;

    &:hover {
      color: var(--nav-link-color);
      background-color: var(--text-color);
    }
  }
</style>