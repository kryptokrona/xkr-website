<script>
    export let title
    export let date
    export let category
</script>

<div>
    <p>Category: {category}</p>
    <p>Published: {date}</p>
    <h1>{title}</h1>
</div>

<slot />

<style lang="scss">
    div {
      margin-top: 200px;
    }
</style>