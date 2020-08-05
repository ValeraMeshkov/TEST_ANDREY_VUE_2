<template>
  <div
    class="button-block"
    @mouseover="active = true"
    @mouseleave="active = false"
    :class="{
      active: active || isOpen
    }"
    @click="$emit('open')"
  >
    <InnerWrapperBlock />
    <div class="content">

      <div class="text">{{text}}</div>

      <Icon
        v-if="isOpen"
        :isHover="false"
        icon="pixel-arrow-down"
        alt="pixel-arrow-down"
        size="12px"
      />
      <Icon
        v-else
        :isHover="false"
        icon="pixel-arrow-up"
        alt="pixel-arrow-up"
        size="12px"
      />
    </div>
  </div>
</template>

<script>
/**
 * Component Input - Input
 * @module Components/Inputs/Input
 * @vue-prop {Boolean} input
 */

import InnerWrapperBlock from '@/components/InnerWrapperBlock.vue'
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: "Input",
  components: {
    InnerWrapperBlock,
    Icon
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      active: false
    };
  },
  computed: {
    input: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.button-block {
  position: relative;
  height: 30px;
  cursor: pointer;

  .content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    text-align: left;
    font-family: Open Sans;
    font-weight: 300;
    font-size: 12px;
    color: #c4c4c4;
    cursor: pointer;
    background: none;
    border: none;
  }
}

.active {
  opacity: 0.7;
}
</style>
