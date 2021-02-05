import classNames from 'classnames'
import {Link} from 'react-router-dom'
import classes from './Menu.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '/',
    },
    {
        title: 'GAME',
        to: 'game',
    },
    {
        title: 'ABOUT',
        to: 'about',
    },
    {
        title: 'CONTACTS',
        to: 'contacts',
    },
]
const Menu = ({ activeClass, onClickMenuItem }) => {
    const handlerClick = () => {
        onClickMenuItem(!activeClass)
    }
    return (
        <div className={classNames(classes.menuContainer, { [classes.active]: activeClass === true, [classes.deactive]: activeClass === false })}>
            <div className={classes.overlay} />
            <div className={classes.menuItems}>
                <ul>
                    {
                        MENU.map((menuItem, index) => {
                            return (
                                <li key={index}>
                                    <Link onClick = {handlerClick} to={menuItem.to}>
                                        {menuItem.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Menu