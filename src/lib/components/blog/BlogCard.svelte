<script>
    import {getAssetURL} from "../../get-asset-url.js";
    import {locale} from "../../../i18n/i18n-svelte.js";

    export let post
    export let loading
</script>

<div class="card">
    <div class="card-header">
        <img src="{getAssetURL(post.image)}" alt="thumbnail" loading="{loading}">
    </div>
    <div class="card-body">
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <a href={`/${$locale}/blog/${post.slug}`}>Read post</a>
    </div>
</div>


<style lang="scss">


  .card {
    grid-column: span 4/span 4;
    width: 100%;
    min-width: 300px;
    border-radius: var(--border-radius);
    overflow: hidden;

    @media screen and (max-width: 1024px){
      grid-column: span 6/span 6;
    }

    .card-header img {
      border-radius: var(--border-radius);
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      align-items: start;
      min-height: 250px;

      h2 {
        margin: 0;
      }
    }
  }

</style>