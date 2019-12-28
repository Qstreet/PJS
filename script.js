;(function(){
'use strict';

  var todoApp = {
    todos: [],
    display: function () {
      if (this.todos.length < 1) {
        console.log("No todos today");
      }
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

/**
 * Listeners and Event Handlers
 */

function clickHandler(event){
  if (!event.target.matches('button')) return;
  console.log(event);
  if (event.target.matches('#btnDisplay')) {
    todoApp.display();
  }
  if (event.target.matches('#btnToggle')) {
    todoApp.toggleComplete();
  }
  if (event.target.matches('#btnAdd')) {
    var inputValue = document.querySelector('#inputAdd').value;
    todoApp.addNew(inputValue);
    document.querySelector('#inputAdd').value = '';
  }
  if (event.target.matches('#btnChange')) {
    var toBeChanged = document.querySelector('#inputToBeChanged').value;
    var changeTo = document.querySelector('#inputChangeTo').value;
    todoApp.change(toBeChanged, changeTo);
    document.querySelector('#inputToBeChanged').value = '';
    document.querySelector('#inputChangeTo').value = '';
  }
}

document.addEventListener('input', clickHandler, false);

})()