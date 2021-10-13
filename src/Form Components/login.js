import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid } from "@material-ui/core";
import {createSchema1} from"../Form Components/Fields/loginValidation";
import { useHistory } from "react-router";
import{styled} from "@material-ui/styles";
const MyButton = styled(Button)({
  background: 'blue',
  border: 0,
  borderRadius: 70,
  color: 'white',
  height: 65,
  padding: '0 60px',
  margin:70
  
});

const FormComponent=(props)=>{
  const history = useHistory();
  const login=()=>{
    history.push('signup');
  }

  const schema = createSchema1(props.fields)

   const renderField = (props) => {
        return (
          <Grid item xs={props.grid || 12}>
            <Field key={props.name} {...props} />
          </Grid>
        );
      };

  const renderForm = ({ handleSubmit }) => {
        const { fields, renderCustomSubmit, btnText,btn } = props;
        return (
          // onSubmit={handleSubmit}
         
          <>
          <div className="form">

         
<Form className="container">
<div className="ltext">
           <label htmlFor="Login">Login</label>
           </div>
            <>
              <Grid container spacing={2}>
                {fields.map(renderField)}
              </Grid>
              <div className="loginbtn">
              {renderCustomSubmit || (
                <MyButton variant="contained" type="submit">
                  {btnText}
                </MyButton>
                
              )}
              </div>
              <div className="loginbtn1">
                

                <br/>
              <label className="label1" htmlFor="a">SignUp Now!</label>
              <a  style={{textDecoration:"none"}} href="/signup">Sign  up</a>
            
              
              </div>

            </>
           
          </Form>
          </div>
          
         </>
        );
      };


      return (
     
        <Formik
          initialValues={props.initialValues}
          onSubmit={props.onSubmit}
         validationSchema={schema}
        >
          {renderForm}
        </Formik>
     
    );

      
}
export default FormComponent;