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
  :for="attrs"
  >
  {{ titleInp }}*
  <input
    type="text"
    class="
      w-full
      h-10
      font-inter
      font-normal
      text-gray-500
      text-base
      border
      border-gray-300
      rounded-md
      shadow-sm
      mt-1
      mb-5
      py-2
      pl-3.5
      md:w-44
    "
    :name="attrs"
    :placeholder="plch"
    :maxlength="ml"
    required
    v-model="dataInput"
    @input="setMask"
  />
</label>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'MyInput',
  props: {
    titleInp: {
      type: String,
      required: true,
    },
    attrs: {
      type: String,
      required: true,
    },
    plch: {
      type: String,
      required: true,
    },
    ml: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      dataInput: '',
    };
  },
  mounted() {
    this.recordCity(this.current);
  },
  computed: {
    ...mapGetters({
      current: 'getCurrentCity',
    }),
  },
  methods: {
    ...mapMutations({
      recordName: 'recordFormName',
      recordPhone: 'recordFormPhone',
      recordEmail: 'recordFormEmail',
      recordCity: 'recordFormCity',
    }),
    setMask(e) {
      switch (e.target.name) {
        case 'name':
          this.recordName(e.target.value);
          break;
        case 'phone': {
          const phone = this.dataInput.replace(/\D/, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
          phone[1] = '+7';
          const newPhone = phone[0].replace(/\d/, '+7');
          this.recordPhone(newPhone);
          const res = `${phone[1]} (${phone[2]}) ${phone[3]}-${phone[4]}-${phone[5]}`;
          if (res.length === 18) {
            this.dataInput = res;
          }
          break;
        }
        case 'email': {
          const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
          const result = emailReg.test(this.dataInput);
          if (result) {
            this.recordEmail(this.dataInput);
          }
          break;
        }
        default:
          break;
      }
    },
  },
};
</script>
