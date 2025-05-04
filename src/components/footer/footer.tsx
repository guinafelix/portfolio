import './footer.css'

interface socialMediaLink {
  id: string;
  url: string;
  link: string
}

export default function Footer() {
  const socialMediaData: socialMediaLink[] = [
    {
      id: 'instagram',
      url: '/instagram-white-icon.png',
      link: 'https://instagram.com/oguilhermefelix'
    },
    {
      id: 'Linkedin',
      url: '/linkedin-app-white-icon.png',
      link: 'https://www.linkedin.com/in/guinafelix/'
    },
    {
      id: 'Github',
      url: '/github-white-icon.png',
      link: 'https://github.com/guinafelix'
    },
  ]

  return (
    <footer className='main-footer'>
      <div className="footer-container">
        <div className="footer-upper">
          <div className='personal-info'>
            <h2>Guilherme Félix</h2>
            <p>Engenheiro de software com foco na criação de aplicações escaláveis e acessíveis</p>
          </div>
          <div className='social-info'>
            <h2>Social</h2>
            <ul className='social-info-list'>
              {
                socialMediaData.map(item => (
                  <li className='social-info-list' key={item.id}>
                        <a href={item.link}>
                          <img src={item.url} alt={item.id} />
                        </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="footer-lower">
          <p>
            &copy; Copyright {new Date().getFullYear()}.
            Desenvolvido por <strong>Guilherme Félix</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}