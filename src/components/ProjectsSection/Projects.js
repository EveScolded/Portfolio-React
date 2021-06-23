import classes from "./Projects.module.css"
import ProjectsList from "./ProjectsList"

const Projects = () => {

return (
<section className={classes.projects} id="projects">
  <h2 className={classes.projects__header}>Recent projects</h2>
  <p className={classes.projects__description}>I started my frontend developer path in 2020. I’ve built some projects. Here’s the list of the things I’ve done so far in my free time.</p> 
  <div className={classes.projects__container}>
  <ProjectsList />
  </div>
</section>)
}

export default Projects;