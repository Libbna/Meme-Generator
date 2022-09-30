import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Meme from '../Components/Meme'
import MemeGenerated from '../Components/MemeGenerated'

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Meme />} />
      <Route exact path='/generated' element={<MemeGenerated />} />
    </Routes >
  )
}

export default App
