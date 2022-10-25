export function validateSchema(schema) {
    return (req, res, next) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {   
        const errorType = error.details[0].type
        console.log(error)  
          
        if(errorType.includes('empty') == true || errorType.includes('min') == true || errorType.includes('max') == true){
          return res
            .status(400)
            .send(error.details.map((detail) => detail.message));
        }
        
        if(errorType.includes('uri') == true){
          return res
            .status(422)
            .send(error.details.map((detail) => detail.message));
        }
        return res
          .status(422)
          .send(error.details.map((detail) => detail.message));
      }
  
      next();
    };
}