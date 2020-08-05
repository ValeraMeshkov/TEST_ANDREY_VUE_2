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
      <img
        class="hamburger-open"
        src="@/assets/img/icon/hamburger-open.svg"
        alt="hamburger-open"
        @click="openMenu"
      />
      <Menu v-if="isOpenMenu" @close="isOpenMenu = false" />
    </div>

    <div class="right">
      <MyAccount />
      <img
        src="@/assets/img/icon/delimeter-vertically.svg"
        alt="delimeter-vertically"
      />
      <Balance />
      <img
        src="@/assets/img/icon/delimeter-vertically.svg"
        alt="delimeter-vertically"
      />
      <Bell />  
      <img
        src="@/assets/img/icon/delimeter-vertically.svg"
        alt="delimeter-vertically"
      />
      <Cart />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Lang from "./Components/Lang.vue";
import Menu from "./Components/Menu.vue";
import Bell from "./Components/Bell.vue";
import Balance from "./Components/Balance.vue";
import MyAccount from "./Components/MyAccount.vue";
import Cart from "./Components/Cart.vue";

export default {
  name: "Header",
  props: {
    msg: String,
  },
  components: {
    Lang,
    Menu,
    Bell,
    Balance,
    MyAccount,
    Cart,
  },
  data() {
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
    openMenu() {
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
    .hamburger-open {
      cursor: pointer;
    }
  }
  .right {
    width: 312px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    margin-right: 28px;
    margin-top: -12px;
    color: $white;
  }
}
</style>
