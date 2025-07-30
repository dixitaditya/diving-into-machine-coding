import './App.css'

import TicTacToe from "./components/tic-tac-toe"
import ReactReduxStoryBook from "./route/ReactReduxStoryBook"
import Weather from './route/weather'
import Splitwise from "./route/Splitwise"
import { BrowserRouter,Routes, Route,Link } from 'react-router'



const ROUTES = {
TicTacToe : "/tic-tac-toe",
ReactReduxStoryBook: "/react-redux-storybook",
Weather: '/weather',
Splitwise: '/splitwise',
Default :"/"
}


function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to={ROUTES.TicTacToe} className='link'>TicTacToe</Link>
      <Link to={ROUTES.ReactReduxStoryBook} className='link'>ReactReduxStoryBook</Link>
      <Link to={ROUTES.Weather} className='link'>Weather</Link>
      <Link to={ROUTES.Splitwise} className='link'> Splitwise</Link>
    </nav>
      <Routes>
        <Route path={ROUTES.TicTacToe} element={<TicTacToe/>}/>
        <Route path={ROUTES.ReactReduxStoryBook} element={<ReactReduxStoryBook/>}/>
        <Route path={ROUTES.Weather} element={<Weather/>}/>
        <Route path={ROUTES.Splitwise} element={<Splitwise/>}/>
        <Route path={ROUTES.Default} element={<TicTacToe/>}/>     
      </Routes>
    </BrowserRouter>
  )
}

export default App
