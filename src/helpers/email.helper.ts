import nodemailer from "nodemailer";
import { ENV } from "../config/env.config"; // Tu configuración global
import "dotenv/config";

// export const transporter = nodemailer.createTransport({
//   host: ENV.MAILTRAP.HOST,
//   port: ENV.MAILTRAP.PORT,
//   auth: {
//     user: ENV.MAILTRAP.USER,
//     pass: ENV.MAILTRAP.PASS,
//   },
// });
console.log(process.env.MAILTRAP_HOST)
console.log(Number(process.env.MAILTRAP_PORT) || 587)
console.log(process.env.MAILTRAP_USER)
console.log(process.env.MAILTRAP_PASS)
export const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: Number(process.env.MAILTRAP_PORT) || 587,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
    },
//   secure: true
});

// export const sendPasswordResetEmail = async (
//   email: string,
//   resetUrl: string,
// ) => {
//     console.log("hola este es mi error")
//   await transporter.sendMail({
//     from: '"Administración App" <hello@imaynadigital.com>',
//     to: email,
//     subject: "Restablecer tu contraseña",
//     html: `
//       <h1>¿Olvidaste tu contraseña?</h1>
//       <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
//       <a href="${resetUrl}">Restablecer contraseña</a>
//       <p>Si no solicitaste esto, ignora este correo.</p>
//     `,
//   });
    
//      console.log("hola este es mi error 2")
// };

export const sendPasswordResetEmail = async (email: string, resetUrl: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"Administración App" <hello@imaynadigital.com>',
      to: email,
      subject: "Restablecer tu contraseña",
      html: `
        <h1>¿Olvidaste tu contraseña?</h1>
        <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
        <a href="${resetUrl}">Restablecer contraseña</a>
        <p>Si no solicitaste esto, ignora este correo.</p>
      `
    });
    console.log("✅ Correo enviado con éxito:", info.messageId);
  } catch (error) {
    console.error("❌ ERROR DETALLADO AL ENVIAR CORREO:", error);
  }
};
