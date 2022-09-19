<template>
  <div class="
    flex
    justify-center
    items-center
    w-screen
    h-screen
    fixed
    top-0
    left-0
    bg-slate-500/75
    "
    v-if="this.visible"
    @click="this.toggle"
    aria-hidden="true"
  >
    <div
      class="rounded-lg bg-white px-5 py-6"
      @click="stopProp"
      aria-hidden="true"
    >
      <div class="font-inter font-medium text-2xl text-gray-900 mb-6">
        {{ this.response ? 'Ваши данные': 'Заказать звонок' }}
      </div>
      <div v-html="this.response"></div>
      <form
        class="flex flex-col items-end relative"
        ref="formData"
        @submit.prevent="sendData"
        v-if="!this.response"
      >
          <div class="flex flex-col items-center justify-center mb-5 md:flex-row">
            <div class="w-full md:mx-3.5 md:first:ml-0 xl:mx-2.5">
              <MyInput :titleInp="'Имя'" :attrs="this.attrs.name" :plch="this.plch.name" />
            </div>
            <div class="w-full md:mx-3.5 xl:mx-2.5">
              <MyInput
                :titleInp="'Телефон'"
                :attrs="this.attrs.phone"
                :plch="this.plch.phone"
                :ml="12"
              />
            </div>
            <div class="w-full md:mx-3.5 xl:mx-2.5">
              <MyInput :titleInp="'Email'" :attrs="this.attrs.email" :plch="this.plch.email" />
            </div>
            <div class="
            w-full
            md:mr-7
            md:absolute
            md:left-0
            md:bottom-0
            xl:mx-2.5
            xl:lats:mr-0
            xl:relative">
              <MySelect />
            </div>
          </div>
          <div class="w-full flex items-center justify-end">
            <MyButton />
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'ModalWindow',
  methods: {
    ...mapMutations({
      toggle: 'toggleModal',
    }),
    ...mapActions({
      send: 'sendFormData',
    }),
    stopProp(e) {
      e.stopPropagation();
    },
    sendData() {
      this.$refs.formData.reset();
      this.send();
    },
  },
  computed: {
    ...mapGetters({
      attrs: 'getAttrs',
      plch: 'getPlaceholders',
      visible: 'getStateVisible',
      formData: 'getFormData',
      response: 'getResponse',
    }),
  },
};
</script>
