import Joi from "joi";

const orderSchema = Joi.object({
    clientId: Joi.number().required().messages({
        "number.epmty": "⚠ clientId is required!"
    }),
    cakeId: Joi.number().required().messages({
        "number.epmty": "⚠ cakesId is required!"
    }),
    quantity: Joi.number().required().messages({
        "number.epmty": "⚠ quantity is required!"
    }),
    totalPrice: Joi.number().required().messages({
        "number.epmty": "⚠ totalPrice is required!"
    }),
})

export default orderSchema