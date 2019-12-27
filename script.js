;(function(){
 'use strict';

var todoApp = {
	todos: [],
  listTodos: function() {
    if (this.todos.length < 1) {
    	console.log('No todos');
      return;
    }
    for (var item of this.todos) {
    	if (item.complete) {
        console.log("(x) ", item.todoText)
      } else {
      	console.log("( ) " + item.todoText)
      }
    }
  	console.log(this.todos)
  },
  addTodo: function(todoText) {
    this.todos.push({
    	todoText: todoText,
      complete: false
    })
// 	this.listTodos();
  },
  editTodo: function(todoText, todoUpdate){
  	this.todos.forEach(function(item, index){
    	if (item.todoText === todoText) {
      	item.todoText = todoUpdate
      }
    })
//     this.listTodos();
  },
  markComplete: function(todoText){
    for (var item of this.todos) {
			if (item.todoText === todoText) {
      	item.complete = true;
      }
    }
    this.listTodos();
  }
 }


var para = document.querySelector('#idPara')

function clickHandler(event){
  if (!event.target.matches('button')) return;
  if (event.target.matches("#idDisplay")) {
      todoApp.listTodos();
  }
  if (event.target.matches("#idToggle")) {
      todoApp.markComplete()
  }
}


document.addEventListener('click', clickHandler, false)


})()


