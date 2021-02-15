import React, { useState } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import StartPage from './Routes/Start'
import BoardPage from './Routes/Board/index'
import FinishPage from './Routes/Finish/index'
import { PokemonContext } from '../../context/PokemonContext'

const GamePage = () => {
    const [selectedCards, setSelectedCards] = useState({})
    const [playerTwoCard, setPlayerTwoCard] = useState({})
    const [isWin, setWin] = useState(false)
    const [isSteps, setSteps] = useState(false)
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
    const getPlayerTwoPokemons = (obj) => {
        setPlayerTwoCard(() => {
            return obj
        })
    }
    const getWin = (bool) => {
        setWin(() => {
            return bool
        })
        
    }
    const getEnd = (bool) => {
        if(bool){
            setSelectedCards(() => {
                return {}
            })
            setPlayerTwoCard(() => {
                return{}
            })
            setWin(false)
            setSteps(false)
        }
    }
    const getSteps = (bool) => {
        setSteps(bool)
    }
    return (
        <PokemonContext.Provider value={({
            pokemons: selectedCards,
            onSelecetedPokemons: selectedPokemonshandler,
            getPlayerTwoPokemons: getPlayerTwoPokemons,
            playerTwoCards: playerTwoCard,
            getWin: getWin,
            isWin: isWin,
            getEnd: getEnd,
            getSteps:getSteps,
            isSteps:isSteps,

        })}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>

        </PokemonContext.Provider>
    )
}
export default GamePage