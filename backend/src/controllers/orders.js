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

    async getAvailableOrders(){
        try{
            const users = await this.dataAccess.getAvailableOrders()

            return ok(users)
        } catch(error) {
            return serverError(error)
        }
    }

    async deleteOrder(ordersId){
        try{
            const result = await this.dataAccess.deleteOrder(ordersId)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async addOrder(ordersData){
        try{
            const result = await this.dataAccess.addOrder(ordersData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }

    async updateOrder(ordersId, ordersData){
        try{
            const result = await this.dataAccess.updateOrder(ordersId, ordersData)

            return ok(result)
        } catch(error) {
            return serverError(error)
        }
    }
}