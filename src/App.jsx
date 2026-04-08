import { useState } from 'react'

function Votes() {
  const [aliceVotes, setAliceVotes] = useState(0)
  const [bobVotes, setBobVotes] = useState(0)

  const totalVotes = aliceVotes + bobVotes


  return (

    <div>




      <div>
        <h1>Votes</h1>
        <p>
          {aliceVotes} Alice's Votes
        </p>

        <button onClick={() => setAliceVotes(aliceVotes + 1)}> Vote Alice</button>

        <p>{bobVotes} Bob's votes</p>

        <button onClick={() => setBobVotes(bobVotes + 1)}>Vote Bob</button>



        <div>
          <h2>
            {totalVotes} Total combined votes</h2>

          {aliceVotes > bobVotes ? "Alice is wining" : bobVotes > aliceVotes ? "Bob is wining" : "It's a Tie"}
        </div>



      </div>

    </div>



  )
}

function App() {
  return (
    <Votes />

  )
}
export default App