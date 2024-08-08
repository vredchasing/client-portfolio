import { useRef, useState, useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';
import Experience from "../Components/HomeComponents.jsx/Experience";
import Projects from "../Components/HomeComponents.jsx/Projects";

const homeText1 = ['H', 'e', 'l', 'l', 'o']
const homeText2 = [',']
const homeText3 = ['नमस्ते']
const aboutNameIntro = ['My', 'name', 'is']


const experienceTitle = ['E','X','P','E','R','I','E','N','C','E']
const projectsTitle = ['P','R','O','J','E','C','T','S']


function Home (){

    useEffect(() => {
        const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
          damping: 0.0001   , // Adjust for more or less dampening
          renderByPixels: true,
        });
    
        return () => scrollbar.destroy();
      }, []);

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
                <h1 className='letter' ref={setHomeText3LetterRef(index)}>{letter}</h1>
            </div>
        )
    }   

    useEffect(()=>{
        setTimeout(()=>{
            textEffectOnMount()
        }, 100)
    }, [viewportHeight, viewportWidth])




    
    // About
    
    const HomeTextAboutRef = useRef(null)

    const setHomeTextAboutRef = (el)=>{
        if(el){
            HomeTextAboutRef.current = el
        }
    }

    const aboutText1Ref = useRef([])

    const setAboutText1Ref = (index) => (el)=>{
        aboutText1Ref.current[index] = el
    }


    function aboutTextAnimation (){
        const container = HomeTextAboutRef.current
        const rect = container.getBoundingClientRect()
        console.log(aboutText1Ref.current)

        if(rect.top<viewportHeight){
            container.style.opacity = '1'
            aboutText1Ref.current.forEach((word, index)=>{
                setTimeout(()=>{
                    word.style.transform = `translateY(0vw)`
                }, index*100)
            })
        }
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



    return(
        <section className='home-wrapper'>
            <div className="home-fixed-content1" ref={setFixedContentRef}>
                <div className='home1-content-wrapper' ref={setHome1WrapperRef} id="scroll-container">
                    <div className='home1-text-container'>

                        <div className="home1-text-container-top">
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
                        <div className="home1-text-container-bottom">
                            <div className="home1-text-container-bottom-wrapper" ref={setHomeTextAboutRef}>
                                <div className="homeText5">
                                    <div className="about-name-wrapper">
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
                                <div className="about-p-wrapper">
                                    <p className="homeText5v2">Over the years, I've worked on a variety of projects within the ever evolving field of Information Technology. This website is a collection of my work, highlighting my learning and experimentation.</p>
                                </div>
                                <div className="signature-wrapper">
                                    <div className="signature-container">
                                        <img className="signature" src="signature.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            <section className="projects-section">
                <Projects></Projects>
            </section>
        </section>
    )
}

export default Home

