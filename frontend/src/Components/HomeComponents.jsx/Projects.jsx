import React, { useRef, useState, useEffect, useCallback, forwardRef, useImperativeHandle, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";

const Projects = forwardRef((props, ref) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
    const [centerIndexState, setCenterIndexState] = useState(0);

    const projects = [
        { name: 'PROJECT 1', date: '11/2022', type: 'video', img: '/public/projectvideo.mp4', description: '1234', src: 'project1' },
        { name: 'PROJECT 2', date: '11/2022', type: 'video', img: '/public/projectvideo2.mp4', description: '1234', src: 'project2'  },
        { name: 'PROJECT 3', date: '11/2022', type: 'video', img: '/public/projectvideo3.mp4', description: '1234', src: 'project3'  },
        { name: 'PROJECT 4', date: '11/2022', type: 'video', img: '/public/projectvideo4.mp4', description: '1234', src: 'project4'  }
    ];

    const projectsWrapperRef = useRef(null);
    const projectSlider1Ref = useRef(null);
    const projectsSlidesRef = useRef([]);
    const leftButtonRef = useRef(null);
    const rightButtonRef = useRef(null);
    const currentTranslate = useRef(0);
    const centerIndex = useRef(0);
    const viewMoreButtonRef = useRef(null);

    const navigate = useNavigate()

    const {isLoading, setIsLoading} = useContext(Context)

    useImperativeHandle(ref, () => ({
        viewMoreButtonRef: viewMoreButtonRef.current
    }));

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
        const slideWidth = isMobile ? viewportWidth*0.8 : calculateProjectsWidth();
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

    const [isMobile, setIsMobile] = useState(window.innerWidth<=960)

    useEffect(() => {
        dynamicSlideSizing();
        centerSlides();

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            setViewportHeight(window.innerHeight);
            dynamicSlideSizing();
            centerSlides();
            setIsMobile(window.innerWidth<=960)
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const slideTrackerSpanRef = useRef([]);
    const setSlideTrackerSpanRef = (index) => (el) => {
        if (el) {
            slideTrackerSpanRef.current[index] = el;
        }
    };

    function slideTrackerAnimation() {
        const span = slideTrackerSpanRef.current;
        span.forEach(s => s.style.backgroundColor = ''); // Reset previous colors
        span[centerIndexState].style.backgroundColor = 'gray';
    }
    function scaleUpCenterIndex (index){
        
    }
    useEffect(() => {
        slideTrackerAnimation();
        scaleUpCenterIndex(centerIndexState)
    }, [centerIndexState]);



    function projectOnClick (src){
        setIsLoading(true)
        navigate(`/projects/${src}`)
        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
    }

    return (
        <div className="projects-wrapper" ref={projectsWrapperRef}>
            <div className="slider-tracker-wrapper">
                {projects.map((_, index) => (
                    <span key={index} className='slide-tracker-span' ref={setSlideTrackerSpanRef(index)}></span>
                ))}
            </div>
            <div className="view-more-button-container">
                <button className="view-more-button" ref={viewMoreButtonRef}>VIEW ALL PROJECTS</button>
            </div>
            <div className="left-arrow-container" ref={leftButtonRef} data-button-type="left">
                <img className="left-arrow-img" src="left-arrow.svg" alt="Left Arrow" />
            </div>
            <div className="projects-slider-wrapper">
                <div className="projects-slider1" ref={projectSlider1Ref}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-container-main">
                            <div className="project-container" ref={(el) => projectsSlidesRef.current[index] = el}>
                                <div className="project" onClick={() => projectOnClick(project.src)}>
                                    {project.type === 'video' ? <video className="project-video" autoPlay loop muted src={project.img}></video> : <img className="project-image" src={project.img} alt={project.name} onClick={() => projectOnClick(project.src)}/>}
                                    <div className="project-name-container">
                                        <h1 className="project-name">{project.name}</h1>
                                        <h1 className="project-date">{project.date}</h1>
                                    </div>
                                </div>
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
});

export default Projects;
