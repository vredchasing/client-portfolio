import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const projects = [
    { name: 'PROJECT 1', date: '11/2022', imgSlides:[{type:'video', src : '/public/projectvideo.mp4'}, {type:'video', src : '/public/projectvideo.mp4'},{type:'video', src : '/public/projectvideo.mp4'}], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', finder: 'project1' },
    { name: 'PROJECT 2', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', finder: 'project2'  },
    { name: 'PROJECT 3', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', finder: 'project3'  },
    { name: 'PROJECT 4', imgSlides:['/public/technology.webp','/public/technology.webp','/public/technology.webp'], description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula cubilia pharetra tincidunt dui non ad vulputate. Facilisi fames auctor et litora cubilia. Semper elementum vitae litora, rhoncus condimentum dictumst fusce egestas.', finder: 'project4'  }
];

function ProjectPage(){
    const {projectId} = useParams();
    const project = projects.find(p=>p.finder === projectId)
    const projectSlides = project.imgSlides
    
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
            <div className="project-page-slide-image-container" onClick={() => updateMainImage(img)}>
                {img.type === 'video' ?
                    <video className="project-page-slide-video" src={img.src}></video>     
                :   <img className="project-page-slide-image" src={img.src}></img> }
            </div>
        )
    }

    const [mainImage, setMainImage] = useState({type:project.imgSlides[0].type, src:project.imgSlides[0].src})

    const updateMainImage = (img)=>{
        setMainImage({type:img.type, src:img.src})
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
                            {mainImage.type === 'video' ?
                                <video className="project-page-main-video" autoPlay loop muted src={mainImage.src}></video>
                            :   <img className="project-page-main-image" src={mainImage.src}></img>}
                        </div>
                    </div>

                    <div className="project-page-description-wrapper">
                        <div className="project-page-title-container">
                            <h1 className="project-page-title">{project.name}</h1>
                            <p className="project-page-date">{project.date}</p>
                        </div>
                        <div className="project-page-description-container">
                            <p className="project-page-description">{project.description}</p>
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
