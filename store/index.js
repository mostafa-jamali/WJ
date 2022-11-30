const store = {
  state: () => ({
    categories: []
  }),

  getters: {},

  mutations: {
    SETCATEGORIES(state, payload) {
      state.categories = payload;
    },
  },

  actions: {
    async getCategories({commit}) {
      const categories = await this.$axios.$get('https://challenge.webjar.ir/post-categories');
      commit('SETCATEGORIES', categories);
    },
  },

  modules: {},
};

export default store;
