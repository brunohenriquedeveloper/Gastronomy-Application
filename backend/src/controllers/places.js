import {ok, serverError} from '../helpers/httpResponse.js'
import PlacesDataAccess from '../dataAccess/places.js'

export default class PlacesControllers {
    constructor(){
        this.dataAccess = new PlacesDataAccess()
    }

    async getPlaces(){
        try{
            const users = await this.dataAccess.getPlaces()

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async getAvailablePlaces(){
        try{
            const users = await this.dataAccess.getAvailablePlaces()

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async deletePlace(placeId){
        try{
            const result = await this.dataAccess.deletePlace(placeId)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async addPlace(placeData){
        try{
            const result = await this.dataAccess.addPlace(placeData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async updatePlace(placeId, placeData){
        try{
            const result = await this.dataAccess.updatePlace(placeId, placeData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }
}