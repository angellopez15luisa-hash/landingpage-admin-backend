import server from './server'
import dotenv from 'dotenv'
import colors from 'colors'
import { testConnection } from "./config/database.config"

dotenv.config()

const PORT = process.env.PORT || 4700

testConnection()

server.listen(PORT, () => {
    console.log(colors.cyan.bold(`REST API funcinando en el puerto ${PORT}`))
})