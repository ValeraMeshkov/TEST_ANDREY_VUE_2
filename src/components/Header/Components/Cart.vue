<template>
  <div class="cart">
    <div class="counter">0</div>
    <img src="@/assets/img/icon/basket.svg" alt="cart" />
  </div>
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style lang="scss" scoped>

    @import "@/styles/main.scss";

    .cart {
      width: 42px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
</style>