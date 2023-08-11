// import React from 'react'

// type ProjectProps = {
//     name: string,
//     thumbnail: string,
//     liveLink: string,
//     githubLink: string
// }

const ProjectCard = ({ project }: any) => {
    return (
        <a href={project["live-link"]} target="_blank">
            <div className='project__card'>
                <div className="project__thumbnail">
                    <img src={project.thumbnail} alt={project.name} />
                </div>
                <div className="project__header">
                    {project.name}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;