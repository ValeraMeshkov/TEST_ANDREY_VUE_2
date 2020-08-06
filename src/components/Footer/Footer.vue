<template>
  <div class="footer">
    <Review />
    <SocialNetworks />
    <Achievements />
  </div>
</template>

<script>

import Review from './components/Review'
import SocialNetworks from './components/SocialNetworks'
import Achievements from './components/Achievements'

export default {

  name: "Header",
  components: {
    Review,
    SocialNetworks,
    Achievements,
  },
};
</script>

<style lang="scss" scoped>

  @import "@/styles/main.scss";

  .footer {
      width: 1440px;
      z-index: 15;
      height: 82px;
      background-color: $background;
      display: flex;
      align-items: center;
      justify-content: space-between;
      
  }
</style>
