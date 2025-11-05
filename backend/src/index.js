import express from 'express'
import cors from 'cors'
import { Mongo } from './database/mongo.js'
import { config } from 'dotenv'
import authRouter from './auth/auth.js'
import UsersRouter from './routes/users.js'

config()

async function main() {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    app.use(express.json())
    app.use(cors())

    // Endpoint raiz
    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to the Gastronomy App'
        })
    })

    // Conecta ao Mongo
    try {
        const mongoConnection = await Mongo.connect({
            mongoConnectionString: process.env.MONGO_CS,
            mongoDbName: process.env.MONGO_DB_NAME
        })
        console.log(mongoConnection)
    } catch (error) {
        console.error('Falha na conexão com Mongo, encerrando servidor...')
        console.error(error)
        process.exit(1) // Encerra o Node caso não consiga conectar
    }

    // Só depois que o Mongo conectar, adiciona o authRouter
    app.use('/auth', authRouter)
    app.use('/users', UsersRouter)

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()
