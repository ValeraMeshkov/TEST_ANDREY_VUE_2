<template>  
  <div class="my-account">
    <img src="@/assets/img/icon/user.svg" alt="user" />
    <div>MY ACCOUNT</div>
    <img
      src="@/assets/img/icon/pixel-arrow-down.svg"
      alt="pixel-arrow-down"
    />
  </div>
</template>

<script>
  export default {
    name: "MyAccount",
  };
</script>

<style lang="scss" scoped>

  @import "@/styles/main.scss";

   .my-account {
    width: 134px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 48px;
    cursor: pointer;
  }
</style>