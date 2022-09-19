<template>
  <label class="
  flex
  flex-col
  items-start
  font-inter
  font-medium
  text-gray-700
  text-base
"
  for="city"
  >
  Город*
  <select
    class="
      w-full
      h-10
      font-inter
      font-normal
      text-gray-900
      text-base
      border
      border-gray-300
      rounded-md
      shadow-sm
      mt-1
      py-2
      pl-3.5
      md:w-b-tab
      xl:w-44
      xl:mb-5
    "
    name="city"
    required
  >
    <option
      v-for="city in cities"
      :key="city.id"
      :value="city.name"
      :selected="city.id == this.current"
    >
      {{ city.name }}
    </option>
  </select>
</label>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MyInput',
  computed: {
    ...mapGetters({
      cities: 'getCities',
      current: 'getCurrentCity',
    }),
  },
};
</script>
