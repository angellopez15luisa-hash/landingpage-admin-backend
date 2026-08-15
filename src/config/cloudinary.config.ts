import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from 'dotenv'

dotenv.config()

// Configuración oficial con tus credenciales
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuración del almacenamiento para Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "landing-page", // Carpeta donde se guardarán las imágenes en tu cuenta
    allowed_formats: ["jpg", "png", "webp", "jpeg"],
  } as any,
});

// Middleware listo para usar en tus rutas
export const upload = multer({ storage });