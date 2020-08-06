<template>
  <div class="equipment">
    <ButtonDropDown
      class="dropdown"
      :text="lang"
      :isOpen="filter.isOpen"
      @open="openFilters('equipment')"
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
      filter: (state) => state.main.filters.equipment,
      lang: (state) => state.lang.main.filters.equipment,
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

.equipment {
  margin-top: 15px;
  .dropdown {
    text-transform: capitalize;
  }
}
</style>