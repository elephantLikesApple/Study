<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="changeMsg('changing msg')">change</button>
  </div>
  <div>
    <h2> reactive counter</h2>
    <p>{{counter}}</p>
    <button @click="increaseCount()">plus</button>
    <button @click="decreaseCount()">minus</button>
    <button @click="resetCount()">reset</button>
  </div>
  <div>
    <h2>none reactive counter</h2>
    <h5>{{myCounter}}</h5>
    <button @click="zeroCount()">reset</button>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      msg: 'my first vue application',
      counter : 0,
    }
  },

  methods : {
    changeMsg(msg) {
      this.msg = msg
    },
    increaseCount() {
      this.counter++
    },
    decreaseCount() {
      this.counter--
    },
    resetCount() {
      this.counter = 0
    },
    zeroCount() {
      this.myCounter = 0 // none reactive val이라서 값이 바뀌어도 화면 랜더링 x, 다른 리액티브한 변수가 바뀔 때 바뀐다
    },
  },

  // 라이프사이클 훅
  created() {
    this.counter = 100
    this.myCounter = 200 ///none reactive
  },

  onUpdated() {

  },

  beforeCreate() {

  }
}
</script>

<style scoped> /* css가 여기서만 적용되도록 하는 것. scoped option*/
div {
  border: 1px solid black;
  margin-top: 2px;
  padding: 5px;
}
</style>
