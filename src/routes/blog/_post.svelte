<script>
    export let title
    export let date
    export let category
</script>

<div>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <p>Category: {category}</p>
</div>

<slot />

<style lang="scss">

    div {
      border-bottom: 1px solid var(--border-color);
    }

</style>