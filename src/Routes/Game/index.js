import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import StartPage from './Routes/Start'
import BoardPage from './Routes/Board/index'
import FinishPage from './Routes/Finish/index'
import { PokemonContext } from '../../context/PokemonContext'
const GamePage = () => {
    const [selectedCards, setSelectedCards] = useState({})
    const match = useRouteMatch()
    const selectedPokemonshandler = (key, pokemon) => {
        setSelectedCards(prevState => {
            if (prevState[key]) {
                const copyCards = { ...prevState }
                delete copyCards[key]
                return copyCards
            }
            return {
                ...prevState,
                [key]: pokemon,
            }
        })
    }
    return (
        <PokemonContext.Provider value={({
            pokemons: selectedCards,
            onSelecetedPokemons: selectedPokemonshandler,
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