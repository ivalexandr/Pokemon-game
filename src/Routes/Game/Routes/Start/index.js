import React, { useState, useEffect, useContext } from 'react'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import { useHistory } from 'react-router-dom'
import { PokemonContext } from '../../../../context/PokemonContext'
import { FireBaseContext } from '../../../../context/FireBaseContext'
import classes from './style.module.css'

const StartPage = () => {
    const firebase = useContext(FireBaseContext)
    const context = useContext(PokemonContext)
    const [cards, setCards] = useState({})
    const history = useHistory()
    const clickSelectedHandler = (key) => {
        const pokemon = { ...cards[key] }
        context.onSelecetedPokemons(key, pokemon)
        setCards(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            },
        }))
    }
    const handlerClickStart = () => {
        history.push('/game/board')

    }
    const getPokemons = async () => {
        const response = await firebase.getCardsDataBase('pokemons')
        setCards(response)
    }
    useEffect(() => {
        getPokemons()
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <button className={classes.btn} onClick={handlerClickStart} disabled ={Object.keys(context.pokemons).length < 5}>
                START GAME
                </button>
            <div className={classes.flex}>
                {
                    Object.entries(cards).map(([key, item]) => <PokemonCard
                        key={key}
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        type={item.type}
                        values={item.values}
                        className={classes.startCardsSize}
                        onClickCard={() => {
                            if (Object.keys(context.pokemons).length < 5 || item.selected) {
                                clickSelectedHandler(key)
                            }
                        }}
                        isActive={true}
                        isSelected={item.selected}

                    />)
                }
            </div>
        </>
    )
}
export default StartPage