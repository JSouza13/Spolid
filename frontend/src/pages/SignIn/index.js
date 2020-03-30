import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logo from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

export default function SignIn() {
  return (
    <>
      <section>
        <img src={logo} alt="SPOLID" />

        <form>
          <h1>Faça seu login</h1>

          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </>
  );
}
