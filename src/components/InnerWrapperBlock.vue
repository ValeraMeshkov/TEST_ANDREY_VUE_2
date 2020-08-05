<template>
  <div class="block">
    <div class="topLeft"></div>
    <div class="topRight"></div>
    <div class="bottomLeft"></div>
    <div class="bottomRight"></div>
  </div>
</template>

<script>
export default {
  name: "InnerWrapperBlock",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.block {
  position: absolute;
  background-color: #ffffff1a;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include wrapper_block;
}
</style>
