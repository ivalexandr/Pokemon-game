import React, { useState, useEffect } from 'react'
import database from '../../services/firebase'
import Layout from '../../Components/Layout/Layout'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import img from '../../Routes/Home/bg1.jpg'
import classes from './style.module.css'
const GamePage = () => {
    const [isCards, setCards] = useState({})
    const [isRender, setRender] = useState(false)
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
    const handlerClickAdd = async () => {
        const newKey = database.ref().child('pokemons').push().key;
        await database.ref('pokemons/' + newKey).set({
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
        .then(() => setRender(!isRender))
        .catch(e => console.log(e))
    }
    const getCardsDataBase = async (name) => {
        await database.ref(name).once('value', snapshot => setCards(snapshot.val()))
        .catch(e => {console.log(e)})
    }
    useEffect(() => {
        console.log('render')
        getCardsDataBase('pokemons')
        if(isRender === true){
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