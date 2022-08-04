
<div>
    <div class="text">
        <h2>Swag up</h2>
    </div>
    <div class="grid">
        <a href="https://store.kryptokrona.org/swag/mug" target="_blank">
            <img class="card" src="/mug.png" alt="Kryptokrona mug">
        </a>
        <a href="https://store.kryptokrona.org/swag/hat" target="_blank">
            <img class="card" src="/hat.png" alt="Kryptokrona hat">
        </a>
        <a href="https://store.kryptokrona.org/swag/mousepad" target="_blank">
            <img class="card" src="/mousepad.png" alt="Kryptokrona mousepad">
        </a>
    </div>
</div>


<style lang="scss">

  .grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;

    a {
      width: 100%;
      grid-column: span 4 / span 4;

      @media screen and (max-width: 568px){
        grid-column: span 12 / span 12;

        &:last-child {
          display: none;
        }
      }

      img {
        padding: 20px;
        width: 100%;
        height: auto;
        background-color: var(--card-background);
        border-radius: 0.4rem;
        border: 1px solid var(--card-border);
        transition: 200ms ease-in-out;

        &:hover, :active {
          border-color: var(--success-color);
        }
      }
    }
  }

  .text {

    @media screen and (max-width: 1000px) {
      text-align: center;
    }

    h2 {
      font-size: 3rem;

      @media screen and (max-width: 568px) {
        font-size: 2rem;
      }
    }
  }
</style>