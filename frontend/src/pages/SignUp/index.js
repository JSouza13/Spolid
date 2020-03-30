import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <div className="content">
      <section>
        <img src={logo} alt="SPOLID" />
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e conquiste o sucesso!</p>

        <Link to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
      </section>

      <form>
        <input type="text" placeholder="Nome completo" />

        <input type="email" placeholder="E-mail" />
        <input placeholder="Login" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
