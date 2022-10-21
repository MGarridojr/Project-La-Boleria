import { Router } from "express";
import { createClients } from "../controllers/clientsController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import clientSchema from "../schemas/clientSchema.js";



const clientsRouter = Router();
clientsRouter.post("/clients",validateSchema(clientSchema) ,createClients)


export default clientsRouter;