import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const token = document.cookie.substring(12);
axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

function Account() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [userName, setUserName] = useState(" ");

  const accountQuery = async () => {
    const response = await axios.get("/account");
    setUserName(response.data);
    console.log(response.data);
  };

  accountQuery();

  return (
    <>
      <NavBar />
      <Grid component="form" method="post" action="/delete">
        <div
          sx={{ backgroundColor: "rgb(185, 185, 185)" }}
          className="acct-form"
        >
          <label className="acct-label" htmlFor="username">
            username:
          </label>
          <input
            className="acct-input"
            readOnly
            type="text"
            name="username"
            value={userName}
          ></input>
        </div>
        <br />

        <Button
          type="submit"
          onSubmit={localStorage.clear()}
          sx={{
            marginLeft: "47%",
            marginBottom: "10px",
            backgroundColor: "Crimson",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "rgba(0,0,0,0.3)",
            "&:hover": { backgroundColor: "Crimson" },
          }}
          variant="contained"
        >
          Delete Account
        </Button>
      </Grid>
    </>
  );
}
export default Account;
