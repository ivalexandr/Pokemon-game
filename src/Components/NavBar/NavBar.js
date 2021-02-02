import classNames from 'classnames'
import classes from './NavBar.module.css'

const NavBar = (props) => {
    return (
        <nav id={classes.navbar}>
            <div className={classes.navWrapper}>
                <p className={classes.brand}>
                    LOGO
                </p>
                <a onClick = {props.onClickBurger} href = '/#' className = {classNames(classes.menuButton, {[classes.active]:props.activeClass})}>
                    <span />
                </a>
            </div>
        </nav>
    )
}
export default NavBar