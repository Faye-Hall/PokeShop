import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import NavBar from "./NavBar";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />

      <Paper elevation={15} sx={{ width: "600px", marginLeft: "30%" }}>
        <Grid
          container
          component="form"
          method="post"
          action="/login"
          noValidate
          autoComplete="off"
          spacing={2}
          direction="column"
          sx={{ marginTop: "15%" }}
        >
          <Grid item alignItems="center">
            <Typography sx={{ marginLeft: "43%", fontSize: "20px" }}>
              Login!{" "}
              <CatchingPokemonIcon
                className="pokeball-icon"
                sx={{ fontSize: "30px" }}
              />
            </Typography>
          </Grid>

          <Grid item>
            <TextField
              name="username"
              value={formData.username}
              onChange={handleChange}
              sx={{
                width: 1,
                input: { textAlign: "center" },
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "rgba(0,0,0,0.3)",
                backgroundColor: "rgba(191, 191, 191,0.1)",
              }}
              InputProps={{ disableUnderline: true }}
              label="Username:"
              placeholder="Username"
              variant="filled"
            />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                width: 1,
                input: { textAlign: "center" },
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "rgba(0,0,0,0.3)",
                backgroundColor: "rgba(191, 191, 191,0.1)",
              }}
              InputProps={{ disableUnderline: true }}
              label="Password:"
              placeholder="Password"
              variant="filled"
              type="password"
            />
          </Grid>
          <Grid item>
            <Button
              className="signup-btn"
              type="submit"
              sx={{
                width: "100px",
                marginLeft: "43%",
                marginBottom: "10px",
                backgroundColor: "Crimson",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "rgba(0,0,0,0.3)",
                "&:hover": { backgroundColor: "Crimson" },
              }}
              variant="contained"
            >
              Login!
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
export default Login;
