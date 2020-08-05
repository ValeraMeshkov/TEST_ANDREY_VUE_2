<template>
  <div class="coins">
    <ButtonDropDown
      class="dropdown"
      text="By Coin"
      :isOpen="filter.isOpen"
      @open="openFilters('coin')"
    />
    <div
      class="items"
      v-if="filter.isOpen"
    >
      <div
        v-for="item in coins"
        :key="item"
        class="item"
      >
        <InnerWrapperBlock />

        <Icon
          size="30px"
          :isHover="false"
          class="dots"
          :icon="item"
          directory="coins"
        />

        <div class="text">{{item}}</div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InnerWrapperBlock from '@/components/InnerWrapperBlock.vue'
import Icon from '@/components/Icon/Icon.vue'
import ButtonDropDown from '@/components/Button/ButtonDropDown.vue'

export default {
  name: "Filters",
  components: {
    ButtonDropDown,
    InnerWrapperBlock,
    Icon
  },
  computed: {
    ...mapState({
      filter: (state) => state.main.filters.coin,
    }),
  },
  data () {
    return {
      coins: ['btc', 'ppc', 'etp', 'btc', 'ppc', 'etp']
    }
  },
  methods: {
    ...mapActions("main", [
      "openFilters",
    ]),
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.coins {
  margin-top: 15px;
  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-top: 12px;
      width: 63px;
      height: 83px;

      .text {
        margin-top: 10px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        color: #c4c4c4;
        text-transform: uppercase;
      }
    }
  }
}
</style>