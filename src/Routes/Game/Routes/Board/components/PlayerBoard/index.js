import React, { useState } from 'react'
import PokemonCard from '../../../../../../Components/PokemonCard/PokemonCard'
import cn from 'classnames'
import classes from './style.module.css'
const PlayerBoard = ({ cards, onClickCard, player }) => {
    const [isSelected, setSelected] = useState(null)
    return (
        <>

            {cards.map((item) => (
                <div
                    className={cn(classes.cardBoard, { [classes.selected]: isSelected === item.id })}
                    onClick={() => {
                        setSelected(item.id);
                        onClickCard && onClickCard({...item, player})
                    }}
                    key={item.id}
                >
                    <PokemonCard
                        name={item.name}
                        img={item.img}
                        id={item.id}
                        type={item.type}
                        values={item.values}
                        isActive
                        minimize
                    />
                </div>
            ))}
        </>
    )
}
export default PlayerBoard