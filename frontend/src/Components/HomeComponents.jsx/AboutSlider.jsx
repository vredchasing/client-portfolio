import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const AboutSlider = forwardRef((props, ref) => {
    const originalArrTop = [
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 2
        },
        {
            imgName: '',
            imgSrc: 'marines-logo.webp',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        },
    ]
    const originalArrMiddle = [
        {
            imgName: '',
            imgSrc: 'marines-logo.webp',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        },
    ]
    const originalArrBottom = [
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        }
    ];

    const clonedArr = [
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 2
        },
        {
            imgName: '',
            imgSrc: 'marines-logo.webp',
            imgCentering: 'start',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'nepal-flag.png',
            imgCentering: 'end',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'start',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'end',
            animateSpeed: 15,
            scale: 1
        },
        {
            imgName: '',
            imgSrc: 'akron-logo.png',
            imgCentering: 'center',
            animateSpeed: 15,
            scale: 1
        }
    ];

    const slideTopRef = useRef([]);
    const slideBottomRef = useRef([]);
    const cloneTopRef = useRef([]);
    const cloneBottomRef = useRef([]);

    const setSlideTop = (index) => (el) => {
        if (el) {
            slideTopRef.current[index] = el;
        }
    };

    const setSlideBottom = (index) => (el) => {
        if (el) {
            slideBottomRef.current[index] = el;
        }
    };

    const setCloneTop = (index) => (el) => {
        if (el) {
            cloneTopRef.current[index] = el;
        }
    };

    const setCloneBottom = (index) => (el) => {
        if (el) {
            cloneBottomRef.current[index] = el;
        }
    };

    function CreateAboutSlideTop({ slide, index }) {
        return (
            <div
                className="about-slide-container"
                style={{ justifyContent: slide.imgCentering, scale: slide.scale }}
                ref={setSlideTop(index)}
            >
                <img className="about-slide-img" src={slide.imgSrc} alt="" />
            </div>
        );
    }

    function CreateAboutSlideBottom({ slide, index }) {
        return (
            <div
                className="about-slide-container"
                style={{ justifyContent: slide.imgCentering }}
                ref={setSlideBottom(index)}
            >
                <img className="about-slide-img" src={slide.imgSrc} alt="" />
            </div>
        );
    }

    function CreateAboutSlideCloneTop({ slide, index }) {
        return (
            <div
                className="about-slide-clone-container"
                style={{ justifyContent: slide.imgCentering }}
                ref={setCloneTop(index)}
            >
                <img className="about-slide-clone-img" src={slide.imgSrc} alt="" />
            </div>
        );
    }

    function CreateAboutSlideCloneBottom({ slide, index }) {
        return (
            <div
                className="about-slide-clone-container"
                style={{ justifyContent: slide.imgCentering }}
                ref={setCloneBottom(index)}
            >
                <img className="about-slide-clone-img" src={slide.imgSrc} alt="" />
            </div>
        );
    }

    function aboutSliderAnimation() {
        const slideTop = slideTopRef.current;
        const slideBottom = slideBottomRef.current;
        const cloneTop = cloneTopRef.current;
        const cloneBottom = cloneBottomRef.current;
        const sliderWrapper = aboutSliderWrapperRef.current
        
        sliderWrapper.style.opacity = `1`
        sliderWrapper.style.scale = '1'
        sliderWrapper.style.clipPath = 'inset(0 0 0 0)'
    }

    function aboutSliderCloseAnimation() {
        const slideTop = slideTopRef.current;
        const slideBottom = slideBottomRef.current;
        const cloneTop = cloneTopRef.current;
        const cloneBottom = cloneBottomRef.current;
        const sliderWrapper = aboutSliderWrapperRef.current

        sliderWrapper.style.opacity = `0`
        sliderWrapper.style.scale = '0.9'
        sliderWrapper.style.clipPath = 'inset(0 0 0 0)'

    }


    useImperativeHandle(ref, ()=>({
        aboutSliderAnimation: aboutSliderAnimation,
        aboutSliderCloseAnimation: aboutSliderCloseAnimation
    }))

    const aboutSliderWrapperRef = useRef()
    const setAboutSliderWrapperRef = (el)=>{
        if(el){
            aboutSliderWrapperRef.current = el
        }
    }
    return (
        <div className="about-slider-wrapper" ref={setAboutSliderWrapperRef}>
            <div className="about-slider">
                <div className="about-slider-top">
                    {originalArrTop.map((slide, index) => (
                        <CreateAboutSlideTop key={index} slide={slide} index={index} />
                    ))}
                </div>
                <div className="about-slider-middle">
                    {originalArrMiddle.map((slide, index) => (
                        <CreateAboutSlideBottom key={index} slide={slide} index={index} />
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
