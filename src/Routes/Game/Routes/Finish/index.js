import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PokemonContext } from '../../../../context/PokemonContext'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import { FireBaseContext } from '../../../../context/FireBaseContext'
import s from './style.module.css'

const FinishPage = () => {
    const context = useContext(PokemonContext)
    const firebase = useContext(FireBaseContext)
    const [choiseCard, setChoiseCard] = useState([])
    const [playerTwoCards, setPlayerTwoCards] = useState([])
    const history = useHistory()
    if(!context.isSteps){
        history.replace('/game')
    }
    const endClickHandler = () => {
        context.getEnd(true)
        if (context.isWin) {
            firebase.setCardDataBase(choiseCard)
        } else {
            alert('Вы не можете забрать карту, так как не победили')
        }
        history.replace('/game')
    }
    const onClickCardHandler = (id) => {
        const newArr = playerTwoCards.map((item) => {
            return{
                ...item,
                selected:false,
            }
        })
        setPlayerTwoCards( newArr.map(item => {
            if(item.id === id){
                setChoiseCard(item)
                item = {
                    ...item,
                    selected:!item.selected,
                }
            }
            return {...item}
        }))
    }
    useEffect(() => {
        setPlayerTwoCards(context.playerTwoCards.data)
    }, [])
    return (
        <>
            <div className={s.grid}>
                {
                    Object.values(context.pokemons).map((item, index) => {
                        return (
                            <div
                                className={s.cardBoard}
                                key={index}
                            >
                                <PokemonCard
                                    name={item.name}
                                    img={item.img}
                                    id={item.id}
                                    type={item.type}
                                    values={item.values}
                                    isActive
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={endClickHandler} className={s.btn}>END GAME</button>
            <div className={s.grid}>
                {
                    playerTwoCards.map((item, index) => {
                        return (
                            <div
                                className={s.cardBoard}
                                key={index}
                            >
                                <PokemonCard
                                    name={item.name}
                                    img={item.img}
                                    id={item.id}
                                    type={item.type}
                                    values={item.values}
                                    isActive
                                    isSelected = {item.selected}
                                    onClickCard={onClickCardHandler}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FinishPage