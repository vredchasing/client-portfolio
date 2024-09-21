import { useParams } from "react-router-dom"

const projects = [
    { name: 'PROJECT 1', img: '/public/technology.webp', description: '1234', src: 'project1' },
    { name: 'PROJECT 2', img: '/public/future.webp', description: '1234', src: 'project2'  },
    { name: 'PROJECT 3', img: 'public/technology.webp', description: '1234', src: 'project3'  },
    { name: 'PROJECT 4', img: 'public/technology.webp', description: '1234', src: 'project4'  }
];

function ProjectPage(){
    const {projectId} = useParams();
    const project = projects.find(p=>p.src === projectId)
    console.log('status',project)

    if(!project){
        return (
            <div>Project not found</div>
        )
    }

    return (
        <section className="project-page-main-wrapper">
            <section className="project-page-wrapper">
                <div className="project-page-image-main-wrapper">
                    <div className="project-page-image-wrapper">
                        <div className="project-page-image-container">
                            <img className="project-page-image" src={project.img}></img>
                        </div>
                    </div>
                </div>
                <div className="project-page-name-container">
                    <h1 className="project-page-name">{project.name}</h1>
                </div>
                <div className="project-page-description-wrapper">
                    <p className="project-page-description">{project.description}</p>
                </div>
            </section>
        </section>
    )
}

export default ProjectPage