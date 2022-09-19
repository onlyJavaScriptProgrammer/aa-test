<template>
  <button class="
    w-full
    h-10
    mb-2.5
  bg-blue-500
  text-white
    font-inter
    font-medium
    text-base
    px-[17px]
    py-[9px]
    border-0
    rounded-md
    shadow-sm
    hover:bg-blue-600 transition-colors
    sm:w-48
    sm:mr-5
    sm:mb-0
    "
    @click="emitData"
  >
    Заказать в Москву
  </button>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'BtnToMoscow',
  methods: {
    ...mapMutations({
      toggle: 'toggleModal',
      current: 'recordCurrentCity',
    }),
    emitData() {
      this.toggle();
      this.current('1');
    },
  },
};
</script>
