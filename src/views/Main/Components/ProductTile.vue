<template>
  <div class="product-tile">
    <InnerWrapperBlock />
    <div class="header">
      <div class="header-name">
        <h3>{{product.name}}</h3>
        <h3>{{product.characteristic}}</h3>
      </div>
      <img class="star-product" 
           src="@/assets/img/icon/star-product.svg" 
           alt="star-product"
           v-if="star" 
           />
    </div>
    <div class="wrapper_main-img">
      <img
        class="main-img"
        :src="require(`@/assets/img/product_image/${srcMainimg()}`)"
        :alt="srcMainimg()"
      />
    </div>
    <div class="footer">
      <div class="price">{{price}}</div>
      <div v-if="preOrder" class="pre-order">{{checkPreOrder}}</div>
      <div v-else class="sale">{{previousPrice}}</div>
      <div class="psu">{{checkPsu()}}</div>
    </div>
  </div>
</template>

<script>
import {} from "vuex";

import InnerWrapperBlock from "@/components/InnerWrapperBlock";

export default {
  name: "ProductTile",
  props: {
    product: Object
  },
  components: {
    InnerWrapperBlock
  },
  data() {
    return {
      price: this.product.price,
      star: this.product.star,
      psu: this.product.psu,
      preOrder: this.product.preOrder,
      sale: this.product.sale,
      previousPrice: "",
    };
  },
  computed: {
    checkPreOrder: function() {
      return this.preOrder ? "Pre-Order" : "";
    },
  },
  methods: {
    srcMainimg: function() {
      return this.product.img;
    },
    checkPsu: function() {
      return this.psu ? "PSU" : "";
    }
  },
  beforeMount() {
    if (this.sale) {
      this.previousPrice = this.price;
      this.price = this.sale;
    }
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
  direction: ltr;
  cursor: pointer;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 14.5px 15px 0 15px;
    .header-name {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: Open Sans;
      font-size: 12px;
      line-height: 15px;
      color: #c4c4c4;
    }
    .star-product {
    }
  }
  .wrapper_main-img {
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
  }
  .footer {
    display: flex;
    align-items: center;
    .price {
      font-family: Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 48px;
      color: #ffffff;
      margin-left: 15px;
    }
    .pre-order {
      font-family: Open Sans;
      font-size: 10px;
      line-height: 15px;
      color: #c4c4c4;
      margin-left: 12px;
    }
    .sale {
      font-family: Open Sans;
      font-size: 13px;
      line-height: 48px;
      text-decoration-line: line-through;
      color: #c4c4c4;
      margin-left: 13px;
    }
    .psu {
      position: absolute;
      right: 0;
      font-family: Open Sans;
      font-size: 10px;
      line-height: 15px;
      color: #00a651;
      margin-right: 13px;
    }
  }
}
</style>