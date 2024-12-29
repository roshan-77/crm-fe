import React from "react";
import InputField from "./InputField";

function LoginForm() {
  return (
    <div>
      <InputField inputName="Email/User Name" inputType="input" />
      <InputField inputName="Password" inputType="input" />
      <InputField inputName="Remember me" inputType="checkbox" />
    </div>
  );
}

export default LoginForm;
