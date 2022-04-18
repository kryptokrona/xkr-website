<script>
    export let text
    export let url
    export let target
</script>

<a class="rgbBorder" href={url} target={target}>
    {text}
</a>

<style lang="scss">

    a {
      border: 2px solid #5f86f2;
      padding: 8px 15px;
      border-radius: 5px;
      color: var(--nav-link-color);
      text-decoration: none;
    }

</style>