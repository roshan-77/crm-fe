import React from "react";
import InputField from "./InputField";
import { Checkbox, Button } from "@mui/material";

import FormControlLabel from "@mui/material/FormControlLabel";

function LoginForm() {
  return (
    <div>
      <InputField inputName="Email/User Name*" />
      <InputField inputName="Password*" />
      <FormControlLabel control={<Checkbox />} label="Label" />
      <Button variant="contained" color="success">
        LOGIN
      </Button>
      <div color="success">Forgot Password</div>
    </div>
  );
}

export default LoginForm;
