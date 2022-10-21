import cakesRepository from "../repositories/cakesRepositories.js"


export async function createCake(req, res){
    const { name, price, description, image } = req.body

    try{
        await cakesRepository.createCakeRepositoriy(name, price, description, image)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}

export async function getCakes(req, res){
    try{
        const cakes = await cakesRepository.getCakesRepository()
        return res.send(cakes)
    }  catch (error) {
        console.log("⚠ Error in getCakes",error)
        return res.status(500).send("⚠ Error in getCakes")
    }
}