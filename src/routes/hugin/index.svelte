<script>
    import { draw } from 'svelte/transition'
    import {quadInOut} from "svelte/easing";
    import StatusBar from "../../lib/components/StatusBar.svelte";
    import Faucet from "../../lib/components/Faucet.svelte";

</script>
<svg class="hugin" width="100%" height="100%" viewBox="0 0 240 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="HUGIN" class="rgbStroke" transform="translate(0.768000, 0.880000)" fill-rule="nonzero" stroke="#FFFFFF">
            <polygon in:draw="{{duration: 3500, easing: quadInOut}}" id="Path" points="44.784 0.72 44.784 51.12 35.424 51.12 35.424 29.52 9.36 29.52 9.36 51.12 0 51.12 0 0.72 9.36 0.72 9.36 21.528 35.424 21.528 35.424 0.72"></polygon>
            <path in:draw="{{duration: 3500, easing: quadInOut}}" d="M79.992,51.84 C73.032,51.84 67.608,49.884 63.72,45.972 C59.832,42.06 57.888,36.456 57.888,29.16 L57.888,0.72 L67.248,0.72 L67.248,28.8 C67.248,38.688 71.52,43.632 80.064,43.632 C88.56,43.632 92.808,38.688 92.808,28.8 L92.808,0.72 L102.024,0.72 L102.024,29.16 C102.024,36.456 100.092,42.06 96.228,45.972 C92.364,49.884 86.952,51.84 79.992,51.84 Z" id="Path"></path>
            <path in:draw="{{duration: 3500, easing: quadInOut}}" d="M149.544,25.344 L158.4,25.344 L158.4,45.432 C155.808,47.496 152.784,49.08 149.328,50.184 C145.872,51.288 142.32,51.84 138.672,51.84 C133.536,51.84 128.904,50.724 124.776,48.492 C120.648,46.26 117.408,43.176 115.056,39.24 C112.704,35.304 111.528,30.864 111.528,25.92 C111.528,20.976 112.704,16.536 115.056,12.6 C117.408,8.664 120.66,5.58 124.812,3.348 C128.964,1.116 133.632,1.13686838e-13 138.816,1.13686838e-13 C143.04,1.13686838e-13 146.88,0.696 150.336,2.088 C153.792,3.48 156.696,5.52 159.048,8.208 L153.144,13.968 C149.304,10.128 144.672,8.208 139.248,8.208 C135.696,8.208 132.54,8.952 129.78,10.44 C127.02,11.928 124.86,14.016 123.3,16.704 C121.74,19.392 120.96,22.464 120.96,25.92 C120.96,29.28 121.74,32.304 123.3,34.992 C124.86,37.68 127.02,39.792 129.78,41.328 C132.54,42.864 135.672,43.632 139.176,43.632 C143.112,43.632 146.568,42.768 149.544,41.04 L149.544,25.344 Z" id="Path"></path>
            <polygon in:draw="{{duration: 3500, easing: quadInOut}}" id="Path" points="170.712 0.72 180.072 0.72 180.072 51.12 170.712 51.12"></polygon>
            <polygon in:draw="{{duration: 3500, easing: quadInOut}}" id="Path" points="238.464 0.72 238.464 51.12 230.76 51.12 202.968 16.992 202.968 51.12 193.68 51.12 193.68 0.72 201.384 0.72 229.176 34.848 229.176 0.72"></polygon>
        </g>
    </g>
</svg>
<div class="text-wrapper">
    <h1>Privacy is key, opt-out from any form of surveillance.</h1>
    <p>Hugin uses a decentralized structure that makes cryptocurrencies work, meaning that the system cannot be taken down or be controlled by any one entity. By the use of military grade encryption, your messages are safe from the prying eyes of others.</p>
    <p>Powered by Kryptokrona</p>
</div>
<StatusBar/>
<Faucet/>


<style lang="scss">

  .hugin {
  }

    .text-wrapper {
        text-align: center;
      margin-top: 40px;
    }

</style>