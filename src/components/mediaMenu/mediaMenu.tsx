import './mediaMenu.css'

interface socialMediaLink {
  id: string;
  url: string;
  link: string
}

export default function MediaMenu() {
  const socialMediaData: socialMediaLink[] = [
    {
      id: 'instagram',
      url: '/instagram.png',
      link: 'https://instagram.com/oguilhermefelix'
    },
    {
      id: 'Linkedin',
      url: '/linkedin.png',
      link: 'https://www.linkedin.com/in/guinafelix/'
    },
    {
      id: 'Github',
      url: '/github.png',
      link: 'https://github.com/guinafelix'
    },
  ]
  return (
    <nav className="media-menu">
      <ul className='media-menu-list'>
        {
          socialMediaData.map(item => (
            <li className='media-menu-list' key={item.id}>
                  <a href={item.link}>
                    <img src={item.url} alt={item.id} />
                  </a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}