import React from 'react';
import {Link} from 'react-router-dom';

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

import IconBack from '../../assets/images/icons/icon-back.svg';

import './style.css';

function Header() {
    return (
        <header className="header">
                <div className="logo">
                    <img src={LogoHorizontal} alt="Logo - Facens Game Store"/>
                </div>
                <nav className="nav-home">
                    <Link to="#">
                        <img src={IconBack} alt="Lock"></img>
                        Voltar
                    </Link>
                </nav>
        </header>
    )
}

export default Header