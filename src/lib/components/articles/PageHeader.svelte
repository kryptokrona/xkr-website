<script>
    export let title
</script>

<div class="page-header container">
        <h1>{title}</h1>
</div>

<style lang="scss">
  .page-header {
    background-color: var(--backgound-color);
    margin-top: 140px;

    &:first-letter {
      text-transform: capitalize;
    }
  }
</style>