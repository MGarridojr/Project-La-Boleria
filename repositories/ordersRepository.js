import db from "../config/db.js"

async function createOrder(clientId, cakeId, quantity, totalPrice){
    const query = `INSERT INTO orders("clientId", "cakeId", quantity, "totalPrice") VALUES($1,$2,$3,$4)`
    const values = [clientId, cakeId, quantity, totalPrice]
    return db.query(query, values)
}

async function getAllOrders(){
    const query = `
        SELECT 
            cl.id as "clientId", 
            cl."name" as "clientName", 
            cl.address, 
            cl.phone, 
            ca.id as "cakeId", 
            ca."name" as "cakeName",
            ca.price,
            ca.description,
            ca.image,
            o.id as "orderId",
            o."createdAt",
            o.quantity,
            o."totalPrice"  FROM orders o
        JOIN clients cl ON cl.id = o."clientId"
        JOIN cakes ca ON ca.id = o."cakeId"`
    
    const orders = await db.query(query)

    return orders.rows
}

async function getOrder(id){
    const query = `
        SELECT 
            cl.id as "clientId", 
            cl."name" as "clientName", 
            cl.address, 
            cl.phone, 
            ca.id as "cakeId", 
            ca."name" as "cakeName",
            ca.price,
            ca.description,
            ca.image,
            o.id as "orderId",
            o."createdAt",
            o.quantity,
            o."totalPrice"  FROM orders o
        JOIN clients cl ON cl.id = o."clientId"
        JOIN cakes ca ON ca.id = o."cakeId"
        WHERE o.id=$1`
    
    const value = [id]

   const orders = await db.query(query, value)

   return orders.rows
}

async function getClientsOrders(clientId){
    const query = `
        SELECT 
            o.id as "orderId",
            o.quantity,
            o."createdAt",
            o."totalPrice",
            c.name as "cakeName" FROM orders o 
        JOIN cakes c ON c.id = o."cakeId"
        WHERE o."clientId" = $1`
    
    const value = [clientId]
    const orders = await db.query(query, value)
    return orders.rows
}

const ordersRepository = {
    createOrder,
    getAllOrders,
    getOrder,
    getClientsOrders
}

export default ordersRepository