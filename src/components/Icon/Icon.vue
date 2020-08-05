<template>
  <div
    @mouseover="active = true"
    @mouseleave="active = false"
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
        active: active && isHover
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
    }
  },
  data () {
    return {
      active: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.icon {
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .active {
    opacity: 0.7;
  }
}
</style>
