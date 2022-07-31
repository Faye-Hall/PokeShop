import React from "react";
import PokeCard from "./PokeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavBar from "./NavBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "./Context";

function Cart() {
  const items = useCart();
  const totalPrice = items.reduce((total, b) => total + b.base_experience, 0);

  if (items.length === 0) {
    return (
      <>
        <NavBar />
        <h1>Your Cart is Currently Empty!</h1>
      </>
    );
  } else {
    return (
      <>
        <div>
          <NavBar />
          <h1>{"Your Cart Items:"}</h1>
          <Container sx={{ marginY: 5 }}>
            <Grid container spacing={5}>
              <PokeCard pokemon={items} />
            </Grid>
          </Container>
          <Typography
            className="total"
            sx={{
              fontSize: "40px",
              marginLeft: "42%",
              marginBottom: "10px",
              paddingBottom: "10px",
            }}
          >
            Total:{" "}
            {totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Button
            onClick={() => {
              alert("All Checked Out!");
              localStorage.clear();
              window.location.href = "/cart";
            }}
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
            Checkout
          </Button>
        </div>
      </>
    );
  }
}

export default Cart;
