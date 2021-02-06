import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {POKEMONS} from '../../Pokemon'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
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
            if(item.id === id){
                return{
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
            <div>
                <h2>This is page GamePages</h2>
                <button className={classes.btn} onClick={handlerClick}>
                    Return to HomePage
            </button>
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
            </div>
        </>

    )
}
export default GamePage