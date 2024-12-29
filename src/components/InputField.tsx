import React from "react";

interface LoginProps {
  inputName: string;
  inputType: string;
}

function InputField({ inputName, inputType }: LoginProps) {
  return (
    <div>
      {inputName}
      <input type={inputType} />
    </div>
  );
}

export default InputField;
