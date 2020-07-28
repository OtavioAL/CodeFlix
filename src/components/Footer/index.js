import React from 'react';
import baixo from '../../assets/Img/baixo.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={baixo} alt="Logo CodeFlix" />
      </a>
    </FooterBase>
  );
}

export default Footer;
