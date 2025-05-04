import { useParams } from "react-router-dom"
import Introduction from "../introduction/introduction"
import Navbar from "../navbar/navbar"
import { ProjectsDB } from "./projects-data"
import Home from "../home/home"
import './project-info.css'
import Footer from "../footer/footer"

export default function ProjectInfo() {
  const {name} = useParams()
  const project = ProjectsDB.find(p => p.title === name)
  if (!project) return <Home/>
  return (
    <>
      <Navbar/>
      <Introduction info={{title: project.title, link: project.link}}/>
      <section className="project-details">
        <div className="project-details-container">
          <div className="project-details-img">
            <img src={project.imgUrl} alt="" />
          </div>
          <div className="project-content">
            <div className="project-desc">
              <h2>{project.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ex urna. Nullam ultricies venenatis odio vel suscipit. Praesent at interdum magna. Nam lacinia, turpis nec accumsan pharetra, ex velit lacinia velit, sit amet congue dui quam at lorem. Phasellus ornare accumsan est, sed ultricies dolor ultrices eget. Donec feugiat ac nisl eget aliquet. Donec pretium neque ac nisl laoreet, ac tristique tortor lobortis. Morbi molestie feugiat odio ac pellentesque. Phasellus lobortis tortor sit amet orci efficitur porta. Vestibulum lacus nulla, mattis tempus dui et, efficitur ullamcorper sapien. Ut eu elit tortor. Nulla facilisi. Praesent ac leo ex. 
                Phasellus convallis ultricies mi, sed commodo purus iaculis sed.</p>
            </div>
            <div className="tools-used">
              <h2>Ferramentas utilizadas</h2>
              <div className='skill-card-container'>
                {
                  project.tools.map(item => (
                    <div className='skill-card' key={item}>
                      {item}
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="project-links">
              <h2>Acesse a aplicação</h2>
              <div className="project-actions">
                <a className="button" href={project.link}>Testar</a>
                <a className="button secondary" href="/">Voltar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}