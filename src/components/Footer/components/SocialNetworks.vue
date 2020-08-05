<template>
  <div class="social-networks">
    <a href="https://www.facebook.com/">
      <div class="wrapper">
        <img src="@/assets/img/icon/facebook.svg" alt="achievment">
      </div>
    </a>
    <a href="https://twitter.com/">
      <div class="wrapper">
        <img src="@/assets/img/icon/twitter.svg" alt="achievment">
      </div>
    </a>
    <a href="https://www.youtube.com/">
      <div class="wrapper">
        <img src="@/assets/img/icon/youtube.svg" alt="achievment">
      </div>
    </a>
    <a href="https://www.reddit.com/">
      <div class="wrapper">
        <img src="@/assets/img/icon/reddit.svg" alt="achievment">
      </div>
    </a>
  </div>
</template>

<script>

export default {

  name: "SocialNetworks",
};
</script>

<style lang="scss" scoped>

  @import "@/styles/main.scss";

  .social-networks {
    display: flex;
    justify-content: space-between;
    width: 165px;
    margin-left: -20px;
    .wrapper {
      width: 30px;
      height: 30px;
      background: #ffffff1a;
      mix-blend-mode: normal;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
   
</style>