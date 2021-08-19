<template>
  <div v-html="tags"></div>
  <button @click="changeHtml">change</button>

  <div>
    <img :src= imgSrc>
    <br>
    <button @click="onSize100">size 100</button><br>
    <button @click="onSize200">size 200</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      tags : '<h1> hello view </h1>',
      imgSrc: '',
    }
  },
  methods : {
    changeHtml() {
      this.tags = '<ul><li>itme1</li><li>itme2</li><li>itme3</li></ul>'
    },
    onSize100() {
      this.imgSrc = 'https://placeimg.com/100/100/tech'
    },
    onSize200() {
      this.imgSrc = 'https://placeimg.com/200/200/tech'
    },

  },
}
</script>

<style scoped>
div {
  margin-top: 2px;
  border: 1px solid black;
}
</style>
