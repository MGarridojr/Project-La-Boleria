import db from "../config/db.js"

async function createOrder(clientId, cakeId, quantity, totalPrice){
    const query = `INSERT INTO orders("clientId", "cakeId", quantity, "totalPrice") VALUES($1,$2,$3,$4)`
    const values = [clientId, cakeId, quantity, totalPrice]
    return db.query(query, values)
}








const ordersRepository = {
    createOrder
}

export default ordersRepository