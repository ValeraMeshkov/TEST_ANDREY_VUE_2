<template>
  <div class="manufacturer">
    <ButtonDropDown
      class="dropdown"
      :text="lang.name"
      :isOpen="filter.isOpen"
      @open="openFilters('manufacturer')"
    />

    <div
      class="radios"
      v-if="filter.isOpen"
    >
      <InputCheckbox
        @checkbox="changeCheckboxAMD"
        class="radio"
        :placeholder="lang.AMD"
        :value="checkbox.AMD"
      />
      <InputCheckbox
        @checkbox="changeCheckboxBoundary"
        class="radio"
        :placeholder="lang.boundary"
        :value="checkbox.Boundary"
      />
    </div>

    <div
      class="radios"
      v-if="filter.isOpen"
    >
      <InputCheckbox
        @checkbox="changeCheckboxPandaminer"
        class="radio"
        :placeholder="lang.pandaminer"
        :value="checkbox.Pandaminer"
      />
      <InputCheckbox
        @checkbox="changeCheckboxNvidia"
        class="radio"
        :placeholder="lang.nvidia"
        :value="checkbox.Nvidia"
      />
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import InputCheckbox from '@/components/Input/InputCheckbox.vue'
import ButtonDropDown from '@/components/Button/ButtonDropDown.vue'

export default {
  name: "Filters",
  components: {
    ButtonDropDown,
    InputCheckbox,
  },
  computed: {
    ...mapState({
      filter: (state) => state.main.filters.manufacturer,
      checkbox: (state) => state.main.filters.manufacturer.checkboxes,
      lang: (state) => state.lang.main.filters.manufacturer
    }),
  },
  methods: {
    ...mapActions("main", [
      "openFilters",
      "changeCheckboxManufacturer"
    ]),
    changeCheckboxAMD () {
      this.changeCheckboxManufacturer('AMD')
    },
    changeCheckboxBoundary () {
      this.changeCheckboxManufacturer('Boundary')
    },
    changeCheckboxPandaminer () {
      this.changeCheckboxManufacturer('Pandaminer')
    },
    changeCheckboxNvidia () {
      this.changeCheckboxManufacturer('Nvidia')
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.manufacturer {
  .dropdown {
    margin-top: 15px;
    text-transform: capitalize;
  }

  .radios {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

    .radio {
      width: 98px;
    }
  }
}
</style>