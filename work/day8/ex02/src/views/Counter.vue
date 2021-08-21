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
  components: {},
  computed: {
    counter() {
        if(localStorage.getItem('counter') !== 'null')
        return this.$store.state.counter
    }
  },
  data() {
      return {
      }
  },
  methods : {
      increase() {
          this.$store.commit('inc')
      },
      decrease() {
          this.$store.commit('dec')
      },
      reset() {
          this.$store.commit('rst')
      }
  }
}
</script>

<style scoped>

</style>
