import React from 'react';

import {Link} from 'react-router-dom';

import Header from '../../components/header';

import './styles.css';

function Registre() {
    return (
        <div id="registre" className="container">
            <Header></Header>

            <main className="container-registre">

                <div className="form-registre">
                    <h2 className="form-title">
                        Efetuar Cadastro
                    </h2>

                    <div className="form-input">
                        <strong>Nome</strong>
                        <input type="text"/>
                    </div>

                    <div className="form-input">
                        <strong>E-mail</strong>
                        <input type="text"/>
                    </div>

                    <div className="form-input">
                        <strong>Celular</strong>
                        <input type="text"/>
                    </div>

                    <div className="form-input">
                        <strong>Senha</strong>
                        <input type="password"/>
                    </div>

                    <div className="form-input">
                        <strong>Confirmar Senha</strong>
                        <input type="password"/>
                    </div>

                    <button type="submit" className="btn-registre">
                        Cadastrar
                    </button>

                    <Link to="/login">
                        Já possui uma conta?
                        <span>
                            Clique aqui para efetuar login!
                        </span>
                    </Link>
                </div>

                </main>
        </div>
    )
}

export default Registre;