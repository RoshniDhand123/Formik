import Form from '../../Form Components/login';
import fields from '../../Components/fields';
import {getData} from '../../Components/utils/localstorage';
import { useHistory } from 'react-router';
import {withRouter} from'react-router-dom';
import ProtectedRoutes from '../../ProtectedRoutes';
import Dashboard from '../Dashboard';

import {useState} from 'react';


function Login (){
  const [isAuth,setAuth]=useState(false);
    const history =useHistory();


    const checkUser = async (data) => {

        const allUsers = await  getData("user")

        const d = JSON.parse(allUsers);
        if(d.some(o => o.email == data.email && o.password==data.password)){
        alert('User Login');
        history.push('/dashboard');
      
        
        }
        else{
            alert('Signup Please!');
            history.push('/signup');
        }


    } 







    return(
        <div className="Container">


 
    <Form className="form"
      initialValues={{}}
      onSubmit={(value) => {
        checkUser(value);
      }}
      btnText={"Login"}
      btn={"SignUp"}
      fields={fields}
    />
    
  </div>

    )
    
}
  
export default withRouter(Login);