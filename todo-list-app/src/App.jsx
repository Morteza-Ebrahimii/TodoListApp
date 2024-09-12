import { useState } from 'react'
import '../src/styles.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([])

  const AddTodo = (title) => {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false
        }]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter((todo => todo.id !== id))
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={AddTodo} />
      <h1 className="header">Todo List</h1>
      < TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

    </>
  )
}