<script>
    export let text = 'Text'
    export let enabled = false
    export let disabled
    export let rgb = false
    export let info = false
</script>

<button disabled={disabled}
        on:click|preventDefault
        class:enabled
        class:info
        class:border_rgb={rgb}
>{text}</button>

<style lang="scss">
  button {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 0.4rem;
    padding: 9px 10px;
    width: 100px;
    cursor: pointer;
    transition: 250ms ease-in-out;

    &:hover {
      background-color: var(--card-border);
    }
  }

  .enabled {
    background-color: #34b26b;
    border-color: #3fd782;
    color: white;

    &:hover {
      background-color: #3fd782;
    }
  }

  .info {
    background: #5F86F2;
    border: 1px solid #83A4FF;
    color: white;


    &:hover{
      background-color: #83A4FF;
    }
  }
</style>