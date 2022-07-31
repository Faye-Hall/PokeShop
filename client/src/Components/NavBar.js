import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useCart } from "./Context";

const isLoggedIn = document.cookie.length > 0;
const logout = function () {
  localStorage.clear();
  document.cookie = "accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  window.location = "/";
};

export default function NavBar() {
  const items = useCart();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            onClick={() => {
              window.location.href = "/";
            }}
            className="logo"
            variant="body1"
            noWrap
            component="div"
          >
            PokéShop
          </Typography>
          <Stack direction="row" spacing={3}>
            <span
              className="account-cart-spans"
              onClick={() => {
                window.location.href = "/account";
              }}
            >
              <Typography className="account-icon">Account</Typography>

              <PersonRoundedIcon />
            </span>
            <span
              className="account-cart-spans"
              onClick={() => {
                window.location.href = "/cart";
              }}
            >
              <Typography>Cart</Typography>

              <Badge
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "Crimson",
                    left: "12px",
                    bottom: "10px",
                  },
                }}
                badgeContent={items.length}
                showZero
              >
                <ShoppingCartRoundedIcon className="cart-icon" />
              </Badge>
            </span>
          </Stack>

          <Link
            className="log-link"
            variant="text"
            onClick={() => {
              isLoggedIn ? logout() : (window.location.href = "/login");
            }}
            sx={{
              paddingRight: "10px",
              color: "white",
            }}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
