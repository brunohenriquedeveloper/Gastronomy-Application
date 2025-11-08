import express from 'express'
import PlacesControllers from '../controllers/places.js'


const placesRouter = express.Router()

const placesControllers = new PlacesControllers()

placesRouter.get('/', async(req, res) => {
    const { success, statusCode, body } = await placesControllers.getPlaces()

    res.status(200).send({success, statusCode, body})
})

placesRouter.get('/availables/', async(req, res) => {
    const { success, statusCode, body } = await placesControllers.getAvailablePlaces()

    res.status(200).send({success, statusCode, body})
})

placesRouter.post('/', async (req, res) => {
     const { success, statusCode, body } = await placesControllers.addPlace(req.body)

    res.status(200).send({success, statusCode, body})
})

placesRouter.delete('/:id', async (req, res) => {
     const { success, statusCode, body } = await placesControllers.deletePlace(req.params.id)

    res.status(200).send({success, statusCode, body})
})

placesRouter.put('/:id', async (req, res) => {
     const { success, statusCode, body } = await placesControllers.updatePlace(req.params.id, req.body)

    res.status(200).send({success, statusCode, body})
})


export default placesRouter