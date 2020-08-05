<template>
  <div class="home">
    <div class="window_width">

      <div class="wrapper_block">
        <InnerWrapperBlock />
        responsive block
      </div>

      <div>{{ WINDOW_WIDTH }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import InnerWrapperBlock from '@/components/InnerWrapperBlock.vue'

export default {
  name: "Home",
  components: {
    InnerWrapperBlock
  },
  computed: {
    ...mapState({
      WINDOW_WIDTH: state => state.WINDOW_WIDTH
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.wrapper_block {
  position: relative;
  padding: 10px;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 15vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .window_width {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 5vw;
    color: #42b983;
    font-weight: 900;
    border: 1px solid #42b983;
    margin-bottom: 20px;
  }
  .text_red {
    border: 1px solid red;
    color: red;
    font-size: 30px;
    width: 1000px;
  }
  .text_blue {
    border: 1px solid blue;
    color: blue;
    font-size: 20px;
    width: 500px;
  }
  .text_green {
    border: 1px solid green;
    color: green;
    font-size: 10px;
    width: 80%;
  }
}
</style>
