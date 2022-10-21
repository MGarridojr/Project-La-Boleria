import db from "../config/db.js";


async function createCakeRepositoriy(name, price, description, image){
    const query = `INSERT INTO cakes (name, price, description, image) VALUES($1, $2, $3, $4)`;
    const values = [name, price, description, image];
    return db.query(query, values)
}

async function getCakesRepository(){
    const cakes = await db.query(`SELECT * FROM cakes`)
    return cakes.rows
}


const cakesRepository = {
    createCakeRepositoriy,
    getCakesRepository
}

export default cakesRepository