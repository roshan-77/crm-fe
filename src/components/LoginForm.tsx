import React from "react";
import InputField from "./InputField";
import { Checkbox, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Card, CardContent, Box, Link } from "@mui/material";

function LoginForm() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        backgroundColor: "#f5f5f5", // Optional background color
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: "90%",
          maxWidth: 400, // Maximum width for the card
          padding: 2,
        }}
      >
        <CardContent>
          <InputField inputName="Email/User Name*" />
          <InputField inputName="Password*" />
          <FormControlLabel control={<Checkbox />} label="Remember Password" />
          <div style={{ marginBottom: "10px" }}>
            <Button variant="contained" color="success">
              LOGIN
            </Button>
          </div>
          <Link
            href="#"
            underline="hover"
            color="inherit"
            sx={{
              "&:hover": { color: "blue" },
            }}
          >
            Forgot Password
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginForm;
