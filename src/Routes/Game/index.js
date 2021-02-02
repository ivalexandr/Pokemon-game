import classes from './style.module.css'

const GamePage = (props) => {
    const handlerClick = () => {
        console.log('####', '<GamePage/>')
        props.onChangePage && props.onChangePage('app')
    }
    return(
        <div>
            <h2>This is page GamePages</h2>
            <button className = {classes.btn} onClick = {handlerClick}>
                Return to HomePage
            </button>
        </div>
    )
}
export default GamePage