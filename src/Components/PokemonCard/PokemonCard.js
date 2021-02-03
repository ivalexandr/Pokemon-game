import { React } from 'react'
import classNames from 'classnames'
import BackImg from '../../card-back-side.jpg'
import classes from './PokemonCard.module.css'
const PokemonCard = ({ name, img, id, type, values, isActive, onClickCard }) => {
    const handlerClick = (i) => {

        onClickCard(id)
    }
    return (
        <div className={classNames(classes.root)} onClick={handlerClick}>
            <div className={classNames(classes.pokemonCard, { [classes.active]: isActive })}>
                <div className={classNames(classes.cardFront)}>
                    <div className={classNames(classes.wrap, classes.front)}>
                        <div className={classNames(classes.pokemon, classes[type])}>
                            <div className={classNames(classes.values)}>
                                <div className={classNames(classes.count, classes.top)}>{values.top}</div>
                                <div className={classNames(classes.count, classes.right)}>{values.right}</div>
                                <div className={classNames(classes.count, classes.bottom)}>{values.bottom}</div>
                                <div className={classNames(classes.count, classes.left)}>{values.left}</div>
                            </div>
                            <div className={classNames(classes.imgContainer)}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={classNames(classes.info)}>
                                <span className={classNames(classes.number)}>#{id}</span>
                                <h3 className={classNames(classes.name)}>{name}</h3>
                                <small className={classNames(classes.type)}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classNames(classes.cardBack)}>
                    <div className={classNames(classes.wrap, classes.back)}>
                        <img src={BackImg} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokemonCard