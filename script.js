;(function(){
'use strict';

  var todoApp = {
    todos: [],
    display: function () {
      console.log("My Todos: ", this.todos);
    },
    addNew: function (todoText) {
      this.todos.push({
        todo: todoText,
        complete: false
      })
      this.display()
    },
    change: function (todoText, changeTo) {
      this.todos.forEach(function (item) {
        if (item.todo === todoText) {
          item.todo = changeTo;
        } else {
          console.log(todoText + " is not listed");
        }
      })
      this.display()
    },
    delete: function (todoText) {
      this.todos.forEach(function (item, idx, array) {
        if (item.todo === todoText) {
          array.splice(idx, 1)
        }
      })
      this.display()
    },
    toggleComplete: function (todoText) {
      this.todos.forEach(function (item) {
        if (item.todo === todoText) {
          item.complete = !item.complete
        }
      })
      this.display();
    }
  }

})()