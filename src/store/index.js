import { createStore } from 'vuex';

import header from './header';

const urus = require('../assets/lamborghini-urus.jpg');
const roma = require('../assets/ferrari-roma.jpg');
const turboS = require('../assets/porsche-911turbos.jpg');
const ghost = require('../assets/rolls-royce-ghost.jpg');

export default createStore({
  state: {
    cars: [
      { name: 'Audi', model: 'Huracan EVO Spyder RS6' },
      { name: 'Lamborghini', model: 'Urus', img: urus },
      { name: 'Lamborghini', model: 'Huracan EVO Spyder' },
      { name: 'Ferrari', model: 'Roma', img: roma },
      { name: 'Porsche', model: '911 Turbo S', img: turboS },
      { name: 'Rolls-Royce', model: 'Ghost', img: ghost },
      { name: 'BMW', model: 'X5' },
      { name: 'Range Rover', model: 'Evogue' },
    ],
  },
  getters: {
    availableCars: (state) => state.cars,
    availableOffers(state) {
      return state.cars.filter((el) => el.img);
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: { header },
  strict: process.env.NODE_ENV !== 'production',
});
