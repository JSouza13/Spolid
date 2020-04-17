import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro na autenticação.`,
      text: 'Verifique os seus dados e tente novamente.',
      icon: 'error',
      confirmButtonColor: '#E02041',
      confirmButtonText: 'Ok!',
    });

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      provider: false,
    });

    Swal.fire({
      title: `Cadastro efetuado com sucesso!`,
      icon: 'success',
      confirmButtonColor: '#E02041',
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        history.push('/');
      }
    });
  } catch (err) {
    Swal.fire({
      title: `Ocorreu um erro no cadastro.`,
      text: 'Verifique os dados e tente novamente.',
      icon: 'error',
      confirmButtonColor: '#E02041',
      confirmButtonText: 'Ok!',
    }).then(async (result) => {
      if (result.value) {
        put(signFailure());
      }
    });
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
