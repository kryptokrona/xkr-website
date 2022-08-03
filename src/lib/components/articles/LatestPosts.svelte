<script>
    import BlogCard from "./Card.svelte";
    import LL, {locale} from "$i18n/i18n-svelte";
    
    export let latest = []
</script>

<div class="container">
    <div class="latest-header">
        <h2>{$LL.blog.latest()}</h2>
        <a href="/{$locale}/blog">{$LL.buttons.show_all()}</a>
    </div>
</div>
<div class="container latest">
    <div class="roll">
        <div class="wrapper">
            {#each latest as post}
                <BlogCard post={post} loading="lazy"/>
            {/each}
        </div>
    </div>
</div>


<style lang="scss">

  .latest-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .latest {
    box-sizing: border-box;
    margin: 0 auto;

    @media only screen and (min-width: 1000px) {
      max-width: var(--website-max-width);
    }

  }

  .roll {
    box-sizing: border-box;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-bottom: 40px;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .wrapper {
    min-width: 980px;
    max-width: var(--website-max-width);
    display: flex;
    margin-top: 30px;
    box-sizing: border-box;
    gap: 20px;
  }

</style>