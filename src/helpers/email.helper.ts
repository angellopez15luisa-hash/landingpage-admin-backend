import nodemailer from 'nodemailer';
import { ENV } from '../config/env.config'; // Tu configuración global

export const transporter = nodemailer.createTransport({
  host: ENV.MAILTRAP.HOST,
  port: ENV.MAILTRAP.PORT,
  auth: {
    user: ENV.MAILTRAP.USER,
    pass: ENV.MAILTRAP.PASS,
  },
});

export const sendPasswordResetEmail = async (email: string, resetUrl: string) => {
  await transporter.sendMail({
    from: '"Administración App" <no-reply@tu-app.com>',
    to: email,
    subject: "Restablecer tu contraseña",
    html: `
      <h1>¿Olvidaste tu contraseña?</h1>
      <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
      <a href="${resetUrl}">Restablecer contraseña</a>
      <p>Si no solicitaste esto, ignora este correo.</p>
    `,
  });
};