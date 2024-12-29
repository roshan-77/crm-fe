import React, { useState } from "react";
import Box from "@mui/material";
import { Checkbox, TextField, Button } from "@mui/material";

interface LoginProps {
  inputName: string;
}

function InputField({ inputName }: LoginProps) {
  return (
    <div>
      <TextField
        id="outlined-textarea"
        label={inputName}
        multiline
        sx={{ marginBottom: 2, width: "100%" }}
      />
    </div>
  );
}

export default InputField;
