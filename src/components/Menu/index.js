import React from 'react';
import Logo from '../../assets/img/testflix-logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink/';

// O componente é uma função que vai retornar o JSX.

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Testflix logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

// Exportando para usar em outros lugares.
export default Menu;