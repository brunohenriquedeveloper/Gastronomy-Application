import {ok, serverError} from '../helpers/httpResponse.js'
import OrdersDataAccess from '../dataAccess/orders.js'

export default class OrdersControllers {
    constructor(){
        this.dataAccess = new OrdersDataAccess()
    }

    async getOrders(){
        try{
            const users = await this.dataAccess.getOrders()

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async getOrdersByUserId(userId){
        try{
            const users = await this.dataAccess.getOrdersByUserId(userId)

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async getAvailableOrders(){
        try{
            const users = await this.dataAccess.getAvailableOrders()

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async deleteOrders(ordersId){
        try{
            const result = await this.dataAccess.deleteOrders(ordersId)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async addOrders(ordersData){
        try{
            const result = await this.dataAccess.addOrders(ordersData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async updateOrders(ordersId, ordersData){
        try{
            const result = await this.dataAccess.updateOrders(ordersId, ordersData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }
}