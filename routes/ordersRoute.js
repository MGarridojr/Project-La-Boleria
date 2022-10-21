import { Router } from "express"
import { createOrder } from "../controllers/ordersController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/ordersSchema.js";


const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(orderSchema), createOrder)



export default ordersRouter