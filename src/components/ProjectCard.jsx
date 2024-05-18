import style from './Projects.module.css'

function ProjectCard(props) {
    return (
        <div className='row'>
            {props.projects.map(project => {
                return (
                    <div className="col-4">
                        <div className={style.singleCard}>
                            <div className={`${style.cardImage}`}>
                                <img src={project.imgSrc} className="card-img-top" alt={project.name} />
                                <div className="card-body">
                                    <h5 className={`${style.cardTitle} card-title`}>{project.name}</h5>
                                    <p className={`${style.cardDescription} card-text`}>{project.descriptoin}</p>
                                    <hr></hr>
                                    <h5 className={`${style.cardTitle} card-title`}>Technologies Used</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {project.skills.map(skill => {
                                        return (
                                            <li className={`list-group-item ${style.listItem}`}>{skill}</li>
                                        )
                                    })}
                                </ul>
                                <div className={`card-body ${style.cardBody}`}>
                                    <a href={project.github}><img className={style.github} src="\github.png"></img></a>
                                    <a href={project.live}><img className={style.github} src="\live.png"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            { }
        </div>
    )
}

export default ProjectCard