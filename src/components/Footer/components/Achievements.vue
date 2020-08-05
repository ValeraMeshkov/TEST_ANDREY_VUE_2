<template>
  <div class="achievements">
      <img src="@/assets/img/icon/achievment-gold.svg" alt="achievment-gold">
      <img src="@/assets/img/icon/achievment-silver.svg" alt="achievment-silver">
      <img src="@/assets/img/icon/achievment-platinum.svg" alt="achievment-platinum">
      <img src="@/assets/img/icon/achievment-bronze.svg" alt="achievment-bronze">
  </div>
</template>

<script>

export default {

  name: "Achievements",
};
</script>

<style lang="scss" scoped>

  @import "@/styles/main.scss";

  .achievements {
    width: 167px;
    margin-right: 30px;
    display: flex;
    justify-content: space-between;
  }
</style>