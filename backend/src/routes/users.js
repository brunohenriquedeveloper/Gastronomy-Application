import express from 'express'
import UsersControllers from '../controllers/users.js'


const usersRouter = express.Router()

const usersControllers = new UsersControllers()

usersRouter.get('/', async(req, res) => {
    const { success, statusCode, body } = await usersControllers.getUsers()

    res.status(200).send({success, statusCode, body})
})

usersRouter.delete('/:id', async (req, res) => {
     const { success, statusCode, body } = await usersControllers.deleteUser(req.params.id)

    res.status(200).send({success, statusCode, body})
})

usersRouter.put('/:id', async (req, res) => {
     const { success, statusCode, body } = await usersControllers.updateUser(req.params.id, req.body)

    res.status(200).send({success, statusCode, body})
})


export default usersRouter