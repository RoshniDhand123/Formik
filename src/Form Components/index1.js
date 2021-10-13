import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Grid } from "@material-ui/core";
import{createSchema} from'./validations';
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
  const history= useHistory();
  const login=()=>{
    history.push('login');
    
    
  }

const schema = createSchema(props.fields);

   const renderField = (props) => {


 
        return (
          <Grid item xs={props.grid ||8}>
            <Field key={props.name} {...props} />
          </Grid>
        );
      };

  const renderForm = ({ handleSubmit }) => {
        const { fields, renderCustomSubmit, btn ,btn1} = props;
        return (
          <>
         
          <div className="form">
<Form className="container">
            <>
           
           <div className="ltext">
           <label htmlFor="Sign up">Sign up</label>
           </div>
              <Grid container spacing={1}>
                {fields.map(renderField)}
              </Grid>
             
              <div className="btns">
            
              {renderCustomSubmit || (
                <MyButton color ="primary" variant="contained" type="submit">
                  {btn}
                </MyButton>
              )}
              </div>
              <div className="btns1">
              <br/>
              <label className="label1" htmlFor="a">Already have an account ?</label>
              <a  style={{textDecoration:"none"}} href="/login">Log   in</a>
            
              
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