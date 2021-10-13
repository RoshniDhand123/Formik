import React, { useState } from "react";
import { TextField, InputAdornment, FormControl } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import './style.css';


const preZero = (n) => (n > 9 ? n : "0" + n);

const formatDate = (d) => {
  return `${d.getFullYear()}-${preZero(d.getMonth())}-${preZero(d.getDate())}`;
};

const iconComponentProps = (
  icon,
  { type, min_date, max_date, displayable },
  showPassword,
  onClick
) => ({
  InputProps: icon
    ? {
        startAdornment: (
          <InputAdornment
            position="end"
            className="visibility-icon"
            onClick={onClick}
          >
            {icon}
          </InputAdornment>
        ),
      }
    : type === "password" && displayable
    ? {
        endAdornment: (
          <InputAdornment position="end" className="visibility-icon">
            {!showPassword ? (
              <Visibility onClick={onClick} />
            ) : (
              <VisibilityOffIcon onClick={onClick} />
            )}
          </InputAdornment>
        ),
      }
    : type === "date"
    ? {
        inputProps: {
          max: max_date ? formatDate(max_date) : null,
          min: min_date ? formatDate(min_date) : null,
        },
      }
    : {},
});

export default ({
  icon,
  form: { touched, errors },
  field,
  labelTxt,
  styleInput = {},
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl id="custom-form" fullWidth>
      {labelTxt && <div className="label">{labelTxt}</div>}
      <TextField
        style={styleInput}
        margin="normal"
        className="primary"
        autoComplete="off"
        {...field}
        {...rest}
        {...iconComponentProps(icon, rest, showPassword, togglePassword)}
        type={rest.type === "password" && showPassword ? "text" : rest.type}
        fullWidth
      />

      {errors[field.name] && touched[field.name] && (
        <div className="error-text">
          {rest.create_err_msg
            ? rest.create_err_msg(field.value)
            : errors[field.name]}
        </div>
      )}
    </FormControl>
  );
};
