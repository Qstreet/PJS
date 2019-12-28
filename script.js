(function() {
  // 'use strict';

  /**
   * VARIABLES
   */

  var todoApp = {
    todos: [],
    addNew: function(todoText) {
      this.todos.push({
        todo: todoText,
        complete: false
      });
      view.displayTodos();
    },
    change: function(todoText, changeTo) {
      this.todos.forEach(function(item) {
        if (item.todo === todoText) {
          item.todo = changeTo;
        }
      });
      view.displayTodos();
    },
    delete: function(todoText) {
      this.todos.forEach(function(item, idx, array) {
        if (item.todo === todoText) {
          array.splice(idx, 1);
        }
      });
      view.displayTodos();
    },
    toggleComplete: function(todoText) {
      this.todos.forEach(function(item) {
        if (item.todo === todoText) {
          item.complete = !item.complete;
        }
      });
      view.displayTodos();
    },
    toggleAll:  function() {

    }
    
  }; /* close todoApp object */

  var view = {
    displayTodos: function() {
      debugger;
      if (todoApp.todos.length < 1) {
        return "none";
      }
      var todosUl = document.querySelector("#todosUl");
      todosUl.innerHTML = "";
      todoApp.todos.forEach(function(item, idx) {
        var todoLi = document.createElement("li");
        if (item.complete) {
          todoLi.textContent = "(x) " + item.todo;
        } else {
          todoLi.textContent = "( ) " + item.todo;
        }
        todosUl.appendChild(todoLi);
      });
    }
  };

  /**
   * Listeners and Event Handlers
   */

  function clickHandler(event) {
    if (!event.target.matches("button")) return;
    if (event.target.matches("#btnToggle")) {
      todoApp.toggleComplete();
    }
    if (event.target.matches("#btnAdd")) {
      var inputValue = document.querySelector("#inputAdd").value;
      todoApp.addNew(inputValue);
      document.querySelector("#inputAdd").value = "";
    }
    if (event.target.matches("#btnChange")) {
      var toBeChanged = document.querySelector("#inputToBeChanged").value;
      var changeTo = document.querySelector("#inputChangeTo").value;
      todoApp.change(toBeChanged, changeTo);
      document.querySelector("#inputToBeChanged").value = "";
      document.querySelector("#inputChangeTo").value = "";
    }
    if (event.target.matches("#btnDelete")) {
      var toBeDeleted = document.querySelector("#inputToBeDeleted").value;
      todoApp.delete(toBeDeleted);
      document.querySelector("#inputToBeDeleted").value = "";
    }

    if (event.target.matches("#btnComplete")) {
      var done = document.querySelector("#inputComplete").value;
      todoApp.toggleComplete(done);
      document.querySelector("#inputComplete").value = "";
    }

    if (event.target.matches("#btnToggle")) {
      var length = todoApp.todos.length;
      var numComplete = 0;

      todoApp.todos.forEach(function(item, idx) {
        if (item.complete) {
          numComplete = numComplete + 1;
        }
      });
      if (numComplete === length) {
        todoApp.todos.forEach(function(item, idx) {
          item.complete = false;
        });
      } else {
        todoApp.todos.forEach(function(item, idx) {
          item.complete = true;
        });
      }
    }
  }

  document.addEventListener("click", clickHandler, false);
})();
