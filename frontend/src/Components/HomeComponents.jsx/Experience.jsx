import { useEffect, useRef, useState } from "react"

//function imports


function Experience (){


    const projectSlides = [
        {
            img:'future.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.3

        },
        {
            img:'future.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.4

        },
        {
            img:'networkdesign.png',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.6

        },
        {
            img:'future.webp',
            projectName: '',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.8

        },

    ]

    function CreateSlide ({slide, index}){
        return(
            <div className="experience-slide" ref={setExperienceSlideRef(index)}>
                <div className="experience-text-wrapper">
                    <h1 className="experience-text"></h1>
                </div>
                <div className="experience-slide-image-container">
                    <img className="experience-slide-image" src={slide.img}></img>
                </div>
            </div>
        )
    }

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight)

    useEffect(()=>{
        const handleResize = ()=>{
            setViewportWidth(window.innerWidth)
            setViewportHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    useEffect(()=>{
        const handleScrollAnimation=()=>{
            slidingAnimation()
        }
        window.addEventListener('scroll', handleScrollAnimation)
        return()=>{
            window.removeEventListener('scroll', handleScrollAnimation)
        }
    },[])

    const experienceWrapper = useRef(null)
    const experienceSlideRef = useRef([])
    const setExperienceWrapper = (el) =>{
        if(el){
            experienceWrapper.current=el
        }
    }
    const setExperienceSlideRef = (index)=>(el)=>{
        if(el){
            experienceSlideRef.current[index] = el
        }
    }
    
    function calculatePercentage (slide){
        const rect = slide.getBoundingClientRect()
        const height = slide.offsetHeight
        const offset = slide.offsetTop
        const percentage = ((window.scrollY-offset+viewportHeight)/height)*100
        if(percentage<=0){
            return 0
        }
        else if(percentage>0){
            return percentage
        }
    }

    function dynamicPositioning (){
        const slider = experienceSlideRef.current
        slider.forEach((slide, index)=>{
            slide.style.justifyContent = (index%2===0) ? 'start' : 'end'
        })
    }

    useEffect(()=>{
        dynamicPositioning()
    }, [])

    function slidingAnimation (){
        const slider = experienceSlideRef.current
        console.log('slider', slider)
        slider.forEach((slide, index)=>{
            const percentage = calculatePercentage(slide)
            console.log('percentage2', percentage)
            if (percentage>0){
                slide.style.opacity = '1'
                slide.style.transform = (index%2===0) ? `translateX(${percentage*0.4}vw)` : `translateX(-${percentage*0.4}vw)`
            }   
        })
    }


    return(
        <section className="experience-section" ref={setExperienceWrapper}>
            <div className="experience-slider-wrapper">
                <div className="experience-slider">
                    {projectSlides.map((slide, index)=>{
                        return (
                            <CreateSlide key={index} slide={slide} index={index}></CreateSlide>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience