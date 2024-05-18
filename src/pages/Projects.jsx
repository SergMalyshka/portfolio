import ProjectCard from '../components/ProjectCard'
import projects from '../utils/projects'

export default function Projects() {
  return (
    <div>
        <ProjectCard projects={projects} />
    </div>
  );
}



