import React from 'react'
import classes from './style.module.css';
const BoardPage = () => {

    return (
        <div className={classes.root}>
            <div className={classes.playerOne}>
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