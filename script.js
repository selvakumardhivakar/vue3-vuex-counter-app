const v1 = {
  computed: {
    count() {
      return store.state.count;
    },
    greater() {
      return store.getters.isGreater;
    }
  },
  methods: {
    increment() {
      store.dispatch("increment");
    },
    decrement() {
      store.dispatch("decrement");
    }
  }
};

const store = Vuex.createStore({
  state() {
    return {
      count: 0
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--;
      }
    }
  },
  getters: {
    isGreater: state => {
      if (state.count > 10) {
        return "Greater than 10";
      } else {
        return "Do increment!!!";
      }
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    }
  }
});

var app = Vue.createApp(v1);
app.use(store);
app.mount("#container");
