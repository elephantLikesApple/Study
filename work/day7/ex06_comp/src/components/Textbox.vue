<template>
    <div>
        <h1 class="title">{{title}}</h1>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: "Textbox",
    props : ["title", "text"],
    data() {
        return {

        }
    },
    methods : {

    },
    created() {

    },
}
</script>

<style scoped>
div {
  border: 1px solid black;
  background-color: gray;
}
</style>