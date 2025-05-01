import './projects.css'

interface ProjectsData {
  name: string;
  imgUrl: string;
  description: string;
  projectPage: string;
}

export default function Projects() {

  const projects: ProjectsData[] = [
    {
      name: 'Gestão',
      imgUrl: 'image.png',
      description: 'Sistema de gestão de empresas feito em Php 7 e Laravel',
      projectPage: 'linkTeste'
    },
    {
      name: 'Gestão',
      imgUrl: 'image.png',
      description: 'Sistema de gestão de empresas feito em Php 7 e Laravel',
      projectPage: 'linkTeste'
    }
  ]

  return (
    <section className="projects">
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
              <li>
                <div className='projects-info'>
                  <div className='project-img'>
                    <img src={item.imgUrl} alt="" className='project-img-content'/>
                  </div>
                  <div className='project-info'>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className='button'>Caso de estudo</button>
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