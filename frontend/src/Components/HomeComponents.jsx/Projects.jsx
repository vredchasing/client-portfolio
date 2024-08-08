import { useRef, useState, useEffect } from "react"
function Projects (){

    const projects = [
        {
            name: '1',
            img: 'technology.webp'
        },
        {
            name: '1',
            img: 'technology.webp'
        },
        {
            name: '1',
            img: 'technology.webp'
        },
        {
            name: '1',
            img: 'technology.webp'
        }
    ]

    function CreateProjects ({project, index}){
        return(
            <div className="project-container" ref={setProjectSlidesRef(index)}>
                <div className="project">
                    <img className="project-image" src={project.img}></img>
                    <div className="project-name-container">

                    </div>
                </div>
            </div>
        )
    }

    const projectsWrapperRef = useRef(null)
    const projectsSlidesRef = useRef([])

    const setProjectsWrapperRef = (el) =>{
        if(el){
            projectsWrapperRef.current = el
        }
    }

    const setProjectSlidesRef = (index)=>(el)=>{
        if(el){
            projectsSlidesRef.current[index] = el
        }
    }

    const calculateWrapperWidth = ()=>{
        const wrapper = projectsWrapperRef.current
        const wrapperWidth = wrapper.offsetWidth
        return wrapperWidth
    }

    const calculateProjectsWidth = ()=>{
        const project = projectsSlidesRef.current[1]
        const projectWidth = project.offsetWidth
        return projectWidth
    }

    function dynamicSlideSizing (){
        const slides = projectsSlidesRef.current
        const wrapperWidth = calculateWrapperWidth()
        const slideWidth = calculateProjectsWidth()
        const oneHalfValue = wrapperWidth/2
        slides.forEach((slide, index)=>[
            slide.style.width = `${oneHalfValue}px`
        ])
    }

    function centerSlides (){
        const slides = projectsSlidesRef.current
        const wrapperWidth = calculateWrapperWidth()
        const slideWidth = calculateProjectsWidth()

        console.log('wrapperwidth', wrapperWidth)
        console.log('slidewidth', slideWidth)

        const remainderSpace = wrapperWidth-slideWidth
        const translateXValue = remainderSpace/2
        
        slides.forEach((slide, index)=>{
            slide.style.transform = `translateX(-${translateXValue}px)`
        })
    }

    useEffect(()=>{
        dynamicSlideSizing()
        centerSlides()
    }, [])
    return(
        <div className="projects-wrapper" ref={setProjectsWrapperRef}>
            <div className="projects-slider">
                {projects.map((project, index)=>{
                    return <CreateProjects key={project.name} project={project} index={index}></CreateProjects>
                })}
            </div>
        </div>
    )
}

export default Projects