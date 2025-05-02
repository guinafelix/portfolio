import MediaMenu from "../mediaMenu/mediaMenu"
import './introduction.css'

export default function Introduction() {
  return (
    <section className="introduction" id="introduction">
      <MediaMenu/>
      <div className="introduction-content">
        <h1 className="introduction-header">OLÁ, EU SOU O GUILHERME FÉLIX</h1>
        <div className="introduction-info">
          <p className="introduction-paragraph">Engenheiro de Software com experiência em desenvolvimento de aplicações 
            web acessíveis e escaláveis em diferentes stacks como Java, Javascript, Typescript e PHP.</p>
        </div>
        <button className="button">
          projetos
        </button>
      </div>
      <div className="home-scroll">
        <div className="mouse"></div>
      </div>
    </section>
  )
}
