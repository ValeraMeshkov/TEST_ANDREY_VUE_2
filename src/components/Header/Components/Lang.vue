<template>
  <div
    class="lang"
    @mouseover="active = true"
    @mouseleave="active = false"
    :class="{
      active: active
    }"
    @click.capture="changeLang(lang)"
  >
    <Icon
      :isHover="true"
      :isActive="true"
      icon="planet-earth"
      alt="planet-earth"
      size="23px"
    />
    <span>{{lang}}</span>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: "Lang",
  components: {
    Icon
  },
  data () {
    return {
    };
  },
  computed: {
    ...mapState({
      lang: state => state.lang.header.lang,
    }),
  },
  methods: {
    ...mapActions({
      changeLang: "changeLang",
    }),
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";
.lang {
  width: 62px;
  display: flex;
  font-family: "Exo-bold";
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 14px;
    line-height: 48px;
    color: $white;
    margin-left: 10px;
  }
}
</style>