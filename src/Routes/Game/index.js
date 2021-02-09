import React, {useState} from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import StartPage from './Routes/Start'
import BoardPage from './Routes/Board/index'
import FinishPage from './Routes/Finish/index'
import {PokemonContext} from '../../context/PokemonContext'
const GamePage = () => {
    const [isCards, setCards] = useState([])
    const match = useRouteMatch();
    const onClickHandlerAdd = (obj) => {
        obj.minimize = true
        const newArr = isCards.map((item) => {return {...item}})
        newArr.push(obj)
        setCards(newArr)
    }
    const onClickHandlerRemove = (id) =>{
        const newArr = isCards.map((item) => {return {...item}}) 
        const index = newArr.findIndex((item) => {
            return item.id === id
        })
        newArr.splice(index, 1)
        setCards(newArr)
    }
    return (
        <PokemonContext.Provider value = {({
            pokemons:isCards,
            clickHandlerAdd:onClickHandlerAdd,
            clickHandlerRemove:onClickHandlerRemove,
        })}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PokemonContext.Provider>
    );
};
export default GamePage