import express from 'express'
import cors from 'cors'

async function main () {
    const hostname = 'localhost'
    const port = 3000

    const app = express()

    app.use(express.json()) // arruma a resposta do servidor
    app.use(cors())

    app.get('/', (req, res) => {
        res.send({
            success: true,
            statusCode: 200,
            body: 'Welcome to the Gastronomy App'
        })
    })

    app.listen(port, () => {
        console.log(`Server running on: http://${hostname}:${port}`)
    })
}

main()