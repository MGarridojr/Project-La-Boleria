import clientsRepository from "../repositories/clientsRepository.js"

export async function createClients(req, res){
    const { name, address, phone} = req.body
    try{
        await clientsRepository.createClients(name, address, phone)
        return res.sendStatus(201)

    } catch(error) {
        console.log(error)
        return res.sendStatus(500)
    }
}