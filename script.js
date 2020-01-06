// https://q-todo-2019-12-29.glitch.me

; (function () {
  'use strict';

  // OBJECTS

  var todoApp = {
    todos: [],

    addTodo: function (todoText) {
      this.todos.push({
        todo: todoText,
        complete: false
      });
      view.displayTodos();
    },
 
    editTodo: function (todo, edits) {
      this.todos.forEach(function (item, idx, arr) {
        item.todo === todo ? (item.todo = edits) : "";
      });
      view.displayTodos();
    },

    deleteTodo: function (index) {
      this.todos.forEach(function (item, i, arr) {
        // convert index (str) to num with parseInt() as i is an integer and used in splice
        var indexNum = parseInt(index);
        i === indexNum ? arr.splice(i, 1) : "";
      });
      view.displayTodos();
    },

    toggleComplete: function (todo) {
      this.todos.forEach(function (item, idx) {
        item.todo === todo ? (item.complete = !item.complete) : "";
      });
      view.displayTodos();
    },

    toggleAll: function () {
      var count = 0;
      this.todos.forEach(function (item, idx) {
        if (item.complete) {
          count = count + 1;
        }
      });
      if (count === this.todos.length) {
        this.todos.forEach(function (item) {
          item.complete = false;
        });
      } else {
        this.todos.forEach(function (item) {
          item.complete = true;
        });
      }
      view.displayTodos();
    }
  };

  // EVENT HANDLERS

  function clickHandler(event) {
    if (!event.target.closest("button")) return;
    event.preventDefault();
    //    console.log(event.target);

    if (event.target.matches("#btnAdd")) {
      let addTodoText = document.querySelector("#inputAdd");
      todoApp.addTodo(addTodoText.value);
      addTodoText.value = "";
    }

    if (event.target.matches("#btnToggle")) {
      todoApp.toggleAll();
    }

    if (event.target.matches("#btnChange")) {
      let inputToBeChanged = document.querySelector("#inputToBeChanged");
      let inputChangeTo = document.querySelector("#inputChangeTo");
      todoApp.editTodo(inputToBeChanged.value, inputChangeTo.value)
      inputToBeChanged.value = '';
      inputChangeTo.value = '';
    }

    if (event.target.matches("#btnComplete")) {
      let toggle = document.querySelector("#inputComplete");
      todoApp.toggleComplete(toggle.value);
      toggle.value = "";
    }

    if (event.target.matches(".deleteBtn")) {
      // parentNode.id matches index on todo in each li
      var idNum = event.target.parentNode.id;
      todoApp.deleteTodo(idNum);
    }
  }

  document.addEventListener("click", clickHandler, false);

  // VIEW TEMPLATE
  // only displays. No data storage or logic

  var view = {
    displayTodos: function () {
      var todosOl = document.querySelector("#todosOl");
      todosOl.innerHTML = "";
      todoApp.todos.forEach(function (item, idx, arr) {
        var todoLi = document.createElement("li");

        // add id to each todo to hook delete button. id same as idx of todos array
        todoLi.setAttribute("id", idx);

        // clear DOM to avoid adding new todo to old list
        var todoTextCompleteState = "";

        item.complete
          ? (todoTextCompleteState = "(x) " + item.todo + " ")
          : (todoTextCompleteState = "( ) " + item.todo + " ");

        todoLi.textContent = todoTextCompleteState;

        // forEach loop breaks 'this' so I must use view.createDeleteBtn()
        todoLi.appendChild(view.createDeleteBtn());
        todosOl.appendChild(todoLi);
      });
    },
    createDeleteBtn: function () {
      var deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "deleteBtn";
      return deleteBtn;
    }
  };

  todoApp.addTodo("Place Holder");


})();
