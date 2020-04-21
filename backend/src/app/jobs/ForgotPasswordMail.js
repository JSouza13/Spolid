import Mail from '../../lib/Mail';

class ForgotPasswordMail {
  get key() {
    return 'ForgotPasswordMail';
  }

  async handle({ data }) {
    const { user, email, token } = data;

    await Mail.sendMail({
      to: `${user.name} <${email}>`,
      subject: 'Esqueci minha senha',
      template: 'forgotPassword',
      context: {
        user: user.name,
        token,
        email,
      },
    });
  }
}

export default new ForgotPasswordMail();
