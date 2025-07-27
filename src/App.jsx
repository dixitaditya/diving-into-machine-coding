import './App.css'

import TicTacToe from "./components/tic-tac-toe"
import ReactReduxStoryBook from "./route/ReactReduxStoryBook"
import Weather from './route/weather'
import { BrowserRouter,Routes, Route,Link } from 'react-router'



const ROUTES = {
TicTacToe : "/tic-tac-toe",
ReactReduxStoryBook: "/react-redux-storybook",
Weather: 'weather',
Default :"/"
}


function App() {

  return (
    <BrowserRouter>
    <nav>
      <Link to={ROUTES.TicTacToe}> TicTacToe • </Link>
      <Link to={ROUTES.ReactReduxStoryBook}> ReactReduxStoryBook • </Link>
      <Link to={ROUTES.Weather}> Weather • </Link>
    </nav>
      <Routes>
        <Route path={ROUTES.TicTacToe} element={<TicTacToe/>}/>
        <Route path={ROUTES.ReactReduxStoryBook} element={<ReactReduxStoryBook/>}/>
        <Route path={ROUTES.Weather} element={<Weather/>}/>
        <Route path={ROUTES.Default} element={<TicTacToe/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
