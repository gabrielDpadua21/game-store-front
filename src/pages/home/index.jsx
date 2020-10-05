import React from 'react';
import {Link} from 'react-router-dom';

import LogoHorizontal from '../../assets/images/logos/logo-horizontal.svg';

import IconLock from '../../assets/images/icons/icon-lock.svg';
import IconRegistre from '../../assets/images/icons/icon-registre-white.svg';

import './style.css';

function Home() {
    return (
        <div id="home" className="container">
            <header className="header-home">
                <div className="logo">
                    <img src={LogoHorizontal} alt="Logo - Facens Game Store"/>
                </div>
                <nav className="nav-home">
                    <Link to="/login">
                        <img src={IconLock} alt="Lock"></img>
                        FAZER LOGIN
                    </Link>
                </nav>
            </header>
            <main className="main-home">
                <h1 className="home-title">
                    LUGAR ONDE OS MELHORES GAMES DA ATUALIDADE ESTÃO DISPONIVEIS A PREÇOS ACESSÍVEIS
                </h1>
                <h5 className="home-subtitle">
                    Confira nosso catálogo e torne-se um PRO player dos melhores titulos da atualidade
                </h5>
                <Link to="/registre" className="btn-registre">
                    <div className="btn-icon">
                        <img src={IconRegistre} alt="Cadastro"/>
                    </div>
                    <div className="btn-text">
                        Faça seu cadastro agora GRATIS!
                    </div>
                </Link>
            </main>
        </div>
    )
}

export default Home;