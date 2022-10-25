import cakesRepository from "../repositories/cakesRepositories.js"


export async function createCake(req, res){
    const { name, price, description, image } = req.body

    try{
        await cakesRepository.createCake(name, price, description, image)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        if(error.detail.includes('already exists') == true){
            return res  
            .status(409)
            .send(error.detail)
          }
        return res.sendStatus(500)
    }
}

export async function getCakes(req, res){
    try{
        const cakes = await cakesRepository.getCakes()
        return res.send(cakes)
    }  catch (error) {
        console.log("⚠ Error in getCakes",error)
        return res.status(500).send("⚠ Error in getCakes")
    }
}