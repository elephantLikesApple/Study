<template>
  <div>
    <h1>Add Todo</h1>
    title : <input type="text" v-model="title"><br>
    text : <input type="text" v-model="text"><br>
    <button @click="addTodo">Add</button>
  </div>

  <div>
    <ul>
      <li v-for="(item,index) in todoList" :key=index>
        <h5>{{item.title}}</h5>
        <p>{{item.text}}</p>
        <button @click="delTodo(index)">Delete</button>
      </li>      
    </ul>
  </div>
</template>

<script>
import {pullAt} from 'lodash'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: '',
      text: '',

      todoList: [
        {
          title:'고양이밥주기',
          text: "오전 9시"
        },
        {
          title:'수업듣기',
          text: "오전 11시"
        },
      ]
    }
  },
  methods : {
    addTodo() {
      this.todoList.push({title:this.title, text:this.text})
    },
    delTodo(idx) {
      console.log(idx)
      pullAt(this.todoList, [idx])
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid black;
}
li {
  background-color: beige;
  border-bottom: dotted 1px gray;
  margin-bottom: 2px;
}
</style>
