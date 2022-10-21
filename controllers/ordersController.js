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