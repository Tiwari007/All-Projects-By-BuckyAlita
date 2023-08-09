// import React from 'react'

// type ProjectProps = {
//     name: string,
//     thumbnail: string,
//     liveLink: string,
//     githubLink: string
// }

const ProjectCard = ({project} : any) => {
    return (
        <div className='project__card'>
            <div className="project__header">
                {project.name}
            </div>
            <div className="project__thumbnail">
                <img src={project.thumbnail} alt={project.name} />
            </div>
            <div className="project__links">
                <a href ={project.githubLink} ><button className="github">Github Link</button></a>
                <a href ={project.liveLink} ><button className="live">Live Link</button></a>
            </div>
        </div>
    )
}

export default ProjectCard;