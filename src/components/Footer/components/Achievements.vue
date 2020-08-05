<template>
  <div class="achievements">
    <Icon
      v-for="n in icons"
      :key="n"
      :icon="`achievment-${n}`"
      alt="`achievment-${n}`"
      size="30px"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue'

export default {
  name: "Achievements",
  components: {
    Icon
  },
  data () {
    return {
      icons: ['gold', 'silver', 'platinum', 'bronze']
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.achievements {
  width: 167px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
}
</style>