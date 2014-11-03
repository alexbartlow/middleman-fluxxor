//= require ./todos/constants
//= require ./todos/todo_store
//= require ./todos/application

var stores = { "TodoStore": new TodoStore(constants) };
var flux = new Fluxxor.Flux(stores, constants.actions);

var TodoApplication = TodoApplicationFactory(Fluxxor, React),
    TodoList = React.createFactory(TodoApplication.Application);

document.addEventListener("DOMContentLoaded", function(event) {
  React.render(TodoList({flux: flux}), document.getElementById("todoApp"));
});

