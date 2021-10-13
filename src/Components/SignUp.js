import React from "react";
import fields1 from "./fields1";
import Load from "../Form Components/index1";

import { Link } from "react-router-dom";
import { saveData } from '../Components/utils/localstorage';
const SignUp = () => {


  const createUser = (data) => {
   
    const user = localStorage.getItem("user")

    const userDetail = {
      name : data.Name,
      email:data.email,
      password:data.password
    }

    if(user=== null) {
        const a = []
        a.push(userDetail)
        localStorage.setItem('user', JSON.stringify(a))

    }else {
        const da= JSON.parse(user)
        if (da.some(o => o.email == data.email)) {
           alert('email already exists');
           return
        }
    else {
      da.push(userDetail);
      saveData("user", da)
      alert('Sign Up Successfully');
    }
    }
  }

  return (
    <>
      <Load

        initialValues={{}}
        onSubmit={(val) => {
          createUser(val)
        }}
        btn={"Signup"}
        btn1={"Login"}

        fields={fields1}

      />

    </>

  )

}
export default SignUp;
