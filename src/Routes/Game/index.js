import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import StartPage from './Routes/Start'
import BoardPage from './Routes/Board/index'
import FinishPage from './Routes/Finish/index'

const GamePage = () => {
    const match = useRouteMatch();
    console.log(match)
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
    );
};
export default GamePage