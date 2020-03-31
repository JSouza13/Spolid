import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('Um e-mail válido deve ser informado'),
  password: Yup.string().required('Uma senha válida deve ser informada'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <section>
        <img src={logo} alt="SPOLID" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Criar conta gratuita
          </Link>
        </Form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </>
  );
}
