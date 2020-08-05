<template>
  <div class="algorithm">
    <ButtonDropDown
      class="dropdown"
      text="By Algorithm"
      :isOpen="filter.isOpen"
      @open="openFilters('algorithm')"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ButtonDropDown from '@/components/Button/ButtonDropDown.vue'

export default {
  name: "Filters",
  components: {
    ButtonDropDown
  },
  computed: {
    ...mapState({
      filter: (state) => state.main.filters.algorithm,
    }),
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

.algorithm {
  margin-top: 15px;
}
</style>