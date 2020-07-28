import React from 'react';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
       <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="CodoFlix logo" src={Logo}/>
           </a>

           <ButtonLink href="/" className="ButtonLink">
                Novo video
           </ButtonLink>
       </nav>
    );
}

export default Menu;