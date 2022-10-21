import db from "../config/db.js"


async function createClients(name, address, phone){
    const query = `INSERT INTO clients(name, address, phone) VALUES($1,$2,$3)`
    const values = [name, address, phone]
    return db.query(query, values)
}



const clientsRepository = {
    createClients
}

export default clientsRepository