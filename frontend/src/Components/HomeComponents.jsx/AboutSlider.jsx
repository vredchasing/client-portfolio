import React, { useRef, useCallback, useEffect, useState, forwardRef, useImperativeHandle } from "react";
import AboutSliderDescription from "./AboutSliderDescription";

const originalArrTop = [
    {
        imgName: '',
        imgSrc: 'akron-logo.png',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 2,
        description: 'Lorem ippppsum'
    },
    {
        imgName: '',
        imgSrc: 'marines-logo.webp',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    },
]
const originalArrMiddle = [
    {
        imgName: '',
        imgSrc: 'marines-logo.webp',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    },
    {
        imgName: '',
        imgSrc: 'akron-logo.png',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    },
    {
        imgName: '',
        imgSrc: 'akron-logo.png',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    },
]
const originalArrBottom = [
    {
        imgName: '',
        imgSrc: 'akron-logo.png',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    },
    {
        imgName: '',
        imgSrc: 'akron-logo.png',
        imgCentering: 'center',
        animateSpeed: 15,
        scale: 1,
        description: 'Lorem ipsum'
    }
];

const AboutSlider = forwardRef((props, ref) => {
    const slideTopRef = useRef([]);
    const slideBottomRef = useRef([]);
    const cloneTopRef = useRef([]);
    const cloneBottomRef = useRef([]);

    const aboutSliderWrapperRef = useRef()
    const aboutSliderRef = useRef()
    const aboutSlideRefs = useRef([])
    const aboutSlideMiddleRefs = useRef([])
    const aboutSlideBottomRefs = useRef([])


    const setAboutSlideRef = useCallback((index) => (el) => {
        if (el) {
            aboutSlideRefs.current[index] = el;
        }
    }, []);

    const setAboutSlideMiddleRef = useCallback((index) => (el) => {
        if (el) {
            aboutSlideMiddleRefs.current[index] = el;
        }
    }, []);

    const setAboutSlideBottomRef = useCallback((index) => (el) => {
        if (el) {
            aboutSlideBottomRefs.current[index] = el;
        }
    }, []);



    const setAboutSliderRef = (el)=>{
        if(el){
            aboutSliderRef.current = el
        }
    }
    const setAboutSliderWrapperRef = (el)=>{
        if(el){
            aboutSliderWrapperRef.current = el
        }
    }
    const CreateAboutSlide = React.memo(({ slide, index }) => (
        <div className="about-slide-container" style={{ justifyContent: slide.imgCentering, scale: slide.scale }} ref={setAboutSlideRef(index)}>
            <img className="about-slide-img" src={slide.imgSrc} onClick={() => selected(slide)} />
        </div>
    ));
    
    const CreateAboutSlideMiddle = React.memo(({ slide, index }) => (
        <div className="about-slide-container" style={{ justifyContent: slide.imgCentering, scale: slide.scale }} ref={setAboutSlideMiddleRef(index)}>
            <img className="about-slide-img" src={slide.imgSrc} onClick={() => selected(slide)} />
        </div>
    ));
    
    const CreateAboutSlideBottom = React.memo(({ slide, index }) => (
        <div className="about-slide-container" style={{ justifyContent: slide.imgCentering, scale: slide.scale }} ref={setAboutSlideBottomRef(index)}>
            <img className="about-slide-img" src={slide.imgSrc} onClick={() => selected(slide)} />
        </div>
    ));
            

    function aboutSliderAnimation() {
        const sliderWrapper = aboutSliderWrapperRef.current
        const slider = aboutSliderRef.current
        const slides = aboutSlideRefs.current
        const middle = aboutSlideMiddleRefs.current
        const bottom = aboutSlideBottomRefs.current
        
        sliderWrapper.style.opacity = `1`
        sliderWrapper.style.scale = '1'
        sliderWrapper.style.clipPath = 'inset(0 0 0 0)'
        slider.style.rotate = '90deg'

        slides.forEach((slide, index)=>{
            slide.style.rotate = '-90deg'
        })
        middle.forEach((slide, index)=>{
            slide.style.rotate = '-90deg'
        })
        bottom.forEach((slide, index)=>{
            slide.style.rotate = '-90deg'
        })
    }

    function aboutSliderCloseAnimation() {
        const slider = aboutSliderRef.current
        const sliderWrapper = aboutSliderWrapperRef.current
        const slides = aboutSlideRefs.current
        const middle = aboutSlideMiddleRefs.current
        const bottom = aboutSlideBottomRefs.current

        sliderWrapper.style.opacity = `0`
        sliderWrapper.style.scale = '0.9'
        slider.style.rotate = '-90deg'

        slides.forEach((slide, index)=>{
            slide.style.rotate = '90deg'
        })
        middle.forEach((slide, index)=>{
            slide.style.rotate = '90deg'
        })
        bottom.forEach((slide, index)=>{
            slide.style.rotate = '90deg'
        })
    }


    useImperativeHandle(ref, ()=>({
        aboutSliderAnimation: aboutSliderAnimation,
        aboutSliderCloseAnimation: aboutSliderCloseAnimation,
    }))

    const aboutUpdateDescription = useRef()

    const selected = useCallback((object) => {
        if (aboutUpdateDescription.current) {
            aboutUpdateDescription.current.updateDescription(object.description);
            imageOnClickAnimation()
        }
    }, []);

    const aboutDescriptionWrapperRef = useRef()
    const setAboutDescriptionWrapperRef = (el)=>{
        if(el){
            aboutDescriptionWrapperRef.current = el
        }
    }

    function imageOnClickAnimation (){
        const slider = aboutSliderRef.current
        const descriptionWrapper = aboutDescriptionWrapperRef.current

        slider.style.opacity = '0'
        slider.style.pointerEvents = 'none'
        descriptionWrapper.style.opacity = '1'
    }

    function imageOnClickAnimationClose (){
        const slider = aboutSliderRef.current
        const descriptionWrapper = aboutDescriptionWrapperRef.current

        slider.style.opacity = '1'
        slider.style.pointerEvents = 'auto'
        descriptionWrapper.style.opacity = '0'
    }
    
    const [aboutHoverText, setAboutHoverText] = useState()

    const handleMouseEnter = (imgSrc) => {
        const allSlides = [...originalArrTop, ...originalArrMiddle, ...originalArrBottom];
        const foundSlide = allSlides.find(slide => slide.imgSrc === imgSrc);
        if (foundSlide) {
            setAboutHoverText(foundSlide.imgName);
        }
    };


    return (
        <div className="about-slider-wrapper" ref={setAboutSliderWrapperRef}>
            <div className="about-hover-text-container">
                <h1 className="about-hover-text">{aboutHoverText}</h1>
            </div>
            <div className="about-description-main-wrapper" ref={setAboutDescriptionWrapperRef}>
                <AboutSliderDescription ref={aboutUpdateDescription} closeAnimation={imageOnClickAnimationClose}></AboutSliderDescription>
            </div>
            <div className="about-slider" ref={setAboutSliderRef}>
                <div className="about-slider-top">
                    {originalArrTop.map((slide, index) => (
                        <CreateAboutSlide key={index} slide={slide} index={index} />
                    ))}
                </div>
                <div className="about-slider-middle">
                    {originalArrMiddle.map((slide, index) => (
                        <CreateAboutSlideMiddle key={index} slide={slide} index={index} />
                    ))}
                </div>
                <div className="about-slider-bottom">
                    {originalArrBottom.map((slide, index) => (
                        <CreateAboutSlideBottom key={index} slide={slide} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default AboutSlider;
