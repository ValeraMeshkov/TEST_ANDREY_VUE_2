<template>
  <div class="menu">
    <div class="buttons">
      <div
        class="close"
        @click="$emit('close')"
      >x</div>

      <div
        class="name home"
        @click="routerTo('/')"
      >{{lang.home}}</div>

      <div class="dots">...</div>

      <div
        class="name"
        @click="routerTo('/sell')"
      >{{lang.sell}}</div>

      <div class="dots">...</div>

      <div
        class="name"
        @click="routerTo('/host')"
      >{{lang.host}}</div>

      <div class="dots">...</div>

      <div
        class="name"
        @click="routerTo('/about')"
      >{{lang.about}}</div>

      <div class="dots">...</div>

      <div
        class="name"
        @click="routerTo('/support')"
      >{{lang.support}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Menu",
  props: {
    msg: String
  },
  computed: {
    ...mapState({
      lang: state => state.lang.routes,
    }),
  },
  methods: {
    routerTo (link) {
      this.$router.push({ path: link })
      this.$emit('close')
    },
    ...mapActions({
      changeLang: "changeLang"
    }),
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.menu {
  position: fixed;
  z-index: 10;
  background: $background;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.98;

  .buttons {
    color: $white;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .close {
      cursor: pointer;
      padding: 5px 10px;
    }
    .home {
      margin-top: 100px;
    }
    .name {
      color: $white;
      text-decoration: none;
      cursor: pointer;
      margin-top: 50px;
      text-transform: uppercase;
    }
    .dots {
      margin-top: 50px;
    }
  }
}
</style>
