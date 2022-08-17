<script>
    import {locale} from "$i18n/i18n-svelte";
    export let post
</script>

<div class="card">
    <div class="card-header">
        <h2>{post.title}</h2>
    </div>
    <div class="card-body">
        <p>{post.summary}</p>
        <a href={`/${$locale}/articles/${post.slug}`}>Read post</a>
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

    .card-header {
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      border-radius: 5px;
      padding: 20px;
      height: 200px;
      max-width: 100%;
      transition: 200ms ease-in-out;

      h2 {
        margin: 0;
      }
    }

    .card-body {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
      align-items: start;
      min-height: 250px;
    }

    &:hover {
      .card-header {
        border-color: var(--success-color);
      }
    }
  }

</style>