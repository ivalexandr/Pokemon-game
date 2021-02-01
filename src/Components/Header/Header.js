import classNames from 'classnames'
import classes from './Header.module.css'

const Header = (props) => {
    const handlerClick = () => {
        console.log('#####','<Header />')
        props.onClickButton && props.onClickButton('game')
    }
    return (
        <header className={classNames(classes.root)}>
            <div className={classNames(classes.forest)}></div>
            <div className={classNames(classes.container)}>
                <h1>{props.title}</h1>
                <p>{props.descr}</p>
                <button className = {classes.btn} onClick = {handlerClick}>
                    Start Game!
                </button>
            </div>
        </header>
    )
}
export default Header