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
      margin: 200px auto 150px auto;
      width: 100%;

      -ms-word-break: break-word;
      word-break: break-word;

      -webkit-hyphens: auto;
      -moz-hyphens: auto;
      hyphens: auto;
    }

</style>