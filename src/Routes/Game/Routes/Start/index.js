import React, { useState, useEffect, useContext } from 'react'
import { getCardsDataBase } from '../../../../services/firebase'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import { useHistory } from 'react-router-dom'
import { PokemonContext } from '../../../../context/PokemonContext'
import classes from './style.module.css'

const StartPage = () => {

    const [isCards, setCards] = useState({})
    const history = useHistory()
    const context = useContext(PokemonContext)
    const handlerClickCard = (id) => {
        const newObject = Object.entries(isCards).reduce((acc, item) => {
            const pokemon = { ...item[1] }
            if (pokemon.id === id) {
                pokemon.isSelected = !pokemon.isSelected
                context.clickHandlerAdd(pokemon)
                if (!pokemon.isSelected) {
                    context.clickHandlerRemove(pokemon.id)
                }
            }
            acc[item[0]] = pokemon
            return acc
        }, {})
        setCards(newObject)
    }
    const handlerClickStart = () => {
        if (context.pokemons.length < 5) {
            alert('Нужно выбрать 5 покемонов')
        } else {
            history.push('/game/board')
        }
    }
    useEffect(() => {
        getCardsDataBase('pokemons')
            .then(snapshot => snapshot.val())
            .then(res => setCards(res))
            .catch(e => console.log(e))
    }, [])
    return (
        <>
            <button className={classes.btn} onClick={handlerClickStart}>
                START GAME
                </button>
            <div className={classes.flex}>
                {
                    Object.entries(isCards).map(([key, item]) => <PokemonCard
                        key={key}
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        type={item.type}
                        values={item.values}
                        className={classes.startCardsSize}
                        isActive={true}
                        isSelected={item.isSelected}
                        onClickCard={handlerClickCard}
                    />)
                }
            </div>
        </>
    )
}
export default StartPage