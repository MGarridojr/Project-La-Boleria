import ordersRepository from "../repositories/ordersRepository.js";


export async function createOrder(req, res){
    const {clientId, cakeId, quantity, totalPrice} = req.body
    try{
        await ordersRepository.createOrder(clientId, cakeId, quantity, totalPrice)
        return res.sendStatus(201)

    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function getAllOrders(req, res){
    try{
        const orders = await ordersRepository.getAllOrders()
        const data = orders.map((order)=>{
            const response = {
            client: {
                id: order.clientId,
                name: order.clientName,
                address: order.address,
                phone: order.phone
            },
            cake: {
                id: order.cakeId,
                name: order.cakeName,
                price: order.price,
                description: order.description,
                image: order.image
            },
            orderId: order.orderId,
            createdAt: new Date(order.createdAt).toLocaleString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'}) ,
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }
        return response        
        })
        return res.send(data)
    } catch (error) {
        console.log("⚠ Error in getAllOrders",error)
        return res.status(500).send("⚠ Error in getAllOrders")
    }
}

export async function getOrder(req, res){
    const { id } = req.params
    try{
        const orders = await ordersRepository.getOrder(id)
        const data = orders.map((order)=>{
            const response = {
            client: {
                id: order.clientId,
                name: order.clientName,
                address: order.address,
                phone: order.phone
            },
            cake: {
                id: order.cakeId,
                name: order.cakeName,
                price: order.price,
                description: order.description,
                image: order.image
            },
            orderId: order.orderId,
            createdAt: new Date(order.createdAt).toLocaleString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'}) ,
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }
        return response        
        })
        return res.send(data)
    } catch (error) {
        console.log("⚠ Error in getOrder",error)
        return res.status(500).send("⚠ Error in getOrder")
    }
}

export async function getClientsOrders(req, res){
    const { id } = req.params

    try{
        const orders = await ordersRepository.getClientsOrders(id)
        return res.send(orders)

    } catch (error) {
        console.log("⚠ Error in getClientsOrders",error)
        return res.status(500).send("⚠ Error in getClientsOrders")
    }
}