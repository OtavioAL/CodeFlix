import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Img/Logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
       <nav className="Menu">
            <Link to="/">
                <img className="Logo" alt="CodoFlix logo" src={Logo}/>
           </Link>

           <ButtonLink href="/cadastro/video" className="ButtonLink">
                Novo video
           </ButtonLink>
       </nav>
    );
}

export default Menu;