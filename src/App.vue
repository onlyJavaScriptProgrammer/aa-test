<template>
  <div class="
    flex
    flex-col
    box-border
    pt-2.5
    px-2.5
    sm:container
    sm:flex-row
    sm:pt-1b
    "
  >
    <BtnToMoscow />
    <BtnToSPB />
  </div>
  <ModalWindow />
</template>

<script>
import ModalWindow from './components/ModalWindow.vue';
import BtnToMoscow from './components/BtnToMoscow.vue';
import BtnToSPB from './components/BtnToSPB.vue';

export default {
  name: 'App',
  components: {
    ModalWindow,
    BtnToMoscow,
    BtnToSPB,
  },
};
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
  }
</style>
