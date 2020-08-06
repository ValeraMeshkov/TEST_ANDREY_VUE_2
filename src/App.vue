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

@font-face {
  font-family: "Exo-bold";
  src: url("/assets/fonts/exo/Exo-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Exo-medium";
  src: url("/assets/fonts/exo/Exo-Medium.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Exo-regular";
  src: url("/src/assets/fonts/exo/Exo-Regular/Exo-Regular.eot"); /* IE9 Compat Modes */
  src: url("/src/assets/fonts/exo/Exo-Regular/Exo-Regular.woff")
      format("font-woff"),
    url("/src/assets/fonts/exo/Exo-Regular/Exo-Regular.svg") format("svg"); /* Legacy iOS */
}

@font-face {
  font-family: "OpenSans-bold";
  src: url("/assets/fonts/open_sans/OpenSans-Bold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "OpenSans-light";
  src: url("/assets/fonts/open_sans/OpenSans-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "OpenSans-regular";
  src: url("/assets/fonts/open_sans/OpenSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "OpenSans-semiBold";
  src: url("/assets/fonts/open_sans/OpenSans-SemiBold.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Exo-regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  // background-color: #0B0C23;
}
</style>
