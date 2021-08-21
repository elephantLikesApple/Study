<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goHome">홈으로 가기</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  components : {
  },
  data() {
    return {

    }
  },
  methods : {
    goHome() {
      this.$router.push({
        'path' : '/'
      })
    }
  },
}
</script>

<style scoped>
  
</style>