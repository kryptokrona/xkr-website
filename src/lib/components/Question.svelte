<script>
    let open = false
    const handleClick = () => {
        open = !open
    }

</script>

<div class:open={open} class="card" on:click={handleClick}>
    <div>
        <h3>What is the max supply?</h3>
    </div>
    <p>This is my text</p>
</div>

<style lang="scss">
    .card {
      display: flex;
      flex-direction: column;
      background-color: var(--card-background);
      border: 1px solid var(--card-border);
      border-radius: 0.4rem;
      box-sizing: border-box;
      padding: 20px;
      height: 60px;
      width: 100%;
      overflow: hidden;
      transition: 250ms ease-in-out;
    }

    h3 {
      margin: 0;
    }

    .open {
      transition: 250ms ease-in-out;
        height: auto;
    }
</style>