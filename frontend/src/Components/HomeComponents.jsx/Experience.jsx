import { useEffect, useRef, useState } from "react";

function Experience() {
    const projectSlides = [
        {
            img: 'future.webp',
            projectName: [['C', 'Y', 'B', 'E', 'R', 'S', 'E', 'C', 'U', 'R', 'I', 'T', 'Y']],
            time : '1 YEAR',
            index: '1',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.3
        },
        {
            img: 'cybersecurity.jpg',
            projectName: [['N', 'E', 'T', 'W', 'O', 'R', 'K'], ['D', 'E', 'S', 'I', 'G', 'N']],
            time : '2 YEARS',
            index: '2',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.4
        },
        {
            img: 'workers.gif',
            projectName: [['I', 'N', 'F', 'O', 'R', 'M', 'A', 'T', 'I', 'O', 'N'], ['T', 'E', 'C', 'H', 'N', 'O', 'L', 'O', 'G', 'Y']],
            time : '1 YEAR',
            index: '3',
            projectLink: '',
            alignProjectImg: '',
            animateSpeed: 0.6
        },
        {
            img: 'city.gif',
            projectName: [['V', 'I', 'R', 'T', 'U', 'A', 'L', 'I', 'Z', 'A', 'T', 'I', 'O', 'N']],
            time : '1 YEAR',
            index: '4',
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
                <div className="experience-slide-image-wrapper">
                    <div className="experience-slide-image-container" ref={setExperienceSlideImgRef(index)}>
                        <img className="experience-slide-image" src={slide.img} alt={slide.projectName.flat().join(' ')} />
                    </div>
                </div>
                <div className="time-wrapper">
                    <ExperienceScrollTracker key={index} index={index}></ExperienceScrollTracker>
                    <h1 className="time-text" ref={setExperienceTimeRef(index)}>{slide.time}</h1>
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
    const experienceTimeRef = useRef([])

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

    const setExperienceTimeRef = (index)=>(el)=>{
        if(el){
            experienceTimeRef.current[index] = el
        }
    }

    function letterSlideUpAnimation(i) {
        const textArrays = textRefs.current;
        if (i < 0 || i >= textArrays.length) {
            console.warn('Index out of bounds:', i);
            return;
        }
        const selectedTextArray = textArrays[i];
        
        selectedTextArray.forEach((textBlock, textBlockIndex) => {
            // set delay based on the index of the text block
            const blockDelay = textBlockIndex * 300; // adjust delay time
    
            textBlock.forEach((letter, letterIndex) => {
                setTimeout(() => {
                    letter.style.transform = `translateY(0vh)`;
                }, blockDelay + letterIndex * 20); //adjust letter animate speed
            });
        });
    }
    

    function letterSlideDownAnimation(i) {
        const textArrays = textRefs.current;
        if (i < 0 || i >= textArrays.length) {
            console.warn('Index out of bounds:', i);
            return;
        }
        const selectedTextArray = textArrays[i];
        
        selectedTextArray.forEach((textBlock, textBlockIndex) => {
            const blockDelay = textBlockIndex * 300; 
    
            textBlock.forEach((letter, letterIndex) => {
                setTimeout(() => {
                    letter.style.transform = `translateY(10vh)`;
                }, blockDelay + letterIndex * 20);
            });
        });
    }
    
    const experienceSlideOffsetRef = useRef([])

    function experienceSlideAnimation (){
        const slideImgs = experienceSlideImgRef.current
        const slides = experienceSlideRef.current
        const slideTime = experienceTimeRef.current
        const slideTracker = scrollTrackerRef.current
        const slideTrackerWrapper = scrollTrackerWrapperRef.current

        for (let i = 0; i<slideImgs.length; i++){
            const sliderOffset = experienceSlideOffsetRef.current[i]
            const iOffset = i*700
            const trackerPercentage = ((window.scrollY-(sliderOffset+iOffset))/700)*100
            const trackerPercentage2 = trackerPercentage>=0 ? 100-trackerPercentage : 100;
            const scalePercentageInitial = ((window.scrollY-(sliderOffset+iOffset))/700)
            const scalePercentage = 1-(scalePercentageInitial*0.1)
            console.log(i, window.scrollY)

            slideImgs[i].style.clipPath = window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset+700 ?
                'inset(0 0 0 0)': 'inset(100% 0 0 0)';

            slideImgs[i].style.opacity = window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset+700 ?
                '1': '0';     

            slideTrackerWrapper[i].style.opacity = window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset+700 ?
                '1' : '0';

            slideTracker[i].style.transform = `translateY(-${trackerPercentage2}%)`

            slideTime[i].style.opacity = window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset+700 ?
                '1' : '0';

            window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset + 700 ?
                letterSlideUpAnimation(i) : letterSlideDownAnimation(i);

            window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset + 700 ?
                console.log('running') : console.log('failed');

            if(window.scrollY >= sliderOffset + iOffset && window.scrollY <= sliderOffset + iOffset+700){
                slideImgs[i].style.scale = `${scalePercentage}`
            }
        }
    }
    useEffect(()=>{
        function getSlideOffset (){
            const slider = experienceSlideRef.current
            const sliderWrapper = experienceWrapper.current
            const offset = sliderWrapper.offsetTop
            slider.forEach((slide, index)=>{
                const rect = slide.getBoundingClientRect()
                experienceSlideOffsetRef.current[index] = offset
            })
        }
        getSlideOffset()
        const handleScroll = ()=>{
            experienceSlideAnimation()
        }

        window.addEventListener('scroll', handleScroll)
        experienceSlideAnimation()
    }, [])

    const scrollTrackerRef = useRef([])
    const scrollTrackerWrapperRef = useRef([])

    const setScrollTracker = (index)=>(el)=>{
        if(el){
            scrollTrackerRef.current[index] = el
        }
    }
    const setScrollTrackerWrapper = (index)=>(el)=>{
        if(el){
            scrollTrackerWrapperRef.current[index] = el
        }
    }

    function ExperienceScrollTracker ({index}){
        return (
            <div className="experience-scroll-tracker-wrapper" ref={setScrollTrackerWrapper(index)}>
                <span className="experience-scroll-tracker" ref={setScrollTracker(index)}></span>
            </div>
        )
    }

    useEffect(() => {
        function handleResize() {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
            getSlideOffset();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);







    
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
