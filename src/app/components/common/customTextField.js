import React from "react";

import { TextField } from "@mui/material";

const FieldStyle = {
  borderRadius: "3px",
  width: "90%",
  fontSize: "initial",
};

const InputLabelPropsStyle = {
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
  color: "#00000075",
  shrink:"false"
};

// normal textfield with some default props
const CustomTextField = ({
  value,
  label,
  name,
  type,
  validation,
  classes = "",
  otherProps,
  disabled = false,
  InputProps,
  multiline = false,
  placeholder = null,
}) => {
  return (
    <>
      <TextField
        className={`sign-textField ${classes}`}
        label={label}
        name={name}
        id={name}
        multiline={multiline}
        type={type || "text"}
        value={value}
        defaultValue={value}
        variant="outlined"
        sx={FieldStyle}
        InputLabelProps={{
          style: InputLabelPropsStyle,
        }}
        onChange={(event) => {
          validation?.setFieldValue(name, event.target.value);
        }}
        helperText={validation?.touched?.[name] && validation?.errors?.[name]}
        error={
          validation?.touched?.[name] && Boolean(validation?.errors?.[name])
        }
        disabled={disabled}
        {...otherProps}
        InputProps={InputProps}
        placeholder={placeholder}
      />
    </>
  );
};

export default CustomTextField;
