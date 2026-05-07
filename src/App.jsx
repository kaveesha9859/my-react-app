import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("")

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={() => {
        if (inputValue === "") return

        setTodos([...todos, inputValue])
        setInputValue("")
      }}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
            <button onClick={() => {
              setTodos(todos.filter((todo, i) => i !== index))
            }}>X</button>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default App