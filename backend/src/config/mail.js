// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   // Configura os parâmetros de conexão com servidor.
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   secure: false,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
//   default: {
//     from: 'Equipe Spolid Academy <noreply@spolid.academy.com>',
//   },
// });

// export default transporter;

export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'Equipe Spolid Academy <noreply@spolid.academy.com>',
  },
};
