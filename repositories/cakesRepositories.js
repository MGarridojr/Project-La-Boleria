import db from "../config/db.js";


async function createCake(name, price, description, image){
    const query = `INSERT INTO cakes (name, price, description, image) VALUES($1, $2, $3, $4)`;
    const values = [name, price, description, image];
    return db.query(query, values)
}

async function getCakes(){
    const cakes = await db.query(`SELECT * FROM cakes`)
    return cakes.rows
}


const cakesRepository = {
    createCake,
    getCakes
}

export default cakesRepository