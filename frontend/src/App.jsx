import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import InertiaScroll from './Functions/InertiaScroll'
import Menu from './Components/HomeComponents.jsx/Menu'
import CustomCursorTracker from './Functions/CustomCursorTracker'
import LoadingPage from './Components/HomeComponents.jsx/LoadingPage/LoadingPage'

export const Context = React.createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true)

  function updateIsLoading (){
    setTimeout(()=>{
      setIsLoading(false)
    }, 1000)
  }

  useEffect(()=>{
    updateIsLoading()
  }, [])

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
    if (menuWrapper) {
      menuWrapper.style.opacity = 1
      menuWrapper.style.pointerEvents = 'auto'
    }
    const menuLinksOpenAnimationFunc = menuForwardedRefs.current?.menuOpenLinksAnimation
    if (menuLinksOpenAnimationFunc) {
      menuLinksOpenAnimationFunc()
    }
  }

  function closeMenu (){
    const menuWrapper = menuWrapperRef.current
    if (menuWrapper) {
      menuWrapper.style.opacity = '0'
      menuWrapper.style.pointerEvents = 'none'
    }
    const menuLinksCloseAnimationFunc = menuForwardedRefs.current?.menuCloseLinksAnimation
    if (menuLinksCloseAnimationFunc) {
      menuLinksCloseAnimationFunc()
    }
  }

  useEffect(() => {
    if (!isLoading) {
      const openMenuIcon = headerForwardedRefs.current?.menuIcon
      const closeMenuIcon = menuForwardedRefs.current?.closeMenu

      if (openMenuIcon && closeMenuIcon) {
        const handleOpenMenuClick = () => openMenu()
        const handleCloseMenuClick = () => closeMenu()

        openMenuIcon.addEventListener('click', handleOpenMenuClick)
        closeMenuIcon.addEventListener('click', handleCloseMenuClick)

        return () => {
          openMenuIcon.removeEventListener('click', handleOpenMenuClick)
          closeMenuIcon.removeEventListener('click', handleCloseMenuClick)
        }
      }
    }
  }, [isLoading])  // Only run effect if not loading

  return (
    <Context.Provider value={{isLoading, setIsLoading}}>
      {isLoading ? <LoadingPage /> :
            <section className='mainbody'>
              <CustomCursorTracker />
              <section className="menu-section-wrapper" ref={setMenuWrapperRef}>
                <Menu ref={menuForwardedRefs} />
              </section>
              <Header ref={headerForwardedRefs} />
              <Outlet />
              <Footer />
            </section>}
    </Context.Provider>
  )
}

export default App