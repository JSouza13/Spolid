import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FiArrowLeft } from 'react-icons/fi';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve ter no mínimo 6 caracteres')
    .required('Senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <div className="content">
      <section>
        <img src={logo} alt="SPOLID" />
        <h1>Cadastro</h1>
        <p>Faça seu cadastro, entre na plataforma e conquiste o sucesso!</p>

        <Link to="/">
          <FiArrowLeft size={16} color="#E02041" />
          Já tenho cadastro
        </Link>
      </section>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Cadastrar</button>
      </Form>
    </div>
  );
}
