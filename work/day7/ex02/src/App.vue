<template>
  <div>
    <h1>none v-model</h1>
    <h5>{{textVal}}</h5>
    <input type="text" :value="textVal" @change="onChange">
    <button @click="onOk()">ok</button><br>
    <input type="text" :value="textVal" @input="onInput">
  </div>

  <div>
    <h1>with v-model</h1> <!-- 쌍방향 데이터 동기화를 자동으로 -->
    <h5>{{textVal_vm}}</h5>
    <input type="text" v-model="textVal_vm"> <!-- 한글이 한 박자 늦게 나옴. 문장부호를 찍거나 띄어쓰기를 하면 나옴.-->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      textVal : '',
      textVal_vm: '',
    }
  },

  methods: {
    onOk() {
      this.textVal = this.tempText
    },
    onChange(evt) {
      console.log(evt.target.value)
      this.tempText = evt.target.value
    },
    onInput(evt) {
      this.textVal = evt.target.value
    },
  },

  created() {
    this.tempText= ''
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
