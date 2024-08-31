import Menu from "./HomeComponents.jsx/Menu"
import Navbar from "./Navbar"
import { useEffect, useRef } from "react"

function Header (){

    const navbarRef = useRef([])
    const setNavbarRef = (el)=>{
        if(el){
            navbarRef.current = el
        }
    }

    function hideOrShowNavbar (){
        const navbar = navbarRef.current
        navbar.style.opacity = window.scrollY===0 ? '1': '0'
        navbar.style.scale = window.scrollY===0 ? '1' : '0.9'
    }

    useEffect(()=>{
        const handleScroll = () => {
            hideOrShowNavbar()
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])




    // CODE FOR MENU OPEN AND CLOSE

    const menuIconRef = useRef()
    const setMenuIconRef = (el)=>{
        if(el){
            menuIconRef.current = el
        }
    }

    function menuOpen (){
        const menu = menuIconRef.current
    }

    function closeMenu (){

    }



    useEffect(()=>{
        const menu = menuIconRef.current
        const handleMenuOpen = ()=>{
            menuOpen()
        }
        menu.addEventListener('click', handleMenuOpen)

        return ()=>{
            menu.removeEventListener('click', handleMenuOpen)
        }
    }, [])

    return(
        <section className="header-wrapper">
            <div className="logo-container">
                <h1 className="logo">PG</h1>
            </div>
            <div className="navbar-wrapper-main" ref={setNavbarRef}>
                <Navbar></Navbar>
            </div>
            <div className="menu-container" ref={setMenuIconRef}>
                <div className="menu-icon-container">
                    <img className="menu-icon" src="close-menu.svg"></img>
                </div>
                <div className="menu-text-container">
                    <h1 className="menu-text">MENU</h1>
                </div>
            </div>

            <section className="menu-section-wrapper">
                <Menu></Menu>
            </section>

        </section>
    )

}

export default Header