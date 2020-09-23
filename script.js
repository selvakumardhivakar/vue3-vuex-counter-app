const v1 = {
  computed: {
    count() {
      return store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement(){
      this.$store.commit("decrement");
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
    },
    decrement(state){
      if(state.count > 0){
         state.count--;
      }
    }
  }
});

var app = Vue.createApp(v1);
app.use(store);
app.mount("#container");
