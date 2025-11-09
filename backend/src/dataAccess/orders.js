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


    async addOrders(orderData){
        const { items, ...orderDataRest } = orderData

        orderDataRest.createdAt = new Date()
        orderDataRest.pickupStatus = 'Pending'
        orderDataRest.userId = new ObjectId(orderDataRest.userId)

        const newOrder = await Mongo.db
        .collection(collectionName)
        .insertOne(orderDataRest)
        
        if(!newOrder.insertedId){
            throw new Error('Order cannot be inserted')
        }

        items.map((item) => {
            item.placeId = new ObjectId(item.placeId)
            item.orderId = new ObjectId(newOrder.insertedId)

        } )

        const result = await Mongo.db
        .collection('orderItems')
        .insertMany(items)

        return result
    }

    async deleteOrders(ordersId){
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(ordersId) })

        return result
    }

    async updateOrders(ordersId, ordersData){
       
        const result = await Mongo.db
        .collection(collectionName)
        .findOneAndUpdate(
            { _id: new ObjectId(ordersId) }, 
            { $set: ordersData})

        return result
    
        }
        
}