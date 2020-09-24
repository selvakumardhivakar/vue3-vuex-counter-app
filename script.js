const v1 = {
  computed: {
    count() {
      return store.state.count;
    },
    greater(){
      return store.getters.isGreater;
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
      count: 0
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
  },
  getters:{
    isGreater: state=>{
      if(state.count > 10){
        return "Greater than 10"
      }      
      else{
        return "Do increment!!!"
      }
    }
  }
});

var app = Vue.createApp(v1);
app.use(store);
app.mount("#container");
