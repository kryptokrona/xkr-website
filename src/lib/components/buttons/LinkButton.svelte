<script>
    export let text = 'Text'
    export let target
    export let url
    export let enabled = false
    export let rgb = false
    export let info = false
</script>

<a href={url}
   target={target}
   class:enabled
   class:info
   class:border_rgb={rgb}
>{text}</a>

<style lang="scss">
  a {
    background-color: var(--card-background);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    border-radius: 0.4rem;
    padding: 9px 20px;
    width: 100px;
    cursor: pointer;
    transition: 250ms ease-in-out;
    text-decoration: none;

    &:hover {
      background-color: var(--card-border);
    }
  }

  .enabled {
    background-color: #3FD782;
    border-color: #63e79f;
    color: #fff;
    font-weight: 600;

    &:hover {
      background-color: #63e79f;
    }
  }

  .info {
    background: #5F86F2;
    border: 1px solid #83A4FF;
    color: white;


    &:hover {
      background-color: #83A4FF;
    }
  }
</style>