import { useRef, useState, useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

const homeText1 = ['H', 'e', 'l', 'l', 'o']
const homeText2 = [',']
const homeText3 = ['नमस्ते']

const homeSliderText1 = []
const homeSliderText2 = []
const homeSliderText3 = []
const homeSliderText4 = []
const homeSliderText5 = []

const aboutText1 = ['N', 'o ','t','e']

const projectTitle = ['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']

function Home (){

    useEffect(() => {
        const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
          damping: 0.001   , // Adjust for more or less dampening
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

        text4LetterRefs.current.forEach((letter, index) => {
            setTimeout(() => {
                if (letter) {
                    letter.style.transform = 'translateY(0vh)';
                    letter.style.color = 'white'
                    letter.style.textShadow = 
                        '2px 2px 0 #000, ' +
                        '-2px -2px 0 #000, ' +
                        '2px -2px 0 #000, ' +
                        '-2px 2px 0 #000';
                }
            }, ((index+text1LetterRefs.current.length+text2LetterRefs.current.length+text3LetterRefs.current.length)*100));
        });
    }

    function introTextAnimation(){
        let midline = viewportHeight/2;
        let percentage = window.scrollY/viewportHeight*100
        const topContainer = HomeTextTopRef.current.getBoundingClientRect()
        const bottomContainer = homeText5Ref.current.getBoundingClientRect()
        const hideContentReference = home2ContentWrapper.current.offsetTop
        console.log('percentage', topContainer.top)
    
        //translation logic
    
        if(percentage>=0){
            HomeTextTopRef.current.style.transform = `translateY(-${percentage}px)`
        }
        if(topContainer.bottom<=viewportHeight*0.4){
            HomeTextTopRef.current.style.scale = '0.8'
            HomeTextTopRef.current.style.opacity = '0'
            homeText5Ref.current.style.opacity = '1'
            homeText5Ref.current.style.scale = '1'
        }
        if(topContainer.bottom>viewportHeight*0.4){
            HomeTextTopRef.current.style.scale = '1'
            HomeTextTopRef.current.style.opacity = '1'
            homeText5Ref.current.style.opacity = '0'
            homeText5Ref.current.style.scale = '0.85'
        }
        if(window.scrollY>=hideContentReference){
            home1WrapperRef.current.style.opacity= '0'
        }
        if(window.scrollY<hideContentReference){
            home1WrapperRef.current.style.opacity= '1'
        }
    }

    useEffect(()=>{
        const handleHomeTextScroll = ()=>{
            introTextAnimation()
        }

        window.addEventListener('scroll', handleHomeTextScroll)
    }, [])

    const HomeTextTopRef = useRef(null)
    const setHomeTextTopRef = (el)=>{
        if(el){
            HomeTextTopRef.current = el
        }
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

    const setHomeText4LetterRef = (index) => (el)=>{
        if (el){
            text4LetterRefs.current[index] = el
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
    const setHomeText4LetterContainer = (index)=>(el)=>{
        if(el){
            text4LetterContainerRef.current[index] = el
        }
    }

    const setHomeText5Ref = (el)=>{
        if(el){
            homeText5Ref.current = el
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

    
    function CreateLetterText4 ({letter, index}){
        return(
            <div className='letter-container' ref={setHomeText4LetterContainer(index)}>
                <h1 className='letter' ref={setHomeText4LetterRef(index)}>{letter}</h1>
            </div>
        )
    }   

    function CreateHomeText5 ({text}){
        return(
            <div className="home5TextContainer" ref={setHomeText5Ref}>
                <p className="home5Text">{text}</p>
            </div>
        )
    }


    useEffect(()=>{
        setTimeout(()=>{
            textEffectOnMount()
        }, 100)
    }, [viewportHeight, viewportWidth])

    // SLIDER1 HOME ANIMATION ON SCROLL
    const home2ContentWrapper = useRef(null)
    const sliderWrapperRef = useRef(null)
    const sliderRef = useRef(null)

    const setHome2ContentWrapper = (el)=>{
        if(el){
            home2ContentWrapper.current = el
        }
    }
    const setSliderWrapperRef = (el)=>{
        if (el){
            sliderWrapperRef.current = el
        }
    }

    const setSliderRef = (el) => {
        if(el){
            sliderRef.current = el
        }
    }

    const calculatePercentageNew = ()=>{
        let contentHeight = home2ContentWrapper.current.offsetHeight
        let contentOffset = home2ContentWrapper.current.offsetTop
        let percentage = ((window.scrollY-contentOffset)/contentHeight)*75
        return percentage
    }
    const calculatePercentage = ()=>{
        let contentHeight = fixedContentHeight()
        let contentOffset = fixedContentOffset()
        let percentage = window.scrollY/(contentHeight+(contentOffset))*100
        return percentage
    }

    const calculatePercentage2 = ()=>{
        let contentHeight = fixedContentHeight()
        let contentOffset = fixedContentOffset()
        let percentage2BeforeDivison = (window.scrollY-((contentHeight/2)+contentOffset))*100
        if(percentage2BeforeDivison>=0){
            let percentage2 = percentage2BeforeDivison/(contentHeight/2)
            return percentage2
        }
    }

    useEffect(()=>{
        const handlePercentage2 = ()=>{
            let percentage2=calculatePercentage2()
        }
        window.addEventListener('scroll', handlePercentage2)
    }, [])


    function homeSliderAnimation1 (){
        let percentage = calculatePercentageNew()
        if(percentage<=50){
            requestAnimationFrame(() => {
                sliderWrapperRef.current.style.height = `${percentage}vh`;
                if(percentage>0.0000001){
                    sliderWrapperRef.current.style.opacity = '1'
                }
                if(percentage<0.0000001){
                    sliderWrapperRef.current.style.opacity = '0'
                }
            });
        }
    }
    function homeSliderAnimation2 (){
        let percentage= calculatePercentageNew()
        if(percentage>=0){
            sliderRef.current.style.transform = `translateX(-${percentage*0.2}%)`
            if(percentage>2){
                sliderRef.current.style.opacity = '1'
            }
        }
    }
    useEffect(()=>{
        const handleScroll1=()=>{
            homeSliderAnimation1()
        }
        const handleScroll2=()=>{
            homeSliderAnimation2()
        }
        window.addEventListener('scroll', handleScroll1)
        window.addEventListener('scroll', handleScroll2)

        return()=>{
            window.removeEventListener('scroll', handleScroll1)
            window.removeEventListener('scroll', handleScroll2)
        }
    }, [])

    //create Slider content

    const sliderImages = [
        {
            img:'society.webp',
            alignImg: '',
            margin: '',
            width: '400px'
        },
        {
            img:'technology.webp',
            alignImg: '',
            margin: '',
            width: '250px'
        },
        {
            img:'core.gif',
            alignImg: '',
            margin: '' ,
            width: '250px'           
        }
    ]

    function CreateSliderContent ({image, index}){
        return (
            <div className="slide">
                <div className="slide-image-container">
                    <img src={image.img} className="slider-image"></img>
                </div>
            </div>
        )
    }


    // About section animations
    const aboutWrapper = useRef()
    const aboutTextContainer = useRef(null)
    const aboutLetters1Ref = useRef([])

    const setAboutWrapper = (el)=>{
        if(el){
            aboutWrapper.current = el
        }
    }
    const setAboutContainer = (el)=>{
        if(el){
            aboutTextContainer.current = el
        }
    }

    const setAboutLetter1 = (index) =>(el) =>{
        if(el){
            aboutLetters1Ref.current[index] = el
        }
    }

    function CreateAboutLetters({letter, index}){
        return (
            <div className="about-text-container1">
                <h1 className="about-letter-text1" ref={setAboutLetter1(index)}>{letter}</h1>
            </div>
        )
    }

    const calcaulteAboutPercentage = ()=>{
        let height = fixedContentHeight()
        let initalPercentage = window.scrollY-height;
        if(initalPercentage>=0){
            let percentage = (initalPercentage/(viewportHeight*1.7))*100
            return percentage
        }
    }

    const calcAboutPercentageHack = (initalPercent)=>{
        let percentage = (initalPercent+10)*(-1)
        return percentage
    }

    function aboutSectionAnimation (){
        let percentage = calcaulteAboutPercentage()
        let newPercentage = 50-percentage
        let newPercentage2 = calcAboutPercentageHack(newPercentage)
        if(newPercentage>0){
            sliderWrapperRef.current.style.height = `${newPercentage}vh`
        }
        if(newPercentage>0.0000001){
            sliderWrapperRef.current.style.opacity = '1'
        }
        if(newPercentage<0.0000001 && percentage>=0){
            sliderWrapperRef.current.style.opacity = '0'
        }
        if (newPercentage2>0 && newPercentage2<50){
            requestAnimationFrame(()=>{
                aboutTextContainer.current.style.height = `${newPercentage2}vh`
            })
        }
        if(newPercentage2>1){
            aboutTextContainer.current.style.opacity = '1'
        }
        if(newPercentage2<1){
            aboutTextContainer.current.style.opacity = '0'
        }

        if(newPercentage2>=20){
            aboutGreetingAnimationShow()
        }
        if(newPercentage2<20){
            aboutGreetingAnimationHide()
        }

        if(newPercentage2>45){
            aboutNameAnimationShow()
        }
        
    }
    const aboutParagraph1Ref = useRef(null)
    const setParagraph1Ref = (el)=>{
        if(el){
            aboutParagraph1Ref.current = el
        }
    }
    function aboutGreetingAnimationShow (){
        aboutLetters1Ref.current.forEach((letter, index)=>{
            setTimeout(()=>{
                letter.style.transform = `translateY(0)`
            }, index*100)
        })
    }

    function aboutGreetingAnimationHide (){
        aboutLetters1Ref.current.forEach((letter, index)=>{
            setTimeout(()=>{
                letter.style.transform = `translateY(20)vh`
            }, index*100)
        })
    }

    function aboutNameAnimationShow (){
        aboutParagraph1Ref.current.style.opacity = '1'
    }

    useEffect(()=>{
        const handleAboutScroll = ()=>{
            
            aboutSectionAnimation()
        }
        window.addEventListener('scroll', handleAboutScroll)

        return()=>{
            window.removeEventListener('scroll', handleAboutScroll)
        }
    }, [])



    //CUSTOM CONTENT SCROLLER- logic to translate fixed containers

    const calculateAboutClosePercentage = ()=>{
        let percentage =(((window.scrollY-projectsWrapperOffset.current)+viewportHeight)/viewportHeight)*100
        return percentage
    }

    function closeAboutSection (){
        let percentage = calculateAboutClosePercentage()
        console.log(percentage)
        let newPercentage = 50-percentage
        if(percentage>=0){
            aboutWrapper.current.style.opacity = '0'
            home1WrapperRef.current.style.opacity = '0'
        }
        if(percentage<0){
            aboutWrapper.current.style.opacity = '1'
        }
    }

    useEffect(()=>{
        const handleAboutCloseScroll = ()=>{
            closeAboutSection()
        }
        window.addEventListener('scroll', handleAboutCloseScroll)
    }, [])

    /*Projects*/
    const projectsWrapperRef = useRef(null)
    const projectLettersRef = useRef([])
    const projectsWrapperOffset = useRef(null)
    const projectsWrapperHeight = useRef(null)

    const setProjectsWrapperRef = (el)=>{
        if(el){
            projectsWrapperRef.current = el
        }
    }

    const setProjectLetterRef = (index)=>(el)=>{
        if(el){
            projectLettersRef.current[index] = el
        }
    }

    function CreateProjectLetters ({letter, index}){
        return(
            <div className="project-letter-container">
                <h1 className="project-letter" ref={setProjectLetterRef(index)}>{letter}</h1>
            </div>
        )
    }

    function calculateProjectPercentage (){
        let percentage = ((window.scrollY-(projectsWrapperOffset.current-viewportHeight))/projectsWrapperHeight.current)*100
        return percentage
    }

    function projectLettersAnimation (){
        let percentage = calculateProjectPercentage()
        let newPercentage = 45-(percentage*0.55)
        projectLettersRef.current.forEach((letter, index)=>{
            if(window.scrollY>=(projectsWrapperOffset.current-viewportHeight)){
                if(index % 2 != 0 && newPercentage>=0){
                    letter.style.transform = `translateX(${newPercentage}px)`
                }
                else if(index%2 ===0){
                    letter.style.transform = `translateX(0)`
                    letter.style.color = 'gray'
                }
            }
        })
    }

    useEffect(()=>{
        projectsWrapperHeight.current = projectsWrapperRef.current.offsetHeight
        projectsWrapperOffset.current = projectsWrapperRef.current.offsetTop


        const handleProjectScroll = ()=>{
            projectLettersAnimation()
        }
        window.addEventListener('scroll', handleProjectScroll)
        return()=>{
            window.removeEventListener('scroll', handleProjectScroll)
        }
    }, [])


    // Projects slider 

    const projectSlides = [
        {
            img:'technology.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.3

        },
        {
            img:'technology.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.4

        },
        {
            img:'technology.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.6

        },
        {
            img:'technology.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.8

        },

    ]

    const projectSliderWrapperRef = useRef(null)
    const projectSliderRef = useRef(null)
    const projectImagesRef = useRef([])

    const setProjectSliderWrapperRef = (el)=>{
        if(el){
            projectSliderWrapperRef.current = el
        }
    }

    const setProjectSliderRef = (el)=>{
        if(el){
            projectSliderRef.current = el
        }
    }

    const setProjectImagesRef = ({project, index})=>(el) =>{
        if(el){
            let refContent = {
                ref: el,
                animateSpeed: project.animateSpeed
            }
            projectImagesRef.current[index] = refContent
        }
    }

    function CreateProjectSlide({ project, index }) {
        // Compute the initial transform for spacing with 15vw
        const initialTransform = `translateX(${index * 15}vw)`;
      
        return (
            <div className="project-slide">
                <div
                    className="project-slide-img-container"
                    ref={setProjectImagesRef({ project, index })}
                    style={{ transform: initialTransform }}
                >
                    <img className="project-slide-img" src={project.img} alt={`Project ${index}`} />
                </div>
            </div>
        );
    }
    
    function calculateProjectPercentage() {
        let offset = projectsWrapperRef.current.offsetTop;
        let height = projectSliderWrapperRef.current.offsetHeight;
        let percentage = ((window.scrollY - offset) / height) * 100;
        return percentage;
    }
    
    function projectSliderAnimation() {
        let percentage = calculateProjectPercentage();
        console.log('projects', percentage);
    
        projectImagesRef.current.forEach((slide, index) => {
            let initialSpacing = index * 15; // Updated spacing based on index
    
            // Calculate the transform value using ternary operator
            let percentageSlide = initialSpacing + 15 - percentage; // Adjusted calculation
            let transformValue = `${percentageSlide > 0 ? percentageSlide * slide.animateSpeed : 0}vw`;
    
            slide.ref.style.transform = `translateX(${transformValue})`;
        });
    }
    useEffect(()=>{
        const handleProjectSliderScroll = ()=>{
            projectSliderAnimation()
        }

        window.addEventListener('scroll', handleProjectSliderScroll)

        return()=>{
            window.removeEventListener('scroll', handleProjectSliderScroll)
        }
    }, [])


    return(
        <section className='home-wrapper'>
            <div className="home-fixed-content1" ref={setFixedContentRef}>
                <div className='home1-content-wrapper' ref={setHome1WrapperRef} id="scroll-container">
                    <div className='home1-text-container'>

                        <div className="home1-text-container-top" ref={setHomeTextTopRef}>
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
                        <div className="home1-text-container-bottom" ref={setHomeText5Ref}>
                            <div className="home1-text-container-bottom-wrapper">
                                <p className="homeText5">My name is <span className="name">Prothsan Gurung</span>.</p>
                                <p className="homeText5v2">Lorem ipsum odor amet, consectetuer adipiscing elit. Purus efficitur conubia tellus nulla risus faucibus himenaeos. Molestie et facilisi velit tortor maecenas posuere curabitur phasellus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="home2-content-wrapper" ref={setHome2ContentWrapper}>
                    <div className="home2-slider-wrapper" ref={setSliderWrapperRef}>
                        <div className="home2-slider" ref={setSliderRef}>
                            {sliderImages.map((image, index)=>{
                                return(
                                    <CreateSliderContent key={index} image={image} index={index}></CreateSliderContent>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="about-wrapper" ref={setAboutWrapper}>
                    <div className="about-text-container" ref={setAboutContainer}>
                        <div className="about-text-line1">
                            <div className="about-text1-line1">
                                <h1 className="about-text-paragraph1" ref={setParagraph1Ref}>Lorem ipsum odor amet, consectetuer adipiscing elit. Metus volutpat magna quis posuere at dapibus habitant.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-section" ref={setProjectsWrapperRef} id="scroll-container">
                <div className="project-title-container">
                    {projectTitle.map((letter, index)=>{
                        return(
                            <CreateProjectLetters key={index} letter={letter} index={index}></CreateProjectLetters>
                        )
                    })}
                </div>
                <div className="project-slider-wrapper" ref={setProjectSliderWrapperRef}>
                    <div className="project-slider" ref={setProjectSliderRef}>
                        {projectSlides.map((project, index)=>{
                            return(
                                <CreateProjectSlide key={index} project={project} index={index}></CreateProjectSlide>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home

