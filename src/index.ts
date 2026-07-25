import server from './server'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const PORT = process.env.PORT || 4700

server.listen(PORT, () => {
    console.log(colors.cyan.bold(`REST API funcinando en el puerto ${PORT}`))
})