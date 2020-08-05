<template>
  <div class="main">
    <Filters />
    <OnSale />
    <NewListings />
    <News />
  </div>
</template>

<script>
import {} from "vuex";

import Filters from "./Components/Filters.vue";
import NewListings from "./Components/NewListings.vue";
import News from "./Components/News.vue";
import OnSale from "./Components/OnSale.vue";


export default {
  name: "Main",
  props: {
  },
  components: {
    Filters,
    NewListings,
    News,
    OnSale,
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

  .main {
    background-color: $background;
    width: 1440px;
    height: 910px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>