<template>
  <div class="filters">
    <div class="header">filters</div>

    <div class="content">
      <Algorithm />
      <Coin />
      <Equipment />
      <Manufacturer />

      <Input
        class="input"
        :placeholder="lang.minPrice"
      />
      <Input
        class="input"
        :placeholder="lang.maxPrice"
      />
      <Input
        class="input"
        :placeholder="lang.search"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Input from '@/components/Input/Input.vue'
import Algorithm from './Filters/Algorithm.vue'
import Coin from './Filters/Coin.vue'
import Equipment from './Filters/Equipment.vue'
import Manufacturer from './Filters/Manufacturer.vue'

export default {
  name: "Filters",
  components: {
    Input,
    Coin,
    Algorithm,
    Equipment,
    Manufacturer,
  },
  computed: {
    ...mapState({
      lang: (state) => state.lang.main.filters.inputs,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
@import "@/views/Main/main.scss";

.filters {
  position: relative;
  width: 212px;
  height: 628px;

  .header {
    @include main-block-header;
  }

  .content {
    @include main-block-content;
    .input {
      margin-top: 15px;
      ::placeholder {
        text-transform: capitalize;
      }
    }
  }
}
</style>