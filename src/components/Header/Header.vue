<template>
  <div id="nav">
    <div class="left">
      <button>{{lang.company}}</button>
      <button @click="changeLang('en')">en</button>
      <button @click="changeLang('ru')">ru</button>
    </div>

    <div class="center">
      <button @click="openMenu">open</button>
      <Menu
        v-if="isOpenMenu"
        @close="isOpenMenu = false"
      />
    </div>

    <div class="right">

      <button>мой</button>
      <button>кошелек</button>
      <button>колокол</button>
      <button>корзина</button>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Menu from './Components/Menu.vue'

export default {
  name: "Header",
  props: {
    msg: String
  },
  components: {
    Menu
  },
  data () {
    return {
      isOpenMenu: false
    }
  },
  computed: {
    ...mapState({
      lang: state => state.lang.header,
    }),
  },
  methods: {
    ...mapActions({
      changeLang: "changeLang"
    }),
    openMenu () {
      this.isOpenMenu = true
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#nav {
  padding: 30px;
  border-bottom: 1px solid black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
