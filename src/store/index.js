import { createStore } from 'vuex';

import header from './header';

export default createStore({
  state: {
    cars: [
      { name: 'Audi', model: 'Huracan EVO Spyder RS6' },
      { name: 'Lamborghini', model: 'Urus' },
      { name: 'Lamborghini', model: 'Huracan EVO Spyder' },
      { name: 'Ferrari', model: 'Roma' },
      { name: 'Range Rover', model: 'Autobiography New 2022' },
      { name: 'Ford', model: 'Fiesta' },
      { name: 'BMW', model: 'X5' },
      { name: 'Range Rover', model: 'Evogue' },
    ],
  },
  getters: {
    availableCars: (state) => state.cars,
  },
  mutations: {
  },
  actions: {
  },
  modules: { header },
  strict: process.env.NODE_ENV !== 'production',
});
