<template>
  <div
    @mouseover="active = true"
    @mouseleave="isActive === true ? active = true : active = false"
    @click.stop="$emit('click')"
    class="icon"
    :style="{
      width: size,
      height: size,
      padding: padding
    }"
  >
    <img
      :class="{
        active: active && isHover,
        pointer: cursorPointer,
      }"
      :src="require(`@/assets/img/${directory}/${icon}.svg`)"
    />
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    directory: {
      type: String,
      default: "icon"
    },
    alt: {
      type: String,
      default: "img"
    },
    icon: {
      type: String,
      default: "sync"
    },
    size: {
      type: String,
      default: "20px"
    },
    padding: {
      type: String,
      default: "0px"
    },
    isHover: {
      type: Boolean,
      default: true
    },
    isActive: {
      type: Boolean,
      default: false
    },
    cursorPointer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      active: this.isActive
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.icon {
  display: flex;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    opacity: 0.7;
  }
  .active {
    opacity: 1;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
