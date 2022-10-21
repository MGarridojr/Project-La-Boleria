import Joi from "joi";


const cakesSchema = Joi.object({
    name: Joi.string().min(2).required().messages({
        "string.epmty": "⚠ name is required!",
        "string.min": "⚠ name must be at least 2 characters long!"
    }),
    price: Joi.number().required().messages({
        "number.epmty": "⚠ price is required!"
    }),
    description: Joi.string().allow(null, "").required(),
    image: Joi.string().uri().required().messages({
        "string.epmty": "⚠ image is required!",
        "string.uri": "⚠ image must be an url!"
    })
});

export default cakesSchema