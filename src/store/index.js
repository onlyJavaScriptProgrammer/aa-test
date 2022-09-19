import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    attrForAndName: {
      name: 'name',
      phone: 'phone',
      email: 'email',
      city: 'city',
    },
    placeholders: {
      name: 'Иван Иванов',
      phone: '+7 (___) ___-__-__',
      email: 'you@example.com',
    },
    cities: [
      {
        id: 1,
        name: 'Москва',
      },
      {
        id: 2,
        name: 'Санкт-Петербург',
      },
      {
        id: 3,
        name: 'Казань',
      },
    ],
    formData: {
      name: '',
      phone: '',
      email: '',
      city_id: '',
    },
    currentCity: null,
    isVisible: false,
    response: null,
  },
  getters: {
    getAttrs(state) {
      return state.attrForAndName;
    },
    getPlaceholders(state) {
      return state.placeholders;
    },
    getStateVisible(state) {
      return state.isVisible;
    },
    getCities(state) {
      return state.cities;
    },
    getCurrentCity(state) {
      return state.currentCity;
    },
    getFormData(state) {
      return state.formData;
    },
    getResponse(state) {
      return state.response;
    },
  },
  mutations: {
    toggleModal(state) {
      state.isVisible = !state.isVisible;
      if (state.response) {
        state.response = null;
      }
    },
    recordCurrentCity(state, payload) {
      state.currentCity = payload;
    },
    recordFormName(state, name) {
      state.formData.name = name;
    },
    recordFormPhone(state, phone) {
      state.formData.phone = phone;
    },
    recordFormEmail(state, email) {
      state.formData.email = email;
    },
    recordFormCity(state, cityId) {
      state.formData.city_id = cityId;
    },
    recordResponse(state, data) {
      state.response = data;
    },
  },
  actions: {
    async sendFormData({ commit, state }) {
      await axios.post('http://hh.autodrive-agency.ru/test-tasks/front/task-7/', {
        ...state.formData,
      })
        .then((res) => {
          commit('recordResponse', res.data);
        })
        .catch((err) => {
          commit('recordResponse', err.response.data);
        });
    },
  },
});
