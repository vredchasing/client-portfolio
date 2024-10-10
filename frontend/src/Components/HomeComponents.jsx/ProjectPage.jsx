import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const projects = [
    { name: 'PROJECT 1', img: '/public/technology.webp', imgSlides:['/public/filler1.jfif','/public/future.webp','/public/filler1.jfif'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', src: 'project1' },
    { name: 'PROJECT 2', img: '/public/future.webp', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', src: 'project2'  },
    { name: 'PROJECT 3', img: '/public/technology.webp', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', src: 'project3'  },
    { name: 'PROJECT 4', img: '/public/technology.webp', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', src: 'project4'  }
];

function ProjectPage(){
    const {projectId} = useParams();
    const project = projects.find(p=>p.src === projectId)
    const projectSlides = project.imgSlides
    console.log('slides',projectSlides)
    
    useEffect(()=>{
        scrollTo(0,0)
    }, [])
    if(!project){
        return (
            <div>Project not found</div>
        )
    }

    function CreateProjectPageSlides ({img, index}){
        return(
            <div className="project-page-slide-image-container">
                <img className="project-page-slide-image" src={img} onClick={updateMainImage}></img>
            </div>
        )
    }

    const [mainImage, setMainImage] = useState(project.imgSlides[0])

    const updateMainImage = (e)=>{
        setMainImage(e.target.src)
    }

    useEffect(()=>{
        console.log(mainImage)
    }, [mainImage])
    return (
        <section className="project-page-main-wrapper">

            <div className="project-page-hero-content-wrapper">
                <div className="images-main-wrapper">
                    <div className="project-page-main-image-wrapper">
                        <div className="project-page-main-image-container">
                            <img className="project-page-main-image" src={mainImage}></img>
                        </div>
                    </div>
                    <div className="project-page-image-slides-wrapper">
                        <div className="project-page-image-slides">
                            {project.imgSlides.map((img, index)=>{
                                return(
                                    <CreateProjectPageSlides key={index} img={img} index={index}></CreateProjectPageSlides>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectPage