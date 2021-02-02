import { useState } from 'react'
import Menu from '../Menu/Menu'
import NavBar from '../NavBar/NavBar'

const MenuHeader = () => {

    const [isActive, setActive] = useState(false)
    const [isCounter, setCounter] = useState(0)
    const handlerClick = (e) => {
        setCounter(1)
    e.preventDefault()
    if(isActive){
        setActive(!isActive)
    }else{
        setActive(!isActive)
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
                counterActive = {isCounter}
            />
        </>
    )
}
export default MenuHeader