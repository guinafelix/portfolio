import './navbar.css'
import { useState } from 'react';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="img-div">
        <img id="profile-img" src="/profile.jpeg" alt="foto de perfil" />
        <span>GUILHERME FÉLIX</span>
      </div>

      <button className='menu-button' onClick={toggleMenu}>
        <img src="/menu-aberto.png" alt="menu-contato" className='icon-button'/>
      </button>

      <ul className={`contact-div ${menuOpen ? 'open' : ''}`}>
        <li className='menu-link'><a href="">HOME</a></li>
        <li className='menu-link'><a href="">SOBRE</a></li>
        <li className='menu-link'><a href="">PROJETOS</a></li>
        <li className='menu-link'><a href="">CONTATO</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
