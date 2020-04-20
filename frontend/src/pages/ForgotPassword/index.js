import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
import { forgotRequest } from '~/store/modules/auth/actions';
import themes from '~/styles/themes/light';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('E-mail é obrigatório'),
});

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email }) {
    dispatch(forgotRequest(email));
  }
  return (
    <div className="content">
      <section>
        <img src={logo} alt="SPOLID" width="350" height="100" />

        <Link to="/">
          <FiArrowLeft size={16} color={themes.color.primary} />
          Voltar
        </Link>
      </section>
      <section>
        <h1>Recuperar senha</h1>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="E-mail" />

          <button type="submit">
            {loading ? 'Carregando...' : 'Recuperar'}
          </button>
        </Form>
      </section>
    </div>
  );
}
