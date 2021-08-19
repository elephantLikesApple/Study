<template>
    <div>
        id : <input type="text" v-model="user.id">
        passwd : <input type="password" v-model="user.pw">
        <button @click="loginCheck">Login</button>
    </div>
</template>
<script>
export default {
    name : "LoginBox",
    props : ["id"],
    emits : ["pw"],
    data() {
        return {
            user : {},
        }
    },
    methods : {
        loginCheck() {
            if(this.user.pw === 'qwer'){
                console.log('login success')
                this.$emit("login", true)
            }
            else{ 
                console.log('login failed')
                this.$emit("login", false)
            }
        },
    },
    created() {
        this.user.id = this.id
        this.user.pw = ''
    },
}
</script>
<style scoped>
    
</style>