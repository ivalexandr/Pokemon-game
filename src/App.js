import React from 'react'
import classNames from 'classnames'
import HomePage from './Routes/Home/index'
import GamePage from './Routes/Game/index'
import AboutPage from './Routes/About/index'
import ContactsPage from './Routes/Contacts/index'
import NotFoundPage from './Routes/NotFound/index'
import MenuHeader from './Components/MenuHeader/MenuHeader'
import Footer from './Components/Footer/Footer'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom'
import { FireBaseContext } from './context/FireBaseContext'
import Firebase from './services/firebase'
import classes from './App.module.css'
const App = () => {
  const location = useLocation()
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'
  console.log(location)
  return (
    <FireBaseContext.Provider value = {new Firebase()} >
    <Switch>
      <Route path='/notFound' component={NotFoundPage} />
      <Route>
        <>
          <MenuHeader bgActive={!isPadding} />
          <div className={classNames(classes.wrapper, { [classes.isHomePage]: isPadding })}>
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
</FireBaseContext.Provider>
  )
}
export default App