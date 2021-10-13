import Field from "../Form Components/Fields/index";

const fields = [
  {
    labelTxt: "Email",
    name: "email",
    placeholder: "email",
    type: "email",
    required: true,
    component: Field,
  },
  {
    labelTxt: "Password",
    name: "password",
    placeholder: "password",
    type: "password",
    component: Field,
    required: true,
    displayable:true
  },
];

export default fields;