import * as Yup from "yup";


export const createSchema = (validations) => {
  let shape = {};
  for (let i = 0; i < validations.length; i++) {
    let type = validations[i].type;
    let key = validations[i].name;
    let label = validations[i].label;
    let required = validations[i].required;
    let req_msg = validations[i].req_msg;
    let err_msg = validations[i].err_msg;
    let matches = validations[i].matches;
    let min = validations[i].min;
    let max = validations[i].max;

    if (type === "email") {
      shape[key] = Yup.string().email(
        err_msg || "Please provide a valid email addess"
      );
    } 
     
     else if (type === "name") {
      shape[key] = Yup
      .string()
      .min(4,"Please enter  atleast 4 characters")
     }
    
   
    if (key === "cpassword") {
      shape["cpassword"] = Yup.mixed().test(
        "match",
        "password and re-enter password does not match",
        function (password) {
          return password === this.parent.password;
        }
      );
    }
  }

  return Yup.object().shape(shape);
};

