import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    todos : [],
  },
  mutations: {
    updateTodos(state, playload){
      console.log(playload);
      state.todos = playload;
    }
  },
  actions: {
    updateTodos(context) {
      //axios
      console.log(context);
      (async () => {
        try {
          let url = 'https://jsonplaceholder.typicode.com/todos'
          let {status, data} = await axios.get(url)
          console.log(status);
          context.commit('updateTodos', data)
        }
        catch (e) {
          console.log(e)
        }
      }) ();
      
    }
  },
  modules: {
  }
})
