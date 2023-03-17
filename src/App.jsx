import { useState } from 'react'
import './App.css'
import MainPanel from './components/MainPanel'
import AttributeFilter from './components/AttributeFilter';

function App() {
  
  return (
    <div className="App">
      <MainPanel />
      <br></br>
      <AttributeFilter />
    </div>
  )
}

export default App;