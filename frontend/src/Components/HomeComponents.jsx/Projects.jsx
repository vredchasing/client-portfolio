import { useRef, useState, useEffect, useCallback } from "react";

function Projects() {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [centerIndexState, setCenterIndexState] = useState(0);

    const projects = [
        { name: '1', img: 'technology.webp' },
        { name: '1', img: 'future.webp' },
        { name: '1', img: 'technology.webp' },
        { name: '1', img: 'technology.webp' }
    ];

    // Refs
    const projectsWrapperRef = useRef(null);
    const projectSlider1Ref = useRef(null);
    const projectsSlidesRef = useRef([]);
    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);
    const currentTranslate = useRef(0);
    const centerIndex = useRef(0);

    const calculateWrapperWidth = () => projectsWrapperRef.current?.offsetWidth || 0;
    const calculateProjectsWidth = () => projectsSlidesRef.current[0]?.offsetWidth || 0;

    const dynamicSlideSizing = useCallback(() => {
        const slides = projectsSlidesRef.current;
        const wrapperWidth = calculateWrapperWidth();
        const oneHalfValue = wrapperWidth / 2;
        slides.forEach((slide) => {
            slide.style.width = `${oneHalfValue}px`;
        });
    }, []);

    const centerSlides = useCallback(() => {
        const slides = projectsSlidesRef.current;
        const wrapperWidth = calculateWrapperWidth();
        const slideWidth = calculateProjectsWidth();
        const remainderSpace = wrapperWidth - slideWidth;
        const translateXValue = remainderSpace / 2;
        slides.forEach((slide) => {
            slide.style.transform = `translateX(${translateXValue}px)`;
        });
        currentTranslate.current = translateXValue;
        centerIndex.current = 0;
        updateButtonVisibility();
    }, []);

    const updateButtonVisibility = useCallback(() => {
        if (leftButtonRef.current) {
            leftButtonRef.current.style.opacity = centerIndex.current <= 0 ? '0' : '1';
            leftButtonRef.current.style.pointerEvents = centerIndex.current <= 0 ? 'none' : 'auto';
        }
        if (rightButtonRef.current) {
            rightButtonRef.current.style.opacity = centerIndex.current < projects.length - 1 ? '1' : '0';
            rightButtonRef.current.style.pointerEvents = centerIndex.current < projects.length - 1 ? 'auto' : 'none';
        }
    }, [centerIndex.current, projects.length]);
    
    const sliderClickAnimation = (e) => {
        const buttonType = e.currentTarget.dataset.buttonType;
        const slideWidth = calculateProjectsWidth();
        let translation;

        if (buttonType === 'left') {
            translation = currentTranslate.current + slideWidth;
            centerIndex.current -= 1;
        } else if (buttonType === 'right') {
            translation = currentTranslate.current - slideWidth;
            centerIndex.current += 1;
        }

        projectsSlidesRef.current.forEach((slide) => {
            slide.style.transform = `translateX(${translation}px)`;
        });
        currentTranslate.current = translation;
        setCenterIndexState(centerIndex.current);
        updateButtonVisibility();
    };

    useEffect(() => {
        dynamicSlideSizing();
        centerSlides();

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [viewportHeight, viewportWidth]);

    useEffect(() => {
        const handleClick = (e) => sliderClickAnimation(e);
        if (leftButtonRef.current && rightButtonRef.current) {
            leftButtonRef.current.addEventListener('click', handleClick);
            rightButtonRef.current.addEventListener('click', handleClick);
        }
        return () => {
            if (leftButtonRef.current && rightButtonRef.current) {
                leftButtonRef.current.removeEventListener('click', handleClick);
                rightButtonRef.current.removeEventListener('click', handleClick);
            }
        };
    }, [sliderClickAnimation]);

    const slideTrackerSpanRef = useRef([])
    function CreateSlideTracker({index}) {
        return (
            <span className='slide-tracker-span' ref={setSlideTrackerSpanRef(index)} ></span>
        );
    }

    const setSlideTrackerSpanRef = (index)=>(el)=>{
        if(el){
            slideTrackerSpanRef.current[index] = el
        }
    }

    function slideTrackerAnimation (){
        const span = slideTrackerSpanRef.current
        const slides = projectsSlidesRef.current
        span[centerIndexState].style.backgroundColor = 'gray'
    }

    useEffect(()=>{
        slideTrackerAnimation()
    }, [centerIndexState])
    

    return (
        <div className="projects-wrapper" ref={projectsWrapperRef}>
            <div className="slider-tracker-wrapper">
                {projects.map((_, index) => (
                    <CreateSlideTracker key={index} index={index}/>
                ))}
            </div>
            <div className="view-more-button-container">
                <button className="view-more-button">VIEW ALL PROJECTS</button>
            </div>
            <div className="left-arrow-container" ref={leftButtonRef} data-button-type="left">
                <img className="left-arrow-img" src="left-arrow.svg" alt="Left Arrow" />
            </div>
            <div className="projects-slider-wrapper">
                <div className="projects-slider1" ref={projectSlider1Ref}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-container" ref={(el) => projectsSlidesRef.current[index] = el}>
                            <div className="project">
                                <img className="project-image" src={project.img} alt={project.name} />
                                <div className="project-name-container"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right-arrow-container" ref={rightButtonRef} data-button-type="right">
                <img className="right-arrow-img" src="left-arrow.svg" alt="Right Arrow" />
            </div>
        </div>
    );
}

export default Projects;
