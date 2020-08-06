<template>
  <div class="news">
    <div class="header">
      <h2>NEWS</h2>
    </div>
    <div class="main">
      <InnerWrapperBlock />
      <div class="switch">
        <img src="@/assets/img/icon/square-point.svg" alt="square">
        <img src="@/assets/img/icon/square.svg" alt="square">
        <img src="@/assets/img/icon/square.svg" alt="square">
      </div>
      <img src="@/assets/img/baner/banner1.svg" alt="" class="banner">
    </div>
  </div>
</template>

<script>
import {} from "vuex";

import InnerWrapperBlock from "@/components/InnerWrapperBlock";


export default {
  name: "News",
  props: {
  },
  components: {
    InnerWrapperBlock
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

  @import "@/styles/main.scss";
  @import "@/views/Main/main.scss";

  .news {
    width: 209px;
    height: 747px;
    .header {
      h2 {
        @include main-block-header;
        margin-bottom: 20px;
      }
    }
    .main {
      position: relative;
      height: 699px;
      width: 209px;
      .switch {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50px;
        bottom: 0;
        right: 0;
        margin: 0 17px 16px 0;
      }
    }
  }
</style>