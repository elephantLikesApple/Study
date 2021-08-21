<template>
  <div class="counter">
    <h1>{{counter}}</h1>
    <button @click="decrease"> - </button>
    <button @click="reset"> 0 </button>
    <button @click="increase"> + </button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Counter',
  components: {
  },
  data() {
      return {
          counter : 0
      }
  },
  methods : {
      increase() {
          this.counter++
      },
      decrease() {
          this.counter--
      },
      reset() {
          this.counter = 0
      }
  }
}
</script>

<style scoped>

</style>
