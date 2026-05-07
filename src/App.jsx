import { useState, useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState("Loading...")
  const [count, setCount] = useState(0)

  useEffect(() => {
    async function fetchJokes() {
      try {
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        let data = await response.json()
        setJoke(`${data.setup} ... ${data.punchline}`)
      } catch (error) {
        setJoke("Something went wrong!")
      }


    }
    fetchJokes()

  }, [count])

  return (
    <div>
      <h1>Random Joke</h1>
      <p>{joke}</p>
      <button onClick={() => setCount(count + 1)}>Get New Joke</button>
    </div>
  )
}

export default App