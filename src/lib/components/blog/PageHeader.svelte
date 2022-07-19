<script>
    export let title
</script>

<div class="page-header">
    <div class="container">
        <h1>{title}</h1>
        <slot/>
    </div>
</div>

<style lang="scss">
  .page-header {
    background-color: #f7f7f7;
    border-bottom: var(--border-width) solid var(--border-color);
    padding: 60px 0;

    &:first-letter {
      text-transform: capitalize;
    }
  }
</style>