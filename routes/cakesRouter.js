import { Router } from "express"
import { createCake, getCakes } from "../controllers/cakesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import cakesSchema from "../schemas/cakesSchema.js";


const cakesRouter = Router();

cakesRouter.post("/cakes",validateSchema(cakesSchema), createCake);
cakesRouter.get("/cakes", getCakes);


export default cakesRouter;