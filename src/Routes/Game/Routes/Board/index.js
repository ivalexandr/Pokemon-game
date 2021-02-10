import React, {useContext} from 'react'
import PokemonCard from '../../../../Components/PokemonCard/PokemonCard'
import {PokemonContext} from '../../../../context/PokemonContext'
import classes from './style.module.css';
const BoardPage = () => {
const context = useContext(PokemonContext)
const POKEMONS = context.pokemons
    return (
        <div className={classes.root}>
            <div className={classes.playerOne}>
                {POKEMONS.map((item, id) => {
                    return(
                        <PokemonCard 
                            key={id}
                            name={item.name}
                            img={item.img}
                            id={item.id}
                            type={item.type}
                            values={item.values}
                            isActive={true}
                            className={classes.boardCardsSize}
                            minimize={item.minimize}
                        />
                    )
                })}
            </div>
            <div className={classes.board}>
                <div className={classes.boardPlate}>1</div>
                <div className={classes.boardPlate}>2</div>
                <div className={classes.boardPlate}>3</div>
                <div className={classes.boardPlate}>4</div>
                <div className={classes.boardPlate}>5</div>
                <div className={classes.boardPlate}>6</div>
                <div className={classes.boardPlate}>7</div>
                <div className={classes.boardPlate}>8</div>
                <div className={classes.boardPlate}>9</div>
            </div>
        </div>
    )
}
export default BoardPage