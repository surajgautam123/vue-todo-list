<template>
  <div id="todo">
    <div class="create-box">
      <h2>Create Todo List</h2>
      <form>
        <div class="form-group">
          <input type="text" v-model="newTask" class="form-control" id="todoitem" placeholder="Todo Item" />
        </div>
        <div class="form-action">
          <button type="button" title="Add" v-on:click="add()">Add</button>
        </div>
      </form>
    </div>
    <div class="list-box">
      <h2>Task List</h2>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <input type="text" v-if="todo === editingTask" v-focus class="text-input" @keyup.enter="endEditing(todo)" v-model="todo.text">
          <label for="checkbox" v-if="todo !== editingTask" @dblclick="editTask(todo)">{{ index }}: {{ todo.text }}</label>
          <div class="remove-item" title="Remove Item" @click="removeTodo(todo)">X</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data(){
    return {
      newTask: "",
      todos: [],
      editingTask: {}
    }
  },
  methods: {
    add(e) {
      var todo = this.newTask.trim();
      if (todo) {
        this.todos.push({text: todo});
        this.newTask = "";
      }
      e.preventDefault();
    },
    removeTodo: function (todo) {
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    editTask: function (todo) {
      this.editingTask = todo;
    },
    endEditing: function (todo) {
      this.editingTask = {};
      if (todo.text.trim() === ""){
        this.removeTask(todo);
      }
    },
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss">
#todo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
  max-width: 800px;
  margin: 60px auto;
  *{
    box-sizing: border-box;
  }
  .create-box{
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    h2{
      margin-top: 0;
    }
    form{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      .form-group{
        width: calc(100% - 72px);
      }
      input[type="text"]{
        background: #FFF;
        border:1px solid #CCC;
        color: #000;
        font-size: 16px;
        width: 100%;
        padding:10px 10px;
      }
      .form-action{
        button{
          background: #000;
          border:1px solid #000;
          color: #FFF;
          font-size: 16px;
          padding: 10px 20px;
        }
      }
    }
  }
  .list-box{
    ul{
      list-style-type: none;
      padding: 0;
      margin-bottom: 20px;
      li{
        position: relative;
        display: block;
        padding: 0 30px 0 0;
        margin:0;
        background-color: #fff;
        border: 1px solid #ddd;
        label{
          display: inline-block;
          width: 100%;
          padding: 10px;
        }
        input[type="text"]{
          width: 100%;
          padding: 10px;
          font-size: 16px;
        }
        .remove-item{
          position: absolute;
          right: 0;
          top: 0;
          cursor: pointer;
          width: 29px;
          background: #d2c1c1;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
      }
    }
  }
}
</style>
