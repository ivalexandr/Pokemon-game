import { React } from 'react'
import classNames from 'classnames'
import HomePage from './Routes/Home/index'
import GamePage from './Routes/Game/index'
import AboutPage from './Routes/About/index'
import ContactsPage from './Routes/Contacts/index'
import NotFoundPage from './Routes/NotFound/index'
import MenuHeader from './Components/MenuHeader/MenuHeader'
import Footer from './Components/Footer/Footer'
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom'
import classes from './App.module.css'
const App = () => {
  const match = useRouteMatch('/')
  console.log(match)

  return (

    <Switch>
      <Route path='/notFound' component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={classNames(classes.wrapper, { [classes.isHomePage]: match.isExact })}>
            <Switch >
              <Route path='/' exact component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/contacts' component={ContactsPage} />
              <Route render={() => (
                <Redirect to='/notFound' />
              )
              } />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>

  )
}
export default App