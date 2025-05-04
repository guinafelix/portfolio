import './about.css'

interface SkillDataInterface {
  name: string;
}

export default function About(){

  const skillData: SkillDataInterface[] = [
    {
      name: 'Java'
    }, 
    {
      name: 'Typescript'
    },
    {
      name: 'Spring Boot'
    },
    {
      name: 'React'
    },
    {
      name: 'Jest'
    },
    {
      name: 'Javascript'
    },
    {
      name: 'JUnit'
    },
    {
      name: 'Docker'
    },
    {
      name: 'PHP'
    },
    {
      name: 'Laravel'
    },
  ]

  return (
    <section className="about" id='about-section'>
      <div className="about-container">
        <h2 className='about-header'>Sobre mim</h2>
        <span className='about-span'>
          <p>
            Aqui você vai encontrar mais informações sobre mim, 
            minha experiência e minhas principais habilidades envolvendo desenvolvimento web.
          </p>
        </span>
        <div className="about-content">
            <div className='about-content-main'>
              <h3 className='about-content-header'>Minha experiência</h3>
              <p className='about-content-paragraph'>Possuo graduação em Ciência da Computação
                pelo Instituto Federal de Educação, Ciência e Tecnologia do Ceará e possuo mais de 3
                anos de experiência como desenvolvedor web.</p> 
                
              <p className='about-content-paragraph'>Atualmente atuo como analista de sistemas 
              na empresa Dataprev, atuando com ecosistema Spring e React. Também possuo experiência no 
              desenvolvimento de aplicações utilizando PHP 7/8 através do framework Laravel.
              Sou entusiasta do desenvolvimento de aplicações Web acessíveis construídas com base nos princípios
              indicados pelas diretrizes WCAG. Você também pode visualizar meus projetos nas próximas seções.
              </p>
              <button className='button about-button'>
                Contato
              </button>
            </div>
            <div className='skills-container'>
              <h3 className='about-content-header'>Skills</h3>
              <div className='skill-card-container'>
                {
                  skillData.map(item => (
                    <div className='skill-card' key={item.name}>
                      {item.name}
                    </div>
                  ))
                }
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}