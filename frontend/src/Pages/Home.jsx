import { useRef, useState, useEffect } from "react"
import Experience from "../Components/HomeComponents.jsx/Experience";
import Projects from "../Components/HomeComponents.jsx/Projects";
import AboutSlider from "../Components/HomeComponents.jsx/AboutSlider";
import AllProjects from "../Components/HomeComponents.jsx/AllProjects";

const homeText1 = ['H', 'e', 'l', 'l', 'o']
const homeText2 = [',']
const homeText3 = ['नमस्ते']
const aboutNameIntro = ['My', 'name', 'is']


const experienceTitle = ['E','X','P','E','R','I','E','N','C','E']
const projectsTitle = ['P','R','O','J','E','C','T','S']

const projects = [
    { name: 'PROJECT 1', img: 'technology.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
    { name: 'PROJECT 2', img: 'future.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
    { name: 'PROJECT 3', img: 'technology.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
    { name: 'PROJECT 4', img: 'technology.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
    { name: 'PROJECT 3', img: 'technology.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
    { name: 'PROJECT 3', img: 'technology.webp', description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Laoreet phasellus egestas proin aliquet ad est scelerisque.' },
];


function Home (){
    const home1WrapperRef = useRef(null)
    const setHome1WrapperRef = (el)=>{
        if(el){
            home1WrapperRef.current = el
        }
    }
    const fixedContentRef = useRef(null)
    const text1LetterRefs = useRef([])
    const text2LetterRefs = useRef([])
    const text3LetterRefs = useRef([])
    const text4LetterRefs = useRef([])
    const text1LetterContainerRef = useRef([])
    const text2LetterContainerRef = useRef([])
    const text3LetterContainerRef = useRef([])
    const text4LetterContainerRef = useRef([])
    const homeText5Ref = useRef('')
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)



    useEffect(()=>{
        const handleViewportResize=()=>{
            setViewportHeight(window.innerHeight)
            setViewportWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleViewportResize)

        return()=>{
            window.removeEventListener('resize', handleViewportResize)
        }
    }, [])

    const setFixedContentRef = (el)=>{
        if(el){
            fixedContentRef.current=el
        }
    }

    const fixedContentHeight = ()=>{
        return fixedContentRef.current.offsetHeight
    }
    const fixedContentOffset = ()=>{
        return fixedContentRef.current.offsetTop
    }

    function textEffectOnMount() {
        text1LetterRefs.current.forEach((letter, index) => {
            setTimeout(() => {
                if (letter) {
                    letter.style.transform = 'translateY(0vh)';
                }
            }, index*100);
        });
        text2LetterRefs.current.forEach((letter, index) => {
            setTimeout(() => {
                if (letter) {
                    letter.style.transform = 'translateY(0vh)';
                }
            }, ((index+text1LetterRefs.current.length)*100));
        });
        text3LetterRefs.current.forEach((letter, index) => {
            setTimeout(() => {
                if (letter) {
                    letter.style.transform = 'translateY(0vh)';
                }
            }, ((index+text1LetterRefs.current.length+text2LetterRefs.current.length)*100));
        });
    }

    const setHomeText1LetterRef = (index) => (el)=>{
        if (el){
            text1LetterRefs.current[index] = el
        }
    }

    const setHomeText2LetterRef = (index) => (el)=>{
        if (el){
            text2LetterRefs.current[index] = el
        }
    }

    const setHomeText3LetterRef = (index) => (el)=>{
        if (el){
            text3LetterRefs.current[index] = el
        }
    }

    const setHomeText1LetterContainer = (index)=>(el)=>{
        if(el){
            text1LetterContainerRef.current[index] = el
        }
    }
    const setHomeText2LetterContainer = (index)=>(el)=>{
        if(el){
            text2LetterContainerRef.current[index] = el
        }
    }
    const setHomeText3LetterContainer = (index)=>(el)=>{
        if(el){
            text3LetterContainerRef.current[index] = el
        }
    }

    function CreateLetterText1 ({letter, index}){
        return(
            <div className='letter-container' ref={setHomeText1LetterContainer(index)}>
                <h1 className='letter' ref={setHomeText1LetterRef(index)}>{letter}</h1>
            </div>
        )
    }    

    function CreateLetterText2 ({letter, index}){
        return(
            <div className='letter-container' ref={setHomeText2LetterContainer(index)}>
                <h1 className='letter' ref={setHomeText2LetterRef(index)}>{letter}</h1>
            </div>
        )
    }    

    function CreateLetterText3 ({letter, index}){
        return(
            <div className='letter-container' ref={setHomeText3LetterContainer(index)}>
                <h1 className='letter3' ref={setHomeText3LetterRef(index)}>{letter}</h1>
            </div>
        )
    }   

    useEffect(()=>{
        setTimeout(()=>{
            textEffectOnMount()
        }, 100)
    }, [viewportHeight, viewportWidth])





    // EXPERIENCE TITLE ANIMATION 

    const experienceTitleWrapperRef = useRef(null)
    const experienceTitleRef = useRef([])

    const setExperienceTitleWrapperRef = (el)=>{
        if(el){
            experienceTitleWrapperRef.current = el
        }
    }

    const setExperienceTitleRef = (index)=>(el)=>{
        if(el){
            experienceTitleRef.current[index] = el
        }
    }

    function CreateExperienceTitle ({letter, index}){
        return(
            <div className="experience-title-container">
                <h1 className="experience-title" ref={setExperienceTitleRef(index)}>{letter}</h1>
            </div>
        )
    }

    function experienceTitleAnimation (){
        const wrapper = experienceTitleWrapperRef.current
        const rect = wrapper.getBoundingClientRect()

        if(rect.top<viewportHeight*0.9){
            experienceTitleRef.current.forEach((letter, index)=>{
                setTimeout(()=>{
                    letter.style.transform = `translateY(0vh)`
                }, index*80)
            })
        }

    }

    useEffect(()=>{
        const handleExperienceScroll = ()=>{
            experienceTitleAnimation()
        }

        window.addEventListener('scroll', handleExperienceScroll)
        return()=>{
            window.removeEventListener('scroll', handleExperienceScroll)
        }
    })


    const projectTitleWrapperRef = useRef(null)
    const projectTitleRef = useRef([])

    const setProjectTitleWrapperRef = (el)=>{
        if(el){
            projectTitleWrapperRef.current = el
        }
    }

    const setProjectTitleRef = (index)=>(el)=>{
        if(el){
            projectTitleRef.current[index] = el
        }
    }

    function CreateProjectTitle ({letter, index}){
        return(
            <div className="project-title-container">
                <h1 className="project-title" ref={setProjectTitleRef(index)}>{letter}</h1>
            </div>
        )
    }


    
    function projectTitleAnimation (){
        const wrapper = projectTitleWrapperRef.current
        const rect = wrapper.getBoundingClientRect()

        if(rect.top<viewportHeight*0.9){
            projectTitleRef.current.forEach((letter, index)=>{
                setTimeout(()=>{
                    letter.style.transform = `translateY(0vh)`
                }, index*80)
            })
        }

    }

    useEffect(()=>{
        const handleProjectScroll = ()=>{
            projectTitleAnimation()
        }

        window.addEventListener('scroll', handleProjectScroll)
        return()=>{
            window.removeEventListener('scroll', handleProjectScroll)
        }
    })



    //About section logic
    const aboutMainWrapperRef = useRef()
    const aboutRef = useRef()
    const aboutRefOffset = useRef()
    const aboutMainWrapperHeightRef = useRef()
    const aboutNameRef = useRef()
    const aboutParagraphRef = useRef()
    
    const setAboutMainWrapperRef = (el)=>{
        if(el){
            aboutMainWrapperRef.current = el
        }
    }
    const setAboutRef = (el)=>{
        if(el){
           aboutRef.current = el
        }
    }
    const setAboutNameRef = (el)=>{
        if(el){
           aboutNameRef.current = el
        }
    }
    const setAboutParagraphRef = (el)=>{
        if(el){
           aboutParagraphRef.current = el
        }
    }

    const aboutText1Ref = useRef([])

    const setAboutText1Ref = (index) => (el)=>{
        aboutText1Ref.current[index] = el
    }

    const aboutSliderForwardedRefs = useRef()
    function aboutTextAnimation(){
        const aboutSliderAnimation = aboutSliderForwardedRefs.current.aboutSliderAnimation
        const aboutSliderCloseAnimation = aboutSliderForwardedRefs.current.aboutSliderCloseAnimation
        const aboutName = aboutNameRef.current
        const aboutParagraph = aboutParagraphRef.current
        const offset = aboutRefOffset.current
        const height = aboutMainWrapperHeightRef.current
        const transitionPoint = 500

        console.log('offset', offset, 'scrollY', window.scrollY)

        aboutName.style.opacity = window.scrollY>=offset && window.scrollY<offset+transitionPoint ?
            '1' : '0.1';
        window.scrollY >= offset && window.scrollY < offset + transitionPoint 
        ? (() => { aboutSliderAnimation(); signatureAnimationOpen() })()
        : (() => { aboutSliderCloseAnimation(); signatureAnimationClose() })();
          
        aboutParagraph.style.opacity = window.scrollY>=offset+transitionPoint ? 
            '1' : '0.1';
    }


    useEffect(()=>{
        const handleScroll = ()=>{
            aboutTextAnimation()
        }

        window.addEventListener('scroll', handleScroll)
        return()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    useEffect(()=>{
        const aboutMainWrapper = aboutMainWrapperRef.current
        const aboutWrapper = aboutRef.current
        aboutMainWrapperHeightRef.current = aboutMainWrapper.offsetHeight
        aboutRefOffset.current = aboutMainWrapper.offsetTop
    }, [viewportHeight, viewportWidth])


    function viewMoreClickAnimation (){
        const projectsWrapper = projectsSectionWrapperRef.current
        projectsWrapper.style.transform = 'translateX(-100vw)'
    }
    function backButtonClickAnimation (){
        const projectsWrapper = projectsSectionWrapperRef.current
        projectsWrapper.style.transform = 'translateX(0vw)'
    }

    const projectsForwardedRefs = useRef()
    const allProjectsForwardedRefs = useRef()
    const projectsSectionWrapperRef = useRef()
    const setProjectsSectionWrapperRef = (el)=>{
        if(el){
            projectsSectionWrapperRef.current = el
        }
    }
    useEffect(()=>{
        const viewMoreButton = projectsForwardedRefs.current.viewMoreButtonRef
        const backButton = allProjectsForwardedRefs.current.backButtonRef
        const handleViewMoreButtonClick = ()=>{
            viewMoreClickAnimation()
        }
        const handleBackButtonClick = ()=>{
            backButtonClickAnimation()
        }
        viewMoreButton.addEventListener('click', handleViewMoreButtonClick)
        backButton.addEventListener('click', handleBackButtonClick)
        return ()=>{
            viewMoreButton.removeEventListener('click', handleViewMoreButtonClick)
            backButton.removeEventListener('click', handleBackButtonClick)
        }
    },[])


    const landingPageSliderRef = useRef()
    const setLandingPageSliderRef = (el) =>{
        if(el){
            landingPageSliderRef.current = el
        }
    }

    useEffect(()=>{
        const landingPageSlider = landingPageSliderRef.current
        landingPageSlider.style.opacity = '1'
        landingPageSlider.style.transform = 'translateY(0vh)'
    }, [])

    const signatureWrapperRef = useRef()
    const setSignatureWrapperRef = (el) => {
        if(el){
            signatureWrapperRef.current = el
        }
    }

    function signatureAnimationOpen (){
        const signature = signatureWrapperRef.current;
        signature.style.scale = '2'
    }
    function signatureAnimationClose(){
        const signature = signatureWrapperRef.current;
        signature.style.scale = '1'
    }
    
    return(
        <section className='home-wrapper'>
            <div className="home-landing-page-wrapper" ref={setFixedContentRef}>
                <div className='home1-content-wrapper' ref={setHome1WrapperRef} id="scroll-container">

                    <div className='home1-text-container'>
                        <div className="home1-text-container-top">
                            <div className="home1-text-top-wrapper">
                                <div className='home1-text1-container'>
                                    {homeText1.map((letter, index)=>{
                                        return(
                                            <CreateLetterText1 key={index} letter={letter} index={index}></CreateLetterText1>
                                        )
                                    })}
                                </div>
                                <div className='home1-text2-container'>
                                    {homeText2.map((letter, index)=>{
                                        return(
                                            <CreateLetterText2 key={index} letter={letter} index={index}></CreateLetterText2>
                                        )
                                    })}
                                </div>
                                <div className="home1-text3-container">
                                    {homeText3.map((letter, index)=>{
                                        return (
                                            <CreateLetterText3 key={index} letter={letter} index={index}></CreateLetterText3>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="landing-page-slider-wrapper-main">
                        <div className="landing-page-slider-wrapper" ref={setLandingPageSliderRef}>
                            <div className="landing-page-slider">
                                <span className="landing-page-slider-span">
                                    <img className="landing-page-slider-span-img" src="close-menu.svg"></img>
                                </span>
                                <h1 className="landing-page-slider-text">A COLLECTION OF WORKS</h1>
                                <span className="landing-page-slider-span">
                                    <img className="landing-page-slider-span-img" src="close-menu.svg"></img>
                                </span>
                                <h1 className="landing-page-slider-text">कामहरूको संग्रह</h1>
                            </div>

                            <div className="landing-page-slider">
                                <span className="landing-page-slider-span">
                                    <img className="landing-page-slider-span-img" src="close-menu.svg"></img>
                                </span>
                                <h1 className="landing-page-slider-text">A COLLECTION OF WORKS</h1>
                                <span className="landing-page-slider-span">
                                    <img className="landing-page-slider-span-img" src="close-menu.svg"></img>
                                </span>
                                <h1 className="landing-page-slider-text">कामहरूको संग्रह</h1>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className="home-about-section" ref={setAboutMainWrapperRef}>
                <div className="home-about-wrapper" ref={setAboutRef}>
                    <div className="home-about-left-wrapper">
                        <div className="homeText5">
                            <div className="about-name-wrapper">
                                <div className="about-name-container" ref={setAboutNameRef}>
                                    {aboutNameIntro.map((word, index)=>{
                                        return(
                                            <span className="about-word-span" key={index} ref={setAboutText1Ref(index)}>
                                                {word}
                                            </span>
                                        )
                                    })}
                                    <span className="name">Prothsan Gurung.</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-p-wrapper" ref={setAboutParagraphRef}>
                            <p className="homeText5v2">Over the years, I've worked on a variety of projects within the ever evolving field of Information Technology. This website is a collection of my work, highlighting my learning and experimentation.</p>
                        </div>
                    </div>

                    <div className="about-slider-main-wrapper">
                        <div className="signature-wrapper">
                            <img className="signature" src="signature.png" ref={setSignatureWrapperRef}></img>
                        </div>
                        <AboutSlider ref={aboutSliderForwardedRefs}></AboutSlider>
                    </div>
                </div>
            </div>
            <section className="experience-title-wrapper" ref={setExperienceTitleWrapperRef}>
                {experienceTitle.map((letter, index)=>{
                    return(
                        <CreateExperienceTitle key={index} letter={letter} index={index}></CreateExperienceTitle>
                    )
                })}
            </section>
            <Experience></Experience>
            <section className="projects-title-wrapper" ref={setProjectTitleWrapperRef}>
                <div className="projects-title-container-main">
                    {projectsTitle.map((letter, index)=>{
                        return(
                            <CreateProjectTitle key={index} letter={letter} index={index}></CreateProjectTitle>
                        )
                    })}
                </div>
            </section>
            <section className="projects-section-main-wrapper">
                <section className="projects-section-wrapper" ref={setProjectsSectionWrapperRef}>         
                    <section className="projects-wrapper-main">
                        <Projects ref={projectsForwardedRefs}></Projects>
                    </section>
                    <section className="all-projects-wrapper-main">
                        <div className="all-projects-wrapper">
                            <AllProjects array={projects} ref={allProjectsForwardedRefs}></AllProjects>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Home

