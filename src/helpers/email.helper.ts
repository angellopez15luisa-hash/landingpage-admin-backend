// import nodemailer from "nodemailer";
// import { ENV } from "../config/env.config"; // Tu configuración global
// import "dotenv/config";

// // export const transporter = nodemailer.createTransport({
// //   host: ENV.MAILTRAP.HOST,
// //   port: ENV.MAILTRAP.PORT,
// //   auth: {
// //     user: ENV.MAILTRAP.USER,
// //     pass: ENV.MAILTRAP.PASS,
// //   },
// // });
// console.log(process.env.MAILTRAP_HOST)
// console.log(Number(process.env.MAILTRAP_PORT) || 587)
// console.log(process.env.MAILTRAP_USER)
// console.log(process.env.MAILTRAP_PASS)
// export const transporter = nodemailer.createTransport({
//   host: process.env.MAILTRAP_HOST,
//   port: Number(process.env.MAILTRAP_PORT) || 587,
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASS,
//     },
// //   secure: true
// });

// // export const sendPasswordResetEmail = async (
// //   email: string,
// //   resetUrl: string,
// // ) => {
// //     console.log("hola este es mi error")
// //   await transporter.sendMail({
// //     from: '"Administración App" <hello@imaynadigital.com>',
// //     to: email,
// //     subject: "Restablecer tu contraseña",
// //     html: `
// //       <h1>¿Olvidaste tu contraseña?</h1>
// //       <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
// //       <a href="${resetUrl}">Restablecer contraseña</a>
// //       <p>Si no solicitaste esto, ignora este correo.</p>
// //     `,
// //   });

// //      console.log("hola este es mi error 2")
// // };

// export const sendPasswordResetEmail = async (email: string, resetUrl: string) => {
//     try {
//       console.log(email," aqui")
//     const info = await transporter.sendMail({
//       from: '"Administración App" <hello@imaynadigital.com>',
//       to: email,
//       subject: "Restablecer tu contraseña",
//       html: `
//         <h1>¿Olvidaste tu contraseña?</h1>
//         <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
//         <a href="${resetUrl}">Restablecer contraseña</a>
//         <p>Si no solicitaste esto, ignora este correo.</p>
//       `
//     });
//     console.log("✅ Correo enviado con éxito:", info.messageId);
//   } catch (error) {
//     console.error("❌ ERROR DETALLADO AL ENVIAR CORREO:", error);
//   }
// };

import { Resend } from "resend";
import { ENV } from "../config/env.config"; // Tu configuración global
import "dotenv/config";
import { ContactSendEmailBody } from "../types/contact-section.type";

// Inicializamos Resend con la API Key de las variables de entorno
const resend = new Resend(ENV.RESEND.RESEND_API_KEY);

export const sendPasswordResetEmail = async (
  email: string,
  resetUrl: string,
) => {
  try {
    const { data, error } = await resend.emails.send({
      // Usamos 'onboarding@resend.dev' para pruebas sin dominio propio
      from: "Administración App <soporte@imaynadigital.com>",
      to: [email],
      subject: "Restablecer tu contraseña",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>¿Olvidaste tu contraseña?</h2>
          <p>Haz clic en el siguiente enlace para restablecerla. Este enlace expira en 1 hora:</p>
          <a href="${resetUrl}" style="background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Restablecer contraseña</a>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">Si no solicitaste esto, ignora este correo.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error reportado por Resend:", error);
      throw new Error("No se pudo enviar el correo de recuperación");
    }

    console.log("Correo enviado con éxito por Resend:", data);
    return data;
  } catch (error) {
    console.error("Error en sendPasswordResetEmail:", error);
    throw error;
  }
};

export const sendContactEmail = async (contact: ContactSendEmailBody) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'DropZone Contacto <soporte@imaynadigital.com>',
      to: ['angellopez15luisa@gmail.com'], // El correo donde recibes las notificaciones
      replyTo: contact.email, // Permite responder directamente haciendo clic en Responder
      subject: `⚡ Nuevo mensaje de contacto: ${contact.name}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo Mensaje de Contacto</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #05070a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; -webkit-font-smoothing: antialiased; color: #e2e8f0;">
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #05070a; padding: 40px 10px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0e1017; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
                  
                  <!-- Borde Superior Neón Mentol -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%); height: 6px; width: 100%;"></td>
                  </tr>

                  <!-- Encabezado -->
                  <tr>
                    <td style="padding: 32px 32px 20px 32px; text-align: left;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <span style="display: inline-block; padding: 6px 12px; background-color: rgba(0, 245, 160, 0.1); border: 1px solid rgba(0, 245, 160, 0.25); border-radius: 20px; color: #00f5a0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">
                              ⚡ Nuevo Lead
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 12px;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">
                              Mensaje desde la Web
                            </h1>
                            <p style="margin: 6px 0 0 0; color: #9da3c0; font-size: 14px;">
                              Un cliente ha enviado una consulta a través del formulario de contacto.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Divisor -->
                  <tr>
                    <td style="padding: 0 32px;">
                      <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);"></div>
                    </td>
                  </tr>

                  <!-- Información del Formulario -->
                  <tr>
                    <td style="padding: 24px 32px;">
                      <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                        
                        <!-- Nombre -->
                        <tr>
                          <td style="padding: 8px 0;" width="35%">
                            <strong style="color: #9da3c0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Nombre:</strong>
                          </td>
                          <td style="padding: 8px 0;" width="65%">
                            <span style="color: #ffffff; font-size: 15px; font-weight: 600;">${contact.name}</span>
                          </td>
                        </tr>

                        <!-- Correo Electrónico -->
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #9da3c0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Correo:</strong>
                          </td>
                          <td style="padding: 8px 0;">
                            <a href="mailto:${contact.email}" style="color: #00d9f5; text-decoration: none; font-size: 15px; font-weight: 600;">${contact.email}</a>
                          </td>
                        </tr>

                        <!-- Teléfono / WhatsApp -->
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #9da3c0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono:</strong>
                          </td>
                          <td style="padding: 8px 0;">
                            <a href="tel:${contact.phone}" style="color: #00f5a0; text-decoration: none; font-size: 15px; font-weight: 600;">${contact.phone}</a>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>

                  <!-- Cuerpo del Mensaje -->
                  <tr>
                    <td style="padding: 0 32px 24px 32px;">
                      <div style="background-color: #05070a; border: 1px solid rgba(255, 255, 255, 0.08); border-left: 4px solid #00f5a0; border-radius: 10px; padding: 18px;">
                        <p style="margin: 0 0 8px 0; color: #00f5a0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                          💬 Mensaje:
                        </p>
                        <p style="margin: 0; color: #cbd5e1; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${contact.message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Botón de Respuesta Rápida -->
                  <tr>
                    <td style="padding: 0 32px 32px 32px;" align="center">
                      <a href="mailto:${contact.email}?subject=Re:%20Contacto%20Landing%20Page" style="display: inline-block; width: 100%; box-sizing: border-box; text-align: center; background: linear-gradient(135deg, #00f5a0 0%, #00d9f5 100%); color: #0b0e14; text-decoration: none; padding: 14px 24px; border-radius: 10px; font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(0, 245, 160, 0.3);">
                        Responder a ${contact.name} ✉️
                      </a>
                    </td>
                  </tr>

                  <!-- Pie de página -->
                  <tr>
                    <td style="background-color: #080a0f; padding: 20px 32px; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
                      <p style="margin: 0; font-size: 12px; color: #64748b;">
                        Notificación enviada automáticamente desde el formulario de la Landing Page.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    console.log('🎯 Resend Data:', data)
    console.log('⚠️ Resend Error:', error)

    if (error) {
      console.error(error)
      throw new Error('No se pudo enviar el correo de contacto')
    }

    return data
  } catch (error) {
    console.error('Error enviando email:', error)
    throw error
  }
}
