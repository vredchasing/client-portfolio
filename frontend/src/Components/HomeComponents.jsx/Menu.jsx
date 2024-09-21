import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const Menu = forwardRef((props, ref) => {

    const menuLinks = [
        {linkName:'HOME', linkSrc:''},
        {linkName:'ABOUT', linkSrc:''},
        {linkName:'PROJECTS', linkSrc:''},
        {linkName:'CONTACT', linkSrc:''},
    ]

    function CreateMenuLink ({link, index}){
        return (
            <li className="menu-links" ref={setMenuLinkRef(index)}>{link.linkName}</li>
        )
    }

    const menuLinkRef = useRef([])
    const setMenuLinkRef = (index)=>(el)=>{
        if(el){
            menuLinkRef.current[index] = el 
        }
    }

    function menuOpenLinksAnimation (){
        const menuLinks = menuLinkRef.current
        menuLinks.forEach((link, index)=>{
            setTimeout(()=>{
                link.style.scale = '0.9'
                link.style.opacity = '1'
            },index*70)
        })
    }

    function menuCloseLinksAnimation (){
        const menuLinks = menuLinkRef.current
        menuLinks.forEach((link, index)=>{
            setTimeout(()=>{
                link.style.scale = '1'
                link.style.opacity = '0'
            },index*50)
        })
    }


    const menuSectionRef = useRef();
    const closeMenuRef = useRef();
    const closeMenuImgRef = useRef();

    useImperativeHandle(ref, ()=>({
        closeMenu : closeMenuRef.current,
        menuOpenLinksAnimation : menuOpenLinksAnimation,
        menuCloseLinksAnimation : menuCloseLinksAnimation
    }))
    const setMenuSectionRef = (el) => {
        if (el) {
            menuSectionRef.current = el;
        }
    };
    const setCloseMenuRef = (el) => {
        if (el) {
            closeMenuRef.current = el;
        }
    };
    const setCloseMenuImgRef = (el) => {
        if (el) {
            closeMenuImgRef.current = el;
        }
    };

    function closeMenuHover() {
        const closeMenuImg = closeMenuImgRef.current;
        closeMenuImg.style.scale = '1.25';
    }

    function closeMenuUnhover() {
        const closeMenuImg = closeMenuImgRef.current;
        closeMenuImg.style.scale = '1';
    }

    useEffect(() => {
        const closeMenu = closeMenuRef.current;
        const handleHover = () => {
            closeMenuHover();
        };
        const handleUnhover = () => {
            closeMenuUnhover();
        };
        closeMenu.addEventListener('mouseover', handleHover);
        closeMenu.addEventListener('mouseout', handleUnhover);

        return () => {
            closeMenu.removeEventListener('mouseover', handleHover);
            closeMenu.removeEventListener('mouseout', handleUnhover);
        };
    }, []);

    return (
        <section className="menu-section" ref={setMenuSectionRef}>
            <div className="close-menu-container" ref={setCloseMenuRef}>
                <div className="close-menu-img-container" ref={setCloseMenuImgRef}>
                    <img className="close-menu-img" src="close-menu.svg" alt="Close Menu" />
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
                        {menuLinks.map((link, index)=>{
                            return (
                                <CreateMenuLink key={index} link={link} index={index}></CreateMenuLink>
                            )
                        })}
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
    );
});

export default Menu;