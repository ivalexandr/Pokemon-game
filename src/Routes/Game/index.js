import { useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useHistory } from 'react-router-dom'
import { POKEMONS } from '../../Pokemon'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import img from '../../Routes/Home/bg1.jpg'
import classes from './style.module.css'
const GamePage = () => {
    const history = useHistory()
    const handlerClick = () => {
        history.push('/')
    }
    const [isCards, setCards] = useState(POKEMONS)
    const handlerClickCard = (id) => {
        let newPokemonsCards = []
        newPokemonsCards = isCards.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    active: !item.active
                }
            }
            return item
        })
        setCards(newPokemonsCards)
    }
    return (
        <>
            <button className={classes.btn} onClick={handlerClick}>
                Return to HomePage
            </button>
            <Layout
                title="CARDS GAME POKEMONS!"
                urlBg = {img}
            >
                <div className={classes.flex}>
                    {
                        isCards.map(item => <PokemonCard
                            key={item.id}
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