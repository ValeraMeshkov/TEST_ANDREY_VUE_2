<template>
  <div class="nav">

    <div class="left">
      <img
        class="logo-rex"
        src="@/assets/img/logo/logo-rex.svg"
        alt="logo-rex"
      />
      <Lang />
    </div>

    <div class="center">
      <Icon
        icon="hamburger-open"
        alt="hamburger-open"
        size="25px"
        @click="openMenu"
      />
      <Menu
        v-if="isOpenMenu"
        @close="isOpenMenu = false"
      />
    </div>

    <div class="right">
      <MyAccount />
      <Icon
        class="dots"
        :isHover="false"
        size="15px"
        icon="delimeter-vertically"
      />
      <Icon
        icon="balance"
        alt="balance"
      />
      <Icon
        size="15px"
        :isHover="false"
        class="dots"
        icon="delimeter-vertically"
      />
      <Icon
        icon="bell"
        alt="bell"
      />
      <Icon
        size="15px"
        :isHover="false"
        class="dots"
        icon="delimeter-vertically"
      />
      <Icon
        icon="basket"
        alt="basket"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from '@/components/Icon/Icon.vue'
import Lang from "./Components/Lang.vue";
import Menu from "./Components/Menu.vue";
import MyAccount from "./Components/MyAccount.vue";

export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: {
    Lang,
    Menu,
    MyAccount,
    Icon
  },
  data () {
    return {
      isOpenMenu: false,
    };
  },
  computed: {
    ...mapState({
      lang: (state) => state.lang.header,
    }),
  },
  methods: {
    ...mapActions({
      changeLang: "changeLang",
    }),
    openMenu () {
      this.isOpenMenu = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.nav {
  height: 88px;
  width: 1440px;
  background-color: $background;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    margin: -5px 0 0 32px;
    width: 163px;
    display: flex;
    justify-content: space-between;
  }
  .center {
    margin-left: 146px;
    margin-top: -3px;
  }
  .right {
    width: 312px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 28px;
    margin-top: -12px;
    color: $white;
  }
}
</style>
