import { Mongo } from "../database/mongo.js"
import { ObjectId } from "mongodb"

const collectionName = 'orders'

export default class OrdersDataAccess {
    async getOrders(){
        const result = await Mongo.db
        .collection(collectionName)
        .aggregate([
            {
                $lookup: {
                    from: 'orderItems',
                    localField: '_id',
                    foreignField: 'orderId',
                    as:'orderItems'
                }
            }, {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as:'userDetails'
                }
            },
            {
                $project: {
                    'userDetails.password': 0,
                    'userDetails.salt': 0,

                }
            }, {
                $unwind: '$orderItems'
            }, {
                $lookup: {
                    from: 'places',
                    localField: 'orderItems.placeId',
                    foreignField: '_id',
                    as:'orderItems.itemDetails'
                }
            },
        ])
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

        const itemsToDelete = await Mongo.db
        .collection('orderItems')
        .deleteMany({orderId: new ObjectId(ordersId)})


        const orderToDelete = await Mongo.db
        .collection(collectionName)
        .findOneAndDelete({ _id: new ObjectId(ordersId) })

        const result = {
            itemsToDelete,
            orderToDelete
        }

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