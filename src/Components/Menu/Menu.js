import classNames from 'classnames'
import classes from './Menu.module.css'

const Menu = (props) => {
    return (
        <div className={classNames(classes.menuContainer, props.counterActive === 1 ? (props.activeClass ? classes.active : classes.deactive) : null)}>
            <div className={classes.overlay} />
            <div className={classes.menuItems}>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Menu