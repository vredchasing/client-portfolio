
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
            <div className="project-container">
                <div className="project">
                    <img className="project-image" src={project.img}></img>
                    <div className="project-name-container">

                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="projects-wrapper">
            {projects.map((project, index)=>{
                return <CreateProjects key={project.name} project={project} index={index}></CreateProjects>
            })}
        </div>
    )
}

export default Projects