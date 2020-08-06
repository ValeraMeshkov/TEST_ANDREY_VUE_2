<template>
  <div class="on-sale">
    <div class="header">
      <h2>ON SALE</h2>
      <div class="display">
        <div class="change-display">
          <div class="view">View</div>
          <div class="name">Grid</div>
        </div>
        <img class="combined" src="@/assets/img/icon/combined.svg" alt="combined" />
        <img src="@/assets/img/icon/delimeter-vertically.svg" alt="delimeter-vertically" />
      </div>
    </div>
    <div class="scroll"></div>
    <div class="products">
      <ProductTile v-for="(item, i) in products" :key="i" :product="item" />
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
@import "@/views/Main/main.scss";

.on-sale {
  width: 491px;
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
    .display {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 92px;
      .change-display {
        display: flex;
        justify-content: space-between;
        font-family: Exo;
        font-size: 10px;
        line-height: 48px;
        .view {
          color: #c4c4c4;
          margin-right: 7px;
        }
        .name {
          color: #ffffff;
        }
      }
      .combined {
        cursor: pointer;
      }
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
    padding-left: 30px;
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