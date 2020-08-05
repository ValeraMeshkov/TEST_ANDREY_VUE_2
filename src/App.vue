<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
    <div class="wrapper">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Main from "@/views/Main/Main.vue";
import Footer from "@/components/Footer/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Header,
    Main,
    Footer
  },
  mounted () {
    this.listenerWindowWidth();
  },
  methods: {
    ...mapActions({
      changeWindowWidth: "changeWindowWidth"
    }),
    listenerWindowWidth () {
      this.changeWindowWidth(window.innerWidth);
      window.addEventListener(
        `resize`,
        e => {
          this.changeWindowWidth(e.target.innerWidth);
        },
        false
      );
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #0B0C23;
}
</style>
