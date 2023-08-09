// import { useState } from 'react'
import './App.css'
import { projects } from "./assets/projects.ts"
import ProjectCard from './components/ProjectCard'

type ProjectsType = {
  name: string,
  thumbnail: string,
  liveLink: string,
  githubLink: string
}

function App() {

  // const [allProjects, setAllProjects] = useState<any>(projects);

  return (
    <>
      <div className='App'>
        <div className="header">
          PROJECTS
        </div>

        <div className="projects">
          {
            projects?.map((project: ProjectsType, index: number) => (
              <ProjectCard project={project} key={index} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App
