import classNames from 'classnames'
import {useHistory} from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    const history = useHistory()
    const handlerClick = () => {
        history.push('/game')
    }
    return (
        <header className={classNames(classes.root)}>
            <div className={classNames(classes.forest)}></div>
            <div className = {classes.silhouette}></div>
            <div className = {classes.moon}></div>
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