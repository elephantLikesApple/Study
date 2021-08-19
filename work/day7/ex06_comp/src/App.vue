<template>

  <LoginBox v-show="bShowLoginBox" id="songi" @login="onLogin"/>
  <p v-show="login_success">로그인 성공</p>
  <p v-show="login_failed">로그인 실패</p>
  <hr>
  <div v-show="bShowlist">
    <textbox title="Vue" text="hello"/>
    <textbox title="node.js" text="backend"/>
    <textbox title="css" text="stylesheet"/>
    <textbox title="html" text="markup"/>
  </div>
</template>

<script>
import Textbox from './components/Textbox.vue'
import LoginBox from './components/LoginBox.vue'

export default {
  name: 'App',
  components: {
    Textbox,
    LoginBox,
    
  },
  data() {
    return {
      login_success: false,
      login_failed: false,
      bShowLoginBox: true,
      bShowlist: false,
    }
  },
  methods: {
    onLogin(result) {
      console.log(result)
      if(result) {
        this.login_success = true
        this.login_failed = false
        this.bShowLoginBox = false
        this.bShowlist = true
      }
      else {
        this.login_success = false
        this.login_failed = true
      }
    }
  }
}
</script>

<style>

</style>
