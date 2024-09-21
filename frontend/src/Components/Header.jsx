import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'
import Navbar from "./Navbar"

const Header = forwardRef((props, ref) => {
    const navbarRef = useRef(null)
    const setNavbarRef = (el) => {
        if (el) {
            navbarRef.current = el
        }
    }

    function hideOrShowNavbar() {
        const navbar = navbarRef.current
        if (navbar) {
            navbar.style.opacity = window.scrollY === 0 ? '1' : '0'
            navbar.style.scale = window.scrollY === 0 ? '1' : '0.9'
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            hideOrShowNavbar()
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const menuIconRef = useRef(null)
    useImperativeHandle(ref, () => ({
        menuIcon : menuIconRef.current
    }));
    const setMenuIconRef = (el) => {
        if (el) {
            menuIconRef.current = el
        }
    }

    function menuOpen() {
        const menu = menuIconRef.current
    }

    function closeMenu() {
    }

    useEffect(() => {
        const menu = menuIconRef.current
        const handleMenuOpen = () => {
            menuOpen()
        }
        if (menu) {
            menu.addEventListener('click', handleMenuOpen)
        }

        return () => {
            if (menu) {
                menu.removeEventListener('click', handleMenuOpen)
            }
        }
    }, [])

    const headerWrapperRef = useRef()
    const setHeaderWrapperRef = (el) =>{
        if(el){
            headerWrapperRef.current = el;
        }
    }

    useEffect(()=>{
        const header = headerWrapperRef.current
        header.style.transform = 'translateY(0vh)'
        header.style.opacity = '1'
    }, [])

    return (
        <section className="header-wrapper" ref={setHeaderWrapperRef}>
            <div className="logo-container">
                <h1 className="logo">PG</h1>
            </div>
            <div className="navbar-wrapper-main" ref={setNavbarRef}>
                <Navbar />
            </div>
            <div className="menu-container" ref={setMenuIconRef}>
                <div className="menu-icon-container">
                    <img className="menu-icon" src="/public/close-menu.svg" alt="Menu Icon" />
                </div>
                <div className="menu-text-container">
                    <h1 className="menu-text">MENU</h1>
                </div>
            </div>
        </section>
    )
})

export default Header