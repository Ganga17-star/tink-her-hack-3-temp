import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'  

import Login from './components/Login';
import Awareness from './components/Awareness';
import Header from './components/Header';
import Psychology from './components/Psychology';
import Anonymous from './components/Anonymous'
import Evidence from './components/Evidence';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Header/>} />
        <Route path="/psychology" element={<Psychology/>} />
        <Route path="/anonymous" element={<Anonymous/>} />
        <Route path="/evidence" element={<Evidence/>} />
      </Routes>
    </Router>
  )
}

export default App
