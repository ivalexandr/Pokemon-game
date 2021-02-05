import { useState } from 'react'
import Menu from '../Menu/Menu'
import NavBar from '../NavBar/NavBar'
const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null)
    const handlerClick = () => {
        setActive(isActive => !isActive)
    }
    const handlerClickMenu = (active) => {
        setActive(active)
    }
    return (
        <>
            <NavBar
                onClickBurger={handlerClick}
                activeClass={isActive}
                bgActive = {bgActive}
            />
            <Menu
                onClickMenuItem = {handlerClickMenu}
                activeClass={isActive}
            />

        </>
    )
}
export default MenuHeader