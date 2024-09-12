make todoApp

1. return form.new-item-form.
   .inside form(
   .div.form-row
   inside div(
   .label wiht htmlfor"item" with text "New Item.
   .input type text and id"item"
   )
   .button.btn and wiht text "Add"
   )
   .h1.header with text Todo List.

2. after h1 elements retunr ul.list
   .inside ul return li elements.
   .inside li return label.
   .inside label return input type checkbox, after thet write text "item1"
   .after label and inside li make button.btn btn-danger with text "Delete"  
   .make item 2 and text the checkbox.

3. construct newItem form useState
   (dont import useState at the first let it make by it self)
   .set newItem to value for your input with id item.
   .make onchange event for input and get value of input for setNewItem (dont make another function and hanle it inside jsx file)
   .add onsubmit event name "handleSubmit" to form elements.
   .inside fucntion handlSubmit(
   .make event.preventDefault()
   )
   .extract todos form useState.
   now again inside handleSubmit(
   update the setTodos(
   {
   id: crypto.randomUUID(),
   title: newItem,
   completed: false
   }))

4. inside ul elements use the map method for each todos
    .return your li elements inside map method and use todo for parameters.
    .expect item 1 { title.todo}
    .add checked property to input to todo.completed.
    .use your input and try to make todos.
    .check the console and handle the error.

5. make sure after add todo the input be clear(
    hint: use setNewItem.
)
    .set onChange evenet to input for checkbox and give it toggleTodo functoin and for parameter(todo.id , e.target.checked)
    handle toggleTodo function(
        .set id and compeleted for argument the function.
        .update setTodos and return map to currentTodos.
        if todo.id(from map) === id(
            return {...todo, completed}!exact like this.
            .after if and inside the map return todo
            .check the checkbox.
        ) 
    )

6. make function name deleteTodo with argument id .
    .use the setTodos and filter method (
        todo.id !== id
    )
    .add delete button inside button in xml and give a function and padd if todo.id.
    .before the map method in xml write some code when we have not any todo show the text"No Todos".f

