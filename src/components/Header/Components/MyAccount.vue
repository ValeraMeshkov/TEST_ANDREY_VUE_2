<template>
  <div
    class="account"
    @mouseover="active = true"
    @mouseleave="active = false"
    :class="{
      active: active
    }"
  >
    <Icon
      :isHover="false"
      icon="user"
      alt="user"
    />
    <div>MY ACCOUNT</div>
    <Icon
      :isHover="false"
      icon="pixel-arrow-down"
      alt="pixel-arrow-down"
      size="12px"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: "MyAccount",
  components: {
    Icon
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

.account {
  width: 134px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 48px;
  cursor: pointer;
}
.active {
  opacity: 0.7;
}
</style>