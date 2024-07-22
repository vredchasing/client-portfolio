import { useRef, useState, useEffect } from "react"

const homeText1 = ['I', 'N']
const homeText2 = ['A']
const homeText3 = ['D', 'I', 'G', 'I', 'T', 'A', 'L']
const homeText4 = ['F', 'U', 'T', 'U', 'T', 'R', 'E', '.', '.', '.']

const homeSliderText1 = []
const homeSliderText2 = []
const homeSliderText3 = []
const homeSliderText4 = []
const homeSliderText5 = []

const aboutText1 = ['H', 'I']

function Home (){
    const fixedContentRef = useRef(null)
    const text1LetterRefs = useRef([])
    const text2LetterRefs = useRef([])
    const text3LetterRefs = useRef([])
    const text4LetterRefs = useRef([])
    const [viewportSize, setViewportSize] = useState(window.innerHeight)


    useEffect(()=>{
        const handleViewportResize=()=>{
            setViewportSize(window.innerHeight)
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

    function CreateLetterText1 ({letter, index}){
        return(
            <div className='letter-container'>
                <h1 className='letter' ref={setHomeText1LetterRef(index)}>{letter}</h1>
            </div>
        )
    }    

    function CreateLetterText2 ({letter, index}){
        return(
            <div className='letter-container'>
                <h1 className='letter' ref={setHomeText2LetterRef(index)}>{letter}</h1>
            </div>
        )
    }    

    function CreateLetterText3 ({letter, index}){
        return(
            <div className='letter-container'>
                <h1 className='letter' ref={setHomeText3LetterRef(index)}>{letter}</h1>
            </div>
        )
    }   

    
    function CreateLetterText4 ({letter, index}){
        return(
            <div className='letter-container'>
                <h1 className='letter' ref={setHomeText4LetterRef(index)}>{letter}</h1>
            </div>
        )
    }   


    useEffect(()=>{
        setTimeout(()=>{
            textEffectOnMount()
        }, 100)
    }, [])

    // SLIDER1 HOME ANIMATION ON SCROLL
    const sliderWrapperRef = useRef(null)
    const sliderRef = useRef(null)

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

    const calculatePercentage = ()=>{
        let contentHeight = fixedContentHeight()
        let contentOffset = fixedContentOffset()
        let percentage = window.scrollY/(contentHeight+contentOffset)*100
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
        let percentage = calculatePercentage()
        if(window.scrollY>=0 && percentage<=50){
            requestAnimationFrame(() => {
                sliderWrapperRef.current.style.height = `${percentage}vh`;
                if(percentage>0.0000001){
                    sliderWrapperRef.current.style.opacity = '1'
                }
                if(percentage<0.1 && percentage>=0){
                    sliderWrapperRef.current.style.opacity = '0'
                }
            });
        }
    }
    function homeSliderAnimation2 (){
        let percentage= calculatePercentage()
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
    const aboutTextContainer = useRef(null)
    const aboutLetters1Ref = useRef([])

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
                <h1 className="about-text1" ref={setAboutLetter1(index)}>{letter}</h1>
            </div>
        )
    }

    const calcaulteAboutPercentage = ()=>{
        let height = fixedContentHeight()
        let initalPercentage = window.scrollY-height;
        if(initalPercentage>=0){
            let percentage = (initalPercentage/(viewportSize*1.5))*100
            return percentage
        }
    }

    function aboutLettersAnimation (){
        let percentage = calcaulteAboutPercentage()
        let newPercentage = 50-percentage
        console.log(newPercentage)
        if(newPercentage>=0){
            sliderWrapperRef.current.style.height = `${newPercentage}vh`
        }
        if(newPercentage>=0.0000001){
            sliderWrapperRef.current.style.opacity = '1'
        }
        if(newPercentage<0.1 && percentage>=0){
            sliderWrapperRef.current.style.opacity = '0'
        }
    }

    useEffect(()=>{
        const handleAboutScroll = ()=>{
            
            aboutLettersAnimation()
        }
        window.addEventListener('scroll', handleAboutScroll)

        return()=>{
            window.removeEventListener('scroll', handleAboutScroll)
        }
    }, [])
    return(
        <section className='home-wrapper'>
            <div className="home-fixed-content1" ref={setFixedContentRef}>
                <div className='home1-content-wrapper'>
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
                        </div>
                        
                        <div className="home1-text-container-bottom">
                            <div className="home1-text3-container">
                                {homeText3.map((letter, index)=>{
                                    return (
                                        <CreateLetterText3 key={index} letter={letter} index={index}></CreateLetterText3>
                                    )
                                })}
                            </div>
                            <div className="home1-text4-container">
                                {homeText4.map((letter, index)=>{
                                    return (
                                        <CreateLetterText4 key={index} letter={letter} index={index}></CreateLetterText4>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="home2-content-wrapper">
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

                <div className="about-wrapper">
                    <div className="about-text-container" ref={setAboutContainer}>
                        {aboutText1.map((letter, index)=>{
                            return(
                                <CreateAboutLetters key={index} letter={letter} index={index}></CreateAboutLetters>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="projects-section">
                <h1>projects</h1>
            </div>
        </section>
    )
}

export default Home

