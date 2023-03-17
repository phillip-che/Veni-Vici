import { useState } from 'react'
import './App.css'
import MainPanel from './components/MainPanel'
import BanList from './components/BanList';

function App() {
  
  return (
    <div className="App">
      <MainPanel />
      <br></br>
      <BanList />
    </div>
  )
}

export default App;