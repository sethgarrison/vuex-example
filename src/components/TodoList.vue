<template>
  <div>
    <h1>My Todo List</h1>
    <span v-if="msg">{{msg}}</span>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.isComplete">
        <button>X</button>
        <span>{{todo.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: mapState({
      todos: state => state.todo.todos,
      msg: state => state.message.msg
    }),
    methods: mapActions([
      'fetchTodos'
    ]),
    created () {
      this.fetchTodos()
    }
  }
</script>

<style>
  ul, li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
  }
  li {
    padding: 20px;
    border-bottom: 1px solid black;
  }
</style>
