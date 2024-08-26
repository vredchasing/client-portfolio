import { useEffect, useRef, useState } from "react";

function Experience() {
    const projectSlides = [
        {
            img: 'future.webp',
            projectName: [['C', 'Y', 'B', 'E', 'R', 'S', 'E', 'C', 'U', 'R', 'I', 'T', 'Y']],
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.3
        },
        {
            img: 'cybersecurity.jpg',
            projectName: [['N', 'E', 'T', 'W', 'O', 'R', 'K'], ['D', 'E', 'S', 'I', 'G', 'N']],
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.4
        },
        {
            img: 'workers.gif',
            projectName: [['I', 'N', 'F', 'O', 'R', 'M', 'A', 'T', 'I', 'O', 'N'], ['T', 'E', 'C', 'H', 'N', 'O', 'L', 'O', 'G', 'Y']],
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.6
        },
        {
            img: 'core.gif',
            projectName: [['V', 'I', 'R', 'T', 'U', 'A', 'L', 'I', 'Z', 'A', 'T', 'I', 'O', 'N']],
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.8
        }
    ];

    const textRefs = useRef([]);

    const setTextRef = (slideIndex, textIndex, letterIndex) => (el) => {
        if (!textRefs.current[slideIndex]) {
            textRefs.current[slideIndex] = [];
        }
        if (!textRefs.current[slideIndex][textIndex]) {
            textRefs.current[slideIndex][textIndex] = [];
        }
        if (el) {
            textRefs.current[slideIndex][textIndex][letterIndex] = el;
        }
    };

    function CreateTextTitleLetter({ letter, slideIndex, textIndex, letterIndex }) {
        return (
            <div className="text-title-container">
                <h1 className="text-title-letter" ref={setTextRef(slideIndex, textIndex, letterIndex)}>{letter}</h1>
            </div>
        );
    }

    function CreateSlide({ slide, index }) {
        return (
            <div className="experience-slide" ref={setExperienceSlideRef(index)}>
                <div className="experience-text-wrapper" ref={setExperienceTextRef(index)}>
                    {slide.projectName.map((textBlock, textIndex) => {
                        const textArray = Array.isArray(textBlock) ? textBlock : [textBlock];
                        return (
                            <div key={textIndex} className="text-block">
                                {textArray.map((letter, letterIndex) => (
                                    <CreateTextTitleLetter
                                        key={letterIndex}
                                        letter={letter}
                                        slideIndex={index}
                                        textIndex={textIndex}
                                        letterIndex={letterIndex}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
                <div className="experience-slide-image-container" ref={setExperienceSlideImgRef(index)}>
                    <img className="experience-slide-image" src={slide.img} alt={slide.projectName.flat().join(' ')} />
                </div>
            </div>
        );
    }

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const experienceWrapper = useRef(null);
    const experienceSlideRef = useRef([]);
    const experienceSlideImgRef = useRef([]);
    const experienceTextRef = useRef([]);

    const setExperienceWrapper = (el) => {
        if (el) {
            experienceWrapper.current = el;
        }
    };

    const setExperienceSlideRef = (index) => (el) => {
        if (el) {
            experienceSlideRef.current[index] = el;
        }
    };

    const setExperienceSlideImgRef = (index) => (el) => {
        if (el) {
            experienceSlideImgRef.current[index] = el;
        }
    };

    const setExperienceTextRef = (index) => (el) => {
        if (el) {
            experienceTextRef.current[index] = el;
        }
    };
    function dynamicPositioning() {
        const slides = experienceSlideRef.current;
        const slideImages = experienceSlideImgRef.current;
        const textWrappers = experienceTextRef.current;
    
        slides.forEach((slide, index) => {
            // Position the slides
            slide.style.justifyContent = 'center'
        });
    
    
        textWrappers.forEach((textWrapper, index) => {
            if (textWrapper) {
                // Position the text blocks
                if (index % 2 === 0) {
                    textWrapper.style.left = '12vw';
                    textWrapper.style.right = 'auto';
                } else {
                    textWrapper.style.right = '12vw';
                    textWrapper.style.left = 'auto';
                }
            }
        });
    }
    

    useEffect(() => {
        dynamicPositioning();
    }, [viewportHeight, viewportWidth]);

    function letterSlideUpAnimation() {
        const textArrays = textRefs.current;
        const imgRefs = experienceSlideImgRef.current
        textArrays.forEach((textBlockMain) => {
            textBlockMain.forEach((textBlock) => {
                const rect = textBlock[0].getBoundingClientRect();
                if (rect.top <= viewportHeight * 0.8) {
                    textBlock.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.style.transform = `translateY(0vh)`;
                        }, index * 50);
                    });
                }
            });
        });

        imgRefs.forEach((image, index)=>{
            const imgRect = image.getBoundingClientRect()
            if(imgRect.top<=viewportHeight*0.8){
                image.style.transform = 'scale(0.9)';
                image.style.opacity = '1'
            }
        })
    }

    useEffect(()=>{
        const imgRefs = experienceSlideImgRef.current
        imgRefs.forEach((image, index)=>{
            image.style.opacity = 0;
        })
    }, [])
    useEffect(() => {
        const handleLetterAnimationScroll = () => {
            letterSlideUpAnimation();
        };
        window.addEventListener('scroll', handleLetterAnimationScroll);
        return () => {
            window.removeEventListener('scroll', handleLetterAnimationScroll);
        };
    }, [viewportHeight]);

    const experienceSlideOffsetRef = useRef([])

    function experienceSlideAnimation (){
        const slider = experienceSlideRef.current
        slider.forEach((slide, index)=>{
            const offset = experienceSlideOffsetRef.current[index]
            const height = slide.offsetHeight
            const percentage = (window.scrollY - offset)/height
            const newPercentage = 1-percentage*0.35
            if(window.scrollY>=offset){
                slide.style.opacity = '1'
                if(percentage>=0){
                    slide.style.scale = `${newPercentage}`
                }
            }
            else if(window.scrollY>offset+height){

            }
        })

    }

    useEffect(()=>{
        const handleScroll = ()=>{
            experienceSlideAnimation()
        }

        window.addEventListener('scroll', handleScroll)

        function getSlideOffset (){
            const slider = experienceSlideRef.current
            slider.forEach((slide, index)=>{
                const rect = slide.getBoundingClientRect()
                experienceSlideOffsetRef.current[index] = rect.top
            })
        }
        getSlideOffset()
    }, [])

    return (
        <section className="experience-section" ref={setExperienceWrapper}>
            <div className="experience-slider-wrapper">
                <div className="experience-slider">
                    {projectSlides.map((slide, index) => (
                        <CreateSlide key={index} slide={slide} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
