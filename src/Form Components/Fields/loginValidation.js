import *  as Yup from 'yup';
export const createSchema1=(loginValidations)=>{
    let shape ={}
    for(let i=0;i<loginValidations.length;i++){
        let type = loginValidations[i].type;
        let key = loginValidations[i].name;
        let label = loginValidations[i].label;
        let required = loginValidations[i].required;
        let req_msg = loginValidations[i].req_msg;
        let err_msg = loginValidations[i].err_msg;
        let matches = loginValidations[i].matches;
        let min = loginValidations[i].min;
        let max = loginValidations[i].max;

        if (type === "email") {
            shape[key] = Yup.string().email(
              err_msg || "Please provide a valid email addess"
            );
          } 
          if(type==="password"){
              shape[key]=Yup.string().required('No password provided.') 
              .min(4, 'Password is too short - should be 4 chars minimum.')
              .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
          }



    }
    return Yup.object().shape(shape);

}