import Field1 from "../Form Components/Fields/index1";

const fields1 =[
{
label:"Name",
name:"name",
type:"name",
placeholder:" Name *",
required:true,
component:Field1
},
{
    label:"email",
    name:"email",
    type:"email",
    placeholder:"Email Address *",
    required:true,
    component:Field1
    },
{
label:"password",
name:"password",
type:"password",
placeholder:"Password * ",
required:true,
component:Field1,
displayable:true

},
{
    label:"cpassword",
    name:"cpassword",
    type:"password",
    placeholder:" Confirm Password * ",
    required:true,
    component:Field1,
    displayable:true  
}

]
export  default fields1;