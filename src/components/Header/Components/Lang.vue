<template>
  <div
    class="lang"
  >
    <Icon
      :isHover="true"
      :isActive="true"
      icon="planet-earth"
      alt="planet-earth"
      size="23px"
    />
    <span @click="changeLang('en')">ENG</span>
    <!-- <button @click="changeLang('ru')">ru</button> -->
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: "Lang",
  components: {
    Icon
  },
  data () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.lang {
  width: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 14px;
    line-height: 48px;
    color: $white;
  }
}
</style>