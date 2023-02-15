<script lang="ts">
  import type { CardResponse } from "../models/card";

  export let item: CardResponse = {
    key: '101',
    suit: '♠',
    value: 'A',
    color: '#DD5964'
  }


</script>


<div class="card card__size">
  <div class="cardType__top">
    <p color={item.color}>
      {item.suit} {item.value}
    </p>
  </div>
  <div class="card__content">
  </div>
  <div class="cardType__bottom">
    <p color={item.color}>
      {item.suit} {item.value}
    </p>
  </div>
</div>

<style scoped>
  .card {
    background-color: pink;
    box-shadow: 0ch;
    border-radius: 10px;
    box-shadow: 10px 5px 5px red;
    position: relative;
  }

  .card__size {
    height: 150px;
    width: 75px;
  }

  .cardType__top {
    display: flex;
    margin: -2em -1em;
    align-content: top;
    justify-content: left;
    position: absolute;
  }

  .cardType__bottom {
    display: flex;
    margin: 8em -1em 2em 3em;
  }

  @media screen and (max-width: 400px) {
    .card {

    }
  }
</style>