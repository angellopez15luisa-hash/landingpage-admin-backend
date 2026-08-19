import http from 'http'
import { Server } from 'socket.io'
import server from './server'
import dotenv from 'dotenv'
import colors from 'colors'
import { testConnection } from "./config/database.config"

dotenv.config()

const PORT = process.env.PORT || 4700

const httpServer = http.createServer(server)

// Configuramos CORS exclusivo para el protocolo de WebSockets
const io = new Server(httpServer, {
  cors: {
    origin: [process.env.FRONTEND_URL,process.env.FRONTEND_URL_LANDING,process.env.FRONTEND_URL_5174], // El puerto de tu frontend en Vue
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }
});

// 3. Escuchamos las conexiones de los clientes
io.on("connection", (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

server.set("io", io);

testConnection()

httpServer.listen(PORT, () => {
    console.log(colors.cyan.bold(`REST API funcinando en el puerto ${PORT}`))
})