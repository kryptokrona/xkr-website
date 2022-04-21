<script>

    import {onMount} from "svelte";

    let online
    onMount(async () => {
        const response = await fetch('https://discord.com/api/guilds/562673808582901793/widget.json')
        const data = await response.json()
        online = data.presence_count
    })

</script>

<a class="border_blink" href="https://discord.gg/nRK5k7wYy8" target="_blank">
    <svg class="logo" height="36px" width="36px" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
        <g>
            <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="var(--title-color)" fill-rule="nonzero"></path>
        </g>
    </svg>
    <div class="text">
        <p>{online} online</p>
    </div>
    <div class="circle-wrapper">
        <div class="circle">
            <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1">
                    <path d="M8,0.260551704 C8.24876605,0.260551704 8.48860083,0.35327348 8.67267279,0.520611631 L17.1860659,8.26005993 C17.5947235,8.63156685 17.6248401,9.26401518 17.2533332,9.67267279 C17.2319906,9.69614965 17.2095428,9.71859747 17.1860659,9.73994007 L8.67267279,17.4793884 C8.26401518,17.8508953 7.63156685,17.8207787 7.26005993,17.4121211 C7.09272178,17.2280491 7,16.9882143 7,16.7394483 L6.999,12.9995517 L1,13 C0.44771525,13 -5.9849844e-16,12.5522847 0,12 L0,6 C-6.76353751e-17,5.44771525 0.44771525,5 1,5 L6.999,4.9995517 L7,1.2605517 C7,0.708266954 7.44771525,0.260551704 8,0.260551704 Z" id="Combined-Shape" stroke="var(--card-border)" fill="var(--text-color)"></path>
                </g>
            </svg>
        </div>
    </div>
</a>

<style lang="scss">

    a {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 0.4rem;
      border: 1px solid var(--card-border);
      background-color: var(--card-background);
      padding: 10px 0;
      text-decoration: none;
      transition: 250ms ease-in-out;

      &:hover {
        background-color: #2d2d2d;
        .circle {
          margin-right: 20px;
        }
      }

      p {
        color: var(--title-color);
        width: 200px;
        display: flex;
        justify-content: center;

        span {
          margin-right: 8px;
          color: var(--success-color);
        }
      }

      .logo {
        margin-left: 25px;
      }
    }

    .circle-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
    }

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 30px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--border-color);
      transition: 250ms ease-in-out;

      img {
        margin: 30px;
        height: 18px;
        width: 18px;
        opacity: 60%;
      }
    }

    .border_blink {
      animation: border_blink  2s linear infinite;
    }

    @keyframes border_blink {
      50% {
        border: 1px solid var(--success-color);
      }
    }

</style>