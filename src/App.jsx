import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TicTacToe from "./tic-tac-toe"


const Demo = {
  TicTacToe
}


function App() {
 const Component = Demo.TicTacToe

  return (
    <>
      <Component/>
    </>
  )
}

export default App
