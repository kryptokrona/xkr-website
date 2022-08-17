<script>
    import {network} from "../stores/store.js";
    import LL from "$i18n/i18n-svelte";
</script>

<div class="wrapper">
    <div class="text-wrapper">
        <p><span style="opacity: 100%; color: white">💰</span> {$network.supply} XKR</p>
        <p>{$network.percentage}%</p>
    </div>
    <div class="goal">
        <div style="width: {$network.percentage}%" class="progress"></div>
    </div>
    <div class="status">
        <div class="status-card">
            <h3 class="status-title">{$LL.components.statusBar.height()}</h3>
            <p class="status-text">{$network.blockHeight}</p>
        </div>
        <div class="status-card">
            <h3 class="status-title">{$LL.components.statusBar.hashrate()}</h3>
            <p class="status-text">{($network.hashrate / 1000000).toFixed(2)} MH/s</p>
        </div>
        <div class="status-card">
            <h3 class="status-title">{$LL.components.statusBar.nodes()}</h3>
            <p class="status-text last">{$network.nodes}</p>
        </div>
    </div>
</div>

<style lang="scss">

  .wrapper {
    width: 100%;
  }

    .text-wrapper {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .goal {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 10px;
      border-radius: 10px;
      background-color: var(--border-color);
      width: 100%;
      padding: 1px;

      .progress {
        animation: load 3s normal forwards;
        box-shadow: 0 10px 40px -10px #ffffff;
        background-color: var(--success-color);
        height: 8px;
        border-radius: 10em;
        width: 8%;
        transition: all 3s;
      }
    }

    .status {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      p {
        color: var(--success-color);
      }
    }

    .last {
      text-align: right;
    }
</style>