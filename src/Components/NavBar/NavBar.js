import classNames from 'classnames'
import classes from './NavBar.module.css'

const NavBar = ({bgActive = false, activeClass, onClickBurger}) => {
    return (
        <nav id={classes.navbar} className = {classNames({[classes.bgActive]: bgActive}) }>
            <div className={classNames(classes.navWrapper)}>
                <p className={classes.brand}>
                    LOGO
                </p>
                <div onClick = {onClickBurger} className = {classNames(classes.menuButton, {[classes.active]:activeClass})}>
                    <span />
                </div>
            </div>
        </nav>
    )
}
export default NavBar