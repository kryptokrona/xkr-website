<script>
    export let title
    export let date
    export let category
</script>

<div>
    <p>Category: {category}</p>
    <p>Published: {date}</p>
    <h1>{title}</h1>
    <slot />
</div>

<style lang="scss">
    div {
      margin-top: 200px;
      width: 100%;

      -ms-word-break: break-all;
      word-break: break-all;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
    }

</style>