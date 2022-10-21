import Joi from "joi";


const clientSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.epmty": "⚠ name is required!"
    }),
    address: Joi.string().required().messages({
        "string.epmty": "⚠ address is required!"
    }),
    phone: Joi.string().min(10).max(11).required().messages({
        "string.epmty": "⚠ phone is required!",
        "string.min": "⚠ phone must be at least 10 characters long!",
        "string.max": "⚠ phone must have a maximum of 11 characters!"
    })
});

export default clientSchema