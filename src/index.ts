import http from "http";
import { Server } from "socket.io";
import server from "./server";
import dotenv from "dotenv";
import colors from "colors";
import { testConnection } from "./config/database.config";

dotenv.config();

const PORT = process.env.PORT || 4700;

const httpServer = http.createServer(server);

// Configuramos CORS para WebSockets aceptando tanto variables de entorno como locales/Vercel
const allowedOrigins = [
  "http://localhost:5173",
  "https://landingpage-vue-frontend.vercel.app",
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URL_LANDING,
  process.env.FRONTEND_URL_LANDING_SUBDOMAIN,
].filter(Boolean); // Elimina valores undefined si alguna variable no está definida

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

// Guardamos la instancia de io en express
server.set("io", io);

// Escuchamos las conexiones de los clientes
io.on("connection", (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

testConnection();

httpServer.listen(Number(PORT), "0.0.0.0", () => {
  console.log(colors.cyan.bold(`REST API funcionando en el puerto ${PORT}`));
});
