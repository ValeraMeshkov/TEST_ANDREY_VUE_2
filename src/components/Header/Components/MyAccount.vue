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
    <div class="text">{{lang}}</div>
    <Icon
      :isHover="false"
      icon="pixel-arrow-down"
      alt="pixel-arrow-down"
      size="12px"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  },
  computed: {
    ...mapState({
      lang: (state) => state.lang.header.acc,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.account {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 48px;
  cursor: pointer;
  .text {
    text-transform: uppercase;
    padding: 3px 5px 0;
    font-family: "Exo-bold", sans-serif;
  }
}
.active {
  opacity: 0.7;
}
</style>