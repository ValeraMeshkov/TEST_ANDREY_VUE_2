<template>
  <div class="lang">
    <img class="planet-earth" src="@/assets/img/icon/planet-earth.svg" alt="planet-earth" />
    <span @click="changeLang('en')">ENG</span>
    <!-- <button @click="changeLang('ru')">ru</button> -->
  </div>
</template>

<script>
export default {
  name: "Lang"
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.lang {
  width: 62px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-size: 14px;
    line-height: 48px;
    color: $white;;
  }
}
</style>