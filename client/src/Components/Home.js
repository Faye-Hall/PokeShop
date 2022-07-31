import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Main from "./Main";
import NavBar from "./NavBar";
import Alert from "./Alert";

function Home() {
  const isLoggedIn = document.cookie.length > 0;

  if (isLoggedIn) {
    return (
      <>
        <NavBar />
        <Container sx={{ marginY: 5 }}>
          <Grid container spacing={5}>
            <Main />
          </Grid>
        </Container>
      </>
    );
  } else
    return (
      <>
        <NavBar />
        <Alert />
        <Container className="disable_clicks" sx={{ marginY: 5 }}>
          <Grid container spacing={5}>
            <Main />
          </Grid>
        </Container>
      </>
    );
}
export default Home;
