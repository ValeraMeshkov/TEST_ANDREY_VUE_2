<template>
  <div class="new-listings">
    <div class="header">
      <h2>NEW LISTINGS</h2>
    </div>
    <div class="scroll"></div>
    <div class="products">
      <div class="wrapper_product-tile">
        <ProductTile v-for="(item, i) in newProducts" :key="i" :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductTile from "./ProductTile";

export default {
  name: "NewListings",
  props: {},
  components: {
    ProductTile
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      newProducts: state => state.newProducts
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.new-listings {
  width: 248px;
  height: 747px;
  user-select: none;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    h2 {
      @include main-block-header;
      margin-left: 35px;
    }
  }
  .products {
    width: 457px;
    height: 699px;
    overflow-y: scroll;
    direction: rtl;
    padding-left: 30px;
    .wrapper_product-tile {
      display: flex;
      flex-direction: column;
      direction: ltr;
    }
  }
  .scroll {
    position: absolute;
    width: 2px;
    height: 699px;
    background: #ffffff;
    opacity: 0.2;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    margin-left: 2px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff;
  }
}
</style>