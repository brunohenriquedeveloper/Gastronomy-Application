import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

const collectionName = 'places'

export default class PlacesDataAccess {
    async getPlaces(){
        const result = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return result
    }

        async getAvailablePlaces(){
        const result = await Mongo.db
        .collection(collectionName)
        .find({ available: true })
        .toArray()

        return result
    }


    async addPlace(placeData){
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(placeData)

        return result
    }

    async deletePlace(placesId){
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(placesId) })

        return result
    }

    async updatePlace(placesId, placesData){
       
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(placesId) }, 
            { $set: placesData})

        return result
    
        }
        
}