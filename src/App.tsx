// import { useState } from 'react'
import './App.css'
import { projects } from "./assets/projects.ts"
import ProjectCard from './components/ProjectCard'
import GitHubIcon from '@mui/icons-material/GitHub';

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
          PROJECTS <span>( By Vivek Tiwari)</span>
        </div>
        <a href='https://github.com/Tiwari007' target="_blank" ><GitHubIcon className='github__icon' /></a>

        <div className="projects">
          {
            projects?.map((project: ProjectsType, index: number) => (
              <ProjectCard project={project} key={index} />
            ))
          }
        </div>

        <div className="footer">
          Projects By <a href="#" target="_blank">Vivek Tiwari #BuckyAlita</a>
        </div>

      </div>
    </>
  )
}

export default App
