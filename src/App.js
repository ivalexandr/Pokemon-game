import { React, useState } from 'react'
import HomePage from './Routes/Home/index'
import GamePage from './Routes/Game/index'

const App = () => {
  const [page, setPage] = useState('app')
  const handlerChangePage = (page) => {
    console.log('#####', '<App />')
    setPage(page)
  }
  switch (page) {
    case 'app':
      return <HomePage onChangePage = {handlerChangePage} />
    case 'game':
      return <GamePage onChangePage = {handlerChangePage}/>
    default:
      return <HomePage />
  }
}
export default App