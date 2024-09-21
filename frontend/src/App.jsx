import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import InertiaScroll from './Functions/InertiaScroll'
import Menu from './Components/HomeComponents.jsx/Menu'
import CustomCursorTracker from './Functions/CustomCursorTracker'

function App() {
  const menuWrapperRef = useRef()
  const setMenuWrapperRef = (el)=>{
    if(el){
      menuWrapperRef.current = el
    }
  }

  const headerForwardedRefs = useRef()
  const menuForwardedRefs = useRef()

  function openMenu (){
    const menuWrapper = menuWrapperRef.current
    menuWrapper.style.opacity = 1
    menuWrapper.style.pointerEvents = 'auto'
    const menuLinksOpenAnimationFunc = menuForwardedRefs.current.menuOpenLinksAnimation
    menuLinksOpenAnimationFunc()
  }
  function closeMenu (){
    const menuWrapper = menuWrapperRef.current
    menuWrapper.style.opacity = '0'
    menuWrapper.style.pointerEvents = 'none'
    const menuLinksCloseAnimationFunc = menuForwardedRefs.current.menuCloseLinksAnimation
    menuLinksCloseAnimationFunc()
  }

  useEffect(()=>{
    const openMenuIcon = headerForwardedRefs.current.menuIcon
    const closeMenuIcon = menuForwardedRefs.current.closeMenu

    const handleOpenMenuClick = ()=>{
      openMenu()
    }
    const handleCloseMenuClick = ()=>{
      closeMenu()
    }

    openMenuIcon.addEventListener('click', handleOpenMenuClick)
    closeMenuIcon.addEventListener('click', handleCloseMenuClick)
  }, [])

  return (
    
    <section className='mainbody'>
      <CustomCursorTracker></CustomCursorTracker>
      <section className="menu-section-wrapper" ref={setMenuWrapperRef}>
        <Menu ref={menuForwardedRefs}></Menu>
      </section>
      <Header ref={headerForwardedRefs}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  )
}

export default App
