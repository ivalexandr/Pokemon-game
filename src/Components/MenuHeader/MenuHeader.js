import { useState } from 'react'
import Menu from '../Menu/Menu'
import NavBar from '../NavBar/NavBar'

const MenuHeader = () => {

    const [isActive, setActive] = useState(false)
    const handlerClick = (e) => {
    e.preventDefault()
    if(isActive){
        setActive(false)
    }else{
        setActive(true)
    }

}
    return (
        <>
            <NavBar 
                onClickBurger = {handlerClick}
                activeClass = {isActive}
            />
            <Menu 
                activeClass = {isActive}
            />
        </>
    )
}
export default MenuHeader