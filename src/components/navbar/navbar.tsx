import './navbar.css'
import { useState } from 'react';


export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="img-div">
          <img id="profile-img" src="/profile.jpeg" alt="foto de perfil" />
          <span>GUILHERME FÉLIX</span>
        </div>

        <button className='navbar-button' onClick={toggleMenu}>
          <img src="/menu-aberto.png" alt="menu-contato" />
        </button>
        <ul className={`contact-div ${menuOpen ? 'open' : ''}`}>
          <li className='menu-link'><a href="/">HOME</a></li>
          <li className='menu-link'><a href="#about-section">SOBRE</a></li>
          <li className='menu-link'><a href="#projects">PROJETOS</a></li>
          <li className='menu-link'><a href="#contact-section">CONTATO</a></li>
        </ul>
      </nav>
    </header>
  );
}
