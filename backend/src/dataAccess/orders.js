import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

const collectionName = 'orders'

export default class OrdersDataAccess {
    async getOrders(){
        const result = await Mongo.db
        .collection(collectionName)
        .find({})
        .toArray()

        return result
    }


    async addOrder(orderData){
        const result = await Mongo.db
        .collection(collectionName)
        .insertOne(placeData)

        return result
    }

    async deleteOrder(placesId){
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(placesId) })

        return result
    }

    async updateOrder(placesId, placesData){
       
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(placesId) }, 
            { $set: placesData})

        return result
    
        }
        
}