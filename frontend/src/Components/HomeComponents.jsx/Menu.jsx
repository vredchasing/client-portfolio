import { useEffect, useRef } from "react"

function Menu (){
    const menuSectionRef = useRef()
    const closeMenuRef = useRef()
    const closeMenuImgRef = useRef()

    const setMenuSectionRef = (el)=>{
        if(el){
            menuSectionRef.current = el
        }
    }
    const setCloseMenuRef = (el)=>{
        if(el){
            closeMenuRef.current = el
        }
    }
    const setCloseMenuImgRef = (el)=>{
        if(el){
            closeMenuImgRef.current = el
        }
    }

    function closeMenuClick (){
        const menuSection = menuSectionRef.current
        closeMenuRef.style.opacity = '0'
        closeMenuRef.style.pointerEvents = 'none'
    }

    function closeMenuHover (){
        const closeMenuImg = closeMenuImgRef.current
        closeMenuImg.style.scale = '1.25'
    }

    function closeMenuUnhover (){
        const closeMenuImg = closeMenuImgRef.current
        closeMenuImg.style.scale = '1'
    }

    useEffect(()=>{
        const closeMenu = closeMenuRef.current
        const handleClick = ()=>{
            closeMenuClick()
        }
        const handleHover = ()=>{
            closeMenuHover()
        }
        const handleUnhover = ()=>{
            closeMenuUnhover()
        }

        closeMenu.addEventListener('click', handleClick)
        closeMenu.addEventListener('mouseover', handleHover)
        closeMenu.addEventListener('mouseout', handleUnhover)

        return()=>{
            closeMenu.removeEventListener('click', handleClick)
            closeMenu.removeEventListener('mouseover', handleHover)
        }

    },[])

    return(
        <section className="menu-section" ref={setMenuSectionRef}>
            <div className="close-menu-container"  ref={setCloseMenuRef}>
                <div className="close-menu-img-container" ref={setCloseMenuImgRef}>
                    <img className="close-menu-img" src="close-menu.svg"></img>
                </div>
                <h1 className="close-menu-text">CLOSE MENU</h1>
            </div>
            <section className="menu-section-top">
                <div className="menu-top-left">
                    <div className="menu-pg-logo-container">
                        <h1 className="menu-pg-logo">PG</h1>
                    </div>
                </div>
                <div className="menu-top-right">
                    <ul className="menu-links-ul">
                        <li className="menu-links">HOME</li>
                        <li className="menu-links">ABOUT</li>
                        <li className="menu-links">PROJECTS</li>
                        <li className="menu-links">CONTACT</li>
                    </ul>
                </div>
            </section>
            <section className="menu-section-bottom">
                <div className="menu-bottom-left">
                    <div className="menu-email-container">
                        <h1 className="menu-email-text">PROTHSANGURUNG@GMAIL.COM</h1>
                    </div>
                </div>
                <div className="menu-bottom-right">
                    <div className="menu-phone-number-container">
                        <h1 className="menu-phone-number-text">+1 330-123-4567</h1>
                    </div>
                    <div className="menu-linkedin-container">
                        <h1 className="menu-linkedin-text">LINKEDIN</h1>
                    </div>
                    <div className="menu-instagram-container">
                        <h1 className="menu-instagram-text">INSTAGRAM</h1>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Menu