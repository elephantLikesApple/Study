import { createStore } from 'vuex'

export default createStore({
  state() {
    let _counter = 0
    if(localStorage.getItem('counter') !== null) {
      _counter = parseInt(localStorage.getItem('counter'))
    } else {
      localStorage.setItem('counter', _counter) // 초기값을 로컬에 등록
    }
    return {
      counter : _counter
    }
  },
  mutations: {
    inc(state) {
      state.counter++
      localStorage.setItem('counter', state.counter)
    },
    dec(state) {
        state.counter--
        localStorage.setItem('counter', state.counter)
      },
    rst(state) {
        state.counter = 0
        localStorage.setItem('counter', state.counter)
      }
  },
  actions: {
  },
  modules: {
  }
})
