const Counter = {
  data() {
    return {
      counter: this.$store.state.count
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    }
  }
};

const store = Vuex.createStore({
  state() {
    return {
      count: 1
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

var app = Vue.createApp(Counter);
app.use(store);
app.mount("#counter");
