import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/header';

import './styles.css';

function Login() {
    return (
        <div id="login" className="container">
          <Header></Header>

          
          <main className="container-login">

            <div className="form-login">
                <h2 className="form-title">
                  Preencha os campos abaixo para efetuar login
                </h2>

                <div className="form-input">
                  <strong>E-mail</strong>
                  <input type="text"/>
                </div>

                <div className="form-input">
                  <strong>Senha</strong>
                  <input type="password"/>
                </div>

                <button type="submit" className="btn-login">
                  Entrar
                </button>

                <Link to="#">
                  Esqueci minha senha
                </Link>

                <Link to="/registre">
                  Não tem conta ? 
                  <span>
                     Crie uma conta agora GRATIS!
                  </span>
                </Link>
            </div>

          </main>
        </div>
    )
}

export default Login;