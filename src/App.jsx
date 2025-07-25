import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TicTacToe from "./components/tic-tac-toe"
import ReactReduxStoryBook from "./route/ReactReduxStoryBook"


const Demo = {
  TicTacToe,
  ReactReduxStoryBook
}


function App() {
 const Component = Demo.ReactReduxStoryBook

  return (
    <>
      <Component/>
    </>
  )
}

export default App
