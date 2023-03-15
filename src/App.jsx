import { useState } from 'react'
import './App.css'
import MainPanel from './components/MainPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainPanel />
    </div>
  )
}

export default App
