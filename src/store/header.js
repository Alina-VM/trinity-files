export default {
  namespaced: true,
  state: {
    cities: [
      { text: 'Dubai', value: 'Dubai' },
      { text: 'Kyiv', value: 'Kyiv' },
      { text: 'Budapest', value: 'Budapest' },
      { text: 'Wiesbaden', value: 'Wiesbaden' },
    ],
    langs: [
      { text: 'UA', value: 'UA' },
      { text: 'ENG', value: 'ENG' },
    ],
  },
  getters: {
    allCities: (state) => state.cities,
    allLangs: (state) => state.langs,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production',
};
