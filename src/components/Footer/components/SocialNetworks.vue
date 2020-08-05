<template>
  <div class="networks">
    <a
      :href="`https://www.${network}.com/`"
      class="wrapper"
      v-for="network in networks"
      :key="network"
    >
      <InnerWrapperBlock />
      <Icon
        :icon="`${network}`"
        :alt="`${network}`"
        size="20px"
      />
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'
import InnerWrapperBlock from '@/components/InnerWrapperBlock.vue'

export default {
  name: "SocialNetworks",
  components: {
    Icon,
    InnerWrapperBlock
  },
  data () {
    return {
      networks: ['facebook', 'twitter', 'youtube', 'reddit']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.networks {
  display: flex;
  justify-content: space-between;
  width: 165px;
  margin-left: -20px;
  .wrapper {
    position: relative;
    width: 30px;
    height: 30px;
    background: #ffffff1a;
    mix-blend-mode: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>