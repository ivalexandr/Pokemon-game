import React, { useState, useEffect } from 'react'
import database from '../../services/firebase'
import Layout from '../../Components/Layout/Layout'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import img from '../../Routes/Home/bg1.jpg'
import classes from './style.module.css'
const GamePage = () => {
    const [isCards, setCards] = useState({})
    const handlerClickCard = (id) => {
        setCards(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] }
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active
                }
                acc[item[0]] = pokemon
                return acc
            }, {})
        })
        Object.entries(isCards).forEach(([key, item]) => {
            const pokemon = { ...item }
            if (pokemon.id === id) {
                database.ref('pokemons/' + key).set(({
                    ...pokemon,
                    active: !pokemon.active,
                }))
            }
        })
    }
    const handlerClickAdd = () => {
        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set({
            "abilities": ["keen-eye", "tangled-feet", "big-pecks"],
            "base_experience": 122,
            "height": 11,
            "id": 17,
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
            "name": "pidgeotto",
            "stats": {
                "attack": 60,
                "defense": 55,
                "hp": 63,
                "special-attack": 50,
                "special-defense": 50,
                "speed": 71
            },
            "type": "flying",
            "values": {
                "bottom": 7,
                "left": 5,
                "right": 2,
                "top": "A"
            }
        })
        setCards(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = { ...item[1] }
                acc[item[0]] = pokemon
                return acc
            }, {})
        })
    }
    useEffect(() => {
        database.ref('pokemons').once('value', snapshot => {
            setCards(snapshot.val())
        })
    }, [isCards])

    return (
        <>
            <Layout
                title="CARDS GAME POKEMONS!"
                urlBg={img}
            >
                <button className={classes.btn} onClick={handlerClickAdd}>
                    ADD CARD
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
export default GamePage