import React, { useState, useEffect } from 'react'
import database from '../../../../services/firebase'
import Layout from '../../../../Components/Layout/Layout'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import img from '../../../Home/bg1.jpg'
import { useHistory } from 'react-router-dom'
import classes from './style.module.css'
const StartPage = () => {
    const [isCards, setCards] = useState({})
    const [isRender, setRender] = useState(false)
    const history = useHistory()
    const handlerClickCard = async (id) => {
        const newObject = Object.entries(isCards).reduce((acc, item) => {
            const pokemon = { ...item[1] }
            if (pokemon.id === id) {
                pokemon.active = !pokemon.active
            }
            acc[item[0]] = pokemon
            return acc
        }, {})
        setCards(newObject)
        await database.ref('pokemons/').set(newObject).catch(e => console.log(e))
    }
    const handlerClickAdd = () => {
        history.push('/game/board')
    }
    const getCardsDataBase = async (name) => {
        await database.ref(name).once('value', snapshot => setCards(snapshot.val()))
            .catch(e => { console.log(e) })
    }
    useEffect(() => {
        console.log('render')
        getCardsDataBase('pokemons')
        if (isRender === true) {
            setRender(!isRender)
        }
    }, [isRender])
    return (
        <>
            <Layout
                title="CARDS GAME POKEMONS!"
                urlBg={img}
            >
                <button className={classes.btn} onClick={handlerClickAdd}>
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
                            isActive={item.active}
                            onClickCard={handlerClickCard}
                        />)
                    }
                </div>
            </Layout>
        </>
    )
}
export default StartPage