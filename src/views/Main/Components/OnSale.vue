<template>
  <div class="on-sale">
    <header>
      <h2>ON SALE</h2>
      <div class="view"></div>
    </header>
    <div class="products">
      <ProductTile v-for="(item, i) in products" :key="i" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import ProductTile from "./ProductTile";

export default {
  name: "OnSale",
  props: {},
  components: {
    ProductTile
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.on-sale {
  width: 491px;
  height: 747px;
  header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-family: Exo-medium;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 48px;
      color: #ffffff;
    }
  }
  .products {
    width: 457px;
    height: 699px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;
    direction: rtl;
  }
  ::-webkit-scrollbar-button {
    background-image: url("");
    background-repeat: no-repeat;
    width: 5px;
    height: 0px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ecedee;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 0px;
    border-radius: 0px;
    background-color: #6dc0c8;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #56999f;
  }

  ::-webkit-resizer {
    background-image: url("");
    background-repeat: no-repeat;
    width: 4px;
    height: 0px;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }
}
</style>