<script>
    import {onMount} from "svelte";
    import playbtn from '/static/googleplay.png'
    import Button from "./buttons/Button.svelte";

    let latest_mac;
    let latest_win;
    let latest_lin;
    let backup = 'https://github.com/kryptokrona/hugin-messenger'
    let file
    onMount(() => {
        fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest")
            .then((response) => response.json())
            .then((data) => {
                let files = data.assets;
                for (file in files) {
                    if (files[file].name.slice(files[file].name.length - 7) === "mac.zip") {
                        latest_mac = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 3) === "exe") {
                        latest_win = files[file].browser_download_url;
                    } else if (files[file].name.slice(files[file].name.length - 8) === "AppImage") {
                        latest_lin = files[file].browser_download_url;
                    }
                }
                console.log(latest_mac, latest_lin, latest_win)
            });
    })

    $: {
        latest_lin = undefined ? latest_lin : backup
        latest_mac = undefined ? latest_mac : backup
        latest_win = undefined ? latest_win : backup
    }

    let desktop = true
    let mobile;
    let terminal;

    const handleClick = input => {
        switch (input) {
            case 'desktop':
                desktop = true
                mobile = false
                terminal = false
                break
            case 'mobile':
                mobile = true
                desktop = false
                terminal = false
                break
        }
    }
</script>

<h2>Download Hugin Messenger</h2>
<div class="btn-wrapper">
    <Button text="Desktop" info={desktop} on:click={() => handleClick('desktop')}/>
    <Button text="Mobile" info={mobile} on:click={() => handleClick('mobile')}/>
</div>
{#if desktop}

    <div class="card">
        <div>
            <h2>Chat on desktop</h2>
            <p>Using our wallet you can store, send and receive Kryptokrona.
                We currently have desktop wallets for Windows, Linux and Mac!</p>
            <div>
                <a href={latest_win}>Windows</a>
                <a href={latest_mac}>Mac</a>
                <a href={latest_lin}>Linux</a>
                <a href="https://github.com/kryptokrona/hugin-messenger">Source</a>
            </div>
        </div>
        <svg viewBox="0 0 336 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-zdj5p1n6mh-1">
                    <stop stop-color="#D4D2C0" offset="0%"></stop>
                    <stop stop-color="#9D9B88" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-18" transform="translate(0.000000, 0.000000)">
                    <g id="Group-3">
                        <path d="M6,0 L330,0 C333.313708,-6.08718376e-16 336,2.6862915 336,6 L336,310 L336,310 L0,310 L0,6 C-4.05812251e-16,2.6862915 2.6862915,1.65959299e-14 6,0 Z" id="Rectangle" fill="url(#linearGradient-zdj5p1n6mh-1)"></path>
                        <path d="M22.4000001,19 L313.6,19 C316.582338,19 319,21.4176624 319,24.4000001 L319,310 L319,310 L17,310 L17,24.4000001 C17,21.4176624 19.4176624,19 22.4000001,19 Z" id="Rectangle-Copy-3" fill="#111111"></path>
                    </g>
                    <rect id="Rectangle-Copy-8" fill="#373737" x="38.8834143" y="39.0652174" width="148.297016" height="49.6118012" rx="4.89659958"></rect>
                    <text id="Hey-bud!" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="49" y="57">Hey bud!</tspan>
                    </text>
                    <rect id="Rectangle-Copy-13" fill="#373737" x="38.8834143" y="171.065217" width="148.297016" height="49.6118012" rx="4.89659958"></rect>
                    <text id="How-are-you?" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="49" y="189">How are you?</tspan>
                    </text>
                    <rect id="Rectangle-Copy-11" fill="#5F86F2" x="149.883414" y="105.065217" width="148.297016" height="49.6118012" rx="4.89659958"></rect>
                    <text id="Hey-bud!-Copy" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="160" y="123">Hey bud!</tspan>
                    </text>
                    <rect id="Rectangle-Copy-15" fill="#5F86F2" x="149.883414" y="237.065217" width="148.297016" height="49.6118012" rx="4.89659958"></rect>
                    <text id="Im-good!-Hru?" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="160" y="255">Im good! Hru?</tspan>
                    </text>
                </g>
            </g>
        </svg>
    </div>

{:else if mobile}

    <div class="card">
        <div>
            <h2>Chat on mobile</h2>
            <p>Using our wallet you can store, send and receive Kryptokrona.
                We currently have desktop wallets for Windows, Linux and Mac!</p>
            <a href="https://play.google.com/store/apps/details?id=com.xkr&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img style="height: 36px" src={playbtn} alt=""></a>
        </div>
        <svg viewBox="0 0 338 301" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Group-17" transform="translate(1.000000, 0.000000)">
                    <g id="Group-16">
                        <path d="M329.766829,0.25 C331.354647,0.25 332.792147,0.893590672 333.832693,1.93413601 C334.873238,2.97468134 335.516829,4.41218134 335.516829,6 L335.516829,6 L335.516829,299.75 L0.25,299.75 L0.25,6 C0.25,4.41218134 0.893590672,2.97468134 1.93413601,1.93413601 C2.97468134,0.893590672 4.41218134,0.25 6,0.25 L6,0.25 Z" id="Rectangle" stroke="#2E2E2E" stroke-width="0.5" fill="#1D1D1D"></path>
                        <path d="M132.674532,13.2763975 L132.674532,34.2391304 L111.689105,34.2391304 L111.689105,13.2763975 L132.674532,13.2763975 Z M120.083276,25.8540373 L115.88619,25.8540373 L115.88619,30.0465839 L120.083276,30.0465839 L120.083276,25.8540373 Z M128.477446,25.8540373 L124.280361,25.8540373 L124.280361,30.0465839 L128.477446,30.0465839 L128.477446,25.8540373 Z" id="Combined-Shape" fill="#5FF281"></path>
                        <text id="AnonMan" font-family="Montserrat-Medium, Montserrat" font-size="16.7883414" font-weight="400" fill="#FFFFFF">
                            <tspan x="144.333102" y="29.2655834">AnonMan</tspan>
                        </text>
                        <rect id="Rectangle" fill="#373737" x="15.8556558" y="67.0807453" width="152.26093" height="49.6118012" rx="4.89659958"></rect>
                        <rect id="Rectangle-Copy-9" fill="#373737" x="15.8556558" y="201.708075" width="152.26093" height="49.6118012" rx="4.89659958"></rect>
                        <rect id="Rectangle-Copy-8" fill="#5F86F2" x="167.883414" y="132.065217" width="148.297016" height="49.6118012" rx="4.89659958"></rect>
                        <line x1="0.116585704" y1="47.1661491" x2="335.883414" y2="47.1661491" id="Line-4" stroke-opacity="0.1" stroke="#FFFFFF" stroke-width="0.5" stroke-linecap="square"></line>
                        <path d="M172.780014,271.065217 L311.28383,271.065217 C313.988148,271.065217 316.18043,273.2575 316.18043,275.961817 L316.18043,300.065217 L316.18043,300.065217 L167.883414,300.065217 L167.883414,275.961817 C167.883414,273.2575 170.075697,271.065217 172.780014,271.065217 Z" id="Rectangle-Copy-10" fill="#5F86F2"></path>
                        <text id="I’m-good!-hru?" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                            <tspan x="178" y="289">I’m good! hru?</tspan>
                        </text>
                        <g id="Group-15" transform="translate(22.734212, 23.408385) rotate(-90.000000) translate(-22.734212, -23.408385) translate(15.855656, 16.537267)" stroke="#6A6A6A" stroke-width="1.86537127">
                            <path d="M0,7.10403727 L6.87855656,1.06417367e-13 L13.7571131,6.87111801 M6.87855656,1.05529188e-13 L6.87855656,13.742236" id="Combined-Shape"></path>
                        </g>
                    </g>
                    <text id="Hey-bud!" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="178" y="150">Hey bud!</tspan>
                    </text>
                    <text id="How-are-you?" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="27" y="220">How are you?</tspan>
                    </text>
                    <text id="Hey-Man!" font-family="Montserrat-Medium, Montserrat" font-size="11" font-weight="400" fill="#FFFFFF">
                        <tspan x="27" y="85">Hey Man!</tspan>
                    </text>
                </g>
            </g>
        </svg>
    </div>
{/if}

<style lang="scss">
  .btn-wrapper {
    display: flex;
    gap: 10px;
    margin: 40px 0;

    @media only screen and (max-width: 360px) {
      flex-direction: column;
    }
  }

  .card {
    background-color: var(--card-background);
    border: 1px solid var(--card-border);
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 0.4rem;
    padding: 40px 40px 0 40px;
    width: 100%;
    max-width: var(--website-width);
    overflow: hidden;
    box-sizing: border-box;

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      padding: 20px 20px 0 20px;
    }

    div {
      max-width: 50%;


      @media only screen and (max-width: 800px) {
        order: 0;
        max-width: 100%;
        text-align: center;
        margin-bottom: 40px;
      }
    }

    h1 {
      margin: 0;
    }

    svg {
      max-width: 450px;

      @media only screen and (max-width: 800px) {
        width: 100%;
        max-width: 100%;
      }
    }
  }
</style>