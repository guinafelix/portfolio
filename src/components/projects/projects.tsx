import { ProjectsDB } from './projects-data'
import './projects.css'

export default function Projects() {

  const projects = ProjectsDB;

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className='projects-header'>Projetos</h2>
        <span className='projects-span'>
          <p>
            Aqui você vai encontrar alguns dos projetos pessoais que desenvolvi, com seus respectivos 
            casos de estudo.
          </p>
        </span>
        {
          projects.map(item => (
            <ul>
              <li key={item.title}>
                <div className='projects-info'>
                  <div className='project-img'>
                    <img src={item.imgUrl} alt="" className='project-img-content'/>
                  </div>
                  <div className='project-info'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a href={`/projects/${item.title}`} target='_blank' className='button'>Caso de estudo</a>
                  </div>
                </div>
              </li>
            </ul>
          ))
        }
      </div>
    </section>
  )
}