<template>
  <div class="product-tile">
    <InnerWrapperBlock />

  </div>
</template>

<script>
import {} from "vuex";

import InnerWrapperBlock from "@/components/InnerWrapperBlock";


export default {
  name: "ProductTile",
  props: {
  },
  components: {
    InnerWrapperBlock,
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

  .product-tile {
    position: relative;
    width: 213px;
    height: 213px;
    margin-bottom: 27px;
  }
</style>