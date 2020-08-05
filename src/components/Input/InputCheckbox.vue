<template>
  <div class="input-block">
    <input
      type="checkbox"
      :id="placeholder"
      :name="placeholder"
      v-model="checkbox"
    >
    <label
      :class="{
        active: value
      }"
      :for="placeholder"
    >
      {{placeholder}}
    </label>

    <InnerWrapperBlock />

  </div>
</template>

<script>
/**
 * Component Input - Input
 * @module Components/Inputs/Input
 * @vue-prop {Boolean} input
 */

import InnerWrapperBlock from '@/components/InnerWrapperBlock.vue'
export default {
  name: "Input",
  components: {
    InnerWrapperBlock,
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  computed: {
    checkbox: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit("checkbox", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.input-block {
  position: relative;
  width: 100%;
  height: 30px;

  input {
    display: none;
  }

  label {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    align-items: center;
    font-family: Open Sans;
    justify-content: center;
    font-weight: 300;
    font-size: 10px;
    color: #c4c4c4;
    cursor: pointer;
    background: none;
    border: none;
  }

  .active {
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgb(1, 1, 26);
  }
}
</style>
