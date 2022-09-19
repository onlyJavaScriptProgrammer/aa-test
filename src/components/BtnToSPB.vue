<template>
  <button class="
    w-full
    h-10
  bg-teal-600
  text-white
    font-inter
    font-medium
    text-base
    px-[17px]
    py-[9px]
    border-0
    rounded-md
    shadow-sm
    hover:bg-teal-700 transition-colors
    sm:w-72
    "
    @click="emitData"
  >
    Заказать в Санкт-Петербург
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'BtnToSPB',
  methods: {
    ...mapMutations({
      toggle: 'toggleModal',
      current: 'recordCurrentCity',
    }),
    emitData() {
      this.toggle();
      this.current('2');
    },
  },
};
</script>
