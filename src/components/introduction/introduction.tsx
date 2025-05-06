import MediaMenu from "../mediaMenu/mediaMenu"
import './introduction.css'

interface InfoData {
  title: string
  link: string
}

interface IntroductionProps {
  info?: InfoData
}

export default function Introduction({ info }: IntroductionProps) {
  return (
    <section className="introduction" id="introduction">
      <MediaMenu/>
      <div className="introduction-content">
        <h1 className="introduction-header">{ info?.title ? info.title : 'OLÁ, EU SOU O GUILHERME FÉLIX'}</h1>
        <div className="introduction-info">
          <p className="introduction-paragraph">
            {info ? `Esta página contém o estudo de caso do desenvolvimento de ${info.title}, incluíndo a visão geral, ferramentas utilizadas e os endereços para visualizar o projeto em tempo real.` 
            : 'Engenheiro de Software com experiência em desenvolvimento de aplicações web acessíveis e escaláveis em diferentes stacks como Java, Javascript, Typescript e PHP.'}</p>
        </div>
        <a href={info?.title ? `${info.link}` : '#projects'} className="button project-button">
          { info?.title ? 'acessar aplicação' : 'projetos'}
        </a>
      </div>
      {!info &&
      <div className="home-scroll">
        <div className="mouse"></div>
      </div>}
    </section>
  )
}
